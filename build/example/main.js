var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        define(["require", "exports", "../imgui", "./imgui_impl", "../imgui", "../imgui", "../imgui_demo", "../imgui_memory_editor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ImGui = __importStar(require("../imgui"));
    const ImGui_Impl = __importStar(require("./imgui_impl"));
    const imgui_1 = require("../imgui");
    const imgui_2 = require("../imgui");
    const imgui_demo_1 = require("../imgui_demo");
    const imgui_memory_editor_1 = require("../imgui_memory_editor");
    let font = null;
    let show_demo_window = true;
    let show_another_window = false;
    const clear_color = new imgui_2.ImVec4(0.45, 0.55, 0.60, 1.00);
    const memory_editor = new imgui_memory_editor_1.MemoryEditor();
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
    function main() {
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
    exports.default = main;
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
            font = yield AddFontFromFileTTF("../imgui/misc/fonts/Roboto-Medium.ttf", 16.0);
            // font = await AddFontFromFileTTF("../imgui/misc/fonts/Cousine-Regular.ttf", 15.0);
            // font = await AddFontFromFileTTF("../imgui/misc/fonts/DroidSans.ttf", 16.0);
            // font = await AddFontFromFileTTF("../imgui/misc/fonts/ProggyTiny.ttf", 10.0);
            // font = await AddFontFromFileTTF("c:\\Windows\\Fonts\\ArialUni.ttf", 18.0, null, io.Fonts.GetGlyphRangesJapanese());
            // font = await AddFontFromFileTTF("https://raw.githubusercontent.com/googlei18n/noto-cjk/master/NotoSansJP-Regular.otf", 18.0, null, io.Fonts.GetGlyphRangesJapanese());
            ImGui.IM_ASSERT(font !== null);
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
            done = /*ImGui.*/ imgui_demo_1.ShowDemoWindow((value = show_demo_window) => show_demo_window = value);
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
            if (ImGui.ImageButton(image_gl_texture, new imgui_1.ImVec2(48, 48))) {
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
        ImGui.SetNextWindowSize(new imgui_1.ImVec2(320, 240), ImGui.Cond.FirstUseEver);
        ImGui.Begin(title, p_open);
        ImGui.Text("Source");
        ImGui.SameLine();
        ShowHelpMarker("Contents evaluated and appended to the window.");
        ImGui.PushItemWidth(-1);
        ImGui.InputTextMultiline("##source", (_ = source) => (source = _), 1024, imgui_1.ImVec2.ZERO, ImGui.InputTextFlags.AllowTabInput);
        ImGui.PopItemWidth();
        try {
            eval(source);
        }
        catch (e) {
            ImGui.TextColored(new imgui_2.ImVec4(1.0, 0.0, 0.0, 1.0), "error: ");
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
            if (ImGui.ImageButton(video_gl_texture, new imgui_1.ImVec2(video_w, video_h))) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxnREFBa0M7SUFDbEMseURBQTJDO0lBRTNDLG9DQUFrQztJQUNsQyxvQ0FBa0M7SUFFbEMsOENBQStDO0lBRS9DLGdFQUFzRDtJQUV0RCxJQUFJLElBQUksR0FBd0IsSUFBSSxDQUFDO0lBRXJDLElBQUksZ0JBQWdCLEdBQVksSUFBSSxDQUFDO0lBQ3JDLElBQUksbUJBQW1CLEdBQVksS0FBSyxDQUFDO0lBQ3pDLE1BQU0sV0FBVyxHQUFXLElBQUksY0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRS9ELE1BQU0sYUFBYSxHQUFpQixJQUFJLGtDQUFZLEVBQUUsQ0FBQztJQUV2RCxJQUFJLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUN6QyxJQUFJLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUN6QyxJQUFJLGlCQUFpQixHQUFZLEtBQUssQ0FBQztJQUV2QyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQVcsR0FBRyxDQUFDO0lBQ2pDLFlBQVksQ0FBQyxJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7SUFFckMsSUFBSSxJQUFJLEdBQVksS0FBSyxDQUFDO0lBRTFCLFNBQWUsZUFBZSxDQUFDLEdBQVc7O1lBQ3RDLE1BQU0sUUFBUSxHQUFhLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVELFNBQThCLElBQUk7O1lBQzlCLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsTUFBTSxDQUFDLHFCQUFxQixDQUFD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