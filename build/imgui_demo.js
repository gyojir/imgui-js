// dear imgui, v1.71
// (demo code)
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
        define(["require", "exports", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui", "./imgui"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Message to the person tempted to delete this file when integrating Dear ImGui into their code base:
    // Do NOT remove this file from your project! Think again! It is the most useful reference code that you and other coders
    // will want to refer to and call. Have the ImGui::ShowDemoWindow() function wired in an always-available debug menu of
    // your game/app! Removing this file from your project is hindering access to documentation for everyone in your team,
    // likely leading you to poorer usage of the library.
    // Everything in this file will be stripped out by the linker if you don't call ImGui::ShowDemoWindow().
    // If you want to link core Dear ImGui in your shipped builds but want an easy guarantee that the demo will not be linked,
    // you can setup your imconfig.h with #define IMGUI_DISABLE_DEMO_WINDOWS and those functions will be empty.
    // In other situation, whenever you have Dear ImGui available you probably want this to be available for reference.
    // Thank you,
    // -Your beloved friend, imgui_demo.cpp (that you won't delete)
    // Message to beginner C/C++ programmers about the meaning of the 'static' keyword:
    // In this demo code, we frequently we use 'static' variables inside functions. A static variable persist across calls, so it is
    // essentially like a global variable but declared inside the scope of the function. We do this as a way to gather code and data
    // in the same place, to make the demo source code faster to read, faster to write, and smaller in size.
    // It also happens to be a convenient way of storing simple UI related information as long as your function doesn't need to be 
    // reentrant or used in multiple threads. This might be a pattern you will want to use in your code, but most of the real data
    // you would be editing is likely going to be stored outside your functions.
    // The Demo code is this file is designed to be easy to copy-and-paste in into your application!
    // Because of this:
    // - We never omit the ImGui:: namespace when calling functions, even though most of our code is already in the same namespace.
    // - We try to declare static variables in the local scope, as close as possible to the code using them.
    // - We never use any of the helpers/facilities used internally by dear imgui, unless it has been exposed in the public API (imgui.h).
    // - We never use maths operators on ImVec2/ImVec4. For other imgui sources files, they are provided by imgui_internal.h w/ IMGUI_DEFINE_MATH_OPERATORS,
    //   for your own sources file they are optional and require you either enable those, either provide your own via IM_VEC2_CLASS_EXTRA in imconfig.h.
    //   Because we don't want to assume anything about your support of maths operators, we don't use them in imgui_demo.cpp.
    /*
    
    Index of this file:
    
    // [SECTION] Forward Declarations, Helpers
    // [SECTION] Demo Window / ShowDemoWindow()
    // [SECTION] About Window / ShowAboutWindow()
    // [SECTION] Style Editor / ShowStyleEditor()
    // [SECTION] Example App: Main Menu Bar / ShowExampleAppMainMenuBar()
    // [SECTION] Example App: Debug Console / ShowExampleAppConsole()
    // [SECTION] Example App: Debug Log / ShowExampleAppLog()
    // [SECTION] Example App: Simple Layout / ShowExampleAppLayout()
    // [SECTION] Example App: Property Editor / ShowExampleAppPropertyEditor()
    // [SECTION] Example App: Long Text / ShowExampleAppLongText()
    // [SECTION] Example App: Auto Resize / ShowExampleAppAutoResize()
    // [SECTION] Example App: Constrained Resize / ShowExampleAppConstrainedResize()
    // [SECTION] Example App: Simple Overlay / ShowExampleAppSimpleOverlay()
    // [SECTION] Example App: Manipulating Window Titles / ShowExampleAppWindowTitles()
    // [SECTION] Example App: Custom Rendering using ImDrawList API / ShowExampleAppCustomRendering()
    // [SECTION] Example App: Documents Handling / ShowExampleAppDocuments()
    
    */
    // #if defined(_MSC_VER) && !defined(_CRT_SECURE_NO_WARNINGS)
    // #define _CRT_SECURE_NO_WARNINGS
    // #endif
    // #include "imgui.h"
    // #include <ctype.h>          // toupper, isprint
    // #include <math.h>           // sqrtf, powf, cosf, sinf, floorf, ceilf
    // #include <stdio.h>          // vsnprintf, sscanf, printf
    // #include <stdlib.h>         // null, malloc, free, atoi
    // #if defined(_MSC_VER) && _MSC_VER <= 1500 // MSVC 2008 or earlier
    // #include <stddef.h>         // intptr_t
    // #else
    // #include <stdint.h>         // intptr_t
    // #endif
    const ImGui = __importStar(require("./imgui"));
    const imgui_1 = require("./imgui");
    const imgui_2 = require("./imgui");
    const imgui_3 = require("./imgui");
    const imgui_4 = require("./imgui");
    const imgui_5 = require("./imgui");
    const imgui_6 = require("./imgui");
    const imgui_7 = require("./imgui");
    const imgui_8 = require("./imgui");
    const imgui_9 = require("./imgui");
    const imgui_10 = require("./imgui");
    const imgui_11 = require("./imgui");
    const imgui_12 = require("./imgui");
    const imgui_13 = require("./imgui");
    const imgui_14 = require("./imgui");
    const imgui_15 = require("./imgui");
    const imgui_16 = require("./imgui");
    const imgui_17 = require("./imgui");
    const imgui_18 = require("./imgui");
    const imgui_19 = require("./imgui");
    const imgui_20 = require("./imgui");
    const imgui_21 = require("./imgui");
    const imgui_22 = require("./imgui");
    const imgui_23 = require("./imgui");
    const imgui_24 = require("./imgui");
    const imgui_25 = require("./imgui");
    const imgui_26 = require("./imgui");
    const imgui_27 = require("./imgui");
    // #ifdef _MSC_VER
    // #pragma warning (disable: 4996) // 'This function or variable may be unsafe': strcpy, strdup, sprintf, vsnprintf, sscanf, fopen
    // #define snprintf _snprintf
    // #endif
    // #ifdef __clang__
    // #pragma clang diagnostic ignored "-Wold-style-cast"             // warning : use of old-style cast                              // yes, they are more terse.
    // #pragma clang diagnostic ignored "-Wdeprecated-declarations"    // warning : 'xx' is deprecated: The POSIX name for this item.. // for strdup used in demo code (so user can copy & paste the code)
    // #pragma clang diagnostic ignored "-Wint-to-void-pointer-cast"   // warning : cast to 'void *' from smaller integer type 'int'
    // #pragma clang diagnostic ignored "-Wformat-security"            // warning : warning: format string is not a string literal
    // #pragma clang diagnostic ignored "-Wexit-time-destructors"      // warning : declaration requires an exit-time destructor       // exit-time destruction order is undefined. if MemFree() leads to users code that has been disabled before exit it might cause problems. ImGui coding style welcomes static/globals.
    // #if __has_warning("-Wreserved-id-macro")
    // #pragma clang diagnostic ignored "-Wreserved-id-macro"          // warning : macro name is a reserved identifier                //
    // #endif
    // #elif defined(__GNUC__)
    // #pragma GCC diagnostic ignored "-Wint-to-pointer-cast"          // warning: cast to pointer from integer of different size
    // #pragma GCC diagnostic ignored "-Wformat-security"              // warning : format string is not a string literal (potentially insecure)
    // #pragma GCC diagnostic ignored "-Wdouble-promotion"             // warning: implicit conversion from 'float' to 'double' when passing argument to function
    // #pragma GCC diagnostic ignored "-Wconversion"                   // warning: conversion to 'xxxx' from 'xxxx' may alter its value
    // #if (__GNUC__ >= 6)
    // #pragma GCC diagnostic ignored "-Wmisleading-indentation"       // warning: this 'if' clause does not guard this statement      // GCC 6.0+ only. See #883 on GitHub.
    // #endif
    // #endif
    function format_number(n, radix = 10, pad = 0, pad_char = "0") {
        return pad > 0 ? (pad_char.repeat(pad) + n.toString(radix)).substr(-pad) : n.toString(radix);
    }
    function format_number_dec(n, pad = 0, pad_char = "0") {
        return format_number(n, 10, pad, pad_char);
    }
    function format_number_hex(n, pad = 0, pad_char = "0") {
        return format_number(n, 16, pad, pad_char);
    }
    // Play it nice with Windows users. Notepad in 2017 still doesn't display text data with Unix-style \n.
    // #ifdef _WIN32
    // #define IM_NEWLINE "\r\n"
    // #else
    // #define IM_NEWLINE "\n"
    // #endif
    const IM_NEWLINE = "\n";
    // #define IM_MAX(_A,_B)       (((_A) >= (_B)) ? (_A) : (_B))
    function IM_MAX(_A, _B) { return ((_A) >= (_B)) ? (_A) : (_B); }
    //-----------------------------------------------------------------------------
    // [SECTION] Forward Declarations, Helpers
    //-----------------------------------------------------------------------------
    // #if !defined(IMGUI_DISABLE_OBSOLETE_FUNCTIONS) && defined(IMGUI_DISABLE_TEST_WINDOWS) && !defined(IMGUI_DISABLE_DEMO_WINDOWS)   // Obsolete name since 1.53, TEST->DEMO
    // #define IMGUI_DISABLE_DEMO_WINDOWS
    // #endif
    // #if !defined(IMGUI_DISABLE_DEMO_WINDOWS)
    class Static {
        constructor(value) {
            this.value = value;
        }
    }
    const _static = {};
    function STATIC(key, value) {
        return _static[key] || (_static[key] = new Static(value));
    }
    let done = false;
    // Forward Declarations
    // static void ShowExampleAppDocuments(bool* p_open);
    // static void ShowExampleAppMainMenuBar();
    // static void ShowExampleAppConsole(bool* p_open);
    // static void ShowExampleAppLog(bool* p_open);
    // static void ShowExampleAppLayout(bool* p_open);
    // static void ShowExampleAppPropertyEditor(bool* p_open);
    // static void ShowExampleAppLongText(bool* p_open);
    // static void ShowExampleAppAutoResize(bool* p_open);
    // static void ShowExampleAppConstrainedResize(bool* p_open);
    // static void ShowExampleAppSimpleOverlay(bool* p_open);
    // static void ShowExampleAppWindowTitles(bool* p_open);
    // static void ShowExampleAppCustomRendering(bool* p_open);
    // static void ShowExampleMenuFile();
    // Helper to display a little (?) mark which shows a tooltip when hovered.
    // In your own code you may want to display an actual icon if you are using a merged icon fonts (see misc/fonts/README.txt)
    function HelpMarker(desc) {
        ImGui.TextDisabled("(?)");
        if (ImGui.IsItemHovered()) {
            ImGui.BeginTooltip();
            ImGui.PushTextWrapPos(ImGui.GetFontSize() * 35.0);
            ImGui.TextUnformatted(desc);
            ImGui.PopTextWrapPos();
            ImGui.EndTooltip();
        }
    }
    // Helper to display basic user controls.
    function ShowUserGuide() {
        const io = ImGui.GetIO();
        ImGui.BulletText("Double-click on title bar to collapse window.");
        ImGui.BulletText("Click and drag on lower right corner to resize window\n(double-click to auto fit window to its contents).");
        ImGui.BulletText("Click and drag on any empty space to move window.");
        ImGui.BulletText("TAB/SHIFT+TAB to cycle through keyboard editable fields.");
        ImGui.BulletText("CTRL+Click on a slider or drag box to input value as text.");
        if (io.FontAllowUserScaling)
            ImGui.BulletText("CTRL+Mouse Wheel to zoom window contents.");
        ImGui.BulletText("Mouse Wheel to scroll.");
        ImGui.BulletText("While editing text:\n");
        ImGui.Indent();
        ImGui.BulletText("Hold SHIFT or use mouse to select text.");
        ImGui.BulletText("CTRL+Left/Right to word jump.");
        ImGui.BulletText("CTRL+A or double-click to select all.");
        ImGui.BulletText("CTRL+X,CTRL+C,CTRL+V to use clipboard.");
        ImGui.BulletText("CTRL+Z,CTRL+Y to undo/redo.");
        ImGui.BulletText("ESCAPE to revert.");
        ImGui.BulletText("You can apply arithmetic operators +,*,/ on numerical values.\nUse +- to subtract.");
        ImGui.Unindent();
    }
    exports.ShowUserGuide = ShowUserGuide;
    //-----------------------------------------------------------------------------
    // [SECTION] Demo Window / ShowDemoWindow()
    //-----------------------------------------------------------------------------
    // We split the contents of the big ShowDemoWindow() function into smaller functions (because the link time of very large functions grow non-linearly)
    // static void ShowDemoWindowWidgets();
    // static void ShowDemoWindowLayout();
    // static void ShowDemoWindowPopups();
    // static void ShowDemoWindowColumns();
    // static void ShowDemoWindowMisc();
    // Demonstrate most Dear ImGui features (this is big function!)
    // You may execute this function to experiment with the UI and understand what it does. You may then search for keywords in the code when you are interested by a specific feature.
    function ShowDemoWindow(p_open = null) {
        done = false;
        // IM_ASSERT(ImGui.GetCurrentContext() !== null && "Missing dear imgui context. Refer to examples app!"); // Exceptionally add an extra assert here for people confused with initial dear imgui setup
        // Examples Apps (accessible from the "Examples" menu)
        /* static */ const show_app_documents = STATIC("show_app_documents", false);
        /* static */ const show_app_main_menu_bar = STATIC("show_app_main_menu_bar", false);
        /* static */ const show_app_console = STATIC("show_app_console", false);
        /* static */ const show_app_log = STATIC("show_app_log", false);
        /* static */ const show_app_layout = STATIC("show_app_layout", false);
        /* static */ const show_app_property_editor = STATIC("show_app_property_editor", false);
        /* static */ const show_app_long_text = STATIC("show_app_long_text", false);
        /* static */ const show_app_auto_resize = STATIC("show_app_auto_resize", false);
        /* static */ const show_app_constrained_resize = STATIC("show_app_constrained_resize", false);
        /* static */ const show_app_simple_overlay = STATIC("show_app_simple_overlay", false);
        /* static */ const show_app_window_titles = STATIC("show_app_window_titles", false);
        /* static */ const show_app_custom_rendering = STATIC("show_app_custom_rendering", false);
        /* static */ const show_backend_checker_window = STATIC("show_backend_checker_window", false);
        if (show_app_documents.value)
            ShowExampleAppDocuments((value = show_app_documents.value) => show_app_documents.value = value);
        if (show_app_main_menu_bar.value)
            ShowExampleAppMainMenuBar();
        if (show_app_console.value)
            ShowExampleAppConsole((value = show_app_console.value) => show_app_console.value = value);
        if (show_app_log.value)
            ShowExampleAppLog((value = show_app_log.value) => show_app_log.value = value);
        if (show_app_layout.value)
            ShowExampleAppLayout((value = show_app_layout.value) => show_app_layout.value = value);
        if (show_app_property_editor.value)
            ShowExampleAppPropertyEditor((value = show_app_property_editor.value) => show_app_property_editor.value = value);
        if (show_app_long_text.value)
            ShowExampleAppLongText((value = show_app_long_text.value) => show_app_long_text.value = value);
        if (show_app_auto_resize.value)
            ShowExampleAppAutoResize((value = show_app_auto_resize.value) => show_app_auto_resize.value = value);
        if (show_app_constrained_resize.value)
            ShowExampleAppConstrainedResize((value = show_app_constrained_resize.value) => show_app_constrained_resize.value = value);
        if (show_app_simple_overlay.value)
            ShowExampleAppSimpleOverlay((value = show_app_simple_overlay.value) => show_app_simple_overlay.value = value);
        if (show_app_window_titles.value)
            ShowExampleAppWindowTitles((value = show_app_window_titles.value) => show_app_window_titles.value = value);
        if (show_app_custom_rendering.value)
            ShowExampleAppCustomRendering((value = show_app_custom_rendering.value) => show_app_custom_rendering.value = value);
        if (show_backend_checker_window.value)
            ShowBackendCheckerWindow((value = show_backend_checker_window.value) => show_backend_checker_window.value = value);
        // Dear ImGui Apps (accessible from the "Help" menu)
        /* static */ const show_app_style_editor = STATIC("show_app_style_editor", false);
        /* static */ const show_app_metrics = STATIC("show_app_metrics", false);
        /* static */ const show_app_about = STATIC("show_app_about", false);
        if (show_app_metrics.value) {
            ImGui.ShowMetricsWindow((value = show_app_metrics.value) => show_app_metrics.value = value);
        }
        if (show_app_style_editor.value) {
            ImGui.Begin("Style Editor", (value = show_app_style_editor.value) => show_app_style_editor.value = value); /*ImGui.*/
            ShowStyleEditor();
            ImGui.End();
        }
        if (show_app_about.value) {
            ShowAboutWindow((value = show_app_about.value) => show_app_about.value = value);
        }
        // Demonstrate the various window flags. Typically you would just use the default!
        /* static */ const no_titlebar = STATIC("no_titlebar", false);
        /* static */ const no_scrollbar = STATIC("no_scrollbar", false);
        /* static */ const no_menu = STATIC("no_menu", false);
        /* static */ const no_move = STATIC("no_move", false);
        /* static */ const no_resize = STATIC("no_resize", false);
        /* static */ const no_collapse = STATIC("no_collapse", false);
        /* static */ const no_close = STATIC("no_close", false);
        /* static */ const no_nav = STATIC("no_nav", false);
        /* static */ const no_background = STATIC("no_background", false);
        /* static */ const no_bring_to_front = STATIC("no_bring_to_front", false);
        let window_flags = 0;
        if (no_titlebar.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoTitleBar;
        if (no_scrollbar.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoScrollbar;
        if (!no_menu.value)
            window_flags |= imgui_15.ImGuiWindowFlags.MenuBar;
        if (no_move.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoMove;
        if (no_resize.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoResize;
        if (no_collapse.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoCollapse;
        if (no_nav.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoNav;
        if (no_background.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoBackground;
        if (no_bring_to_front.value)
            window_flags |= imgui_15.ImGuiWindowFlags.NoBringToFrontOnFocus;
        if (no_close.value)
            p_open = null; // Don't pass our bool* to Begin
        // We specify a default position/size in case there's no data in the .ini file. Typically this isn't required! We only do it to make the Demo applications a little more welcoming.
        ImGui.SetNextWindowPos(new imgui_19.ImVec2(650, 20), ImGui.Cond.FirstUseEver);
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(550, 680), imgui_7.ImGuiCond.FirstUseEver);
        // Main body of the Demo window starts here.
        if (!ImGui.Begin("Dear ImGui Demo", p_open, window_flags)) {
            // Early out if the window is collapsed, as an optimization.
            ImGui.End();
            return done;
        }
        // Most "big" widgets share a common width settings by default.
        //ImGui.PushItemWidth(ImGui.GetWindowWidth() * 0.65);    // Use 2/3 of the space for widgets and 1/3 for labels (default)
        ImGui.PushItemWidth(ImGui.GetFontSize() * -12); // Use fixed width for labels (by passing a negative value), the rest goes to widgets. We choose a width proportional to our font size.
        // Menu Bar
        if (ImGui.BeginMenuBar()) {
            if (ImGui.BeginMenu("Menu")) {
                ShowExampleMenuFile();
                ImGui.EndMenu();
            }
            if (ImGui.BeginMenu("Examples")) {
                ImGui.MenuItem("Main menu bar", null, (value = show_app_main_menu_bar.value) => show_app_main_menu_bar.value = value);
                ImGui.MenuItem("Console", null, (value = show_app_console.value) => show_app_console.value = value);
                ImGui.MenuItem("Log", null, (value = show_app_log.value) => show_app_log.value = value);
                ImGui.MenuItem("Simple layout", null, (value = show_app_layout.value) => show_app_layout.value = value);
                ImGui.MenuItem("Property editor", null, (value = show_app_property_editor.value) => show_app_property_editor.value = value);
                ImGui.MenuItem("Long text display", null, (value = show_app_long_text.value) => show_app_long_text.value = value);
                ImGui.MenuItem("Auto-resizing window", null, (value = show_app_auto_resize.value) => show_app_auto_resize.value = value);
                ImGui.MenuItem("Constrained-resizing window", null, (value = show_app_constrained_resize.value) => show_app_constrained_resize.value = value);
                ImGui.MenuItem("Simple overlay", null, (value = show_app_simple_overlay.value) => show_app_simple_overlay.value = value);
                ImGui.MenuItem("Manipulating window titles", null, (value = show_app_window_titles.value) => show_app_window_titles.value = value);
                ImGui.MenuItem("Custom rendering", null, (value = show_app_custom_rendering.value) => show_app_custom_rendering.value = value);
                ImGui.MenuItem("Documents", null, (value = show_app_documents.value) => show_app_documents.value = value);
                ImGui.MenuItem("Backend-checker window", null, (value = show_backend_checker_window.value) => show_backend_checker_window.value = value);
                ImGui.EndMenu();
            }
            if (ImGui.BeginMenu("Help")) {
                ImGui.MenuItem("Metrics", null, (value = show_app_metrics.value) => show_app_metrics.value = value);
                ImGui.MenuItem("Style Editor", null, (value = show_app_style_editor.value) => show_app_style_editor.value = value);
                ImGui.MenuItem("About Dear ImGui", null, (value = show_app_about.value) => show_app_about.value = value);
                ImGui.EndMenu();
            }
            ImGui.EndMenuBar();
        }
        ImGui.Text(`dear imgui says hello. (${imgui_1.IMGUI_VERSION})`);
        ImGui.Spacing();
        if (ImGui.CollapsingHeader("Help")) {
            ImGui.Text("PROGRAMMER GUIDE:");
            ImGui.BulletText("Please see the ShowDemoWindow() code in imgui_demo.cpp. <- you are here!");
            ImGui.BulletText("Please see the comments in imgui.cpp.");
            ImGui.BulletText("Please see the examples/ in application.");
            ImGui.BulletText("Enable 'io.ConfigFlags |= NavEnableKeyboard' for keyboard controls.");
            ImGui.BulletText("Enable 'io.ConfigFlags |= NavEnableGamepad' for gamepad controls.");
            ImGui.Separator();
            ImGui.Text("USER GUIDE:");
            /*ImGui.*/ ShowUserGuide();
        }
        if (ImGui.CollapsingHeader("Configuration")) {
            const io = ImGui.GetIO();
            if (ImGui.TreeNode("Configuration##2")) {
                ImGui.CheckboxFlags("io.ConfigFlags: NavEnableKeyboard", (value = io.ConfigFlags) => io.ConfigFlags = value, ImGui.ConfigFlags.NavEnableKeyboard);
                ImGui.CheckboxFlags("io.ConfigFlags: NavEnableGamepad", (value = io.ConfigFlags) => io.ConfigFlags = value, ImGui.ConfigFlags.NavEnableGamepad);
                ImGui.SameLine();
                HelpMarker("Required back-end to feed in gamepad inputs in io.NavInputs[] and set io.BackendFlags |= ImGuiBackendFlags_HasGamepad.\n\nRead instructions in imgui.cpp for details.");
                ImGui.CheckboxFlags("io.ConfigFlags: NavEnableSetMousePos", (value = io.ConfigFlags) => io.ConfigFlags = value, ImGui.ConfigFlags.NavEnableSetMousePos);
                ImGui.SameLine();
                HelpMarker("Instruct navigation to move the mouse cursor. See comment for ImGuiConfigFlags_NavEnableSetMousePos.");
                ImGui.CheckboxFlags("io.ConfigFlags: NoMouse", (value = io.ConfigFlags) => io.ConfigFlags = value, ImGui.ConfigFlags.NoMouse);
                if (io.ConfigFlags & ImGui.ConfigFlags.NoMouse) // Create a way to restore this flag otherwise we could be stuck completely!
                 {
                    if ((ImGui.GetTime() % 0.40) < 0.20) {
                        ImGui.SameLine();
                        ImGui.Text("<<PRESS SPACE TO DISABLE>>");
                    }
                    if (ImGui.IsKeyPressed(ImGui.GetKeyIndex(ImGui.Key.Space)))
                        io.ConfigFlags &= ~ImGui.ConfigFlags.NoMouse;
                }
                ImGui.CheckboxFlags("io.ConfigFlags: NoMouseCursorChange", (value = io.ConfigFlags) => io.ConfigFlags = value, ImGui.ConfigFlags.NoMouseCursorChange);
                ImGui.SameLine();
                HelpMarker("Instruct back-end to not alter mouse cursor shape and visibility.");
                ImGui.Checkbox("io.ConfigInputTextCursorBlink", (value = io.ConfigInputTextCursorBlink) => io.ConfigInputTextCursorBlink = value);
                ImGui.SameLine();
                HelpMarker("Set to false to disable blinking cursor, for users who consider it distracting");
                ImGui.Checkbox("io.ConfigWindowsResizeFromEdges [beta]", (value = io.ConfigWindowsResizeFromEdges) => io.ConfigWindowsResizeFromEdges = value);
                ImGui.SameLine();
                HelpMarker("Enable resizing of windows from their edges and from the lower-left corner.\nThis requires (io.BackendFlags & ImGuiBackendFlags_HasMouseCursors) because it needs mouse cursor feedback.");
                ImGui.Checkbox("io.ConfigWindowsMoveFromTitleBarOnly", (value = io.ConfigWindowsMoveFromTitleBarOnly) => io.ConfigWindowsMoveFromTitleBarOnly = value);
                ImGui.Checkbox("io.MouseDrawCursor", (value = io.MouseDrawCursor) => io.MouseDrawCursor = value);
                ImGui.SameLine();
                HelpMarker("Instruct Dear ImGui to render a mouse cursor for you. Note that a mouse cursor rendered via your application GPU rendering path will feel more laggy than hardware cursor, but will be more in sync with your other visuals.\n\nSome desktop applications may use both kinds of cursors (e.g. enable software cursor only when resizing/dragging something).");
                ImGui.TreePop();
                ImGui.Separator();
            }
            if (ImGui.TreeNode("Backend Flags")) {
                HelpMarker("Those flags are set by the back-ends (imgui_impl_xxx files) to specify their capabilities.");
                let backend_flags = io.BackendFlags; // Make a local copy to avoid modifying the back-end flags.
                ImGui.CheckboxFlags("io.BackendFlags: HasGamepad", (value = backend_flags) => backend_flags = value, ImGui.BackendFlags.HasGamepad);
                ImGui.CheckboxFlags("io.BackendFlags: HasMouseCursors", (value = backend_flags) => backend_flags = value, ImGui.BackendFlags.HasMouseCursors);
                ImGui.CheckboxFlags("io.BackendFlags: HasSetMousePos", (value = backend_flags) => backend_flags = value, ImGui.BackendFlags.HasSetMousePos);
                ImGui.CheckboxFlags("io.BackendFlags: RendererHasVtxOffset", (value = backend_flags) => backend_flags = value, ImGui.BackendFlags.RendererHasVtxOffset);
                ImGui.TreePop();
                ImGui.Separator();
            }
            if (ImGui.TreeNode("Style")) {
                /*ImGui.*/ ShowStyleEditor();
                ImGui.TreePop();
                ImGui.Separator();
            }
            if (ImGui.TreeNode("Capture/Logging")) {
                ImGui.TextWrapped("The logging API redirects all text output so you can easily capture the content of a window or a block. Tree nodes can be automatically expanded.");
                HelpMarker("Try opening any of the contents below in this window and then click one of the \"Log To\" button.");
                ImGui.LogButtons();
                ImGui.TextWrapped("You can also call ImGui.LogText() to output directly to the log without a visual output.");
                if (ImGui.Button("Copy \"Hello, world!\" to clipboard")) {
                    ImGui.LogToClipboard();
                    ImGui.LogText("Hello, world!");
                    ImGui.LogFinish();
                }
                ImGui.TreePop();
            }
        }
        if (ImGui.CollapsingHeader("Window options")) {
            ImGui.Checkbox("No titlebar", (value = no_titlebar.value) => no_titlebar.value = value);
            ImGui.SameLine(150);
            ImGui.Checkbox("No scrollbar", (value = no_scrollbar.value) => no_scrollbar.value = value);
            ImGui.SameLine(300);
            ImGui.Checkbox("No menu", (value = no_menu.value) => no_menu.value = value);
            ImGui.Checkbox("No move", (value = no_move.value) => no_move.value = value);
            ImGui.SameLine(150);
            ImGui.Checkbox("No resize", (value = no_resize.value) => no_resize.value = value);
            ImGui.SameLine(300);
            ImGui.Checkbox("No collapse", (value = no_collapse.value) => no_collapse.value = value);
            ImGui.Checkbox("No close", (value = no_close.value) => no_close.value = value);
            ImGui.SameLine(150);
            ImGui.Checkbox("No nav", (value = no_nav.value) => no_nav.value = value);
            ImGui.SameLine(300);
            ImGui.Checkbox("No background", (value = no_background.value) => no_background.value = value);
            ImGui.Checkbox("No bring to front", (value = no_bring_to_front.value) => no_bring_to_front.value = value);
        }
        // All demo contents
        ShowDemoWindowWidgets();
        ShowDemoWindowLayout();
        ShowDemoWindowPopups();
        ShowDemoWindowColumns();
        ShowDemoWindowMisc();
        // End of ShowDemoWindow()
        ImGui.End();
        return done;
    }
    exports.ShowDemoWindow = ShowDemoWindow;
    function ShowDemoWindowWidgets() {
        if (!ImGui.CollapsingHeader("Widgets"))
            return;
        if (ImGui.TreeNode("Basic")) {
            /* static */ const clicked = STATIC("clicked", 0);
            if (ImGui.Button("Button"))
                clicked.value++;
            if (clicked.value & 1) {
                ImGui.SameLine();
                ImGui.Text("Thanks for clicking me!");
            }
            /* static */ const check = STATIC("check", true);
            ImGui.Checkbox("checkbox", (value = check.value) => check.value = value);
            /* static */ const e = STATIC("e", 0);
            ImGui.RadioButton("radio a", (value = e.value) => e.value = value, 0);
            ImGui.SameLine();
            ImGui.RadioButton("radio b", (value = e.value) => e.value = value, 1);
            ImGui.SameLine();
            ImGui.RadioButton("radio c", (value = e.value) => e.value = value, 2);
            // Color buttons, demonstrate using PushID() to add unique identifier in the ID stack, and changing style.
            for (let i = 0; i < 7; i++) {
                if (i > 0)
                    ImGui.SameLine();
                ImGui.PushID(i);
                ImGui.PushStyleColor(imgui_5.ImGuiCol.Button, imgui_22.ImColor.HSV(i / 7.0, 0.6, 0.6));
                ImGui.PushStyleColor(imgui_5.ImGuiCol.ButtonHovered, imgui_22.ImColor.HSV(i / 7.0, 0.7, 0.7));
                ImGui.PushStyleColor(imgui_5.ImGuiCol.ButtonActive, imgui_22.ImColor.HSV(i / 7.0, 0.8, 0.8));
                ImGui.Button("Click");
                ImGui.PopStyleColor(3);
                ImGui.PopID();
            }
            // Use AlignTextToFramePadding() to align text baseline to the baseline of framed elements (otherwise a Text+SameLine+Button sequence will have the text a little too high by default)
            ImGui.AlignTextToFramePadding();
            ImGui.Text("Hold to repeat:");
            ImGui.SameLine();
            // Arrow buttons with Repeater
            /* static */ const counter = STATIC("counter", 0);
            const spacing = ImGui.GetStyle().ItemInnerSpacing.x;
            ImGui.PushButtonRepeat(true);
            if (ImGui.ArrowButton("##left", imgui_27.ImGuiDir.Left)) {
                counter.value--;
            }
            ImGui.SameLine(0.0, spacing);
            if (ImGui.ArrowButton("##right", imgui_27.ImGuiDir.Right)) {
                counter.value++;
            }
            ImGui.PopButtonRepeat();
            ImGui.SameLine();
            ImGui.Text(`${counter.value}`);
            ImGui.Text("Hover over me");
            if (ImGui.IsItemHovered())
                ImGui.SetTooltip("I am a tooltip");
            ImGui.SameLine();
            ImGui.Text("- or me");
            if (ImGui.IsItemHovered()) {
                ImGui.BeginTooltip();
                ImGui.Text("I am a fancy tooltip");
                /* static */ const arr = STATIC("arr_", [0.6, 0.1, 1.0, 0.5, 0.92, 0.1, 0.2]);
                // ImGui.PlotLines("Curve", arr, IM_ARRAYSIZE(arr));
                ImGui.PlotLines("Curve", arr.value, imgui_3.IM_ARRAYSIZE(arr.value));
                ImGui.EndTooltip();
            }
            ImGui.Separator();
            ImGui.LabelText("label", "Value");
            {
                // Using the _simplified_ one-liner Combo() api here
                // See "Combo" section for examples of how to use the more complete BeginCombo()/EndCombo() api.
                const items = ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO"];
                /* static */ const item_current = STATIC("item_current#389", 0);
                ImGui.Combo("combo", (value = item_current.value) => item_current.value = value, items, imgui_3.IM_ARRAYSIZE(items));
                ImGui.SameLine();
                HelpMarker("Refer to the \"Combo\" section below for an explanation of the full BeginCombo/EndCombo API, and demonstration of various flags.\n");
            }
            {
                /* static */ const str0 = STATIC("str0", new imgui_4.ImStringBuffer(128, "Hello, world!"));
                ImGui.InputText("input text", str0.value, imgui_3.IM_ARRAYSIZE(str0.value));
                ImGui.SameLine();
                HelpMarker("USER:\nHold SHIFT or use mouse to select text.\n" + "CTRL+Left/Right to word jump.\n" + "CTRL+A or double-click to select all.\n" + "CTRL+X,CTRL+C,CTRL+V clipboard.\n" + "CTRL+Z,CTRL+Y undo/redo.\n" + "ESCAPE to revert.\n\nPROGRAMMER:\nYou can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputText() to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example (this is not demonstrated in imgui_demo.cpp).");
                /* static */ const str1 = STATIC("str1", new imgui_4.ImStringBuffer(128, ""));
                ImGui.InputTextWithHint("input text (w/ hint)", "enter text here", str1.value, imgui_3.IM_ARRAYSIZE(str1.value));
                /* static */ const i0 = STATIC("i0", 123);
                ImGui.InputInt("input int", (value = i0.value) => i0.value = value);
                ImGui.SameLine();
                HelpMarker("You can apply arithmetic operators +,*,/ on numerical values.\n  e.g. [ 100 ], input \'*2\', result becomes [ 200 ]\nUse +- to subtract.\n");
                /* static */ const f0 = STATIC("f0#400", 0.001);
                ImGui.InputFloat("input float", (value = f0.value) => f0.value = value, 0.01, 1.0, "%.3f");
                /* static */ const d0 = STATIC("d0", 999999.000001);
                ImGui.InputDouble("input double", (value = d0.value) => d0.value = value, 0.01, 1.0, "%.8f");
                /* static */ const f1 = STATIC("f1#403", 1.e10);
                ImGui.InputFloat("input scientific", (value = f1.value) => f1.value = value, 0.0, 0.0, "%e");
                ImGui.SameLine();
                HelpMarker("You can input value using the scientific notation,\n  e.g. \"1e+8\" becomes \"100000000\".\n");
                /* static */ const vec4a = STATIC("vec4a", [0.10, 0.20, 0.30, 0.44]);
                ImGui.InputFloat3("input float3", vec4a.value);
            }
            {
                /* static */ const i1 = STATIC("i1#415", 50), i2 = STATIC("i2#415", 42);
                ImGui.DragInt("drag int", (value = i1.value) => i1.value = value, 1);
                ImGui.SameLine();
                HelpMarker("Click and drag to edit value.\nHold SHIFT/ALT for faster/slower edit.\nDouble-click or CTRL+click to input value.");
                ImGui.DragInt("drag int 0..100", (value = i2.value) => i2.value = value, 1, 0, 100, "%d%%");
                /* static */ const f1 = STATIC("f1#421", 1.00), f2 = STATIC("f2#421", 0.0067);
                ImGui.DragFloat("drag float", (value = f1.value) => f1.value = value, 0.005);
                ImGui.DragFloat("drag small float", (value = f2.value) => f2.value = value, 0.0001, 0.0, 0.0, "%.06f ns");
            }
            {
                /* static */ const i1 = STATIC("i1#427", 0);
                ImGui.SliderInt("slider int", (value = i1.value) => i1.value = value, -1, 3);
                ImGui.SameLine();
                HelpMarker("CTRL+click to input value.");
                /* static */ const f1 = STATIC("f1#427", 0.123), f2 = STATIC("f2#427", 0.0);
                ImGui.SliderFloat("slider float", (value = f1.value) => f1.value = value, 0.0, 1.0, "ratio = %.3f");
                ImGui.SliderFloat("slider float (curve)", (value = f2.value) => f2.value = value, -10.0, 10.0, "%.4f", 2.0);
                /* static */ const angle = STATIC("angle", 0.0);
                ImGui.SliderAngle("slider angle", (value = angle.value) => angle.value = value);
                /* static */ const angle3 = STATIC("angle3", [0.0, 0.0, 0.0]);
                ImGui.SliderAngle3("slider angle3", angle3.value);
            }
            {
                /* static */ const col1 = STATIC("col1", [1.0, 0.0, 0.2]);
                /* static */ const col2 = STATIC("col2", [0.4, 0.7, 0.0, 0.5]);
                ImGui.ColorEdit3("color 1", col1.value);
                ImGui.SameLine();
                HelpMarker("Click on the colored square to open a color picker.\nClick and hold to use drag and drop.\nRight-click on the colored square to show options.\nCTRL+click on individual component to input value.\n");
                ImGui.ColorEdit4("color 2", col2.value);
            }
            {
                // List box
                const listbox_items = ["Apple", "Banana", "Cherry", "Kiwi", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"];
                /* static */ const listbox_item_current = STATIC("listbox_item_current", 1);
                ImGui.ListBox("listbox\n(single select)", (value = listbox_item_current.value) => listbox_item_current.value = value, listbox_items, imgui_3.IM_ARRAYSIZE(listbox_items), 4);
                // /* static */ const listbox_item_current2: Static<number> = STATIC("listbox_item_current2", 2);
                // ImGui.SetNextItemWidth(-1);
                // ImGui.ListBox("##listbox2", (value = listbox_item_current2.value) => listbox_item_current2.value = value, listbox_items, IM_ARRAYSIZE(listbox_items), 4);
            }
            ImGui.TreePop();
        }
        // Testing ImGuiOnceUponAFrame helper.
        //static ImGuiOnceUponAFrame once;
        //for (let i = 0; i < 5; i++)
        //    if (once)
        //        ImGui.Text("This will be displayed only once.");
        if (ImGui.TreeNode("Trees")) {
            if (ImGui.TreeNode("Basic trees")) {
                for (let i = 0; i < 5; i++) {
                    // Use SetNextItemOpen() so set the default state of a node to be open.
                    // We could also use TreeNodeEx() with the ImGuiTreeNodeFlags_DefaultOpen flag to achieve the same thing!
                    if (i == 0)
                        ImGui.SetNextItemOpen(true, imgui_7.ImGuiCond.Once);
                    if (ImGui.TreeNode(i.toString(), `Child ${i}`)) {
                        ImGui.Text("blah blah");
                        ImGui.SameLine();
                        if (ImGui.SmallButton("button")) { }
                        ImGui.TreePop();
                    }
                }
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Advanced, with Selectable nodes")) {
                HelpMarker("This is a more typical looking tree with selectable nodes.\nClick to select, CTRL+Click to toggle, click on arrows or double-click to open.");
                /* static */ const align_label_with_current_x_position = STATIC("align_label_with_current_x_position", false);
                ImGui.Checkbox("Align label with current X position)", (value = align_label_with_current_x_position.value) => align_label_with_current_x_position.value = value);
                ImGui.Text("Hello!");
                if (align_label_with_current_x_position.value)
                    ImGui.Unindent(ImGui.GetTreeNodeToLabelSpacing());
                /* static */ const selection_mask = STATIC("selection_mask", (1 << 2)); // Dumb representation of what may be user-side selection state. You may carry selection state inside or outside your objects in whatever format you see fit.
                let node_clicked = -1; // Temporary storage of what node we have clicked to process selection at the end of the loop. May be a pointer to your own node type, etc.
                ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.IndentSpacing, ImGui.GetFontSize() * 3); // Increase spacing to differentiate leaves from expanded contents.
                for (let i = 0; i < 6; i++) {
                    // Disable the default open on single-click behavior and pass in Selected flag according to our selection state.
                    let node_flags = imgui_14.ImGuiTreeNodeFlags.OpenOnArrow | imgui_14.ImGuiTreeNodeFlags.OpenOnDoubleClick;
                    if (selection_mask.value & (1 << i))
                        node_flags |= imgui_14.ImGuiTreeNodeFlags.Selected;
                    if (i < 3) {
                        // Items 0..2 are Tree Node
                        const node_open = ImGui.TreeNodeEx(i, node_flags, `Selectable Node ${i}`);
                        if (ImGui.IsItemClicked())
                            node_clicked = i;
                        if (node_open) {
                            ImGui.Text("Blah blah\nBlah Blah");
                            ImGui.TreePop();
                        }
                    }
                    else {
                        // Items 3..5 are Tree Leaves
                        // The only reason we use TreeNode at all is to allow selection of the leaf.
                        // Otherwise we can use BulletText() or TreeAdvanceToLabelPos()+Text().
                        node_flags |= imgui_14.ImGuiTreeNodeFlags.Leaf | imgui_14.ImGuiTreeNodeFlags.NoTreePushOnOpen; // ImGuiTreeNodeFlags.Bullet
                        ImGui.TreeNodeEx(i, node_flags, `Selectable Leaf ${i}`);
                        if (ImGui.IsItemClicked())
                            node_clicked = i;
                    }
                }
                if (node_clicked !== -1) {
                    // Update selection state. Process outside of tree loop to avoid visual inconsistencies during the clicking-frame.
                    if (ImGui.GetIO().KeyCtrl)
                        selection_mask.value ^= (1 << node_clicked); // CTRL+click to toggle
                    else //if (!(selection_mask & (1 << node_clicked))) // Depending on selection behavior you want, this commented bit preserve selection when clicking on item that is part of the selection
                        selection_mask.value = (1 << node_clicked); // Click to single-select
                }
                ImGui.PopStyleVar();
                if (align_label_with_current_x_position.value)
                    ImGui.Indent(ImGui.GetTreeNodeToLabelSpacing());
                ImGui.TreePop();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Collapsing Headers")) {
            /* static */ const closable_group = STATIC("closable_group", true);
            ImGui.Checkbox("Show 2nd header", (value = closable_group.value) => closable_group.value = value);
            if (ImGui.CollapsingHeader("Header")) {
                ImGui.Text(`IsItemHovered: ${ImGui.IsItemHovered()}`);
                for (let i = 0; i < 5; i++)
                    ImGui.Text(`Some content ${i}`);
            }
            if (ImGui.CollapsingHeader("Header with a close button", (value = closable_group.value) => closable_group.value = value)) {
                ImGui.Text(`IsItemHovered: ${ImGui.IsItemHovered()}`);
                for (let i = 0; i < 5; i++)
                    ImGui.Text(`More content ${i}`);
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Bullets")) {
            ImGui.BulletText("Bullet point 1");
            ImGui.BulletText("Bullet point 2\nOn multiple lines");
            ImGui.Bullet();
            ImGui.Text("Bullet point 3 (two calls)");
            ImGui.Bullet();
            ImGui.SmallButton("Button");
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Text")) {
            if (ImGui.TreeNode("Colored Text")) {
                // Using shortcut. You can use PushStyleColor()/PopStyleColor() for more flexibility.
                ImGui.TextColored(new imgui_20.ImVec4(1.0, 0.0, 1.0, 1.0), "Pink");
                ImGui.TextColored(new imgui_20.ImVec4(1.0, 1.0, 0.0, 1.0), "Yellow");
                ImGui.TextDisabled("Disabled");
                ImGui.SameLine();
                HelpMarker("The TextDisabled color is stored in ImGuiStyle.");
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Word Wrapping")) {
                // Using shortcut. You can use PushTextWrapPos()/PopTextWrapPos() for more flexibility.
                ImGui.TextWrapped("This text should automatically wrap on the edge of the window. The current implementation for text wrapping follows simple rules suitable for English and possibly other languages.");
                ImGui.Spacing();
                /* static */ const wrap_width = STATIC("wrap_width", 200.0);
                ImGui.SliderFloat("Wrap width", (value = wrap_width.value) => wrap_width.value = value, -20, 600, "%.0f");
                ImGui.Text("Test paragraph 1:");
                let pos = ImGui.GetCursorScreenPos();
                ImGui.GetWindowDrawList().AddRectFilled(new imgui_19.ImVec2(pos.x + wrap_width.value, pos.y), new imgui_19.ImVec2(pos.x + wrap_width.value + 10, pos.y + ImGui.GetTextLineHeight()), imgui_21.IM_COL32(255, 0, 255, 255));
                ImGui.PushTextWrapPos(ImGui.GetCursorPos().x + wrap_width.value);
                ImGui.Text(`The lazy dog is a good dog. This paragraph is made to fit within ${wrap_width.value.toFixed(0)} pixels. Testing a 1 character word. The quick brown fox jumps over the lazy dog.`);
                ImGui.GetWindowDrawList().AddRect(ImGui.GetItemRectMin(), ImGui.GetItemRectMax(), imgui_21.IM_COL32(255, 255, 0, 255));
                ImGui.PopTextWrapPos();
                ImGui.Text("Test paragraph 2:");
                pos = ImGui.GetCursorScreenPos();
                ImGui.GetWindowDrawList().AddRectFilled(new imgui_19.ImVec2(pos.x + wrap_width.value, pos.y), new imgui_19.ImVec2(pos.x + wrap_width.value + 10, pos.y + ImGui.GetTextLineHeight()), imgui_21.IM_COL32(255, 0, 255, 255));
                ImGui.PushTextWrapPos(ImGui.GetCursorPos().x + wrap_width.value);
                ImGui.Text("aaaaaaaa bbbbbbbb, c cccccccc,dddddddd. d eeeeeeee   ffffffff. gggggggg!hhhhhhhh");
                ImGui.GetWindowDrawList().AddRect(ImGui.GetItemRectMin(), ImGui.GetItemRectMax(), imgui_21.IM_COL32(255, 255, 0, 255));
                ImGui.PopTextWrapPos();
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("UTF-8 Text")) {
                // UTF-8 test with Japanese characters
                // (Needs a suitable font, try Noto, or Arial Unicode, or M+ fonts. Read misc/fonts/README.txt for details.)
                // - From C++11 you can use the u8"my text" syntax to encode literal strings as UTF-8
                // - For earlier compiler, you may be able to encode your sources as UTF-8 (e.g. Visual Studio save your file as 'UTF-8 without signature')
                // - FOR THIS DEMO FILE ONLY, BECAUSE WE WANT TO SUPPORT OLD COMPILERS, WE ARE *NOT* INCLUDING RAW UTF-8 CHARACTERS IN THIS SOURCE FILE.
                //   Instead we are encoding a few strings with hexadecimal constants. Don't do this in your application!
                //   Please use u8"text in any language" in your application!
                // Note that characters values are preserved even by InputText() if the font cannot be displayed, so you can safely copy & paste garbled characters into another application.
                ImGui.TextWrapped("CJK text will only appears if the font was loaded with the appropriate CJK character ranges. Call io.Font->AddFontFromFileTTF() manually to load extra character ranges. Read misc/fonts/README.txt for details.");
                // か \xe3\x81\x8b U+304B &#12363;
                // き \xe3\x81\x8d U+304D &#12365;
                // く \xe3\x81\x8f U+304F &#12367;
                // け \xe3\x81\x91 U+3051 &#12369;
                // こ \xe3\x81\x93 U+3053 &#12371;
                // ImGui.Text("Hiragana: \xe3\x81\x8b\xe3\x81\x8d\xe3\x81\x8f\xe3\x81\x91\xe3\x81\x93 (kakikukeko)"); // Normally we would use u8"blah blah" with the proper characters directly in the string.
                // ImGui.Text("Hiragana: \u304B\u304D\u304F\u3051\u3053 (kakikukeko)"); // Normally we would use u8"blah blah" with the proper characters directly in the string.
                ImGui.Text("Hiragana: かきくけこ (kakikukeko)"); // Normally we would use u8"blah blah" with the proper characters directly in the string.
                // 日 \xe6\x97\xa5 U+65E5 &#26085;
                // 本 \xe6\x9c\xac U+672C &#26412;
                // 語 \xe8\xaa\x9e U+8A9E &#35486;
                // ImGui.Text("Kanjis: \xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e (nihongo)");
                // ImGui.Text("Kanjis: \u65E5\u672C\u8A9E (nihongo)");
                ImGui.Text("Kanjis: 日本語 (nihongo)");
                // /* static */ const buf: Static<ImStringBuffer> = STATIC("buf", new ImStringBuffer(32, "\xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e"));
                // /* static */ const buf: Static<ImStringBuffer> = STATIC("buf", new ImStringBuffer(32, "\u65E5\u672C\u8A9E"));
                /* static */ const buf = STATIC("buf", new imgui_4.ImStringBuffer(32, "日本語"));
                //static char buf[32] = u8"NIHONGO"; // <- this is how you would write it with C++11, using real kanjis
                ImGui.InputText("UTF-8 input", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                ImGui.TreePop();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Images")) {
            const io = ImGui.GetIO();
            ImGui.TextWrapped("Below we are displaying the font texture (which is the only texture we have access to in this demo). Use the 'ImTextureID' type as storage to pass pointers or identifier to your own texture data. Hover the texture for a zoomed view!");
            // Here we are grabbing the font texture because that's the only one we have access to inside the demo code.
            // Remember that ImTextureID is just storage for whatever you want it to be, it is essentially a value that will be passed to the render function inside the ImDrawCmd structure.
            // If you use one of the default imgui_impl_XXXX.cpp renderer, they all have comments at the top of their file to specify what they expect to be stored in ImTextureID.
            // (for example, the imgui_impl_dx11.cpp renderer expect a 'ID3D11ShaderResourceView*' pointer. The imgui_impl_glfw_gl3.cpp renderer expect a GLuint OpenGL texture identifier etc.)
            // If you decided that ImTextureID = MyEngineTexture*, then you can pass your MyEngineTexture* pointers to ImGui.Image(), and gather width/height through your own functions, etc.
            // Using ShowMetricsWindow() as a "debugger" to inspect the draw data that are being passed to your render will help you debug issues if you are confused about this.
            // Consider using the lower-level ImDrawList::AddImage() API, via ImGui.GetWindowDrawList()->AddImage().
            const my_tex_id = io.Fonts.TexID;
            const my_tex_w = io.Fonts.TexWidth;
            const my_tex_h = io.Fonts.TexHeight;
            ImGui.Text(`${my_tex_w.toFixed(0)}x${my_tex_h.toFixed(0)}`);
            const pos = ImGui.GetCursorScreenPos();
            ImGui.Image(my_tex_id, new imgui_19.ImVec2(my_tex_w, my_tex_h), new imgui_19.ImVec2(0, 0), new imgui_19.ImVec2(1, 1), new imgui_20.ImVec4(1.0, 1.0, 1.0, 1.0), new imgui_20.ImVec4(1.0, 1.0, 1.0, 0.5));
            if (ImGui.IsItemHovered()) {
                ImGui.BeginTooltip();
                const region_sz = 32.0;
                let region_x = io.MousePos.x - pos.x - region_sz * 0.5;
                if (region_x < 0.0)
                    region_x = 0.0;
                else if (region_x > my_tex_w - region_sz)
                    region_x = my_tex_w - region_sz;
                let region_y = io.MousePos.y - pos.y - region_sz * 0.5;
                if (region_y < 0.0)
                    region_y = 0.0;
                else if (region_y > my_tex_h - region_sz)
                    region_y = my_tex_h - region_sz;
                let zoom = 4.0;
                ImGui.Text(`Min: (${region_x.toFixed(2)}, ${region_y.toFixed(2)})`);
                ImGui.Text(`Max: (${(region_x + region_sz).toFixed(2)}, ${(region_y + region_sz).toFixed(2)})`);
                const uv0 = new imgui_19.ImVec2((region_x) / my_tex_w, (region_y) / my_tex_h);
                const uv1 = new imgui_19.ImVec2((region_x + region_sz) / my_tex_w, (region_y + region_sz) / my_tex_h);
                ImGui.Image(my_tex_id, new imgui_19.ImVec2(region_sz * zoom, region_sz * zoom), uv0, uv1, new imgui_22.ImColor(255, 255, 255, 255).toImVec4(), new imgui_22.ImColor(255, 255, 255, 128).toImVec4());
                ImGui.EndTooltip();
            }
            ImGui.TextWrapped("And now some textured buttons..");
            /* static */ const pressed_count = STATIC("pressed_count", 0);
            for (let i = 0; i < 8; i++) {
                ImGui.PushID(i);
                const frame_padding = -1 + i; // -1 = uses default padding
                if (ImGui.ImageButton(my_tex_id, new imgui_19.ImVec2(32, 32), new imgui_19.ImVec2(0, 0), new imgui_19.ImVec2(32.0 / my_tex_w, 32 / my_tex_h), frame_padding, new imgui_20.ImVec4(0, 0, 0, 1)))
                    pressed_count.value += 1;
                ImGui.PopID();
                ImGui.SameLine();
            }
            ImGui.NewLine();
            ImGui.Text(`Pressed ${pressed_count.value} times.`);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Combo")) {
            // Expose flags as checkbox for the demo
            /* static */ const flags = STATIC("flags#669", 0);
            ImGui.CheckboxFlags("ImGuiComboFlags_PopupAlignLeft", (value = flags.value) => flags.value = value, ImGui.ImGuiComboFlags.PopupAlignLeft);
            ImGui.SameLine();
            HelpMarker("Only makes a difference if the popup is larger than the combo");
            if (ImGui.CheckboxFlags("ImGuiComboFlags_NoArrowButton", (value = flags.value) => flags.value = value, ImGui.ImGuiComboFlags.NoArrowButton))
                flags.value &= ~ImGui.ImGuiComboFlags.NoPreview; // Clear the other flag, as we cannot combine both
            if (ImGui.CheckboxFlags("ImGuiComboFlags_NoPreview", (value = flags.value) => flags.value = value, ImGui.ImGuiComboFlags.NoPreview))
                flags.value &= ~ImGui.ImGuiComboFlags.NoArrowButton; // Clear the other flag, as we cannot combine both
            // General BeginCombo() API, you have full control over your selection data and display type.
            // (your selection data could be an index, a pointer to the object, an id for the object, a flag stored in the object itself, etc.)
            const items = ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO"];
            /* static */ const item_current = STATIC("item_current#692", items[0]); // Here our selection is a single pointer stored outside the object.
            if (ImGui.BeginCombo("combo 1", item_current.value, flags.value)) // The second parameter is the label previewed before opening the combo.
             {
                for (let n = 0; n < imgui_3.IM_ARRAYSIZE(items); n++) {
                    const is_selected = (item_current.value === items[n]);
                    if (ImGui.Selectable(items[n], is_selected))
                        item_current.value = items[n];
                    if (is_selected)
                        ImGui.SetItemDefaultFocus(); // Set the initial focus when opening the combo (scrolling + for keyboard navigation support in the upcoming navigation branch)
                }
                ImGui.EndCombo();
            }
            // Simplified one-liner Combo() API, using values packed in a single constant string
            /* static */ const item_current_2 = STATIC("item_current_2", 0);
            ImGui.Combo("combo 2", (value = item_current_2.value) => item_current_2.value = value, "aaaa\0bbbb\0cccc\0dddd\0eeee\0\0");
            // Simplified one-liner Combo() using an array of const char*
            /* static */ const item_current_3 = STATIC("item_current_3", -1); // If the selection isn't within 0..count, Combo won't display a preview
            ImGui.Combo("combo 3 (array)", (value = item_current_3.value) => item_current_3.value = value, items, imgui_3.IM_ARRAYSIZE(items));
            // Simplified one-liner Combo() using an accessor function
            // struct FuncHolder { static bool ItemGetter(void* data, int idx, const char** out_str) { *out_str = ((const char**)data)[idx]; return true; } };
            class FuncHolder {
                static ItemGetter(data, idx, out_str) { out_str[0] = data[idx]; return true; }
                ;
            }
            /* static */ const item_current_4 = STATIC("item_current_4", 0);
            ImGui.Combo("combo 4 (function)", (value = item_current_4.value) => item_current_4.value = value, FuncHolder.ItemGetter, items, imgui_3.IM_ARRAYSIZE(items));
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Selectables")) {
            // Selectable() has 2 overloads:
            // - The one taking "bool selected" as a read-only selection information. When Selectable() has been clicked is returns true and you can alter selection state accordingly.
            // - The one taking "bool* p_selected" as a read-write selection information (convenient in some cases)
            // The earlier is more flexible, as in real application your selection may be stored in a different manner (in flags within objects, as an external list, etc).
            if (ImGui.TreeNode("Basic")) {
                /* static */ const selection = STATIC("selection#695", [false, true, false, false, false]);
                ImGui.Selectable("1. I am selectable", (value = selection.value[0]) => selection.value[0] = value);
                ImGui.Selectable("2. I am selectable", (value = selection.value[1]) => selection.value[1] = value);
                ImGui.Text("3. I am not selectable");
                ImGui.Selectable("4. I am selectable", (value = selection.value[3]) => selection.value[2] = value);
                if (ImGui.Selectable("5. I am double clickable", selection.value[4], imgui_12.ImGuiSelectableFlags.AllowDoubleClick))
                    if (ImGui.IsMouseDoubleClicked(0))
                        selection.value[4] = !selection.value[4];
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Selection State: Single Selection")) {
                /* static */ const selected = STATIC("selected#707", -1);
                for (let n = 0; n < 5; n++) {
                    const buf = `Object ${n}`;
                    if (ImGui.Selectable(buf, selected.value === n))
                        selected.value = n;
                }
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Selection State: Multiple Selection")) {
                HelpMarker("Hold CTRL and click to select multiple items.");
                /* static */ const selection = STATIC("selection#720", [false, false, false, false, false]);
                for (let n = 0; n < 5; n++) {
                    const buf = `Object ${n}`;
                    if (ImGui.Selectable(buf, selection.value[n])) {
                        if (!ImGui.GetIO().KeyCtrl) // Clear selection when CTRL is not held
                            // memset(selection, 0, sizeof(selection));
                            selection.value.fill(false);
                        selection.value[n] = !selection.value[n];
                    }
                }
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Rendering more text into the same line")) {
                // Using the Selectable() override that takes "bool* p_selected" parameter and toggle your booleans automatically.
                /* static */ const selected = STATIC("selected#687", [false, false, false]);
                ImGui.Selectable("main.c", (value = selected.value[0]) => selected.value[0] = value);
                ImGui.SameLine(300);
                ImGui.Text(" 2,345 bytes");
                ImGui.Selectable("Hello.cpp", (value = selected.value[1]) => selected.value[1] = value);
                ImGui.SameLine(300);
                ImGui.Text("12,345 bytes");
                ImGui.Selectable("Hello.h", (value = selected.value[2]) => selected.value[2] = value);
                ImGui.SameLine(300);
                ImGui.Text(" 2,345 bytes");
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("In columns")) {
                ImGui.Columns(3, null, false);
                /* static */ const selected = STATIC("selected#699", new Array(16).fill(false));
                for (let i = 0; i < 16; i++) {
                    const label = `Item ${i}`;
                    if (ImGui.Selectable(label, (value = selected.value[i]) => selected.value[i] = value)) { }
                    ImGui.NextColumn();
                }
                ImGui.Columns(1);
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Grid")) {
                /* static */ const selected = STATIC("selected#712", [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true]);
                for (let i = 0; i < 4 * 4; i++) {
                    ImGui.PushID(i);
                    if (ImGui.Selectable("Sailor", (value = selected.value[i]) => selected.value[i] = value, 0, new imgui_19.ImVec2(50, 50))) {
                        // Note: We _unnecessarily_ test for both x/y and i here only to silence some static analyzer. The second part of each test is unnecessary.
                        const x = i % 4;
                        const y = i / 4;
                        if (x > 0) {
                            selected.value[i - 1] = !selected.value[i - 1];
                        }
                        if (x < 3 && i < 15) {
                            selected.value[i + 1] = !selected.value[i + 1];
                        }
                        if (y > 0 && i > 3) {
                            selected.value[i - 4] = !selected.value[i - 4];
                        }
                        if (y < 3 && i < 12) {
                            selected.value[i + 4] = !selected.value[i + 4];
                        }
                    }
                    if ((i % 4) < 3)
                        ImGui.SameLine();
                    ImGui.PopID();
                }
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Alignment")) {
                HelpMarker("Alignment applies when a selectable is larger than its text content.\nBy default, Selectables uses style.SelectableTextAlign but it can be overriden on a per-item basis using PushStyleVar().");
                /* static */ const selected = STATIC("selected#1012", [true, false, true, false, true, false, true, false, true]);
                for (let y = 0; y < 3; y++) {
                    for (let x = 0; x < 3; x++) {
                        const alignment = new imgui_19.ImVec2(x / 2.0, y / 2.0);
                        // char name[32];
                        // sprintf(name, "(%.1f,%.1f)", alignment.x, alignment.y);
                        const name = `(${alignment.x.toFixed(1)},${alignment.y.toFixed(1)})`;
                        if (x > 0)
                            ImGui.SameLine();
                        ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.SelectableTextAlign, alignment);
                        // ImGui.Selectable(name, &selected[3*y+x], ImGuiSelectableFlags_None, ImVec2(80,80));
                        ImGui.Selectable(name, (value = selected.value[3 * y + x]) => selected.value[3 * y + x] = value, imgui_12.ImGuiSelectableFlags.None, new imgui_19.ImVec2(80, 80));
                        ImGui.PopStyleVar();
                    }
                }
                ImGui.TreePop();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Text Input")) {
            if (ImGui.TreeNode("Multi-line Text Input")) {
                // Note: we are using a fixed-sized buffer for simplicity here. See ImGuiInputTextFlags_CallbackResize
                // and the code in misc/cpp/imgui_stdlib.h for how to setup InputText() for dynamically resizing strings.
                /* static */ const text = STATIC("text", new imgui_4.ImStringBuffer(1024 * 16, "/*\n" +
                    " The Pentium F00F bug, shorthand for F0 0F C7 C8,\n" +
                    " the hexadecimal encoding of one offending instruction,\n" +
                    " more formally, the invalid operand with locked CMPXCHG8B\n" +
                    " instruction bug, is a design flaw in the majority of\n" +
                    " Intel Pentium, Pentium MMX, and Pentium OverDrive\n" +
                    " processors (all in the P5 microarchitecture).\n" +
                    "*/\n\n" +
                    "label:\n" +
                    "\tlock cmpxchg8b eax\n"));
                /* static */ const flags = STATIC("flags", imgui_10.ImGuiInputTextFlags.AllowTabInput);
                HelpMarker("You can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputTextMultiline() to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example. (This is not demonstrated in imgui_demo.cpp)");
                ImGui.CheckboxFlags("ImGuiInputTextFlags_ReadOnly", (value = flags.value) => flags.value = value, imgui_10.ImGuiInputTextFlags.ReadOnly);
                ImGui.CheckboxFlags("ImGuiInputTextFlags_AllowTabInput", (value = flags.value) => flags.value = value, imgui_10.ImGuiInputTextFlags.AllowTabInput);
                ImGui.CheckboxFlags("ImGuiInputTextFlags_CtrlEnterForNewLine", (value = flags.value) => flags.value = value, imgui_10.ImGuiInputTextFlags.CtrlEnterForNewLine);
                ImGui.InputTextMultiline("##source", text.value, imgui_3.IM_ARRAYSIZE(text.value), new imgui_19.ImVec2(-1.0, ImGui.GetTextLineHeight() * 16), flags.value);
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Filtered Text Input")) {
                /* static */ const buf1 = STATIC("buf1", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("default", buf1.value, imgui_3.IM_ARRAYSIZE(buf1.value));
                /* static */ const buf2 = STATIC("buf2", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("decimal", buf2.value, imgui_3.IM_ARRAYSIZE(buf2.value), imgui_10.ImGuiInputTextFlags.CharsDecimal);
                /* static */ const buf3 = STATIC("buf3", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("hexadecimal", buf3.value, imgui_3.IM_ARRAYSIZE(buf3.value), imgui_10.ImGuiInputTextFlags.CharsHexadecimal | imgui_10.ImGuiInputTextFlags.CharsUppercase);
                /* static */ const buf4 = STATIC("buf4", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("uppercase", buf4.value, imgui_3.IM_ARRAYSIZE(buf4.value), imgui_10.ImGuiInputTextFlags.CharsUppercase);
                /* static */ const buf5 = STATIC("buf5", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("no blank", buf5.value, imgui_3.IM_ARRAYSIZE(buf5.value), imgui_10.ImGuiInputTextFlags.CharsNoBlank);
                class TextFilters {
                    static FilterImGuiLetters(data) { if (data.EventChar < 256 && /[imgui]/.test(String.fromCharCode(data.EventChar)))
                        return 0; return 1; }
                }
                /* static */ const buf6 = STATIC("buf6", new imgui_4.ImStringBuffer(64, ""));
                ImGui.InputText("\"imgui\" letters", buf6.value, imgui_3.IM_ARRAYSIZE(buf6.value), imgui_10.ImGuiInputTextFlags.CallbackCharFilter, TextFilters.FilterImGuiLetters);
                ImGui.Text("Password input");
                /* static */ const bufpass = STATIC("bufpass", new imgui_4.ImStringBuffer(64, "password123"));
                ImGui.InputText("password", bufpass.value, imgui_3.IM_ARRAYSIZE(bufpass.value), imgui_10.ImGuiInputTextFlags.Password | imgui_10.ImGuiInputTextFlags.CharsNoBlank);
                ImGui.SameLine();
                HelpMarker("Display all characters as '*'.\nDisable clipboard cut and copy.\nDisable logging.\n");
                ImGui.InputText("password (clear)", bufpass.value, imgui_3.IM_ARRAYSIZE(bufpass.value), imgui_10.ImGuiInputTextFlags.CharsNoBlank);
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Resize Callback")) {
                // If you have a custom string type you would typically create a ImGui.InputText() wrapper than takes your type as input.
                // See misc/cpp/imgui_stdlib.h and .cpp for an implementation of this using std::string.
                HelpMarker("Demonstrate using ImGuiInputTextFlags_CallbackResize to wire your resizable string type to InputText().\n\nSee misc/cpp/imgui_stdlib.h for an implementation of this for std::string.");
                // struct Funcs
                // {
                //     static int MyResizeCallback(ImGuiInputTextCallbackData* data)
                //     {
                //         if (data->EventFlag == ImGuiInputTextFlags_CallbackResize)
                //         {
                //             ImVector<char>* my_str = (ImVector<char>*)data->UserData;
                //             IM_ASSERT(my_str->begin() == data->Buf);
                //             my_str->resize(data->BufSize);  // NB: On resizing calls, generally data->BufSize == data->BufTextLen + 1
                //             data->Buf = my_str->begin();
                //         }
                //         return 0;
                //     }
                //     // Tip: Because ImGui. is a namespace you would typicall add your own function into the namespace in your own source files.
                //     // For example, you may add a function called ImGui.InputText(const char* label, MyString* my_str).
                //     static bool MyInputTextMultiline(const char* label, ImVector<char>* my_str, const ImVec2& size = ImVec2(0, 0), ImGuiInputTextFlags flags = 0)
                //     {
                //         IM_ASSERT((flags & ImGuiInputTextFlags_CallbackResize) == 0);
                //         return ImGui.InputTextMultiline(label, my_str->begin(), (size_t)my_str->size(), size, flags | ImGuiInputTextFlags_CallbackResize, Funcs::MyResizeCallback, (void*)my_str);
                //     }
                // };
                // For this demo we are using ImVector as a string container.
                // Note that because we need to store a terminating zero character, our size/capacity are 1 more than usually reported by a typical string class.
                // static ImVector<char> my_str;
                // if (my_str.empty())
                //     my_str.push_back(0);
                // Funcs::MyInputTextMultiline("##MyStr", &my_str, ImVec2(-1.0f, ImGui.GetTextLineHeight() * 16));
                // ImGui.Text("Data: %p\nSize: %d\nCapacity: %d", (void*)my_str.begin(), my_str.size(), my_str.capacity());
                ImGui.TreePop();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Plots Widgets")) {
            /* static */ const animate = STATIC("animate", true);
            ImGui.Checkbox("Animate", (value = animate.value) => animate.value = value);
            /* static */ const arr = STATIC("arr", [0.6, 0.1, 1.0, 0.5, 0.92, 0.1, 0.2]);
            ImGui.PlotLines("Frame Times", arr.value, imgui_3.IM_ARRAYSIZE(arr.value));
            // Create a dummy array of contiguous float values to plot
            // Tip: If your float aren't contiguous but part of a structure, you can pass a pointer to your first float and the sizeof() of your structure in the Stride parameter.
            /* static */ const values = STATIC("values#803", new Array(90).fill(0));
            /* static */ const values_offset = STATIC("values_offset", 0);
            /* static */ const refresh_time = STATIC("refresh_time", 0.0);
            if (!animate.value || refresh_time.value === 0.0)
                refresh_time.value = ImGui.GetTime();
            while (refresh_time.value < ImGui.GetTime()) // Create dummy data at fixed 60 hz rate for the demo
             {
                /* static */ const phase = STATIC("phase", 0.0);
                values.value[values_offset.value] = Math.cos(phase.value);
                values_offset.value = (values_offset.value + 1) % imgui_3.IM_ARRAYSIZE(values.value);
                phase.value += 0.10 * values_offset.value;
                refresh_time.value += 1.0 / 60.0;
            }
            ImGui.PlotLines("Lines", values.value, imgui_3.IM_ARRAYSIZE(values.value), values_offset.value, "avg 0.0", -1.0, 1.0, new imgui_19.ImVec2(0, 80));
            ImGui.PlotHistogram("Histogram", arr.value, imgui_3.IM_ARRAYSIZE(arr.value), 0, null, 0.0, 1.0, new imgui_19.ImVec2(0, 80));
            // Use functions to generate output
            // FIXME: This is rather awkward because current plot API only pass in indices. We probably want an API passing floats and user provide sample rate/count.
            class Funcs {
                static Sin(data, i) { return Math.sin(i * 0.1); }
                static Saw(data, i) { return (i & 1) ? 1.0 : -1.0; }
            }
            /* static */ const func_type = STATIC("func_type", 0), display_count = STATIC("display_count", 70);
            ImGui.Separator();
            ImGui.SetNextItemWidth(100);
            ImGui.Combo("func", (value = func_type.value) => func_type.value = value, "Sin\0Saw\0");
            ImGui.SameLine();
            ImGui.SliderInt("Sample count", (value = display_count.value) => display_count.value = value, 1, 400);
            const func = (func_type.value === 0) ? Funcs.Sin : Funcs.Saw;
            ImGui.PlotLines("Lines", func, null, display_count.value, 0, null, -1.0, 1.0, new imgui_19.ImVec2(0, 80));
            ImGui.PlotHistogram("Histogram", func, null, display_count.value, 0, null, -1.0, 1.0, new imgui_19.ImVec2(0, 80));
            ImGui.Separator();
            // Animate a simple progress bar
            /* static */ const progress = STATIC("progress", 0.0), progress_dir = STATIC("progress_dir", 1.0);
            if (animate.value) {
                progress.value += progress_dir.value * 0.4 * ImGui.GetIO().DeltaTime;
                if (progress.value >= +1.1) {
                    progress.value = +1.1;
                    progress_dir.value *= -1.0;
                }
                if (progress.value <= -0.1) {
                    progress.value = -0.1;
                    progress_dir.value *= -1.0;
                }
            }
            // Typically we would use ImVec2(-1.0f,0.0) to use all available width, or ImVec2(width,0.0) for a specified width. ImVec2(0.0,0.0) uses ItemWidth.
            ImGui.ProgressBar(progress.value, new imgui_19.ImVec2(0.0, 0.0));
            ImGui.SameLine(0.0, ImGui.GetStyle().ItemInnerSpacing.x);
            ImGui.Text("Progress Bar");
            const progress_saturated = (progress.value < 0.0) ? 0.0 : (progress.value > 1.0) ? 1.0 : progress.value;
            const buf = `${(progress_saturated * 1753).toFixed(0)}/${1753}`;
            ImGui.ProgressBar(progress.value, new imgui_19.ImVec2(0., 0.), buf);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Color/Picker Widgets")) {
            /* static */ const color = STATIC("color#863", new imgui_20.ImVec4(114.0 / 255.0, 144.0 / 255.0, 154.0 / 255.0, 200.0 / 255.0));
            /* static */ const alpha_preview = STATIC("alpha_preview", true);
            /* static */ const alpha_half_preview = STATIC("alpha_half_preview", false);
            /* static */ const drag_and_drop = STATIC("drag_and_drop", true);
            /* static */ const options_menu = STATIC("options_menu", true);
            /* static */ const hdr = STATIC("hdr", false);
            ImGui.Checkbox("With Alpha Preview", (value = alpha_preview.value) => alpha_preview.value = value);
            ImGui.Checkbox("With Half Alpha Preview", (value = alpha_half_preview.value) => alpha_half_preview.value = value);
            ImGui.Checkbox("With Drag and Drop", (value = drag_and_drop.value) => drag_and_drop.value = value);
            ImGui.Checkbox("With Options Menu", (value = options_menu.value) => options_menu.value = value);
            ImGui.SameLine();
            HelpMarker("Right-click on the individual color widget to show options.");
            ImGui.Checkbox("With HDR", (value = hdr.value) => hdr.value = value);
            ImGui.SameLine();
            HelpMarker("Currently all this does is to lift the 0..1 limits on dragging widgets.");
            const misc_flags = (hdr.value ? imgui_6.ImGuiColorEditFlags.HDR : 0) | (drag_and_drop.value ? 0 : imgui_6.ImGuiColorEditFlags.NoDragDrop) | (alpha_half_preview.value ? imgui_6.ImGuiColorEditFlags.AlphaPreviewHalf : (alpha_preview.value ? imgui_6.ImGuiColorEditFlags.AlphaPreview : 0)) | (options_menu.value ? 0 : imgui_6.ImGuiColorEditFlags.NoOptions);
            ImGui.Text("Color widget:");
            ImGui.SameLine();
            HelpMarker("Click on the colored square to open a color picker.\nCTRL+click on individual component to input value.\n");
            ImGui.ColorEdit3("MyColor##1", color.value, misc_flags);
            ImGui.Text("Color widget HSV with Alpha:");
            ImGui.ColorEdit4("MyColor##2", color.value, imgui_6.ImGuiColorEditFlags.DisplayHSV | misc_flags);
            ImGui.Text("Color widget with Float Display:");
            ImGui.ColorEdit4("MyColor##2f", color.value, imgui_6.ImGuiColorEditFlags.Float | misc_flags);
            ImGui.Text("Color button with Picker:");
            ImGui.SameLine();
            HelpMarker("With the ImGuiColorEditFlags.NoInputs flag you can hide all the slider/text inputs.\nWith the ImGuiColorEditFlags.NoLabel flag you can pass a non-empty label which will only be used for the tooltip and picker popup.");
            ImGui.ColorEdit4("MyColor##3", color.value, imgui_6.ImGuiColorEditFlags.NoInputs | imgui_6.ImGuiColorEditFlags.NoLabel | misc_flags);
            ImGui.Text("Color button with Custom Picker Popup:");
            // Generate a dummy default palette. The palette will persist and can be edited.
            /* static */ const saved_palette_init = STATIC("saved_palette_init", true);
            /* static */ const saved_palette = STATIC("saved_palette", []);
            if (saved_palette_init.value) {
                for (let n = 0; n < 32; n++) {
                    saved_palette.value[n] = new imgui_20.ImVec4();
                    // ImGui.ColorConvertHSVtoRGB(n / 31.0f, 0.8f, 0.8f, saved_palette[n].x, saved_palette[n].y, saved_palette[n].z);
                    const r = [0.0];
                    const g = [0.0];
                    const b = [0.0];
                    ImGui.ColorConvertHSVtoRGB(n / 32.0, 0.8, 0.8, r, g, b);
                    saved_palette.value[n].x = r[0];
                    saved_palette.value[n].y = g[0];
                    saved_palette.value[n].z = b[0];
                    saved_palette.value[n].w = 1.0; // Alpha
                }
                saved_palette_init.value = false;
            }
            /* static */ const backup_color = STATIC("backup_color", new imgui_20.ImVec4());
            let open_popup = ImGui.ColorButton("MyColor##3b", color.value, misc_flags);
            ImGui.SameLine();
            open_popup = ImGui.Button("Palette") || open_popup;
            if (open_popup) {
                ImGui.OpenPopup("mypicker");
                backup_color.value.Copy(color.value);
            }
            if (ImGui.BeginPopup("mypicker")) {
                ImGui.Text("MY CUSTOM COLOR PICKER WITH AN AMAZING PALETTE!");
                ImGui.Separator();
                ImGui.ColorPicker4("##picker", color.value, misc_flags | imgui_6.ImGuiColorEditFlags.NoSidePreview | imgui_6.ImGuiColorEditFlags.NoSmallPreview);
                ImGui.SameLine();
                ImGui.BeginGroup(); // Lock X position
                ImGui.Text("Current");
                ImGui.ColorButton("##current", color.value, imgui_6.ImGuiColorEditFlags.NoPicker | imgui_6.ImGuiColorEditFlags.AlphaPreviewHalf, new imgui_19.ImVec2(60, 40));
                ImGui.Text("Previous");
                if (ImGui.ColorButton("##previous", backup_color.value, imgui_6.ImGuiColorEditFlags.NoPicker | imgui_6.ImGuiColorEditFlags.AlphaPreviewHalf, new imgui_19.ImVec2(60, 40)))
                    color.value.Copy(backup_color.value);
                ImGui.Separator();
                ImGui.Text("Palette");
                for (let n = 0; n < imgui_3.IM_ARRAYSIZE(saved_palette.value); n++) {
                    ImGui.PushID(n);
                    if ((n % 8) !== 0)
                        ImGui.SameLine(0.0, ImGui.GetStyle().ItemSpacing.y);
                    if (ImGui.ColorButton("##palette", saved_palette.value[n], imgui_6.ImGuiColorEditFlags.NoAlpha | imgui_6.ImGuiColorEditFlags.NoPicker | imgui_6.ImGuiColorEditFlags.NoTooltip, new imgui_19.ImVec2(20, 20)))
                        color.value.Copy(new imgui_20.ImVec4(saved_palette.value[n].x, saved_palette.value[n].y, saved_palette.value[n].z, color.value.w)); // Preserve alpha!
                    // Allow user to drop colors into each palette entry
                    // (Note that ColorButton is already a drag source by default, unless using ImGuiColorEditFlags_NoDragDrop)
                    if (ImGui.BeginDragDropTarget()) {
                        // if (const ImGuiPayload* payload = AcceptDragDropPayload(IMGUI_PAYLOAD_TYPE_COLOR_3F))
                        //     memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 3);
                        // if (const ImGuiPayload* payload = AcceptDragDropPayload(IMGUI_PAYLOAD_TYPE_COLOR_4F))
                        //     memcpy((float*)&saved_palette[n], payload->Data, sizeof(float) * 4);
                        ImGui.EndDragDropTarget();
                    }
                    ImGui.PopID();
                }
                ImGui.EndGroup();
                ImGui.EndPopup();
            }
            ImGui.Text("Color button only:");
            ImGui.ColorButton("MyColor##3c", color.value, misc_flags, new imgui_19.ImVec2(80, 80));
            ImGui.Text("Color picker:");
            /* static */ const alpha = STATIC("alpha", true);
            /* static */ const alpha_bar = STATIC("alpha_bar", true);
            /* static */ const side_preview = STATIC("side_preview", true);
            /* static */ const ref_color = STATIC("ref_color", false);
            /* static */ const ref_color_v = STATIC("ref_color_v", new imgui_20.ImVec4(1.0, 0.0, 1.0, 0.5));
            /* static */ const display_mode = STATIC("display_mode", 0);
            /* static */ const picker_mode = STATIC("picker_mode", 0);
            ImGui.Checkbox("With Alpha", (value = alpha.value) => alpha.value = value);
            ImGui.Checkbox("With Alpha Bar", (value = alpha_bar.value) => alpha_bar.value = value);
            ImGui.Checkbox("With Side Preview", (value = side_preview.value) => side_preview.value = value);
            if (side_preview) {
                ImGui.SameLine();
                ImGui.Checkbox("With Ref Color", (value = ref_color.value) => ref_color.value = value);
                if (ref_color.value) {
                    ImGui.SameLine();
                    ImGui.ColorEdit4("##RefColor", ref_color_v.value, imgui_6.ImGuiColorEditFlags.NoInputs | misc_flags);
                }
            }
            ImGui.Combo("Display Mode", (value = display_mode.value) => display_mode.value = value, "Auto/Current\0None\0RGB Only\0HSV Only\0Hex Only\0");
            ImGui.SameLine();
            HelpMarker("ColorEdit defaults to displaying RGB inputs if you don't specify a display mode, but the user can change it with a right-click.\n\nColorPicker defaults to displaying RGB+HSV+Hex if you don't specify a display mode.\n\nYou can change the defaults using SetColorEditOptions().");
            ImGui.Combo("Picker Mode", (value = picker_mode.value) => picker_mode.value = value, "Auto/Current\0Hue bar + SV rect\0Hue wheel + SV triangle\0");
            ImGui.SameLine();
            HelpMarker("User can right-click the picker to change mode.");
            let flags = misc_flags;
            if (!alpha.value)
                flags |= imgui_6.ImGuiColorEditFlags.NoAlpha; // This is by default if you call ColorPicker3() instead of ColorPicker4()
            if (alpha_bar.value)
                flags |= imgui_6.ImGuiColorEditFlags.AlphaBar;
            if (!side_preview.value)
                flags |= imgui_6.ImGuiColorEditFlags.NoSidePreview;
            if (picker_mode.value === 1)
                flags |= imgui_6.ImGuiColorEditFlags.PickerHueBar;
            if (picker_mode.value === 2)
                flags |= imgui_6.ImGuiColorEditFlags.PickerHueWheel;
            if (display_mode.value === 1)
                flags |= imgui_6.ImGuiColorEditFlags.NoInputs; // Disable all RGB/HSV/Hex displays
            if (display_mode.value === 2)
                flags |= imgui_6.ImGuiColorEditFlags.DisplayRGB; // Override display mode
            if (display_mode.value === 3)
                flags |= imgui_6.ImGuiColorEditFlags.DisplayHSV;
            if (display_mode.value === 4)
                flags |= imgui_6.ImGuiColorEditFlags.DisplayHex;
            ImGui.ColorPicker4("MyColor##4", color.value, flags, ref_color.value ? ref_color_v.value : null);
            ImGui.Text("Programmatically set defaults:");
            ImGui.SameLine();
            HelpMarker("SetColorEditOptions() is designed to allow you to set boot-time default.\nWe don't have Push/Pop functions because you can force options on a per-widget basis if needed, and the user can change non-forced ones with the options menu.\nWe don't have a getter to avoid encouraging you to persistently save values that aren't forward-compatible.");
            if (ImGui.Button("Default: Uint8 + HSV + Hue Bar"))
                ImGui.SetColorEditOptions(imgui_6.ImGuiColorEditFlags.Uint8 | imgui_6.ImGuiColorEditFlags.DisplayHSV | imgui_6.ImGuiColorEditFlags.PickerHueBar);
            if (ImGui.Button("Default: Float + HDR + Hue Wheel"))
                ImGui.SetColorEditOptions(imgui_6.ImGuiColorEditFlags.Float | imgui_6.ImGuiColorEditFlags.HDR | imgui_6.ImGuiColorEditFlags.PickerHueWheel);
            // HSV encoded support (to avoid RGB<>HSV round trips and singularities when S==0 or V==0)
            /* static */ const color_stored_as_hsv = STATIC("color_stored_as_hsv", new imgui_20.ImVec4(0.23, 1.0, 1.0, 1.0));
            ImGui.Spacing();
            ImGui.Text("HSV encoded colors");
            ImGui.SameLine();
            HelpMarker("By default, colors are given to ColorEdit and ColorPicker in RGB, but ImGuiColorEditFlags_InputHSV allows you to store colors as HSV and pass them to ColorEdit and ColorPicker as HSV. This comes with the added benefit that you can manipulate hue values with the picker even when saturation or value are zero.");
            ImGui.Text("Color widget with InputHSV:");
            ImGui.ColorEdit4("HSV shown as RGB##1", color_stored_as_hsv.value, imgui_6.ImGuiColorEditFlags.DisplayRGB | imgui_6.ImGuiColorEditFlags.InputHSV | imgui_6.ImGuiColorEditFlags.Float);
            ImGui.ColorEdit4("HSV shown as HSV##1", color_stored_as_hsv.value, imgui_6.ImGuiColorEditFlags.DisplayHSV | imgui_6.ImGuiColorEditFlags.InputHSV | imgui_6.ImGuiColorEditFlags.Float);
            ImGui.DragFloat4("Raw HSV values", color_stored_as_hsv.value, 0.01, 0.0, 1.0);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Range Widgets")) {
            /* static */ const begin = STATIC("begin", 10), end = STATIC("end", 90);
            /* static */ const begin_i = STATIC("begin_i", 100), end_i = STATIC("end_i", 1000);
            ImGui.DragFloatRange2("range", (value = begin.value) => begin.value = value, (value = end.value) => end.value = value, 0.25, 0.0, 100.0, "Min: %.1f %%", "Max: %.1f %%");
            ImGui.DragIntRange2("range int (no bounds)", (value = begin_i.value) => begin_i.value = value, (value = end_i.value) => end_i.value = value, 5, 0, 0, "Min: %d units", "Max: %d units");
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Data Types")) {
            // The DragScalar/InputScalar/SliderScalar functions allow various data types: signed/unsigned int/long long and float/double
            // To avoid polluting the public API with all possible combinations, we use the ImGuiDataType enum to pass the type,
            // and passing all arguments by address.
            // This is the reason the test code below creates local variables to hold "zero" "one" etc. for each types.
            // In practice, if you frequently use a given type that is not covered by the normal API entry points, you can wrap it
            // yourself inside a 1 line function which can take typed argument as value instead of void*, and then pass their address
            // to the generic function. For example:
            //   bool MySliderU64(const char *label, u64* value, u64 min = 0, u64 max = 0, const char* format = "%lld")
            //   {
            //      return SliderScalar(label, ImGuiDataType_U64, value, &min, &max, format);
            //   }
            // Limits (as helper variables that we can take the address of)
            // Note that the SliderScalar function has a maximum usable range of half the natural type maximum, hence the /2 below.
            const INT_MIN = -2147483648; // 0x80000000
            const INT_MAX = +2147483647; // 0x7fffffff
            const UINT_MAX = +4294967295; // 0xffffffff
            // const LLONG_MIN = -9223372036854775808; // 0x8000000000000000
            // const LLONG_MAX = +9223372036854775807; // 0x7fffffffffffffff
            // const ULLONG_MAX = +18446744073709551615; // 0xffffffffffffffff
            const s8_zero = 0, s8_one = 1, s8_fifty = 50, s8_min = -128, s8_max = 127;
            const u8_zero = 0, u8_one = 1, u8_fifty = 50, u8_min = 0, u8_max = 255;
            const s16_zero = 0, s16_one = 1, s16_fifty = 50, s16_min = -32768, s16_max = 32767;
            const u16_zero = 0, u16_one = 1, u16_fifty = 50, u16_min = 0, u16_max = 65535;
            const s32_zero = 0, s32_one = 1, s32_fifty = 50, s32_min = INT_MIN / 2, s32_max = INT_MAX / 2, s32_hi_a = INT_MAX / 2 - 100, s32_hi_b = INT_MAX / 2;
            const u32_zero = 0, u32_one = 1, u32_fifty = 50, u32_min = 0, u32_max = UINT_MAX / 2, u32_hi_a = UINT_MAX / 2 - 100, u32_hi_b = UINT_MAX / 2;
            // const s64_zero = 0,   s64_one = 1,   s64_fifty = 50, s64_min = LLONG_MIN / 2, s64_max = LLONG_MAX / 2,  s64_hi_a = LLONG_MAX / 2 - 100,  s64_hi_b = LLONG_MAX / 2;
            // const u64_zero = 0,   u64_one = 1,   u64_fifty = 50, u64_min = 0,             u64_max = ULLONG_MAX / 2, u64_hi_a = ULLONG_MAX / 2 - 100, u64_hi_b = ULLONG_MAX / 2;
            const f32_zero = 0.0, f32_one = 1.0, f32_lo_a = -10000000000.0, f32_hi_a = +10000000000.0;
            const f64_zero = 0.0, f64_one = 1.0, f64_lo_a = -1000000000000000.0, f64_hi_a = +1000000000000000.0;
            // State
            // static char   s8_v  = 127;
            // static ImU8   u8_v  = 255;
            // static short  s16_v = 32767;
            // static ImU16  u16_v = 65535;
            // static ImS32  s32_v = -1;
            // static ImU32  u32_v = (ImU32)-1;
            // static ImS64  s64_v = -1;
            // static ImU64  u64_v = (ImU64)-1;
            // static float  f32_v = 0.123f;
            // static double f64_v = 90000.01234567890123456789;
            /* static */ const s8_v = STATIC("s8_v", new Int8Array([127]));
            /* static */ const u8_v = STATIC("u8_v", new Uint8Array([255]));
            /* static */ const s16_v = STATIC("s16_v", new Int16Array([32767]));
            /* static */ const u16_v = STATIC("u16_v", new Uint16Array([65535]));
            /* static */ const s32_v = STATIC("s32_v", new Int32Array([-1]));
            /* static */ const u32_v = STATIC("u32_v", new Uint32Array([-1]));
            // /* static */ const s64_v = STATIC("s64_v", new Int64Array([-1]));
            // /* static */ const u64_v = STATIC("u64_v", new Uint64Array([-1]));
            /* static */ const f32_v = STATIC("f32_v", new Float32Array([0.123]));
            /* static */ const f64_v = STATIC("f64_v", new Float64Array([90000.01234567890123456789]));
            const drag_speed = 0.2;
            /* static */ const drag_clamp = STATIC("drag_clamp", false);
            ImGui.Text("Drags:");
            ImGui.Checkbox("Clamp integers to 0..50", (value = drag_clamp.value) => drag_clamp.value = value);
            ImGui.SameLine();
            HelpMarker("As with every widgets in dear imgui, we never modify values unless there is a user interaction.\nYou can override the clamping limits by using CTRL+Click to input a value.");
            // ImGui.DragScalar("drag s8",        ImGuiDataType_S8,     &s8_v,  drag_speed, drag_clamp ? &s8_zero  : NULL, drag_clamp ? &s8_fifty  : NULL);
            // ImGui.DragScalar("drag u8",        ImGuiDataType_U8,     &u8_v,  drag_speed, drag_clamp ? &u8_zero  : NULL, drag_clamp ? &u8_fifty  : NULL, "%u ms");
            // ImGui.DragScalar("drag s16",       ImGuiDataType_S16,    &s16_v, drag_speed, drag_clamp ? &s16_zero : NULL, drag_clamp ? &s16_fifty : NULL);
            // ImGui.DragScalar("drag u16",       ImGuiDataType_U16,    &u16_v, drag_speed, drag_clamp ? &u16_zero : NULL, drag_clamp ? &u16_fifty : NULL, "%u ms");
            // ImGui.DragScalar("drag s32",       ImGuiDataType_S32,    &s32_v, drag_speed, drag_clamp.value ? &s32_zero : null, drag_clamp.value ? &s32_fifty : null);
            // ImGui.DragScalar("drag u32",       ImGuiDataType_U32,    &u32_v, drag_speed, drag_clamp.value ? &u32_zero : null, drag_clamp.value ? &u32_fifty : null, "%u ms");
            // ImGui.DragScalar("drag s64",       ImGuiDataType_S64,    &s64_v, drag_speed, drag_clamp.value ? &s64_zero : null, drag_clamp.value ? &s64_fifty : null);
            // ImGui.DragScalar("drag u64",       ImGuiDataType_U64,    &u64_v, drag_speed, drag_clamp.value ? &u64_zero : null, drag_clamp.value ? &u64_fifty : null);
            // ImGui.DragScalar("drag float",     ImGuiDataType_Float,  &f32_v, 0.005f,  &f32_zero, &f32_one, "%f", 1.0f);
            // ImGui.DragScalar("drag float ^2",  ImGuiDataType_Float,  &f32_v, 0.005f,  &f32_zero, &f32_one, "%f", 2.0f); ImGui.SameLine(); HelpMarker("You can use the 'power' parameter to increase tweaking precision on one side of the range.");
            // ImGui.DragScalar("drag double",    ImGuiDataType_Double, &f64_v, 0.0005f, &f64_zero, null,     "%.10f grams", 1.0f);
            // ImGui.DragScalar("drag double ^2", ImGuiDataType_Double, &f64_v, 0.0005f, &f64_zero, &f64_one, "0 < %.10f < 1", 2.0f);
            ImGui.DragScalar("drag s8", s8_v.value, drag_speed, drag_clamp.value ? s8_zero : null, drag_clamp.value ? s8_fifty : null);
            ImGui.DragScalar("drag u8", u8_v.value, drag_speed, drag_clamp.value ? u8_zero : null, drag_clamp.value ? u8_fifty : null, "%u ms");
            ImGui.DragScalar("drag s16", s16_v.value, drag_speed, drag_clamp.value ? s16_zero : null, drag_clamp.value ? s16_fifty : null);
            ImGui.DragScalar("drag u16", u16_v.value, drag_speed, drag_clamp.value ? u16_zero : null, drag_clamp.value ? u16_fifty : null, "%u ms");
            ImGui.DragScalar("drag s32", s32_v.value, drag_speed, drag_clamp.value ? s32_zero : null, drag_clamp.value ? s32_fifty : null);
            ImGui.DragScalar("drag u32", u32_v.value, drag_speed, drag_clamp.value ? u32_zero : null, drag_clamp.value ? u32_fifty : null, "%u ms");
            // ImGui.DragScalar("drag s64",       s64_v.value, drag_speed, drag_clamp.value ? s64_zero : null, drag_clamp.value ? s64_fifty : null);
            // ImGui.DragScalar("drag u64",       u64_v.value, drag_speed, drag_clamp.value ? u64_zero : null, drag_clamp.value ? u64_fifty : null);
            ImGui.DragScalar("drag float", f32_v.value, 0.005, f32_zero, f32_one, "%f", 1.0);
            ImGui.DragScalar("drag float ^2", f32_v.value, 0.005, f32_zero, f32_one, "%f", 2.0);
            ImGui.DragScalar("drag double", f64_v.value, 0.0005, f64_zero, null, "%.10f grams", 1.0);
            ImGui.DragScalar("drag double ^2", f64_v.value, 0.0005, f64_zero, f64_one, "0 < %.10f < 1", 2.0);
            ImGui.Text("Sliders");
            // ImGui.SliderScalar("slider s8 full",     ImGuiDataType_S8,     &s8_v,  &s8_min,   &s8_max,   "%d");
            // ImGui.SliderScalar("slider u8 full",     ImGuiDataType_U8,     &u8_v,  &u8_min,   &u8_max,   "%u");
            // ImGui.SliderScalar("slider s16 full",    ImGuiDataType_S16,    &s16_v, &s16_min,  &s16_max,  "%d");
            // ImGui.SliderScalar("slider u16 full",    ImGuiDataType_U16,    &u16_v, &u16_min,  &u16_max,  "%u");
            // ImGui.SliderScalar("slider s32 low",     ImGuiDataType_S32,    &s32_v, &s32_zero, &s32_fifty,"%d");
            // ImGui.SliderScalar("slider s32 high",    ImGuiDataType_S32,    &s32_v, &s32_hi_a, &s32_hi_b, "%d");
            // ImGui.SliderScalar("slider s32 full",    ImGuiDataType_S32,    &s32_v, &s32_min,  &s32_max,  "%d");
            // ImGui.SliderScalar("slider u32 low",     ImGuiDataType_U32,    &u32_v, &u32_zero, &u32_fifty,"%u");
            // ImGui.SliderScalar("slider u32 high",    ImGuiDataType_U32,    &u32_v, &u32_hi_a, &u32_hi_b, "%u");
            // ImGui.SliderScalar("slider u32 full",    ImGuiDataType_U32,    &u32_v, &u32_min,  &u32_max,  "%u");
            // ImGui.SliderScalar("slider s64 low",     ImGuiDataType_S64,    &s64_v, &s64_zero, &s64_fifty,"%I64d");
            // ImGui.SliderScalar("slider s64 high",    ImGuiDataType_S64,    &s64_v, &s64_hi_a, &s64_hi_b, "%I64d");
            // ImGui.SliderScalar("slider s64 full",    ImGuiDataType_S64,    &s64_v, &s64_min,  &s64_max,  "%I64d");
            // ImGui.SliderScalar("slider u64 low",     ImGuiDataType_U64,    &u64_v, &u64_zero, &u64_fifty,"%I64u ms");
            // ImGui.SliderScalar("slider u64 high",    ImGuiDataType_U64,    &u64_v, &u64_hi_a, &u64_hi_b, "%I64u ms");
            // ImGui.SliderScalar("slider u64 full",    ImGuiDataType_U64,    &u64_v, &u64_min,  &u64_max,  "%I64u ms");
            // ImGui.SliderScalar("slider float low",   ImGuiDataType_Float,  &f32_v, &f32_zero, &f32_one);
            // ImGui.SliderScalar("slider float low^2", ImGuiDataType_Float,  &f32_v, &f32_zero, &f32_one,  "%.10f", 2.0f);
            // ImGui.SliderScalar("slider float high",  ImGuiDataType_Float,  &f32_v, &f32_lo_a, &f32_hi_a, "%e");
            // ImGui.SliderScalar("slider double low",  ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10f grams", 1.0f);
            // ImGui.SliderScalar("slider double low^2",ImGuiDataType_Double, &f64_v, &f64_zero, &f64_one,  "%.10f", 2.0f);
            // ImGui.SliderScalar("slider double high", ImGuiDataType_Double, &f64_v, &f64_lo_a, &f64_hi_a, "%e grams", 1.0f);
            ImGui.SliderScalar("slider s8 full", s8_v.value, s8_min, s8_max, "%d");
            ImGui.SliderScalar("slider u8 full", u8_v.value, u8_min, u8_max, "%u");
            ImGui.SliderScalar("slider s16 full", s16_v.value, s16_min, s16_max, "%d");
            ImGui.SliderScalar("slider u16 full", u16_v.value, u16_min, u16_max, "%u");
            ImGui.SliderScalar("slider s32 low", s32_v.value, s32_zero, s32_fifty, "%d");
            ImGui.SliderScalar("slider s32 high", s32_v.value, s32_hi_a, s32_hi_b, "%d");
            ImGui.SliderScalar("slider s32 full", s32_v.value, s32_min, s32_max, "%d");
            ImGui.SliderScalar("slider u32 low", u32_v.value, u32_zero, u32_fifty, "%u");
            ImGui.SliderScalar("slider u32 high", u32_v.value, u32_hi_a, u32_hi_b, "%u");
            ImGui.SliderScalar("slider u32 full", u32_v.value, u32_min, u32_max, "%u");
            // ImGui.SliderScalar("slider s64 low",     s64_v.value, s64_zero, s64_fifty,"%I64d");
            // ImGui.SliderScalar("slider s64 high",    s64_v.value, s64_hi_a, s64_hi_b, "%I64d");
            // ImGui.SliderScalar("slider s64 full",    s64_v.value, s64_min,  s64_max,  "%I64d");
            // ImGui.SliderScalar("slider u64 low",     u64_v.value, u64_zero, u64_fifty,"%I64u ms");
            // ImGui.SliderScalar("slider u64 high",    u64_v.value, u64_hi_a, u64_hi_b, "%I64u ms");
            // ImGui.SliderScalar("slider u64 full",    u64_v.value, u64_min,  u64_max,  "%I64u ms");
            ImGui.SliderScalar("slider float low", f32_v.value, f32_zero, f32_one);
            ImGui.SliderScalar("slider float low^2", f32_v.value, f32_zero, f32_one, "%.10f", 2.0);
            ImGui.SliderScalar("slider float high", f32_v.value, f32_lo_a, f32_hi_a, "%e");
            ImGui.SliderScalar("slider double low", f64_v.value, f64_zero, f64_one, "%.10f grams", 1.0);
            ImGui.SliderScalar("slider double low^2", f64_v.value, f64_zero, f64_one, "%.10f", 2.0);
            ImGui.SliderScalar("slider double high", f64_v.value, f64_lo_a, f64_hi_a, "%e grams", 1.0);
            /* static */ const inputs_step = STATIC("inputs_step", true);
            ImGui.Text("Inputs");
            ImGui.Checkbox("Show step buttons", (value = inputs_step.value) => inputs_step.value = value);
            // ImGui.InputScalar("input s8",      ImGuiDataType_S8,     &s8_v,  inputs_step ? &s8_one  : NULL, NULL, "%d");
            // ImGui.InputScalar("input u8",      ImGuiDataType_U8,     &u8_v,  inputs_step ? &u8_one  : NULL, NULL, "%u");
            // ImGui.InputScalar("input s16",     ImGuiDataType_S16,    &s16_v, inputs_step ? &s16_one : NULL, NULL, "%d");
            // ImGui.InputScalar("input u16",     ImGuiDataType_U16,    &u16_v, inputs_step ? &u16_one : NULL, NULL, "%u");
            // ImGui.InputScalar("input s32",     ImGuiDataType_S32,    &s32_v, inputs_step ? &s32_one : NULL, NULL, "%d");
            // ImGui.InputScalar("input s32 hex", ImGuiDataType_S32,    &s32_v, inputs_step ? &s32_one : NULL, NULL, "%08X", ImGuiInputTextFlags_CharsHexadecimal);
            // ImGui.InputScalar("input u32",     ImGuiDataType_U32,    &u32_v, inputs_step ? &u32_one : NULL, NULL, "%u");
            // ImGui.InputScalar("input u32 hex", ImGuiDataType_U32,    &u32_v, inputs_step ? &u32_one : NULL, NULL, "%08X", ImGuiInputTextFlags_CharsHexadecimal);
            // ImGui.InputScalar("input s64",     ImGuiDataType_S64,    &s64_v, inputs_step ? &s64_one : NULL);
            // ImGui.InputScalar("input u64",     ImGuiDataType_U64,    &u64_v, inputs_step ? &u64_one : NULL);
            // ImGui.InputScalar("input float",   ImGuiDataType_Float,  &f32_v, inputs_step ? &f32_one : NULL);
            // ImGui.InputScalar("input double",  ImGuiDataType_Double, &f64_v, inputs_step ? &f64_one : NULL);
            ImGui.InputScalar("input s8", s8_v.value, inputs_step.value ? s8_one : null, null, "%d");
            ImGui.InputScalar("input s8 hex", s8_v.value, inputs_step.value ? s8_one : null, null, "%08X", imgui_10.ImGuiInputTextFlags.CharsHexadecimal);
            ImGui.InputScalar("input s16", s16_v.value, inputs_step.value ? s16_one : null, null, "%d");
            ImGui.InputScalar("input s16 hex", s16_v.value, inputs_step.value ? s16_one : null, null, "%08X", imgui_10.ImGuiInputTextFlags.CharsHexadecimal);
            ImGui.InputScalar("input s32", s32_v.value, inputs_step.value ? s32_one : null, null, "%d");
            ImGui.InputScalar("input s32 hex", s32_v.value, inputs_step.value ? s32_one : null, null, "%08X", imgui_10.ImGuiInputTextFlags.CharsHexadecimal);
            ImGui.InputScalar("input u32", u32_v.value, inputs_step.value ? u32_one : null, null, "%u");
            ImGui.InputScalar("input u32 hex", u32_v.value, inputs_step.value ? u32_one : null, null, "%08X", imgui_10.ImGuiInputTextFlags.CharsHexadecimal);
            // ImGui.InputScalar("input s64",     s64_v.value, inputs_step.value ? s64_one : null);
            // ImGui.InputScalar("input u64",     u64_v.value, inputs_step.value ? u64_one : null);
            ImGui.InputScalar("input float", f32_v.value, inputs_step.value ? f32_one : null);
            ImGui.InputScalar("input double", f64_v.value, inputs_step.value ? f64_one : null);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Multi-component Widgets")) {
            /* static */ const vec4f = STATIC("vec4f", [0.10, 0.20, 0.30, 0.44]);
            /* static */ const vec4i = STATIC("vec4i", [1, 5, 100, 255]);
            ImGui.InputFloat2("input float2", vec4f.value);
            ImGui.DragFloat2("drag float2", vec4f.value, 0.01, 0.0, 1.0);
            ImGui.SliderFloat2("slider float2", vec4f.value, 0.0, 1.0);
            ImGui.InputInt2("input int2", vec4i.value);
            ImGui.DragInt2("drag int2", vec4i.value, 1, 0, 255);
            ImGui.SliderInt2("slider int2", vec4i.value, 0, 255);
            ImGui.Spacing();
            ImGui.InputFloat3("input float3", vec4f.value);
            ImGui.DragFloat3("drag float3", vec4f.value, 0.01, 0.0, 1.0);
            ImGui.SliderFloat3("slider float3", vec4f.value, 0.0, 1.0);
            ImGui.InputInt3("input int3", vec4i.value);
            ImGui.DragInt3("drag int3", vec4i.value, 1, 0, 255);
            ImGui.SliderInt3("slider int3", vec4i.value, 0, 255);
            ImGui.Spacing();
            ImGui.InputFloat4("input float4", vec4f.value);
            ImGui.DragFloat4("drag float4", vec4f.value, 0.01, 0.0, 1.0);
            ImGui.SliderFloat4("slider float4", vec4f.value, 0.0, 1.0);
            ImGui.InputInt4("input int4", vec4i.value);
            ImGui.DragInt4("drag int4", vec4i.value, 1, 0, 255);
            ImGui.SliderInt4("slider int4", vec4i.value, 0, 255);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Vertical Sliders")) {
            const spacing = 4;
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ItemSpacing, new imgui_19.ImVec2(spacing, spacing));
            /* static */ const int_value = STATIC("int_value", 0);
            ImGui.VSliderInt("##int", new imgui_19.ImVec2(18, 160), (value = int_value.value) => int_value.value = value, 0, 5);
            ImGui.SameLine();
            /* static */ const values = STATIC("values#1072", [0.0, 0.60, 0.35, 0.9, 0.70, 0.20, 0.0]);
            ImGui.PushID("set1");
            for (let i = 0; i < 7; i++) {
                if (i > 0)
                    ImGui.SameLine();
                ImGui.PushID(i);
                ImGui.PushStyleColor(imgui_5.ImGuiCol.FrameBg, imgui_22.ImColor.HSV(i / 7.0, 0.5, 0.5));
                ImGui.PushStyleColor(imgui_5.ImGuiCol.FrameBgHovered, imgui_22.ImColor.HSV(i / 7.0, 0.6, 0.5));
                ImGui.PushStyleColor(imgui_5.ImGuiCol.FrameBgActive, imgui_22.ImColor.HSV(i / 7.0, 0.7, 0.5));
                ImGui.PushStyleColor(imgui_5.ImGuiCol.SliderGrab, imgui_22.ImColor.HSV(i / 7.0, 0.9, 0.9));
                ImGui.VSliderFloat("##v", new imgui_19.ImVec2(18, 160), (value = values.value[i]) => values.value[i] = value, 0.0, 1.0, "");
                if (ImGui.IsItemActive() || ImGui.IsItemHovered())
                    ImGui.SetTooltip(`${values.value[i].toFixed(3)}`);
                ImGui.PopStyleColor(4);
                ImGui.PopID();
            }
            ImGui.PopID();
            ImGui.SameLine();
            ImGui.PushID("set2");
            /* static */ const values2 = STATIC("values2", [0.20, 0.80, 0.40, 0.25]);
            const rows = 3;
            const small_slider_size = new imgui_19.ImVec2(18, (160.0 - (rows - 1) * spacing) / rows);
            for (let nx = 0; nx < 4; nx++) {
                if (nx > 0)
                    ImGui.SameLine();
                ImGui.BeginGroup();
                for (let ny = 0; ny < rows; ny++) {
                    ImGui.PushID(nx * rows + ny);
                    ImGui.VSliderFloat("##v", small_slider_size, (value = values2.value[nx]) => values2.value[nx] = value, 0.0, 1.0, "");
                    if (ImGui.IsItemActive() || ImGui.IsItemHovered())
                        ImGui.SetTooltip(`${values2.value[nx].toFixed(3)}`);
                    ImGui.PopID();
                }
                ImGui.EndGroup();
            }
            ImGui.PopID();
            ImGui.SameLine();
            ImGui.PushID("set3");
            for (let i = 0; i < 4; i++) {
                if (i > 0)
                    ImGui.SameLine();
                ImGui.PushID(i);
                ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.GrabMinSize, 40);
                ImGui.VSliderFloat("##v", new imgui_19.ImVec2(40, 160), (value = values.value[i]) => values.value[i] = value, 0.0, 1.0, "%.2f\nsec");
                ImGui.PopStyleVar();
                ImGui.PopID();
            }
            ImGui.PopID();
            ImGui.PopStyleVar();
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Drag and Drop")) {
            {
                // ColorEdit widgets automatically act as drag source and drag target.
                // They are using standardized payload strings IMGUI_PAYLOAD_TYPE_COLOR_3F and IMGUI_PAYLOAD_TYPE_COLOR_4F to allow your own widgets
                // to use colors in their drag and drop interaction. Also see the demo in Color Picker -> Palette demo.
                ImGui.BulletText("Drag and drop in standard widgets");
                ImGui.Indent();
                /* static */ const col1 = STATIC("col1#1309", [1.0, 0.0, 0.2]);
                /* static */ const col2 = STATIC("col2#1310", [0.4, 0.7, 0.0, 0.5]);
                ImGui.ColorEdit3("color 1", col1.value);
                ImGui.ColorEdit4("color 2", col2.value);
                ImGui.Unindent();
            }
            {
                ImGui.BulletText("Drag and drop to copy/swap items");
                ImGui.Indent();
                let Mode;
                (function (Mode) {
                    Mode[Mode["Mode_Copy"] = 0] = "Mode_Copy";
                    Mode[Mode["Mode_Move"] = 1] = "Mode_Move";
                    Mode[Mode["Mode_Swap"] = 2] = "Mode_Swap";
                })(Mode || (Mode = {}));
                ;
                /* static */ const mode = STATIC("mode", 0);
                if (ImGui.RadioButton("Copy", mode.value === Mode.Mode_Copy)) {
                    mode.value = Mode.Mode_Copy;
                }
                ImGui.SameLine();
                if (ImGui.RadioButton("Move", mode.value === Mode.Mode_Move)) {
                    mode.value = Mode.Mode_Move;
                }
                ImGui.SameLine();
                if (ImGui.RadioButton("Swap", mode.value === Mode.Mode_Swap)) {
                    mode.value = Mode.Mode_Swap;
                }
                /* static */ const names = STATIC("names", ["Bobby", "Beatrice", "Betty", "Brianna", "Barry", "Bernard", "Bibi", "Blaine", "Bryn"]);
                for (let n = 0; n < imgui_3.IM_ARRAYSIZE(names.value); n++) {
                    ImGui.PushID(n);
                    if ((n % 3) != 0)
                        ImGui.SameLine();
                    ImGui.Button(names.value[n], new imgui_19.ImVec2(60, 60));
                    // Our buttons are both drag sources and drag targets here!
                    if (ImGui.BeginDragDropSource(ImGui.DragDropFlags.None)) {
                        // ImGui.SetDragDropPayload("DND_DEMO_CELL", &n, sizeof(int));        // Set payload to carry the index of our item (could be anything)
                        ImGui.SetDragDropPayload("DND_DEMO_CELL", { n }); // Set payload to carry the index of our item (could be anything)
                        if (mode.value === Mode.Mode_Copy) {
                            ImGui.Text(`Copy ${names.value[n]}`);
                        } // Display preview (could be anything, e.g. when dragging an image we could decide to display the filename and a small preview of the image, etc.)
                        if (mode.value === Mode.Mode_Move) {
                            ImGui.Text(`Move ${names.value[n]}`);
                        }
                        if (mode.value === Mode.Mode_Swap) {
                            ImGui.Text(`Swap ${names.value[n]}`);
                        }
                        ImGui.EndDragDropSource();
                    }
                    if (ImGui.BeginDragDropTarget()) {
                        let payload;
                        if (payload = ImGui.AcceptDragDropPayload("DND_DEMO_CELL")) {
                            // IM_ASSERT(payload->DataSize == sizeof(int));
                            // int payload_n = *(const int*)payload->Data;
                            const payload_n = payload.Data.n;
                            if (mode.value === Mode.Mode_Copy) {
                                names.value[n] = names.value[payload_n];
                            }
                            if (mode.value === Mode.Mode_Move) {
                                names.value[n] = names.value[payload_n];
                                names.value[payload_n] = "";
                            }
                            if (mode.value === Mode.Mode_Swap) {
                                const tmp = names.value[n];
                                names.value[n] = names.value[payload_n];
                                names.value[payload_n] = tmp;
                            }
                        }
                        ImGui.EndDragDropTarget();
                    }
                    ImGui.PopID();
                }
                ImGui.Unindent();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Querying Status (Active/Focused/Hovered etc.)")) {
            // Display the value of IsItemHovered() and other common item state functions. Note that the flags can be combined.
            // (because BulletText is an item itself and that would affect the output of IsItemHovered() we pass all state in a single call to simplify the code).
            /* static */ const item_type = STATIC("item_type", 1);
            /* static */ const b = STATIC("b#1302", false);
            /* static */ const col4f = STATIC("col4f", [1.0, 0.5, 0.0, 1.0]);
            ImGui.RadioButton("Text", (value = item_type.value) => item_type.value = value, 0);
            ImGui.RadioButton("Button", (value = item_type.value) => item_type.value = value, 1);
            ImGui.RadioButton("Checkbox", (value = item_type.value) => item_type.value = value, 2);
            ImGui.RadioButton("SliderFloat", (value = item_type.value) => item_type.value = value, 3);
            ImGui.RadioButton("InputText", (value = item_type.value) => item_type.value = value, 4);
            ImGui.RadioButton("InputFloat3", (value = item_type.value) => item_type.value = value, 5);
            ImGui.RadioButton("ColorEdit4", (value = item_type.value) => item_type.value = value, 6);
            ImGui.RadioButton("MenuItem", (value = item_type.value) => item_type.value = value, 7);
            ImGui.RadioButton("TreeNode (w/ double-click)", (value = item_type.value) => item_type.value = value, 8);
            ImGui.RadioButton("ListBox", (value = item_type.value) => item_type.value = value, 9);
            ImGui.Separator();
            let ret = false;
            if (item_type.value === 0) {
                ImGui.Text("ITEM: Text");
            } // Testing text items with no identifier/interaction
            if (item_type.value === 1) {
                ret = ImGui.Button("ITEM: Button");
            } // Testing button
            if (item_type.value === 2) {
                ret = ImGui.Checkbox("ITEM: Checkbox", (value = b.value) => b.value = value);
            } // Testing checkbox
            if (item_type.value === 3) {
                ret = ImGui.SliderFloat("ITEM: SliderFloat", (value = col4f.value[0]) => col4f.value[0] = value, 0.0, 1.0);
            } // Testing basic item
            // if (item_type.value === 4) { ret = ImGui.InputText("ITEM: InputText", &str[0], IM_ARRAYSIZE(str)); }  // Testing input text (which handles tabbing)
            // if (item_type.value === 5) { ret = ImGui.InputFloat3("ITEM: InputFloat3", col4f); }                   // Testing multi-component items (IsItemXXX flags are reported merged)
            if (item_type.value === 6) {
                ret = ImGui.ColorEdit4("ITEM: ColorEdit4", col4f.value);
            } // Testing multi-component items (IsItemXXX flags are reported merged)
            // if (item_type == 7) { ret = ImGui.MenuItem("ITEM: MenuItem"); }                                // Testing menu item (they use ImGuiButtonFlags_PressedOnRelease button policy)
            // if (item_type == 8) { ret = ImGui.TreeNodeEx("ITEM: TreeNode w/ ImGuiTreeNodeFlags_OpenOnDoubleClick", ImGuiTreeNodeFlags_OpenOnDoubleClick | ImGuiTreeNodeFlags_NoTreePushOnOpen); } // Testing tree node with ImGuiButtonFlags_PressedOnDoubleClick button policy.
            if (item_type.value === 9) {
                const items = ["Apple", "Banana", "Cherry", "Kiwi"]; /* static */
                const current = STATIC("current", 1);
                ret = ImGui.ListBox("ITEM: ListBox", (value = current.value) => current.value = value, items, imgui_3.IM_ARRAYSIZE(items), imgui_3.IM_ARRAYSIZE(items));
            }
            ImGui.BulletText(`Return value = ${ret}\n` +
                `IsItemFocused() = ${ImGui.IsItemFocused()}\n` +
                `IsItemHovered() = ${ImGui.IsItemHovered()}\n` +
                `IsItemHovered(_AllowWhenBlockedByPopup) = ${ImGui.IsItemHovered(imgui_9.ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
                `IsItemHovered(_AllowWhenBlockedByActiveItem) = ${ImGui.IsItemHovered(imgui_9.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem)}\n` +
                `IsItemHovered(_AllowWhenOverlapped) = ${ImGui.IsItemHovered(imgui_9.ImGuiHoveredFlags.AllowWhenOverlapped)}\n` +
                `IsItemhovered(_RectOnly) = ${ImGui.IsItemHovered(imgui_9.ImGuiHoveredFlags.RectOnly)}\n` +
                `IsItemActive() = ${ImGui.IsItemActive()}\n` +
                `IsItemEdited() = ${ImGui.IsItemEdited()}\n` +
                `IsItemActivated() = ${ImGui.IsItemActivated()}\n` +
                `IsItemDeactivated() = ${ImGui.IsItemDeactivated()}\n` +
                `IsItemDeactivatedAfterEdit() = ${ImGui.IsItemDeactivatedAfterEdit()}\n` +
                `IsItemVisible() = ${ImGui.IsItemVisible()}\n` +
                `IsItemClicked() = ${ImGui.IsItemClicked()}\n` +
                `GetItemRectMin() = (${ImGui.GetItemRectMin().x.toFixed(1)}, ${ImGui.GetItemRectMin().y.toFixed(1)})\n` +
                `GetItemRectMax() = (${ImGui.GetItemRectMax().x.toFixed(1)}, ${ImGui.GetItemRectMax().y.toFixed(1)})\n` +
                `GetItemRectSize() = (${ImGui.GetItemRectSize().x.toFixed(1)}, ${ImGui.GetItemRectSize().y.toFixed(1)})`);
            /* static */ const embed_all_inside_a_child_window = STATIC("embed_all_inside_a_child_window", false);
            ImGui.Checkbox("Embed everything inside a child window (for additional testing)", (value = embed_all_inside_a_child_window.value) => embed_all_inside_a_child_window.value = value);
            if (embed_all_inside_a_child_window.value)
                ImGui.BeginChild("outer_child", new imgui_19.ImVec2(0, ImGui.GetFontSize() * 20), true);
            // Testing IsWindowFocused() function with its various flags. Note that the flags can be combined.
            ImGui.BulletText(`IsWindowFocused() = ${ImGui.IsWindowFocused()}\n` +
                `IsWindowFocused(_ChildWindows) = ${ImGui.IsWindowFocused(imgui_8.ImGuiFocusedFlags.ChildWindows)}\n` +
                `IsWindowFocused(_ChildWindows|_RootWindow) = ${ImGui.IsWindowFocused(imgui_8.ImGuiFocusedFlags.ChildWindows | imgui_8.ImGuiFocusedFlags.RootWindow)}\n` +
                `IsWindowFocused(_RootWindow) = ${ImGui.IsWindowFocused(imgui_8.ImGuiFocusedFlags.RootWindow)}\n` +
                `IsWindowFocused(_AnyWindow) = ${ImGui.IsWindowFocused(imgui_8.ImGuiFocusedFlags.AnyWindow)}\n`);
            // Testing IsWindowHovered() function with its various flags. Note that the flags can be combined.
            ImGui.BulletText(`IsWindowHovered() = ${ImGui.IsWindowHovered()}\n` +
                `IsWindowHovered(_AllowWhenBlockedByPopup) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
                `IsWindowHovered(_AllowWhenBlockedByActiveItem) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem)}\n` +
                `IsWindowHovered(_ChildWindows) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.ChildWindows)}\n` +
                `IsWindowHovered(_ChildWindows|_RootWindow) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.ChildWindows | imgui_9.ImGuiHoveredFlags.RootWindow)}\n` +
                `IsWindowFocused(_ChildWindows|_AllowWhenBlockedByPopup) = ${ImGui.IsWindowFocused(imgui_9.ImGuiHoveredFlags.ChildWindows | imgui_9.ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
                `IsWindowHovered(_RootWindow) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.RootWindow)}\n` +
                `IsWindowHovered(_AnyWindow) = ${ImGui.IsWindowHovered(imgui_9.ImGuiHoveredFlags.AnyWindow)}\n`);
            ImGui.BeginChild("child", new imgui_19.ImVec2(0, 50), true);
            ImGui.Text("This is another child window for testing the _ChildWindows flag.");
            ImGui.EndChild();
            if (embed_all_inside_a_child_window.value)
                ImGui.EndChild();
            // static char dummy_str[] = "This is a dummy field to be able to tab-out of the widgets above.";
            // ImGui.InputText("dummy", dummy_str, IM_ARRAYSIZE(dummy_str), ImGuiInputTextFlags_ReadOnly);
            // Calling IsItemHovered() after begin returns the hovered status of the title bar.
            // This is useful in particular if you want to create a context menu (with BeginPopupContextItem) associated to the title bar of a window.
            /* static */ const test_window = STATIC("test_window", false);
            ImGui.Checkbox("Hovered/Active tests after Begin() for title bar testing", (value = test_window.value) => test_window.value = value);
            if (test_window.value) {
                ImGui.Begin("Title bar Hovered/Active tests", (value = test_window.value) => test_window.value = value);
                if (ImGui.BeginPopupContextItem()) // <-- This is using IsItemHovered()
                 {
                    if (ImGui.MenuItem("Close")) {
                        test_window.value = false;
                    }
                    ImGui.EndPopup();
                }
                ImGui.Text(`IsItemHovered() after begin = ${ImGui.IsItemHovered()} (== is title bar hovered)\n` +
                    `IsItemActive() after begin = ${ImGui.IsItemActive()} (== is window being clicked/moved)\n`);
                ImGui.End();
            }
            ImGui.TreePop();
        }
    }
    function ShowDemoWindowLayout() {
        if (!ImGui.CollapsingHeader("Layout"))
            return;
        if (ImGui.TreeNode("Child windows")) {
            HelpMarker("Use child windows to begin into a self-contained independent scrolling/clipping regions within a host window.");
            /* static */ const disable_mouse_wheel = STATIC("disable_mouse_wheel", false);
            /* static */ const disable_menu = STATIC("disable_menu", false);
            ImGui.Checkbox("Disable Mouse Wheel", (value = disable_mouse_wheel.value) => disable_mouse_wheel.value = value);
            ImGui.Checkbox("Disable Menu", (value = disable_menu.value) => disable_menu.value = value);
            /* static */ const line = STATIC("line", 50);
            let goto_line = ImGui.Button("Goto");
            ImGui.SameLine();
            ImGui.SetNextItemWidth(100);
            goto_line = ImGui.InputInt("##Line", (value = line.value) => line.value = value, 0, 0, imgui_10.ImGuiInputTextFlags.EnterReturnsTrue) || goto_line;
            // Child 1: no border, enable horizontal scrollbar
            {
                const window_flags = imgui_15.ImGuiWindowFlags.HorizontalScrollbar | (disable_mouse_wheel.value ? imgui_15.ImGuiWindowFlags.NoScrollWithMouse : 0);
                ImGui.BeginChild("Child1", new imgui_19.ImVec2(ImGui.GetWindowContentRegionWidth() * 0.5, 260), false, window_flags);
                for (let i = 0; i < 100; i++) {
                    ImGui.Text(`${format_number_dec(i, 4)}: scrollable region`);
                    if (goto_line && line.value === i)
                        ImGui.SetScrollHereY();
                }
                if (goto_line && line.value >= 100)
                    ImGui.SetScrollHereY();
                ImGui.EndChild();
            }
            ImGui.SameLine();
            // Child 2: rounded border
            {
                const window_flags = (disable_mouse_wheel.value ? imgui_15.ImGuiWindowFlags.NoScrollWithMouse : 0) | (disable_menu.value ? 0 : imgui_15.ImGuiWindowFlags.MenuBar);
                ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ChildRounding, 5.0);
                ImGui.BeginChild("Child2", new imgui_19.ImVec2(0, 260), true, window_flags);
                if (!disable_menu.value && ImGui.BeginMenuBar()) {
                    if (ImGui.BeginMenu("Menu")) {
                        ShowExampleMenuFile();
                        ImGui.EndMenu();
                    }
                    ImGui.EndMenuBar();
                }
                ImGui.Columns(2);
                for (let i = 0; i < 100; i++) {
                    // sprintf(buf, "%03d", i);
                    const buf = `${format_number_dec(i, 3)}`;
                    ImGui.Button(buf, new imgui_19.ImVec2(-1.0, 0.0));
                    ImGui.NextColumn();
                }
                ImGui.EndChild();
                ImGui.PopStyleVar();
            }
            ImGui.Separator();
            // Demonstrate a few extra things
            // - Changing ImGuiCol_ChildBg (which is transparent black in default styles)
            // - Using SetCursorPos() to position the child window (because the child window is an item from the POV of the parent window)
            //   You can also call SetNextWindowPos() to position the child window. The parent window will effectively layout from this position.
            // - Using ImGui.GetItemRectMin/Max() to query the "item" state (because the child window is an item from the POV of the parent window)
            //   See "Widgets" -> "Querying Status (Active/Focused/Hovered etc.)" section for more details about this.
            {
                ImGui.SetCursorPosX(50);
                ImGui.PushStyleColor(imgui_5.ImGuiCol.ChildBg, imgui_21.IM_COL32(255, 0, 0, 100));
                ImGui.BeginChild("blah", new imgui_19.ImVec2(200, 100), true, imgui_15.ImGuiWindowFlags.None);
                for (let n = 0; n < 50; n++)
                    ImGui.Text(`Some test ${n}`);
                ImGui.EndChild();
                const child_rect_min = ImGui.GetItemRectMin();
                const child_rect_max = ImGui.GetItemRectMax();
                ImGui.PopStyleColor();
                ImGui.Text(`Rect of child window is: (${child_rect_min.x.toFixed(0)},${child_rect_min.y.toFixed(0)}) (${child_rect_max.x.toFixed(0)},${child_rect_max.y.toFixed(0)})`);
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Widgets Width")) {
            // Use SetNextItemWidth() to set the width of a single upcoming item.
            // Use PushItemWidth()/PopItemWidth() to set the width of a group of items.
            /* static */ const f = STATIC("f#1181", 0.0);
            ImGui.Text("SetNextItemWidth/PushItemWidth(100)");
            ImGui.SameLine();
            HelpMarker("Fixed width.");
            ImGui.SetNextItemWidth(100);
            ImGui.DragFloat("float##1", (value = f.value) => f.value = value);
            ImGui.Text("SetNextItemWidth/PushItemWidth(GetWindowWidth() * 0.5f)");
            ImGui.SameLine();
            HelpMarker("Half of window width.");
            ImGui.SetNextItemWidth(ImGui.GetWindowWidth() * 0.5);
            ImGui.DragFloat("float##2", (value = f.value) => f.value = value);
            ImGui.Text("SetNextItemWidth/PushItemWidth(GetContentRegionAvail().x * 0.5f)");
            ImGui.SameLine();
            HelpMarker("Half of available width.\n(~ right-cursor_pos)\n(works within a column set)");
            ImGui.SetNextItemWidth(ImGui.GetContentRegionAvail().x * 0.5);
            ImGui.DragFloat("float##3", (value = f.value) => f.value = value);
            ImGui.Text("SetNextItemWidth/PushItemWidth(-100)");
            ImGui.SameLine();
            HelpMarker("Align to right edge minus 100");
            ImGui.SetNextItemWidth(-100);
            ImGui.DragFloat("float##4", (value = f.value) => f.value = value);
            // Demonstrate using PushItemWidth to surround three items. Calling SetNextItemWidth() before each of them would have the same effect.
            ImGui.Text("SetNextItemWidth/PushItemWidth(-1)");
            ImGui.SameLine();
            HelpMarker("Align to right edge");
            ImGui.PushItemWidth(-1);
            ImGui.DragFloat("float##5a", (value = f.value) => f.value = value);
            ImGui.DragFloat("float##5b", (value = f.value) => f.value = value);
            ImGui.DragFloat("float##5c", (value = f.value) => f.value = value);
            ImGui.PopItemWidth();
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Basic Horizontal Layout")) {
            ImGui.TextWrapped("(Use ImGui.SameLine() to keep adding items to the right of the preceding item)");
            // Text
            ImGui.Text("Two items: Hello");
            ImGui.SameLine();
            ImGui.TextColored(new imgui_20.ImVec4(1, 1, 0, 1), "Sailor");
            // Adjust spacing
            ImGui.Text("More spacing: Hello");
            ImGui.SameLine(0, 20);
            ImGui.TextColored(new imgui_20.ImVec4(1, 1, 0, 1), "Sailor");
            // Button
            ImGui.AlignTextToFramePadding();
            ImGui.Text("Normal buttons");
            ImGui.SameLine();
            ImGui.Button("Banana");
            ImGui.SameLine();
            ImGui.Button("Apple");
            ImGui.SameLine();
            ImGui.Button("Corniflower");
            // Button
            ImGui.Text("Small buttons");
            ImGui.SameLine();
            ImGui.SmallButton("Like this one");
            ImGui.SameLine();
            ImGui.Text("can fit within a text block.");
            // Aligned to arbitrary position. Easy/cheap column.
            ImGui.Text("Aligned");
            ImGui.SameLine(150);
            ImGui.Text("x=150");
            ImGui.SameLine(300);
            ImGui.Text("x=300");
            ImGui.Text("Aligned");
            ImGui.SameLine(150);
            ImGui.SmallButton("x=150");
            ImGui.SameLine(300);
            ImGui.SmallButton("x=300");
            // Checkbox
            /* static */ const c1 = STATIC("c1", false), c2 = STATIC("c2", false), c3 = STATIC("c3", false), c4 = STATIC("c4", false);
            ImGui.Checkbox("My", (value = c1.value) => c1.value = value);
            ImGui.SameLine();
            ImGui.Checkbox("Tailor", (value = c2.value) => c2.value = value);
            ImGui.SameLine();
            ImGui.Checkbox("Is", (value = c3.value) => c3.value = value);
            ImGui.SameLine();
            ImGui.Checkbox("Rich", (value = c4.value) => c4.value = value);
            // Various
            /* static */ const f0 = STATIC("f0#1255", 1.0), f1 = STATIC("f1#1255", 2.0), f2 = STATIC("f2", 3.0);
            ImGui.PushItemWidth(80);
            const items = ["AAAA", "BBBB", "CCCC", "DDDD"];
            /* static */ const item = STATIC("item#1258", -1);
            ImGui.Combo("Combo", (value = item.value) => item.value = value, items, imgui_3.IM_ARRAYSIZE(items));
            ImGui.SameLine();
            ImGui.SliderFloat("X", (value = f0.value) => f0.value = value, 0.0, 5.0);
            ImGui.SameLine();
            ImGui.SliderFloat("Y", (value = f1.value) => f1.value = value, 0.0, 5.0);
            ImGui.SameLine();
            ImGui.SliderFloat("Z", (value = f2.value) => f2.value = value, 0.0, 5.0);
            ImGui.PopItemWidth();
            ImGui.PushItemWidth(80);
            ImGui.Text("Lists:");
            /* static */ const selection = STATIC("selection", [0, 1, 2, 3]);
            for (let i = 0; i < 4; i++) {
                if (i > 0)
                    ImGui.SameLine();
                ImGui.PushID(i);
                ImGui.ListBox("", (value = selection.value[i]) => selection.value[i] = value, items, imgui_3.IM_ARRAYSIZE(items));
                ImGui.PopID();
                if (ImGui.IsItemHovered())
                    ImGui.SetTooltip(`ListBox ${i} hovered`);
            }
            ImGui.PopItemWidth();
            // Dummy
            const button_sz = new imgui_19.ImVec2(40, 40);
            ImGui.Button("A", button_sz);
            ImGui.SameLine();
            ImGui.Dummy(button_sz);
            ImGui.SameLine();
            ImGui.Button("B", button_sz);
            // Manually wrapping (we should eventually provide this as an automatic layout feature, but for now you can do it manually)
            ImGui.Text("Manually wrapping:");
            const style = ImGui.GetStyle();
            const buttons_count = 20;
            const window_visible_x2 = ImGui.GetWindowPos().x + ImGui.GetWindowContentRegionMax().x;
            for (let n = 0; n < buttons_count; n++) {
                ImGui.PushID(n);
                ImGui.Button("Box", button_sz);
                const last_button_x2 = ImGui.GetItemRectMax().x;
                const next_button_x2 = last_button_x2 + style.ItemSpacing.x + button_sz.x; // Expected position if next button was on same line
                if (n + 1 < buttons_count && next_button_x2 < window_visible_x2)
                    ImGui.SameLine();
                ImGui.PopID();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Tabs")) {
            if (ImGui.TreeNode("Basic")) {
                const tab_bar_flags = imgui_16.ImGuiTabBarFlags.None;
                if (ImGui.BeginTabBar("MyTabBar", tab_bar_flags)) {
                    if (ImGui.BeginTabItem("Avocado")) {
                        ImGui.Text("This is the Avocado tab!\nblah blah blah blah blah");
                        ImGui.EndTabItem();
                    }
                    if (ImGui.BeginTabItem("Broccoli")) {
                        ImGui.Text("This is the Broccoli tab!\nblah blah blah blah blah");
                        ImGui.EndTabItem();
                    }
                    if (ImGui.BeginTabItem("Cucumber")) {
                        ImGui.Text("This is the Cucumber tab!\nblah blah blah blah blah");
                        ImGui.EndTabItem();
                    }
                    ImGui.EndTabBar();
                }
                ImGui.Separator();
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Advanced & Close Button")) {
                // Expose a couple of the available flags. In most cases you may just call BeginTabBar() with no flags (0).
                /* static */ const tab_bar_flags = STATIC("tab_bar_flags", imgui_16.ImGuiTabBarFlags.Reorderable);
                ImGui.CheckboxFlags("ImGuiTabBarFlags_Reorderable", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.Reorderable);
                ImGui.CheckboxFlags("ImGuiTabBarFlags_AutoSelectNewTabs", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.AutoSelectNewTabs);
                ImGui.CheckboxFlags("ImGuiTabBarFlags_TabListPopupButton", (value = tab_bar_flags.value) => tab_bar_flags.value = value, imgui_16.ImGuiTabBarFlags.TabListPopupButton);
                ImGui.CheckboxFlags("ImGuiTabBarFlags_NoCloseWithMiddleMouseButton", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.NoCloseWithMiddleMouseButton);
                if ((tab_bar_flags.value & imgui_16.ImGuiTabBarFlags.FittingPolicyMask_) === 0)
                    tab_bar_flags.value |= imgui_16.ImGuiTabBarFlags.FittingPolicyDefault_;
                if (ImGui.CheckboxFlags("ImGuiTabBarFlags_FittingPolicyResizeDown", (value = tab_bar_flags.value) => tab_bar_flags.value = value, imgui_16.ImGuiTabBarFlags.FittingPolicyResizeDown))
                    tab_bar_flags.value &= ~(imgui_16.ImGuiTabBarFlags.FittingPolicyMask_ ^ imgui_16.ImGuiTabBarFlags.FittingPolicyResizeDown);
                if (ImGui.CheckboxFlags("ImGuiTabBarFlags_FittingPolicyScroll", (value = tab_bar_flags.value) => tab_bar_flags.value = value, imgui_16.ImGuiTabBarFlags.FittingPolicyScroll))
                    tab_bar_flags.value &= ~(imgui_16.ImGuiTabBarFlags.FittingPolicyMask_ ^ imgui_16.ImGuiTabBarFlags.FittingPolicyScroll);
                // Tab Bar
                const names = ["Artichoke", "Beetroot", "Celery", "Daikon"];
                /* static */ const opened = STATIC("opened", [true, true, true, true]); // Persistent user state
                for (let n = 0; n < imgui_3.IM_ARRAYSIZE(opened.value); n++) {
                    if (n > 0) {
                        ImGui.SameLine();
                    }
                    ImGui.Checkbox(names[n], (value = opened.value[n]) => opened.value[n] = value);
                }
                // Passing a bool* to BeginTabItem() is similar to passing one to Begin(): the underlying bool will be set to false when the tab is closed.
                if (ImGui.BeginTabBar("MyTabBar", tab_bar_flags.value)) {
                    for (let n = 0; n < imgui_3.IM_ARRAYSIZE(opened.value); n++)
                        if (opened.value[n] && ImGui.BeginTabItem(names[n], (value = opened.value[n]) => opened.value[n] = value)) {
                            ImGui.Text(`This is the ${names[n]} tab!`);
                            if (n & 1)
                                ImGui.Text("I am an odd tab.");
                            ImGui.EndTabItem();
                        }
                    ImGui.EndTabBar();
                }
                ImGui.Separator();
                ImGui.TreePop();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Groups")) {
            HelpMarker("Using ImGui.BeginGroup()/EndGroup() to layout items. BeginGroup() basically locks the horizontal position. EndGroup() bundles the whole group so that you can use functions such as IsItemHovered() on it.");
            ImGui.BeginGroup();
            {
                ImGui.BeginGroup();
                ImGui.Button("AAA");
                ImGui.SameLine();
                ImGui.Button("BBB");
                ImGui.SameLine();
                ImGui.BeginGroup();
                ImGui.Button("CCC");
                ImGui.Button("DDD");
                ImGui.EndGroup();
                ImGui.SameLine();
                ImGui.Button("EEE");
                ImGui.EndGroup();
                if (ImGui.IsItemHovered())
                    ImGui.SetTooltip("First group hovered");
            }
            // Capture the group size and create widgets using the same size
            const size = ImGui.GetItemRectSize();
            const values = [0.5, 0.20, 0.80, 0.60, 0.25];
            ImGui.PlotHistogram("##values", values, imgui_3.IM_ARRAYSIZE(values), 0, null, 0.0, 1.0, size);
            ImGui.Button("ACTION", new imgui_19.ImVec2((size.x - ImGui.GetStyle().ItemSpacing.x) * 0.5, size.y));
            ImGui.SameLine();
            ImGui.Button("REACTION", new imgui_19.ImVec2((size.x - ImGui.GetStyle().ItemSpacing.x) * 0.5, size.y));
            ImGui.EndGroup();
            ImGui.SameLine();
            ImGui.Button("LEVERAGE\nBUZZWORD", size);
            ImGui.SameLine();
            if (ImGui.ListBoxHeader("List", size)) {
                ImGui.Selectable("Selected", true);
                ImGui.Selectable("Not Selected", false);
                ImGui.ListBoxFooter();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Text Baseline Alignment")) {
            HelpMarker("This is testing the vertical alignment that gets applied on text to keep it aligned with widgets. Lines only composed of text or \"small\" widgets fit in less vertical spaces than lines with normal widgets.");
            ImGui.Text("One\nTwo\nThree");
            ImGui.SameLine();
            ImGui.Text("Hello\nWorld");
            ImGui.SameLine();
            ImGui.Text("Banana");
            ImGui.Text("Banana");
            ImGui.SameLine();
            ImGui.Text("Hello\nWorld");
            ImGui.SameLine();
            ImGui.Text("One\nTwo\nThree");
            ImGui.Button("HOP##1");
            ImGui.SameLine();
            ImGui.Text("Banana");
            ImGui.SameLine();
            ImGui.Text("Hello\nWorld");
            ImGui.SameLine();
            ImGui.Text("Banana");
            ImGui.Button("HOP##2");
            ImGui.SameLine();
            ImGui.Text("Hello\nWorld");
            ImGui.SameLine();
            ImGui.Text("Banana");
            ImGui.Button("TEST##1");
            ImGui.SameLine();
            ImGui.Text("TEST");
            ImGui.SameLine();
            ImGui.SmallButton("TEST##2");
            ImGui.AlignTextToFramePadding(); // If your line starts with text, call this to align it to upcoming widgets.
            ImGui.Text("Text aligned to Widget");
            ImGui.SameLine();
            ImGui.Button("Widget##1");
            ImGui.SameLine();
            ImGui.Text("Widget");
            ImGui.SameLine();
            ImGui.SmallButton("Widget##2");
            ImGui.SameLine();
            ImGui.Button("Widget##3");
            // Tree
            const spacing = ImGui.GetStyle().ItemInnerSpacing.x;
            ImGui.Button("Button##1");
            ImGui.SameLine(0.0, spacing);
            if (ImGui.TreeNode("Node##1")) {
                for (let i = 0; i < 6; i++)
                    ImGui.BulletText(`Item ${i}..`);
                ImGui.TreePop();
            } // Dummy tree data
            ImGui.AlignTextToFramePadding(); // Vertically align text node a bit lower so it'll be vertically centered with upcoming widget. Otherwise you can use SmallButton (smaller fit).
            const node_open = ImGui.TreeNode("Node##2"); // Common mistake to avoid: if we want to SameLine after TreeNode we need to do it before we add child content.
            ImGui.SameLine(0.0, spacing);
            ImGui.Button("Button##2");
            if (node_open) {
                for (let i = 0; i < 6; i++)
                    ImGui.BulletText(`Item ${i}..`);
                ImGui.TreePop();
            } // Dummy tree data
            // Bullet
            ImGui.Button("Button##3");
            ImGui.SameLine(0.0, spacing);
            ImGui.BulletText("Bullet text");
            ImGui.AlignTextToFramePadding();
            ImGui.BulletText("Node");
            ImGui.SameLine(0.0, spacing);
            ImGui.Button("Button##4");
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Scrolling")) {
            HelpMarker("Use SetScrollHereY() or SetScrollFromPosY() to scroll to a given position.");
            /* static */ const track = STATIC("track", true);
            /* static */ const track_line = STATIC("track_line", 50);
            /* static */ const scroll_to_off_px = STATIC("scroll_to_off_px", 0);
            /* static */ const scroll_to_pos_px = STATIC("scroll_to_pos_px", 200);
            ImGui.Checkbox("Track", (value = track.value) => track.value = value);
            ImGui.PushItemWidth(100);
            ImGui.SameLine(140);
            track.value = ImGui.DragInt("##line", (value = track_line.value) => track_line.value = value, 0.25, 0, 99, "Line = %d") || track.value;
            let scroll_to_off = ImGui.Button("Scroll Offset");
            ImGui.SameLine(140);
            scroll_to_off = ImGui.DragFloat("##off_y", (value = scroll_to_off_px.value) => scroll_to_off_px.value = value, 1.00, 0, 9999, "+%.0f px") || scroll_to_off;
            let scroll_to_pos = ImGui.Button("Scroll To Pos");
            ImGui.SameLine(140);
            scroll_to_pos = ImGui.DragInt("##pos_y", (value = scroll_to_pos_px.value) => scroll_to_pos_px.value = value, 1.00, 0, 9999, "Y = %d px") || scroll_to_pos;
            ImGui.PopItemWidth();
            if (scroll_to_off || scroll_to_pos)
                track.value = false;
            const style = ImGui.GetStyle();
            const child_w = (ImGui.GetContentRegionAvail().x - 4 * style.ItemSpacing.x) / 5;
            for (let i = 0; i < 5; i++) {
                if (i > 0)
                    ImGui.SameLine();
                ImGui.BeginGroup();
                ImGui.Text(i === 0 ? "Top" : i === 1 ? "25%" : i === 2 ? "Center" : i === 3 ? "75%" : "Bottom");
                const child_flags = imgui_15.ImGuiWindowFlags.MenuBar;
                ImGui.BeginChild(ImGui.GetID(i), new imgui_19.ImVec2(child_w, 200.0), true, child_flags);
                if (scroll_to_off)
                    ImGui.SetScrollY(scroll_to_off_px.value);
                if (scroll_to_pos)
                    ImGui.SetScrollFromPosY(ImGui.GetCursorStartPos().y + scroll_to_pos_px.value, i * 0.25);
                for (let line = 0; line < 100; line++) {
                    if (track.value && line === track_line.value) {
                        ImGui.TextColored(new imgui_20.ImVec4(1, 1, 0, 1), `Line ${line}`);
                        ImGui.SetScrollHereY(i * 0.25); // 0.0:top, 0.5f:center, 1.0f:bottom
                    }
                    else {
                        ImGui.Text(`Line ${line}`);
                    }
                }
                const scroll_y = ImGui.GetScrollY();
                const scroll_max_y = ImGui.GetScrollMaxY();
                ImGui.EndChild();
                ImGui.Text(`${scroll_y.toFixed(0)}/${scroll_max_y.toFixed(0)}`);
                ImGui.EndGroup();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Horizontal Scrolling")) {
            HelpMarker("Horizontal scrolling for a window has to be enabled explicitly via the ImGuiWindowFlags_HorizontalScrollbar flag.\n\nYou may want to explicitly specify content width by calling SetNextWindowContentWidth() before Begin().");
            /* static */ const lines = STATIC("lines#1432", 7);
            ImGui.SliderInt("Lines", (value = lines.value) => lines.value = value, 1, 15);
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.FrameRounding, 3.0);
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.FramePadding, new imgui_19.ImVec2(2.0, 1.0));
            ImGui.BeginChild("scrolling", new imgui_19.ImVec2(0, ImGui.GetFrameHeightWithSpacing() * 7 + 30), true, imgui_15.ImGuiWindowFlags.HorizontalScrollbar);
            for (let line = 0; line < lines.value; line++) {
                // Display random stuff (for the sake of this trivial demo we are using basic Button+SameLine. If you want to create your own time line for a real application you may be better off
                // manipulating the cursor position yourself, aka using SetCursorPos/SetCursorScreenPos to position the widgets yourself. You may also want to use the lower-level ImDrawList API)
                const num_buttons = 10 + ((line & 1) ? line * 9 : line * 3);
                for (let n = 0; n < num_buttons; n++) {
                    if (n > 0)
                        ImGui.SameLine();
                    ImGui.PushID(n + line * 1000);
                    const num_buf = n.toFixed(0);
                    const label = (!(n % 15)) ? "FizzBuzz" : (!(n % 3)) ? "Fizz" : (!(n % 5)) ? "Buzz" : num_buf;
                    const hue = n * 0.05;
                    ImGui.PushStyleColor(imgui_5.ImGuiCol.Button, imgui_22.ImColor.HSV(hue, 0.6, 0.6));
                    ImGui.PushStyleColor(imgui_5.ImGuiCol.ButtonHovered, imgui_22.ImColor.HSV(hue, 0.7, 0.7));
                    ImGui.PushStyleColor(imgui_5.ImGuiCol.ButtonActive, imgui_22.ImColor.HSV(hue, 0.8, 0.8));
                    ImGui.Button(label, new imgui_19.ImVec2(40.0 + Math.sin(line + n) * 20.0, 0.0));
                    ImGui.PopStyleColor(3);
                    ImGui.PopID();
                }
            }
            const scroll_x = ImGui.GetScrollX();
            const scroll_max_x = ImGui.GetScrollMaxX();
            ImGui.EndChild();
            ImGui.PopStyleVar(2);
            let scroll_x_delta = 0.0;
            ImGui.SmallButton("<<");
            if (ImGui.IsItemActive()) {
                scroll_x_delta = -ImGui.GetIO().DeltaTime * 1000.0;
            }
            ImGui.SameLine();
            ImGui.Text("Scroll from code");
            ImGui.SameLine();
            ImGui.SmallButton(">>");
            if (ImGui.IsItemActive()) {
                scroll_x_delta = +ImGui.GetIO().DeltaTime * 1000.0;
            }
            ImGui.SameLine();
            ImGui.Text(`${scroll_x.toFixed(0)}/${scroll_max_x.toFixed(0)}`);
            if (scroll_x_delta !== 0.0) {
                ImGui.BeginChild("scrolling"); // Demonstrate a trick: you can use Begin to set yourself in the context of another window (here we are already out of your child window)
                ImGui.SetScrollX(ImGui.GetScrollX() + scroll_x_delta);
                ImGui.EndChild();
            }
            // TODO
            // ImGui.Spacing();
            // static bool show_horizontal_contents_size_demo_window = false;
            // ImGui.Checkbox("Show Horizontal contents size demo window", &show_horizontal_contents_size_demo_window);
            // if (show_horizontal_contents_size_demo_window)
            // {
            //     static bool show_h_scrollbar = true;
            //     static bool show_button = true;
            //     static bool show_tree_nodes = true;
            //     static bool show_text_wrapped = false;
            //     static bool show_columns = true;
            //     static bool show_tab_bar = true;
            //     static bool show_child = false;
            //     static bool explicit_content_size = false;
            //     static float contents_size_x = 300.0f;
            //     if (explicit_content_size)
            //         ImGui.SetNextWindowContentSize(ImVec2(contents_size_x, 0.0f));
            //     ImGui.Begin("Horizontal contents size demo window", &show_horizontal_contents_size_demo_window, show_h_scrollbar ? ImGuiWindowFlags_HorizontalScrollbar : 0);
            //     ImGui.PushStyleVar(ImGuiStyleVar_ItemSpacing, ImVec2(2, 0));
            //     ImGui.PushStyleVar(ImGuiStyleVar_FramePadding, ImVec2(2, 0));
            //     HelpMarker("Test of different widgets react and impact the work rectangle growing when horizontal scrolling is enabled.\n\nUse 'Metrics->Tools->Show windows rectangles' to visualize rectangles.");
            //     ImGui.Checkbox("H-scrollbar", &show_h_scrollbar);
            //     ImGui.Checkbox("Button", &show_button);            // Will grow contents size (unless explicitly overwritten)
            //     ImGui.Checkbox("Tree nodes", &show_tree_nodes);    // Will grow contents size and display highlight over full width
            //     ImGui.Checkbox("Text wrapped", &show_text_wrapped);// Will grow and use contents size
            //     ImGui.Checkbox("Columns", &show_columns);          // Will use contents size
            //     ImGui.Checkbox("Tab bar", &show_tab_bar);          // Will use contents size
            //     ImGui.Checkbox("Child", &show_child);              // Will grow and use contents size
            //     ImGui.Checkbox("Explicit content size", &explicit_content_size);
            //     ImGui.Text("Scroll %.1f/%.1f %.1f/%.1f", ImGui.GetScrollX(), ImGui.GetScrollMaxX(), ImGui.GetScrollY(), ImGui.GetScrollMaxY());
            //     if (explicit_content_size)
            //     {
            //         ImGui.SameLine();
            //         ImGui.SetNextItemWidth(100);
            //         ImGui.DragFloat("##csx", &contents_size_x);
            //         ImVec2 p = ImGui.GetCursorScreenPos();
            //         ImGui.GetWindowDrawList()->AddRectFilled(p, ImVec2(p.x + 10, p.y + 10), IM_COL32_WHITE);
            //         ImGui.GetWindowDrawList()->AddRectFilled(ImVec2(p.x + contents_size_x - 10, p.y), ImVec2(p.x + contents_size_x, p.y + 10), IM_COL32_WHITE);
            //         ImGui.Dummy(ImVec2(0, 10));
            //     }
            //     ImGui.PopStyleVar(2);
            //     ImGui.Separator();
            //     if (show_button)
            //     {
            //         ImGui.Button("this is a 300-wide button", ImVec2(300, 0));
            //     }
            //     if (show_tree_nodes)
            //     {
            //         bool open = true;
            //         if (ImGui.TreeNode("this is a tree node"))
            //         {
            //             if (ImGui.TreeNode("another one of those tree node..."))
            //             {
            //                 ImGui.Text("Some tree contents");
            //                 ImGui.TreePop();
            //             }
            //             ImGui.TreePop();
            //         }
            //         ImGui.CollapsingHeader("CollapsingHeader", &open);
            //     }
            //     if (show_text_wrapped)
            //     {
            //         ImGui.TextWrapped("This text should automatically wrap on the edge of the work rectangle.");
            //     }
            //     if (show_columns)
            //     {
            //         ImGui.Columns(4);
            //         for (int n = 0; n < 4; n++)
            //         {
            //             ImGui.Text("Width %.2f", ImGui.GetColumnWidth());
            //             ImGui.NextColumn();
            //         }
            //         ImGui.Columns(1);
            //     }
            //     if (show_tab_bar && ImGui.BeginTabBar("Hello"))
            //     {
            //         if (ImGui.BeginTabItem("OneOneOne")) { ImGui.EndTabItem(); }
            //         if (ImGui.BeginTabItem("TwoTwoTwo")) { ImGui.EndTabItem(); }
            //         if (ImGui.BeginTabItem("ThreeThreeThree")) { ImGui.EndTabItem(); }
            //         if (ImGui.BeginTabItem("FourFourFour")) { ImGui.EndTabItem(); }
            //         ImGui.EndTabBar();
            //     }
            //     if (show_child)
            //     {
            //         ImGui.BeginChild("child", ImVec2(0,0), true);
            //         ImGui.EndChild();
            //     }
            //     ImGui.End();
            // }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Clipping")) {
            /* static */ const size = STATIC("size", new imgui_19.ImVec2(100, 100)), offset = STATIC("offset", new imgui_19.ImVec2(50, 20));
            ImGui.TextWrapped("On a per-widget basis we are occasionally clipping text CPU-side if it won't fit in its frame. Otherwise we are doing coarser clipping + passing a scissor rectangle to the renderer. The system is designed to try minimizing both execution and CPU/GPU rendering cost.");
            ImGui.DragFloat2("size", size.value, 0.5, 1.0, 200.0, "%.0f");
            ImGui.TextWrapped("(Click and drag)");
            const pos = ImGui.GetCursorScreenPos();
            const clip_rect = new imgui_20.ImVec4(pos.x, pos.y, pos.x + size.value.x, pos.y + size.value.y);
            ImGui.InvisibleButton("##dummy", size.value);
            if (ImGui.IsItemActive() && ImGui.IsMouseDragging()) {
                offset.value.x += ImGui.GetIO().MouseDelta.x;
                offset.value.y += ImGui.GetIO().MouseDelta.y;
            }
            ImGui.GetWindowDrawList().AddRectFilled(pos, new imgui_19.ImVec2(pos.x + size.value.x, pos.y + size.value.y), imgui_21.IM_COL32(90, 90, 120, 255));
            ImGui.GetWindowDrawList().AddText(ImGui.GetFont(), ImGui.GetFontSize() * 2.0, new imgui_19.ImVec2(pos.x + offset.value.x, pos.y + offset.value.y), imgui_21.IM_COL32(255, 255, 255, 255), "Line 1 hello\nLine 2 clip me!", null, 0.0, clip_rect);
            ImGui.TreePop();
        }
    }
    function ShowDemoWindowPopups() {
        if (!ImGui.CollapsingHeader("Popups & Modal windows"))
            return;
        // The properties of popups windows are:
        // - They block normal mouse hovering detection outside them. (*)
        // - Unless modal, they can be closed by clicking anywhere outside them, or by pressing ESCAPE.
        // - Their visibility state (~bool) is held internally by Dear ImGui instead of being held by the programmer as we are used to with regular Begin() calls.
        //   User can manipulate the visibility state by calling OpenPopup().
        // (*) One can use IsItemHovered(ImGuiHoveredFlags_AllowWhenBlockedByPopup) to bypass it and detect hovering even when normally blocked by a popup.
        // Those three properties are connected. The library needs to hold their visibility state because it can close popups at any time.
        // Typical use for regular windows:
        //   bool my_tool_is_active = false; if (ImGui.Button("Open")) my_tool_is_active = true; [...] if (my_tool_is_active) Begin("My Tool", &my_tool_is_active) { [...] } End();
        // Typical use for popups:
        //   if (ImGui.Button("Open")) ImGui.OpenPopup("MyPopup"); if (ImGui.BeginPopup("MyPopup") { [...] EndPopup(); }
        // With popups we have to go through a library call (here OpenPopup) to manipulate the visibility state.
        // This may be a bit confusing at first but it should quickly make sense. Follow on the examples below.
        if (ImGui.TreeNode("Popups")) {
            ImGui.TextWrapped("When a popup is active, it inhibits interacting with windows that are behind the popup. Clicking outside the popup closes it.");
            /* static */ const selected_fish = STATIC("selected_fish", -1);
            const names = ["Bream", "Haddock", "Mackerel", "Pollock", "Tilefish"];
            /* static */ const toggles = STATIC("toggles", [true, false, false, false, false]);
            // Simple selection popup
            // (If you want to show the current selection inside the Button itself, you may want to build a string using the "###" operator to preserve a constant ID with a variable label)
            if (ImGui.Button("Select.."))
                ImGui.OpenPopup("my_select_popup");
            ImGui.SameLine();
            ImGui.TextUnformatted(selected_fish.value === -1 ? "<None>" : names[selected_fish.value]);
            if (ImGui.BeginPopup("my_select_popup")) {
                ImGui.Text("Aquarium");
                ImGui.Separator();
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(names); i++)
                    if (ImGui.Selectable(names[i]))
                        selected_fish.value = i;
                ImGui.EndPopup();
            }
            // Showing a menu with toggles
            if (ImGui.Button("Toggle.."))
                ImGui.OpenPopup("my_toggle_popup");
            if (ImGui.BeginPopup("my_toggle_popup")) {
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(names); i++) {
                    ImGui.MenuItem(names[i], "", (value = toggles.value[i]) => toggles.value[i] = value);
                }
                if (ImGui.BeginMenu("Sub-menu")) {
                    ImGui.MenuItem("Click me");
                    ImGui.EndMenu();
                }
                ImGui.Separator();
                ImGui.Text("Tooltip here");
                if (ImGui.IsItemHovered())
                    ImGui.SetTooltip("I am a tooltip over a popup");
                if (ImGui.Button("Stacked Popup"))
                    ImGui.OpenPopup("another popup");
                if (ImGui.BeginPopup("another popup")) {
                    for (let i = 0; i < imgui_3.IM_ARRAYSIZE(names); i++) {
                        ImGui.MenuItem(names[i], "", (value = toggles.value[i]) => toggles.value[i] = value);
                    }
                    if (ImGui.BeginMenu("Sub-menu")) {
                        ImGui.MenuItem("Click me");
                        if (ImGui.Button("Stacked Popup"))
                            ImGui.OpenPopup("another popup");
                        if (ImGui.BeginPopup("another popup")) {
                            ImGui.Text("I am the last one here.");
                            ImGui.EndPopup();
                        }
                        ImGui.EndMenu();
                    }
                    ImGui.EndPopup();
                }
                ImGui.EndPopup();
            }
            // Call the more complete ShowExampleMenuFile which we use in various places of this demo
            if (ImGui.Button("File Menu.."))
                ImGui.OpenPopup("my_file_popup");
            if (ImGui.BeginPopup("my_file_popup")) {
                ShowExampleMenuFile();
                ImGui.EndPopup();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Context menus")) {
            // BeginPopupContextItem() is a helper to provide common/simple popup behavior of essentially doing:
            //    if (IsItemHovered() && IsMouseReleased(0))
            //       OpenPopup(id);
            //    return BeginPopup(id);
            // For more advanced uses you may want to replicate and cuztomize this code. This the comments inside BeginPopupContextItem() implementation.
            /* static */ const value = STATIC("value", 0.5);
            ImGui.Text(`Value = ${value.value.toFixed(3)} (<-- right-click here)`);
            if (ImGui.BeginPopupContextItem("item context menu")) {
                if (ImGui.Selectable("Set to zero"))
                    value.value = 0.0;
                if (ImGui.Selectable("Set to PI"))
                    value.value = 3.1415;
                ImGui.SetNextItemWidth(-1);
                ImGui.DragFloat("##Value", (_value = value.value) => value.value = _value, 0.1, 0.0, 0.0);
                ImGui.EndPopup();
            }
            // We can also use OpenPopupOnItemClick() which is the same as BeginPopupContextItem() but without the Begin call.
            // So here we will make it that clicking on the text field with the right mouse button (1) will toggle the visibility of the popup above.
            ImGui.Text("(You can also right-click me to open the same popup as above.)");
            ImGui.OpenPopupOnItemClick("item context menu", 1);
            // When used after an item that has an ID (here the Button), we can skip providing an ID to BeginPopupContextItem().
            // BeginPopupContextItem() will use the last item ID as the popup ID.
            // In addition here, we want to include your editable label inside the button label. We use the ### operator to override the ID (read FAQ about ID for details)
            /* static */ const name = STATIC("name", new imgui_4.ImStringBuffer(32, "Label1"));
            const buf = `Button: ${name.value.buffer}###Button`; // ### operator override ID ignoring the preceding label
            ImGui.Button(buf);
            if (ImGui.BeginPopupContextItem()) {
                ImGui.Text("Edit name:");
                ImGui.InputText("##edit", name.value, imgui_3.IM_ARRAYSIZE(name.value));
                if (ImGui.Button("Close"))
                    ImGui.CloseCurrentPopup();
                ImGui.EndPopup();
            }
            ImGui.SameLine();
            ImGui.Text("(<-- right-click here)");
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Modals")) {
            ImGui.TextWrapped("Modal windows are like popups but the user cannot close them by clicking outside the window.");
            if (ImGui.Button("Delete.."))
                ImGui.OpenPopup("Delete?");
            if (ImGui.BeginPopupModal("Delete?", null, imgui_15.ImGuiWindowFlags.AlwaysAutoResize)) {
                ImGui.Text("All those beautiful files will be deleted.\nThis operation cannot be undone!\n\n");
                ImGui.Separator();
                ///* static */ const dummy_i: number = 0;
                //ImGui.Combo("Combo", &dummy_i, "Delete\0Delete harder\0");
                /* static */ const dont_ask_me_next_time = STATIC("dont_ask_me_next_time", false);
                ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.FramePadding, new imgui_19.ImVec2(0, 0));
                ImGui.Checkbox("Don't ask me next time", (value = dont_ask_me_next_time.value) => dont_ask_me_next_time.value = value);
                ImGui.PopStyleVar();
                if (ImGui.Button("OK", new imgui_19.ImVec2(120, 0))) {
                    ImGui.CloseCurrentPopup();
                }
                ImGui.SetItemDefaultFocus();
                ImGui.SameLine();
                if (ImGui.Button("Cancel", new imgui_19.ImVec2(120, 0))) {
                    ImGui.CloseCurrentPopup();
                }
                ImGui.EndPopup();
            }
            if (ImGui.Button("Stacked modals.."))
                ImGui.OpenPopup("Stacked 1");
            if (ImGui.BeginPopupModal("Stacked 1", null, imgui_15.ImGuiWindowFlags.MenuBar)) {
                if (ImGui.BeginMenuBar()) {
                    if (ImGui.BeginMenu("File")) {
                        if (ImGui.MenuItem("Dummy menu item")) { }
                        ImGui.EndMenu();
                    }
                    ImGui.EndMenuBar();
                }
                ImGui.Text("Hello from Stacked The First\nUsing style.Colors[ImGuiCol.ModalWindowDimBg] behind it.");
                // Testing behavior of widgets stacking their own regular popups over the modal.
                /* static */ const item = STATIC("item#1636", 1);
                /* static */ const color = STATIC("color#2", [0.4, 0.7, 0.0, 0.5]);
                ImGui.Combo("Combo", (value = item.value) => item.value = value, "aaaa\0bbbb\0cccc\0dddd\0eeee\0\0");
                ImGui.ColorEdit4("color", color.value);
                if (ImGui.Button("Add another modal.."))
                    ImGui.OpenPopup("Stacked 2");
                // Also demonstrate passing a bool* to BeginPopupModal(), this will create a regular close button which will close the popup.
                // Note that the visibility state of popups is owned by imgui, so the input value of the bool actually doesn't matter here.
                let dummy_open = true;
                if (ImGui.BeginPopupModal("Stacked 2", [dummy_open])) {
                    ImGui.Text("Hello from Stacked The Second!");
                    if (ImGui.Button("Close"))
                        ImGui.CloseCurrentPopup();
                    ImGui.EndPopup();
                }
                if (ImGui.Button("Close"))
                    ImGui.CloseCurrentPopup();
                ImGui.EndPopup();
            }
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Menus inside a regular window")) {
            ImGui.TextWrapped("Below we are testing adding menu items to a regular window. It's rather unusual but should work!");
            ImGui.Separator();
            // NB: As a quirk in this very specific example, we want to differentiate the parent of this menu from the parent of the various popup menus above.
            // To do so we are encloding the items in a PushID()/PopID() block to make them two different menusets. If we don't, opening any popup above and hovering our menu here
            // would open it. This is because once a menu is active, we allow to switch to a sibling menu by just hovering on it, which is the desired behavior for regular menus.
            ImGui.PushID("foo");
            ImGui.MenuItem("Menu item", "CTRL+M");
            if (ImGui.BeginMenu("Menu inside a regular window")) {
                ShowExampleMenuFile();
                ImGui.EndMenu();
            }
            ImGui.PopID();
            ImGui.Separator();
            ImGui.TreePop();
        }
    }
    function ShowDemoWindowColumns() {
        if (!ImGui.CollapsingHeader("Columns"))
            return;
        ImGui.PushID("Columns");
        /* static */ const disable_indent = STATIC("disable_indent", false);
        ImGui.Checkbox("Disable tree indentation", (value = disable_indent.value) => disable_indent.value = value);
        ImGui.SameLine();
        HelpMarker("Disable the indenting of tree nodes so demo columns can use the full window width.");
        if (disable_indent.value)
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.IndentSpacing, 0.0);
        // Basic columns
        if (ImGui.TreeNode("Basic")) {
            ImGui.Text("Without border:");
            ImGui.Columns(3, "mycolumns3", false); // 3-ways, no border
            ImGui.Separator();
            for (let n = 0; n < 14; n++) {
                const label = `Item ${n}`;
                if (ImGui.Selectable(label)) { }
                //if (ImGui.Button(label, new ImVec2(-1,0))) {}
                ImGui.NextColumn();
            }
            ImGui.Columns(1);
            ImGui.Separator();
            ImGui.Text("With border:");
            ImGui.Columns(4, "mycolumns"); // 4-ways, with border
            ImGui.Separator();
            ImGui.Text("ID");
            ImGui.NextColumn();
            ImGui.Text("Name");
            ImGui.NextColumn();
            ImGui.Text("Path");
            ImGui.NextColumn();
            ImGui.Text("Hovered");
            ImGui.NextColumn();
            ImGui.Separator();
            const names = ["One", "Two", "Three"];
            const paths = ["/path/one", "/path/two", "/path/three"];
            /* static */ const selected = STATIC("selected#1709", -1);
            for (let i = 0; i < 3; i++) {
                const label = format_number_dec(i, 4);
                if (ImGui.Selectable(label, selected.value === i, imgui_12.ImGuiSelectableFlags.SpanAllColumns))
                    selected.value = i;
                const hovered = ImGui.IsItemHovered();
                ImGui.NextColumn();
                ImGui.Text(names[i]);
                ImGui.NextColumn();
                ImGui.Text(paths[i]);
                ImGui.NextColumn();
                ImGui.Text(`${hovered}`);
                ImGui.NextColumn();
            }
            ImGui.Columns(1);
            ImGui.Separator();
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Borders")) {
            // NB: Future columns API should allow automatic horizontal borders.
            /* static */ const h_borders = STATIC("h_borders", true);
            /* static */ const v_borders = STATIC("v_borders", true);
            ImGui.Checkbox("horizontal", (value = h_borders.value) => h_borders.value = value);
            ImGui.SameLine();
            ImGui.Checkbox("vertical", (value = v_borders.value) => v_borders.value = value);
            ImGui.Columns(4, null, v_borders.value);
            for (let i = 0; i < 4 * 3; i++) {
                if (h_borders.value && ImGui.GetColumnIndex() === 0)
                    ImGui.Separator();
                // ImGui.Text("%c%c%c", 'a'+i, 'a'+i, 'a'+i);
                const c = String.fromCharCode("a".charCodeAt(0) + i);
                ImGui.Text(`${c}${c}${c}`);
                ImGui.Text(`Width ${ImGui.GetColumnWidth().toFixed(2)}`);
                ImGui.Text(`Offset ${ImGui.GetColumnOffset().toFixed(2)}`);
                ImGui.Text("Long text that is likely to clip");
                ImGui.Button("Button", new imgui_19.ImVec2(-1.0, 0.0));
                ImGui.NextColumn();
            }
            ImGui.Columns(1);
            if (h_borders.value)
                ImGui.Separator();
            ImGui.TreePop();
        }
        // Create multiple items in a same cell before switching to next column
        if (ImGui.TreeNode("Mixed items")) {
            ImGui.Columns(3, "mixed");
            ImGui.Separator();
            ImGui.Text("Hello");
            ImGui.Button("Banana");
            ImGui.NextColumn();
            ImGui.Text("ImGui");
            ImGui.Button("Apple");
            /* static */ const foo = STATIC("foo", 1.0);
            ImGui.InputFloat("red", (value = foo.value) => foo.value = value, 0.05, 0, "%.3f");
            ImGui.Text("An extra line here.");
            ImGui.NextColumn();
            ImGui.Text("Sailor");
            ImGui.Button("Corniflower");
            /* static */ const bar = STATIC("bar", 1.0);
            ImGui.InputFloat("blue", (value = bar.value) => bar.value = value, 0.05, 0, "%.3f");
            ImGui.NextColumn();
            if (ImGui.CollapsingHeader("Category A")) {
                ImGui.Text("Blah blah blah");
            }
            ImGui.NextColumn();
            if (ImGui.CollapsingHeader("Category B")) {
                ImGui.Text("Blah blah blah");
            }
            ImGui.NextColumn();
            if (ImGui.CollapsingHeader("Category C")) {
                ImGui.Text("Blah blah blah");
            }
            ImGui.NextColumn();
            ImGui.Columns(1);
            ImGui.Separator();
            ImGui.TreePop();
        }
        // Word wrapping
        if (ImGui.TreeNode("Word-wrapping")) {
            ImGui.Columns(2, "word-wrapping");
            ImGui.Separator();
            ImGui.TextWrapped("The quick brown fox jumps over the lazy dog.");
            ImGui.TextWrapped("Hello Left");
            ImGui.NextColumn();
            ImGui.TextWrapped("The quick brown fox jumps over the lazy dog.");
            ImGui.TextWrapped("Hello Right");
            ImGui.Columns(1);
            ImGui.Separator();
            ImGui.TreePop();
        }
        // Scrolling columns
        /*
        if (ImGui.TreeNode("Vertical Scrolling"))
        {
            ImGui.BeginChild("##header", ImVec2(0, ImGui.GetTextLineHeightWithSpacing()+ImGui.GetStyle().ItemSpacing.y));
            ImGui.Columns(3);
            ImGui.Text("ID"); ImGui.NextColumn();
            ImGui.Text("Name"); ImGui.NextColumn();
            ImGui.Text("Path"); ImGui.NextColumn();
            ImGui.Columns(1);
            ImGui.Separator();
            ImGui.EndChild();
            ImGui.BeginChild("##scrollingregion", ImVec2(0, 60));
            ImGui.Columns(3);
            for (let i = 0; i < 10; i++)
            {
                ImGui.Text("%04d", i); ImGui.NextColumn();
                ImGui.Text("Foobar"); ImGui.NextColumn();
                ImGui.Text("/path/foobar/%04d/", i); ImGui.NextColumn();
            }
            ImGui.Columns(1);
            ImGui.EndChild();
            ImGui.TreePop();
        }
        */
        if (ImGui.TreeNode("Horizontal Scrolling")) {
            ImGui.SetNextWindowContentSize(new imgui_19.ImVec2(1500.0, 0.0));
            ImGui.BeginChild("##ScrollingRegion", new imgui_19.ImVec2(0, ImGui.GetFontSize() * 20), false, imgui_15.ImGuiWindowFlags.HorizontalScrollbar);
            ImGui.Columns(10);
            const ITEMS_COUNT = 2000;
            const clipper = new imgui_26.ImGuiListClipper(ITEMS_COUNT); // Also demonstrate using the clipper for large list
            while (clipper.Step()) {
                for (let i = clipper.DisplayStart; i < clipper.DisplayEnd; i++)
                    for (let j = 0; j < 10; j++) {
                        ImGui.Text(`Line ${i} Column ${j}...`);
                        ImGui.NextColumn();
                    }
            }
            // clipper.delete(); // NOTE: native emscripten class
            ImGui.Columns(1);
            ImGui.EndChild();
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Tree")) {
            ImGui.Columns(2, "tree", true);
            for (let x = 0; x < 3; x++) {
                const open1 = ImGui.TreeNode(x, `Node${x}`);
                ImGui.NextColumn();
                ImGui.Text("Node contents");
                ImGui.NextColumn();
                if (open1) {
                    for (let y = 0; y < 3; y++) {
                        const open2 = ImGui.TreeNode(y, `Node${x}.${y}`);
                        ImGui.NextColumn();
                        ImGui.Text("Node contents");
                        if (open2) {
                            ImGui.Text("Even more contents");
                            if (ImGui.TreeNode("Tree in column")) {
                                ImGui.Text("The quick brown fox jumps over the lazy dog");
                                ImGui.TreePop();
                            }
                        }
                        ImGui.NextColumn();
                        if (open2)
                            ImGui.TreePop();
                    }
                    ImGui.TreePop();
                }
            }
            ImGui.Columns(1);
            ImGui.TreePop();
        }
        if (disable_indent.value)
            ImGui.PopStyleVar();
        ImGui.PopID();
    }
    function ShowDemoWindowMisc() {
        if (ImGui.CollapsingHeader("Filtering")) {
            /* static */ const filter = STATIC("filter#1864", new imgui_24.ImGuiTextFilter());
            ImGui.Text("Filter usage:\n"
                + "  \"\"         display all lines\n"
                + "  \"xxx\"      display lines containing \"xxx\"\n"
                + "  \"xxx,yyy\"  display lines containing \"xxx\" or \"yyy\"\n"
                + "  \"-xxx\"     hide lines containing \"xxx\"");
            filter.value.Draw();
            const lines = ["aaa1.c", "bbb1.c", "ccc1.c", "aaa2.cpp", "bbb2.cpp", "ccc2.cpp", "abc.h", "hello, world"];
            for (let i = 0; i < imgui_3.IM_ARRAYSIZE(lines); i++)
                if (filter.value.PassFilter(lines[i]))
                    ImGui.BulletText(lines[i]);
        }
        if (ImGui.CollapsingHeader("Inputs, Navigation & Focus")) {
            const io = ImGui.GetIO();
            ImGui.Text(`WantCaptureMouse: ${io.WantCaptureMouse}`);
            ImGui.Text(`WantCaptureKeyboard: ${io.WantCaptureKeyboard}`);
            ImGui.Text(`WantTextInput: ${io.WantTextInput}`);
            ImGui.Text(`WantSetMousePos: ${io.WantSetMousePos}`);
            ImGui.Text(`NavActive: ${io.NavActive}, NavVisible: ${io.NavVisible}`);
            if (ImGui.TreeNode("Keyboard, Mouse & Navigation State")) {
                if (ImGui.IsMousePosValid())
                    ImGui.Text(`Mouse pos: (${io.MousePos.x}, ${io.MousePos.y})`);
                else
                    ImGui.Text("Mouse pos: <INVALID>");
                ImGui.Text(`Mouse delta: (${io.MouseDelta.x}, ${io.MouseDelta.y})`);
                ImGui.Text("Mouse down:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.MouseDown); i++)
                    if (io.MouseDownDuration[i] >= 0.0) {
                        ImGui.SameLine();
                        ImGui.Text(`b${i} (${io.MouseDownDuration[i].toFixed(2)} secs)`);
                    }
                ImGui.Text("Mouse clicked:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.MouseDown); i++)
                    if (ImGui.IsMouseClicked(i)) {
                        ImGui.SameLine();
                        ImGui.Text(`b${i}`);
                    }
                ImGui.Text("Mouse dbl-clicked:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.MouseDown); i++)
                    if (ImGui.IsMouseDoubleClicked(i)) {
                        ImGui.SameLine();
                        ImGui.Text(`b${i}`);
                    }
                ImGui.Text("Mouse released:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.MouseDown); i++)
                    if (ImGui.IsMouseReleased(i)) {
                        ImGui.SameLine();
                        ImGui.Text(`b${i}`);
                    }
                ImGui.Text(`Mouse wheel: ${io.MouseWheel.toFixed(1)}`);
                ImGui.Text("Keys down:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.KeysDown); i++)
                    if (io.KeysDownDuration[i] >= 0.0) {
                        ImGui.SameLine();
                        ImGui.Text(`${i} (0x${i.toString(16)}) (${io.KeysDownDuration[i].toFixed(2)} secs)`);
                    }
                ImGui.Text("Keys pressed:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.KeysDown); i++)
                    if (ImGui.IsKeyPressed(i)) {
                        ImGui.SameLine();
                        ImGui.Text(`${i} (0x${i.toString(16)})`);
                    }
                ImGui.Text("Keys release:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.KeysDown); i++)
                    if (ImGui.IsKeyReleased(i)) {
                        ImGui.SameLine();
                        ImGui.Text(`${i} (0x${i.toString(16)})`);
                    }
                ImGui.Text(`Keys mods: ${io.KeyCtrl ? "CTRL " : ""}${io.KeyShift ? "SHIFT " : ""}${io.KeyAlt ? "ALT " : ""}${io.KeySuper ? "SUPER " : ""}`);
                // ImGui.Text("Chars queue:");    for (let i = 0; i < io.InputQueueCharacters.Size; i++) { const c: ImWchar = io.InputQueueCharacters[i]; ImGui.SameLine();  ImGui.Text("\'%c\' (0x%04X)", (c > ' ' && c <= 255) ? (char)c : '?', c); } // FIXME: We should convert 'c' to UTF-8 here but the functions are not public.
                ImGui.Text("NavInputs down:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.NavInputs); i++)
                    if (io.NavInputs[i] > 0.0) {
                        ImGui.SameLine();
                        ImGui.Text(`[${i}] ${io.NavInputs[i].toFixed(2)}`);
                    }
                ImGui.Text("NavInputs pressed:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.NavInputs); i++)
                    if (io.NavInputsDownDuration[i] === 0.0) {
                        ImGui.SameLine();
                        ImGui.Text(`[${i}]`);
                    }
                ImGui.Text("NavInputs duration:");
                for (let i = 0; i < imgui_3.IM_ARRAYSIZE(io.NavInputs); i++)
                    if (io.NavInputsDownDuration[i] >= 0.0) {
                        ImGui.SameLine();
                        ImGui.Text(`[${i}] ${io.NavInputsDownDuration[i].toFixed(2)}`);
                    }
                ImGui.Button("Hovering me sets the\nkeyboard capture flag");
                if (ImGui.IsItemHovered())
                    ImGui.CaptureKeyboardFromApp(true);
                ImGui.SameLine();
                ImGui.Button("Holding me clears the\nthe keyboard capture flag");
                if (ImGui.IsItemActive())
                    ImGui.CaptureKeyboardFromApp(false);
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Tabbing")) {
                ImGui.Text("Use TAB/SHIFT+TAB to cycle through keyboard editable fields.");
                /* static */ const buf = STATIC("buf1#1921", new imgui_4.ImStringBuffer(32, "dummy"));
                ImGui.InputText("1", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                ImGui.InputText("2", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                ImGui.InputText("3", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                ImGui.PushAllowKeyboardFocus(false);
                ImGui.InputText("4 (tab skip)", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                //ImGui.SameLine(); HelpMarker("Use ImGui.PushAllowKeyboardFocus(bool)\nto disable tabbing through certain widgets.");
                ImGui.PopAllowKeyboardFocus();
                ImGui.InputText("5", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Focus from code")) {
                const focus_1 = ImGui.Button("Focus on 1");
                ImGui.SameLine();
                const focus_2 = ImGui.Button("Focus on 2");
                ImGui.SameLine();
                const focus_3 = ImGui.Button("Focus on 3");
                let has_focus = 0;
                /* static */ const buf = STATIC("buf2#1944", new imgui_4.ImStringBuffer(128, "click on a button to set focus"));
                if (focus_1)
                    ImGui.SetKeyboardFocusHere();
                ImGui.InputText("1", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                if (ImGui.IsItemActive())
                    has_focus = 1;
                if (focus_2)
                    ImGui.SetKeyboardFocusHere();
                ImGui.InputText("2", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                if (ImGui.IsItemActive())
                    has_focus = 2;
                ImGui.PushAllowKeyboardFocus(false);
                if (focus_3)
                    ImGui.SetKeyboardFocusHere();
                ImGui.InputText("3 (tab skip)", buf.value, imgui_3.IM_ARRAYSIZE(buf.value));
                if (ImGui.IsItemActive())
                    has_focus = 3;
                ImGui.PopAllowKeyboardFocus();
                if (has_focus)
                    ImGui.Text(`Item with focus: ${has_focus}`);
                else
                    ImGui.Text("Item with focus: <none>");
                // Use >= 0 parameter to SetKeyboardFocusHere() to focus an upcoming item
                /* static */ const f3 = STATIC("f3", [0.0, 0.0, 0.0]);
                let focus_ahead = -1;
                if (ImGui.Button("Focus on X")) {
                    focus_ahead = 0;
                }
                ImGui.SameLine();
                if (ImGui.Button("Focus on Y")) {
                    focus_ahead = 1;
                }
                ImGui.SameLine();
                if (ImGui.Button("Focus on Z")) {
                    focus_ahead = 2;
                }
                if (focus_ahead !== -1)
                    ImGui.SetKeyboardFocusHere(focus_ahead);
                ImGui.SliderFloat3("Float3", f3.value, 0.0, 1.0);
                ImGui.TextWrapped("NB: Cursor & selection are preserved when refocusing last used item in code.");
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Dragging")) {
                ImGui.TextWrapped("You can use ImGui.GetMouseDragDelta(0) to query for the dragged amount on any widget.");
                for (let button = 0; button < 3; button++)
                    ImGui.Text(`IsMouseDragging(${button}):\n  w/ default threshold: ${ImGui.IsMouseDragging(button)},\n  w/ zero threshold: ${ImGui.IsMouseDragging(button, 0.0)}\n  w/ large threshold: ${ImGui.IsMouseDragging(button, 20.0)}`);
                ImGui.Button("Drag Me");
                if (ImGui.IsItemActive())
                    ImGui.GetForegroundDrawList().AddLine(io.MouseClickedPos[0], io.MousePos, ImGui.GetColorU32(imgui_5.ImGuiCol.Button), 4.0); // Draw a line between the button and the mouse cursor
                // Drag operations gets "unlocked" when the mouse has moved past a certain threshold (the default threshold is stored in io.MouseDragThreshold)
                // You can request a lower or higher threshold using the second parameter of IsMouseDragging() and GetMouseDragDelta()
                const value_raw = ImGui.GetMouseDragDelta(0, 0.0);
                const value_with_lock_threshold = ImGui.GetMouseDragDelta(0);
                const mouse_delta = io.MouseDelta;
                ImGui.SameLine();
                ImGui.Text(`Raw (${value_raw.x.toFixed(1)}, ${value_raw.y.toFixed(1)}), WithLockThresold (${value_with_lock_threshold.x.toFixed(1)}, ${value_with_lock_threshold.y.toFixed(1)}), MouseDelta (${mouse_delta.x.toFixed(1)}, ${mouse_delta.y.toFixed(1)})`);
                // TODO
                // ImGui.Text("GetMouseDragDelta(0):\n  w/ default threshold: (%.1f, %.1f),\n  w/ zero threshold: (%.1f, %.1f)\nMouseDelta: (%.1f, %.1f)", value_with_lock_threshold.x, value_with_lock_threshold.y, value_raw.x, value_raw.y, mouse_delta.x, mouse_delta.y);
                ImGui.TreePop();
            }
            if (ImGui.TreeNode("Mouse cursors")) {
                const mouse_cursors_names = ["Arrow", "TextInput", "Move", "ResizeNS", "ResizeEW", "ResizeNESW", "ResizeNWSE", "Hand"];
                imgui_2.IM_ASSERT(imgui_3.IM_ARRAYSIZE(mouse_cursors_names) === imgui_11.ImGuiMouseCursor.COUNT);
                ImGui.Text(`Current mouse cursor = ${ImGui.GetMouseCursor()}: ${mouse_cursors_names[ImGui.GetMouseCursor()]}`);
                ImGui.Text("Hover to see mouse cursors:");
                ImGui.SameLine();
                HelpMarker("Your application can render a different mouse cursor based on what ImGui.GetMouseCursor() returns. If software cursor rendering (io.MouseDrawCursor) is set ImGui will draw the right cursor for you, otherwise your backend needs to handle it.");
                for (let i = 0; i < imgui_11.ImGuiMouseCursor.COUNT; i++) {
                    const label = `Mouse cursor ${i}: ${mouse_cursors_names[i]}`;
                    ImGui.Bullet();
                    ImGui.Selectable(label, false);
                    if (ImGui.IsItemHovered() || ImGui.IsItemFocused())
                        ImGui.SetMouseCursor(i);
                }
                ImGui.TreePop();
            }
        }
    }
    //-----------------------------------------------------------------------------
    // [SECTION] About Window / ShowAboutWindow()
    // Access from Dear ImGui Demo -> Help -> About
    //-----------------------------------------------------------------------------
    function ShowAboutWindow(p_open) {
        if (!ImGui.Begin("About Dear ImGui", p_open, imgui_15.ImGuiWindowFlags.AlwaysAutoResize)) {
            ImGui.End();
            return;
        }
        ImGui.Text(`Dear ImGui ${ImGui.GetVersion()}`);
        ImGui.Separator();
        ImGui.Text("By Omar Cornut and all dear imgui contributors.");
        ImGui.Text("Dear ImGui is licensed under the MIT License, see LICENSE for more information.");
        // TODO
        // static bool show_config_info = false;
        // ImGui.Checkbox("Config/Build Information", &show_config_info);
        // if (show_config_info)
        // {
        //     ImGuiIO& io = ImGui.GetIO();
        //     ImGuiStyle& style = ImGui.GetStyle();
        //     bool copy_to_clipboard = ImGui.Button("Copy to clipboard");
        //     ImGui.BeginChildFrame(ImGui.GetID("cfginfos"), ImVec2(0, ImGui.GetTextLineHeightWithSpacing() * 18), ImGuiWindowFlags_NoMove);
        //     if (copy_to_clipboard)
        //         ImGui.LogToClipboard();
        //     ImGui.Text("Dear ImGui %s (%d)", IMGUI_VERSION, IMGUI_VERSION_NUM);
        //     ImGui.Separator();
        //     ImGui.Text("sizeof(size_t): %d, sizeof(ImDrawIdx): %d, sizeof(ImDrawVert): %d", (int)sizeof(size_t), (int)sizeof(ImDrawIdx), (int)sizeof(ImDrawVert));
        //     ImGui.Text("define: __cplusplus=%d", (int)__cplusplus);
        //     #ifdef IMGUI_DISABLE_OBSOLETE_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_OBSOLETE_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_WIN32_DEFAULT_CLIPBOARD_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_WIN32_DEFAULT_CLIPBOARD_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_WIN32_DEFAULT_IME_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_WIN32_DEFAULT_IME_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_WIN32_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_WIN32_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_FORMAT_STRING_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_FORMAT_STRING_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_MATH_FUNCTIONS
        //     ImGui.Text("define: IMGUI_DISABLE_MATH_FUNCTIONS");
        //     #endif
        //     #ifdef IMGUI_DISABLE_DEFAULT_ALLOCATORS
        //     ImGui.Text("define: IMGUI_DISABLE_DEFAULT_ALLOCATORS");
        //     #endif
        //     #ifdef IMGUI_USE_BGRA_PACKED_COLOR
        //     ImGui.Text("define: IMGUI_USE_BGRA_PACKED_COLOR");
        //     #endif
        //     #ifdef _WIN32
        //     ImGui.Text("define: _WIN32");
        //     #endif
        //     #ifdef _WIN64
        //     ImGui.Text("define: _WIN64");
        //     #endif
        //     #ifdef __linux__
        //     ImGui.Text("define: __linux__");
        //     #endif
        //     #ifdef __APPLE__
        //     ImGui.Text("define: __APPLE__");
        //     #endif
        //     #ifdef _MSC_VER
        //     ImGui.Text("define: _MSC_VER=%d", _MSC_VER);
        //     #endif
        //     #ifdef __MINGW32__
        //     ImGui.Text("define: __MINGW32__");
        //     #endif
        //     #ifdef __MINGW64__
        //     ImGui.Text("define: __MINGW64__");
        //     #endif
        //     #ifdef __GNUC__
        //     ImGui.Text("define: __GNUC__=%d", (int)__GNUC__);
        //     #endif
        //     #ifdef __clang_version__
        //     ImGui.Text("define: __clang_version__=%s", __clang_version__);
        //     #endif
        //     ImGui.Separator();
        //     ImGui.Text("io.BackendPlatformName: %s", io.BackendPlatformName ? io.BackendPlatformName : "NULL");
        //     ImGui.Text("io.BackendRendererName: %s", io.BackendRendererName ? io.BackendRendererName : "NULL");
        //     ImGui.Text("io.ConfigFlags: 0x%08X", io.ConfigFlags);
        //     if (io.ConfigFlags & ImGuiConfigFlags_NavEnableKeyboard)        ImGui.Text(" NavEnableKeyboard");
        //     if (io.ConfigFlags & ImGuiConfigFlags_NavEnableGamepad)         ImGui.Text(" NavEnableGamepad");
        //     if (io.ConfigFlags & ImGuiConfigFlags_NavEnableSetMousePos)     ImGui.Text(" NavEnableSetMousePos");
        //     if (io.ConfigFlags & ImGuiConfigFlags_NavNoCaptureKeyboard)     ImGui.Text(" NavNoCaptureKeyboard");
        //     if (io.ConfigFlags & ImGuiConfigFlags_NoMouse)                  ImGui.Text(" NoMouse");
        //     if (io.ConfigFlags & ImGuiConfigFlags_NoMouseCursorChange)      ImGui.Text(" NoMouseCursorChange");
        //     if (io.MouseDrawCursor)                                         ImGui.Text("io.MouseDrawCursor");
        //     if (io.ConfigMacOSXBehaviors)                                   ImGui.Text("io.ConfigMacOSXBehaviors");
        //     if (io.ConfigInputTextCursorBlink)                              ImGui.Text("io.ConfigInputTextCursorBlink");
        //     if (io.ConfigWindowsResizeFromEdges)                            ImGui.Text("io.ConfigWindowsResizeFromEdges");
        //     if (io.ConfigWindowsMoveFromTitleBarOnly)                       ImGui.Text("io.ConfigWindowsMoveFromTitleBarOnly");
        //     ImGui.Text("io.BackendFlags: 0x%08X", io.BackendFlags);
        //     if (io.BackendFlags & ImGuiBackendFlags_HasGamepad)             ImGui.Text(" HasGamepad");
        //     if (io.BackendFlags & ImGuiBackendFlags_HasMouseCursors)        ImGui.Text(" HasMouseCursors");
        //     if (io.BackendFlags & ImGuiBackendFlags_HasSetMousePos)         ImGui.Text(" HasSetMousePos");
        //     if (io.BackendFlags & ImGuiBackendFlags_RendererHasVtxOffset)   ImGui.Text(" RendererHasVtxOffset");
        //     ImGui.Separator();
        //     ImGui.Text("io.Fonts: %d fonts, Flags: 0x%08X, TexSize: %d,%d", io.Fonts->Fonts.Size, io.Fonts->Flags, io.Fonts->TexWidth, io.Fonts->TexHeight);
        //     ImGui.Text("io.DisplaySize: %.2f,%.2f", io.DisplaySize.x, io.DisplaySize.y);
        //     ImGui.Text("io.DisplayFramebufferScale: %.2f,%.2f", io.DisplayFramebufferScale.x, io.DisplayFramebufferScale.y);
        //     ImGui.Separator();
        //     ImGui.Text("style.WindowPadding: %.2f,%.2f", style.WindowPadding.x, style.WindowPadding.y);
        //     ImGui.Text("style.WindowBorderSize: %.2f", style.WindowBorderSize);
        //     ImGui.Text("style.FramePadding: %.2f,%.2f", style.FramePadding.x, style.FramePadding.y);
        //     ImGui.Text("style.FrameRounding: %.2f", style.FrameRounding);
        //     ImGui.Text("style.FrameBorderSize: %.2f", style.FrameBorderSize);
        //     ImGui.Text("style.ItemSpacing: %.2f,%.2f", style.ItemSpacing.x, style.ItemSpacing.y);
        //     ImGui.Text("style.ItemInnerSpacing: %.2f,%.2f", style.ItemInnerSpacing.x, style.ItemInnerSpacing.y);
        //     if (copy_to_clipboard)
        //         ImGui.LogFinish();
        //     ImGui.EndChildFrame();
        // }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Style Editor / ShowStyleEditor()
    //-----------------------------------------------------------------------------
    // Demo helper function to select among default colors. See ShowStyleEditor() for more advanced options.
    // Here we use the simplified Combo() api that packs items into a single literal string. Useful for quick combo boxes where the choices are known locally.
    function ShowStyleSelector(label) {
        /* static */ const style_idx = STATIC("style_idx", -1);
        if (ImGui.Combo(label, (value = style_idx.value) => style_idx.value = value, "Classic\0Dark\0Light\0")) {
            switch (style_idx.value) {
                case 0:
                    ImGui.StyleColorsClassic();
                    break;
                case 1:
                    ImGui.StyleColorsDark();
                    break;
                case 2:
                    ImGui.StyleColorsLight();
                    break;
            }
            return true;
        }
        return false;
    }
    exports.ShowStyleSelector = ShowStyleSelector;
    // Demo helper function to select among loaded fonts.
    // Here we use the regular BeginCombo()/EndCombo() api which is more the more flexible one.
    function ShowFontSelector(label) {
        const io = ImGui.GetIO();
        const font_current = ImGui.GetFont();
        if (ImGui.BeginCombo(label, font_current.GetDebugName())) {
            ImGui.Selectable(font_current.GetDebugName());
            // TODO
            // for (let n = 0; n < io.Fonts->Fonts.Size; n++)
            // {
            //     ImFont* font = io.Fonts->Fonts[n];
            //     ImGui.PushID((void*)font);
            //     if (ImGui.Selectable(font->GetDebugName(), font == font_current))
            //         io.FontDefault = font;
            //     ImGui.PopID();
            // }
            ImGui.EndCombo();
        }
        ImGui.SameLine();
        HelpMarker("- Load additional fonts with io.Fonts->AddFontFromFileTTF().\n" +
            "- The font atlas is built when calling io.Fonts->GetTexDataAsXXXX() or io.Fonts->Build().\n" +
            "- Read FAQ and documentation in misc/fonts for more details.\n" +
            "- If you need to add/remove fonts at runtime (e.g. for DPI change), do it before calling NewFrame().");
    }
    exports.ShowFontSelector = ShowFontSelector;
    function ShowStyleEditor(ref = null) {
        // You can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it compares to an internally stored reference)
        const style = ImGui.GetStyle();
        /* static */ const ref_saved_style = STATIC("ref_saved_style", new imgui_23.ImGuiStyle());
        // Default to using internal storage as reference
        /* static */ const init = STATIC("init", true);
        if (init.value && ref === null)
            ref_saved_style.value.Copy(style);
        init.value = false;
        if (ref === null)
            ref = ref_saved_style.value;
        ImGui.PushItemWidth(ImGui.GetWindowWidth() * 0.50);
        if ( /*ImGui.*/ShowStyleSelector("Colors##Selector"))
            ref_saved_style.value.Copy(style);
        /*ImGui.*/ ShowFontSelector("Fonts##Selector");
        // Simplified Settings
        if (ImGui.SliderFloat("FrameRounding", (value = style.FrameRounding) => style.FrameRounding = value, 0.0, 12.0, "%.0f"))
            style.GrabRounding = style.FrameRounding; // Make GrabRounding always the same value as FrameRounding
        {
            let window_border = (style.WindowBorderSize > 0.0);
            if (ImGui.Checkbox("WindowBorder", (value = window_border) => window_border = value))
                style.WindowBorderSize = window_border ? 1.0 : 0.0;
        }
        ImGui.SameLine();
        {
            let frame_border = (style.FrameBorderSize > 0.0);
            if (ImGui.Checkbox("FrameBorder", (value = frame_border) => frame_border = value))
                style.FrameBorderSize = frame_border ? 1.0 : 0.0;
        }
        ImGui.SameLine();
        {
            let popup_border = (style.PopupBorderSize > 0.0);
            if (ImGui.Checkbox("PopupBorder", (value = popup_border) => popup_border = value))
                style.PopupBorderSize = popup_border ? 1.0 : 0.0;
        }
        // Save/Revert button
        if (ImGui.Button("Save Ref"))
            ref.Copy(ref_saved_style.value.Copy(style));
        ImGui.SameLine();
        if (ImGui.Button("Revert Ref"))
            style.Copy(ref);
        ImGui.SameLine();
        HelpMarker("Save/Revert in local non-persistent storage. Default Colors definition are not affected. Use \"Export Colors\" below to save them somewhere.");
        ImGui.Separator();
        if (ImGui.BeginTabBar("##tabs", imgui_16.ImGuiTabBarFlags.None)) {
            if (ImGui.BeginTabItem("Sizes")) {
                ImGui.Text("Main");
                ImGui.SliderFloat2("WindowPadding", style.WindowPadding, 0.0, 20.0, "%.0f");
                ImGui.SliderFloat2("FramePadding", style.FramePadding, 0.0, 20.0, "%.0f");
                ImGui.SliderFloat2("ItemSpacing", style.ItemSpacing, 0.0, 20.0, "%.0f");
                ImGui.SliderFloat2("ItemInnerSpacing", style.ItemInnerSpacing, 0.0, 20.0, "%.0f");
                ImGui.SliderFloat2("TouchExtraPadding", style.TouchExtraPadding, 0.0, 10.0, "%.0f");
                ImGui.SliderFloat("IndentSpacing", (value = style.IndentSpacing) => style.IndentSpacing = value, 0.0, 30.0, "%.0f");
                ImGui.SliderFloat("ScrollbarSize", (value = style.ScrollbarSize) => style.ScrollbarSize = value, 1.0, 20.0, "%.0f");
                ImGui.SliderFloat("GrabMinSize", (value = style.GrabMinSize) => style.GrabMinSize = value, 1.0, 20.0, "%.0f");
                ImGui.Text("Borders");
                ImGui.SliderFloat("WindowBorderSize", (value = style.WindowBorderSize) => style.WindowBorderSize = value, 0.0, 1.0, "%.0f");
                ImGui.SliderFloat("ChildBorderSize", (value = style.ChildBorderSize) => style.ChildBorderSize = value, 0.0, 1.0, "%.0f");
                ImGui.SliderFloat("PopupBorderSize", (value = style.PopupBorderSize) => style.PopupBorderSize = value, 0.0, 1.0, "%.0f");
                ImGui.SliderFloat("FrameBorderSize", (value = style.FrameBorderSize) => style.FrameBorderSize = value, 0.0, 1.0, "%.0f");
                ImGui.SliderFloat("TabBorderSize", (value = style.TabBorderSize) => style.TabBorderSize = value, 0.0, 1.0, "%.0f");
                ImGui.Text("Rounding");
                ImGui.SliderFloat("WindowRounding", (value = style.WindowRounding) => style.WindowRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("ChildRounding", (value = style.ChildRounding) => style.ChildRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("FrameRounding", (value = style.FrameRounding) => style.FrameRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("PopupRounding", (value = style.PopupRounding) => style.PopupRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("ScrollbarRounding", (value = style.ScrollbarRounding) => style.ScrollbarRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("GrabRounding", (value = style.GrabRounding) => style.GrabRounding = value, 0.0, 12.0, "%.0f");
                ImGui.SliderFloat("TabRounding", (value = style.TabRounding) => style.TabRounding = value, 0.0, 12.0, "%.0f");
                ImGui.Text("Alignment");
                ImGui.SliderFloat2("WindowTitleAlign", style.WindowTitleAlign, 0.0, 1.0, "%.2f");
                // ImGui.Combo("WindowMenuButtonPosition", (int*)&style.WindowMenuButtonPosition, "Left\0Right\0");
                ImGui.SliderFloat2("ButtonTextAlign", style.ButtonTextAlign, 0.0, 1.0, "%.2f");
                ImGui.SameLine();
                HelpMarker("Alignment applies when a button is larger than its text content.");
                // ImGui.SliderFloat2("SelectableTextAlign", (float*)&style.SelectableTextAlign, 0.0f, 1.0f, "%.2f"); ImGui.SameLine(); HelpMarker("Alignment applies when a selectable is larger than its text content.");
                ImGui.Text("Safe Area Padding");
                ImGui.SameLine();
                HelpMarker("Adjust if you cannot see the edges of your screen (e.g. on a TV where scaling has not been configured).");
                ImGui.SliderFloat2("DisplaySafeAreaPadding", style.DisplaySafeAreaPadding, 0.0, 30.0, "%.0f");
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("Colors")) {
                /* static */ const output_dest = STATIC("output_dest", 0);
                /* static */ const output_only_modified = STATIC("output_only_modified", true);
                if (ImGui.Button("Export Unsaved")) {
                    if (output_dest.value === 0)
                        ImGui.LogToClipboard();
                    else
                        ImGui.LogToTTY();
                    ImGui.LogText("ImVec4* colors = ImGui.GetStyle().Colors;" + IM_NEWLINE);
                    for (let i = 0; i < imgui_5.ImGuiCol.COUNT; i++) {
                        const col = style.Colors[i];
                        const name = ImGui.GetStyleColorName(i);
                        if (!output_only_modified.value || !col.Equals(ref.Colors[i]))
                            ImGui.LogText(`colors[ImGuiCol.${name}] = new ImVec4(${col.x.toFixed(2)}, ${col.y.toFixed(2)}, ${col.z.toFixed(2)}, ${col.w.toFixed(2)});` + IM_NEWLINE);
                    }
                    ImGui.LogFinish();
                }
                ImGui.SameLine();
                ImGui.SetNextItemWidth(120);
                ImGui.Combo("##output_type", (value = output_dest.value) => output_dest.value = value, "To Clipboard\0To TTY\0");
                ImGui.SameLine();
                ImGui.Checkbox("Only Modified Colors", (value = output_only_modified.value) => output_only_modified.value = value);
                ImGui.Text("Tip: Left-click on colored square to open color picker,\nRight-click to open edit options menu.");
                /* static */ const filter = STATIC("filter#2223", new imgui_24.ImGuiTextFilter());
                filter.value.Draw("Filter colors", 200);
                /* static */ const alpha_flags = STATIC("alpha_flags", 0);
                ImGui.RadioButton("Opaque", (value = alpha_flags.value) => alpha_flags.value = value, 0);
                ImGui.SameLine();
                ImGui.RadioButton("Alpha", (value = alpha_flags.value) => alpha_flags.value = value, imgui_6.ImGuiColorEditFlags.AlphaPreview);
                ImGui.SameLine();
                ImGui.RadioButton("Both", (value = alpha_flags.value) => alpha_flags.value = value, imgui_6.ImGuiColorEditFlags.AlphaPreviewHalf);
                ImGui.BeginChild("#colors", new imgui_19.ImVec2(0, 300), true, imgui_15.ImGuiWindowFlags.AlwaysVerticalScrollbar | imgui_15.ImGuiWindowFlags.AlwaysHorizontalScrollbar | imgui_15.ImGuiWindowFlags.NavFlattened);
                ImGui.PushItemWidth(-160);
                for (let i = 0; i < imgui_5.ImGuiCol.COUNT; i++) {
                    const name = ImGui.GetStyleColorName(i);
                    if (!filter.value.PassFilter(name))
                        continue;
                    ImGui.PushID(i);
                    ImGui.ColorEdit4("##color", style.Colors[i], imgui_6.ImGuiColorEditFlags.AlphaBar | alpha_flags.value);
                    if (!style.Colors[i].Equals(ref.Colors[i])) {
                        // Tips: in a real user application, you may want to merge and use an icon font into the main font, so instead of "Save"/"Revert" you'd use icons.
                        // Read the FAQ and misc/fonts/README.txt about using icon fonts. It's really easy and super convenient!
                        ImGui.SameLine(0.0, style.ItemInnerSpacing.x);
                        if (ImGui.Button("Save"))
                            ref.Colors[i].Copy(style.Colors[i]);
                        ImGui.SameLine(0.0, style.ItemInnerSpacing.x);
                        if (ImGui.Button("Revert"))
                            style.Colors[i].Copy(ref.Colors[i]);
                    }
                    ImGui.SameLine(0.0, style.ItemInnerSpacing.x);
                    ImGui.TextUnformatted(name);
                    ImGui.PopID();
                }
                ImGui.PopItemWidth();
                ImGui.EndChild();
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("Fonts")) {
                const io = ImGui.GetIO();
                const atlas = io.Fonts;
                HelpMarker("Read FAQ and misc/fonts/README.txt for details on font loading.");
                ImGui.PushItemWidth(120);
                for (let i = 0; i < atlas.Fonts.Size; i++) {
                    const font = atlas.Fonts[i];
                    ImGui.PushID(font.native.$$.ptr);
                    const font_details_opened = ImGui.TreeNode(font.native.$$.ptr, `Font ${i}: \'${font.ConfigData.length > 0 ? font.ConfigData[0].Name : ""}\', ${font.FontSize.toFixed(2)} px, ${font.Glyphs.Size} glyphs, ${font.ConfigDataCount} file(s)`);
                    ImGui.SameLine();
                    if (ImGui.SmallButton("Set as default"))
                        io.FontDefault = font;
                    if (font_details_opened) {
                        ImGui.PushFont(font);
                        ImGui.Text("The quick brown fox jumps over the lazy dog");
                        ImGui.PopFont();
                        ImGui.DragFloat("Font scale", (value = font.Scale) => font.Scale = value, 0.005, 0.3, 2.0, "%.1f"); // Scale only this font
                        ImGui.SameLine();
                        HelpMarker("Note than the default embedded font is NOT meant to be scaled.\n\nFont are currently rendered into bitmaps at a given size at the time of building the atlas. You may oversample them to get some flexibility with scaling. You can also render at multiple sizes and select which one to use at runtime.\n\n(Glimmer of hope: the atlas system should hopefully be rewritten in the future to make scaling more natural and automatic.)");
                        ImGui.InputFloat("Font offset", (value = font.DisplayOffset.y) => font.DisplayOffset.y = value, 1, 1, "%.0f");
                        ImGui.Text(`Ascent: ${font.Ascent}, Descent: ${font.Descent}, Height: ${font.Ascent - font.Descent}`);
                        ImGui.Text(`Fallback character: '${String.fromCharCode(font.FallbackChar)}' (${font.FallbackChar})`);
                        const surface_sqrt = Math.sqrt(font.MetricsTotalSurface);
                        ImGui.Text(`Texture surface: ${font.MetricsTotalSurface} pixels (approx) ~ ${0 | surface_sqrt}x${0 | surface_sqrt}`);
                        for (let config_i = 0; config_i < font.ConfigDataCount; config_i++) {
                            const cfg = font.ConfigData[config_i];
                            ImGui.BulletText(`Input ${config_i}: \'${cfg.Name}\', Oversample: (${cfg.OversampleH},${cfg.OversampleH}), PixelSnapH: ${cfg.PixelSnapH}`);
                        }
                        if (ImGui.TreeNode("Glyphs", `Glyphs (${font.Glyphs.Size})`)) {
                            // Display all glyphs of the fonts in separate pages of 256 characters
                            for (let base = 0; base < 0x10000; base += 256) {
                                let count = 0;
                                for (let n = 0; n < 256; n++)
                                    count += font.FindGlyphNoFallback((base + n)) ? 1 : 0;
                                if (count > 0 && ImGui.TreeNode(base, `U+${format_number_hex(base, 4).toUpperCase()}..U+${(format_number_hex(base + 255, 4).toUpperCase())} (${count} ${count > 1 ? "glyphs" : "glyph"})`)) {
                                    const cell_size = font.FontSize * 1;
                                    const cell_spacing = style.ItemSpacing.y;
                                    const base_pos = ImGui.GetCursorScreenPos();
                                    const draw_list = ImGui.GetWindowDrawList();
                                    for (let n = 0; n < 256; n++) {
                                        const cell_p1 = new imgui_19.ImVec2(base_pos.x + (n % 16) * (cell_size + cell_spacing), base_pos.y + (0 | (n / 16)) * (cell_size + cell_spacing));
                                        const cell_p2 = new imgui_19.ImVec2(cell_p1.x + cell_size, cell_p1.y + cell_size);
                                        const glyph = font.FindGlyphNoFallback((base + n));
                                        draw_list.AddRect(cell_p1, cell_p2, glyph ? imgui_21.IM_COL32(255, 255, 255, 100) : imgui_21.IM_COL32(255, 255, 255, 50));
                                        if (glyph)
                                            font.RenderChar(draw_list, cell_size, cell_p1, ImGui.GetColorU32(imgui_5.ImGuiCol.Text), (base + n)); // We use ImFont.RenderChar as a shortcut because we don't have UTF-8 conversion functions available to generate a string.
                                        if (glyph && ImGui.IsWindowHovered() && ImGui.IsMouseHoveringRect(cell_p1, cell_p2)) {
                                            ImGui.BeginTooltip();
                                            ImGui.Text(`Codepoint: U+${format_number_hex(base + n, 4).toUpperCase()}`);
                                            ImGui.Separator();
                                            ImGui.Image(ImGui.GetIO().Fonts.TexID, new imgui_19.ImVec2(8 * (glyph.X1 - glyph.X0), 8 * (glyph.Y1 - glyph.Y0)), new imgui_19.ImVec2(glyph.U0, glyph.V0), new imgui_19.ImVec2(glyph.U1, glyph.V1), new imgui_22.ImColor(255, 255, 255, 255).toImVec4(), new imgui_22.ImColor(255, 255, 255, 128).toImVec4());
                                            ImGui.SameLine();
                                            ImGui.BeginGroup();
                                            ImGui.Text(`AdvanceX: ${glyph.AdvanceX.toFixed(1)}`);
                                            ImGui.Text(`Pos: (${glyph.X0.toFixed(2)},${glyph.Y0.toFixed(2)}).(${glyph.X1.toFixed(2)},${glyph.Y1.toFixed(2)})`);
                                            ImGui.Text(`UV: (${glyph.U0.toFixed(3)},${glyph.V0.toFixed(3)}).(${glyph.U1.toFixed(3)},${glyph.V1.toFixed(3)})`);
                                            ImGui.EndGroup();
                                            ImGui.EndTooltip();
                                        }
                                    }
                                    ImGui.Dummy(new imgui_19.ImVec2((cell_size + cell_spacing) * 16, (cell_size + cell_spacing) * 16));
                                    ImGui.TreePop();
                                }
                            }
                            ImGui.TreePop();
                        }
                        ImGui.TreePop();
                    }
                    ImGui.PopID();
                }
                if (ImGui.TreeNode("Atlas texture", `Atlas texture (${atlas.TexWidth}x${atlas.TexHeight} pixels)`)) {
                    const tint_col = new imgui_20.ImVec4(1.0, 1.0, 1.0, 1.0);
                    const border_col = new imgui_20.ImVec4(1.0, 1.0, 1.0, 0.5);
                    ImGui.Image(atlas.TexID, new imgui_19.ImVec2(atlas.TexWidth, atlas.TexHeight), new imgui_19.ImVec2(0, 0), new imgui_19.ImVec2(1, 1), tint_col, border_col);
                    ImGui.TreePop();
                }
                /* static */ const window_scale = STATIC("window_scale", 1.0);
                if (ImGui.DragFloat("this window scale", (value = window_scale.value) => window_scale.value = value, 0.005, 0.3, 2.0, "%.2f")) // scale only this window
                    ImGui.SetWindowFontScale(window_scale.value);
                ImGui.DragFloat("global scale", (value = ImGui.GetIO().FontGlobalScale) => io.FontGlobalScale = value, 0.005, 0.3, 2.0, "%.2f"); // scale everything
                ImGui.PopItemWidth();
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("Rendering")) {
                ImGui.Checkbox("Anti-aliased lines", (value = style.AntiAliasedLines) => style.AntiAliasedLines = value);
                ImGui.SameLine();
                HelpMarker("When disabling anti-aliasing lines, you'll probably want to disable borders in your style as well.");
                ImGui.Checkbox("Anti-aliased fill", (value = style.AntiAliasedFill) => style.AntiAliasedFill = value);
                ImGui.PushItemWidth(100);
                ImGui.DragFloat("Curve Tessellation Tolerance", (value = style.CurveTessellationTol) => style.CurveTessellationTol = value, 0.02, 0.10, Number.MAX_VALUE, "%.2f", 2.0);
                if (style.CurveTessellationTol < 0.10)
                    style.CurveTessellationTol = 0.10;
                ImGui.DragFloat("Global Alpha", (value = style.Alpha) => style.Alpha = value, 0.005, 0.20, 1.0, "%.2f"); // Not exposing zero here so user doesn't "lose" the UI (zero alpha clips all widgets). But application code could have a toggle to switch between zero and non-zero.
                ImGui.PopItemWidth();
                ImGui.EndTabItem();
            }
            ImGui.EndTabBar();
        }
        ImGui.PopItemWidth();
    }
    exports.ShowStyleEditor = ShowStyleEditor;
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Main Menu Bar / ShowExampleAppMainMenuBar()
    //-----------------------------------------------------------------------------
    // Demonstrate creating a "main" fullscreen menu bar and populating it.
    // Note the difference between BeginMainMenuBar() and BeginMenuBar():
    // - BeginMenuBar() = menu-bar inside current window we Begin()-ed into (the window needs the ImGuiWindowFlags_MenuBar flag)
    // - BeginMainMenuBar() = helper to create menu-bar-sized window at the top of the main viewport + call BeginMenuBar() into it.
    function ShowExampleAppMainMenuBar() {
        if (ImGui.BeginMainMenuBar()) {
            if (ImGui.BeginMenu("File")) {
                ShowExampleMenuFile();
                ImGui.EndMenu();
            }
            if (ImGui.BeginMenu("Edit")) {
                if (ImGui.MenuItem("Undo", "CTRL+Z")) { }
                if (ImGui.MenuItem("Redo", "CTRL+Y", false, false)) { } // Disabled item
                ImGui.Separator();
                if (ImGui.MenuItem("Cut", "CTRL+X")) { }
                if (ImGui.MenuItem("Copy", "CTRL+C")) { }
                if (ImGui.MenuItem("Paste", "CTRL+V")) { }
                ImGui.EndMenu();
            }
            ImGui.EndMainMenuBar();
        }
    }
    // Note that shortcuts are currently provided for display only (future version will add flags to BeginMenu to process shortcuts)
    function ShowExampleMenuFile() {
        ImGui.MenuItem("(dummy menu)", null, false, false);
        if (ImGui.MenuItem("New")) { }
        if (ImGui.MenuItem("Open", "Ctrl+O")) { }
        if (ImGui.BeginMenu("Open Recent")) {
            ImGui.MenuItem("fish_hat.c");
            ImGui.MenuItem("fish_hat.inl");
            ImGui.MenuItem("fish_hat.h");
            if (ImGui.BeginMenu("More..")) {
                ImGui.MenuItem("Hello");
                ImGui.MenuItem("Sailor");
                if (ImGui.BeginMenu("Recurse..")) {
                    ShowExampleMenuFile();
                    ImGui.EndMenu();
                }
                ImGui.EndMenu();
            }
            ImGui.EndMenu();
        }
        if (ImGui.MenuItem("Save", "Ctrl+S")) { }
        if (ImGui.MenuItem("Save As..")) { }
        ImGui.Separator();
        if (ImGui.BeginMenu("Options")) {
            /* static */ const enabled = STATIC("enabled", true);
            ImGui.MenuItem("Enabled", "", (value = enabled.value) => enabled.value = value);
            ImGui.BeginChild("child", new imgui_19.ImVec2(0, 60), true);
            for (let i = 0; i < 10; i++)
                ImGui.Text(`Scrolling Text ${i}`);
            ImGui.EndChild();
            /* static */ const f = STATIC("f#2408", 0.5);
            /* static */ const n = STATIC("n", 0);
            /* static */ const b = STATIC("b#2599", true);
            ImGui.SliderFloat("Value", (value = f.value) => f.value = value, 0.0, 1.0);
            ImGui.InputFloat("Input", (value = f.value) => f.value = value, 0.1);
            ImGui.Combo("Combo", (value = n.value) => n.value = value, "Yes\0No\0Maybe\0\0");
            ImGui.Checkbox("Check", (value = b.value) => b.value = value);
            ImGui.EndMenu();
        }
        if (ImGui.BeginMenu("Colors")) {
            const sz = ImGui.GetTextLineHeight();
            for (let i = 0; i < imgui_5.ImGuiCol.COUNT; i++) {
                const name = ImGui.GetStyleColorName(i);
                const p = ImGui.GetCursorScreenPos();
                ImGui.GetWindowDrawList().AddRectFilled(p, new imgui_19.ImVec2(p.x + sz, p.y + sz), ImGui.GetColorU32(i));
                ImGui.Dummy(new imgui_19.ImVec2(sz, sz));
                ImGui.SameLine();
                ImGui.MenuItem(name);
            }
            ImGui.EndMenu();
        }
        if (ImGui.BeginMenu("Disabled", false)) // Disabled
         {
            imgui_2.IM_ASSERT(0);
        }
        if (ImGui.MenuItem("Checked", null, true)) { }
        if (ImGui.MenuItem("Quit", "Alt+F4")) {
            done = true;
        }
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Debug Console / ShowExampleAppConsole()
    //-----------------------------------------------------------------------------
    // Demonstrate creating a simple console window, with scrolling, filtering, completion and history.
    // For the console example, here we are using a more C++ like approach of declaring a class to hold the data and the functions.
    class ExampleAppConsole {
        constructor() {
            // char                  InputBuf[256];
            this.InputBuf = new imgui_4.ImStringBuffer(256, "");
            // ImVector<char*>       Items;
            this.Items = new imgui_18.ImVector();
            // ImVector<const char*> Commands;
            this.Commands = new imgui_18.ImVector();
            // ImVector<char*>       History;
            this.History = new imgui_18.ImVector();
            // int                   HistoryPos;    // -1: new line, 0..History.Size-1 browsing history.
            this.HistoryPos = -1;
            // ImGuiTextFilter       Filter;
            this.Filter = new imgui_24.ImGuiTextFilter();
            // bool                  AutoScroll;
            this.AutoScroll = true;
            // bool                  ScrollToBottom;
            this.ScrollToBottom = true;
            this.ClearLog();
            // memset(InputBuf, 0, sizeof(InputBuf));
            this.InputBuf.buffer = "";
            this.HistoryPos = -1;
            this.Commands.push_back("HELP");
            this.Commands.push_back("HISTORY");
            this.Commands.push_back("CLEAR");
            this.Commands.push_back("CLASSIFY"); // "classify" is only here to provide an example of "C"+[tab] completing to "CL" and displaying matches.
            this.AutoScroll = true;
            this.ScrollToBottom = true;
            this.AddLog("Welcome to Dear ImGui!");
        }
        delete() { }
        // Portable helpers
        // static int   Stricmp(const char* str1, const char* str2)         { int d; while ((d = toupper(*str2) - toupper(*str1)) === 0 && *str1) { str1++; str2++; } return d; }
        // static int   Strnicmp(const char* str1, const char* str2, int n) { int d = 0; while (n > 0 && (d = toupper(*str2) - toupper(*str1)) === 0 && *str1) { str1++; str2++; n--; } return d; }
        // static char* Strdup(const char *str)                             { size_t len = strlen(str) + 1; void* buf = malloc(len); IM_ASSERT(buf); return (char*)memcpy(buf, (const void*)str, len); }
        // static void  Strtrim(char* str)                                  { char* str_end = str + strlen(str); while (str_end > str && str_end[-1] == ' ') str_end--; *str_end = 0; }
        ClearLog() {
            // for (let i = 0; i < Items.Size; i++)
            //     free(Items[i]);
            this.Items.clear();
            this.ScrollToBottom = true;
        }
        // void    AddLog(const char* fmt, ...) IM_FMTARGS(2)
        AddLog(fmt) {
            // FIXME-OPT
            // char buf[1024];
            // va_list args;
            // va_start(args, fmt);
            // vsnprintf(buf, IM_ARRAYSIZE(buf), fmt, args);
            // buf[IM_ARRAYSIZE(buf)-1] = 0;
            // va_end(args);
            // Items.push_back(Strdup(buf));
            this.Items.push_back(fmt);
            if (this.AutoScroll)
                this.ScrollToBottom = true;
        }
        // void    Draw(const char* title, bool* p_open)
        Draw(title, p_open) {
            ImGui.SetNextWindowSize(new imgui_19.ImVec2(520, 600), imgui_7.ImGuiCond.FirstUseEver);
            if (!ImGui.Begin(title, p_open)) {
                ImGui.End();
                return;
            }
            // As a specific feature guaranteed by the library, after calling Begin() the last Item represent the title bar. So e.g. IsItemHovered() will return true when hovering the title bar.
            // Here we create a context menu only available from the title bar.
            if (ImGui.BeginPopupContextItem()) {
                if (ImGui.MenuItem("Close Console"))
                    // *p_open = false;
                    p_open(false);
                ImGui.EndPopup();
            }
            ImGui.TextWrapped("This example implements a console with basic coloring, completion and history. A more elaborate implementation may want to store entries along with extra data such as timestamp, emitter, etc.");
            ImGui.TextWrapped("Enter 'HELP' for help, press TAB to use text completion.");
            // TODO: display items starting from the bottom
            if (ImGui.SmallButton("Add Dummy Text")) {
                this.AddLog(`${this.Items.Size} some text`);
                this.AddLog("some more text");
                this.AddLog("display very important message here!");
            }
            ImGui.SameLine();
            if (ImGui.SmallButton("Add Dummy Error")) {
                this.AddLog("[error] something went wrong");
            }
            ImGui.SameLine();
            if (ImGui.SmallButton("Clear")) {
                this.ClearLog();
            }
            ImGui.SameLine();
            const copy_to_clipboard = ImGui.SmallButton("Copy");
            ImGui.SameLine();
            if (ImGui.SmallButton("Scroll to bottom"))
                this.ScrollToBottom = true;
            // /* static */ const t: Static<number> = getStatic("t", 0.0); if (ImGui.GetTime() - t > 0.02) { t = ImGui.GetTime(); this.AddLog(`Spam ${t}`); }
            ImGui.Separator();
            // Options menu
            if (ImGui.BeginPopup("Options")) {
                if (ImGui.Checkbox("Auto-scroll", (value = this.AutoScroll) => this.AutoScroll = value))
                    if (this.AutoScroll)
                        this.ScrollToBottom = true;
                ImGui.EndPopup();
            }
            // Options, Filter
            if (ImGui.Button("Options"))
                ImGui.OpenPopup("Options");
            ImGui.SameLine();
            this.Filter.Draw("Filter (\"incl,-excl\") (\"error\")", 180);
            ImGui.Separator();
            const footer_height_to_reserve = ImGui.GetStyle().ItemSpacing.y + ImGui.GetFrameHeightWithSpacing(); // 1 separator, 1 input text
            ImGui.BeginChild("ScrollingRegion", new imgui_19.ImVec2(0, -footer_height_to_reserve), false, imgui_15.ImGuiWindowFlags.HorizontalScrollbar); // Leave room for 1 separator + 1 InputText
            if (ImGui.BeginPopupContextWindow()) {
                if (ImGui.Selectable("Clear"))
                    this.ClearLog();
                ImGui.EndPopup();
            }
            // Display every line as a separate entry so we can change their color or add custom widgets. If you only want raw text you can use ImGui.TextUnformatted(log.begin(), log.end());
            // NB- if you have thousands of entries this approach may be too inefficient and may require user-side clipping to only process visible items.
            // You can seek and display only the lines that are visible using the ImGuiListClipper helper, if your elements are evenly spaced and you have cheap random access to the elements.
            // To use the clipper we could replace the 'for (let i = 0; i < Items.Size; i++)' loop with:
            //     ImGuiListClipper clipper(Items.Size);
            //     while (clipper.Step())
            //         for (let i = clipper.DisplayStart; i < clipper.DisplayEnd; i++)
            // However, note that you can not use this code as is if a filter is active because it breaks the 'cheap random-access' property. We would need random-access on the post-filtered list.
            // A typical application wanting coarse clipping and filtering may want to pre-compute an array of indices that passed the filtering test, recomputing this array when user changes the filter,
            // and appending newly elements as they are inserted. This is left as a task to the user until we can manage to improve this example code!
            // If your items are of variable size you may want to implement code similar to what ImGuiListClipper does. Or split your data into fixed height items to allow random-seeking into your list.
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ItemSpacing, new imgui_19.ImVec2(4, 1)); // Tighten spacing
            if (copy_to_clipboard)
                ImGui.LogToClipboard();
            for (let i = 0; i < this.Items.Size; i++) {
                // const char* item = Items[i];
                const item = this.Items.Data[i];
                if (!this.Filter.PassFilter(item))
                    continue;
                // Normally you would store more information in your item (e.g. make Items[] an array of structure, store color/type etc.)
                let pop_color = false;
                // if (strstr(item, "[error]"))            { ImGui.PushStyleColor(ImGuiCol_Text, new ImVec4(1.0f, 0.4f, 0.4f, 1.0f)); pop_color = true; }
                if (/\[error\]/.test(item)) {
                    ImGui.PushStyleColor(imgui_5.ImGuiCol.Text, new imgui_20.ImVec4(1.0, 0.4, 0.4, 1.0));
                    pop_color = true;
                }
                // else if (strncmp(item, "# ", 2) == 0)   { ImGui.PushStyleColor(ImGuiCol_Text, new ImVec4(1.0f, 0.8f, 0.6f, 1.0f)); pop_color = true; }
                else if (/^# /.test(item)) {
                    ImGui.PushStyleColor(imgui_5.ImGuiCol.Text, new imgui_20.ImVec4(1.0, 0.8, 0.6, 1.0));
                    pop_color = true;
                }
                ImGui.TextUnformatted(item);
                if (pop_color)
                    ImGui.PopStyleColor();
            }
            if (copy_to_clipboard)
                ImGui.LogFinish();
            if (this.ScrollToBottom)
                ImGui.SetScrollHereY(1.0);
            this.ScrollToBottom = false;
            ImGui.PopStyleVar();
            ImGui.EndChild();
            ImGui.Separator();
            // Command-line
            let reclaim_focus = false;
            if (ImGui.InputText("Input", this.InputBuf, imgui_3.IM_ARRAYSIZE(this.InputBuf), imgui_10.ImGuiInputTextFlags.EnterReturnsTrue | imgui_10.ImGuiInputTextFlags.CallbackCompletion | imgui_10.ImGuiInputTextFlags.CallbackHistory, ExampleAppConsole.TextEditCallbackStub, this)) {
                // char* s = InputBuf;
                // Strtrim(s);
                // if (s[0])
                //     ExecCommand(s);
                // strcpy(s, "");
                this.InputBuf.buffer = this.InputBuf.buffer.trim();
                if (this.InputBuf.buffer.length > 0)
                    this.ExecCommand(this.InputBuf.buffer);
                this.InputBuf.buffer = "";
                reclaim_focus = true;
            }
            // Auto-focus on window apparition
            ImGui.SetItemDefaultFocus();
            if (reclaim_focus)
                ImGui.SetKeyboardFocusHere(-1); // Auto focus previous widget
            ImGui.End();
        }
        // void    ExecCommand(const char* command_line)
        ExecCommand(command_line) {
            this.AddLog(`# ${command_line}\n`);
            // Insert into history. First find match and delete it so it can be pushed to the back. This isn't trying to be smart or optimal.
            this.HistoryPos = -1;
            for (let i = this.History.Size - 1; i >= 0; i--)
                // if (Stricmp(History[i], command_line) === 0)
                if (this.History.Data[i].toLowerCase() === command_line.toLowerCase()) {
                    // free(History[i]);
                    // History.erase(History.begin() + i);
                    break;
                }
            // History.push_back(Strdup(command_line));
            this.History.push_back(command_line);
            // Process command
            // if (Stricmp(command_line, "CLEAR") === 0)
            if (command_line.toUpperCase() === "CLEAR") {
                this.ClearLog();
            }
            // else if (Stricmp(command_line, "HELP") === 0)
            else if (command_line.toUpperCase() === "HELP") {
                this.AddLog("Commands:");
                for (let i = 0; i < this.Commands.Size; i++)
                    this.AddLog(`- ${this.Commands.Data[i]}`);
            }
            // else if (Stricmp(command_line, "HISTORY") === 0)
            else if (command_line.toUpperCase() === "HISTORY") {
                const first = this.History.Size - 10;
                for (let i = first > 0 ? first : 0; i < this.History.Size; i++)
                    this.AddLog(`${i}: ${this.History.Data[i]}\n`);
            }
            else {
                this.AddLog(`Unknown command: '${command_line}'\n`);
            }
            // On commad input, we scroll to bottom even if AutoScroll==false
            this.ScrollToBottom = true;
        }
        // static const TextEditCallbackStub: number(ImGuiInputTextCallbackData* data) // In C++11 you are better off using lambdas for this sort of forwarding callbacks
        static TextEditCallbackStub(data) {
            // ExampleAppConsole* console = (ExampleAppConsole*)data->UserData;
            const _console = data.UserData;
            return _console.TextEditCallback(data);
        }
        // int     TextEditCallback(ImGuiInputTextCallbackData* data)
        TextEditCallback(data) {
            //AddLog("cursor: %d, selection: %d-%d", data->CursorPos, data->SelectionStart, data->SelectionEnd);
            switch (data.EventFlag) {
                case imgui_10.ImGuiInputTextFlags.CallbackCompletion:
                    {
                        // Example of TEXT COMPLETION
                        // Locate beginning of current word
                        // const char* word_end = data->Buf + data->CursorPos;
                        // const char* word_start = word_end;
                        // while (word_start > data->Buf)
                        // {
                        //     const char c = word_start[-1];
                        //     if (c === ' ' || c === '\t' || c === ',' || c === ';')
                        //         break;
                        //     word_start--;
                        // }
                        // // Build a list of candidates
                        // ImVector<const char*> candidates;
                        // for (let i = 0; i < Commands.Size; i++)
                        //     if (Strnicmp(Commands[i], word_start, (int)(word_end-word_start)) === 0)
                        //         candidates.push_back(Commands[i]);
                        // if (candidates.Size === 0)
                        // {
                        //     // No match
                        //     AddLog("No match for \"%.*s\"!\n", (int)(word_end-word_start), word_start);
                        // }
                        // else if (candidates.Size === 1)
                        // {
                        //     // Single match. Delete the beginning of the word and replace it entirely so we've got nice casing
                        //     data->DeleteChars((int)(word_start-data->Buf), (int)(word_end-word_start));
                        //     data->InsertChars(data->CursorPos, candidates[0]);
                        //     data->InsertChars(data->CursorPos, " ");
                        // }
                        // else
                        // {
                        //     // Multiple matches. Complete as much as we can, so inputing "C" will complete to "CL" and display "CLEAR" and "CLASSIFY"
                        //     int match_len = (int)(word_end - word_start);
                        //     for (;;)
                        //     {
                        //         int c = 0;
                        //         bool all_candidates_matches = true;
                        //         for (let i = 0; i < candidates.Size && all_candidates_matches; i++)
                        //             if (i === 0)
                        //                 c = toupper(candidates[i][match_len]);
                        //             else if (c === 0 || c !== toupper(candidates[i][match_len]))
                        //                 all_candidates_matches = false;
                        //         if (!all_candidates_matches)
                        //             break;
                        //         match_len++;
                        //     }
                        //     if (match_len > 0)
                        //     {
                        //         data->DeleteChars((int)(word_start - data->Buf), (int)(word_end-word_start));
                        //         data->InsertChars(data->CursorPos, candidates[0], candidates[0] + match_len);
                        //     }
                        //     // List matches
                        //     AddLog("Possible matches:\n");
                        //     for (let i = 0; i < candidates.Size; i++)
                        //         AddLog("- %s\n", candidates[i]);
                        // }
                        break;
                    }
                case imgui_10.ImGuiInputTextFlags.CallbackHistory:
                    {
                        // Example of HISTORY
                        // const int prev_history_pos = HistoryPos;
                        // if (data->EventKey === ImGuiKey_UpArrow)
                        // {
                        //     if (HistoryPos === -1)
                        //         HistoryPos = History.Size - 1;
                        //     else if (HistoryPos > 0)
                        //         HistoryPos--;
                        // }
                        // else if (data->EventKey === ImGuiKey_DownArrow)
                        // {
                        //     if (HistoryPos !== -1)
                        //         if (++HistoryPos >= History.Size)
                        //             HistoryPos = -1;
                        // }
                        // // A better implementation would preserve the data on the current input line along with cursor position.
                        // if (prev_history_pos !== HistoryPos)
                        // {
                        //     const char* history_str = (HistoryPos >= 0) ? History[HistoryPos] : "";
                        //     data->DeleteChars(0, data->BufTextLen);
                        //     data->InsertChars(0, history_str);
                        // }
                    }
            }
            return 0;
        }
    }
    function ShowExampleAppConsole(p_open) {
        /* static */ const console = STATIC("console", new ExampleAppConsole());
        console.value.Draw("Example: Console", p_open);
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Debug Log / ShowExampleAppLog()
    //-----------------------------------------------------------------------------
    // Usage:
    //  static ExampleAppLog my_log;
    //  my_log.AddLog("Hello %d world\n", 123);
    //  my_log.Draw("title");
    class ExampleAppLog {
        constructor() {
            // ImGuiTextBuffer     Buf;
            this.Buf = new imgui_25.ImGuiTextBuffer();
            // ImGuiTextFilter     Filter;
            this.Filter = new imgui_24.ImGuiTextFilter();
            // ImVector<int>       LineOffsets;        // Index to lines offset. We maintain this with AddLog() calls, allowing us to have a random access on lines
            this.LineOffsets = new imgui_18.ImVector();
            // bool                AutoScroll;
            this.AutoScroll = true;
            // bool                ScrollToBottom;
            this.ScrollToBottom = false;
        }
        // void    Clear()     { Buf.clear(); LineOffsets.clear(); }
        Clear() {
            this.Buf.clear();
            this.LineOffsets.clear();
            this.LineOffsets.push_back(0);
        }
        // void    AddLog(const char* fmt, ...) IM_FMTARGS(2)
        AddLog(fmt) {
            let old_size = this.Buf.size();
            // va_list args;
            // va_start(args, fmt);
            // Buf.appendfv(fmt, args);
            // va_end(args);
            this.Buf.append(fmt);
            for (const new_size = this.Buf.size(); old_size < new_size; old_size++)
                if (this.Buf.Buf[old_size] === "\n")
                    this.LineOffsets.push_back(old_size + 1);
            if (this.AutoScroll)
                this.ScrollToBottom = true;
        }
        Draw(title, p_open) {
            ImGui.SetNextWindowSize(new imgui_19.ImVec2(500, 400), imgui_7.ImGuiCond.FirstUseEver);
            if (!ImGui.Begin(title, p_open)) {
                ImGui.End();
                return;
            }
            // Options menu
            if (ImGui.BeginPopup("Options")) {
                if (ImGui.Checkbox("Auto-scroll", (value = this.AutoScroll) => this.AutoScroll = value))
                    if (this.AutoScroll)
                        this.ScrollToBottom = true;
                ImGui.EndPopup();
            }
            // Main window
            if (ImGui.Button("Options"))
                ImGui.OpenPopup("Options");
            ImGui.SameLine();
            const clear = ImGui.Button("Clear");
            ImGui.SameLine();
            const copy = ImGui.Button("Copy");
            ImGui.SameLine();
            this.Filter.Draw("Filter", -100.0);
            ImGui.Separator();
            ImGui.BeginChild("scrolling", new imgui_19.ImVec2(0, 0), false, imgui_15.ImGuiWindowFlags.HorizontalScrollbar);
            if (clear)
                this.Clear();
            if (copy)
                ImGui.LogToClipboard();
            ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ItemSpacing, new imgui_19.ImVec2(0, 0));
            // const char* buf = Buf.begin();
            // const char* buf_end = Buf.end();
            if (this.Filter.IsActive()) {
                // In this example we don't use the clipper when Filter is enabled.
                // This is because we don't have a random access on the result on our filter.
                // A real application processing logs with ten of thousands of entries may want to store the result of search/filter.
                // especially if the filtering function is not trivial (e.g. reg-exp).
                // for (int line_no = 0; line_no < LineOffsets.Size; line_no++)
                // {
                //     const char* line_start = buf + LineOffsets[line_no];
                //     const char* line_end = (line_no + 1 < LineOffsets.Size) ? (buf + LineOffsets[line_no + 1] - 1) : buf_end;
                //     if (Filter.PassFilter(line_start, line_end))
                //         ImGui.TextUnformatted(line_start, line_end);
                // }
            }
            else {
                // The simplest and easy way to display the entire buffer:
                //   ImGui.TextUnformatted(buf_begin, buf_end);
                // And it'll just work. TextUnformatted() has specialization for large blob of text and will fast-forward to skip non-visible lines.
                // Here we instead demonstrate using the clipper to only process lines that are within the visible area.
                // If you have tens of thousands of items and their processing cost is non-negligible, coarse clipping them on your side is recommended.
                // Using ImGuiListClipper requires A) random access into your data, and B) items all being the  same height,
                // both of which we can handle since we an array pointing to the beginning of each line of text.
                // When using the filter (in the block of code above) we don't have random access into the data to display anymore, which is why we don't use the clipper.
                // Storing or skimming through the search result would make it possible (and would be recommended if you want to search through tens of thousands of entries)
                // ImGuiListClipper clipper;
                // clipper.Begin(LineOffsets.Size);
                // while (clipper.Step())
                // {
                //     for (int line_no = clipper.DisplayStart; line_no < clipper.DisplayEnd; line_no++)
                //     {
                //         const char* line_start = buf + LineOffsets[line_no];
                //         const char* line_end = (line_no + 1 < LineOffsets.Size) ? (buf + LineOffsets[line_no + 1] - 1) : buf_end;
                //         ImGui.TextUnformatted(line_start, line_end);
                //     }
                // }
                // clipper.End();
            }
            ImGui.PopStyleVar();
            if (this.ScrollToBottom)
                ImGui.SetScrollHereY(1.0);
            this.ScrollToBottom = false;
            ImGui.EndChild();
            ImGui.End();
        }
    }
    // Demonstrate creating a simple log window with basic filtering.
    function ShowExampleAppLog(p_open) {
        /* static */ const log = STATIC("log#3073", new ExampleAppLog());
        // For the demo: add a debug button _BEFORE_ the normal log window contents
        // We take advantage of a rarely used feature: multiple calls to Begin()/End() are appending to the _same_ window.
        // Most of the contents of the window will be added by the log.Draw() call.
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(500, 400), imgui_7.ImGuiCond.FirstUseEver);
        ImGui.Begin("Example: Log", p_open);
        // /* static */ const last_time: Static<number> = STATIC("last_time", -1.0);
        // const time: number = ImGui.GetTime();
        // if (time - last_time.value >= 0.20 && !ImGui.GetIO().KeyCtrl)
        // {
        //     const random_words: string[] = [ "system", "info", "warning", "error", "fatal", "notice", "log" ];
        //     // log.AddLog("[%s] Hello, time is %.1f, frame count is %d\n", random_words[rand() % IM_ARRAYSIZE(random_words)], time, ImGui.GetFrameCount());
        //     log.value.AddLog(`[${random_words[Math.floor(Math.random() * IM_ARRAYSIZE(random_words))]}] Hello, time is ${time.toFixed(1)}, frame count is ${ImGui.GetFrameCount()}\n`);
        //     last_time.value = time;
        // }
        if (ImGui.SmallButton("[Debug] Add 5 entries")) {
            /* static */ const counter = STATIC("counter", 0);
            for (let n = 0; n < 5; n++) {
                const categories = ["info", "warn", "error"];
                const words = ["Bumfuzzled", "Cattywampus", "Snickersnee", "Abibliophobia", "Absquatulate", "Nincompoop", "Pauciloquent"];
                // log.AddLog("[%05d] [%s] Hello, current time is %.1f, here's a word: '%s'\n",
                //     ImGui.GetFrameCount(), categories[counter % IM_ARRAYSIZE(categories)], ImGui.GetTime(), words[counter % IM_ARRAYSIZE(words)]);
                log.value.AddLog(`[${ImGui.GetFrameCount()}] [${categories[counter.value % imgui_3.IM_ARRAYSIZE(categories)]}] Hello, current time is ${ImGui.GetTime()}, here's a word: '${words[counter.value % imgui_3.IM_ARRAYSIZE(words)]}'\n`);
                counter.value++;
            }
        }
        ImGui.End();
        // Actually call in the regular Log helper (which will Begin() into the same window as we just did)
        log.value.Draw("Example: Log", p_open);
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Simple Layout / ShowExampleAppLayout()
    //-----------------------------------------------------------------------------
    // Demonstrate create a window with multiple child windows.
    function ShowExampleAppLayout(p_open) {
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(500, 440), imgui_7.ImGuiCond.FirstUseEver);
        if (ImGui.Begin("Example: Simple Layout", p_open, imgui_15.ImGuiWindowFlags.MenuBar)) {
            if (ImGui.BeginMenuBar()) {
                if (ImGui.BeginMenu("File")) {
                    if (ImGui.MenuItem("Close"))
                        p_open(false);
                    ImGui.EndMenu();
                }
                ImGui.EndMenuBar();
            }
            // left
            /* static */ const selected = STATIC("selected#3106", 0);
            ImGui.BeginChild("left pane", new imgui_19.ImVec2(150, 0), true);
            for (let i = 0; i < 100; i++) {
                const label = `MyObject ${i}`;
                if (ImGui.Selectable(label, selected.value === i))
                    selected.value = i;
            }
            ImGui.EndChild();
            ImGui.SameLine();
            // right
            ImGui.BeginGroup();
            ImGui.BeginChild("item view", new imgui_19.ImVec2(0, -ImGui.GetFrameHeightWithSpacing())); // Leave room for 1 line below us
            ImGui.Text(`MyObject: ${selected}`);
            ImGui.Separator();
            if (ImGui.BeginTabBar("##Tabs", imgui_16.ImGuiTabBarFlags.None)) {
                if (ImGui.BeginTabItem("Description")) {
                    ImGui.TextWrapped("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
                    ImGui.EndTabItem();
                }
                if (ImGui.BeginTabItem("Details")) {
                    ImGui.Text("ID: 0123456789");
                    ImGui.EndTabItem();
                }
                ImGui.EndTabBar();
            }
            ImGui.EndChild();
            if (ImGui.Button("Revert")) { }
            ImGui.SameLine();
            if (ImGui.Button("Save")) { }
            ImGui.EndGroup();
        }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Property Editor / ShowExampleAppPropertyEditor()
    //-----------------------------------------------------------------------------
    // Demonstrate create a simple property editor.
    function ShowExampleAppPropertyEditor(p_open) {
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(430, 450), imgui_7.ImGuiCond.FirstUseEver);
        if (!ImGui.Begin("Example: Property editor", p_open)) {
            ImGui.End();
            return;
        }
        HelpMarker("This example shows how you may implement a property editor using two columns.\nAll objects/fields data are dummies here.\nRemember that in many simple cases, you can use ImGui.SameLine(xxx) to position\nyour cursor horizontally instead of using the Columns() API.");
        ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.FramePadding, new imgui_19.ImVec2(2, 2));
        ImGui.Columns(2);
        ImGui.Separator();
        class funcs {
            static ShowDummyObject(prefix, uid) {
                ImGui.PushID(uid); // Use object uid as identifier. Most commonly you could also use the object pointer as a base ID.
                ImGui.AlignTextToFramePadding(); // Text and Tree nodes are less high than regular widgets, here we add vertical spacing to make the tree lines equal high.
                const node_open = ImGui.TreeNode("Object", `${prefix}_${uid}`);
                ImGui.NextColumn();
                ImGui.AlignTextToFramePadding();
                ImGui.Text("my sailor is rich");
                ImGui.NextColumn();
                if (node_open) {
                    /* static */ const dummy_members = STATIC("dummy_members", [0.0, 0.0, 1.0, 3.1416, 100.0, 999.0]);
                    for (let i = 0; i < 8; i++) {
                        ImGui.PushID(i); // Use field index as identifier.
                        if (i < 2) {
                            funcs.ShowDummyObject("Child", 424242);
                        }
                        else {
                            // Here we use a TreeNode to highlight on hover (we could use e.g. Selectable as well)
                            ImGui.AlignTextToFramePadding();
                            // ImGui.TreeNodeEx("Field", ImGuiTreeNodeFlags_Leaf | ImGuiTreeNodeFlags_NoTreePushOnOpen | ImGuiTreeNodeFlags_Bullet, "Field_%d", i);
                            ImGui.TreeNodeEx("Field", imgui_14.ImGuiTreeNodeFlags.Leaf | imgui_14.ImGuiTreeNodeFlags.NoTreePushOnOpen | imgui_14.ImGuiTreeNodeFlags.Bullet, `Field_${i}`);
                            ImGui.NextColumn();
                            ImGui.SetNextItemWidth(-1);
                            const ref = [dummy_members.value[i] || 0];
                            if (i >= 5)
                                ImGui.InputFloat("##value", ref, 1.0);
                            else
                                ImGui.DragFloat("##value", ref, 0.01);
                            dummy_members.value[i] = ref[0];
                            ImGui.NextColumn();
                        }
                        ImGui.PopID();
                    }
                    ImGui.TreePop();
                }
                ImGui.PopID();
            }
        }
        // Iterate dummy objects with dummy members (all the same data)
        for (let obj_i = 0; obj_i < 3; obj_i++)
            funcs.ShowDummyObject("Object", obj_i);
        ImGui.Columns(1);
        ImGui.Separator();
        ImGui.PopStyleVar();
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Long Text / ShowExampleAppLongText()
    //-----------------------------------------------------------------------------
    // Demonstrate/test rendering huge amount of text, and the incidence of clipping.
    function ShowExampleAppLongText(p_open) {
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(520, 600), imgui_7.ImGuiCond.FirstUseEver);
        if (!ImGui.Begin("Example: Long text display", p_open)) {
            ImGui.End();
            return;
        }
        /* static */ const test_type = STATIC("test_type", 0);
        /* static */ const log = STATIC("log#3217", new imgui_25.ImGuiTextBuffer());
        /* static */ const lines = STATIC("lines#3218", 0);
        ImGui.Text("Printing unusually long amount of text.");
        ImGui.Combo("Test type", (value = test_type.value) => test_type.value = value, "Single call to TextUnformatted()\0Multiple calls to Text(), clipped manually\0Multiple calls to Text(), not clipped (slow)\0");
        ImGui.Text(`Buffer contents: ${lines.value} lines, ${log.value.size()} bytes`);
        if (ImGui.Button("Clear")) {
            log.value.clear();
            lines.value = 0;
        }
        ImGui.SameLine();
        if (ImGui.Button("Add 1000 lines")) {
            for (let i = 0; i < 1000; i++)
                log.value.append(`${lines.value + i} The quick brown fox jumps over the lazy dog\n`);
            lines.value += 1000;
        }
        ImGui.BeginChild("Log");
        switch (test_type.value) {
            case 0:
                // Single call to TextUnformatted() with a big buffer
                // ImGui.TextUnformatted(log.begin(), log.end());
                ImGui.TextUnformatted(log.value.begin());
                break;
            case 1:
                {
                    // Multiple calls to Text(), manually coarsely clipped - demonstrate how to use the ImGuiListClipper helper.
                    ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ItemSpacing, new imgui_19.ImVec2(0, 0));
                    const clipper = new imgui_26.ImGuiListClipper(lines.value);
                    while (clipper.Step())
                        for (let i = clipper.DisplayStart; i < clipper.DisplayEnd; i++)
                            ImGui.Text(`${i} The quick brown fox jumps over the lazy dog`);
                    // clipper.delete(); // NOTE: native emscripten class
                    ImGui.PopStyleVar();
                    break;
                }
            case 2:
                // Multiple calls to Text(), not clipped (slow)
                ImGui.PushStyleVar(imgui_13.ImGuiStyleVar.ItemSpacing, new imgui_19.ImVec2(0, 0));
                for (let i = 0; i < lines.value; i++)
                    ImGui.Text(`${i} The quick brown fox jumps over the lazy dog`);
                ImGui.PopStyleVar();
                break;
        }
        ImGui.EndChild();
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Auto Resize / ShowExampleAppAutoResize()
    //-----------------------------------------------------------------------------
    // Demonstrate creating a window which gets auto-resized according to its content.
    function ShowExampleAppAutoResize(p_open) {
        if (!ImGui.Begin("Example: Auto-resizing window", p_open, ImGui.WindowFlags.AlwaysAutoResize)) {
            ImGui.End();
            return;
        }
        /* static */ const lines = STATIC("lines#2447", 10);
        ImGui.Text("Window will resize every-frame to the size of its content.\nNote that you probably don't want to query the window size to\noutput your content because that would create a feedback loop.");
        ImGui.SliderInt("Number of lines", (value = lines.value) => lines.value = value, 1, 20);
        for (let i = 0; i < lines.value; i++)
            ImGui.Text(" ".repeat(i * 4) + `This is line ${i}`); // Pad with space to extend size horizontally
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Constrained Resize / ShowExampleAppConstrainedResize()
    //-----------------------------------------------------------------------------
    // Demonstrate creating a window with custom resize constraints.
    function ShowExampleAppConstrainedResize(p_open) {
        class CustomConstraints // Helper functions to demonstrate programmatic constraints
         {
            static Square(data) {
                data.DesiredSize.x = data.DesiredSize.y = IM_MAX(data.DesiredSize.x, data.DesiredSize.y);
            }
            static Step(data) {
                const step = data.UserData;
                data.DesiredSize.x = Math.floor(data.DesiredSize.x / step + 0.5) * step;
                data.DesiredSize.y = Math.floor(data.DesiredSize.y / step + 0.5) * step;
            }
        }
        /* static */ const auto_resize = STATIC("auto_resize", false);
        /* static */ const type = STATIC("type", 0);
        /* static */ const display_lines = STATIC("display_lines", 10);
        if (type.value === 0)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(-1, 0), new imgui_19.ImVec2(-1, Number.MAX_VALUE)); // Vertical only
        if (type.value === 1)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(0, -1), new imgui_19.ImVec2(Number.MAX_VALUE, -1)); // Horizontal only
        if (type.value === 2)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(100, 100), new imgui_19.ImVec2(Number.MAX_VALUE, Number.MAX_VALUE)); // Width > 100, Height > 100
        if (type.value === 3)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(400, -1), new imgui_19.ImVec2(500, -1)); // Width 400-500
        if (type.value === 4)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(-1, 400), new imgui_19.ImVec2(-1, 500)); // Height 400-500
        if (type.value === 5)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(0, 0), new imgui_19.ImVec2(Number.MAX_VALUE, Number.MAX_VALUE), CustomConstraints.Square); // Always Square
        if (type.value === 6)
            ImGui.SetNextWindowSizeConstraints(new imgui_19.ImVec2(0, 0), new imgui_19.ImVec2(Number.MAX_VALUE, Number.MAX_VALUE), CustomConstraints.Step, 100); // Fixed Step
        const flags = auto_resize.value ? imgui_15.ImGuiWindowFlags.AlwaysAutoResize : 0;
        if (ImGui.Begin("Example: Constrained Resize", p_open, flags)) {
            const desc = [
                "Resize vertical only",
                "Resize horizontal only",
                "Width > 100, Height > 100",
                "Width 400-500",
                "Height 400-500",
                "Custom: Always Square",
                "Custom: Fixed Steps (100)",
            ];
            if (ImGui.Button("200x200")) {
                ImGui.SetWindowSize(new imgui_19.ImVec2(200, 200));
            }
            ImGui.SameLine();
            if (ImGui.Button("500x500")) {
                ImGui.SetWindowSize(new imgui_19.ImVec2(500, 500));
            }
            ImGui.SameLine();
            if (ImGui.Button("800x200")) {
                ImGui.SetWindowSize(new imgui_19.ImVec2(800, 200));
            }
            ImGui.SetNextItemWidth(200);
            ImGui.Combo("Constraint", (value = type.value) => type.value = value, desc, imgui_3.IM_ARRAYSIZE(desc));
            ImGui.SetNextItemWidth(200);
            ImGui.DragInt("Lines", (value = display_lines.value) => display_lines.value = value, 0.2, 1, 100);
            ImGui.Checkbox("Auto-resize", (value = auto_resize.value) => auto_resize.value = value);
            for (let i = 0; i < display_lines.value; i++)
                ImGui.Text(" ".repeat(i * 4) + "Hello, sailor! Making this line long enough for the example.");
        }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Simple Overlay / ShowExampleAppSimpleOverlay()
    //-----------------------------------------------------------------------------
    // Demonstrate creating a simple static window with no decoration + a context-menu to choose which corner of the screen to use.
    function ShowExampleAppSimpleOverlay(p_open) {
        const DISTANCE = 10.0;
        /* static */ const corner = STATIC("corner", 0);
        const io = ImGui.GetIO();
        if (corner.value !== -1) {
            const window_pos = new imgui_19.ImVec2((corner.value & 1) ? io.DisplaySize.x - DISTANCE : DISTANCE, (corner.value & 2) ? io.DisplaySize.y - DISTANCE : DISTANCE);
            const window_pos_pivot = new imgui_19.ImVec2((corner.value & 1) ? 1.0 : 0.0, (corner.value & 2) ? 1.0 : 0.0);
            ImGui.SetNextWindowPos(window_pos, imgui_7.ImGuiCond.Always, window_pos_pivot);
        }
        ImGui.SetNextWindowBgAlpha(0.35); // Transparent background
        if (ImGui.Begin("Example: Simple overlay", p_open, (corner.value !== -1 ? imgui_15.ImGuiWindowFlags.NoMove : 0) | imgui_15.ImGuiWindowFlags.NoDecoration | imgui_15.ImGuiWindowFlags.AlwaysAutoResize | imgui_15.ImGuiWindowFlags.NoSavedSettings)) {
            ImGui.Text("Simple overlay\nin the corner of the screen.\n(right-click to change position)");
            ImGui.Separator();
            if (ImGui.IsMousePosValid())
                ImGui.Text(`Mouse Position: (${io.MousePos.x.toFixed(1)},${io.MousePos.y.toFixed(1)})`);
            else
                ImGui.Text("Mouse Position: <invalid>");
            if (ImGui.BeginPopupContextWindow()) {
                if (ImGui.MenuItem("Custom", null, corner.value === -1))
                    corner.value = -1;
                if (ImGui.MenuItem("Top-left", null, corner.value === 0))
                    corner.value = 0;
                if (ImGui.MenuItem("Top-right", null, corner.value === 1))
                    corner.value = 1;
                if (ImGui.MenuItem("Bottom-left", null, corner.value === 2))
                    corner.value = 2;
                if (ImGui.MenuItem("Bottom-right", null, corner.value === 3))
                    corner.value = 3;
                if (p_open() && ImGui.MenuItem("Close"))
                    p_open(false);
                ImGui.EndPopup();
            }
        }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Manipulating Window Titles / ShowExampleAppWindowTitles()
    //-----------------------------------------------------------------------------
    // Demonstrate using "##" and "###" in identifiers to manipulate ID generation.
    // This apply to all regular items as well. Read FAQ section "How can I have multiple widgets with the same label? Can I have widget without a label? (Yes). A primer on the purpose of labels/IDs." for details.
    function ShowExampleAppWindowTitles(p_open) {
        // By default, Windows are uniquely identified by their title.
        // You can use the "##" and "###" markers to manipulate the display/ID.
        // Using "##" to display same title but have unique identifier.
        ImGui.SetNextWindowPos(new imgui_19.ImVec2(100, 100), imgui_7.ImGuiCond.FirstUseEver);
        ImGui.Begin("Same title as another window##1");
        ImGui.Text("This is window 1.\nMy title is the same as window 2, but my identifier is unique.");
        ImGui.End();
        ImGui.SetNextWindowPos(new imgui_19.ImVec2(100, 200), imgui_7.ImGuiCond.FirstUseEver);
        ImGui.Begin("Same title as another window##2");
        ImGui.Text("This is window 2.\nMy title is the same as window 1, but my identifier is unique.");
        ImGui.End();
        // Using "###" to display a changing title but keep a static identifier "AnimatedTitle"
        const buf = `Animated title ${"|/-\\".charAt((ImGui.GetTime() / 0.25) & 3)} ${ImGui.GetFrameCount()}###AnimatedTitle`;
        ImGui.SetNextWindowPos(new imgui_19.ImVec2(100, 300), imgui_7.ImGuiCond.FirstUseEver);
        ImGui.Begin(buf);
        ImGui.Text("This window has a changing title.");
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Custom Rendering using ImDrawList API / ShowExampleAppCustomRendering()
    //-----------------------------------------------------------------------------
    // Demonstrate using the low-level ImDrawList to draw custom shapes.
    function ShowExampleAppCustomRendering(p_open) {
        ImGui.SetNextWindowSize(new imgui_19.ImVec2(350, 560), imgui_7.ImGuiCond.FirstUseEver);
        if (!ImGui.Begin("Example: Custom rendering", p_open)) {
            ImGui.End();
            return;
        }
        // Tip: If you do a lot of custom rendering, you probably want to use your own geometrical types and benefit of overloaded operators, etc.
        // Define IM_VEC2_CLASS_EXTRA in imconfig.h to create implicit conversions between your types and ImVec2/ImVec4.
        // ImGui defines overloaded operators but they are internal to imgui.cpp and not exposed outside (to avoid messing with your types)
        // In this example we are not using the maths operators!
        const draw_list = ImGui.GetWindowDrawList();
        if (ImGui.BeginTabBar("##TabBar")) {
            // Primitives
            if (ImGui.BeginTabItem("Primitives")) {
                /* static */ const sz = STATIC("sz", 36.0);
                /* static */ const thickness = STATIC("thickness", 4.0);
                /* static */ const col = STATIC("color#2583", new imgui_20.ImVec4(1.0, 1.0, 0.4, 1.0));
                ImGui.DragFloat("Size", (value = sz.value) => sz.value = value, 0.2, 2.0, 72.0, "%.0f");
                ImGui.DragFloat("Thickness", (value = thickness.value) => thickness.value = value, 0.05, 1.0, 8.0, "%.02f");
                ImGui.ColorEdit3("Color", col.value);
                {
                    const p = ImGui.GetCursorScreenPos();
                    const col32 = imgui_21.IM_COL32(col.value.x * 255, col.value.y * 255, col.value.z * 255, col.value.w * 255);
                    let x = p.x + 4.0, y = p.y + 4.0;
                    const spacing = 8.0;
                    for (let n = 0; n < 2; n++) {
                        const curr_thickness = (n === 0) ? 1.0 : thickness.value;
                        draw_list.AddCircle(new imgui_19.ImVec2(x + sz.value * 0.5, y + sz.value * 0.5), sz.value * 0.5, col32, 20, curr_thickness);
                        x += sz.value + spacing;
                        draw_list.AddRect(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, 0.0, imgui_17.ImDrawCornerFlags.All, curr_thickness);
                        x += sz.value + spacing;
                        draw_list.AddRect(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, 10.0, imgui_17.ImDrawCornerFlags.All, curr_thickness);
                        x += sz.value + spacing;
                        draw_list.AddRect(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, 10.0, imgui_17.ImDrawCornerFlags.TopLeft | imgui_17.ImDrawCornerFlags.BotRight, curr_thickness);
                        x += sz.value + spacing;
                        draw_list.AddTriangle(new imgui_19.ImVec2(x + sz.value * 0.5, y), new imgui_19.ImVec2(x + sz.value, y + sz.value - 0.5), new imgui_19.ImVec2(x, y + sz.value - 0.5), col32, curr_thickness);
                        x += sz.value + spacing;
                        draw_list.AddLine(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y), col32, curr_thickness);
                        x += sz.value + spacing; // Horizontal line (note: drawing a filled rectangle will be faster!)
                        draw_list.AddLine(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x, y + sz.value), col32, curr_thickness);
                        x += spacing; // Vertical line (note: drawing a filled rectangle will be faster!)
                        draw_list.AddLine(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, curr_thickness);
                        x += sz.value + spacing; // Diagonal line
                        draw_list.AddBezierCurve(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value * 1.3, y + sz.value * 0.3), new imgui_19.ImVec2(x + sz.value - sz.value * 1.3, y + sz.value - sz.value * 0.3), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, curr_thickness);
                        x = p.x + 4;
                        y += sz.value + spacing;
                    }
                    draw_list.AddCircleFilled(new imgui_19.ImVec2(x + sz.value * 0.5, y + sz.value * 0.5), sz.value * 0.5, col32, 32);
                    x += sz.value + spacing;
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32);
                    x += sz.value + spacing;
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, 10.0);
                    x += sz.value + spacing;
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), col32, 10.0, imgui_17.ImDrawCornerFlags.TopLeft | imgui_17.ImDrawCornerFlags.BotRight);
                    x += sz.value + spacing;
                    draw_list.AddTriangleFilled(new imgui_19.ImVec2(x + sz.value * 0.5, y), new imgui_19.ImVec2(x + sz.value, y + sz.value - 0.5), new imgui_19.ImVec2(x, y + sz.value - 0.5), col32);
                    x += sz.value + spacing;
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + thickness.value), col32);
                    x += sz.value + spacing; // Horizontal line (faster than AddLine, but only handle integer thickness)
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + thickness.value, y + sz.value), col32);
                    x += spacing + spacing; // Vertical line (faster than AddLine, but only handle integer thickness)
                    draw_list.AddRectFilled(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + 1, y + 1), col32);
                    x += sz.value; // Pixel (faster than AddLine)
                    draw_list.AddRectFilledMultiColor(new imgui_19.ImVec2(x, y), new imgui_19.ImVec2(x + sz.value, y + sz.value), imgui_21.IM_COL32(0, 0, 0), imgui_21.IM_COL32(255, 0, 0), imgui_21.IM_COL32(255, 255, 0), imgui_21.IM_COL32(0, 255, 0));
                    ImGui.Dummy(new imgui_19.ImVec2((sz.value + spacing) * 8, (sz.value + spacing) * 3));
                }
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("Canvas")) {
                /* static */ const points = STATIC("points", new imgui_18.ImVector());
                /* static */ const adding_line = STATIC("adding_line", false);
                if (ImGui.Button("Clear"))
                    points.value.clear();
                if (points.value.Size >= 2) {
                    ImGui.SameLine();
                    if (ImGui.Button("Undo")) {
                        points.value.pop_back();
                        points.value.pop_back();
                    }
                }
                ImGui.Text("Left-click and drag to add lines,\nRight-click to undo");
                // Here we are using InvisibleButton() as a convenience to 1) advance the cursor and 2) allows us to use IsItemHovered()
                // But you can also draw directly and poll mouse/keyboard by yourself. You can manipulate the cursor using GetCursorPos() and SetCursorPos().
                // If you only use the ImDrawList API, you can notify the owner window of its extends by using SetCursorPos(max).
                const canvas_pos = ImGui.GetCursorScreenPos(); // ImDrawList API uses screen coordinates!
                const canvas_size = ImGui.GetContentRegionAvail(); // Resize canvas to what's available
                if (canvas_size.x < 50.0)
                    canvas_size.x = 50.0;
                if (canvas_size.y < 50.0)
                    canvas_size.y = 50.0;
                draw_list.AddRectFilledMultiColor(canvas_pos, new imgui_19.ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), imgui_21.IM_COL32(50, 50, 50), imgui_21.IM_COL32(50, 50, 60), imgui_21.IM_COL32(60, 60, 70), imgui_21.IM_COL32(50, 50, 60));
                draw_list.AddRect(canvas_pos, new imgui_19.ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), imgui_21.IM_COL32(255, 255, 255));
                let adding_preview = false;
                ImGui.InvisibleButton("canvas", canvas_size);
                const mouse_pos_in_canvas = new imgui_19.ImVec2(ImGui.GetIO().MousePos.x - canvas_pos.x, ImGui.GetIO().MousePos.y - canvas_pos.y);
                if (adding_line.value) {
                    adding_preview = true;
                    points.value.push_back(mouse_pos_in_canvas);
                    if (!ImGui.IsMouseDown(0))
                        adding_line.value = adding_preview = false;
                }
                if (ImGui.IsItemHovered()) {
                    if (!adding_line.value && ImGui.IsMouseClicked(0)) {
                        points.value.push_back(mouse_pos_in_canvas);
                        adding_line.value = true;
                    }
                    if (ImGui.IsMouseClicked(1) && !points.value.empty()) {
                        adding_line.value = adding_preview = false;
                        points.value.pop_back();
                        points.value.pop_back();
                    }
                }
                draw_list.PushClipRect(canvas_pos, new imgui_19.ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), true); // clip lines within the canvas (if we resize it, etc.)
                for (let i = 0; i < points.value.Size - 1; i += 2)
                    draw_list.AddLine(new imgui_19.ImVec2(canvas_pos.x + points.value.Data[i].x, canvas_pos.y + points.value.Data[i].y), new imgui_19.ImVec2(canvas_pos.x + points.value.Data[i + 1].x, canvas_pos.y + points.value.Data[i + 1].y), imgui_21.IM_COL32(255, 255, 0, 255), 2.0);
                draw_list.PopClipRect();
                if (adding_preview)
                    points.value.pop_back();
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("BG/FG draw lists")) {
                /* static */ const draw_bg = STATIC("draw_bg", true);
                /* static */ const draw_fg = STATIC("draw_fg", true);
                ImGui.Checkbox("Draw in Background draw list", (value = draw_bg.value) => draw_bg.value = value);
                ImGui.Checkbox("Draw in Foreground draw list", (value = draw_fg.value) => draw_fg.value = value);
                const window_pos = ImGui.GetWindowPos();
                const window_size = ImGui.GetWindowSize();
                const window_center = new imgui_19.ImVec2(window_pos.x + window_size.x * 0.5, window_pos.y + window_size.y * 0.5);
                if (draw_bg.value)
                    ImGui.GetBackgroundDrawList().AddCircle(window_center, window_size.x * 0.6, imgui_21.IM_COL32(255, 0, 0, 200), 32, 10 + 4);
                if (draw_fg.value)
                    ImGui.GetForegroundDrawList().AddCircle(window_center, window_size.y * 0.6, imgui_21.IM_COL32(0, 255, 0, 200), 32, 10);
                ImGui.EndTabItem();
            }
            ImGui.EndTabBar();
        }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION] Example App: Documents Handling / ShowExampleAppDocuments()
    //-----------------------------------------------------------------------------
    // Simplified structure to mimic a Document model
    // struct MyDocument
    // {
    //     const char* Name;           // Document title
    //     bool        Open;           // Set when the document is open (in this demo, we keep an array of all available documents to simplify the demo)
    //     bool        OpenPrev;       // Copy of Open from last update.
    //     bool        Dirty;          // Set when the document has been modified
    //     bool        WantClose;      // Set when the document
    //     ImVec4      Color;          // An arbitrary variable associated to the document
    //     MyDocument(const char* name, bool open = true, const ImVec4& color = ImVec4(1.0f,1.0f,1.0f,1.0f))
    //     {
    //         Name = name;
    //         Open = OpenPrev = open;
    //         Dirty = false;
    //         WantClose = false;
    //         Color = color;
    //     }
    //     void DoOpen()       { Open = true; }
    //     void DoQueueClose() { WantClose = true; }
    //     void DoForceClose() { Open = false; Dirty = false; }
    //     void DoSave()       { Dirty = false; }
    //     // Display dummy contents for the Document
    //     static void DisplayContents(MyDocument* doc)
    //     {
    //         ImGui.PushID(doc);
    //         ImGui.Text("Document \"%s\"", doc->Name);
    //         ImGui.PushStyleColor(ImGuiCol_Text, doc->Color);
    //         ImGui.TextWrapped("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    //         ImGui.PopStyleColor();
    //         if (ImGui.Button("Modify", ImVec2(100, 0)))
    //             doc->Dirty = true;
    //         ImGui.SameLine();
    //         if (ImGui.Button("Save", ImVec2(100, 0)))
    //             doc->DoSave();
    //         ImGui.ColorEdit3("color", &doc->Color.x);  // Useful to test drag and drop and hold-dragged-to-open-tab behavior.
    //         ImGui.PopID();
    //     }
    //     // Display context menu for the Document
    //     static void DisplayContextMenu(MyDocument* doc)
    //     {
    //         if (!ImGui.BeginPopupContextItem())
    //             return;
    //         char buf[256];
    //         sprintf(buf, "Save %s", doc->Name);
    //         if (ImGui.MenuItem(buf, "CTRL+S", false, doc->Open))
    //             doc->DoSave();
    //         if (ImGui.MenuItem("Close", "CTRL+W", false, doc->Open))
    //             doc->DoQueueClose();
    //         ImGui.EndPopup();
    //     }
    // };
    // struct ExampleAppDocuments
    // {
    //     ImVector<MyDocument> Documents;
    //     ExampleAppDocuments()
    //     {
    //         Documents.push_back(MyDocument("Lettuce",             true,  ImVec4(0.4f, 0.8f, 0.4f, 1.0f)));
    //         Documents.push_back(MyDocument("Eggplant",            true,  ImVec4(0.8f, 0.5f, 1.0f, 1.0f)));
    //         Documents.push_back(MyDocument("Carrot",              true,  ImVec4(1.0f, 0.8f, 0.5f, 1.0f)));
    //         Documents.push_back(MyDocument("Tomato",              false, ImVec4(1.0f, 0.3f, 0.4f, 1.0f)));
    //         Documents.push_back(MyDocument("A Rather Long Title", false));
    //         Documents.push_back(MyDocument("Some Document",       false));
    //     }
    // };
    // // [Optional] Notify the system of Tabs/Windows closure that happened outside the regular tab interface.
    // // If a tab has been closed programmatically (aka closed from another source such as the Checkbox() in the demo, as opposed
    // // to clicking on the regular tab closing button) and stops being submitted, it will take a frame for the tab bar to notice its absence.
    // // During this frame there will be a gap in the tab bar, and if the tab that has disappeared was the selected one, the tab bar
    // // will report no selected tab during the frame. This will effectively give the impression of a flicker for one frame.
    // // We call SetTabItemClosed() to manually notify the Tab Bar or Docking system of removed tabs to avoid this glitch.
    // // Note that this completely optional, and only affect tab bars with the ImGuiTabBarFlags_Reorderable flag.
    // static void NotifyOfDocumentsClosedElsewhere(ExampleAppDocuments& app)
    // {
    //     for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
    //     {
    //         MyDocument* doc = &app.Documents[doc_n];
    //         if (!doc->Open && doc->OpenPrev)
    //             ImGui.SetTabItemClosed(doc->Name);
    //         doc->OpenPrev = doc->Open;
    //     }
    // }
    // void ShowExampleAppDocuments(bool* p_open)
    function ShowExampleAppDocuments(p_open) {
        // static ExampleAppDocuments app;
        // // Options
        // static bool opt_reorderable = true;
        // static ImGuiTabBarFlags opt_fitting_flags = ImGuiTabBarFlags_FittingPolicyDefault_;
        if (!ImGui.Begin("Example: Documents", p_open, imgui_15.ImGuiWindowFlags.MenuBar)) {
            ImGui.End();
            return;
        }
        // // Menu
        // if (ImGui.BeginMenuBar())
        // {
        //     if (ImGui.BeginMenu("File"))
        //     {
        //         int open_count = 0;
        //         for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        //             open_count += app.Documents[doc_n].Open ? 1 : 0;
        //         if (ImGui.BeginMenu("Open", open_count < app.Documents.Size))
        //         {
        //             for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        //             {
        //                 MyDocument* doc = &app.Documents[doc_n];
        //                 if (!doc->Open)
        //                     if (ImGui.MenuItem(doc->Name))
        //                         doc->DoOpen();
        //             }
        //             ImGui.EndMenu();
        //         }
        //         if (ImGui.MenuItem("Close All Documents", NULL, false, open_count > 0))
        //             for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        //                 app.Documents[doc_n].DoQueueClose();
        //         if (ImGui.MenuItem("Exit", "Alt+F4")) {}
        //         ImGui.EndMenu();
        //     }
        //     ImGui.EndMenuBar();
        // }
        // // [Debug] List documents with one checkbox for each
        // for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        // {
        //     MyDocument* doc = &app.Documents[doc_n];
        //     if (doc_n > 0)
        //         ImGui.SameLine();
        //     ImGui.PushID(doc);
        //     if (ImGui.Checkbox(doc->Name, &doc->Open))
        //         if (!doc->Open)
        //             doc->DoForceClose();
        //     ImGui.PopID();
        // }
        // ImGui.Separator();
        // // Submit Tab Bar and Tabs
        // {
        //     ImGuiTabBarFlags tab_bar_flags = (opt_fitting_flags) | (opt_reorderable ? ImGuiTabBarFlags_Reorderable : 0);
        //     if (ImGui.BeginTabBar("##tabs", tab_bar_flags))
        //     {
        //         if (opt_reorderable)
        //             NotifyOfDocumentsClosedElsewhere(app);
        //         // [DEBUG] Stress tests
        //         //if ((ImGui.GetFrameCount() % 30) == 0) docs[1].Open ^= 1;            // [DEBUG] Automatically show/hide a tab. Test various interactions e.g. dragging with this on.
        //         //if (ImGui.GetIO().KeyCtrl) ImGui.SetTabItemSelected(docs[1].Name);  // [DEBUG] Test SetTabItemSelected(), probably not very useful as-is anyway..
        //         // Submit Tabs
        //         for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        //         {
        //             MyDocument* doc = &app.Documents[doc_n];
        //             if (!doc->Open)
        //                 continue;
        //             ImGuiTabItemFlags tab_flags = (doc->Dirty ? ImGuiTabItemFlags_UnsavedDocument : 0);
        //             bool visible = ImGui.BeginTabItem(doc->Name, &doc->Open, tab_flags);
        //             // Cancel attempt to close when unsaved add to save queue so we can display a popup.
        //             if (!doc->Open && doc->Dirty)
        //             {
        //                 doc->Open = true;
        //                 doc->DoQueueClose();
        //             }
        //             MyDocument::DisplayContextMenu(doc);
        //             if (visible)
        //             {
        //                 MyDocument::DisplayContents(doc);
        //                 ImGui.EndTabItem();
        //             }
        //         }
        //         ImGui.EndTabBar();
        //     }
        // }
        // // Update closing queue
        // static ImVector<MyDocument*> close_queue;
        // if (close_queue.empty())
        // {
        //     // Close queue is locked once we started a popup
        //     for (int doc_n = 0; doc_n < app.Documents.Size; doc_n++)
        //     {
        //         MyDocument* doc = &app.Documents[doc_n];
        //         if (doc->WantClose)
        //         {
        //             doc->WantClose = false;
        //             close_queue.push_back(doc);
        //         }
        //     }
        // }
        // // Display closing confirmation UI
        // if (!close_queue.empty())
        // {
        //     int close_queue_unsaved_documents = 0;
        //     for (int n = 0; n < close_queue.Size; n++)
        //         if (close_queue[n]->Dirty)
        //             close_queue_unsaved_documents++;
        //     if (close_queue_unsaved_documents == 0)
        //     {
        //         // Close documents when all are unsaved
        //         for (int n = 0; n < close_queue.Size; n++)
        //             close_queue[n]->DoForceClose();
        //         close_queue.clear();
        //     }
        //     else
        //     {
        //         if (!ImGui.IsPopupOpen("Save?"))
        //             ImGui.OpenPopup("Save?");
        //         if (ImGui.BeginPopupModal("Save?"))
        //         {
        //             ImGui.Text("Save change to the following items?");
        //             ImGui.SetNextItemWidth(-1.0f);
        //             if (ImGui.ListBoxHeader("##", close_queue_unsaved_documents, 6))
        //             {
        //                 for (int n = 0; n < close_queue.Size; n++)
        //                     if (close_queue[n]->Dirty)
        //                         ImGui.Text("%s", close_queue[n]->Name);
        //                 ImGui.ListBoxFooter();
        //             }
        //             if (ImGui.Button("Yes", ImVec2(80, 0)))
        //             {
        //                 for (int n = 0; n < close_queue.Size; n++)
        //                 {
        //                     if (close_queue[n]->Dirty)
        //                         close_queue[n]->DoSave();
        //                     close_queue[n]->DoForceClose();
        //                 }
        //                 close_queue.clear();
        //                 ImGui.CloseCurrentPopup();
        //             }
        //             ImGui.SameLine();
        //             if (ImGui.Button("No", ImVec2(80, 0)))
        //             {
        //                 for (int n = 0; n < close_queue.Size; n++)
        //                     close_queue[n]->DoForceClose();
        //                 close_queue.clear();
        //                 ImGui.CloseCurrentPopup();
        //             }
        //             ImGui.SameLine();
        //             if (ImGui.Button("Cancel", ImVec2(80, 0)))
        //             {
        //                 close_queue.clear();
        //                 ImGui.CloseCurrentPopup();
        //             }
        //             ImGui.EndPopup();
        //         }
        //     }
        // }
        ImGui.End();
    }
    //-----------------------------------------------------------------------------
    // [SECTION]
    //-----------------------------------------------------------------------------
    function ShowBackendCheckerWindow(p_open) {
        if (!ImGui.Begin("Dear ImGui Backend Checker", p_open)) {
            ImGui.End();
            return;
        }
        const io = ImGui.GetIO();
        ImGui.Text(`Dear ImGui ${ImGui.GetVersion()} Backend Checker`);
        ImGui.Text(`io.BackendPlatformName: ${io.BackendPlatformName ? io.BackendPlatformName : "NULL"}`);
        ImGui.Text(`io.BackendRendererName: ${io.BackendRendererName ? io.BackendRendererName : "NULL"}`);
        ImGui.Separator();
        if (ImGui.TreeNode("0001: Renderer: Large Mesh Support")) {
            const draw_list = ImGui.GetWindowDrawList();
            {
                /* static */ const vtx_count = STATIC("vtx_count#4821", 60000);
                // ImGui.SliderInt("VtxCount##1", &vtx_count, 0, 100000);
                ImGui.SliderInt("VtxCount##1", (_ = vtx_count.value) => vtx_count.value = _, 0, 100000);
                const p = ImGui.GetCursorScreenPos();
                for (let n = 0; n < vtx_count.value / 4; n++) {
                    // float off_x = (float)(n % 100) * 3.0f;
                    const off_x = (n % 100) * 3.0;
                    // float off_y = (float)(n % 100) * 1.0f;
                    const off_y = (n % 100) * 1.0;
                    // ImU32 col = IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                    const col = imgui_21.IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                    // draw_list->AddRectFilled(ImVec2(p.x + off_x, p.y + off_y), ImVec2(p.x + off_x + 50, p.y + off_y + 50), col);
                    draw_list.AddRectFilled(new imgui_19.ImVec2(p.x + off_x, p.y + off_y), new imgui_19.ImVec2(p.x + off_x + 50, p.y + off_y + 50), col);
                }
                ImGui.Dummy(new imgui_19.ImVec2(300 + 50, 100 + 50));
                // ImGui.Text("VtxBuffer.Size = %d", draw_list->VtxBuffer.Size);
                ImGui.Text(`VtxBuffer = ${draw_list.VtxBuffer.length}`);
            }
            {
                /* static */ const vtx_count = STATIC("vtx_count#4841", 60000);
                // ImGui.SliderInt("VtxCount##2", &vtx_count, 0, 100000);
                ImGui.SliderInt("VtxCount##2", (_ = vtx_count.value) => vtx_count.value = _, 0, 100000);
                const p = ImGui.GetCursorScreenPos();
                for (let n = 0; n < vtx_count.value / (10 * 4); n++) {
                    // float off_x = (float)(n % 100) * 3.0f;
                    const off_x = (n % 100) * 3.0;
                    // float off_y = (float)(n % 100) * 1.0f;
                    const off_y = (n % 100) * 1.0;
                    // ImU32 col = IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                    const col = imgui_21.IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                    // draw_list->AddText(ImVec2(p.x + off_x, p.y + off_y), col, "ABCDEFGHIJ");
                    draw_list.AddText(new imgui_19.ImVec2(p.x + off_x, p.y + off_y), col, "ABCDEFGHIJ");
                }
                ImGui.Dummy(new imgui_19.ImVec2(300 + 50, 100 + 20));
                // ImGui.Text("VtxBuffer.Size = %d", draw_list->VtxBuffer.Size);
                ImGui.Text(`VtxBuffer = ${draw_list.VtxBuffer.length}`);
            }
            ImGui.TreePop();
        }
        ImGui.End();
    }
});
// End of Demo code
// #else
// export function ShowAboutWindow(p_open: ImAccess<boolean>): void {}
// export function ShowDemoWindow(p_open: ImAccess<boolean>): void {}
// export function ShowUserGuide(): void {}
// export function ShowStyleSelector(label: string): boolean { return false; }
// export function ShowFontSelector(label: string): void {}
// export function ShowStyleEditor(ref: ImGuiStyle | null = null): void {}
// #endif
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2ltZ3VpX2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFZCxzR0FBc0c7SUFDdEcseUhBQXlIO0lBQ3pILHVIQUF1SDtJQUN2SCxzSEFBc0g7SUFDdEgscURBQXFEO0lBQ3JELHdHQUF3RztJQUN4RywwSEFBMEg7SUFDMUgsMkdBQTJHO0lBQzNHLG1IQUFtSDtJQUNuSCxhQUFhO0lBQ2IsK0RBQStEO0lBRS9ELG1GQUFtRjtJQUNuRixnSUFBZ0k7SUFDaEksZ0lBQWdJO0lBQ2hJLHdHQUF3RztJQUN4RywrSEFBK0g7SUFDL0gsOEhBQThIO0lBQzlILDRFQUE0RTtJQUU1RSxnR0FBZ0c7SUFDaEcsbUJBQW1CO0lBQ25CLCtIQUErSDtJQUMvSCx3R0FBd0c7SUFDeEcsc0lBQXNJO0lBQ3RJLHdKQUF3SjtJQUN4SixvSkFBb0o7SUFDcEoseUhBQXlIO0lBRXpIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxQkU7SUFFRiw2REFBNkQ7SUFDN0Qsa0NBQWtDO0lBQ2xDLFNBQVM7SUFFVCxxQkFBcUI7SUFDckIsa0RBQWtEO0lBQ2xELHdFQUF3RTtJQUN4RSwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELG9FQUFvRTtJQUNwRSwwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLDBDQUEwQztJQUMxQyxTQUFTO0lBRVQsK0NBQWlDO0lBRWpDLG1DQUF3QztJQUV4QyxtQ0FBb0M7SUFDcEMsbUNBQXVDO0lBRXZDLG1DQUF5QztJQUt6QyxtQ0FBbUM7SUFDbkMsbUNBQThDO0lBQzlDLG1DQUFvQztJQUNwQyxtQ0FBNEM7SUFDNUMsbUNBQTRDO0lBQzVDLG9DQUE4QztJQUM5QyxvQ0FBMkM7SUFDM0Msb0NBQStDO0lBQy9DLG9DQUF3QztJQUN4QyxvQ0FBNkM7SUFDN0Msb0NBQTJDO0lBQzNDLG9DQUEyQztJQUkzQyxv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RUFBRSxJQUFJLENBQUUsQ0FBQyxDQUFDO2dCQUMvTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDNUI7b0JBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxlQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQy9HO3dCQUNJLDJJQUEySTt3QkFDM0ksTUFBTSxDQUFDLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFZOzRCQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQUU7d0JBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFOzRCQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQUU7d0JBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHOzRCQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7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LENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDOUUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUksUUFBUSxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFLLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDOUUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUksU0FBUyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2RixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUksT0FBTyxHQUFHLENBQUMsRUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQU8sT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2RixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUksT0FBTyxHQUFHLENBQUMsRUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFLLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBSyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoSyxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUksT0FBTyxHQUFHLENBQUMsRUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQWMsT0FBTyxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pLLHFLQUFxSztZQUNySyxzS0FBc0s7WUFDdEssTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUMxRixN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LENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQVEsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNySSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBUSxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5SSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBUSxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JJLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFRLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlJ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QVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkYsS0FBSyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFB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QUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0csS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNGLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzRixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXJCLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQixZQUFZLENBQUMsTUFBTSxTQUFTLEdBQTBCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDO1lBQzFGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzFCO2dCQUNJLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsb0JBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO29CQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXJCLFFBQVE7WUFDUixNQUFNLFNBQVMsR0FBcUIsSUFBSSxlQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9DLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0IsMkhBQTJIO1lBQzNILEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNqQyxNQUFNLEtBQUssR0FBZSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0MsTUFBTSxhQUFhLEdBQVcsRUFBRSxDQUFDO1lBQ2pDLE1BQU0saUJBQWlCLEdBQVcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFDdEM7Z0JBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sY0FBYyxHQUFXLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sY0FBYyxHQUFXLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsb0RBQW9EO2dCQUN2SSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxJQUFJLGNBQWMsR0FBRyxpQkFBaUI7b0JBQzNELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pCO1lBRUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUMxQjtZQUNJLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDM0I7Z0JBQ0ksTUFBTSxhQUFhLEdBQUcseUJBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1QyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUNoRDtvQkFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQ2pDO3dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQzt3QkFDakUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQ2xDO3dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQ2xDO3dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUN0QjtvQkFDRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEVBQzdDO2dCQUNJLDJHQUEyRztnQkFDM0csWUFBWSxDQUFDLE1BQU0sYUFBYSxHQUE2QixNQUFNLENBQUMsZUFBZSxFQUFFLHlCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuSCxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pKLEtBQUssQ0FBQyxhQUFhLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3SixLQUFLLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLHlCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzlKLEtBQUssQ0FBQyxhQUFhLENBQUMsK0NBQStDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUNuTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyx5QkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7b0JBQ2pFLGFBQWEsQ0FBQyxLQUFLLElBQUkseUJBQWdCLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xFLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQywwQ0FBMEMsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSx5QkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkssYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMseUJBQWdCLENBQUMsa0JBQWtCLEdBQUcseUJBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDN0csSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLHlCQUFnQixDQUFDLG1CQUFtQixDQUFDO29CQUMvSixhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyx5QkFBZ0IsQ0FBQyxrQkFBa0IsR0FBRyx5QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUV6RyxVQUFVO2dCQUNWLE1BQU0sS0FBSyxHQUFHLENBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7Z0JBQzlELFlBQVksQ0FBQyxNQUFNLE1BQU0sR0FBc0IsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7Z0JBQ3JILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDbkQ7b0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFBRTtvQkFDaEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDbEY7Z0JBRUQsMklBQTJJO2dCQUMzSSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDdEQ7b0JBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG9CQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDL0MsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQ3pHOzRCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dDQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3lCQUN0QjtvQkFDTCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1lBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUM1QjtZQUNJLFVBQVUsQ0FBQyw0TUFBNE0sQ0FBQyxDQUFDO1lBQ3pOLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuQjtnQkFDSSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtvQkFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsZ0VBQWdFO1lBQ2hFLE1BQU0sSUFBSSxHQUFXLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QyxNQUFNLE1BQU0sR0FBa0IsQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7WUFDOUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLG9CQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXZGLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksZUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxlQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlGLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFakIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFDckM7Z0JBQ0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7WUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsRUFDN0M7WUFDSSxVQUFVLENBQUMsZ05BQWdOLENBQUMsQ0FBQztZQUU3TixLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyQixLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFB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