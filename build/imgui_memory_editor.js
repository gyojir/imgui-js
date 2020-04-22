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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // #pragma once
    // #include <stdio.h>  // sprintf, scanf
    const ImGui = __importStar(require("./imgui"));
    const imgui_1 = require("./imgui");
    const imgui_2 = require("./imgui");
    const imgui_3 = require("./imgui");
    const imgui_4 = require("./imgui");
    const imgui_5 = require("./imgui");
    const imgui_6 = require("./imgui");
    class MemoryEditor {
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
            this.DataInputBuf = new imgui_4.ImStringBuffer(32, "");
            // char            AddrInputBuf[32];
            this.AddrInputBuf = new imgui_4.ImStringBuffer(32, "");
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
            ImGui.SetNextWindowSizeConstraints(new imgui_5.ImVec2(0.0, 0.0), new imgui_5.ImVec2(s.WindowWidth, Number.MAX_VALUE));
            // this.Open = true;
            // if (ImGui.Begin(title, &Open, ImGuiWindowFlags_NoScrollbar))
            if (ImGui.Begin(title, (value = this.Open) => this.Open = value, imgui_2.ImGuiWindowFlags.NoScrollbar)) {
                if (ImGui.IsWindowHovered(imgui_3.ImGuiHoveredFlags.RootAndChildWindows) && ImGui.IsMouseClicked(1))
                    ImGui.OpenPopup("context");
                this.DrawContents(mem_data, mem_size, base_display_addr);
                if (this.ContentsWidthChanged) {
                    this.CalcSizes(s, mem_size, base_display_addr);
                    ImGui.SetWindowSize(new imgui_5.ImVec2(s.WindowWidth, ImGui.GetWindowSize().y));
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
            ImGui.BeginChild("##scrolling", new imgui_5.ImVec2(0, -footer_height_to_reserve));
            const draw_list = ImGui.GetWindowDrawList();
            ImGui.PushStyleVar(ImGui.StyleVar.FramePadding, new imgui_5.ImVec2(0, 0));
            ImGui.PushStyleVar(ImGui.StyleVar.ItemSpacing, new imgui_5.ImVec2(0, 0));
            const line_total_count = 0 | ((mem_size + this.Rows - 1) / this.Rows);
            const clipper = new imgui_6.ImGuiListClipper(line_total_count, s.LineHeight);
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
                draw_list.AddLine(new imgui_5.ImVec2(window_pos.x + s.PosAsciiStart - s.GlyphWidth, window_pos.y), new imgui_5.ImVec2(window_pos.x + s.PosAsciiStart - s.GlyphWidth, window_pos.y + 9999), ImGui.GetColorU32(imgui_1.ImGuiCol.Border));
            const color_text = ImGui.GetColorU32(imgui_1.ImGuiCol.Text);
            const color_disabled = this.OptGreyOutZeroes ? ImGui.GetColorU32(imgui_1.ImGuiCol.TextDisabled) : color_text;
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
                        draw_list.AddRectFilled(pos, new imgui_5.ImVec2(pos.x + highlight_width, pos.y + s.LineHeight), this.HighlightColor);
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
                    if (ImGui.InvisibleButton("ascii", new imgui_5.ImVec2(s.PosAsciiEnd - s.PosAsciiStart, s.LineHeight))) {
                        this.DataEditingAddr = addr + ((ImGui.GetIO().MousePos.x - pos.x) / s.GlyphWidth);
                        this.DataEditingTakeFocus = true;
                    }
                    ImGui.PopID();
                    for (let n = 0; n < this.Rows && addr < mem_size; n++, addr++) {
                        if (addr === this.DataEditingAddr) {
                            draw_list.AddRectFilled(pos, new imgui_5.ImVec2(pos.x + s.GlyphWidth, pos.y + s.LineHeight), ImGui.GetColorU32(imgui_1.ImGuiCol.FrameBg));
                            draw_list.AddRectFilled(pos, new imgui_5.ImVec2(pos.x + s.GlyphWidth, pos.y + s.LineHeight), ImGui.GetColorU32(imgui_1.ImGuiCol.TextSelectedBg));
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
    exports.MemoryEditor = MemoryEditor;
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
    })(MemoryEditor = exports.MemoryEditor || (exports.MemoryEditor = {}));
});
// #undef _PRISizeT
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfbWVtb3J5X2VkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ltZ3VpX21lbW9yeV9lZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBQ2xFLHNFQUFzRTtBQUN0RSxpRUFBaUU7QUFDakUsRUFBRTtBQUNGLDREQUE0RDtBQUM1RCx5S0FBeUs7QUFDekssRUFBRTtBQUNGLFNBQVM7QUFDVCw2R0FBNkc7QUFDN0csNEtBQTRLO0FBQzVLLEVBQUU7QUFDRixTQUFTO0FBQ1Qsb0NBQW9DO0FBQ3BDLDRCQUE0QjtBQUM1QixnRUFBZ0U7QUFDaEUsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRixhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCLDhHQUE4RztBQUM5Ryw0RUFBNEU7QUFDNUUsc0hBQXNIO0FBQ3RILDZIQUE2SDtBQUM3SCwyREFBMkQ7QUFDM0Qsb0dBQW9HO0FBQ3BHLCtFQUErRTtBQUMvRSx5SUFBeUk7QUFDekksOElBQThJO0FBQzlJLDJMQUEyTDtBQUMzTCwwSEFBMEg7QUFDMUgsZ0dBQWdHO0FBQ2hHLHFEQUFxRDtBQUNyRCxFQUFFO0FBQ0YsYUFBYTtBQUNiLDhJQUE4STs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5SSxlQUFlO0lBQ2Ysd0NBQXdDO0lBRXhDLCtDQUFpQztJQUNqQyxtQ0FBbUM7SUFDbkMsbUNBQTJDO0lBQzNDLG1DQUE0QztJQUM1QyxtQ0FBeUM7SUFFekMsbUNBQWlDO0lBRWpDLG1DQUEyQztJQUkzQyxNQUFhLFlBQVk7UUFBekI7WUFFSSw0QkFBNEI7WUFFNUIsV0FBVztZQUNYLG1KQUFtSjtZQUM1SSxTQUFJLEdBQVksS0FBSyxDQUFDO1lBQzdCLDRHQUE0RztZQUNyRyxhQUFRLEdBQVksS0FBSyxDQUFDO1lBQ2pDLHlFQUF5RTtZQUNsRSxTQUFJLEdBQVcsRUFBRSxDQUFDO1lBQ3pCLHlFQUF5RTtZQUNsRSxpQkFBWSxHQUFZLElBQUksQ0FBQztZQUNwQyx5RUFBeUU7WUFD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