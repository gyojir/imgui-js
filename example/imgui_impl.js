import * as ImGui from "../imgui";
let clipboard_text = "";
let canvas = null;
export let gl = null;
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
export let ctx = null;
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
export function Init(value) {
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
            gl = value;
        }
        if (value instanceof (CanvasRenderingContext2D)) {
            io.BackendRendererName = "imgui_impl_ctx2d";
            canvas = value.canvas;
            ctx = value;
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
export function Shutdown() {
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
    gl = null;
    ctx = null;
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
export function NewFrame(time) {
    const io = ImGui.GetIO();
    if (io.WantSaveIniSettings) {
        io.WantSaveIniSettings = false;
        if (typeof (window) !== "undefined") {
            window.localStorage.setItem("imgui.ini", ImGui.SaveIniSettingsToMemory());
        }
    }
    const w = canvas && canvas.scrollWidth || 640;
    const h = canvas && canvas.scrollHeight || 480;
    const display_w = gl && gl.drawingBufferWidth || w;
    const display_h = gl && gl.drawingBufferHeight || h;
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
export function RenderDrawData(draw_data = ImGui.GetDrawData()) {
    const io = ImGui.GetIO();
    if (draw_data === null) {
        throw new Error();
    }
    gl || ctx || console.log(draw_data);
    // Avoid rendering when minimized, scale coordinates for retina displays (screen coordinates != framebuffer coordinates)
    const fb_width = io.DisplaySize.x * io.DisplayFramebufferScale.x;
    const fb_height = io.DisplaySize.y * io.DisplayFramebufferScale.y;
    if (fb_width === 0 || fb_height === 0) {
        return;
    }
    draw_data.ScaleClipRects(io.DisplayFramebufferScale);
    // Backup GL state
    const last_active_texture = gl && gl.getParameter(gl.ACTIVE_TEXTURE) || null;
    const last_program = gl && gl.getParameter(gl.CURRENT_PROGRAM) || null;
    const last_texture = gl && gl.getParameter(gl.TEXTURE_BINDING_2D) || null;
    const last_array_buffer = gl && gl.getParameter(gl.ARRAY_BUFFER_BINDING) || null;
    const last_element_array_buffer = gl && gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING) || null;
    // GLint last_polygon_mode[2]; glGetIntegerv(GL_POLYGON_MODE, last_polygon_mode);
    const last_viewport = gl && gl.getParameter(gl.VIEWPORT) || null;
    const last_scissor_box = gl && gl.getParameter(gl.SCISSOR_BOX) || null;
    const last_blend_src_rgb = gl && gl.getParameter(gl.BLEND_SRC_RGB) || null;
    const last_blend_dst_rgb = gl && gl.getParameter(gl.BLEND_DST_RGB) || null;
    const last_blend_src_alpha = gl && gl.getParameter(gl.BLEND_SRC_ALPHA) || null;
    const last_blend_dst_alpha = gl && gl.getParameter(gl.BLEND_DST_ALPHA) || null;
    const last_blend_equation_rgb = gl && gl.getParameter(gl.BLEND_EQUATION_RGB) || null;
    const last_blend_equation_alpha = gl && gl.getParameter(gl.BLEND_EQUATION_ALPHA) || null;
    const last_enable_blend = gl && gl.getParameter(gl.BLEND) || null;
    const last_enable_cull_face = gl && gl.getParameter(gl.CULL_FACE) || null;
    const last_enable_depth_test = gl && gl.getParameter(gl.DEPTH_TEST) || null;
    const last_enable_scissor_test = gl && gl.getParameter(gl.SCISSOR_TEST) || null;
    // Setup render state: alpha-blending enabled, no face culling, no depth testing, scissor enabled, polygon fill
    gl && gl.enable(gl.BLEND);
    gl && gl.blendEquation(gl.FUNC_ADD);
    gl && gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl && gl.disable(gl.CULL_FACE);
    gl && gl.disable(gl.DEPTH_TEST);
    gl && gl.enable(gl.SCISSOR_TEST);
    // glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    // Setup viewport, orthographic projection matrix
    // Our visible imgui space lies from draw_data->DisplayPps (top left) to draw_data->DisplayPos+data_data->DisplaySize (bottom right). DisplayMin is typically (0,0) for single viewport apps.
    gl && gl.viewport(0, 0, fb_width, fb_height);
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
    gl && gl.useProgram(g_ShaderHandle);
    gl && gl.uniform1i(g_AttribLocationTex, 0);
    gl && g_AttribLocationProjMtx && gl.uniformMatrix4fv(g_AttribLocationProjMtx, false, ortho_projection);
    // Render command lists
    gl && gl.bindBuffer(gl.ARRAY_BUFFER, g_VboHandle);
    gl && gl.enableVertexAttribArray(g_AttribLocationPosition);
    gl && gl.enableVertexAttribArray(g_AttribLocationUV);
    gl && gl.enableVertexAttribArray(g_AttribLocationColor);
    gl && gl.vertexAttribPointer(g_AttribLocationPosition, 2, gl.FLOAT, false, ImGui.ImDrawVertSize, ImGui.ImDrawVertPosOffset);
    gl && gl.vertexAttribPointer(g_AttribLocationUV, 2, gl.FLOAT, false, ImGui.ImDrawVertSize, ImGui.ImDrawVertUVOffset);
    gl && gl.vertexAttribPointer(g_AttribLocationColor, 4, gl.UNSIGNED_BYTE, true, ImGui.ImDrawVertSize, ImGui.ImDrawVertColOffset);
    // Draw
    const pos = draw_data.DisplayPos;
    const idx_buffer_type = gl && ((ImGui.ImDrawIdxSize === 4) ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT) || 0;
    draw_data.IterateDrawLists((draw_list) => {
        gl || ctx || console.log(draw_list);
        gl || ctx || console.log("VtxBuffer.length", draw_list.VtxBuffer.length);
        gl || ctx || console.log("IdxBuffer.length", draw_list.IdxBuffer.length);
        let idx_buffer_offset = 0;
        gl && gl.bindBuffer(gl.ARRAY_BUFFER, g_VboHandle);
        gl && gl.bufferData(gl.ARRAY_BUFFER, draw_list.VtxBuffer, gl.STREAM_DRAW);
        gl && gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, g_ElementsHandle);
        gl && gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, draw_list.IdxBuffer, gl.STREAM_DRAW);
        draw_list.IterateDrawCmds((draw_cmd) => {
            gl || ctx || console.log(draw_cmd);
            gl || ctx || console.log("ElemCount", draw_cmd.ElemCount);
            gl || ctx || console.log("ClipRect", draw_cmd.ClipRect.x, fb_height - draw_cmd.ClipRect.w, draw_cmd.ClipRect.z - draw_cmd.ClipRect.x, draw_cmd.ClipRect.w - draw_cmd.ClipRect.y);
            gl || ctx || console.log("TextureId", draw_cmd.TextureId);
            if (!gl && !ctx) {
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
                    gl && gl.scissor(clip_rect.x, fb_height - clip_rect.w, clip_rect.z - clip_rect.x, clip_rect.w - clip_rect.y);
                    // Bind texture, Draw
                    gl && gl.activeTexture(gl.TEXTURE0);
                    gl && gl.bindTexture(gl.TEXTURE_2D, draw_cmd.TextureId);
                    gl && gl.drawElements(gl.TRIANGLES, draw_cmd.ElemCount, idx_buffer_type, idx_buffer_offset);
                    if (ctx) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.rect(clip_rect.x, clip_rect.y, clip_rect.z - clip_rect.x, clip_rect.w - clip_rect.y);
                        ctx.clip();
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
                                    ctx.beginPath();
                                    ctx.rect(minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                    ctx.fillStyle = `rgba(${v0.col[0] >> 0 & 0xff}, ${v0.col[0] >> 8 & 0xff}, ${v0.col[0] >> 16 & 0xff}, ${(v0.col[0] >> 24 & 0xff) / 0xff})`;
                                    ctx.fill();
                                }
                                else {
                                    // no vertex color
                                    const image = draw_cmd.TextureId;
                                    ctx.drawImage(image, minmin.uv[0] * image.width, minmin.uv[1] * image.height, (maxmax.uv[0] - minmin.uv[0]) * image.width, (maxmax.uv[1] - minmin.uv[1]) * image.height, minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                    // ctx.beginPath();
                                    // ctx.rect(minmin.pos[0], minmin.pos[1], maxmax.pos[0] - minmin.pos[0], maxmax.pos[1] - minmin.pos[1]);
                                    // ctx.strokeStyle = "yellow";
                                    // ctx.stroke();
                                }
                                i += 3;
                            }
                            else {
                                // one vertex color, no texture
                                ctx.beginPath();
                                ctx.moveTo(v0.pos[0], v0.pos[1]);
                                ctx.lineTo(v1.pos[0], v1.pos[1]);
                                ctx.lineTo(v2.pos[0], v2.pos[1]);
                                ctx.closePath();
                                ctx.fillStyle = `rgba(${v0.col[0] >> 0 & 0xff}, ${v0.col[0] >> 8 & 0xff}, ${v0.col[0] >> 16 & 0xff}, ${(v0.col[0] >> 24 & 0xff) / 0xff})`;
                                ctx.fill();
                            }
                        }
                        ctx.restore();
                    }
                }
            }
            idx_buffer_offset += draw_cmd.ElemCount * ImGui.ImDrawIdxSize;
        });
    });
    // Restore modified GL state
    gl && (last_program !== null) && gl.useProgram(last_program);
    gl && (last_texture !== null) && gl.bindTexture(gl.TEXTURE_2D, last_texture);
    gl && (last_active_texture !== null) && gl.activeTexture(last_active_texture);
    gl && gl.disableVertexAttribArray(g_AttribLocationPosition);
    gl && gl.disableVertexAttribArray(g_AttribLocationUV);
    gl && gl.disableVertexAttribArray(g_AttribLocationColor);
    gl && (last_array_buffer !== null) && gl.bindBuffer(gl.ARRAY_BUFFER, last_array_buffer);
    gl && (last_element_array_buffer !== null) && gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, last_element_array_buffer);
    gl && (last_blend_equation_rgb !== null && last_blend_equation_alpha !== null) && gl.blendEquationSeparate(last_blend_equation_rgb, last_blend_equation_alpha);
    gl && (last_blend_src_rgb !== null && last_blend_src_alpha !== null && last_blend_dst_rgb !== null && last_blend_dst_alpha !== null) && gl.blendFuncSeparate(last_blend_src_rgb, last_blend_src_alpha, last_blend_dst_rgb, last_blend_dst_alpha);
    gl && (last_enable_blend ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND));
    gl && (last_enable_cull_face ? gl.enable(gl.CULL_FACE) : gl.disable(gl.CULL_FACE));
    gl && (last_enable_depth_test ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST));
    gl && (last_enable_scissor_test ? gl.enable(gl.SCISSOR_TEST) : gl.disable(gl.SCISSOR_TEST));
    // glPolygonMode(GL_FRONT_AND_BACK, (GLenum)last_polygon_mode[0]);
    gl && (last_viewport !== null) && gl.viewport(last_viewport[0], last_viewport[1], last_viewport[2], last_viewport[3]);
    gl && (last_scissor_box !== null) && gl.scissor(last_scissor_box[0], last_scissor_box[1], last_scissor_box[2], last_scissor_box[3]);
}
export function CreateFontsTexture() {
    const io = ImGui.GetIO();
    // Backup GL state
    const last_texture = gl && gl.getParameter(gl.TEXTURE_BINDING_2D);
    // Build texture atlas
    // const width: number = 256;
    // const height: number = 256;
    // const pixels: Uint8Array = new Uint8Array(4 * width * height).fill(0xff);
    const { width, height, pixels } = io.Fonts.GetTexDataAsRGBA32(); // Load as RGBA 32-bits (75% of the memory is wasted, but default font is so small) because it is more likely to be compatible with user's existing shaders. If your ImTextureId represent a higher-level concept than just a GL texture id, consider calling GetTexDataAsAlpha8() instead to save on GPU memory.
    // console.log(`font texture ${width} x ${height} @ ${pixels.length}`);
    // Upload texture to graphics system
    g_FontTexture = gl && gl.createTexture();
    gl && gl.bindTexture(gl.TEXTURE_2D, g_FontTexture);
    gl && gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl && gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    // gl && gl.pixelStorei(gl.UNPACK_ROW_LENGTH); // WebGL2
    gl && gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    // Store our identifier
    io.Fonts.TexID = g_FontTexture || { foo: "bar" };
    // console.log("font texture id", g_FontTexture);
    if (ctx) {
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
    gl && last_texture && gl.bindTexture(gl.TEXTURE_2D, last_texture);
}
export function DestroyFontsTexture() {
    const io = ImGui.GetIO();
    io.Fonts.TexID = null;
    gl && gl.deleteTexture(g_FontTexture);
    g_FontTexture = null;
}
export function CreateDeviceObjects() {
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
    g_ShaderHandle = gl && gl.createProgram();
    g_VertHandle = gl && gl.createShader(gl.VERTEX_SHADER);
    g_FragHandle = gl && gl.createShader(gl.FRAGMENT_SHADER);
    gl && gl.shaderSource(g_VertHandle, vertex_shader.join("\n"));
    gl && gl.shaderSource(g_FragHandle, fragment_shader.join("\n"));
    gl && gl.compileShader(g_VertHandle);
    gl && gl.compileShader(g_FragHandle);
    gl && gl.attachShader(g_ShaderHandle, g_VertHandle);
    gl && gl.attachShader(g_ShaderHandle, g_FragHandle);
    gl && gl.linkProgram(g_ShaderHandle);
    g_AttribLocationTex = gl && gl.getUniformLocation(g_ShaderHandle, "Texture");
    g_AttribLocationProjMtx = gl && gl.getUniformLocation(g_ShaderHandle, "ProjMtx");
    g_AttribLocationPosition = gl && gl.getAttribLocation(g_ShaderHandle, "Position") || 0;
    g_AttribLocationUV = gl && gl.getAttribLocation(g_ShaderHandle, "UV") || 0;
    g_AttribLocationColor = gl && gl.getAttribLocation(g_ShaderHandle, "Color") || 0;
    g_VboHandle = gl && gl.createBuffer();
    g_ElementsHandle = gl && gl.createBuffer();
    CreateFontsTexture();
}
export function DestroyDeviceObjects() {
    DestroyFontsTexture();
    gl && gl.deleteBuffer(g_VboHandle);
    g_VboHandle = null;
    gl && gl.deleteBuffer(g_ElementsHandle);
    g_ElementsHandle = null;
    g_AttribLocationTex = null;
    g_AttribLocationProjMtx = null;
    g_AttribLocationPosition = -1;
    g_AttribLocationUV = -1;
    g_AttribLocationColor = -1;
    gl && gl.deleteProgram(g_ShaderHandle);
    g_ShaderHandle = null;
    gl && gl.deleteShader(g_VertHandle);
    g_VertHandle = null;
    gl && gl.deleteShader(g_FragHandle);
    g_FragHandle = null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltZ3VpX2ltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFbEMsSUFBSSxjQUFjLEdBQVcsRUFBRSxDQUFDO0FBRWhDLElBQUksTUFBTSxHQUE2QixJQUFJLENBQUM7QUFFNUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFpQyxJQUFJLENBQUM7QUFDbkQsSUFBSSxjQUFjLEdBQXdCLElBQUksQ0FBQztBQUMvQyxJQUFJLFlBQVksR0FBdUIsSUFBSSxDQUFDO0FBQzVDLElBQUksWUFBWSxHQUF1QixJQUFJLENBQUM7QUFDNUMsSUFBSSxtQkFBbUIsR0FBZ0MsSUFBSSxDQUFDO0FBQzVELElBQUksdUJBQXVCLEdBQWdDLElBQUksQ0FBQztBQUNoRSxJQUFJLHdCQUF3QixHQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLElBQUksa0JBQWtCLEdBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsSUFBSSxxQkFBcUIsR0FBVSxDQUFDLENBQUMsQ0FBQztBQUN0QyxJQUFJLFdBQVcsR0FBdUIsSUFBSSxDQUFDO0FBQzNDLElBQUksZ0JBQWdCLEdBQXVCLElBQUksQ0FBQztBQUNoRCxJQUFJLGFBQWEsR0FBd0IsSUFBSSxDQUFDO0FBRTlDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBb0MsSUFBSSxDQUFDO0FBRXZELElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztBQUUxQixTQUFTLGdCQUFnQixDQUFDLEtBQXFCO0lBQzNDLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtRQUNyQixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDN0Q7SUFDRCxxREFBcUQ7SUFDckQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUFxQjtJ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QUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ2xFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3BFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsTUFBTTtnQkFDTixLQUFLLFVBQVUsRUFBRSxzRUFBc0U7b0JBQ3ZGLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQ3ZELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3hELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3hELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7b0JBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3pELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWM7b0JBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ3ZELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3pELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ2pFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ2pFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsTUFBTTtnQkFDTixLQUFLLFVBQVUsQ0FBQyxDQUFDLGdFQUFnRTtnQkFDakYsS0FBSyxVQUFVLEVBQUUsK0NBQStDO29CQUNoRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO29CQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO29CQUN4RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO29CQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhO29CQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjO29CQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXO29CQUNsRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhO29CQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO29CQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO29CQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO29CQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO29CQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELE1BQU07Z0JBQ04sU0FBUyw2REFBNkQ7b0JBQ3RFLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQ3ZELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3hELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3hELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7b0JBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3pELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWM7b0JBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ3ZELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWE7b0JBQ3pELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JELFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7b0JBQ3JE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QVMsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsQ0FBQzt3QkFDcEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDNUMsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQXFCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUMxSSxNQUFNLEVBQUUsR0FBcUIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQzFJLE1BQU0sRUFBRSxHQUFxQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDMUksTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsTUFBTSxFQUFFLEdBQXFCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUMxSSxNQUFNLEVBQUUsR0FBcUIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQzFJLE1BQU0sRUFBRSxHQUFxQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDMUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOzRCQUNoQixJQUFJLE1BQU0sR0FBcUIsRUFBRSxDQUFDOzRCQUNsQyxJQUFJLE1BQU0sR0FBcUIsRUFBRSxDQUFDOzRCQUNsQyxJQUFJLE1BQU0sR0FBcUIsRUFBRSxDQUFDOzRCQUNsQyxJQUFJLE1BQU0sR0FBcUIsRUFBRSxDQUFDOzRCQUNsQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFO2dDQUNwQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7Z0NBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29DQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUNBQUU7Z0NBQ3pGLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29DQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUNBQUU7Z0NBQ3pGLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29DQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUNBQUU7Z0NBQ3pGLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29DQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUNBQUU7Z0NBQ3pGLElBQUksQ0FBQyxLQUFLLEVBQUU7b0NBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQztpQ0FBRTs2QkFDaEM7NEJBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxD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