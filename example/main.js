var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ImGui from "../imgui";
import * as ImGui_Impl from "./imgui_impl";
import { ImVec2 } from "../imgui";
import { ImVec4 } from "../imgui";
import { ShowDemoWindow } from "../imgui_demo";
import { MemoryEditor } from "../imgui_memory_editor";
let font = null;
let show_demo_window = true;
let show_another_window = false;
const clear_color = new ImVec4(0.45, 0.55, 0.60, 1.00);
const memory_editor = new MemoryEditor();
let show_sandbox_window = false;
let show_gamepad_window = false;
let show_movie_window = false;
/* static */ let f = 0.0;
/* static */ let counter = 0;
let done = false;
function LoadArrayBuffer(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.arrayBuffer();
    });
}
export default function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield ImGui.default();
        if (typeof (window) !== "undefined") {
            window.requestAnimationFrame(_init);
        }
        else {
            function _main() {
                return __awaiter(this, void 0, void 0, function* () {
                    yield _init();
                    for (let i = 0; i < 3; ++i) {
                        _loop(1 / 60);
                    }
                    yield _done();
                });
            }
            _main().catch(console.error);
        }
    });
}
function AddFontFromFileTTF(url, size_pixels, font_cfg = null, glyph_ranges = null) {
    return __awaiter(this, void 0, void 0, function* () {
        font_cfg = font_cfg || new ImGui.ImFontConfig();
        font_cfg.Name = font_cfg.Name || `${url.split(/[\\\/]/).pop()}, ${size_pixels.toFixed(0)}px`;
        return ImGui.GetIO().Fonts.AddFontFromMemoryTTF(yield LoadArrayBuffer(url), size_pixels, font_cfg, glyph_ranges);
    });
}
function _init() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Total allocated space (uordblks) @ _init:", ImGui.bind.mallinfo().uordblks);
        // Setup Dear ImGui binding
        ImGui.IMGUI_CHECKVERSION();
        ImGui.CreateContext();
        const io = ImGui.GetIO();
        // io.ConfigFlags |= ImGui.ConfigFlags.NavEnableKeyboard;  // Enable Keyboard Controls
        // Setup style
        ImGui.StyleColorsDark();
        //ImGui.StyleColorsClassic();
        // Load Fonts
        // - If no fonts are loaded, dear imgui will use the default font. You can also load multiple fonts and use ImGui::PushFont()/PopFont() to select them.
        // - AddFontFromFileTTF() will return the ImFont* so you can store it if you need to select the font among multiple.
        // - If the file cannot be loaded, the function will return NULL. Please handle those errors in your application (e.g. use an assertion, or display an error and quit).
        // - The fonts will be rasterized at a given size (w/ oversampling) and stored into a texture when calling ImFontAtlas::Build()/GetTexDataAsXXXX(), which ImGui_ImplXXXX_NewFrame below will call.
        // - Read 'misc/fonts/README.txt' for more instructions and details.
        // - Remember that in C/C++ if you want to include a backslash \ in a string literal you need to write a double backslash \\ !
        io.Fonts.AddFontDefault();
        // font = await AddFontFromFileTTF("../imgui/misc/fonts/Roboto-Medium.ttf", 16.0);
        // font = await AddFontFromFileTTF("../imgui/misc/fonts/Cousine-Regular.ttf", 15.0);
        // font = await AddFontFromFileTTF("../imgui/misc/fonts/DroidSans.ttf", 16.0);
        // font = await AddFontFromFileTTF("../imgui/misc/fonts/ProggyTiny.ttf", 10.0);
        // font = await AddFontFromFileTTF("c:\\Windows\\Fonts\\ArialUni.ttf", 18.0, null, io.Fonts.GetGlyphRangesJapanese());
        // font = await AddFontFromFileTTF("https://raw.githubusercontent.com/googlei18n/noto-cjk/master/NotoSansJP-Regular.otf", 18.0, null, io.Fonts.GetGlyphRangesJapanese());
        // ImGui.IM_ASSERT(font !== null);
        if (typeof (window) !== "undefined") {
            const output = document.getElementById("output") || document.body;
            const canvas = document.createElement("canvas");
            output.appendChild(canvas);
            canvas.tabIndex = 1;
            canvas.style.position = "absolute";
            canvas.style.left = "0px";
            canvas.style.right = "0px";
            canvas.style.top = "0px";
            canvas.style.bottom = "0px";
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, false);
            ImGui_Impl.Init(canvas);
        }
        else {
            ImGui_Impl.Init(null);
        }
        StartUpImage();
        StartUpVideo();
        if (typeof (window) !== "undefined") {
            window.requestAnimationFrame(_loop);
        }
    });
}
// Main loop
function _loop(time) {
    // Poll and handle events (inputs, window resize, etc.)
    // You can read the io.WantCaptureMouse, io.WantCaptureKeyboard flags to tell if dear imgui wants to use your inputs.
    // - When io.WantCaptureMouse is true, do not dispatch mouse input data to your main application.
    // - When io.WantCaptureKeyboard is true, do not dispatch keyboard input data to your main application.
    // Generally you may always pass all inputs to dear imgui, and hide them from your application based on those two flags.
    // Start the Dear ImGui frame
    ImGui_Impl.NewFrame(time);
    ImGui.NewFrame();
    // 1. Show the big demo window (Most of the sample code is in ImGui::ShowDemoWindow()! You can browse its code to learn more about Dear ImGui!).
    if (!done && show_demo_window) {
        done = /*ImGui.*/ ShowDemoWindow((value = show_demo_window) => show_demo_window = value);
    }
    // 2. Show a simple window that we create ourselves. We use a Begin/End pair to created a named window.
    {
        // static float f = 0.0f;
        // static int counter = 0;
        ImGui.Begin("Hello, world!"); // Create a window called "Hello, world!" and append into it.
        ImGui.Text("This is some useful text."); // Display some text (you can use a format strings too)
        ImGui.Checkbox("Demo Window", (value = show_demo_window) => show_demo_window = value); // Edit bools storing our windows open/close state
        ImGui.Checkbox("Another Window", (value = show_another_window) => show_another_window = value);
        ImGui.SliderFloat("float", (value = f) => f = value, 0.0, 1.0); // Edit 1 float using a slider from 0.0f to 1.0f
        ImGui.ColorEdit3("clear color", clear_color); // Edit 3 floats representing a color
        if (ImGui.Button("Button")) // Buttons return true when clicked (NB: most widgets return true when edited/activated)
            counter++;
        ImGui.SameLine();
        ImGui.Text(`counter = ${counter}`);
        ImGui.Text(`Application average ${(1000.0 / ImGui.GetIO().Framerate).toFixed(3)} ms/frame (${ImGui.GetIO().Framerate.toFixed(1)} FPS)`);
        ImGui.Checkbox("Memory Editor", (value = memory_editor.Open) => memory_editor.Open = value);
        if (memory_editor.Open)
            memory_editor.DrawWindow("Memory Editor", ImGui.bind.HEAP8.buffer);
        const mi = ImGui.bind.mallinfo();
        // ImGui.Text(`Total non-mmapped bytes (arena):       ${mi.arena}`);
        // ImGui.Text(`# of free chunks (ordblks):            ${mi.ordblks}`);
        // ImGui.Text(`# of free fastbin blocks (smblks):     ${mi.smblks}`);
        // ImGui.Text(`# of mapped regions (hblks):           ${mi.hblks}`);
        // ImGui.Text(`Bytes in mapped regions (hblkhd):      ${mi.hblkhd}`);
        ImGui.Text(`Max. total allocated space (usmblks):  ${mi.usmblks}`);
        // ImGui.Text(`Free bytes held in fastbins (fsmblks): ${mi.fsmblks}`);
        ImGui.Text(`Total allocated space (uordblks):      ${mi.uordblks}`);
        ImGui.Text(`Total free space (fordblks):           ${mi.fordblks}`);
        // ImGui.Text(`Topmost releasable block (keepcost):   ${mi.keepcost}`);
        if (ImGui.ImageButton(image_gl_texture, new ImVec2(48, 48))) {
            // show_demo_window = !show_demo_window;
            image_url = image_urls[(image_urls.indexOf(image_url) + 1) % image_urls.length];
            if (image_element) {
                image_element.src = image_url;
            }
        }
        if (ImGui.IsItemHovered()) {
            ImGui.BeginTooltip();
            ImGui.Text(image_url);
            ImGui.EndTooltip();
        }
        if (ImGui.Button("Sandbox Window")) {
            show_sandbox_window = true;
        }
        if (show_sandbox_window)
            ShowSandboxWindow("Sandbox Window", (value = show_sandbox_window) => show_sandbox_window = value);
        ImGui.SameLine();
        if (ImGui.Button("Gamepad Window")) {
            show_gamepad_window = true;
        }
        if (show_gamepad_window)
            ShowGamepadWindow("Gamepad Window", (value = show_gamepad_window) => show_gamepad_window = value);
        ImGui.SameLine();
        if (ImGui.Button("Movie Window")) {
            show_movie_window = true;
        }
        if (show_movie_window)
            ShowMovieWindow("Movie Window", (value = show_movie_window) => show_movie_window = value);
        if (font) {
            ImGui.PushFont(font);
            ImGui.Text(`${font.GetDebugName()}`);
            if (font.FindGlyphNoFallback(0x5929)) {
                ImGui.Text(`U+5929: \u5929`);
            }
            ImGui.PopFont();
        }
        ImGui.End();
    }
    // 3. Show another simple window.
    if (show_another_window) {
        ImGui.Begin("Another Window", (value = show_another_window) => show_another_window = value, ImGui.WindowFlags.AlwaysAutoResize);
        ImGui.Text("Hello from another window!");
        if (ImGui.Button("Close Me"))
            show_another_window = false;
        ImGui.End();
    }
    ImGui.EndFrame();
    // Rendering
    ImGui.Render();
    const gl = ImGui_Impl.gl;
    if (gl) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.clearColor(clear_color.x, clear_color.y, clear_color.z, clear_color.w);
        gl.clear(gl.COLOR_BUFFER_BIT);
        //gl.useProgram(0); // You may want this if using this code in an OpenGL 3+ context where shaders may be bound
    }
    const ctx = ImGui_Impl.ctx;
    if (ctx) {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = `rgba(${clear_color.x * 0xff}, ${clear_color.y * 0xff}, ${clear_color.z * 0xff}, ${clear_color.w})`;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    UpdateVideo();
    ImGui_Impl.RenderDrawData(ImGui.GetDrawData());
    if (typeof (window) !== "undefined") {
        window.requestAnimationFrame(done ? _done : _loop);
    }
}
function _done() {
    return __awaiter(this, void 0, void 0, function* () {
        const gl = ImGui_Impl.gl;
        if (gl) {
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.clearColor(clear_color.x, clear_color.y, clear_color.z, clear_color.w);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        const ctx = ImGui_Impl.ctx;
        if (ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        CleanUpImage();
        CleanUpVideo();
        // Cleanup
        ImGui_Impl.Shutdown();
        ImGui.DestroyContext();
        console.log("Total allocated space (uordblks) @ _done:", ImGui.bind.mallinfo().uordblks);
    });
}
function ShowHelpMarker(desc) {
    ImGui.TextDisabled("(?)");
    if (ImGui.IsItemHovered()) {
        ImGui.BeginTooltip();
        ImGui.PushTextWrapPos(ImGui.GetFontSize() * 35.0);
        ImGui.TextUnformatted(desc);
        ImGui.PopTextWrapPos();
        ImGui.EndTooltip();
    }
}
let source = [
    "ImGui.Text(\"Hello, world!\");",
    "ImGui.SliderFloat(\"float\",",
    "\t(value = f) => f = value,",
    "\t0.0, 1.0);",
    "",
].join("\n");
function ShowSandboxWindow(title, p_open = null) {
    ImGui.SetNextWindowSize(new ImVec2(320, 240), ImGui.Cond.FirstUseEver);
    ImGui.Begin(title, p_open);
    ImGui.Text("Source");
    ImGui.SameLine();
    ShowHelpMarker("Contents evaluated and appended to the window.");
    ImGui.PushItemWidth(-1);
    ImGui.InputTextMultiline("##source", (_ = source) => (source = _), 1024, ImVec2.ZERO, ImGui.InputTextFlags.AllowTabInput);
    ImGui.PopItemWidth();
    try {
        eval(source);
    }
    catch (e) {
        ImGui.TextColored(new ImVec4(1.0, 0.0, 0.0, 1.0), "error: ");
        ImGui.SameLine();
        ImGui.Text(e.message);
    }
    ImGui.End();
}
function ShowGamepadWindow(title, p_open = null) {
    ImGui.Begin(title, p_open, ImGui.WindowFlags.AlwaysAutoResize);
    const gamepads = (typeof (navigator) !== "undefined" && typeof (navigator.getGamepads) === "function") ? navigator.getGamepads() : [];
    if (gamepads.length > 0) {
        for (let i = 0; i < gamepads.length; ++i) {
            const gamepad = gamepads[i];
            ImGui.Text(`gamepad ${i} ${gamepad && gamepad.id}`);
            if (!gamepad) {
                continue;
            }
            ImGui.Text(`       `);
            for (let button = 0; button < gamepad.buttons.length; ++button) {
                ImGui.SameLine();
                ImGui.Text(`${button.toString(16)}`);
            }
            ImGui.Text(`buttons`);
            for (let button = 0; button < gamepad.buttons.length; ++button) {
                ImGui.SameLine();
                ImGui.Text(`${gamepad.buttons[button].value}`);
            }
            ImGui.Text(`axes`);
            for (let axis = 0; axis < gamepad.axes.length; ++axis) {
                ImGui.Text(`${axis}: ${gamepad.axes[axis].toFixed(2)}`);
            }
        }
    }
    else {
        ImGui.Text("connect a gamepad");
    }
    ImGui.End();
}
const image_urls = [
    "https://threejs.org/examples/textures/crate.gif",
    "https://threejs.org/examples/textures/sprite.png",
    "https://threejs.org/examples/textures/UV_Grid_Sm.jpg",
];
let image_url = image_urls[0];
let image_element = null;
let image_gl_texture = null;
function StartUpImage() {
    const gl = ImGui_Impl.gl;
    if (gl) {
        const width = 256;
        const height = 256;
        const pixels = new Uint8Array(4 * width * height);
        image_gl_texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, image_gl_texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        const image = image_element = new Image();
        image.crossOrigin = "anonymous";
        image.addEventListener("load", (event) => {
            gl.bindTexture(gl.TEXTURE_2D, image_gl_texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        });
        image.src = image_url;
    }
}
function CleanUpImage() {
    const gl = ImGui_Impl.gl;
    if (gl) {
        gl.deleteTexture(image_gl_texture);
        image_gl_texture = null;
        image_element = null;
    }
}
const video_urls = [
    "https://threejs.org/examples/textures/sintel.ogv",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
];
let video_url = video_urls[0];
let video_element = null;
let video_gl_texture = null;
let video_w = 640;
let video_h = 360;
let video_time_active = false;
let video_time = 0;
let video_duration = 0;
function StartUpVideo() {
    const gl = ImGui_Impl.gl;
    if (gl) {
        video_element = document.createElement("video");
        video_element.crossOrigin = "anonymous";
        video_element.src = video_url;
        video_element.load();
        const width = 256;
        const height = 256;
        const pixels = new Uint8Array(4 * width * height);
        video_gl_texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, video_gl_texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    }
}
function CleanUpVideo() {
    const gl = ImGui_Impl.gl;
    if (gl) {
        gl.deleteTexture(video_gl_texture);
        video_gl_texture = null;
        video_element = null;
    }
}
function UpdateVideo() {
    const gl = ImGui_Impl.gl;
    if (gl && video_element && video_element.readyState >= video_element.HAVE_CURRENT_DATA) {
        gl.bindTexture(gl.TEXTURE_2D, video_gl_texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video_element);
    }
}
function ShowMovieWindow(title, p_open = null) {
    ImGui.Begin(title, p_open, ImGui.WindowFlags.AlwaysAutoResize);
    if (video_element !== null) {
        if (p_open && !p_open()) {
            video_element.pause();
        }
        const w = video_element.videoWidth;
        const h = video_element.videoHeight;
        if (w > 0) {
            video_w = w;
        }
        if (h > 0) {
            video_h = h;
        }
        ImGui.BeginGroup();
        if (ImGui.BeginCombo("##urls", null, ImGui.ComboFlags.NoPreview | ImGui.ComboFlags.PopupAlignLeft)) {
            for (let n = 0; n < ImGui.IM_ARRAYSIZE(video_urls); n++) {
                if (ImGui.Selectable(video_urls[n])) {
                    video_url = video_urls[n];
                    console.log(video_url);
                    video_element.src = video_url;
                    video_element.autoplay = true;
                }
            }
            ImGui.EndCombo();
        }
        ImGui.SameLine();
        ImGui.PushItemWidth(video_w - 20);
        if (ImGui.InputText("##url", (value = video_url) => video_url = value)) {
            console.log(video_url);
            video_element.src = video_url;
        }
        ImGui.PopItemWidth();
        ImGui.EndGroup();
        if (ImGui.ImageButton(video_gl_texture, new ImVec2(video_w, video_h))) {
            if (video_element.readyState >= video_element.HAVE_CURRENT_DATA) {
                video_element.paused ? video_element.play() : video_element.pause();
            }
        }
        ImGui.BeginGroup();
        if (ImGui.Button(video_element.paused ? "Play" : "Stop")) {
            if (video_element.readyState >= video_element.HAVE_CURRENT_DATA) {
                video_element.paused ? video_element.play() : video_element.pause();
            }
        }
        ImGui.SameLine();
        if (!video_time_active) {
            video_time = video_element.currentTime;
            video_duration = video_element.duration || 0;
        }
        ImGui.SliderFloat("##time", (value = video_time) => video_time = value, 0, video_duration);
        const video_time_was_active = video_time_active;
        video_time_active = ImGui.IsItemActive();
        if (!video_time_active && video_time_was_active) {
            video_element.currentTime = video_time;
        }
        ImGui.EndGroup();
    }
    else {
        ImGui.Text("No Video Element");
    }
    ImGui.End();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxLQUFLLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELElBQUksSUFBSSxHQUF3QixJQUFJLENBQUM7QUFFckMsSUFBSSxnQkFBZ0IsR0FBWSxJQUFJLENBQUM7QUFDckMsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDekMsTUFBTSxXQUFXLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFL0QsTUFBTSxhQUFhLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7QUFFdkQsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDekMsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFDekMsSUFBSSxpQkFBaUIsR0FBWSxLQUFLLENBQUM7QUFFdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFXLEdBQUcsQ0FBQztBQUNqQyxZQUFZLENBQUMsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQztBQUUxQixTQUFlLGVBQWUsQ0FBQyxHQUFXOztRQUN0QyxNQUFNLFFBQVEsR0FBYSxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQUE7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