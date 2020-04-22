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
        define(["require", "exports", "../imgui"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ImGui = __importStar(require("../imgui"));
    let clipboard_text = "";
    let canvas = null;
    exports.gl = null;
    let g_ShaderHandle = null;
    let g_VertHandle = null;
    let g_FragHandle = null;
    let g_AttribLocationTex = null;
    let g_AttribLocationProjMtx = null;
    let g_AttribLocationPosition = -1;
    let g_AttribLocationUV = -1;
    let g_AttribLocationColor = -1;
    let g_VboHandle = null;
    let g_ElementsHandle = null;
    let g_FontTexture = null;
    exports.ctx = null;
    let prev_time = 0;
    function document_on_copy(event) {
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", clipboard_text);
        }
        // console.log(`${event.type}: "${clipboard_text}"`);
        event.preventDefault();
    }
    function document_on_cut(event) {
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", clipboard_text);
        }
        // console.log(`${event.type}: "${clipboard_text}"`);
        event.preventDefault();
    }
    function document_on_paste(event) {
        if (event.clipboardData) {
            clipboard_text = event.clipboardData.getData("text/plain");
        }
        // console.log(`${event.type}: "${clipboard_text}"`);
        event.preventDefault();
    }
    function window_on_resize() {
        if (canvas !== null) {
            const devicePixelRatio = window.devicePixelRatio || 1;
            canvas.width = Math.floor(canvas.scrollWidth * devicePixelRatio);
            canvas.height = Math.floor(canvas.scrollHeight * devicePixelRatio);
        }
    }
    function window_on_gamepadconnected(event /* GamepadEvent */) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", event.gamepad.index, event.gamepad.id, event.gamepad.buttons.length, event.gamepad.axes.length);
    }
    function window_on_gamepaddisconnected(event /* GamepadEvent */) {
        console.log("Gamepad disconnected at index %d: %s.", event.gamepad.index, event.gamepad.id);
    }
    function canvas_on_blur(event) {
        const io = ImGui.GetIO();
        io.KeyCtrl = false;
        io.KeyShift = false;
        io.KeyAlt = false;
        io.KeySuper = false;
        for (let i = 0; i < io.KeysDown.length; ++i) {
            io.KeysDown[i] = false;
        }
        for (let i = 0; i < io.MouseDown.length; ++i) {
            io.MouseDown[i] = false;
        }
    }
    function canvas_on_keydown(event) {
        // console.log(event.type, event.key, event.keyCode);
        const io = ImGui.GetIO();
        io.KeyCtrl = event.ctrlKey;
        io.KeyShift = event.shiftKey;
        io.KeyAlt = event.altKey;
        io.KeySuper = event.metaKey;
        ImGui.IM_ASSERT(event.keyCode >= 0 && event.keyCode < ImGui.IM_ARRAYSIZE(io.KeysDown));
        io.KeysDown[event.keyCode] = true;
        // forward to the keypress event
        if ( /*io.WantCaptureKeyboard ||*/event.key === "Tab") {
            event.preventDefault();
        }
    }
    function canvas_on_keyup(event) {
        // console.log(event.type, event.key, event.keyCode);
        const io = ImGui.GetIO();
        io.KeyCtrl = event.ctrlKey;
        io.KeyShift = event.shiftKey;
        io.KeyAlt = event.altKey;
        io.KeySuper = event.metaKey;
        ImGui.IM_ASSERT(event.keyCode >= 0 && event.keyCode < ImGui.IM_ARRAYSIZE(io.KeysDown));
        io.KeysDown[event.keyCode] = false;
        if (io.WantCaptureKeyboard) {
            event.preventDefault();
        }
    }
    function canvas_on_keypress(event) {
        // console.log(event.type, event.key, event.keyCode);
        const io = ImGui.GetIO();
        io.AddInputCharacter(event.charCode);
        if (io.WantCaptureKeyboard) {
            event.preventDefault();
        }
    }
    function canvas_on_pointermove(event) {
        const io = ImGui.GetIO();
        io.MousePos.x = event.offsetX;
        io.MousePos.y = event.offsetY;
        if (io.WantCaptureMouse) {
            event.preventDefault();
        }
    }
    // MouseEvent.button
    // A number representing a given button:
    // 0: Main button pressed, usually the left button or the un-initialized state
    // 1: Auxiliary button pressed, usually the wheel button or the middle button (if present)
    // 2: Secondary button pressed, usually the right button
    // 3: Fourth button, typically the Browser Back button
    // 4: Fifth button, typically the Browser Forward button
    const mouse_button_map = [0, 2, 1, 3, 4];
    function canvas_on_pointerdown(event) {
        const io = ImGui.GetIO();
        io.MousePos.x = event.offsetX;
        io.MousePos.y = event.offsetY;
        io.MouseDown[mouse_button_map[event.button]] = true;
        // if (io.WantCaptureMouse) {
        //     event.preventDefault();
        // }
    }
    function canvas_on_contextmenu(event) {
        const io = ImGui.GetIO();
        if (io.WantCaptureMouse) {
            event.preventDefault();
        }
    }
    function canvas_on_pointerup(event) {
        const io = ImGui.GetIO();
        io.MouseDown[mouse_button_map[event.button]] = false;
        if (io.WantCaptureMouse) {
            event.preventDefault();
        }
    }
    function canvas_on_wheel(event) {
        const io = ImGui.GetIO();
        let scale = 1.0;
        switch (event.deltaMode) {
            case event.DOM_DELTA_PIXEL:
                scale = 0.01;
                break;
            case event.DOM_DELTA_LINE:
                scale = 0.2;
                break;
            case event.DOM_DELTA_PAGE:
                scale = 1.0;
                break;
        }
        io.MouseWheelH = event.deltaX * scale;
        io.MouseWheel = -event.deltaY * scale; // Mouse wheel: 1 unit scrolls about 5 lines text.
        if (io.WantCaptureMouse) {
            event.preventDefault();
        }
    }
    function Init(value) {
        const io = ImGui.GetIO();
        if (typeof (window) !== "undefined") {
            io.BackendPlatformName = "imgui_impl_html5";
            ImGui.LoadIniSettingsFromMemory(window.localStorage.getItem("imgui.ini") || "");
        }
        if (typeof (navigator) !== "undefined") {
            io.ConfigMacOSXBehaviors = navigator.platform.match(/Mac/) !== null;
        }
        if (typeof (document) !== "undefined") {
            document.body.addEventListener("copy", document_on_copy);
            document.body.addEventListener("cut", document_on_cut);
            document.body.addEventListener("paste", document_on_paste);
        }
        io.SetClipboardTextFn = (user_data, text) => {
            clipboard_text = text;
            // console.log(`set clipboard_text: "${clipboard_text}"`);
            if (typeof navigator !== "undefined" && typeof navigator.clipboard !== "undefined") {
                // console.log(`clipboard.writeText: "${clipboard_text}"`);
                navigator.clipboard.writeText(clipboard_text).then(() => {
                    // console.log(`clipboard.writeText: "${clipboard_text}" done.`);
                });
            }
        };
        io.GetClipboardTextFn = (user_data) => {
            // if (typeof navigator !== "undefined" && typeof (navigator as any).clipboard !== "undefined") {
            //     console.log(`clipboard.readText: "${clipboard_text}"`);
            //     (navigator as any).clipboard.readText().then((text: string): void => {
            //         clipboard_text = text;
            //         console.log(`clipboard.readText: "${clipboard_text}" done.`);
            //     });
            // }
            // console.log(`get clipboard_text: "${clipboard_text}"`);
            return clipboard_text;
        };
        io.ClipboardUserData = null;
        if (typeof (window) !== "undefined") {
            window.addEventListener("resize", window_on_resize);
            window.addEventListener("gamepadconnected", window_on_gamepadconnected);
            window.addEventListener("gamepaddisconnected", window_on_gamepaddisconnected);
        }
        if (typeof (window) !== "undefined") {
            if (value instanceof (HTMLCanvasElement)) {
                value = value.getContext("webgl", { alpha: false }) || value.getContext("2d");
            }
            if (value instanceof (WebGLRenderingContext)) {
                io.BackendRendererName = "imgui_impl_webgl";
                canvas = value.canvas;
                exports.gl = value;
            }
            if (value instanceof (CanvasRenderingContext2D)) {
                io.BackendRendererName = "imgui_impl_ctx2d";
                canvas = value.canvas;
                exports.ctx = value;
            }
        }
        if (canvas !== null) {
            window_on_resize();
            canvas.style.touchAction = "none"; // Disable browser handling of all panning and zooming gestures.
            canvas.addEventListener("blur", canvas_on_blur);
            canvas.addEventListener("keydown", canvas_on_keydown);
            canvas.addEventListener("keyup", canvas_on_keyup);
            canvas.addEventListener("keypress", canvas_on_keypress);
            canvas.addEventListener("pointermove", canvas_on_pointermove);
            canvas.addEventListener("pointerdown", canvas_on_pointerdown);
            canvas.addEventListener("contextmenu", canvas_on_contextmenu);
            canvas.addEventListener("pointerup", canvas_on_pointerup);
            canvas.addEventListener("wheel", canvas_on_wheel);
        }
        // Setup back-end capabilities flags
        io.BackendFlags |= ImGui.BackendFlags.HasMouseCursors; // We can honor GetMouseCursor() values (optional)
        // Keyboard mapping. ImGui will use those indices to peek into the io.KeyDown[] array.
        io.KeyMap[ImGui.Key.Tab] = 9;
        io.KeyMap[ImGui.Key.LeftArrow] = 37;
        io.KeyMap[ImGui.Key.RightArrow] = 39;
        io.KeyMap[ImGui.Key.UpArrow] = 38;
        io.KeyMap[ImGui.Key.DownArrow] = 40;
        io.KeyMap[ImGui.Key.PageUp] = 33;
        io.KeyMap[ImGui.Key.PageDown] = 34;
        io.KeyMap[ImGui.Key.Home] = 36;
        io.KeyMap[ImGui.Key.End] = 35;
        io.KeyMap[ImGui.Key.Insert] = 45;
        io.KeyMap[ImGui.Key.Delete] = 46;
        io.KeyMap[ImGui.Key.Backspace] = 8;
        io.KeyMap[ImGui.Key.Space] = 32;
        io.KeyMap[ImGui.Key.Enter] = 13;
        io.KeyMap[ImGui.Key.Escape] = 27;
        io.KeyMap[ImGui.Key.A] = 65;
        io.KeyMap[ImGui.Key.C] = 67;
        io.KeyMap[ImGui.Key.V] = 86;
        io.KeyMap[ImGui.Key.X] = 88;
        io.KeyMap[ImGui.Key.Y] = 89;
        io.KeyMap[ImGui.Key.Z] = 90;
        CreateDeviceObjects();
    }
    exports.Init = Init;
    function Shutdown() {
        DestroyDeviceObjects();
        if (canvas !== null) {
            canvas.removeEventListener("blur", canvas_on_blur);
            canvas.removeEventListener("keydown", canvas_on_keydown);
            canvas.removeEventListener("keyup", canvas_on_keyup);
            canvas.removeEventListener("keypress", canvas_on_keypress);
            canvas.removeEventListener("pointermove", canvas_on_pointermove);
            canvas.removeEventListener("pointerdown", canvas_on_pointerdown);
            canvas.removeEventListener("contextmenu", canvas_on_contextmenu);
            canvas.removeEventListener("pointerup", canvas_on_pointerup);
            canvas.removeEventListener("wheel", canvas_on_wheel);
        }
        exports.gl = null;
        exports.ctx = null;
        canvas = null;
        if (typeof (window) !== "undefined") {
            window.removeEventListener("resize", window_on_resize);
            window.removeEventListener("gamepadconnected", window_on_gamepadconnected);
            window.removeEventListener("gamepaddisconnected", window_on_gamepaddisconnected);
        }
        if (typeof (document) !== "undefined") {
            document.body.removeEventListener("copy", document_on_copy);
            document.body.removeEventListener("cut", document_on_cut);
            document.body.removeEventListener("paste", document_on_paste);
        }
    }
    exports.Shutdown = Shutdown;
    function NewFrame(time) {
        const io = ImGui.GetIO();
        if (io.WantSaveIniSettings) {
            io.WantSaveIniSettings = false;
            if (typeof (window) !== "undefined") {
                window.localStorage.setItem("imgui.ini", ImGui.SaveIniSettingsToMemory());
            }
        }
        const w = canvas && canvas.scrollWidth || 640;
        const h = canvas && canvas.scrollHeight || 480;
        const display_w = exports.gl && exports.gl.drawingBufferWidth || w;
        const display_h = exports.gl && exports.gl.drawingBufferHeight || h;
        io.DisplaySize.x = w;
        io.DisplaySize.y = h;
        io.DisplayFramebufferScale.x = w > 0 ? (display_w / w) : 0;
        io.DisplayFramebufferScale.y = h > 0 ? (display_h / h) : 0;
        const dt = time - prev_time;
        prev_time = time;
        io.DeltaTime = dt / 1000;
        if (io.WantSetMousePos) {
            console.log("TODO: MousePos", io.MousePos.x, io.MousePos.y);
        }
        if (typeof (document) !== "undefined") {
            if (io.MouseDrawCursor) {
                document.body.style.cursor = "none";
            }
            else {
                switch (ImGui.GetMouseCursor()) {
                    case ImGui.MouseCursor.None:
                        document.body.style.cursor = "none";
                        break;
                    default:
                    case ImGui.MouseCursor.Arrow:
                        document.body.style.cursor = "default";
                        break;
                    case ImGui.MouseCursor.TextInput:
                        document.body.style.cursor = "text";
                        break; // When hovering over InputText, etc.
                    case ImGui.MouseCursor.ResizeAll:
                        document.body.style.cursor = "move";
                        break; // Unused
                    case ImGui.MouseCursor.ResizeNS:
                        document.body.style.cursor = "ns-resize";
                        break; // When hovering over an horizontal border
                    case ImGui.MouseCursor.ResizeEW:
                        document.body.style.cursor = "ew-resize";
                        break; // When hovering over a vertical border or a column
                    case ImGui.MouseCursor.ResizeNESW:
                        document.body.style.cursor = "nesw-resize";
                        break; // When hovering over the bottom-left corner of a window
                    case ImGui.MouseCursor.ResizeNWSE:
                        document.body.style.cursor = "nwse-resize";
                        break; // When hovering over the bottom-right corner of a window
                    case ImGui.MouseCursor.Hand:
                        document.body.style.cursor = "move";
                        break;
                }
            }
        }
        // Gamepad navigation mapping [BETA]
        for (let i = 0; i < io.NavInputs.length; ++i) {
            io.NavInputs[i] = 0.0;
        }
        if (io.ConfigFlags & ImGui.ConfigFlags.NavEnableGamepad) {
            // Update gamepad inputs
            const gamepads = (typeof (navigator) !== "undefined" && typeof (navigator.getGamepads) === "function") ? navigator.getGamepads() : [];
            for (let i = 0; i < gamepads.length; ++i) {
                const gamepad = gamepads[i];
                if (!gamepad) {
                    continue;
                }
                const buttons_count = gamepad.buttons.length;
                const axes_count = gamepad.axes.length;
                function MAP_BUTTON(NAV_NO, BUTTON_NO) {
                    if (!gamepad) {
                        return;
                    }
                    if (buttons_count > BUTTON_NO && gamepad.buttons[BUTTON_NO].pressed)
                        io.NavInputs[NAV_NO] = 1.0;
                }
                function MAP_ANALOG(NAV_NO, AXIS_NO, V0, V1) {
                    if (!gamepad) {
                        return;
                    }
                    let v = (axes_count > AXIS_NO) ? gamepad.axes[AXIS_NO] : V0;
                    v = (v - V0) / (V1 - V0);
                    if (v > 1.0)
                        v = 1.0;
                    if (io.NavInputs[NAV_NO] < v)
                        io.NavInputs[NAV_NO] = v;
                }
                // TODO: map input based on vendor and product id
                // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id
                const match = gamepad.id.match(/^([0-9a-f]{4})-([0-9a-f]{4})-.*$/);
                const match_chrome = gamepad.id.match(/^.*\(.*Vendor: ([0-9a-f]{4}) Product: ([0-9a-f]{4})\).*$/);
                const vendor = (match && match[1]) || (match_chrome && match_chrome[1]) || "0000";
                const product = (match && match[2]) || (match_chrome && match_chrome[2]) || "0000";
                switch (vendor + product) {
                    case "046dc216": // Logitech Logitech Dual Action (Vendor: 046d Product: c216)
                        MAP_BUTTON(ImGui.NavInput.Activate, 1); // Cross / A
                        MAP_BUTTON(ImGui.NavInput.Cancel, 2); // Circle / B
                        MAP_BUTTON(ImGui.NavInput.Menu, 0); // Square / X
                        MAP_BUTTON(ImGui.NavInput.Input, 3); // Triangle / Y
                        MAP_ANALOG(ImGui.NavInput.DpadLeft, 4, -0.3, -0.9); // D-Pad Left
                        MAP_ANALOG(ImGui.NavInput.DpadRight, 4, +0.3, +0.9); // D-Pad Right
                        MAP_ANALOG(ImGui.NavInput.DpadUp, 5, -0.3, -0.9); // D-Pad Up
                        MAP_ANALOG(ImGui.NavInput.DpadDown, 5, +0.3, +0.9); // D-Pad Down
                        MAP_BUTTON(ImGui.NavInput.FocusPrev, 4); // L1 / LB
                        MAP_BUTTON(ImGui.NavInput.FocusNext, 5); // R1 / RB
                        MAP_BUTTON(ImGui.NavInput.TweakSlow, 6); // L2 / LT
                        MAP_BUTTON(ImGui.NavInput.TweakFast, 7); // R2 / RT
                        MAP_ANALOG(ImGui.NavInput.LStickLeft, 0, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickRight, 0, +0.3, +0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickUp, 1, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickDown, 1, +0.3, +0.9);
                        break;
                    case "046dc21d": // Logitech Gamepad F310 (STANDARD GAMEPAD Vendor: 046d Product: c21d)
                        MAP_BUTTON(ImGui.NavInput.Activate, 0); // Cross / A
                        MAP_BUTTON(ImGui.NavInput.Cancel, 1); // Circle / B
                        MAP_BUTTON(ImGui.NavInput.Menu, 2); // Square / X
                        MAP_BUTTON(ImGui.NavInput.Input, 3); // Triangle / Y
                        MAP_BUTTON(ImGui.NavInput.DpadLeft, 14); // D-Pad Left
                        MAP_BUTTON(ImGui.NavInput.DpadRight, 15); // D-Pad Right
                        MAP_BUTTON(ImGui.NavInput.DpadUp, 12); // D-Pad Up
                        MAP_BUTTON(ImGui.NavInput.DpadDown, 13); // D-Pad Down
                        MAP_BUTTON(ImGui.NavInput.FocusPrev, 4); // L1 / LB
                        MAP_BUTTON(ImGui.NavInput.FocusNext, 5); // R1 / RB
                        MAP_ANALOG(ImGui.NavInput.TweakSlow, 6, +0.3, +0.9); // L2 / LT
                        MAP_ANALOG(ImGui.NavInput.TweakFast, 7, +0.3, +0.9); // R2 / RT
                        MAP_ANALOG(ImGui.NavInput.LStickLeft, 0, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickRight, 0, +0.3, +0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickUp, 1, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickDown, 1, +0.3, +0.9);
                        break;
                    case "2dc86001": // 8Bitdo SN30 Pro  8Bitdo SN30 Pro (Vendor: 2dc8 Product: 6001)
                    case "2dc86101": // 8Bitdo SN30 Pro (Vendor: 2dc8 Product: 6101)
                        MAP_BUTTON(ImGui.NavInput.Activate, 1); // Cross / A
                        MAP_BUTTON(ImGui.NavInput.Cancel, 0); // Circle / B
                        MAP_BUTTON(ImGui.NavInput.Menu, 4); // Square / X
                        MAP_BUTTON(ImGui.NavInput.Input, 3); // Triangle / Y
                        MAP_ANALOG(ImGui.NavInput.DpadLeft, 6, -0.3, -0.9); // D-Pad Left
                        MAP_ANALOG(ImGui.NavInput.DpadRight, 6, +0.3, +0.9); // D-Pad Right
                        MAP_ANALOG(ImGui.NavInput.DpadUp, 7, -0.3, -0.9); // D-Pad Up
                        MAP_ANALOG(ImGui.NavInput.DpadDown, 7, +0.3, +0.9); // D-Pad Down
                        MAP_BUTTON(ImGui.NavInput.FocusPrev, 6); // L1 / LB
                        MAP_BUTTON(ImGui.NavInput.FocusNext, 7); // R1 / RB
                        MAP_BUTTON(ImGui.NavInput.TweakSlow, 8); // L2 / LT
                        MAP_BUTTON(ImGui.NavInput.TweakFast, 9); // R2 / RT
                        MAP_ANALOG(ImGui.NavInput.LStickLeft, 0, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickRight, 0, +0.3, +0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickUp, 1, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickDown, 1, +0.3, +0.9);
                        break;
                    default: // standard gamepad: https://w3c.github.io/gamepad/#remapping
                        MAP_BUTTON(ImGui.NavInput.Activate, 0); // Cross / A
                        MAP_BUTTON(ImGui.NavInput.Cancel, 1); // Circle / B
                        MAP_BUTTON(ImGui.NavInput.Menu, 2); // Square / X
                        MAP_BUTTON(ImGui.NavInput.Input, 3); // Triangle / Y
                        MAP_BUTTON(ImGui.NavInput.DpadLeft, 14); // D-Pad Left
                        MAP_BUTTON(ImGui.NavInput.DpadRight, 15); // D-Pad Right
                        MAP_BUTTON(ImGui.NavInput.DpadUp, 12); // D-Pad Up
                        MAP_BUTTON(ImGui.NavInput.DpadDown, 13); // D-Pad Down
                        MAP_BUTTON(ImGui.NavInput.FocusPrev, 4); // L1 / LB
                        MAP_BUTTON(ImGui.NavInput.FocusNext, 5); // R1 / RB
                        MAP_BUTTON(ImGui.NavInput.TweakSlow, 6); // L2 / LT
                        MAP_BUTTON(ImGui.NavInput.TweakFast, 7); // R2 / RT
                        MAP_ANALOG(ImGui.NavInput.LStickLeft, 0, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickRight, 0, +0.3, +0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickUp, 1, -0.3, -0.9);
                        MAP_ANALOG(ImGui.NavInput.LStickDown, 1, +0.3, +0.9);
                        break;
                }
            }
        }
    }
    exports.NewFrame = NewFrame;
    function RenderDrawData(draw_data = ImGui.GetDrawData()) {
        const io = ImGui.GetIO();
        if (draw_data === null) {
            throw new Error();
        }
        exports.gl || exports.ctx || console.log(draw_data);
        // Avoid rendering when minimized, scale coordinates for retina displays (screen coordinates != framebuffer coordinates)
        const fb_width = io.DisplaySize.x * io.DisplayFramebufferScale.x;
        const fb_height = io.DisplaySize.y * io.DisplayFramebufferScale.y;
        if (fb_width === 0 || fb_height === 0) {
            return;
        }
        draw_data.ScaleClipRects(io.DisplayFramebufferScale);
        // Backup GL state
        const last_active_texture = exports.gl && exports.gl.getParameter(exports.gl.ACTIVE_TEXTURE) || null;
        const last_program = exports.gl && exports.gl.getParameter(exports.gl.CURRENT_PROGRAM) || null;
        const last_texture = exports.gl && exports.gl.getParameter(exports.gl.TEXTURE_BINDING_2D) || null;
        const last_array_buffer = exports.gl && exports.gl.getParameter(exports.gl.ARRAY_BUFFER_BINDING) || null;
        const last_element_array_buffer = exports.gl && exports.gl.getParameter(exports.gl.ELEMENT_ARRAY_BUFFER_BINDING) || null;
        // GLint last_polygon_mode[2]; glGetIntegerv(GL_POLYGON_MODE, last_polygon_mode);
        const last_viewport = exports.gl && exports.gl.getParameter(exports.gl.VIEWPORT) || null;
        const last_scissor_box = exports.gl && exports.gl.getParameter(exports.gl.SCISSOR_BOX) || null;
        const last_blend_src_rgb = exports.gl && exports.gl.getParameter(exports.gl.BLEND_SRC_RGB) || null;
        const last_blend_dst_rgb = exports.gl && exports.gl.getParameter(exports.gl.BLEND_DST_RGB) || null;
        const last_blend_src_alpha = exports.gl && exports.gl.getParameter(exports.gl.BLEND_SRC_ALPHA) || null;
        const last_blend_dst_alpha = exports.gl && exports.gl.getParameter(exports.gl.BLEND_DST_ALPHA) || null;
        const last_blend_equation_rgb = exports.gl && exports.gl.getParameter(exports.gl.BLEND_EQUATION_RGB) || null;
        const last_blend_equation_alpha = exports.gl && exports.gl.getParameter(exports.gl.BLEND_EQUATION_ALPHA) || null;
        const last_enable_blend = exports.gl && exports.gl.getParameter(exports.gl.BLEND) || null;
        const last_enable_cull_face = exports.gl && exports.gl.getParameter(exports.gl.CULL_FACE) || null;
        const last_enable_depth_test = exports.gl && exports.gl.getParameter(exports.gl.DEPTH_TEST) || null;
        const last_enable_scissor_test = exports.gl && exports.gl.getParameter(exports.gl.SCISSOR_TEST) || null;
        // Setup render state: alpha-blending enabled, no face culling, no depth testing, scissor enabled, polygon fill
        exports.gl && exports.gl.enable(exports.gl.BLEND);
        exports.gl && exports.gl.blendEquation(exports.gl.FUNC_ADD);
        exports.gl && exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
        exports.gl && exports.gl.disable(exports.gl.CULL_FACE);
        exports.gl && exports.gl.disable(exports.gl.DEPTH_TEST);
        exports.gl && exports.gl.enable(exports.gl.SCISSOR_TEST);
        // glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
        // Setup viewport, orthographic projection matrix
        // Our visible imgui space lies from draw_data->DisplayPps (top left) to draw_data->DisplayPos+data_data->DisplaySize (bottom right). DisplayMin is typically (0,0) for single viewport apps.
        exports.gl && exports.gl.viewport(0, 0, fb_width, fb_height);
        const L = draw_data.DisplayPos.x;
        const R = draw_data.DisplayPos.x + draw_data.DisplaySize.x;
        const T = draw_data.DisplayPos.y;
        const B = draw_data.DisplayPos.y + draw_data.DisplaySize.y;
        const ortho_projection = new Float32Array([
            2.0 / (R - L), 0.0, 0.0, 0.0,
            0.0, 2.0 / (T - B), 0.0, 0.0,
            0.0, 0.0, -1.0, 0.0,
            (R + L) / (L - R), (T + B) / (B - T), 0.0, 1.0,
        ]);
        exports.gl && exports.gl.useProgram(g_ShaderHandle);
        exports.gl && exports.gl.uniform1i(g_AttribLocationTex, 0);
        exports.gl && g_AttribLocationProjMtx && exports.gl.uniformMatrix4fv(g_AttribLocationProjMtx, false, ortho_projection);
        // Render command lists
        exports.gl && exports.gl.bindBuffer(exports.gl.ARRAY_BUFFER, g_VboHandle);
        exports.gl && exports.gl.enableVertexAttribArray(g_AttribLocationPosition);
        exports.gl && exports.gl.enableVertexAttribArray(g_AttribLocationUV);
        exports.gl && exports.gl.enableVertexAttribArray(g_AttribLocationColor);
        exports.gl && exports.gl.vertexAttribPointer(g_AttribLocationPosition, 2, exports.gl.FLOAT, false, ImGui.ImDrawVertSize, ImGui.ImDrawVertPosOffset);
        exports.gl && exports.gl.vertexAttribPointer(g_AttribLocationUV, 2, exports.gl.FLOAT, false, ImGui.ImDrawVertSize, ImGui.ImDrawVertUVOffset);
        exports.gl && exports.gl.vertexAttribPointer(g_AttribLocationColor, 4, exports.gl.UNSIGNED_BYTE, true, ImGui.ImDrawVertSize, ImGui.ImDrawVertColOffset);
        // Draw
        const pos = draw_data.DisplayPos;
        const idx_buffer_type = exports.gl && ((ImGui.ImDrawIdxSize === 4) ? exports.gl.UNSIGNED_INT : exports.gl.UNSIGNED_SHORT) || 0;
        draw_data.IterateDrawLists((draw_list) => {
            exports.gl || exports.ctx || console.log(draw_list);
            exports.gl || exports.ctx || console.log("VtxBuffer.length", draw_list.VtxBuffer.length);
            exports.gl || exports.ctx || console.log("IdxBuffer.length", draw_list.IdxBuffer.length);
            let idx_buffer_offset = 0;
            exports.gl && exports.gl.bindBuffer(exports.gl.ARRAY_BUFFER, g_VboHandle);
            exports.gl && exports.gl.bufferData(exports.gl.ARRAY_BUFFER, draw_list.VtxBuffer, exports.gl.STREAM_DRAW);
            exports.gl && exports.gl.bindBuffer(exports.gl.ELEMENT_ARRAY_BUFFER, g_ElementsHandle);
            exports.gl && exports.gl.bufferData(exports.gl.ELEMENT_ARRAY_BUFFER, draw_list.IdxBuffer, exports.gl.STREAM_DRAW);
            draw_list.IterateDrawCmds((draw_cmd) => {
                exports.gl || exports.ctx || console.log(draw_cmd);
                exports.gl || exports.ctx || console.log("ElemCount", draw_cmd.ElemCount);
                exports.gl || exports.ctx || console.log("ClipRect", draw_cmd.ClipRect.x, fb_height - draw_cmd.ClipRect.w, draw_cmd.ClipRect.z - draw_cmd.ClipRect.x, draw_cmd.ClipRect.w - draw_cmd.ClipRect.y);
                exports.gl || exports.ctx || console.log("TextureId", draw_cmd.TextureId);
                if (!exports.gl && !exports.ctx) {
                    console.log("i: pos.x pos.y uv.x uv.y col");
                    for (let i = 0; i < Math.min(3, draw_cmd.ElemCount); ++i) {
                        const view = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i * ImGui.ImDrawVertSize);
                        console.log(`${i}: ${view.pos[0].toFixed(2)} ${view.pos[1].toFixed(2)} ${view.uv[0].toFixed(5)} ${view.uv[1].toFixed(5)} ${("00000000" + view.col[0].toString(16)).substr(-8)}`);
                    }
                }
                if (draw_cmd.UserCallback !== null) {
                    // User callback (registered via ImDrawList::AddCallback)
                    draw_cmd.UserCallback(draw_list, draw_cmd);
                }
                else {
                    const clip_rect = new ImGui.ImVec4(draw_cmd.ClipRect.x - pos.x, draw_cmd.ClipRect.y - pos.y, draw_cmd.ClipRect.z - pos.x, draw_cmd.ClipRect.w - pos.y);
                    if (clip_rect.x < fb_width && clip_rect.y < fb_height && clip_rect.z >= 0.0 && clip_rect.w >= 0.0) {
                        // Apply scissor/clipping rectangle
                        exports.gl && exports.gl.scissor(clip_rect.x, fb_height - clip_rect.w, clip_rect.z - clip_rect.x, clip_rect.w - clip_rect.y);
                        // Bind texture, Draw
                        exports.gl && exports.gl.activeTexture(exports.gl.TEXTURE0);
                        exports.gl && exports.gl.bindTexture(exports.gl.TEXTURE_2D, draw_cmd.TextureId);
                        exports.gl && exports.gl.drawElements(exports.gl.TRIANGLES, draw_cmd.ElemCount, idx_buffer_type, idx_buffer_offset);
                        if (exports.ctx) {
                            exports.ctx.save();
                            exports.ctx.beginPath();
                            exports.ctx.rect(clip_rect.x, clip_rect.y, clip_rect.z - clip_rect.x, clip_rect.w - clip_rect.y);
                            exports.ctx.clip();
                            const idx = ImGui.ImDrawIdxSize === 4 ?
                                new Uint32Array(draw_list.IdxBuffer.buffer, draw_list.IdxBuffer.byteOffset + idx_buffer_offset) :
                                new Uint16Array(draw_list.IdxBuffer.buffer, draw_list.IdxBuffer.byteOffset + idx_buffer_offset);
                            for (let i = 0; i < draw_cmd.ElemCount; i += 3) {
                                const i0 = idx[i + 0];
                                const i1 = idx[i + 1];
                                const i2 = idx[i + 2];
                                const v0 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i0 * ImGui.ImDrawVertSize);
                                const v1 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i1 * ImGui.ImDrawVertSize);
                                const v2 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i2 * ImGui.ImDrawVertSize);
                                const i3 = idx[i + 3];
                                const i4 = idx[i + 4];
                                const i5 = idx[i + 5];
                                const v3 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i3 * ImGui.ImDrawVertSize);
                                const v4 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i4 * ImGui.ImDrawVertSize);
                                const v5 = new ImGui.ImDrawVert(draw_list.VtxBuffer.buffer, draw_list.VtxBuffer.byteOffset + i5 * ImGui.ImDrawVertSize);
                                let quad = true;
                                let minmin = v0;
                                let minmax = v0;
                                let maxmin = v0;
                                let maxmax = v0;
                                for (const v of [v1, v2, v3, v4, v5]) {
                                    let found = false;
                                    if (v.pos[0] <= minmin.pos[0] && v.pos[1] <= minmin.pos[1]) {
                                        minmin = v;
                                        found = true;
                                    }
                                    if (v.pos[0] <= minmax.pos[0] && v.pos[1] >= minmax.pos[1]) {
                                        minmax = v;
                                        found = true;
                                    }
                                    if (v.pos[0] >= maxmin.pos[0] && v.pos[1] <= maxmin.pos[1]) {
                                        maxmin = v;
                                        found = true;
                                    }
                                    if (v.pos[0] >= maxmax.pos[0] && v.pos[1] >= maxmax.pos[1]) {
                                        maxmax = v;
                                        found = true;
                                    }
                                    if (!found) {
                                        quad = false;
                                    }
                                }
                                quad = quad && (minmin.pos[0] === minmax.pos[0]);
                                quad = quad && (maxmin.pos[0] === maxmax.pos[0]);
                                quad = quad && (minmin.pos[1] === maxmin.pos[1]);
                                quad = quad && (minmax.pos[1] === maxmax.pos[1]);
                                if (quad) {
                                    if (minmin.uv[0] < 0.01 && minmin.uv[1] < 0.01) {
                                        // one vertex color
                                        exports.ctx.beginPath();
                                        exports.ctx.rect(minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                        exports.ctx.fillStyle = `rgba(${v0.col[0] >> 0 & 0xff}, ${v0.col[0] >> 8 & 0xff}, ${v0.col[0] >> 16 & 0xff}, ${(v0.col[0] >> 24 & 0xff) / 0xff})`;
                                        exports.ctx.fill();
                                    }
                                    else {
                                        // no vertex color
                                        const image = draw_cmd.TextureId;
                                        exports.ctx.drawImage(image, minmin.uv[0] * image.width, minmin.uv[1] * image.height, (maxmax.uv[0] - minmin.uv[0]) * image.width, (maxmax.uv[1] - minmin.uv[1]) * image.height, minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                        // ctx.beginPath();
                                        // ctx.rect(minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                        // ctx.strokeStyle = "yellow";
                                        // ctx.stroke();
                                    }
                                    i += 3;
                                }
                                else {
                                    // one vertex color, no texture
                                    exports.ctx.beginPath();
                                    exports.ctx.moveTo(v0.pos[0], v0.pos[1]);
                                    exports.ctx.lineTo(v1.pos[0], v1.pos[1]);
                                    exports.ctx.lineTo(v2.pos[0], v2.pos[1]);
                                    exports.ctx.closePath();
                                    exports.ctx.fillStyle = `rgba(${v0.col[0] >> 0 & 0xff}, ${v0.col[0] >> 8 & 0xff}, ${v0.col[0] >> 16 & 0xff}, ${(v0.col[0] >> 24 & 0xff) / 0xff})`;
                                    exports.ctx.fill();
                                }
                            }
                            exports.ctx.restore();
                        }
                    }
                }
                idx_buffer_offset += draw_cmd.ElemCount * ImGui.ImDrawIdxSize;
            });
        });
        // Restore modified GL state
        exports.gl && (last_program !== null) && exports.gl.useProgram(last_program);
        exports.gl && (last_texture !== null) && exports.gl.bindTexture(exports.gl.TEXTURE_2D, last_texture);
        exports.gl && (last_active_texture !== null) && exports.gl.activeTexture(last_active_texture);
        exports.gl && exports.gl.disableVertexAttribArray(g_AttribLocationPosition);
        exports.gl && exports.gl.disableVertexAttribArray(g_AttribLocationUV);
        exports.gl && exports.gl.disableVertexAttribArray(g_AttribLocationColor);
        exports.gl && (last_array_buffer !== null) && exports.gl.bindBuffer(exports.gl.ARRAY_BUFFER, last_array_buffer);
        exports.gl && (last_element_array_buffer !== null) && exports.gl.bindBuffer(exports.gl.ELEMENT_ARRAY_BUFFER, last_element_array_buffer);
        exports.gl && (last_blend_equation_rgb !== null && last_blend_equation_alpha !== null) && exports.gl.blendEquationSeparate(last_blend_equation_rgb, last_blend_equation_alpha);
        exports.gl && (last_blend_src_rgb !== null && last_blend_src_alpha !== null && last_blend_dst_rgb !== null && last_blend_dst_alpha !== null) && exports.gl.blendFuncSeparate(last_blend_src_rgb, last_blend_src_alpha, last_blend_dst_rgb, last_blend_dst_alpha);
        exports.gl && (last_enable_blend ? exports.gl.enable(exports.gl.BLEND) : exports.gl.disable(exports.gl.BLEND));
        exports.gl && (last_enable_cull_face ? exports.gl.enable(exports.gl.CULL_FACE) : exports.gl.disable(exports.gl.CULL_FACE));
        exports.gl && (last_enable_depth_test ? exports.gl.enable(exports.gl.DEPTH_TEST) : exports.gl.disable(exports.gl.DEPTH_TEST));
        exports.gl && (last_enable_scissor_test ? exports.gl.enable(exports.gl.SCISSOR_TEST) : exports.gl.disable(exports.gl.SCISSOR_TEST));
        // glPolygonMode(GL_FRONT_AND_BACK, (GLenum)last_polygon_mode[0]);
        exports.gl && (last_viewport !== null) && exports.gl.viewport(last_viewport[0], last_viewport[1], last_viewport[2], last_viewport[3]);
        exports.gl && (last_scissor_box !== null) && exports.gl.scissor(last_scissor_box[0], last_scissor_box[1], last_scissor_box[2], last_scissor_box[3]);
    }
    exports.RenderDrawData = RenderDrawData;
    function CreateFontsTexture() {
        const io = ImGui.GetIO();
        // Backup GL state
        const last_texture = exports.gl && exports.gl.getParameter(exports.gl.TEXTURE_BINDING_2D);
        // Build texture atlas
        // const width: number = 256;
        // const height: number = 256;
        // const pixels: Uint8Array = new Uint8Array(4 * width * height).fill(0xff);
        const { width, height, pixels } = io.Fonts.GetTexDataAsRGBA32(); // Load as RGBA 32-bits (75% of the memory is wasted, but default font is so small) because it is more likely to be compatible with user's existing shaders. If your ImTextureId represent a higher-level concept than just a GL texture id, consider calling GetTexDataAsAlpha8() instead to save on GPU memory.
        // console.log(`font texture ${width} x ${height} @ ${pixels.length}`);
        // Upload texture to graphics system
        g_FontTexture = exports.gl && exports.gl.createTexture();
        exports.gl && exports.gl.bindTexture(exports.gl.TEXTURE_2D, g_FontTexture);
        exports.gl && exports.gl.texParameteri(exports.gl.TEXTURE_2D, exports.gl.TEXTURE_MIN_FILTER, exports.gl.LINEAR);
        exports.gl && exports.gl.texParameteri(exports.gl.TEXTURE_2D, exports.gl.TEXTURE_MAG_FILTER, exports.gl.LINEAR);
        // gl && gl.pixelStorei(gl.UNPACK_ROW_LENGTH); // WebGL2
        exports.gl && exports.gl.texImage2D(exports.gl.TEXTURE_2D, 0, exports.gl.RGBA, width, height, 0, exports.gl.RGBA, exports.gl.UNSIGNED_BYTE, pixels);
        // Store our identifier
        io.Fonts.TexID = g_FontTexture || { foo: "bar" };
        // console.log("font texture id", g_FontTexture);
        if (exports.ctx) {
            const image_canvas = document.createElement("canvas");
            image_canvas.width = width;
            image_canvas.height = height;
            const image_ctx = image_canvas.getContext("2d");
            if (image_ctx === null) {
                throw new Error();
            }
            const image_data = image_ctx.getImageData(0, 0, width, height);
            image_data.data.set(pixels);
            image_ctx.putImageData(image_data, 0, 0);
            io.Fonts.TexID = image_canvas;
        }
        // Restore modified GL state
        exports.gl && last_texture && exports.gl.bindTexture(exports.gl.TEXTURE_2D, last_texture);
    }
    exports.CreateFontsTexture = CreateFontsTexture;
    function DestroyFontsTexture() {
        const io = ImGui.GetIO();
        io.Fonts.TexID = null;
        exports.gl && exports.gl.deleteTexture(g_FontTexture);
        g_FontTexture = null;
    }
    exports.DestroyFontsTexture = DestroyFontsTexture;
    function CreateDeviceObjects() {
        const vertex_shader = [
            "uniform mat4 ProjMtx;",
            "attribute vec2 Position;",
            "attribute vec2 UV;",
            "attribute vec4 Color;",
            "varying vec2 Frag_UV;",
            "varying vec4 Frag_Color;",
            "void main() {",
            "	Frag_UV = UV;",
            "	Frag_Color = Color;",
            "	gl_Position = ProjMtx * vec4(Position.xy,0,1);",
            "}",
        ];
        const fragment_shader = [
            "precision mediump float;",
            "uniform sampler2D Texture;",
            "varying vec2 Frag_UV;",
            "varying vec4 Frag_Color;",
            "void main() {",
            "	gl_FragColor = Frag_Color * texture2D(Texture, Frag_UV);",
            "}",
        ];
        g_ShaderHandle = exports.gl && exports.gl.createProgram();
        g_VertHandle = exports.gl && exports.gl.createShader(exports.gl.VERTEX_SHADER);
        g_FragHandle = exports.gl && exports.gl.createShader(exports.gl.FRAGMENT_SHADER);
        exports.gl && exports.gl.shaderSource(g_VertHandle, vertex_shader.join("\n"));
        exports.gl && exports.gl.shaderSource(g_FragHandle, fragment_shader.join("\n"));
        exports.gl && exports.gl.compileShader(g_VertHandle);
        exports.gl && exports.gl.compileShader(g_FragHandle);
        exports.gl && exports.gl.attachShader(g_ShaderHandle, g_VertHandle);
        exports.gl && exports.gl.attachShader(g_ShaderHandle, g_FragHandle);
        exports.gl && exports.gl.linkProgram(g_ShaderHandle);
        g_AttribLocationTex = exports.gl && exports.gl.getUniformLocation(g_ShaderHandle, "Texture");
        g_AttribLocationProjMtx = exports.gl && exports.gl.getUniformLocation(g_ShaderHandle, "ProjMtx");
        g_AttribLocationPosition = exports.gl && exports.gl.getAttribLocation(g_ShaderHandle, "Position") || 0;
        g_AttribLocationUV = exports.gl && exports.gl.getAttribLocation(g_ShaderHandle, "UV") || 0;
        g_AttribLocationColor = exports.gl && exports.gl.getAttribLocation(g_ShaderHandle, "Color") || 0;
        g_VboHandle = exports.gl && exports.gl.createBuffer();
        g_ElementsHandle = exports.gl && exports.gl.createBuffer();
        CreateFontsTexture();
    }
    exports.CreateDeviceObjects = CreateDeviceObjects;
    function DestroyDeviceObjects() {
        DestroyFontsTexture();
        exports.gl && exports.gl.deleteBuffer(g_VboHandle);
        g_VboHandle = null;
        exports.gl && exports.gl.deleteBuffer(g_ElementsHandle);
        g_ElementsHandle = null;
        g_AttribLocationTex = null;
        g_AttribLocationProjMtx = null;
        g_AttribLocationPosition = -1;
        g_AttribLocationUV = -1;
        g_AttribLocationColor = -1;
        exports.gl && exports.gl.deleteProgram(g_ShaderHandle);
        g_ShaderHandle = null;
        exports.gl && exports.gl.deleteShader(g_VertHandle);
        g_VertHandle = null;
        exports.gl && exports.gl.deleteShader(g_FragHandle);
        g_FragHandle = null;
    }
    exports.DestroyDeviceObjects = DestroyDeviceObjects;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUvaW1ndWlfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxnREFBa0M7SUFFbEMsSUFBSSxjQUFjLEdBQVcsRUFBRSxDQUFDO0lBRWhDLElBQUksTUFBTSxHQUE2QixJQUFJLENBQUM7SUFFakMsUUFBQSxFQUFFLEdBQWlDLElBQUksQ0FBQztJQUNuRCxJQUFJLGNBQWMsR0FBd0IsSUFBSSxDQUFDO0lBQy9DLElBQUksWUFBWSxHQUF1QixJQUFJLENBQUM7SUFDNUMsSUFBSSxZQUFZLEdBQXVCLElBQUksQ0FBQztJQUM1QyxJQUFJLG1CQUFtQixHQUFnQyxJQUFJLENBQUM7SUFDNUQsSUFBSSx1QkFBdUIsR0FBZ0MsSUFBSSxDQUFDO0lBQ2hFLElBQUksd0JBQXdCLEdBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxrQkFBa0IsR0FBVSxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLHFCQUFxQixHQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksV0FBVyxHQUF1QixJQUFJLENBQUM7SUFDM0MsSUFBSSxnQkFBZ0IsR0FBdUIsSUFBSSxDQUFDO0lBQ2hELElBQUksYUFBYSxHQUF3QixJQUFJLENBQUM7SUFFbkMsUUFBQSxHQUFHLEdBQW9DLElBQUksQ0FBQztJQUV2RCxJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7SUFFMUIsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFxQjtRQUMzQyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDckIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QscURBQXFEO1FBQ3JELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxlQUFlLENBQUMsS0FBcUI7UUFDMUMsSUFBSSxL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QUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFF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RyxDQUFDLENBQUMsQ0FBQyxjQUFjO3dCQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXO3dCQUNsRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU07b0JBQ04sS0FBSyxVQUFVLEVBQUUsc0VBQXNFO3dCQUN2RixVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO3dCQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO3dCQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN6RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjO3dCQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXO3dCQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN6RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNqRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNqRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU07b0JBQ04sS0FBSyxVQUFVLENBQUMsQ0FBQyxnRUFBZ0U7b0JBQ2pGLEtBQUssVUFBVSxFQUFFLCtDQUErQzt3QkFDaEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTt3QkFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTt3QkFDeEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTt3QkFDeEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTt3QkFDMUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYTt3QkFDcEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYzt3QkFDckUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVzt3QkFDbEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYTt3QkFDcEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTt3QkFDckQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTt3QkFDckQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTt3QkFDckQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTt3QkFDckQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxNQUFNO29CQUNOLFNBQVMsNkRBQTZEO3dCQUN0RSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO3dCQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO3dCQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN6RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjO3dCQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXO3dCQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhO3dCQUN6RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO3dCQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RELE1BQU07aUJBQ1Q7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQXhKRCw0QkF3SkM7SUFFRCxTQUFnQixjQUFjLENBQUMsWUFBcUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUNuRixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQUU7UUFFOUMsVUFBRSxJQUFJLFdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBDLHdIQUF3SDtRQUN4SCxNQUFNLFFBQVEsR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsT0FBTztTQUNWO1FBQ0QsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyRCxrQkFBa0I7UUFDbEIsTUFBTSxtQkFBbUIsR0FBa0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM1RixNQUFNLFlBQVksR0FBd0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM1RixNQUFNLFlBQVksR0FBd0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxDQUFDO1FBQy9GLE1BQU0saUJBQWlCLEdBQXVCLFVBQUUsSUFBSSxVQUFFLENBQUMsWUFBWSxDQUFDLFVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNyRyxNQUFNLHlCQUF5QixHQUF1QixVQUFFLElBQUksVUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDckgsaUZBQWlGO1FBQ2pGLE1BQU0sYUFBYSxHQUFzQixVQUFFLElBQUksVUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFFLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3BGLE1BQU0sZ0JBQWdCLEdBQXNCLFVBQUUsSUFBSSxVQUFFLENBQUMsWUFBWSxDQUFDLFVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDMUYsTUFBTSxrQkFBa0IsR0FBa0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUMxRixNQUFNLGtCQUFrQixHQUFrQixVQUFFLElBQUksVUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFFLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzFGLE1BQU0sb0JBQW9CLEdBQWtCLFVBQUUsSUFBSSxVQUFFLENBQUMsWUFBWSxDQUFDLFVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDOUYsTUFBTSxvQkFBb0IsR0FBa0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM5RixNQUFNLHVCQUF1QixHQUFrQixVQUFFLElBQUksVUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDcEcsTUFBTSx5QkFBeUIsR0FBa0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3hHLE1BQU0saUJBQWlCLEdBQXFCLFVBQUUsSUFBSSxVQUFFLENBQUMsWUFBWSxDQUFDLFVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDcEYsTUFBTSxxQkFBcUIsR0FBcUIsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM1RixNQUFNLHNCQUFzQixHQUFxQixVQUFFLElBQUksVUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFFLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzlGLE1BQU0sd0JBQXdCLEdBQXFCLFVBQUUsSUFBSSxVQUFFLENBQUMsWUFBWSxDQUFDLFVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUM7UUFFbEcsK0dBQStHO1FBQy9HLFVBQUUsSUFBSSxVQUFFLENBQUMsTUFBTSxDQUFDLFVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixVQUFFLElBQUksVUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsVUFBRSxJQUFJLFVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN6RCxVQUFFLElBQUksVUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsVUFBRSxJQUFJLFVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLFVBQUUsSUFBSSxVQUFFLENBQUMsTUFBTSxDQUFDLFVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyw2Q0FBNkM7UUFFN0MsaURBQWlEO1FBQ2pELDZMQUE2TDtRQUM3TCxVQUFFLElBQUksVUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsR0FBVyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBVyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsR0FBVyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBVyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLGdCQUFnQixHQUFpQixJQUFJLFlBQVksQ0FBQztZQUNwRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQU0sR0FBRyxFQUFpQixHQUFHLEVBQUUsR0FBRztZQUMvQyxHQUFHLEVBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBTyxHQUFHLEVBQUUsR0FBRztZQUMvQyxHQUFHLEVBQWdCLEdBQUcsRUFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRztZQUMvQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRyxHQUFHLEVBQUUsR0FBRztTQUNsRCxDQUFDLENBQUM7UUFDSCxVQUFFLElBQUksVUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxVQUFFLElBQUksVUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxVQUFFLElBQUksdUJBQXVCLElBQUksVUFBRSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXZHLHVCQUF1QjtRQUN2QixVQUFFLElBQUksVUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELFVBQUUsSUFBSSxVQUFFLENBQUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzRCxVQUFFLElBQUksVUFBRSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDckQsVUFBRSxJQUFJLFVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXhELFVBQUUsSUFBSSxVQUFFLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxFQUFFLFVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDNUgsVUFBRSxJQUFJLFVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsVUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNySCxVQUFFLElBQUksVUFBRSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBRSxVQUFFLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRWhJLE9BQU87UUFDUCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ2pDLE1BQU0sZUFBZSxHQUFXLFVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUEyQixFQUFRLEVBQUU7WUFDN0QsVUFBRSxJQUFJLFdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLFVBQUUsSUFBSSxXQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pFLFVBQUUsSUFBSSxXQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpFLElBQUksaUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1lBRWxDLFVBQUUsSUFBSSxVQUFFLENBQUMsVUFBVSxDQUFDLFVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbEQsVUFBRSxJQUFJLFVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxRSxVQUFFLElBQUksVUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUMvRCxVQUFFLElBQUksVUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFFLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbEYsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQXlCLEVBQVEsRUFBRTtnQkFDMUQsVUFBRSxJQUFJLFdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxVQUFFLElBQUksV0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUQsVUFBRSxJQUFJLFdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakwsVUFBRSxJQUFJLFdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxVQUFFLElBQUksQ0FBQyxXQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO29CQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN0RCxNQUFNLElBQUksR0FBcUIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3BMO2lCQUNKO2dCQUVELElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7b0JBQ2hDLHlEQUF5RDtvQkFDekQsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNILE1BQU0sU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZKLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7d0JBQy9GLG1DQUFtQzt3QkFDbkMsVUFBRSxJQUFJLFVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTdHLHFCQUFxQjt3QkFDckIsVUFBRSxJQUFJLFVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNwQyxVQUFFLElBQUksVUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDeEQsVUFBRSxJQUFJLFVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3dCQUU1RixJQUFJLFdBQUcsRUFBRTs0QkFDTCxXQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ1gsV0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUNoQixXQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pGLFdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDWCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNuQyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLENBQUM7NEJBQ3BHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQzVDLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFxQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FDMUksTUFBTSxFQUFFLEdBQXFCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dDQUMxSSxNQUFNLEVBQUUsR0FBcUIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7Z0NBQzFJLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLE1BQU0sRUFBRSxHQUFxQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FDMUksTUFBTSxFQUFFLEdBQXFCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dDQUMxSSxNQUFNLEVBQUUsR0FBcUIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7Z0NBQzFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQ0FDaEIsSUFBSSxNQUFNLEdBQXFCLEVBQUUsQ0FBQztnQ0FDbEMsSUFBSSxNQUFNLEdBQXFCLEVBQUUsQ0FBQztnQ0FDbEMsSUFBSSxNQUFNLEdBQXFCLEVBQUUsQ0FBQztnQ0FDbEMsSUFBSSxNQUFNLEdBQXFCLEVBQUUsQ0FBQztnQ0FDbEMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUUsRUFBRTtvQ0FDcEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO29DQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQzt3Q0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3FDQUFFO29DQUN6RixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQzt3Q0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3FDQUFFO29DQUN6RixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQzt3Q0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3FDQUFFO29DQUN6RixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQzt3Q0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3FDQUFFO29DQUN6RixJQUFJLENBQUMsS0FBSyxFQUFFO3dDQUFFLElBQUksR0FBRyxLQUFLLENBQUM7cUNBQUU7aUNBQ2hDO2dDQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDakQsSUFBSSxHQUFHLElBQUksSUFB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