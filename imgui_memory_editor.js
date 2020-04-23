// Mini memory editor for Dear ImGui (to embed in your game/tools)
// Animated GIF: https://twitter.com/ocornut/status/894242704317530112
// Get latest version at http://www.github.com/ocornut/imgui_club
//
// You can adjust the keyboard repeat delay/rate in ImGuiIO.
// The code assume a mono-space font for simplicity! If you don't use the default font, use ImGui.PushFont()/PopFont() to switch to a mono-space font before caling this.
//
// Usage:
//   static MemoryEditor mem_edit_1;                                            // store your state somewhere
//   mem_edit_1.DrawWindow("Memory Editor", mem_block, mem_block_size, 0x0000); // create a window and draw memory editor (if you already have a window, use DrawContents())
//
// Usage:
//   static MemoryEditor mem_edit_2;
//   ImGui.Begin("MyWindow")
//   mem_edit_2.DrawContents(this, sizeof(*this), (size_t)this);
//   ImGui.End();
//
// Changelog:
// - v0.10: initial version
// - v0.11: always refresh active text input with the latest byte from source memory if it's not being edited.
// - v0.12: added this.OptMidRowsCount to allow extra spacing every XX rows.
// - v0.13: added optional ReadFn/WriteFn handlers to access memory via a function. various warning fixes for 64-bits.
// - v0.14: added GotoAddr member, added GotoAddrAndHighlight() and highlighting. fixed minor scrollbar glitch when resizing.
// - v0.15: added maximum window width. minor optimization.
// - v0.16: added OptGreyOutZeroes option. various sizing fixes when resizing using the "Rows" drag.
// - v0.17: added HighlightFn handler for optional non-contiguous highlighting.
// - v0.18: fixes for displaying 64-bits addresses, fixed mouse click gaps introduced in recent changes, cursor tracking scrolling fixes.
// - v0.19: fixed auto-focus of next byte leaving WantCaptureKeyboard=false for one frame. we now capture the keyboard during that transition.
// - v0.20: added options menu. added this.OptShowAscii checkbox. added optional HexII display. split Draw() in DrawWindow()/DrawContents(). fixing glyph width. refactoring/cleaning code.
// - v0.21: fixes for using DrawContents() in our own window. fixed HexII to actually be useful and not on the wrong side.
// - v0.22: clicking Ascii view select the byte in the Hex view. Ascii view highlight selection.
// - v0.23: fixed right-arrow triggering a byte write
//
// Todo/Bugs:
// - Arrows are being sent to the InputText() about to disappear which for LeftArrow makes the text cursor appear at position 1 for one frame.
// #pragma once
// #include <stdio.h>  // sprintf, scanf
import * as ImGui from "./imgui";
import { ImGuiCol } from "./imgui";
import { ImGuiWindowFlags } from "./imgui";
import { ImGuiHoveredFlags } from "./imgui";
import { ImStringBuffer } from "./imgui";
import { ImVec2 } from "./imgui";
import { ImGuiListClipper } from "./imgui";
export class MemoryEditor {
    constructor() {
        // typedef unsigned char u8;
        // Settings
        // bool            Open;                                   // = true   // set to false when DrawWindow() was closed. ignore if not using DrawWindow
        this.Open = false;
        // bool            ReadOnly;                               // = false  // set to true to disable any editing
        this.ReadOnly = false;
        // int             Rows;                                   // = 16     //
        this.Rows = 16;
        // bool            OptShowAscii;                           // = true   //
        this.OptShowAscii = true;
        // bool            OptShowHexII;                           // = false  //
        this.OptShowHexII = false;
        // bool            OptGreyOutZeroes;                       // = true   //
        this.OptGreyOutZeroes = true;
        // int             OptMidRowsCount;                        // = 8      // set to 0 to disable extra spacing between every mid-rows
        this.OptMidRowsCount = 8;
        // int             OptAddrDigitsCount;                     // = 0      // number of addr digits to display (default calculated based on maximum displayed addr)
        this.OptAddrDigitsCount = 0;
        // ImU32           HighlightColor;                         //          // color of highlight
        this.HighlightColor = ImGui.IM_COL32(255, 255, 255, 40);
        // u8              (*ReadFn)(u8* data, size_t off);        // = NULL   // optional handler to read bytes
        this.ReadFn = null;
        // void            (*WriteFn)(u8* data, size_t off, u8 d); // = NULL   // optional handler to write bytes
        this.WriteFn = null;
        // bool            (*HighlightFn)(u8* data, size_t off);   // = NULL   // optional handler to return Highlight property (to support non-contiguous highlighting)
        this.HighlightFn = null;
        // State/Internals
        // bool            ContentsWidthChanged;
        this.ContentsWidthChanged = false;
        // size_t          DataEditingAddr;
        this.DataEditingAddr = -1;
        // bool            DataEditingTakeFocus;
        this.DataEditingTakeFocus = false;
        // char            DataInputBuf[32];
        this.DataInputBuf = new ImStringBuffer(32, "");
        // char            AddrInputBuf[32];
        this.AddrInputBuf = new ImStringBuffer(32, "");
        // size_t          GotoAddr;
        this.GotoAddr = -1;
        // size_t          HighlightMin, HighlightMax;
        this.HighlightMin = -1;
        this.HighlightMax = -1;
    }
    GotoAddrAndHighlight(addr_min, addr_max) {
        this.GotoAddr = addr_min;
        this.HighlightMin = addr_min;
        this.HighlightMax = addr_max;
    }
    // struct Sizes
    // {
    //     int     AddrDigitsCount;
    //     float   LineHeight;
    //     float   GlyphWidth;
    //     float   HexCellWidth;
    //     float   SpacingBetweenMidRows;
    //     float   PosHexStart;
    //     float   PosHexEnd;
    //     float   PosAsciiStart;
    //     float   PosAsciiEnd;
    //     float   WindowWidth;
    // };
    CalcSizes(s, mem_size, base_display_addr) {
        const style = ImGui.GetStyle();
        s.AddrDigitsCount = this.OptAddrDigitsCount;
        if (s.AddrDigitsCount === 0)
            for (let n = base_display_addr + mem_size - 1; n > 0; n >>= 4)
                s.AddrDigitsCount++;
        s.LineHeight = ImGui.GetTextLineHeight();
        s.GlyphWidth = ImGui.CalcTextSize("F").x + 1; // We assume the font is mono-space
        s.HexCellWidth = Math.floor(s.GlyphWidth * 2.5); // "FF " we include trailing space in the width to easily catch clicks everywhere
        s.SpacingBetweenMidRows = Math.floor(s.HexCellWidth * 0.25); // Every this.OptMidRowsCount columns we add a bit of extra spacing
        s.PosHexStart = (s.AddrDigitsCount + 2) * s.GlyphWidth;
        s.PosHexEnd = s.PosHexStart + (s.HexCellWidth * this.Rows);
        s.PosAsciiStart = s.PosAsciiEnd = s.PosHexEnd;
        if (this.OptShowAscii) {
            s.PosAsciiStart = s.PosHexEnd + s.GlyphWidth * 1;
            if (this.OptMidRowsCount > 0)
                s.PosAsciiStart += ((this.Rows + this.OptMidRowsCount - 1) / this.OptMidRowsCount) * s.SpacingBetweenMidRows;
            s.PosAsciiEnd = s.PosAsciiStart + this.Rows * s.GlyphWidth;
        }
        s.WindowWidth = s.PosAsciiEnd + style.ScrollbarSize + style.WindowPadding.x * 2 + s.GlyphWidth;
    }
    // #ifdef _MSC_VER
    // #define _PRISizeT   "IX"
    // #else
    // #define _PRISizeT   "zX"
    // #endif
    static sprintf_PRISizeT(n, pad = 0) {
        return ("0".repeat(pad) + n.toString(16).toUpperCase()).substr(-pad);
    }
    static sscanf_PRISizeT(s) {
        return parseInt(s, 16);
    }
    // Standalone Memory Editor window
    DrawWindow(title, mem_data, mem_size = mem_data.byteLength, base_display_addr = 0x000) {
        const s = new MemoryEditor.Sizes();
        this.CalcSizes(s, mem_size, base_display_addr);
        // ImGui.SetNextWindowSizeConstraints(new ImVec2(0.0, 0.0), new ImVec2(s.WindowWidth, FLT_MAX));
        ImGui.SetNextWindowSizeConstraints(new ImVec2(0.0, 0.0), new ImVec2(s.WindowWidth, Number.MAX_VALUE));
        // this.Open = true;
        // if (ImGui.Begin(title, &Open, ImGuiWindowFlags_NoScrollbar))
        if (ImGui.Begin(title, (value = this.Open) => this.Open = value, ImGuiWindowFlags.NoScrollbar)) {
            if (ImGui.IsWindowHovered(ImGuiHoveredFlags.RootAndChildWindows) && ImGui.IsMouseClicked(1))
                ImGui.OpenPopup("context");
            this.DrawContents(mem_data, mem_size, base_display_addr);
            if (this.ContentsWidthChanged) {
                this.CalcSizes(s, mem_size, base_display_addr);
                ImGui.SetWindowSize(new ImVec2(s.WindowWidth, ImGui.GetWindowSize().y));
            }
        }
        ImGui.End();
    }
    // Memory Editor contents only
    DrawContents(mem_data, mem_size = mem_data.byteLength, base_display_addr = 0x0000) {
        const s = new MemoryEditor.Sizes();
        this.CalcSizes(s, mem_size, base_display_addr);
        const style = ImGui.GetStyle();
        const footer_height_to_reserve = ImGui.GetStyle().ItemSpacing.y + ImGui.GetFrameHeightWithSpacing(); // 1 separator, 1 input text
        ImGui.BeginChild("##scrolling", new ImVec2(0, -footer_height_to_reserve));
        const draw_list = ImGui.GetWindowDrawList();
        ImGui.PushStyleVar(ImGui.StyleVar.FramePadding, new ImVec2(0, 0));
        ImGui.PushStyleVar(ImGui.StyleVar.ItemSpacing, new ImVec2(0, 0));
        const line_total_count = 0 | ((mem_size + this.Rows - 1) / this.Rows);
        const clipper = new ImGuiListClipper(line_total_count, s.LineHeight);
        const visible_start_addr = clipper.DisplayStart * this.Rows;
        const visible_end_addr = clipper.DisplayEnd * this.Rows;
        let data_next = false;
        if (this.ReadOnly || this.DataEditingAddr >= mem_size)
            this.DataEditingAddr = -1;
        const data_editing_addr_backup = this.DataEditingAddr;
        let data_editing_addr_next = -1;
        if (this.DataEditingAddr !== -1) {
            // Move cursor but only apply on next frame so scrolling with be synchronized (because currently we can't change the scrolling while the window is being rendered)
            if (ImGui.IsKeyPressed(ImGui.GetKeyIndex(ImGui.Key.UpArrow)) && this.DataEditingAddr >= this.Rows) {
                data_editing_addr_next = this.DataEditingAddr - this.Rows;
                this.DataEditingTakeFocus = true;
            }
            else if (ImGui.IsKeyPressed(ImGui.GetKeyIndex(ImGui.Key.DownArrow)) && this.DataEditingAddr < mem_size - this.Rows) {
                data_editing_addr_next = this.DataEditingAddr + this.Rows;
                this.DataEditingTakeFocus = true;
            }
            else if (ImGui.IsKeyPressed(ImGui.GetKeyIndex(ImGui.Key.LeftArrow)) && this.DataEditingAddr > 0) {
                data_editing_addr_next = this.DataEditingAddr - 1;
                this.DataEditingTakeFocus = true;
            }
            else if (ImGui.IsKeyPressed(ImGui.GetKeyIndex(ImGui.Key.RightArrow)) && this.DataEditingAddr < mem_size - 1) {
                data_editing_addr_next = this.DataEditingAddr + 1;
                this.DataEditingTakeFocus = true;
            }
        }
        if (data_editing_addr_next !== -1 && (data_editing_addr_next / this.Rows) !== (data_editing_addr_backup / this.Rows)) {
            // Track cursor movements
            const scroll_offset = (0 | (data_editing_addr_next / this.Rows) - 0 | (data_editing_addr_backup / this.Rows));
            const scroll_desired = (scroll_offset < 0 && data_editing_addr_next < visible_start_addr + this.Rows * 2) || (scroll_offset > 0 && data_editing_addr_next > visible_end_addr - this.Rows * 2);
            if (scroll_desired)
                ImGui.SetScrollY(ImGui.GetScrollY() + scroll_offset * s.LineHeight);
        }
        // Draw vertical separator
        const window_pos = ImGui.GetWindowPos();
        if (this.OptShowAscii)
            draw_list.AddLine(new ImVec2(window_pos.x + s.PosAsciiStart - s.GlyphWidth, window_pos.y), new ImVec2(window_pos.x + s.PosAsciiStart - s.GlyphWidth, window_pos.y + 9999), ImGui.GetColorU32(ImGuiCol.Border));
        const color_text = ImGui.GetColorU32(ImGuiCol.Text);
        const color_disabled = this.OptGreyOutZeroes ? ImGui.GetColorU32(ImGuiCol.TextDisabled) : color_text;
        for (let line_i = clipper.DisplayStart; line_i < clipper.DisplayEnd; line_i++) // display only visible lines
         {
            let addr = (line_i * this.Rows);
            // ImGui.Text("%0*" _PRISizeT ": ", s.AddrDigitsCount, base_display_addr + addr);
            ImGui.Text(`${MemoryEditor.sprintf_PRISizeT(base_display_addr + addr, s.AddrDigitsCount)}: `);
            // Draw Hexadecimal
            for (let n = 0; n < this.Rows && addr < mem_size; n++, addr++) {
                let byte_pos_x = s.PosHexStart + s.HexCellWidth * n;
                if (this.OptMidRowsCount > 0)
                    byte_pos_x += (n / this.OptMidRowsCount) * s.SpacingBetweenMidRows;
                ImGui.SameLine(byte_pos_x);
                // Draw highlight
                if ((addr >= this.HighlightMin && addr < this.HighlightMax) || (this.HighlightFn && this.HighlightFn(mem_data, addr))) {
                    const pos = ImGui.GetCursorScreenPos();
                    let highlight_width = s.GlyphWidth * 2;
                    const is_next_byte_highlighted = (addr + 1 < mem_size) && ((this.HighlightMax !== -1 && addr + 1 < this.HighlightMax) || (this.HighlightFn && this.HighlightFn(mem_data, addr + 1) || false));
                    if (is_next_byte_highlighted || (n + 1 === this.Rows)) {
                        highlight_width = s.HexCellWidth;
                        if (this.OptMidRowsCount > 0 && n > 0 && (n + 1) < this.Rows && ((n + 1) % this.OptMidRowsCount) === 0)
                            highlight_width += s.SpacingBetweenMidRows;
                    }
                    draw_list.AddRectFilled(pos, new ImVec2(pos.x + highlight_width, pos.y + s.LineHeight), this.HighlightColor);
                }
                if (this.DataEditingAddr === addr) {
                    // Display text input on current byte
                    let data_write = false;
                    ImGui.PushID(addr);
                    // sprintf(AddrInputBuf, "%0*" _PRISizeT, s.AddrDigitsCount, base_display_addr + addr);
                    this.AddrInputBuf.buffer = MemoryEditor.sprintf_PRISizeT(base_display_addr + addr, s.AddrDigitsCount);
                    // sprintf(DataInputBuf, "%02X", ReadFn ? ReadFn(mem_data, addr) : mem_data[addr]);
                    this.DataInputBuf.buffer = MemoryEditor.sprintf_PRISizeT(this.ReadFn ? this.ReadFn(mem_data, addr) : new Uint8Array(mem_data)[addr], 2);
                    if (this.DataEditingTakeFocus) {
                        ImGui.SetKeyboardFocusHere();
                        ImGui.CaptureKeyboardFromApp(true);
                        // sprintf(AddrInputBuf, "%0*" _PRISizeT, s.AddrDigitsCount, base_display_addr + addr);
                        // this.AddrInputBuf.buffer = MemoryEditor.sprintf_PRISizeT(base_display_addr + addr, s.AddrDigitsCount);
                        // sprintf(DataInputBuf, "%02X", ReadFn ? ReadFn(mem_data, addr) : mem_data[addr]);
                        // this.DataInputBuf.buffer = MemoryEditor.sprintf_PRISizeT(this.ReadFn ? this.ReadFn(mem_data, addr) : new Uint8Array(mem_data)[addr], 2);
                    }
                    ImGui.PushItemWidth(s.GlyphWidth * 2);
                    // struct UserData
                    // {
                    //     // FIXME: We should have a way to retrieve the text edit cursor position more easily in the API, this is rather tedious. This is such a ugly mess we may be better off not using InputText() at all here.
                    //     static int Callback(ImGuiTextEditCallbackData* data)
                    //     {
                    //         UserData* user_data = (UserData*)data->UserData;
                    //         if (!data->HasSelection())
                    //             user_data->CursorPos = data->CursorPos;
                    //         if (data->SelectionStart === 0 && data->SelectionEnd === data->BufTextLen)
                    //         {
                    //             // When not editing a byte, always rewrite its content (this is a bit tricky, since InputText technically "owns" the master copy of the buffer we edit it in there)
                    //             data->DeleteChars(0, data->BufTextLen);
                    //             data->InsertChars(0, user_data->CurrentBufOverwrite);
                    //             data->SelectionStart = 0;
                    //             data->SelectionEnd = data->CursorPos = 2;
                    //         }
                    //         return 0;
                    //     }
                    //     char   CurrentBufOverwrite[3];  // Input
                    //     int    CursorPos;               // Output
                    // };
                    // FIXME: We should have a way to retrieve the text edit cursor position more easily in the API, this is rather tedious. This is such a ugly mess we may be better off not using InputText() at all here.
                    function UserData_Callback(data) {
                        const user_data = data.UserData;
                        if (!data.HasSelection())
                            user_data.CursorPos = data.CursorPos;
                        if (data.SelectionStart === 0 && data.SelectionEnd === data.BufTextLen) {
                            // When not editing a byte, always rewrite its content (this is a bit tricky, since InputText technically "owns" the master copy of the buffer we edit it in there)
                            data.DeleteChars(0, data.BufTextLen);
                            data.InsertChars(0, user_data.CurrentBufOverwrite);
                            data.SelectionStart = 0;
                            data.SelectionEnd = data.CursorPos = 2;
                        }
                        return 0;
                    }
                    // UserData user_data;
                    // user_data.CursorPos = -1;
                    const user_data = {
                        CurrentBufOverwrite: "",
                        CursorPos: -1
                    };
                    // sprintf(user_data.CurrentBufOverwrite, "%02X", ReadFn ? ReadFn(mem_data, addr) : mem_data[addr]);
                    user_data.CurrentBufOverwrite = MemoryEditor.sprintf_PRISizeT(this.ReadFn ? this.ReadFn(mem_data, addr) : new Uint8Array(mem_data)[addr], 2);
                    const flags = ImGui.InputTextFlags.CharsHexadecimal | ImGui.InputTextFlags.EnterReturnsTrue | ImGui.InputTextFlags.AutoSelectAll | ImGui.InputTextFlags.NoHorizontalScroll | ImGui.InputTextFlags.AlwaysInsertMode | ImGui.InputTextFlags.CallbackAlways;
                    // if (ImGui.InputText("##data", DataInputBuf, 32, flags, UserData::Callback, &user_data))
                    if (ImGui.InputText("##data", this.DataInputBuf, this.DataInputBuf.size, flags, UserData_Callback, user_data))
                        data_write = data_next = true;
                    else if (!this.DataEditingTakeFocus && !ImGui.IsItemActive())
                        this.DataEditingAddr = data_editing_addr_next = -1;
                    this.DataEditingTakeFocus = false;
                    ImGui.PopItemWidth();
                    if (user_data.CursorPos >= 2)
                        data_write = data_next = true;
                    if (data_editing_addr_next !== -1)
                        data_write = data_next = false;
                    // int data_input_value;
                    // if (data_write && sscanf(DataInputBuf, "%X", &data_input_value) === 1)
                    if (data_write) {
                        let data_input_value = MemoryEditor.sscanf_PRISizeT(this.DataInputBuf.buffer);
                        if (this.WriteFn)
                            // WriteFn(mem_data, addr, (u8)data_input_value);
                            this.WriteFn(mem_data, addr, data_input_value);
                        else
                            // mem_data[addr] = (u8)data_input_value;
                            new Uint8Array(mem_data)[addr] = data_input_value;
                    }
                    ImGui.PopID();
                }
                else {
                    // NB: The trailing space is not visible but ensure there's no gap that the mouse cannot click on.
                    // u8 b = ReadFn ? ReadFn(mem_data, addr) : mem_data[addr];
                    const b = this.ReadFn ? this.ReadFn(mem_data, addr) : new Uint8Array(mem_data)[addr];
                    if (this.OptShowHexII) {
                        if ((b >= 32 && b < 128))
                            // ImGui.Text(".%c ", b);
                            ImGui.Text(`.${String.fromCharCode(b)} `);
                        else if (b === 0xFF && this.OptGreyOutZeroes)
                            ImGui.TextDisabled("## ");
                        else if (b === 0x00)
                            ImGui.Text("   ");
                        else
                            // ImGui.Text("%02X ", b);
                            // ImGui.Text(`${("00" + b.toString(16).toUpperCase()).substr(-2)} `);
                            ImGui.Text(`${MemoryEditor.sprintf_PRISizeT(b, 2)} `);
                    }
                    else {
                        if (b === 0 && this.OptGreyOutZeroes)
                            ImGui.TextDisabled("00 ");
                        else
                            // ImGui.Text("%02X ", b);
                            // ImGui.Text(`${("00" + b.toString(16).toUpperCase()).substr(-2)} `);
                            ImGui.Text(`${MemoryEditor.sprintf_PRISizeT(b, 2)} `);
                    }
                    if (!this.ReadOnly && ImGui.IsItemHovered() && ImGui.IsMouseClicked(0)) {
                        this.DataEditingTakeFocus = true;
                        data_editing_addr_next = addr;
                    }
                }
            }
            if (this.OptShowAscii) {
                // Draw ASCII values
                ImGui.SameLine(s.PosAsciiStart);
                const pos = ImGui.GetCursorScreenPos();
                addr = line_i * this.Rows;
                ImGui.PushID(line_i);
                if (ImGui.InvisibleButton("ascii", new ImVec2(s.PosAsciiEnd - s.PosAsciiStart, s.LineHeight))) {
                    this.DataEditingAddr = addr + ((ImGui.GetIO().MousePos.x - pos.x) / s.GlyphWidth);
                    this.DataEditingTakeFocus = true;
                }
                ImGui.PopID();
                for (let n = 0; n < this.Rows && addr < mem_size; n++, addr++) {
                    if (addr === this.DataEditingAddr) {
                        draw_list.AddRectFilled(pos, new ImVec2(pos.x + s.GlyphWidth, pos.y + s.LineHeight), ImGui.GetColorU32(ImGuiCol.FrameBg));
                        draw_list.AddRectFilled(pos, new ImVec2(pos.x + s.GlyphWidth, pos.y + s.LineHeight), ImGui.GetColorU32(ImGuiCol.TextSelectedBg));
                    }
                    // unsigned char c = ReadFn ? ReadFn(mem_data, addr) : mem_data[addr];
                    const c = this.ReadFn ? this.ReadFn(mem_data, addr) : new Uint8Array(mem_data)[addr];
                    // char display_c = (c < 32 || c >= 128) ? '.' : c;
                    const display_c = (c < 32 || c >= 128) ? "." : String.fromCharCode(c);
                    // draw_list->AddText(pos, (display_c === '.') ? color_disabled : color_text, &display_c, &display_c + 1);
                    draw_list.AddText(pos, (display_c === ".") ? color_disabled : color_text, display_c);
                    pos.x += s.GlyphWidth;
                }
            }
        }
        clipper.End();
        clipper.delete();
        ImGui.PopStyleVar(2);
        ImGui.EndChild();
        if (data_next && this.DataEditingAddr < mem_size) {
            this.DataEditingAddr = this.DataEditingAddr + 1;
            this.DataEditingTakeFocus = true;
        }
        else if (data_editing_addr_next !== -1) {
            this.DataEditingAddr = data_editing_addr_next;
        }
        ImGui.Separator();
        // Options menu
        if (ImGui.Button("Options"))
            ImGui.OpenPopup("context");
        if (ImGui.BeginPopup("context")) {
            ImGui.PushItemWidth(56);
            // if (ImGui.DragInt("##rows", &Rows, 0.2f, 4, 32, "%.0f rows")) ContentsWidthChanged = true;
            if (ImGui.DragInt("##rows", (_ = this.Rows) => this.Rows = _, 0.2, 4, 32, "%.0f rows"))
                this.ContentsWidthChanged = true;
            ImGui.PopItemWidth();
            // ImGui.Checkbox("Show HexII", &OptShowHexII);
            ImGui.Checkbox("Show HexII", (_ = this.OptShowHexII) => this.OptShowHexII = _);
            // if (ImGui.Checkbox("Show Ascii", &this.OptShowAscii)) ContentsWidthChanged = true;
            if (ImGui.Checkbox("Show Ascii", (_ = this.OptShowAscii) => this.OptShowAscii = _))
                this.ContentsWidthChanged = true;
            // ImGui.Checkbox("Grey out zeroes", &OptGreyOutZeroes);
            ImGui.Checkbox("Grey out zeroes", (_ = this.OptGreyOutZeroes) => this.OptGreyOutZeroes = _);
            ImGui.EndPopup();
        }
        ImGui.SameLine();
        // ImGui.Text("Range %0*" _PRISizeT "..%0*" _PRISizeT, s.AddrDigitsCount, base_display_addr, s.AddrDigitsCount, base_display_addr + mem_size - 1);
        ImGui.Text(`Range ${MemoryEditor.sprintf_PRISizeT(base_display_addr, s.AddrDigitsCount)}..${MemoryEditor.sprintf_PRISizeT(base_display_addr + mem_size - 1, s.AddrDigitsCount)}`);
        ImGui.SameLine();
        ImGui.PushItemWidth((s.AddrDigitsCount + 1) * s.GlyphWidth + style.FramePadding.x * 2.0);
        // if (ImGui.InputText("##addr", AddrInputBuf, 32, ImGuiInputTextFlags_CharsHexadecimal | ImGuiInputTextFlags_EnterReturnsTrue))
        if (ImGui.InputText("##addr", this.AddrInputBuf, this.AddrInputBuf.size, ImGui.InputTextFlags.CharsHexadecimal | ImGui.InputTextFlags.EnterReturnsTrue)) {
            // size_t goto_addr;
            const goto_addr = MemoryEditor.sscanf_PRISizeT(this.AddrInputBuf.buffer);
            console.log("goto_addr", goto_addr.toString(16));
            // if (sscanf(AddrInputBuf, "%" _PRISizeT, &goto_addr) === 1)
            // {
            this.GotoAddr = goto_addr - base_display_addr;
            this.HighlightMin = this.HighlightMax = -1;
            // }
        }
        ImGui.PopItemWidth();
        if (this.GotoAddr !== -1) {
            if (this.GotoAddr < mem_size) {
                ImGui.BeginChild("##scrolling");
                ImGui.SetScrollFromPosY(ImGui.GetCursorStartPos().y + (this.GotoAddr / this.Rows) * ImGui.GetTextLineHeight());
                ImGui.EndChild();
                this.DataEditingAddr = this.GotoAddr;
                this.DataEditingTakeFocus = true;
            }
            this.GotoAddr = -1;
        }
        // Notify the main window of our ideal child content size (FIXME: we are missing an API to get the contents size from the child)
        ImGui.SetCursorPosX(s.WindowWidth);
    }
}
(function (MemoryEditor) {
    class Sizes {
        constructor() {
            this.AddrDigitsCount = 0;
            this.LineHeight = 0.0;
            this.GlyphWidth = 0.0;
            this.HexCellWidth = 0.0;
            this.SpacingBetweenMidRows = 0.0;
            this.PosHexStart = 0.0;
            this.PosHexEnd = 0.0;
            this.PosAsciiStart = 0.0;
            this.PosAsciiEnd = 0.0;
            this.WindowWidth = 0.0;
        }
    }
    MemoryEditor.Sizes = Sizes;
})(MemoryEditor || (MemoryEditor = {}));
// #undef _PRISizeT
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfbWVtb3J5X2VkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltZ3VpX21lbW9yeV9lZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBQ2xFLHNFQUFzRTtBQUN0RSxpRUFBaUU7QUFDakUsRUFBRTtBQUNGLDREQUE0RDtBQUM1RCx5S0FBeUs7QUFDekssRUFBRTtBQUNGLFNBQVM7QUFDVCw2R0FBNkc7QUFDN0csNEtBQTRLO0FBQzVLLEVBQUU7QUFDRixTQUFTO0FBQ1Qsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1QixnRUFBZ0U7QUFDaEUsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRixhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCLDhHQUE4RztBQUM5Ryw0RUFBNEU7QUFDNUUsc0hBQXNIO0FBQ3RILDZIQUE2SDtBQUM3SCwyREFBMkQ7QUFDM0Qsb0dBQW9HO0FBQ3BHLCtFQUErRTtBQUMvRSx5SUFBeUk7QUFDekksOElBQThJO0FBQzlJLDJMQUEyTDtBQUMzTCwwSEFBMEg7QUFDMUgsZ0dBQWdHO0FBQ2hHLHFEQUFxRDtBQUNyRCxFQUFFO0FBQ0YsYUFBYTtBQUNiLDhJQUE4STtBQUU5SSxlQUFlO0FBQ2Ysd0NBQXdDO0FBRXhDLE9BQU8sS0FBSyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFakMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBSTNDLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBRUksNEJBQTRCO1FB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