// dear imgui, v1.71
// (demo code)
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
import * as ImGui from "./imgui";
import { IMGUI_VERSION } from "./imgui";
import { IM_ASSERT } from "./imgui";
import { IM_ARRAYSIZE } from "./imgui";
import { ImStringBuffer } from "./imgui";
import { ImGuiCol } from "./imgui";
import { ImGuiColorEditFlags } from "./imgui";
import { ImGuiCond } from "./imgui";
import { ImGuiFocusedFlags } from "./imgui";
import { ImGuiHoveredFlags } from "./imgui";
import { ImGuiInputTextFlags } from "./imgui";
import { ImGuiMouseCursor } from "./imgui";
import { ImGuiSelectableFlags } from "./imgui";
import { ImGuiStyleVar } from "./imgui";
import { ImGuiTreeNodeFlags } from "./imgui";
import { ImGuiWindowFlags } from "./imgui";
import { ImGuiTabBarFlags } from "./imgui";
import { ImDrawCornerFlags } from "./imgui";
import { ImVector } from "./imgui";
import { ImVec2 } from "./imgui";
import { ImVec4 } from "./imgui";
import { IM_COL32 } from "./imgui";
import { ImColor } from "./imgui";
import { ImGuiStyle } from "./imgui";
import { ImGuiTextFilter } from "./imgui";
import { ImGuiTextBuffer } from "./imgui";
import { ImGuiListClipper } from "./imgui";
import { ImGuiDir } from "./imgui";
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
export function ShowUserGuide() {
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
export function ShowDemoWindow(p_open = null) {
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
        window_flags |= ImGuiWindowFlags.NoTitleBar;
    if (no_scrollbar.value)
        window_flags |= ImGuiWindowFlags.NoScrollbar;
    if (!no_menu.value)
        window_flags |= ImGuiWindowFlags.MenuBar;
    if (no_move.value)
        window_flags |= ImGuiWindowFlags.NoMove;
    if (no_resize.value)
        window_flags |= ImGuiWindowFlags.NoResize;
    if (no_collapse.value)
        window_flags |= ImGuiWindowFlags.NoCollapse;
    if (no_nav.value)
        window_flags |= ImGuiWindowFlags.NoNav;
    if (no_background.value)
        window_flags |= ImGuiWindowFlags.NoBackground;
    if (no_bring_to_front.value)
        window_flags |= ImGuiWindowFlags.NoBringToFrontOnFocus;
    if (no_close.value)
        p_open = null; // Don't pass our bool* to Begin
    // We specify a default position/size in case there's no data in the .ini file. Typically this isn't required! We only do it to make the Demo applications a little more welcoming.
    ImGui.SetNextWindowPos(new ImVec2(650, 20), ImGui.Cond.FirstUseEver);
    ImGui.SetNextWindowSize(new ImVec2(550, 680), ImGuiCond.FirstUseEver);
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
    ImGui.Text(`dear imgui says hello. (${IMGUI_VERSION})`);
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
            ImGui.PushStyleColor(ImGuiCol.Button, ImColor.HSV(i / 7.0, 0.6, 0.6));
            ImGui.PushStyleColor(ImGuiCol.ButtonHovered, ImColor.HSV(i / 7.0, 0.7, 0.7));
            ImGui.PushStyleColor(ImGuiCol.ButtonActive, ImColor.HSV(i / 7.0, 0.8, 0.8));
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
        if (ImGui.ArrowButton("##left", ImGuiDir.Left)) {
            counter.value--;
        }
        ImGui.SameLine(0.0, spacing);
        if (ImGui.ArrowButton("##right", ImGuiDir.Right)) {
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
            ImGui.PlotLines("Curve", arr.value, IM_ARRAYSIZE(arr.value));
            ImGui.EndTooltip();
        }
        ImGui.Separator();
        ImGui.LabelText("label", "Value");
        {
            // Using the _simplified_ one-liner Combo() api here
            // See "Combo" section for examples of how to use the more complete BeginCombo()/EndCombo() api.
            const items = ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE", "FFFF", "GGGG", "HHHH", "IIII", "JJJJ", "KKKK", "LLLLLLL", "MMMM", "OOOOOOO"];
            /* static */ const item_current = STATIC("item_current#389", 0);
            ImGui.Combo("combo", (value = item_current.value) => item_current.value = value, items, IM_ARRAYSIZE(items));
            ImGui.SameLine();
            HelpMarker("Refer to the \"Combo\" section below for an explanation of the full BeginCombo/EndCombo API, and demonstration of various flags.\n");
        }
        {
            /* static */ const str0 = STATIC("str0", new ImStringBuffer(128, "Hello, world!"));
            ImGui.InputText("input text", str0.value, IM_ARRAYSIZE(str0.value));
            ImGui.SameLine();
            HelpMarker("USER:\nHold SHIFT or use mouse to select text.\n" + "CTRL+Left/Right to word jump.\n" + "CTRL+A or double-click to select all.\n" + "CTRL+X,CTRL+C,CTRL+V clipboard.\n" + "CTRL+Z,CTRL+Y undo/redo.\n" + "ESCAPE to revert.\n\nPROGRAMMER:\nYou can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputText() to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example (this is not demonstrated in imgui_demo.cpp).");
            /* static */ const str1 = STATIC("str1", new ImStringBuffer(128, ""));
            ImGui.InputTextWithHint("input text (w/ hint)", "enter text here", str1.value, IM_ARRAYSIZE(str1.value));
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
            ImGui.ListBox("listbox\n(single select)", (value = listbox_item_current.value) => listbox_item_current.value = value, listbox_items, IM_ARRAYSIZE(listbox_items), 4);
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
                    ImGui.SetNextItemOpen(true, ImGuiCond.Once);
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
            ImGui.PushStyleVar(ImGuiStyleVar.IndentSpacing, ImGui.GetFontSize() * 3); // Increase spacing to differentiate leaves from expanded contents.
            for (let i = 0; i < 6; i++) {
                // Disable the default open on single-click behavior and pass in Selected flag according to our selection state.
                let node_flags = ImGuiTreeNodeFlags.OpenOnArrow | ImGuiTreeNodeFlags.OpenOnDoubleClick;
                if (selection_mask.value & (1 << i))
                    node_flags |= ImGuiTreeNodeFlags.Selected;
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
                    node_flags |= ImGuiTreeNodeFlags.Leaf | ImGuiTreeNodeFlags.NoTreePushOnOpen; // ImGuiTreeNodeFlags.Bullet
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
            ImGui.TextColored(new ImVec4(1.0, 0.0, 1.0, 1.0), "Pink");
            ImGui.TextColored(new ImVec4(1.0, 1.0, 0.0, 1.0), "Yellow");
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
            ImGui.GetWindowDrawList().AddRectFilled(new ImVec2(pos.x + wrap_width.value, pos.y), new ImVec2(pos.x + wrap_width.value + 10, pos.y + ImGui.GetTextLineHeight()), IM_COL32(255, 0, 255, 255));
            ImGui.PushTextWrapPos(ImGui.GetCursorPos().x + wrap_width.value);
            ImGui.Text(`The lazy dog is a good dog. This paragraph is made to fit within ${wrap_width.value.toFixed(0)} pixels. Testing a 1 character word. The quick brown fox jumps over the lazy dog.`);
            ImGui.GetWindowDrawList().AddRect(ImGui.GetItemRectMin(), ImGui.GetItemRectMax(), IM_COL32(255, 255, 0, 255));
            ImGui.PopTextWrapPos();
            ImGui.Text("Test paragraph 2:");
            pos = ImGui.GetCursorScreenPos();
            ImGui.GetWindowDrawList().AddRectFilled(new ImVec2(pos.x + wrap_width.value, pos.y), new ImVec2(pos.x + wrap_width.value + 10, pos.y + ImGui.GetTextLineHeight()), IM_COL32(255, 0, 255, 255));
            ImGui.PushTextWrapPos(ImGui.GetCursorPos().x + wrap_width.value);
            ImGui.Text("aaaaaaaa bbbbbbbb, c cccccccc,dddddddd. d eeeeeeee   ffffffff. gggggggg!hhhhhhhh");
            ImGui.GetWindowDrawList().AddRect(ImGui.GetItemRectMin(), ImGui.GetItemRectMax(), IM_COL32(255, 255, 0, 255));
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
            /* static */ const buf = STATIC("buf", new ImStringBuffer(32, "日本語"));
            //static char buf[32] = u8"NIHONGO"; // <- this is how you would write it with C++11, using real kanjis
            ImGui.InputText("UTF-8 input", buf.value, IM_ARRAYSIZE(buf.value));
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
        ImGui.Image(my_tex_id, new ImVec2(my_tex_w, my_tex_h), new ImVec2(0, 0), new ImVec2(1, 1), new ImVec4(1.0, 1.0, 1.0, 1.0), new ImVec4(1.0, 1.0, 1.0, 0.5));
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
            const uv0 = new ImVec2((region_x) / my_tex_w, (region_y) / my_tex_h);
            const uv1 = new ImVec2((region_x + region_sz) / my_tex_w, (region_y + region_sz) / my_tex_h);
            ImGui.Image(my_tex_id, new ImVec2(region_sz * zoom, region_sz * zoom), uv0, uv1, new ImColor(255, 255, 255, 255).toImVec4(), new ImColor(255, 255, 255, 128).toImVec4());
            ImGui.EndTooltip();
        }
        ImGui.TextWrapped("And now some textured buttons..");
        /* static */ const pressed_count = STATIC("pressed_count", 0);
        for (let i = 0; i < 8; i++) {
            ImGui.PushID(i);
            const frame_padding = -1 + i; // -1 = uses default padding
            if (ImGui.ImageButton(my_tex_id, new ImVec2(32, 32), new ImVec2(0, 0), new ImVec2(32.0 / my_tex_w, 32 / my_tex_h), frame_padding, new ImVec4(0, 0, 0, 1)))
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
            for (let n = 0; n < IM_ARRAYSIZE(items); n++) {
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
        ImGui.Combo("combo 3 (array)", (value = item_current_3.value) => item_current_3.value = value, items, IM_ARRAYSIZE(items));
        // Simplified one-liner Combo() using an accessor function
        // struct FuncHolder { static bool ItemGetter(void* data, int idx, const char** out_str) { *out_str = ((const char**)data)[idx]; return true; } };
        class FuncHolder {
            static ItemGetter(data, idx, out_str) { out_str[0] = data[idx]; return true; }
            ;
        }
        /* static */ const item_current_4 = STATIC("item_current_4", 0);
        ImGui.Combo("combo 4 (function)", (value = item_current_4.value) => item_current_4.value = value, FuncHolder.ItemGetter, items, IM_ARRAYSIZE(items));
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
            if (ImGui.Selectable("5. I am double clickable", selection.value[4], ImGuiSelectableFlags.AllowDoubleClick))
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
                if (ImGui.Selectable("Sailor", (value = selected.value[i]) => selected.value[i] = value, 0, new ImVec2(50, 50))) {
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
                    const alignment = new ImVec2(x / 2.0, y / 2.0);
                    // char name[32];
                    // sprintf(name, "(%.1f,%.1f)", alignment.x, alignment.y);
                    const name = `(${alignment.x.toFixed(1)},${alignment.y.toFixed(1)})`;
                    if (x > 0)
                        ImGui.SameLine();
                    ImGui.PushStyleVar(ImGuiStyleVar.SelectableTextAlign, alignment);
                    // ImGui.Selectable(name, &selected[3*y+x], ImGuiSelectableFlags_None, ImVec2(80,80));
                    ImGui.Selectable(name, (value = selected.value[3 * y + x]) => selected.value[3 * y + x] = value, ImGuiSelectableFlags.None, new ImVec2(80, 80));
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
            /* static */ const text = STATIC("text", new ImStringBuffer(1024 * 16, "/*\n" +
                " The Pentium F00F bug, shorthand for F0 0F C7 C8,\n" +
                " the hexadecimal encoding of one offending instruction,\n" +
                " more formally, the invalid operand with locked CMPXCHG8B\n" +
                " instruction bug, is a design flaw in the majority of\n" +
                " Intel Pentium, Pentium MMX, and Pentium OverDrive\n" +
                " processors (all in the P5 microarchitecture).\n" +
                "*/\n\n" +
                "label:\n" +
                "\tlock cmpxchg8b eax\n"));
            /* static */ const flags = STATIC("flags", ImGuiInputTextFlags.AllowTabInput);
            HelpMarker("You can use the ImGuiInputTextFlags_CallbackResize facility if you need to wire InputTextMultiline() to a dynamic string type. See misc/cpp/imgui_stdlib.h for an example. (This is not demonstrated in imgui_demo.cpp)");
            ImGui.CheckboxFlags("ImGuiInputTextFlags_ReadOnly", (value = flags.value) => flags.value = value, ImGuiInputTextFlags.ReadOnly);
            ImGui.CheckboxFlags("ImGuiInputTextFlags_AllowTabInput", (value = flags.value) => flags.value = value, ImGuiInputTextFlags.AllowTabInput);
            ImGui.CheckboxFlags("ImGuiInputTextFlags_CtrlEnterForNewLine", (value = flags.value) => flags.value = value, ImGuiInputTextFlags.CtrlEnterForNewLine);
            ImGui.InputTextMultiline("##source", text.value, IM_ARRAYSIZE(text.value), new ImVec2(-1.0, ImGui.GetTextLineHeight() * 16), flags.value);
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Filtered Text Input")) {
            /* static */ const buf1 = STATIC("buf1", new ImStringBuffer(64, ""));
            ImGui.InputText("default", buf1.value, IM_ARRAYSIZE(buf1.value));
            /* static */ const buf2 = STATIC("buf2", new ImStringBuffer(64, ""));
            ImGui.InputText("decimal", buf2.value, IM_ARRAYSIZE(buf2.value), ImGuiInputTextFlags.CharsDecimal);
            /* static */ const buf3 = STATIC("buf3", new ImStringBuffer(64, ""));
            ImGui.InputText("hexadecimal", buf3.value, IM_ARRAYSIZE(buf3.value), ImGuiInputTextFlags.CharsHexadecimal | ImGuiInputTextFlags.CharsUppercase);
            /* static */ const buf4 = STATIC("buf4", new ImStringBuffer(64, ""));
            ImGui.InputText("uppercase", buf4.value, IM_ARRAYSIZE(buf4.value), ImGuiInputTextFlags.CharsUppercase);
            /* static */ const buf5 = STATIC("buf5", new ImStringBuffer(64, ""));
            ImGui.InputText("no blank", buf5.value, IM_ARRAYSIZE(buf5.value), ImGuiInputTextFlags.CharsNoBlank);
            class TextFilters {
                static FilterImGuiLetters(data) { if (data.EventChar < 256 && /[imgui]/.test(String.fromCharCode(data.EventChar)))
                    return 0; return 1; }
            }
            /* static */ const buf6 = STATIC("buf6", new ImStringBuffer(64, ""));
            ImGui.InputText("\"imgui\" letters", buf6.value, IM_ARRAYSIZE(buf6.value), ImGuiInputTextFlags.CallbackCharFilter, TextFilters.FilterImGuiLetters);
            ImGui.Text("Password input");
            /* static */ const bufpass = STATIC("bufpass", new ImStringBuffer(64, "password123"));
            ImGui.InputText("password", bufpass.value, IM_ARRAYSIZE(bufpass.value), ImGuiInputTextFlags.Password | ImGuiInputTextFlags.CharsNoBlank);
            ImGui.SameLine();
            HelpMarker("Display all characters as '*'.\nDisable clipboard cut and copy.\nDisable logging.\n");
            ImGui.InputText("password (clear)", bufpass.value, IM_ARRAYSIZE(bufpass.value), ImGuiInputTextFlags.CharsNoBlank);
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
        ImGui.PlotLines("Frame Times", arr.value, IM_ARRAYSIZE(arr.value));
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
            values_offset.value = (values_offset.value + 1) % IM_ARRAYSIZE(values.value);
            phase.value += 0.10 * values_offset.value;
            refresh_time.value += 1.0 / 60.0;
        }
        ImGui.PlotLines("Lines", values.value, IM_ARRAYSIZE(values.value), values_offset.value, "avg 0.0", -1.0, 1.0, new ImVec2(0, 80));
        ImGui.PlotHistogram("Histogram", arr.value, IM_ARRAYSIZE(arr.value), 0, null, 0.0, 1.0, new ImVec2(0, 80));
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
        ImGui.PlotLines("Lines", func, null, display_count.value, 0, null, -1.0, 1.0, new ImVec2(0, 80));
        ImGui.PlotHistogram("Histogram", func, null, display_count.value, 0, null, -1.0, 1.0, new ImVec2(0, 80));
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
        ImGui.ProgressBar(progress.value, new ImVec2(0.0, 0.0));
        ImGui.SameLine(0.0, ImGui.GetStyle().ItemInnerSpacing.x);
        ImGui.Text("Progress Bar");
        const progress_saturated = (progress.value < 0.0) ? 0.0 : (progress.value > 1.0) ? 1.0 : progress.value;
        const buf = `${(progress_saturated * 1753).toFixed(0)}/${1753}`;
        ImGui.ProgressBar(progress.value, new ImVec2(0., 0.), buf);
        ImGui.TreePop();
    }
    if (ImGui.TreeNode("Color/Picker Widgets")) {
        /* static */ const color = STATIC("color#863", new ImVec4(114.0 / 255.0, 144.0 / 255.0, 154.0 / 255.0, 200.0 / 255.0));
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
        const misc_flags = (hdr.value ? ImGuiColorEditFlags.HDR : 0) | (drag_and_drop.value ? 0 : ImGuiColorEditFlags.NoDragDrop) | (alpha_half_preview.value ? ImGuiColorEditFlags.AlphaPreviewHalf : (alpha_preview.value ? ImGuiColorEditFlags.AlphaPreview : 0)) | (options_menu.value ? 0 : ImGuiColorEditFlags.NoOptions);
        ImGui.Text("Color widget:");
        ImGui.SameLine();
        HelpMarker("Click on the colored square to open a color picker.\nCTRL+click on individual component to input value.\n");
        ImGui.ColorEdit3("MyColor##1", color.value, misc_flags);
        ImGui.Text("Color widget HSV with Alpha:");
        ImGui.ColorEdit4("MyColor##2", color.value, ImGuiColorEditFlags.DisplayHSV | misc_flags);
        ImGui.Text("Color widget with Float Display:");
        ImGui.ColorEdit4("MyColor##2f", color.value, ImGuiColorEditFlags.Float | misc_flags);
        ImGui.Text("Color button with Picker:");
        ImGui.SameLine();
        HelpMarker("With the ImGuiColorEditFlags.NoInputs flag you can hide all the slider/text inputs.\nWith the ImGuiColorEditFlags.NoLabel flag you can pass a non-empty label which will only be used for the tooltip and picker popup.");
        ImGui.ColorEdit4("MyColor##3", color.value, ImGuiColorEditFlags.NoInputs | ImGuiColorEditFlags.NoLabel | misc_flags);
        ImGui.Text("Color button with Custom Picker Popup:");
        // Generate a dummy default palette. The palette will persist and can be edited.
        /* static */ const saved_palette_init = STATIC("saved_palette_init", true);
        /* static */ const saved_palette = STATIC("saved_palette", []);
        if (saved_palette_init.value) {
            for (let n = 0; n < 32; n++) {
                saved_palette.value[n] = new ImVec4();
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
        /* static */ const backup_color = STATIC("backup_color", new ImVec4());
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
            ImGui.ColorPicker4("##picker", color.value, misc_flags | ImGuiColorEditFlags.NoSidePreview | ImGuiColorEditFlags.NoSmallPreview);
            ImGui.SameLine();
            ImGui.BeginGroup(); // Lock X position
            ImGui.Text("Current");
            ImGui.ColorButton("##current", color.value, ImGuiColorEditFlags.NoPicker | ImGuiColorEditFlags.AlphaPreviewHalf, new ImVec2(60, 40));
            ImGui.Text("Previous");
            if (ImGui.ColorButton("##previous", backup_color.value, ImGuiColorEditFlags.NoPicker | ImGuiColorEditFlags.AlphaPreviewHalf, new ImVec2(60, 40)))
                color.value.Copy(backup_color.value);
            ImGui.Separator();
            ImGui.Text("Palette");
            for (let n = 0; n < IM_ARRAYSIZE(saved_palette.value); n++) {
                ImGui.PushID(n);
                if ((n % 8) !== 0)
                    ImGui.SameLine(0.0, ImGui.GetStyle().ItemSpacing.y);
                if (ImGui.ColorButton("##palette", saved_palette.value[n], ImGuiColorEditFlags.NoAlpha | ImGuiColorEditFlags.NoPicker | ImGuiColorEditFlags.NoTooltip, new ImVec2(20, 20)))
                    color.value.Copy(new ImVec4(saved_palette.value[n].x, saved_palette.value[n].y, saved_palette.value[n].z, color.value.w)); // Preserve alpha!
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
        ImGui.ColorButton("MyColor##3c", color.value, misc_flags, new ImVec2(80, 80));
        ImGui.Text("Color picker:");
        /* static */ const alpha = STATIC("alpha", true);
        /* static */ const alpha_bar = STATIC("alpha_bar", true);
        /* static */ const side_preview = STATIC("side_preview", true);
        /* static */ const ref_color = STATIC("ref_color", false);
        /* static */ const ref_color_v = STATIC("ref_color_v", new ImVec4(1.0, 0.0, 1.0, 0.5));
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
                ImGui.ColorEdit4("##RefColor", ref_color_v.value, ImGuiColorEditFlags.NoInputs | misc_flags);
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
            flags |= ImGuiColorEditFlags.NoAlpha; // This is by default if you call ColorPicker3() instead of ColorPicker4()
        if (alpha_bar.value)
            flags |= ImGuiColorEditFlags.AlphaBar;
        if (!side_preview.value)
            flags |= ImGuiColorEditFlags.NoSidePreview;
        if (picker_mode.value === 1)
            flags |= ImGuiColorEditFlags.PickerHueBar;
        if (picker_mode.value === 2)
            flags |= ImGuiColorEditFlags.PickerHueWheel;
        if (display_mode.value === 1)
            flags |= ImGuiColorEditFlags.NoInputs; // Disable all RGB/HSV/Hex displays
        if (display_mode.value === 2)
            flags |= ImGuiColorEditFlags.DisplayRGB; // Override display mode
        if (display_mode.value === 3)
            flags |= ImGuiColorEditFlags.DisplayHSV;
        if (display_mode.value === 4)
            flags |= ImGuiColorEditFlags.DisplayHex;
        ImGui.ColorPicker4("MyColor##4", color.value, flags, ref_color.value ? ref_color_v.value : null);
        ImGui.Text("Programmatically set defaults:");
        ImGui.SameLine();
        HelpMarker("SetColorEditOptions() is designed to allow you to set boot-time default.\nWe don't have Push/Pop functions because you can force options on a per-widget basis if needed, and the user can change non-forced ones with the options menu.\nWe don't have a getter to avoid encouraging you to persistently save values that aren't forward-compatible.");
        if (ImGui.Button("Default: Uint8 + HSV + Hue Bar"))
            ImGui.SetColorEditOptions(ImGuiColorEditFlags.Uint8 | ImGuiColorEditFlags.DisplayHSV | ImGuiColorEditFlags.PickerHueBar);
        if (ImGui.Button("Default: Float + HDR + Hue Wheel"))
            ImGui.SetColorEditOptions(ImGuiColorEditFlags.Float | ImGuiColorEditFlags.HDR | ImGuiColorEditFlags.PickerHueWheel);
        // HSV encoded support (to avoid RGB<>HSV round trips and singularities when S==0 or V==0)
        /* static */ const color_stored_as_hsv = STATIC("color_stored_as_hsv", new ImVec4(0.23, 1.0, 1.0, 1.0));
        ImGui.Spacing();
        ImGui.Text("HSV encoded colors");
        ImGui.SameLine();
        HelpMarker("By default, colors are given to ColorEdit and ColorPicker in RGB, but ImGuiColorEditFlags_InputHSV allows you to store colors as HSV and pass them to ColorEdit and ColorPicker as HSV. This comes with the added benefit that you can manipulate hue values with the picker even when saturation or value are zero.");
        ImGui.Text("Color widget with InputHSV:");
        ImGui.ColorEdit4("HSV shown as RGB##1", color_stored_as_hsv.value, ImGuiColorEditFlags.DisplayRGB | ImGuiColorEditFlags.InputHSV | ImGuiColorEditFlags.Float);
        ImGui.ColorEdit4("HSV shown as HSV##1", color_stored_as_hsv.value, ImGuiColorEditFlags.DisplayHSV | ImGuiColorEditFlags.InputHSV | ImGuiColorEditFlags.Float);
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
        ImGui.InputScalar("input s8 hex", s8_v.value, inputs_step.value ? s8_one : null, null, "%08X", ImGuiInputTextFlags.CharsHexadecimal);
        ImGui.InputScalar("input s16", s16_v.value, inputs_step.value ? s16_one : null, null, "%d");
        ImGui.InputScalar("input s16 hex", s16_v.value, inputs_step.value ? s16_one : null, null, "%08X", ImGuiInputTextFlags.CharsHexadecimal);
        ImGui.InputScalar("input s32", s32_v.value, inputs_step.value ? s32_one : null, null, "%d");
        ImGui.InputScalar("input s32 hex", s32_v.value, inputs_step.value ? s32_one : null, null, "%08X", ImGuiInputTextFlags.CharsHexadecimal);
        ImGui.InputScalar("input u32", u32_v.value, inputs_step.value ? u32_one : null, null, "%u");
        ImGui.InputScalar("input u32 hex", u32_v.value, inputs_step.value ? u32_one : null, null, "%08X", ImGuiInputTextFlags.CharsHexadecimal);
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
        ImGui.PushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(spacing, spacing));
        /* static */ const int_value = STATIC("int_value", 0);
        ImGui.VSliderInt("##int", new ImVec2(18, 160), (value = int_value.value) => int_value.value = value, 0, 5);
        ImGui.SameLine();
        /* static */ const values = STATIC("values#1072", [0.0, 0.60, 0.35, 0.9, 0.70, 0.20, 0.0]);
        ImGui.PushID("set1");
        for (let i = 0; i < 7; i++) {
            if (i > 0)
                ImGui.SameLine();
            ImGui.PushID(i);
            ImGui.PushStyleColor(ImGuiCol.FrameBg, ImColor.HSV(i / 7.0, 0.5, 0.5));
            ImGui.PushStyleColor(ImGuiCol.FrameBgHovered, ImColor.HSV(i / 7.0, 0.6, 0.5));
            ImGui.PushStyleColor(ImGuiCol.FrameBgActive, ImColor.HSV(i / 7.0, 0.7, 0.5));
            ImGui.PushStyleColor(ImGuiCol.SliderGrab, ImColor.HSV(i / 7.0, 0.9, 0.9));
            ImGui.VSliderFloat("##v", new ImVec2(18, 160), (value = values.value[i]) => values.value[i] = value, 0.0, 1.0, "");
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
        const small_slider_size = new ImVec2(18, (160.0 - (rows - 1) * spacing) / rows);
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
            ImGui.PushStyleVar(ImGuiStyleVar.GrabMinSize, 40);
            ImGui.VSliderFloat("##v", new ImVec2(40, 160), (value = values.value[i]) => values.value[i] = value, 0.0, 1.0, "%.2f\nsec");
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
            for (let n = 0; n < IM_ARRAYSIZE(names.value); n++) {
                ImGui.PushID(n);
                if ((n % 3) != 0)
                    ImGui.SameLine();
                ImGui.Button(names.value[n], new ImVec2(60, 60));
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
            ret = ImGui.ListBox("ITEM: ListBox", (value = current.value) => current.value = value, items, IM_ARRAYSIZE(items), IM_ARRAYSIZE(items));
        }
        ImGui.BulletText(`Return value = ${ret}\n` +
            `IsItemFocused() = ${ImGui.IsItemFocused()}\n` +
            `IsItemHovered() = ${ImGui.IsItemHovered()}\n` +
            `IsItemHovered(_AllowWhenBlockedByPopup) = ${ImGui.IsItemHovered(ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
            `IsItemHovered(_AllowWhenBlockedByActiveItem) = ${ImGui.IsItemHovered(ImGuiHoveredFlags.AllowWhenBlockedByActiveItem)}\n` +
            `IsItemHovered(_AllowWhenOverlapped) = ${ImGui.IsItemHovered(ImGuiHoveredFlags.AllowWhenOverlapped)}\n` +
            `IsItemhovered(_RectOnly) = ${ImGui.IsItemHovered(ImGuiHoveredFlags.RectOnly)}\n` +
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
            ImGui.BeginChild("outer_child", new ImVec2(0, ImGui.GetFontSize() * 20), true);
        // Testing IsWindowFocused() function with its various flags. Note that the flags can be combined.
        ImGui.BulletText(`IsWindowFocused() = ${ImGui.IsWindowFocused()}\n` +
            `IsWindowFocused(_ChildWindows) = ${ImGui.IsWindowFocused(ImGuiFocusedFlags.ChildWindows)}\n` +
            `IsWindowFocused(_ChildWindows|_RootWindow) = ${ImGui.IsWindowFocused(ImGuiFocusedFlags.ChildWindows | ImGuiFocusedFlags.RootWindow)}\n` +
            `IsWindowFocused(_RootWindow) = ${ImGui.IsWindowFocused(ImGuiFocusedFlags.RootWindow)}\n` +
            `IsWindowFocused(_AnyWindow) = ${ImGui.IsWindowFocused(ImGuiFocusedFlags.AnyWindow)}\n`);
        // Testing IsWindowHovered() function with its various flags. Note that the flags can be combined.
        ImGui.BulletText(`IsWindowHovered() = ${ImGui.IsWindowHovered()}\n` +
            `IsWindowHovered(_AllowWhenBlockedByPopup) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
            `IsWindowHovered(_AllowWhenBlockedByActiveItem) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.AllowWhenBlockedByActiveItem)}\n` +
            `IsWindowHovered(_ChildWindows) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.ChildWindows)}\n` +
            `IsWindowHovered(_ChildWindows|_RootWindow) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.ChildWindows | ImGuiHoveredFlags.RootWindow)}\n` +
            `IsWindowFocused(_ChildWindows|_AllowWhenBlockedByPopup) = ${ImGui.IsWindowFocused(ImGuiHoveredFlags.ChildWindows | ImGuiHoveredFlags.AllowWhenBlockedByPopup)}\n` +
            `IsWindowHovered(_RootWindow) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.RootWindow)}\n` +
            `IsWindowHovered(_AnyWindow) = ${ImGui.IsWindowHovered(ImGuiHoveredFlags.AnyWindow)}\n`);
        ImGui.BeginChild("child", new ImVec2(0, 50), true);
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
        goto_line = ImGui.InputInt("##Line", (value = line.value) => line.value = value, 0, 0, ImGuiInputTextFlags.EnterReturnsTrue) || goto_line;
        // Child 1: no border, enable horizontal scrollbar
        {
            const window_flags = ImGuiWindowFlags.HorizontalScrollbar | (disable_mouse_wheel.value ? ImGuiWindowFlags.NoScrollWithMouse : 0);
            ImGui.BeginChild("Child1", new ImVec2(ImGui.GetWindowContentRegionWidth() * 0.5, 260), false, window_flags);
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
            const window_flags = (disable_mouse_wheel.value ? ImGuiWindowFlags.NoScrollWithMouse : 0) | (disable_menu.value ? 0 : ImGuiWindowFlags.MenuBar);
            ImGui.PushStyleVar(ImGuiStyleVar.ChildRounding, 5.0);
            ImGui.BeginChild("Child2", new ImVec2(0, 260), true, window_flags);
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
                ImGui.Button(buf, new ImVec2(-1.0, 0.0));
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
            ImGui.PushStyleColor(ImGuiCol.ChildBg, IM_COL32(255, 0, 0, 100));
            ImGui.BeginChild("blah", new ImVec2(200, 100), true, ImGuiWindowFlags.None);
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
        ImGui.TextColored(new ImVec4(1, 1, 0, 1), "Sailor");
        // Adjust spacing
        ImGui.Text("More spacing: Hello");
        ImGui.SameLine(0, 20);
        ImGui.TextColored(new ImVec4(1, 1, 0, 1), "Sailor");
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
        ImGui.Combo("Combo", (value = item.value) => item.value = value, items, IM_ARRAYSIZE(items));
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
            ImGui.ListBox("", (value = selection.value[i]) => selection.value[i] = value, items, IM_ARRAYSIZE(items));
            ImGui.PopID();
            if (ImGui.IsItemHovered())
                ImGui.SetTooltip(`ListBox ${i} hovered`);
        }
        ImGui.PopItemWidth();
        // Dummy
        const button_sz = new ImVec2(40, 40);
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
            const tab_bar_flags = ImGuiTabBarFlags.None;
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
            /* static */ const tab_bar_flags = STATIC("tab_bar_flags", ImGuiTabBarFlags.Reorderable);
            ImGui.CheckboxFlags("ImGuiTabBarFlags_Reorderable", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.Reorderable);
            ImGui.CheckboxFlags("ImGuiTabBarFlags_AutoSelectNewTabs", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.AutoSelectNewTabs);
            ImGui.CheckboxFlags("ImGuiTabBarFlags_TabListPopupButton", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGuiTabBarFlags.TabListPopupButton);
            ImGui.CheckboxFlags("ImGuiTabBarFlags_NoCloseWithMiddleMouseButton", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGui.TabBarFlags.NoCloseWithMiddleMouseButton);
            if ((tab_bar_flags.value & ImGuiTabBarFlags.FittingPolicyMask_) === 0)
                tab_bar_flags.value |= ImGuiTabBarFlags.FittingPolicyDefault_;
            if (ImGui.CheckboxFlags("ImGuiTabBarFlags_FittingPolicyResizeDown", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGuiTabBarFlags.FittingPolicyResizeDown))
                tab_bar_flags.value &= ~(ImGuiTabBarFlags.FittingPolicyMask_ ^ ImGuiTabBarFlags.FittingPolicyResizeDown);
            if (ImGui.CheckboxFlags("ImGuiTabBarFlags_FittingPolicyScroll", (value = tab_bar_flags.value) => tab_bar_flags.value = value, ImGuiTabBarFlags.FittingPolicyScroll))
                tab_bar_flags.value &= ~(ImGuiTabBarFlags.FittingPolicyMask_ ^ ImGuiTabBarFlags.FittingPolicyScroll);
            // Tab Bar
            const names = ["Artichoke", "Beetroot", "Celery", "Daikon"];
            /* static */ const opened = STATIC("opened", [true, true, true, true]); // Persistent user state
            for (let n = 0; n < IM_ARRAYSIZE(opened.value); n++) {
                if (n > 0) {
                    ImGui.SameLine();
                }
                ImGui.Checkbox(names[n], (value = opened.value[n]) => opened.value[n] = value);
            }
            // Passing a bool* to BeginTabItem() is similar to passing one to Begin(): the underlying bool will be set to false when the tab is closed.
            if (ImGui.BeginTabBar("MyTabBar", tab_bar_flags.value)) {
                for (let n = 0; n < IM_ARRAYSIZE(opened.value); n++)
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
        ImGui.PlotHistogram("##values", values, IM_ARRAYSIZE(values), 0, null, 0.0, 1.0, size);
        ImGui.Button("ACTION", new ImVec2((size.x - ImGui.GetStyle().ItemSpacing.x) * 0.5, size.y));
        ImGui.SameLine();
        ImGui.Button("REACTION", new ImVec2((size.x - ImGui.GetStyle().ItemSpacing.x) * 0.5, size.y));
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
            const child_flags = ImGuiWindowFlags.MenuBar;
            ImGui.BeginChild(ImGui.GetID(i), new ImVec2(child_w, 200.0), true, child_flags);
            if (scroll_to_off)
                ImGui.SetScrollY(scroll_to_off_px.value);
            if (scroll_to_pos)
                ImGui.SetScrollFromPosY(ImGui.GetCursorStartPos().y + scroll_to_pos_px.value, i * 0.25);
            for (let line = 0; line < 100; line++) {
                if (track.value && line === track_line.value) {
                    ImGui.TextColored(new ImVec4(1, 1, 0, 1), `Line ${line}`);
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
        ImGui.PushStyleVar(ImGuiStyleVar.FrameRounding, 3.0);
        ImGui.PushStyleVar(ImGuiStyleVar.FramePadding, new ImVec2(2.0, 1.0));
        ImGui.BeginChild("scrolling", new ImVec2(0, ImGui.GetFrameHeightWithSpacing() * 7 + 30), true, ImGuiWindowFlags.HorizontalScrollbar);
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
                ImGui.PushStyleColor(ImGuiCol.Button, ImColor.HSV(hue, 0.6, 0.6));
                ImGui.PushStyleColor(ImGuiCol.ButtonHovered, ImColor.HSV(hue, 0.7, 0.7));
                ImGui.PushStyleColor(ImGuiCol.ButtonActive, ImColor.HSV(hue, 0.8, 0.8));
                ImGui.Button(label, new ImVec2(40.0 + Math.sin(line + n) * 20.0, 0.0));
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
        /* static */ const size = STATIC("size", new ImVec2(100, 100)), offset = STATIC("offset", new ImVec2(50, 20));
        ImGui.TextWrapped("On a per-widget basis we are occasionally clipping text CPU-side if it won't fit in its frame. Otherwise we are doing coarser clipping + passing a scissor rectangle to the renderer. The system is designed to try minimizing both execution and CPU/GPU rendering cost.");
        ImGui.DragFloat2("size", size.value, 0.5, 1.0, 200.0, "%.0f");
        ImGui.TextWrapped("(Click and drag)");
        const pos = ImGui.GetCursorScreenPos();
        const clip_rect = new ImVec4(pos.x, pos.y, pos.x + size.value.x, pos.y + size.value.y);
        ImGui.InvisibleButton("##dummy", size.value);
        if (ImGui.IsItemActive() && ImGui.IsMouseDragging()) {
            offset.value.x += ImGui.GetIO().MouseDelta.x;
            offset.value.y += ImGui.GetIO().MouseDelta.y;
        }
        ImGui.GetWindowDrawList().AddRectFilled(pos, new ImVec2(pos.x + size.value.x, pos.y + size.value.y), IM_COL32(90, 90, 120, 255));
        ImGui.GetWindowDrawList().AddText(ImGui.GetFont(), ImGui.GetFontSize() * 2.0, new ImVec2(pos.x + offset.value.x, pos.y + offset.value.y), IM_COL32(255, 255, 255, 255), "Line 1 hello\nLine 2 clip me!", null, 0.0, clip_rect);
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
            for (let i = 0; i < IM_ARRAYSIZE(names); i++)
                if (ImGui.Selectable(names[i]))
                    selected_fish.value = i;
            ImGui.EndPopup();
        }
        // Showing a menu with toggles
        if (ImGui.Button("Toggle.."))
            ImGui.OpenPopup("my_toggle_popup");
        if (ImGui.BeginPopup("my_toggle_popup")) {
            for (let i = 0; i < IM_ARRAYSIZE(names); i++) {
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
                for (let i = 0; i < IM_ARRAYSIZE(names); i++) {
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
        /* static */ const name = STATIC("name", new ImStringBuffer(32, "Label1"));
        const buf = `Button: ${name.value.buffer}###Button`; // ### operator override ID ignoring the preceding label
        ImGui.Button(buf);
        if (ImGui.BeginPopupContextItem()) {
            ImGui.Text("Edit name:");
            ImGui.InputText("##edit", name.value, IM_ARRAYSIZE(name.value));
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
        if (ImGui.BeginPopupModal("Delete?", null, ImGuiWindowFlags.AlwaysAutoResize)) {
            ImGui.Text("All those beautiful files will be deleted.\nThis operation cannot be undone!\n\n");
            ImGui.Separator();
            ///* static */ const dummy_i: number = 0;
            //ImGui.Combo("Combo", &dummy_i, "Delete\0Delete harder\0");
            /* static */ const dont_ask_me_next_time = STATIC("dont_ask_me_next_time", false);
            ImGui.PushStyleVar(ImGuiStyleVar.FramePadding, new ImVec2(0, 0));
            ImGui.Checkbox("Don't ask me next time", (value = dont_ask_me_next_time.value) => dont_ask_me_next_time.value = value);
            ImGui.PopStyleVar();
            if (ImGui.Button("OK", new ImVec2(120, 0))) {
                ImGui.CloseCurrentPopup();
            }
            ImGui.SetItemDefaultFocus();
            ImGui.SameLine();
            if (ImGui.Button("Cancel", new ImVec2(120, 0))) {
                ImGui.CloseCurrentPopup();
            }
            ImGui.EndPopup();
        }
        if (ImGui.Button("Stacked modals.."))
            ImGui.OpenPopup("Stacked 1");
        if (ImGui.BeginPopupModal("Stacked 1", null, ImGuiWindowFlags.MenuBar)) {
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
        ImGui.PushStyleVar(ImGuiStyleVar.IndentSpacing, 0.0);
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
            if (ImGui.Selectable(label, selected.value === i, ImGuiSelectableFlags.SpanAllColumns))
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
            ImGui.Button("Button", new ImVec2(-1.0, 0.0));
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
        ImGui.SetNextWindowContentSize(new ImVec2(1500.0, 0.0));
        ImGui.BeginChild("##ScrollingRegion", new ImVec2(0, ImGui.GetFontSize() * 20), false, ImGuiWindowFlags.HorizontalScrollbar);
        ImGui.Columns(10);
        const ITEMS_COUNT = 2000;
        const clipper = new ImGuiListClipper(ITEMS_COUNT); // Also demonstrate using the clipper for large list
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
        /* static */ const filter = STATIC("filter#1864", new ImGuiTextFilter());
        ImGui.Text("Filter usage:\n"
            + "  \"\"         display all lines\n"
            + "  \"xxx\"      display lines containing \"xxx\"\n"
            + "  \"xxx,yyy\"  display lines containing \"xxx\" or \"yyy\"\n"
            + "  \"-xxx\"     hide lines containing \"xxx\"");
        filter.value.Draw();
        const lines = ["aaa1.c", "bbb1.c", "ccc1.c", "aaa2.cpp", "bbb2.cpp", "ccc2.cpp", "abc.h", "hello, world"];
        for (let i = 0; i < IM_ARRAYSIZE(lines); i++)
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
            for (let i = 0; i < IM_ARRAYSIZE(io.MouseDown); i++)
                if (io.MouseDownDuration[i] >= 0.0) {
                    ImGui.SameLine();
                    ImGui.Text(`b${i} (${io.MouseDownDuration[i].toFixed(2)} secs)`);
                }
            ImGui.Text("Mouse clicked:");
            for (let i = 0; i < IM_ARRAYSIZE(io.MouseDown); i++)
                if (ImGui.IsMouseClicked(i)) {
                    ImGui.SameLine();
                    ImGui.Text(`b${i}`);
                }
            ImGui.Text("Mouse dbl-clicked:");
            for (let i = 0; i < IM_ARRAYSIZE(io.MouseDown); i++)
                if (ImGui.IsMouseDoubleClicked(i)) {
                    ImGui.SameLine();
                    ImGui.Text(`b${i}`);
                }
            ImGui.Text("Mouse released:");
            for (let i = 0; i < IM_ARRAYSIZE(io.MouseDown); i++)
                if (ImGui.IsMouseReleased(i)) {
                    ImGui.SameLine();
                    ImGui.Text(`b${i}`);
                }
            ImGui.Text(`Mouse wheel: ${io.MouseWheel.toFixed(1)}`);
            ImGui.Text("Keys down:");
            for (let i = 0; i < IM_ARRAYSIZE(io.KeysDown); i++)
                if (io.KeysDownDuration[i] >= 0.0) {
                    ImGui.SameLine();
                    ImGui.Text(`${i} (0x${i.toString(16)}) (${io.KeysDownDuration[i].toFixed(2)} secs)`);
                }
            ImGui.Text("Keys pressed:");
            for (let i = 0; i < IM_ARRAYSIZE(io.KeysDown); i++)
                if (ImGui.IsKeyPressed(i)) {
                    ImGui.SameLine();
                    ImGui.Text(`${i} (0x${i.toString(16)})`);
                }
            ImGui.Text("Keys release:");
            for (let i = 0; i < IM_ARRAYSIZE(io.KeysDown); i++)
                if (ImGui.IsKeyReleased(i)) {
                    ImGui.SameLine();
                    ImGui.Text(`${i} (0x${i.toString(16)})`);
                }
            ImGui.Text(`Keys mods: ${io.KeyCtrl ? "CTRL " : ""}${io.KeyShift ? "SHIFT " : ""}${io.KeyAlt ? "ALT " : ""}${io.KeySuper ? "SUPER " : ""}`);
            // ImGui.Text("Chars queue:");    for (let i = 0; i < io.InputQueueCharacters.Size; i++) { const c: ImWchar = io.InputQueueCharacters[i]; ImGui.SameLine();  ImGui.Text("\'%c\' (0x%04X)", (c > ' ' && c <= 255) ? (char)c : '?', c); } // FIXME: We should convert 'c' to UTF-8 here but the functions are not public.
            ImGui.Text("NavInputs down:");
            for (let i = 0; i < IM_ARRAYSIZE(io.NavInputs); i++)
                if (io.NavInputs[i] > 0.0) {
                    ImGui.SameLine();
                    ImGui.Text(`[${i}] ${io.NavInputs[i].toFixed(2)}`);
                }
            ImGui.Text("NavInputs pressed:");
            for (let i = 0; i < IM_ARRAYSIZE(io.NavInputs); i++)
                if (io.NavInputsDownDuration[i] === 0.0) {
                    ImGui.SameLine();
                    ImGui.Text(`[${i}]`);
                }
            ImGui.Text("NavInputs duration:");
            for (let i = 0; i < IM_ARRAYSIZE(io.NavInputs); i++)
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
            /* static */ const buf = STATIC("buf1#1921", new ImStringBuffer(32, "dummy"));
            ImGui.InputText("1", buf.value, IM_ARRAYSIZE(buf.value));
            ImGui.InputText("2", buf.value, IM_ARRAYSIZE(buf.value));
            ImGui.InputText("3", buf.value, IM_ARRAYSIZE(buf.value));
            ImGui.PushAllowKeyboardFocus(false);
            ImGui.InputText("4 (tab skip)", buf.value, IM_ARRAYSIZE(buf.value));
            //ImGui.SameLine(); HelpMarker("Use ImGui.PushAllowKeyboardFocus(bool)\nto disable tabbing through certain widgets.");
            ImGui.PopAllowKeyboardFocus();
            ImGui.InputText("5", buf.value, IM_ARRAYSIZE(buf.value));
            ImGui.TreePop();
        }
        if (ImGui.TreeNode("Focus from code")) {
            const focus_1 = ImGui.Button("Focus on 1");
            ImGui.SameLine();
            const focus_2 = ImGui.Button("Focus on 2");
            ImGui.SameLine();
            const focus_3 = ImGui.Button("Focus on 3");
            let has_focus = 0;
            /* static */ const buf = STATIC("buf2#1944", new ImStringBuffer(128, "click on a button to set focus"));
            if (focus_1)
                ImGui.SetKeyboardFocusHere();
            ImGui.InputText("1", buf.value, IM_ARRAYSIZE(buf.value));
            if (ImGui.IsItemActive())
                has_focus = 1;
            if (focus_2)
                ImGui.SetKeyboardFocusHere();
            ImGui.InputText("2", buf.value, IM_ARRAYSIZE(buf.value));
            if (ImGui.IsItemActive())
                has_focus = 2;
            ImGui.PushAllowKeyboardFocus(false);
            if (focus_3)
                ImGui.SetKeyboardFocusHere();
            ImGui.InputText("3 (tab skip)", buf.value, IM_ARRAYSIZE(buf.value));
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
                ImGui.GetForegroundDrawList().AddLine(io.MouseClickedPos[0], io.MousePos, ImGui.GetColorU32(ImGuiCol.Button), 4.0); // Draw a line between the button and the mouse cursor
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
            IM_ASSERT(IM_ARRAYSIZE(mouse_cursors_names) === ImGuiMouseCursor.COUNT);
            ImGui.Text(`Current mouse cursor = ${ImGui.GetMouseCursor()}: ${mouse_cursors_names[ImGui.GetMouseCursor()]}`);
            ImGui.Text("Hover to see mouse cursors:");
            ImGui.SameLine();
            HelpMarker("Your application can render a different mouse cursor based on what ImGui.GetMouseCursor() returns. If software cursor rendering (io.MouseDrawCursor) is set ImGui will draw the right cursor for you, otherwise your backend needs to handle it.");
            for (let i = 0; i < ImGuiMouseCursor.COUNT; i++) {
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
    if (!ImGui.Begin("About Dear ImGui", p_open, ImGuiWindowFlags.AlwaysAutoResize)) {
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
export function ShowStyleSelector(label) {
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
// Demo helper function to select among loaded fonts.
// Here we use the regular BeginCombo()/EndCombo() api which is more the more flexible one.
export function ShowFontSelector(label) {
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
export function ShowStyleEditor(ref = null) {
    // You can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it compares to an internally stored reference)
    const style = ImGui.GetStyle();
    /* static */ const ref_saved_style = STATIC("ref_saved_style", new ImGuiStyle());
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
    if (ImGui.BeginTabBar("##tabs", ImGuiTabBarFlags.None)) {
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
                for (let i = 0; i < ImGuiCol.COUNT; i++) {
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
            /* static */ const filter = STATIC("filter#2223", new ImGuiTextFilter());
            filter.value.Draw("Filter colors", 200);
            /* static */ const alpha_flags = STATIC("alpha_flags", 0);
            ImGui.RadioButton("Opaque", (value = alpha_flags.value) => alpha_flags.value = value, 0);
            ImGui.SameLine();
            ImGui.RadioButton("Alpha", (value = alpha_flags.value) => alpha_flags.value = value, ImGuiColorEditFlags.AlphaPreview);
            ImGui.SameLine();
            ImGui.RadioButton("Both", (value = alpha_flags.value) => alpha_flags.value = value, ImGuiColorEditFlags.AlphaPreviewHalf);
            ImGui.BeginChild("#colors", new ImVec2(0, 300), true, ImGuiWindowFlags.AlwaysVerticalScrollbar | ImGuiWindowFlags.AlwaysHorizontalScrollbar | ImGuiWindowFlags.NavFlattened);
            ImGui.PushItemWidth(-160);
            for (let i = 0; i < ImGuiCol.COUNT; i++) {
                const name = ImGui.GetStyleColorName(i);
                if (!filter.value.PassFilter(name))
                    continue;
                ImGui.PushID(i);
                ImGui.ColorEdit4("##color", style.Colors[i], ImGuiColorEditFlags.AlphaBar | alpha_flags.value);
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
                                    const cell_p1 = new ImVec2(base_pos.x + (n % 16) * (cell_size + cell_spacing), base_pos.y + (0 | (n / 16)) * (cell_size + cell_spacing));
                                    const cell_p2 = new ImVec2(cell_p1.x + cell_size, cell_p1.y + cell_size);
                                    const glyph = font.FindGlyphNoFallback((base + n));
                                    draw_list.AddRect(cell_p1, cell_p2, glyph ? IM_COL32(255, 255, 255, 100) : IM_COL32(255, 255, 255, 50));
                                    if (glyph)
                                        font.RenderChar(draw_list, cell_size, cell_p1, ImGui.GetColorU32(ImGuiCol.Text), (base + n)); // We use ImFont.RenderChar as a shortcut because we don't have UTF-8 conversion functions available to generate a string.
                                    if (glyph && ImGui.IsWindowHovered() && ImGui.IsMouseHoveringRect(cell_p1, cell_p2)) {
                                        ImGui.BeginTooltip();
                                        ImGui.Text(`Codepoint: U+${format_number_hex(base + n, 4).toUpperCase()}`);
                                        ImGui.Separator();
                                        ImGui.Image(ImGui.GetIO().Fonts.TexID, new ImVec2(8 * (glyph.X1 - glyph.X0), 8 * (glyph.Y1 - glyph.Y0)), new ImVec2(glyph.U0, glyph.V0), new ImVec2(glyph.U1, glyph.V1), new ImColor(255, 255, 255, 255).toImVec4(), new ImColor(255, 255, 255, 128).toImVec4());
                                        ImGui.SameLine();
                                        ImGui.BeginGroup();
                                        ImGui.Text(`AdvanceX: ${glyph.AdvanceX.toFixed(1)}`);
                                        ImGui.Text(`Pos: (${glyph.X0.toFixed(2)},${glyph.Y0.toFixed(2)}).(${glyph.X1.toFixed(2)},${glyph.Y1.toFixed(2)})`);
                                        ImGui.Text(`UV: (${glyph.U0.toFixed(3)},${glyph.V0.toFixed(3)}).(${glyph.U1.toFixed(3)},${glyph.V1.toFixed(3)})`);
                                        ImGui.EndGroup();
                                        ImGui.EndTooltip();
                                    }
                                }
                                ImGui.Dummy(new ImVec2((cell_size + cell_spacing) * 16, (cell_size + cell_spacing) * 16));
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
                const tint_col = new ImVec4(1.0, 1.0, 1.0, 1.0);
                const border_col = new ImVec4(1.0, 1.0, 1.0, 0.5);
                ImGui.Image(atlas.TexID, new ImVec2(atlas.TexWidth, atlas.TexHeight), new ImVec2(0, 0), new ImVec2(1, 1), tint_col, border_col);
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
        ImGui.BeginChild("child", new ImVec2(0, 60), true);
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
        for (let i = 0; i < ImGuiCol.COUNT; i++) {
            const name = ImGui.GetStyleColorName(i);
            const p = ImGui.GetCursorScreenPos();
            ImGui.GetWindowDrawList().AddRectFilled(p, new ImVec2(p.x + sz, p.y + sz), ImGui.GetColorU32(i));
            ImGui.Dummy(new ImVec2(sz, sz));
            ImGui.SameLine();
            ImGui.MenuItem(name);
        }
        ImGui.EndMenu();
    }
    if (ImGui.BeginMenu("Disabled", false)) // Disabled
     {
        IM_ASSERT(0);
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
        this.InputBuf = new ImStringBuffer(256, "");
        // ImVector<char*>       Items;
        this.Items = new ImVector();
        // ImVector<const char*> Commands;
        this.Commands = new ImVector();
        // ImVector<char*>       History;
        this.History = new ImVector();
        // int                   HistoryPos;    // -1: new line, 0..History.Size-1 browsing history.
        this.HistoryPos = -1;
        // ImGuiTextFilter       Filter;
        this.Filter = new ImGuiTextFilter();
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
        ImGui.SetNextWindowSize(new ImVec2(520, 600), ImGuiCond.FirstUseEver);
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
        ImGui.BeginChild("ScrollingRegion", new ImVec2(0, -footer_height_to_reserve), false, ImGuiWindowFlags.HorizontalScrollbar); // Leave room for 1 separator + 1 InputText
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
        ImGui.PushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(4, 1)); // Tighten spacing
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
                ImGui.PushStyleColor(ImGuiCol.Text, new ImVec4(1.0, 0.4, 0.4, 1.0));
                pop_color = true;
            }
            // else if (strncmp(item, "# ", 2) == 0)   { ImGui.PushStyleColor(ImGuiCol_Text, new ImVec4(1.0f, 0.8f, 0.6f, 1.0f)); pop_color = true; }
            else if (/^# /.test(item)) {
                ImGui.PushStyleColor(ImGuiCol.Text, new ImVec4(1.0, 0.8, 0.6, 1.0));
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
        if (ImGui.InputText("Input", this.InputBuf, IM_ARRAYSIZE(this.InputBuf), ImGuiInputTextFlags.EnterReturnsTrue | ImGuiInputTextFlags.CallbackCompletion | ImGuiInputTextFlags.CallbackHistory, ExampleAppConsole.TextEditCallbackStub, this)) {
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
            case ImGuiInputTextFlags.CallbackCompletion:
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
            case ImGuiInputTextFlags.CallbackHistory:
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
        this.Buf = new ImGuiTextBuffer();
        // ImGuiTextFilter     Filter;
        this.Filter = new ImGuiTextFilter();
        // ImVector<int>       LineOffsets;        // Index to lines offset. We maintain this with AddLog() calls, allowing us to have a random access on lines
        this.LineOffsets = new ImVector();
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
        ImGui.SetNextWindowSize(new ImVec2(500, 400), ImGuiCond.FirstUseEver);
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
        ImGui.BeginChild("scrolling", new ImVec2(0, 0), false, ImGuiWindowFlags.HorizontalScrollbar);
        if (clear)
            this.Clear();
        if (copy)
            ImGui.LogToClipboard();
        ImGui.PushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(0, 0));
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
    ImGui.SetNextWindowSize(new ImVec2(500, 400), ImGuiCond.FirstUseEver);
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
            log.value.AddLog(`[${ImGui.GetFrameCount()}] [${categories[counter.value % IM_ARRAYSIZE(categories)]}] Hello, current time is ${ImGui.GetTime()}, here's a word: '${words[counter.value % IM_ARRAYSIZE(words)]}'\n`);
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
    ImGui.SetNextWindowSize(new ImVec2(500, 440), ImGuiCond.FirstUseEver);
    if (ImGui.Begin("Example: Simple Layout", p_open, ImGuiWindowFlags.MenuBar)) {
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
        ImGui.BeginChild("left pane", new ImVec2(150, 0), true);
        for (let i = 0; i < 100; i++) {
            const label = `MyObject ${i}`;
            if (ImGui.Selectable(label, selected.value === i))
                selected.value = i;
        }
        ImGui.EndChild();
        ImGui.SameLine();
        // right
        ImGui.BeginGroup();
        ImGui.BeginChild("item view", new ImVec2(0, -ImGui.GetFrameHeightWithSpacing())); // Leave room for 1 line below us
        ImGui.Text(`MyObject: ${selected}`);
        ImGui.Separator();
        if (ImGui.BeginTabBar("##Tabs", ImGuiTabBarFlags.None)) {
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
    ImGui.SetNextWindowSize(new ImVec2(430, 450), ImGuiCond.FirstUseEver);
    if (!ImGui.Begin("Example: Property editor", p_open)) {
        ImGui.End();
        return;
    }
    HelpMarker("This example shows how you may implement a property editor using two columns.\nAll objects/fields data are dummies here.\nRemember that in many simple cases, you can use ImGui.SameLine(xxx) to position\nyour cursor horizontally instead of using the Columns() API.");
    ImGui.PushStyleVar(ImGuiStyleVar.FramePadding, new ImVec2(2, 2));
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
                        ImGui.TreeNodeEx("Field", ImGuiTreeNodeFlags.Leaf | ImGuiTreeNodeFlags.NoTreePushOnOpen | ImGuiTreeNodeFlags.Bullet, `Field_${i}`);
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
    ImGui.SetNextWindowSize(new ImVec2(520, 600), ImGuiCond.FirstUseEver);
    if (!ImGui.Begin("Example: Long text display", p_open)) {
        ImGui.End();
        return;
    }
    /* static */ const test_type = STATIC("test_type", 0);
    /* static */ const log = STATIC("log#3217", new ImGuiTextBuffer());
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
                ImGui.PushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(0, 0));
                const clipper = new ImGuiListClipper(lines.value);
                while (clipper.Step())
                    for (let i = clipper.DisplayStart; i < clipper.DisplayEnd; i++)
                        ImGui.Text(`${i} The quick brown fox jumps over the lazy dog`);
                // clipper.delete(); // NOTE: native emscripten class
                ImGui.PopStyleVar();
                break;
            }
        case 2:
            // Multiple calls to Text(), not clipped (slow)
            ImGui.PushStyleVar(ImGuiStyleVar.ItemSpacing, new ImVec2(0, 0));
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
        ImGui.SetNextWindowSizeConstraints(new ImVec2(-1, 0), new ImVec2(-1, Number.MAX_VALUE)); // Vertical only
    if (type.value === 1)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(0, -1), new ImVec2(Number.MAX_VALUE, -1)); // Horizontal only
    if (type.value === 2)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(100, 100), new ImVec2(Number.MAX_VALUE, Number.MAX_VALUE)); // Width > 100, Height > 100
    if (type.value === 3)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(400, -1), new ImVec2(500, -1)); // Width 400-500
    if (type.value === 4)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(-1, 400), new ImVec2(-1, 500)); // Height 400-500
    if (type.value === 5)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(0, 0), new ImVec2(Number.MAX_VALUE, Number.MAX_VALUE), CustomConstraints.Square); // Always Square
    if (type.value === 6)
        ImGui.SetNextWindowSizeConstraints(new ImVec2(0, 0), new ImVec2(Number.MAX_VALUE, Number.MAX_VALUE), CustomConstraints.Step, 100); // Fixed Step
    const flags = auto_resize.value ? ImGuiWindowFlags.AlwaysAutoResize : 0;
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
            ImGui.SetWindowSize(new ImVec2(200, 200));
        }
        ImGui.SameLine();
        if (ImGui.Button("500x500")) {
            ImGui.SetWindowSize(new ImVec2(500, 500));
        }
        ImGui.SameLine();
        if (ImGui.Button("800x200")) {
            ImGui.SetWindowSize(new ImVec2(800, 200));
        }
        ImGui.SetNextItemWidth(200);
        ImGui.Combo("Constraint", (value = type.value) => type.value = value, desc, IM_ARRAYSIZE(desc));
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
        const window_pos = new ImVec2((corner.value & 1) ? io.DisplaySize.x - DISTANCE : DISTANCE, (corner.value & 2) ? io.DisplaySize.y - DISTANCE : DISTANCE);
        const window_pos_pivot = new ImVec2((corner.value & 1) ? 1.0 : 0.0, (corner.value & 2) ? 1.0 : 0.0);
        ImGui.SetNextWindowPos(window_pos, ImGuiCond.Always, window_pos_pivot);
    }
    ImGui.SetNextWindowBgAlpha(0.35); // Transparent background
    if (ImGui.Begin("Example: Simple overlay", p_open, (corner.value !== -1 ? ImGuiWindowFlags.NoMove : 0) | ImGuiWindowFlags.NoDecoration | ImGuiWindowFlags.AlwaysAutoResize | ImGuiWindowFlags.NoSavedSettings)) {
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
    ImGui.SetNextWindowPos(new ImVec2(100, 100), ImGuiCond.FirstUseEver);
    ImGui.Begin("Same title as another window##1");
    ImGui.Text("This is window 1.\nMy title is the same as window 2, but my identifier is unique.");
    ImGui.End();
    ImGui.SetNextWindowPos(new ImVec2(100, 200), ImGuiCond.FirstUseEver);
    ImGui.Begin("Same title as another window##2");
    ImGui.Text("This is window 2.\nMy title is the same as window 1, but my identifier is unique.");
    ImGui.End();
    // Using "###" to display a changing title but keep a static identifier "AnimatedTitle"
    const buf = `Animated title ${"|/-\\".charAt((ImGui.GetTime() / 0.25) & 3)} ${ImGui.GetFrameCount()}###AnimatedTitle`;
    ImGui.SetNextWindowPos(new ImVec2(100, 300), ImGuiCond.FirstUseEver);
    ImGui.Begin(buf);
    ImGui.Text("This window has a changing title.");
    ImGui.End();
}
//-----------------------------------------------------------------------------
// [SECTION] Example App: Custom Rendering using ImDrawList API / ShowExampleAppCustomRendering()
//-----------------------------------------------------------------------------
// Demonstrate using the low-level ImDrawList to draw custom shapes.
function ShowExampleAppCustomRendering(p_open) {
    ImGui.SetNextWindowSize(new ImVec2(350, 560), ImGuiCond.FirstUseEver);
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
            /* static */ const col = STATIC("color#2583", new ImVec4(1.0, 1.0, 0.4, 1.0));
            ImGui.DragFloat("Size", (value = sz.value) => sz.value = value, 0.2, 2.0, 72.0, "%.0f");
            ImGui.DragFloat("Thickness", (value = thickness.value) => thickness.value = value, 0.05, 1.0, 8.0, "%.02f");
            ImGui.ColorEdit3("Color", col.value);
            {
                const p = ImGui.GetCursorScreenPos();
                const col32 = IM_COL32(col.value.x * 255, col.value.y * 255, col.value.z * 255, col.value.w * 255);
                let x = p.x + 4.0, y = p.y + 4.0;
                const spacing = 8.0;
                for (let n = 0; n < 2; n++) {
                    const curr_thickness = (n === 0) ? 1.0 : thickness.value;
                    draw_list.AddCircle(new ImVec2(x + sz.value * 0.5, y + sz.value * 0.5), sz.value * 0.5, col32, 20, curr_thickness);
                    x += sz.value + spacing;
                    draw_list.AddRect(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, 0.0, ImDrawCornerFlags.All, curr_thickness);
                    x += sz.value + spacing;
                    draw_list.AddRect(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, 10.0, ImDrawCornerFlags.All, curr_thickness);
                    x += sz.value + spacing;
                    draw_list.AddRect(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, 10.0, ImDrawCornerFlags.TopLeft | ImDrawCornerFlags.BotRight, curr_thickness);
                    x += sz.value + spacing;
                    draw_list.AddTriangle(new ImVec2(x + sz.value * 0.5, y), new ImVec2(x + sz.value, y + sz.value - 0.5), new ImVec2(x, y + sz.value - 0.5), col32, curr_thickness);
                    x += sz.value + spacing;
                    draw_list.AddLine(new ImVec2(x, y), new ImVec2(x + sz.value, y), col32, curr_thickness);
                    x += sz.value + spacing; // Horizontal line (note: drawing a filled rectangle will be faster!)
                    draw_list.AddLine(new ImVec2(x, y), new ImVec2(x, y + sz.value), col32, curr_thickness);
                    x += spacing; // Vertical line (note: drawing a filled rectangle will be faster!)
                    draw_list.AddLine(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, curr_thickness);
                    x += sz.value + spacing; // Diagonal line
                    draw_list.AddBezierCurve(new ImVec2(x, y), new ImVec2(x + sz.value * 1.3, y + sz.value * 0.3), new ImVec2(x + sz.value - sz.value * 1.3, y + sz.value - sz.value * 0.3), new ImVec2(x + sz.value, y + sz.value), col32, curr_thickness);
                    x = p.x + 4;
                    y += sz.value + spacing;
                }
                draw_list.AddCircleFilled(new ImVec2(x + sz.value * 0.5, y + sz.value * 0.5), sz.value * 0.5, col32, 32);
                x += sz.value + spacing;
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32);
                x += sz.value + spacing;
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, 10.0);
                x += sz.value + spacing;
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), col32, 10.0, ImDrawCornerFlags.TopLeft | ImDrawCornerFlags.BotRight);
                x += sz.value + spacing;
                draw_list.AddTriangleFilled(new ImVec2(x + sz.value * 0.5, y), new ImVec2(x + sz.value, y + sz.value - 0.5), new ImVec2(x, y + sz.value - 0.5), col32);
                x += sz.value + spacing;
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + sz.value, y + thickness.value), col32);
                x += sz.value + spacing; // Horizontal line (faster than AddLine, but only handle integer thickness)
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + thickness.value, y + sz.value), col32);
                x += spacing + spacing; // Vertical line (faster than AddLine, but only handle integer thickness)
                draw_list.AddRectFilled(new ImVec2(x, y), new ImVec2(x + 1, y + 1), col32);
                x += sz.value; // Pixel (faster than AddLine)
                draw_list.AddRectFilledMultiColor(new ImVec2(x, y), new ImVec2(x + sz.value, y + sz.value), IM_COL32(0, 0, 0), IM_COL32(255, 0, 0), IM_COL32(255, 255, 0), IM_COL32(0, 255, 0));
                ImGui.Dummy(new ImVec2((sz.value + spacing) * 8, (sz.value + spacing) * 3));
            }
            ImGui.EndTabItem();
        }
        if (ImGui.BeginTabItem("Canvas")) {
            /* static */ const points = STATIC("points", new ImVector());
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
            draw_list.AddRectFilledMultiColor(canvas_pos, new ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), IM_COL32(50, 50, 50), IM_COL32(50, 50, 60), IM_COL32(60, 60, 70), IM_COL32(50, 50, 60));
            draw_list.AddRect(canvas_pos, new ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), IM_COL32(255, 255, 255));
            let adding_preview = false;
            ImGui.InvisibleButton("canvas", canvas_size);
            const mouse_pos_in_canvas = new ImVec2(ImGui.GetIO().MousePos.x - canvas_pos.x, ImGui.GetIO().MousePos.y - canvas_pos.y);
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
            draw_list.PushClipRect(canvas_pos, new ImVec2(canvas_pos.x + canvas_size.x, canvas_pos.y + canvas_size.y), true); // clip lines within the canvas (if we resize it, etc.)
            for (let i = 0; i < points.value.Size - 1; i += 2)
                draw_list.AddLine(new ImVec2(canvas_pos.x + points.value.Data[i].x, canvas_pos.y + points.value.Data[i].y), new ImVec2(canvas_pos.x + points.value.Data[i + 1].x, canvas_pos.y + points.value.Data[i + 1].y), IM_COL32(255, 255, 0, 255), 2.0);
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
            const window_center = new ImVec2(window_pos.x + window_size.x * 0.5, window_pos.y + window_size.y * 0.5);
            if (draw_bg.value)
                ImGui.GetBackgroundDrawList().AddCircle(window_center, window_size.x * 0.6, IM_COL32(255, 0, 0, 200), 32, 10 + 4);
            if (draw_fg.value)
                ImGui.GetForegroundDrawList().AddCircle(window_center, window_size.y * 0.6, IM_COL32(0, 255, 0, 200), 32, 10);
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
    if (!ImGui.Begin("Example: Documents", p_open, ImGuiWindowFlags.MenuBar)) {
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
                const col = IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                // draw_list->AddRectFilled(ImVec2(p.x + off_x, p.y + off_y), ImVec2(p.x + off_x + 50, p.y + off_y + 50), col);
                draw_list.AddRectFilled(new ImVec2(p.x + off_x, p.y + off_y), new ImVec2(p.x + off_x + 50, p.y + off_y + 50), col);
            }
            ImGui.Dummy(new ImVec2(300 + 50, 100 + 50));
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
                const col = IM_COL32(((n * 17) & 255), ((n * 59) & 255), ((n * 83) & 255), 255);
                // draw_list->AddText(ImVec2(p.x + off_x, p.y + off_y), col, "ABCDEFGHIJ");
                draw_list.AddText(new ImVec2(p.x + off_x, p.y + off_y), col, "ABCDEFGHIJ");
            }
            ImGui.Dummy(new ImVec2(300 + 50, 100 + 20));
            // ImGui.Text("VtxBuffer.Size = %d", draw_list->VtxBuffer.Size);
            ImGui.Text(`VtxBuffer = ${draw_list.VtxBuffer.length}`);
        }
        ImGui.TreePop();
    }
    ImGui.End();
}
// End of Demo code
// #else
// export function ShowAboutWindow(p_open: ImAccess<boolean>): void {}
// export function ShowDemoWindow(p_open: ImAccess<boolean>): void {}
// export function ShowUserGuide(): void {}
// export function ShowStyleSelector(label: string): boolean { return false; }
// export function ShowFontSelector(label: string): void {}
// export function ShowStyleEditor(ref: ImGuiStyle | null = null): void {}
// #endif
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWlfZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltZ3VpX2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGNBQWM7QUFFZCxzR0FBc0c7QUFDdEcseUhBQXlIO0FBQ3pILHVIQUF1SDtBQUN2SCxzSEFBc0g7QUFDdEgscURBQXFEO0FBQ3JELHdHQUF3RztBQUN4RywwSEFBMEg7QUFDMUgsMkdBQTJHO0FBQzNHLG1IQUFtSDtBQUNuSCxhQUFhO0FBQ2IsK0RBQStEO0FBRS9ELG1GQUFtRjtBQUNuRixnSUFBZ0k7QUFDaEksZ0lBQWdJO0FBQ2hJLHdHQUF3RztBQUN4RywrSEFBK0g7QUFDL0gsOEhBQThIO0FBQzlILDRFQUE0RTtBQUU1RSxnR0FBZ0c7QUFDaEcsbUJBQW1CO0FBQ25CLCtIQUErSDtBQUMvSCx3R0FBd0c7QUFDeEcsc0lBQXNJO0FBQ3RJLHdKQUF3SjtBQUN4SixvSkFBb0o7QUFDcEoseUhBQXlIO0FBRXpIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQkU7QUFFRiw2REFBNkQ7QUFDN0Qsa0NBQWtDO0FBQ2xDLFNBQVM7QUFFVCxxQkFBcUI7QUFDckIsa0RBQWtEO0FBQ2xELHdFQUF3RTtBQUN4RSwyREFBMkQ7QUFDM0QsMERBQTBEO0FBQzFELG9FQUFvRTtBQUNwRSwwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSLDBDQUEwQztBQUMxQyxTQUFTO0FBRVQsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFakMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUt6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9B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QTBPO1FBQzFPLHVIQUF1SDtRQUN2SCx5SEFBeUg7UUFDekgsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQVMsSUFBSSxDQUFDLEtBQUssRUFBRyxVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNySSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBUyxJQUFJLENBQUMsS0FBSyxFQUFHLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5SSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBUSxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JJLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFRLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlJLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFRLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMs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QWMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhCLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMs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LENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFGLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFGLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUssQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLElBQUksR0FBRyxHQUFZLEtBQUssQ0FBQztRQUN6QixJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUFFLENBQXFELG9EQUFvRDtRQUNqSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FBRSxDQUEyQyxpQkFBaUI7UUFDOUgsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FBRSxDQUFDLG1CQUFtQjtRQUNoSSxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQUUsQ0FBQyxxQkFBcUI7UUFDaEssc0pBQXNKO1FBQ3RKLCtLQUErSztRQUMvSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUUsQ0FBc0Isc0VBQXNFO1FBQ25MLGlMQUFpTDtRQUNqTCx1UUFBdVE7UUFDdlEsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sS0FBSyxHQUFhLENBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQyxZQUFZO1lBQUMsTUFBTSxPQUFPLEdBQW1CLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQzNTLEtBQUssQ0FBQyxVQUFVLENBQ1osa0JBQWtCLEdBQUcsSUFBSTtZQUN6QixxQkFBcUIsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJO1lBQzlDLHFCQUFxQixLQUFLLENBQUMsYUFBYSxFQUFFLElBQUk7WUFDOUMsNkNBQTZDLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSTtZQUMvRyxrREFBa0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJO1lBQ3pILHlDQUF5QyxLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUk7WUFDdkcsOEJBQThCLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDakYsb0JBQW9CLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSTtZQUM1QyxvQkFBb0IsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJO1lBQzVDLHVCQUF1QixLQUFLLENBQUMsZUFBZSxFQUFFLElBQUk7WUFDbEQseUJBQXlCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJO1lBQ3RELGtDQUFrQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsSUFBSTtZQUN4RSxxQkFBcUIsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJO1lBQzlDLHFCQUFxQixLQUFLLENBQUMsYUFBYSxFQUFFLElBQUk7WUFDOUMsdUJBQXVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3ZHLHVCQUF1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN2Ryx3QkFBd0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDM0csQ0FBQztRQUVGLFlBQVksQ0FBQyxNQUFNLCtCQUErQixHQUFvQixNQUFNLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkgsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpRUFBaUUsRUFBRSxDQUFDLEtBQUssR0FBRywrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLCtCQUErQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNwTCxJQUFJLCtCQUErQixDQUFDLEtBQUs7WUFDckMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRixrR0FBa0c7UUFDbEcsS0FBSyxDQUFDLFVBQVUsQ0FDWix1QkFBdUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJO1lBQ2xELG9DQUFvQyxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQzdGLGdEQUFnRCxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN4SSxrQ0FBa0MsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN6RixpQ0FBaUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0Ysa0dBQWtHO1FBQ2xHLEtBQUssQ0FBQyxVQUFVLENBQ1osdUJBQXVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSTtZQUNsRCwrQ0FBK0MsS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJO1lBQ25ILG9EQUFvRCxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLElBQUk7WUFDN0gsb0NBQW9DLEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDN0YsZ0RBQWdELEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3hJLDZEQUE2RCxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJO1lBQ2xLLGtDQUFrQyxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3pGLGlDQUFpQyxLQUFLLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQy9FLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLCtCQUErQixDQUFDLEtBQUs7WUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLGlHQUFpRztRQUNqRyw4RkFBOEY7UUFFOUYsbUZBQW1GO1FBQ25GLDBJQUEwSTtRQUMxSSxZQUFZLENBQUMsTUFBTSxXQUFXLEdBQW9CLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0UsS0FBSyxDQUFDLFFBQVEsQ0FBQywwREFBMEQsRUFBRSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3JJLElBQUksV0FBVyxDQUFDLEtBQUssRUFDckI7WUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDeEcsSUFBSSxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxvQ0FBb0M7YUFDdkU7Z0JBQ0ksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUFFO2dCQUMzRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEI7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUNOLGlDQUFpQyxLQUFLLENBQUMsYUFBYSxFQUFFLDhCQUE4QjtnQkFDcEYsZ0NBQWdDLEtBQUssQ0FBQyxZQUFZLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztZQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFFRCxTQUFTLG9CQUFvQjtJQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUNqQyxPQUFPO0lBRVgsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUNuQztRQUNJLFVBQVUsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBQzVILFlBQVksQ0FBQyxNQUFNLG1CQUFtQixHQUFvQixNQUFNLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0YsWUFBWSxDQUFDLE1BQU0sWUFBWSxHQUFvQixNQUFNLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEgsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUUzRixZQUFZLENBQUMsTUFBTSxJQUFJLEdBQW1CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksU0FBUyxDQUFDO1FBRTFJLGtEQUFrRDtRQUNsRDtZQUNJLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakksS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM1RyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUM1QjtnQkFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5QjtZQUNELElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRztnQkFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQjtRQUVELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQiwwQkFBMEI7UUFDMUI7WUFDSSxNQUFNLFlBQVksR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoSixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQy9DO2dCQUNJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFDM0I7b0JBQ0ksbUJBQW1CLEVBQUUsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjtnQkFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEI7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQzVCO2dCQUNJLDJCQUEyQjtnQkFDM0IsTUFBTSxHQUFHLEdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDakQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QjtRQUVELEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQixpQ0FBaUM7UUFDakMsNkVBQTZFO1FBQzdFLDhIQUE4SDtRQUM5SCxxSUFBcUk7UUFDckksdUlBQXVJO1FBQ3ZJLDBHQUEwRztRQUMxRztZQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDOUMsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLDZCQUE2QixjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUs7UUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQ25DO1FBQ0kscUVBQXFFO1FBQ3JFLDJFQUEyRTtRQUMzRSxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQW1CLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ2xELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUVsRSxLQUFLLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFDdEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQztRQUMvRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBQyxVQUFVLENBQUMsNkVBQTZFLENBQUMsQ0FBQztRQUM1RyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFbEUsc0lBQXNJO1FBQ3RJLEtBQUssQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNwRCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuRSxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25FLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkUsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUM3QztRQUNJLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztRQUVwRyxPQUFPO1FBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsaUJBQWlCO1FBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsU0FBUztRQUNULEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QixTQUFTO1FBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUUzQyxvREFBb0Q7UUFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELFdBQVc7UUFDWCxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQW9CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFvQixNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBb0IsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQW9CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUwsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvRSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25GLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztRQUUvRCxVQUFVO1FBQ1YsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFtQixNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBbUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQW1CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEosS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBYSxDQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQzNELFlBQVksQ0FBQyxNQUFNLElBQUksR0FBbUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNGLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxNQUFNLFNBQVMsR0FBMEIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7UUFDMUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDMUI7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkU7UUFDRCxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckIsUUFBUTtRQUNSLE1BQU0sU0FBUyxHQUFxQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QiwySEFBMkg7UUFDM0gsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxHQUFlLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLGFBQWEsR0FBVyxFQUFFLENBQUM7UUFDakMsTUFBTSxpQkFBaUIsR0FBVyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUN0QztZQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0IsTUFBTSxjQUFjLEdBQVcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLGNBQWMsR0FBVyxjQUFjLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtZQUN2SSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxJQUFJLGNBQWMsR0FBRyxpQkFBaUI7Z0JBQzNELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQzFCO1FBQ0ksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUMzQjtZQUNJLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUNoRDtnQkFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQ2pDO29CQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztvQkFDakUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQ2xDO29CQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQztvQkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQ2xDO29CQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQztvQkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDckI7WUFDRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEVBQzdDO1lBQ0ksMkdBQTJHO1lBQzNHLFlBQVksQ0FBQyxNQUFNLGFBQWEsR0FBNkIsTUFBTSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuSCxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakosS0FBSyxDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0osS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlKLEtBQUssQ0FBQyxhQUFhLENBQUMsK0NBQStDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ25MLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztnQkFDakUsYUFBYSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsRSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsMENBQTBDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3ZLLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDN0csSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO2dCQUMvSixhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRXpHLFVBQVU7WUFDVixNQUFNLEtBQUssR0FBRyxDQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUFDO1lBQzlELFlBQVksQ0FBQyxNQUFNLE1BQU0sR0FBc0IsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7WUFDckgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ25EO2dCQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDbEY7WUFFRCwySUFBMkk7WUFDM0ksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQ3REO2dCQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDL0MsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQ3pHO3dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDOzRCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUN0QjtnQkFDTCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDckI7WUFDRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUM1QjtRQUNJLFVBQVUsQ0FBQyw0TUFBNE0sQ0FBQyxDQUFDO1FBQ3pOLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQjtZQUNJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUNyQixLQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDL0M7UUFDRCxnRUFBZ0U7UUFDaEUsTUFBTSxJQUFJLEdBQVcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFrQixDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM5RCxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2RixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQ3JDO1lBQ0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEVBQzdDO1FBQ0ksVUFBVSxDQUFDLGdOQUFnTixDQUFDLENBQUM7UUFFN04sS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0IsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyw0RUFBNEU7UUFDN0csS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUIsT0FBTztRQUNQLE1BQU0sT0FBTyxHQUFXLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDNUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFFLENBQUksa0JBQWtCO1FBRXRJLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQVMsZ0pBQWdKO1FBQ3pMLE1BQU0sU0FBUyxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSwrR0FBK0c7UUFDdEssS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxFQUFFO1lBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FBRSxDQUFHLGtCQUFrQjtRQUVySCxTQUFTO1FBQ1QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFDL0I7UUFDSSxVQUFVLENBQUMsNEVBQTRFLENBQUMsQ0FBQztRQUV6RixZQUFZLENBQUMsTUFBTSxLQUFLLEdBQW9CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsWUFBWSxDQUFDLE1BQU0sVUFBVSxHQUFtQixNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxNQUFNLGdCQUFnQixHQUFtQixNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEYsWUFBWSxDQUFDLE1BQU0sZ0JBQWdCLEdBQW1CLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztRQUU1SixJQUFJLGFBQWEsR0FBWSxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLGFBQWEsQ0FBQztRQUVoTCxJQUFJLGFBQWEsR0FBWSxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLGFBQWEsQ0FBQztRQUUvSyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsSUFBSSxhQUFhLElBQUksYUFBYTtZQUM5QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4QixNQUFNLEtBQUssR0FBZSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQVcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRyxNQUFNLFdBQVcsR0FBc0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQ2hFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hGLElBQUksYUFBYTtnQkFDYixLQUFLLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksYUFBYTtnQkFDYixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDNUYsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDckM7Z0JBQ0ksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsS0FBSyxFQUM1QztvQkFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDMUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0M7aUJBQ3ZFO3FCQUVEO29CQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1lBQ0QsTUFBTSxRQUFRLEdBQVcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVDLE1BQU0sWUFBWSxHQUFXLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQzFDO1FBQ0ksVUFBVSxDQUFDLDhOQUE4TixDQUFDLENBQUM7UUFDM08sWUFBWSxDQUFDLE1BQU0sS0FBSyxHQUFtQixNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25FLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RSxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDckksS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQzdDO1lBQ0ksb0xBQW9MO1lBQ3BMLGtMQUFrTDtZQUNsTCxNQUFNLFdBQVcsR0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQ3BDO2dCQUNJLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sT0FBTyxHQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sS0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDckcsTUFBTSxHQUFHLEdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDN0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDakI7U0FDSjtRQUNELE1BQU0sUUFBUSxHQUFXLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFlBQVksR0FBVyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxjQUFjLEdBQVcsR0FBRyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUFFLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUgsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUFFLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUgsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxjQUFjLEtBQUssR0FBRyxFQUMxQjtZQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx5SUFBeUk7WUFDeEssS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTztRQUNQLG1CQUFtQjtRQUVuQixpRUFBaUU7UUFDakUsMkdBQTJHO1FBRTNHLGlEQUFpRDtRQUNqRCxJQUFJO1FBQ0osMkNBQTJDO1FBQzNDLHNDQUFzQztRQUN0QywwQ0FBMEM7UUFDMUMsNkNBQTZDO1FBQzdDLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFDdkMsc0NBQXNDO1FBQ3RDLGlEQUFpRDtRQUNqRCw2Q0FBNkM7UUFDN0MsaUNBQWlDO1FBQ2pDLHlFQUF5RTtRQUN6RSxvS0FBb0s7UUFDcEssbUVBQW1FO1FBQ25FLG9FQUFvRTtRQUNwRSwyTUFBMk07UUFDM00sd0RBQXdEO1FBQ3hELG9IQUFvSDtRQUNwSCwwSEFBMEg7UUFDMUgsNEZBQTRGO1FBQzVGLG1GQUFtRjtRQUNuRixtRkFBbUY7UUFDbkYsNEZBQTRGO1FBQzVGLHVFQUF1RTtRQUN2RSxzSUFBc0k7UUFDdEksaUNBQWlDO1FBQ2pDLFFBQVE7UUFDUiw0QkFBNEI7UUFDNUIsdUNBQXVDO1FBQ3ZDLHNEQUFzRDtRQUN0RCxpREFBaUQ7UUFDakQsbUdBQW1HO1FBQ25HLHNKQUFzSjtRQUN0SixzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixxRUFBcUU7UUFDckUsUUFBUTtRQUNSLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLHFEQUFxRDtRQUNyRCxZQUFZO1FBQ1osdUVBQXVFO1FBQ3ZFLGdCQUFnQjtRQUNoQixvREFBb0Q7UUFDcEQsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFDL0IsWUFBWTtRQUNaLDZEQUE2RDtRQUM3RCxRQUFRO1FBQ1IsNkJBQTZCO1FBQzdCLFFBQVE7UUFDUix1R0FBdUc7UUFDdkcsUUFBUTtRQUNSLHdCQUF3QjtRQUN4QixRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osZ0VBQWdFO1FBQ2hFLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixzREFBc0Q7UUFDdEQsUUFBUTtRQUNSLHVFQUF1RTtRQUN2RSx1RUFBdUU7UUFDdkUsNkVBQTZFO1FBQzdFLDBFQUEwRTtRQUMxRSw2QkFBNkI7UUFDN0IsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1Isd0RBQXdEO1FBQ3hELDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLElBQUk7UUFFSixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzlCO1FBQ0ksWUFBWSxDQUFDLE1BQU0sSUFBSSxHQUFtQixNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBbUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5SSxLQUFLLENBQUMsV0FBVyxDQUFDLDJRQUEyUSxDQUFDLENBQUM7UUFDL1IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsTUFBTSxHQUFHLEdBQXFCLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pELE1BQU0sU0FBUyxHQUFxQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUNwSixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvTixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7QUFDTCxDQUFDO0FBRUQsU0FBUyxvQkFBb0I7SUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRCxPQUFPO0lBRVgsd0NBQXdDO0lBQ3hDLGlFQUFpRTtJQUNqRSwrRkFBK0Y7SUFDL0YsMEpBQTBKO0lBQzFKLHFFQUFxRTtJQUNyRSxtSkFBbUo7SUFDbkosa0lBQWtJO0lBRWxJLG1DQUFtQztJQUNuQywyS0FBMks7SUFDM0ssMEJBQTBCO0lBQzFCLGdIQUFnSDtJQUVoSCx3R0FBd0c7SUFDeEcsdUdBQXVHO0lBRXZHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDNUI7UUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDLCtIQUErSCxDQUFDLENBQUM7UUFFbkosWUFBWSxDQUFDLE1BQU0sYUFBYSxHQUFtQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsTUFBTSxLQUFLLEdBQWEsQ0FBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFFLENBQUM7UUFDbEYsWUFBWSxDQUFDLE1BQU0sT0FBTyxHQUFzQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRSxDQUFDLENBQUM7UUFFeEcseUJBQXlCO1FBQ3pCLGdMQUFnTDtRQUNoTCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFDdkM7WUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsOEJBQThCO1FBQzlCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDeEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2QztZQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzVDO2dCQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQ3hGO1lBQ0QsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUMvQjtnQkFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7WUFFRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUVwRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDckM7Z0JBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDNUM7b0JBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7aUJBQ3hGO2dCQUNELElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDL0I7b0JBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzt3QkFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxFQUNyQzt3QkFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ3RDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDcEI7b0JBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjtnQkFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEI7WUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEI7UUFFRCx5RkFBeUY7UUFDekYsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDckM7WUFDSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQjtRQUVELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDbkM7UUFDSSxvR0FBb0c7UUFDcEcsZ0RBQWdEO1FBQ2hELHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIsNklBQTZJO1FBQzdJLFlBQVksQ0FBQyxNQUFNLEtBQUssR0FBbUIsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsRUFDcEQ7WUFDSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3ZELElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDeEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEI7UUFFRCxrSEFBa0g7UUFDbEgseUlBQXlJO1FBQ3pJLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUM3RSxLQUFLLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkQsb0hBQW9IO1FBQ3BILHFFQUFxRTtRQUNyRSwrSkFBK0o7UUFDL0osWUFBWSxDQUFDLE1BQU0sSUFBSSxHQUEyQixNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25HLE1BQU0sR0FBRyxHQUFXLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLHdEQUF3RDtRQUNySCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQ2pDO1lBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNyQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM5QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEI7UUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdkQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUM1QjtRQUNJLEtBQUssQ0FBQyxXQUFXLENBQUMsOEZBQThGLENBQUMsQ0FBQztRQUVsSCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0IsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsRUFDakY7WUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLGtGQUFrRixDQUFDLENBQUM7WUFDL0YsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWxCLHlDQUF5QztZQUN6Qyw0REFBNEQ7WUFFNUQsWUFBWSxDQUFDLE1BQU0scUJBQXFCLEdBQW9CLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN2SCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUFFO1lBQzFFLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUFFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQUU7WUFDOUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQ3RFO1lBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQ3hCO2dCQUNJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFDM0I7b0JBQ0ksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsR0FBRTtvQkFDekMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjtnQkFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEI7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLHdGQUF3RixDQUFDLENBQUM7WUFFckcsZ0ZBQWdGO1lBQ2hGLFlBQVksQ0FBQyxNQUFNLElBQUksR0FBbUIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRSxZQUFZLENBQUMsTUFBTSxLQUFLLEdBQTZCLE1BQU0sQ0FBbUIsU0FBUyxFQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUNqSCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3JHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2QyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFakMsNkhBQTZIO1lBQzdILDJIQUEySDtZQUMzSCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3BEO2dCQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDckIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwQjtRQUVELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxFQUNuRDtRQUNJLEtBQUssQ0FBQyxXQUFXLENBQUMsa0dBQWtHLENBQUMsQ0FBQztRQUN0SCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsbUpBQW1KO1FBQ25KLHVLQUF1SztRQUN2SyxzS0FBc0s7UUFDdEssS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsRUFDbkQ7WUFDSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtRQUNELEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7QUFDTCxDQUFDO0FBRUQsU0FBUyxxQkFBcUI7SUFFMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDbEMsT0FBTztJQUVYLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFeEIsWUFBWSxDQUFDLE1BQU0sY0FBYyxHQUFvQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckYsS0FBSyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixVQUFVLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztJQUNqRyxJQUFJLGNBQWMsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV6RCxnQkFBZ0I7SUFDaEIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUMzQjtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxvQkFBb0I7UUFDNUQsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQzNCO1lBQ0ksTUFBTSxLQUFLLEdBQVcsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNsQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRTtZQUMvQiwrQ0FBK0M7WUFDL0MsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtRQUNyRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsTUFBTSxLQUFLLEdBQWtCLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FBa0IsQ0FBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBRSxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxNQUFNLFFBQVEsR0FBbUIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzFCO1lBQ0ksTUFBTSxLQUFLLEdBQVcsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDO2dCQUNsRixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN2QixNQUFNLE9BQU8sR0FBWSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDL0MsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNoRDtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDN0I7UUFDSSxvRUFBb0U7UUFDcEUsWUFBWSxDQUFDLE1BQU0sU0FBUyxHQUFvQixNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLFlBQVksQ0FBQyxNQUFNLFNBQVMsR0FBb0IsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25GLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzlCO1lBQ0ksSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2dCQUMvQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdEIsNkNBQTZDO1lBQzdDLE1BQU0sQ0FBQyxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQVMsQ0FBQyxLQUFLO1lBQ2YsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQjtJQUVELHVFQUF1RTtJQUN2RSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQ2pDO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBbUIsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25GLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBbUIsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVuQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUFFO1FBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9GLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQUU7UUFBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0YsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FBRTtRQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvRixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7SUFFRCxnQkFBZ0I7SUFDaEIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUNuQztRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsV0FBVyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsb0JBQW9CO0lBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXVCRTtJQUVGLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUMxQztRQUNJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDNUgsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUM7UUFDakMsTUFBTSxPQUFPLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBRSxvREFBb0Q7UUFDMUgsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQ3JCO1lBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtnQkFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDM0I7b0JBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3RCO1NBQ1I7UUFDRCxxREFBcUQ7UUFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUMxQjtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUMxQjtZQUNJLE1BQU0sS0FBSyxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkIsSUFBSSxLQUFLLEVBQ1Q7Z0JBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDMUI7b0JBQ0ksTUFBTSxLQUFLLEdBQVksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLEtBQUssRUFDVDt3QkFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2pDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQzs0QkFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7NEJBQzFELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt5QkFDbkI7cUJBQ0o7b0JBQ0QsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuQixJQUFJLEtBQUs7d0JBQ0wsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN2QjtnQkFDRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7U0FDSjtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsSUFBSSxjQUFjLENBQUMsS0FBSztRQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLGtCQUFrQjtJQUV2QixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFDdkM7UUFDSSxZQUFZLENBQUMsTUFBTSxNQUFNLEdBQTRCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCO2NBQ2Qsb0NBQW9DO2NBQ3BDLG1EQUFtRDtjQUNuRCw4REFBOEQ7Y0FDOUQsOENBQThDLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sS0FBSyxHQUFhLENBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBRSxDQUFDO1FBQ3RILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3hDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsRUFDeEQ7UUFDSSxNQUFNLEVBQUUsR0FBWSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxpQkFBaUIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdkUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDLEVBQ3hEO1lBQ0ksSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFFOUQsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQUssS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBSTtvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFBRTtZQUNqTixLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFXO29CQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFBRTtZQUNwSyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUFFO1lBQ3BLLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQVU7b0JBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUFFO1lBQ3BLLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBTTtvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUFFO1lBQ3JPLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFjO29CQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFFO1lBQ3pMLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFhO29CQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUFFO1lBQ3pMLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUksdVRBQXVUO1lBRXZULEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFxQjtvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQUU7WUFDM00sS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBSztvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUU7WUFDOUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBSTtvQkFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFBRTtZQUV2TixLQUFLLENBQUMsTUFBTSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7WUFDNUQsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUNyQixLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUNqRSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQzdCO1lBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1lBQzNFLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBMkIsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0RyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEUsc0hBQXNIO1lBQ3RILEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQztZQUNJLE1BQU0sT0FBTyxHQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsTUFBTSxPQUFPLEdBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RSxNQUFNLE9BQU8sR0FBWSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztZQUMxQixZQUFZLENBQUMsTUFBTSxHQUFHLEdBQTJCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztZQUVoSSxJQUFJLE9BQU87Z0JBQUUsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDMUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFFeEMsSUFBSSxPQUFPO2dCQUFFLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRXhDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLE9BQU87Z0JBQUUsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDMUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFOUIsSUFBSSxTQUFTO2dCQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLFNBQVMsRUFBRSxDQUFDLENBQUM7O2dCQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFMUMseUVBQXlFO1lBQ3pFLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBNkIsTUFBTSxDQUFtQixJQUFJLEVBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDcEcsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUFFLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFBRTtZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUFFO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQUU7WUFDcEQsSUFBSSxXQUFXLEtBQUssQ0FBQyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVqRCxLQUFLLENBQUMsV0FBVyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7WUFDbEcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM5QjtZQUNJLEtBQUssQ0FBQyxXQUFXLENBQUMsdUZBQXVGLENBQUMsQ0FBQztZQUMzRyxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRTtnQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSwrQkFBK0IsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQywyQkFBMkIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRW5PLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUNwQixLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0RBQXNEO1lBRTlLLCtJQUErSTtZQUMvSSxzSEFBc0g7WUFDdEgsTUFBTSxTQUFTLEdBQXFCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEUsTUFBTSx5QkFBeUIsR0FBcUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sV0FBVyxHQUFxQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3BFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0JBQXdCLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUsseUJBQXlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzUSxPQUFPO1lBQ1AsNlBBQTZQO1lBRTdQLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDbkM7WUFDSSxNQUFNLG1CQUFtQixHQUFhLENBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1lBQ25JLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4RSxLQUFLLENBQUMsSUFBSSxDQUFDLDBCQUEwQixLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssbUJBQW1CLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9HLEtBQUssQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFBQyxVQUFVLENBQUMsa1BBQWtQLENBQUMsQ0FBQztZQUNqUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUMvQztnQkFDSSxNQUFNLEtBQUssR0FBVyxnQkFBZ0IsQ0FBQyxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtvQkFDOUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtZQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtLQUNKO0FBQ0wsQ0FBQztBQUVELCtFQUErRTtBQUMvRSw2Q0FBNkM7QUFDN0MsK0NBQStDO0FBQy9DLCtFQUErRTtBQUUvRSxTQUFTLGVBQWUsQ0FBQyxNQUF5QjtJQUU5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsRUFDL0U7UUFDSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWixPQUFPO0tBQ1Y7SUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBQzlELEtBQUssQ0FBQyxJQUFJLENBQUMsaUZBQWlGLENBQUMsQ0FBQztJQUU5RixPQUFPO0lBQ1Asd0NBQXdDO0lBQ3hDLGlFQUFpRTtJQUNqRSx3QkFBd0I7SUFDeEIsSUFBSTtJQUNKLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFFNUMsa0VBQWtFO0lBQ2xFLHFJQUFxSTtJQUNySSw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBRWxDLDBFQUEwRTtJQUMxRSx5QkFBeUI7SUFDekIsNkpBQTZKO0lBQzdKLDhEQUE4RDtJQUM5RCw4Q0FBOEM7SUFDOUMsOERBQThEO0lBQzlELGFBQWE7SUFDYiw2REFBNkQ7SUFDN0QsNkVBQTZFO0lBQzdFLGFBQWE7SUFDYix1REFBdUQ7SUFDdkQsdUVBQXVFO0lBQ3ZFLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsMkRBQTJEO0lBQzNELGFBQWE7SUFDYixtREFBbUQ7SUFDbkQsbUVBQW1FO0lBQ25FLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsMERBQTBEO0lBQzFELGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsOERBQThEO0lBQzlELGFBQWE7SUFDYix5Q0FBeUM7SUFDekMseURBQXlEO0lBQ3pELGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbURBQW1EO0lBQ25ELGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsMEdBQTBHO0lBQzFHLDBHQUEwRztJQUMxRyw0REFBNEQ7SUFDNUQsd0dBQXdHO0lBQ3hHLHVHQUF1RztJQUN2RywyR0FBMkc7SUFDM0csMkdBQTJHO0lBQzNHLDhGQUE4RjtJQUM5RiwwR0FBMEc7SUFDMUcsd0dBQXdHO0lBQ3hHLDhHQUE4RztJQUM5RyxtSEFBbUg7SUFDbkgscUhBQXFIO0lBQ3JILDBIQUEwSDtJQUMxSCw4REFBOEQ7SUFDOUQsaUdBQWlHO0lBQ2pHLHNHQUFzRztJQUN0RyxxR0FBcUc7SUFDckcsMkdBQTJHO0lBQzNHLHlCQUF5QjtJQUN6Qix1SkFBdUo7SUFDdkosbUZBQW1GO0lBQ25GLHVIQUF1SDtJQUN2SCx5QkFBeUI7SUFDekIsa0dBQWtHO0lBQ2xHLDBFQUEwRTtJQUMxRSwrRkFBK0Y7SUFDL0Ysb0VBQW9FO0lBQ3BFLHdFQUF3RTtJQUN4RSw0RkFBNEY7SUFDNUYsMkdBQTJHO0lBRTNHLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLElBQUk7SUFDSixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVELCtFQUErRTtBQUMvRSw2Q0FBNkM7QUFDN0MsK0VBQStFO0FBRS9FLHdHQUF3RztBQUN4RywwSkFBMEo7QUFDMUosTUFBTSxVQUFVLGlCQUFpQixDQUFDLEtBQWE7SUFFM0MsWUFBWSxDQUFDLE1BQU0sU0FBUyxHQUFtQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxFQUN0RztRQUNJLFFBQVEsU0FBUyxDQUFDLEtBQUssRUFDdkI7WUFDQSxLQUFLLENBQUM7Z0JBQUUsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUMxQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUFDLE1BQU07WUFDdkMsS0FBSyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUFDLE1BQU07U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELHFEQUFxRDtBQUNyRCwyRkFBMkY7QUFDM0YsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQWE7SUFFMUMsTUFBTSxFQUFFLEdBQVksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLE1BQU0sWUFBWSxHQUFXLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUN4RDtRQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDOUMsT0FBTztRQUNQLGlEQUFpRDtRQUNqRCxJQUFJO1FBQ0oseUNBQXlDO1FBQ3pDLGlDQUFpQztRQUNqQyx3RUFBd0U7UUFDeEUsaUNBQWlDO1FBQ2pDLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3BCO0lBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLFVBQVUsQ0FDTixnRUFBZ0U7UUFDaEUsNkZBQTZGO1FBQzdGLGdFQUFnRTtRQUNoRSxzR0FBc0csQ0FBQyxDQUFDO0FBQ2hILENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQXlCLElBQUk7SUFFekQsNklBQTZJO0lBQzdJLE1BQU0sS0FBSyxHQUFlLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxZQUFZLENBQUMsTUFBTSxlQUFlLEdBQXVCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFFckcsaURBQWlEO0lBQ2pELFlBQVksQ0FBQyxNQUFNLElBQUksR0FBb0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUk7UUFDMUIsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSTtRQUNaLEdBQUcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBRWhDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRW5ELEtBQUksVUFBVSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxVQUFVLENBQUEsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU5QyxzQkFBc0I7SUFDdEIsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUNuSCxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQywyREFBMkQ7SUFDekc7UUFBRSxJQUFJLGFBQWEsR0FBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FBRTtJQUMxTSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakI7UUFBRSxJQUFJLFlBQVksR0FBWSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUFFLEtBQUssQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUFFO0lBQ25NLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQjtRQUFFLElBQUksWUFBWSxHQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQUU7SUFFbk0scUJBQXFCO0lBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLFVBQVUsQ0FBQyw4SUFBOEksQ0FBQyxDQUFDO0lBRTNKLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0RDtRQUNJLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFDL0I7WUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RSxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEYsS0FBSyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRixLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BILEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pILEtBQUssQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6SCxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuSCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2SCxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BILEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwSCxLQUFLLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hJLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakYsbUdBQW1HO1lBQ25HLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQUMsVUFBVSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7WUFDakwsMk1BQTJNO1lBQzNNLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUFDLFVBQVUsQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO1lBQ3pLLEtBQUssQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUYsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUNoQztZQUNJLFlBQVksQ0FBQyxNQUFNLFdBQVcsR0FBbUIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxRSxZQUFZLENBQUMsTUFBTSxvQkFBb0IsR0FBb0IsTUFBTSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNsQztnQkFDSSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztvQkFFdkIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLDJDQUEyQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDdkM7b0JBQ0ksTUFBTSxHQUFHLEdBQStCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sSUFBSSxHQUFXLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQztpQkFDaEs7Z0JBQ0QsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUNoSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRXJJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUdBQWlHLENBQUMsQ0FBQztZQUU5RyxZQUFZLENBQUMsTUFBTSxNQUFNLEdBQTRCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ2xHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUV4QyxZQUFZLENBQUMsTUFBTSxXQUFXLEdBQWdDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0csS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7WUFBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUUxSCxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLHVCQUF1QixHQUFHLGdCQUFnQixDQUFDLHlCQUF5QixHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdLLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksTUFBTSxJQUFJLEdBQVcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUM5QixTQUFTO2dCQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUM7b0JBQ0ksa0pBQWtKO29CQUNsSix3R0FBd0c7b0JBQ3hHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0csS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsSDtnQkFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQjtZQUNELEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFakIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUMvQjtZQUNJLE1BQU0sRUFBRSxHQUFZLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxNQUFNLEtBQUssR0FBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNwQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFDekM7Z0JBQ0ksTUFBTSxJQUFJLEdBQVcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLGVBQWUsVUFBVSxDQUFDLENBQUM7Z0JBQzNPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7b0JBQUUsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ2pGLElBQUksbUJBQW1CLEVBQ3ZCO29CQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztvQkFDMUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNoQixLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFHLHVCQUF1QjtvQkFDN0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUFDLFVBQVUsQ0FBQywwYUFBMGEsQ0FBQyxDQUFDO29CQUN6YyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxjQUFjLElBQUksQ0FBQyxPQUFPLGFBQWEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdEcsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ3JHLE1BQU0sWUFBWSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pFLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxtQkFBbUIsc0JBQXNCLENBQUMsR0FBRyxZQUFZLElBQUksQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQ3JILEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxFQUNsRTt3QkFDSSxNQUFNLEdBQUcsR0FBdUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDMUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLFFBQVEsT0FBTyxHQUFHLENBQUMsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsV0FBVyxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQzlJO29CQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQzVEO3dCQUNJLHNFQUFzRTt3QkFDdEUsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLE9BQU8sRUFBRSxJQUFJLElBQUksR0FBRyxFQUM5Qzs0QkFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7NEJBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUU7Z0NBQ3hCLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNoRixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDMUw7Z0NBQ0ksTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0NBQ3BDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUN6QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQ0FDNUMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0NBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQzVCO29DQUNJLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7b0NBQ3pJLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7b0NBQ3pFLE1BQU0sS0FBSyxHQUE2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUF1QixDQUFDLENBQUM7b0NBQ25HLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ2xHLElBQUksS0FBSzt3Q0FDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsMEhBQTBIO29DQUNoUCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFDbkY7d0NBQ0ksS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO3dDQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3Q0FDM0UsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dDQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3Q0FDalEsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dDQUNqQixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7d0NBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0NBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0NBQ25ILEtBQUssQ0FBQyxJ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