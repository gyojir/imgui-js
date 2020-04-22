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
        define(["require", "exports", "./bind-imgui", "./imconfig"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Bind = __importStar(require("./bind-imgui"));
    exports.Bind = Bind;
    let bind;
    exports.bind = bind;
    function default_1(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                Bind.default(value).then((value) => {
                    exports.bind = bind = value;
                    resolve();
                });
            });
        });
    }
    exports.default = default_1;
    function import_Scalar(sca) {
        if (Array.isArray(sca)) {
            return [sca[0]];
        }
        if (typeof sca === "function") {
            return [sca()];
        }
        return [sca.x];
    }
    function export_Scalar(tuple, sca) {
        if (Array.isArray(sca)) {
            sca[0] = tuple[0];
            return;
        }
        if (typeof sca === "function") {
            sca(tuple[0]);
            return;
        }
        sca.x = tuple[0];
    }
    function import_Vector2(vec) {
        if (Array.isArray(vec)) {
            return [vec[0], vec[1]];
        }
        return [vec.x, vec.y];
    }
    function export_Vector2(tuple, vec) {
        if (Array.isArray(vec)) {
            vec[0] = tuple[0];
            vec[1] = tuple[1];
            return;
        }
        vec.x = tuple[0];
        vec.y = tuple[1];
    }
    function import_Vector3(vec) {
        if (Array.isArray(vec)) {
            return [vec[0], vec[1], vec[2]];
        }
        return [vec.x, vec.y, vec.z];
    }
    function export_Vector3(tuple, vec) {
        if (Array.isArray(vec)) {
            vec[0] = tuple[0];
            vec[1] = tuple[1];
            vec[2] = tuple[2];
            return;
        }
        vec.x = tuple[0];
        vec.y = tuple[1];
        vec.z = tuple[2];
    }
    function import_Vector4(vec) {
        if (Array.isArray(vec)) {
            return [vec[0], vec[1], vec[2], vec[3] || 0];
        }
        return [vec.x, vec.y, vec.z, vec.w];
    }
    function export_Vector4(tuple, vec) {
        if (Array.isArray(vec)) {
            vec[0] = tuple[0];
            vec[1] = tuple[1];
            vec[2] = tuple[2];
            vec[3] = tuple[3];
            return;
        }
        vec.x = tuple[0];
        vec.y = tuple[1];
        vec.z = tuple[2];
        vec.w = tuple[3];
    }
    function import_Color3(col) {
        if (Array.isArray(col)) {
            return [col[0], col[1], col[2]];
        }
        if ("r" in col) {
            return [col.r, col.g, col.b];
        }
        return [col.x, col.y, col.z];
    }
    function export_Color3(tuple, col) {
        if (Array.isArray(col)) {
            col[0] = tuple[0];
            col[1] = tuple[1];
            col[2] = tuple[2];
            return;
        }
        if ("r" in col) {
            col.r = tuple[0];
            col.g = tuple[1];
            col.b = tuple[2];
            return;
        }
        col.x = tuple[0];
        col.y = tuple[1];
        col.z = tuple[2];
    }
    function import_Color4(col) {
        if (Array.isArray(col)) {
            return [col[0], col[1], col[2], col[3]];
        }
        if ("r" in col) {
            return [col.r, col.g, col.b, col.a];
        }
        return [col.x, col.y, col.z, col.w];
    }
    function export_Color4(tuple, col) {
        if (Array.isArray(col)) {
            col[0] = tuple[0];
            col[1] = tuple[1];
            col[2] = tuple[2];
            return;
        }
        if ("r" in col) {
            col.r = tuple[0];
            col.g = tuple[1];
            col.b = tuple[2];
            return;
        }
        col.x = tuple[0];
        col.y = tuple[1];
        col.z = tuple[2];
    }
    const config = __importStar(require("./imconfig"));
    exports.IMGUI_VERSION = "1.71"; // bind.IMGUI_VERSION;
    exports.IMGUI_VERSION_NUM = 17100; // bind.IMGUI_VERSION_NUM;
    // #define IMGUI_CHECKVERSION()        ImGui::DebugCheckVersionAndDataLayout(IMGUI_VERSION, sizeof(ImGuiIO), sizeof(ImGuiStyle), sizeof(ImVec2), sizeof(ImVec4), sizeof(ImDrawVert))
    function IMGUI_CHECKVERSION() { return DebugCheckVersionAndDataLayout(exports.IMGUI_VERSION, bind.ImGuiIOSize, bind.ImGuiStyleSize, bind.ImVec2Size, bind.ImVec4Size, bind.ImDrawVertSize, bind.ImDrawIdxSize); }
    exports.IMGUI_CHECKVERSION = IMGUI_CHECKVERSION;
    function IM_ASSERT(_EXPR) { if (!_EXPR) {
        throw new Error();
    } }
    exports.IM_ASSERT = IM_ASSERT;
    function IM_ARRAYSIZE(_ARR) {
        if (_ARR instanceof ImStringBuffer) {
            return _ARR.size;
        }
        else {
            return _ARR.length;
        }
    }
    exports.IM_ARRAYSIZE = IM_ARRAYSIZE;
    class ImStringBuffer {
        constructor(size, buffer = "") {
            this.size = size;
            this.buffer = buffer;
        }
    }
    exports.ImStringBuffer = ImStringBuffer;
    var ImGuiWindowFlags;
    (function (ImGuiWindowFlags) {
        ImGuiWindowFlags[ImGuiWindowFlags["None"] = 0] = "None";
        ImGuiWindowFlags[ImGuiWindowFlags["NoTitleBar"] = 1] = "NoTitleBar";
        ImGuiWindowFlags[ImGuiWindowFlags["NoResize"] = 2] = "NoResize";
        ImGuiWindowFlags[ImGuiWindowFlags["NoMove"] = 4] = "NoMove";
        ImGuiWindowFlags[ImGuiWindowFlags["NoScrollbar"] = 8] = "NoScrollbar";
        ImGuiWindowFlags[ImGuiWindowFlags["NoScrollWithMouse"] = 16] = "NoScrollWithMouse";
        ImGuiWindowFlags[ImGuiWindowFlags["NoCollapse"] = 32] = "NoCollapse";
        ImGuiWindowFlags[ImGuiWindowFlags["AlwaysAutoResize"] = 64] = "AlwaysAutoResize";
        ImGuiWindowFlags[ImGuiWindowFlags["NoBackground"] = 128] = "NoBackground";
        ImGuiWindowFlags[ImGuiWindowFlags["NoSavedSettings"] = 256] = "NoSavedSettings";
        ImGuiWindowFlags[ImGuiWindowFlags["NoMouseInputs"] = 512] = "NoMouseInputs";
        ImGuiWindowFlags[ImGuiWindowFlags["MenuBar"] = 1024] = "MenuBar";
        ImGuiWindowFlags[ImGuiWindowFlags["HorizontalScrollbar"] = 2048] = "HorizontalScrollbar";
        ImGuiWindowFlags[ImGuiWindowFlags["NoFocusOnAppearing"] = 4096] = "NoFocusOnAppearing";
        ImGuiWindowFlags[ImGuiWindowFlags["NoBringToFrontOnFocus"] = 8192] = "NoBringToFrontOnFocus";
        ImGuiWindowFlags[ImGuiWindowFlags["AlwaysVerticalScrollbar"] = 16384] = "AlwaysVerticalScrollbar";
        ImGuiWindowFlags[ImGuiWindowFlags["AlwaysHorizontalScrollbar"] = 32768] = "AlwaysHorizontalScrollbar";
        ImGuiWindowFlags[ImGuiWindowFlags["AlwaysUseWindowPadding"] = 65536] = "AlwaysUseWindowPadding";
        ImGuiWindowFlags[ImGuiWindowFlags["NoNavInputs"] = 262144] = "NoNavInputs";
        ImGuiWindowFlags[ImGuiWindowFlags["NoNavFocus"] = 524288] = "NoNavFocus";
        ImGuiWindowFlags[ImGuiWindowFlags["UnsavedDocument"] = 1048576] = "UnsavedDocument";
        ImGuiWindowFlags[ImGuiWindowFlags["NoNav"] = 786432] = "NoNav";
        ImGuiWindowFlags[ImGuiWindowFlags["NoDecoration"] = 43] = "NoDecoration";
        ImGuiWindowFlags[ImGuiWindowFlags["NoInputs"] = 786944] = "NoInputs";
        // [Internal]
        ImGuiWindowFlags[ImGuiWindowFlags["NavFlattened"] = 8388608] = "NavFlattened";
        ImGuiWindowFlags[ImGuiWindowFlags["ChildWindow"] = 16777216] = "ChildWindow";
        ImGuiWindowFlags[ImGuiWindowFlags["Tooltip"] = 33554432] = "Tooltip";
        ImGuiWindowFlags[ImGuiWindowFlags["Popup"] = 67108864] = "Popup";
        ImGuiWindowFlags[ImGuiWindowFlags["Modal"] = 134217728] = "Modal";
        ImGuiWindowFlags[ImGuiWindowFlags["ChildMenu"] = 268435456] = "ChildMenu";
    })(ImGuiWindowFlags = exports.ImGuiWindowFlags || (exports.ImGuiWindowFlags = {}));
    exports.WindowFlags = ImGuiWindowFlags;
    var ImGuiInputTextFlags;
    (function (ImGuiInputTextFlags) {
        ImGuiInputTextFlags[ImGuiInputTextFlags["None"] = 0] = "None";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CharsDecimal"] = 1] = "CharsDecimal";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CharsHexadecimal"] = 2] = "CharsHexadecimal";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CharsUppercase"] = 4] = "CharsUppercase";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CharsNoBlank"] = 8] = "CharsNoBlank";
        ImGuiInputTextFlags[ImGuiInputTextFlags["AutoSelectAll"] = 16] = "AutoSelectAll";
        ImGuiInputTextFlags[ImGuiInputTextFlags["EnterReturnsTrue"] = 32] = "EnterReturnsTrue";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CallbackCompletion"] = 64] = "CallbackCompletion";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CallbackHistory"] = 128] = "CallbackHistory";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CallbackAlways"] = 256] = "CallbackAlways";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CallbackCharFilter"] = 512] = "CallbackCharFilter";
        ImGuiInputTextFlags[ImGuiInputTextFlags["AllowTabInput"] = 1024] = "AllowTabInput";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CtrlEnterForNewLine"] = 2048] = "CtrlEnterForNewLine";
        ImGuiInputTextFlags[ImGuiInputTextFlags["NoHorizontalScroll"] = 4096] = "NoHorizontalScroll";
        ImGuiInputTextFlags[ImGuiInputTextFlags["AlwaysInsertMode"] = 8192] = "AlwaysInsertMode";
        ImGuiInputTextFlags[ImGuiInputTextFlags["ReadOnly"] = 16384] = "ReadOnly";
        ImGuiInputTextFlags[ImGuiInputTextFlags["Password"] = 32768] = "Password";
        ImGuiInputTextFlags[ImGuiInputTextFlags["NoUndoRedo"] = 65536] = "NoUndoRedo";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CharsScientific"] = 131072] = "CharsScientific";
        ImGuiInputTextFlags[ImGuiInputTextFlags["CallbackResize"] = 262144] = "CallbackResize";
        // [Internal]
        ImGuiInputTextFlags[ImGuiInputTextFlags["Multiline"] = 1048576] = "Multiline";
        ImGuiInputTextFlags[ImGuiInputTextFlags["NoMarkEdited"] = 2097152] = "NoMarkEdited";
    })(ImGuiInputTextFlags = exports.ImGuiInputTextFlags || (exports.ImGuiInputTextFlags = {}));
    exports.InputTextFlags = ImGuiInputTextFlags;
    var ImGuiTreeNodeFlags;
    (function (ImGuiTreeNodeFlags) {
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["None"] = 0] = "None";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["Selected"] = 1] = "Selected";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["Framed"] = 2] = "Framed";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["AllowItemOverlap"] = 4] = "AllowItemOverlap";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["NoTreePushOnOpen"] = 8] = "NoTreePushOnOpen";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["NoAutoOpenOnLog"] = 16] = "NoAutoOpenOnLog";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["DefaultOpen"] = 32] = "DefaultOpen";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["OpenOnDoubleClick"] = 64] = "OpenOnDoubleClick";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["OpenOnArrow"] = 128] = "OpenOnArrow";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["Leaf"] = 256] = "Leaf";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["Bullet"] = 512] = "Bullet";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["FramePadding"] = 1024] = "FramePadding";
        //SpanAllAvailWidth  = 1 << 11,  // FIXME: TODO: Extend hit box horizontally even if not framed
        //NoScrollOnOpen     = 1 << 12,  // FIXME: TODO: Disable automatic scroll on TreePop() if node got just open and contents is not visible
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["NavLeftJumpsBackHere"] = 8192] = "NavLeftJumpsBackHere";
        ImGuiTreeNodeFlags[ImGuiTreeNodeFlags["CollapsingHeader"] = 26] = "CollapsingHeader";
    })(ImGuiTreeNodeFlags = exports.ImGuiTreeNodeFlags || (exports.ImGuiTreeNodeFlags = {}));
    exports.TreeNodeFlags = ImGuiTreeNodeFlags;
    var ImGuiSelectableFlags;
    (function (ImGuiSelectableFlags) {
        ImGuiSelectableFlags[ImGuiSelectableFlags["None"] = 0] = "None";
        ImGuiSelectableFlags[ImGuiSelectableFlags["DontClosePopups"] = 1] = "DontClosePopups";
        ImGuiSelectableFlags[ImGuiSelectableFlags["SpanAllColumns"] = 2] = "SpanAllColumns";
        ImGuiSelectableFlags[ImGuiSelectableFlags["AllowDoubleClick"] = 4] = "AllowDoubleClick";
        ImGuiSelectableFlags[ImGuiSelectableFlags["Disabled"] = 8] = "Disabled"; // Cannot be selected, display greyed out text
    })(ImGuiSelectableFlags = exports.ImGuiSelectableFlags || (exports.ImGuiSelectableFlags = {}));
    exports.SelectableFlags = ImGuiSelectableFlags;
    var ImGuiComboFlags;
    (function (ImGuiComboFlags) {
        ImGuiComboFlags[ImGuiComboFlags["None"] = 0] = "None";
        ImGuiComboFlags[ImGuiComboFlags["PopupAlignLeft"] = 1] = "PopupAlignLeft";
        ImGuiComboFlags[ImGuiComboFlags["HeightSmall"] = 2] = "HeightSmall";
        ImGuiComboFlags[ImGuiComboFlags["HeightRegular"] = 4] = "HeightRegular";
        ImGuiComboFlags[ImGuiComboFlags["HeightLarge"] = 8] = "HeightLarge";
        ImGuiComboFlags[ImGuiComboFlags["HeightLargest"] = 16] = "HeightLargest";
        ImGuiComboFlags[ImGuiComboFlags["NoArrowButton"] = 32] = "NoArrowButton";
        ImGuiComboFlags[ImGuiComboFlags["NoPreview"] = 64] = "NoPreview";
        ImGuiComboFlags[ImGuiComboFlags["HeightMask_"] = 30] = "HeightMask_";
    })(ImGuiComboFlags = exports.ImGuiComboFlags || (exports.ImGuiComboFlags = {}));
    exports.ComboFlags = ImGuiComboFlags;
    var ImGuiTabBarFlags;
    (function (ImGuiTabBarFlags) {
        ImGuiTabBarFlags[ImGuiTabBarFlags["None"] = 0] = "None";
        ImGuiTabBarFlags[ImGuiTabBarFlags["Reorderable"] = 1] = "Reorderable";
        ImGuiTabBarFlags[ImGuiTabBarFlags["AutoSelectNewTabs"] = 2] = "AutoSelectNewTabs";
        ImGuiTabBarFlags[ImGuiTabBarFlags["TabListPopupButton"] = 4] = "TabListPopupButton";
        ImGuiTabBarFlags[ImGuiTabBarFlags["NoCloseWithMiddleMouseButton"] = 8] = "NoCloseWithMiddleMouseButton";
        ImGuiTabBarFlags[ImGuiTabBarFlags["NoTabListScrollingButtons"] = 16] = "NoTabListScrollingButtons";
        ImGuiTabBarFlags[ImGuiTabBarFlags["NoTooltip"] = 32] = "NoTooltip";
        ImGuiTabBarFlags[ImGuiTabBarFlags["FittingPolicyResizeDown"] = 64] = "FittingPolicyResizeDown";
        ImGuiTabBarFlags[ImGuiTabBarFlags["FittingPolicyScroll"] = 128] = "FittingPolicyScroll";
        ImGuiTabBarFlags[ImGuiTabBarFlags["FittingPolicyMask_"] = 192] = "FittingPolicyMask_";
        ImGuiTabBarFlags[ImGuiTabBarFlags["FittingPolicyDefault_"] = 64] = "FittingPolicyDefault_";
    })(ImGuiTabBarFlags = exports.ImGuiTabBarFlags || (exports.ImGuiTabBarFlags = {}));
    exports.TabBarFlags = ImGuiTabBarFlags;
    ;
    var ImGuiTabItemFlags;
    (function (ImGuiTabItemFlags) {
        ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_None"] = 0] = "ImGuiTabItemFlags_None";
        ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_UnsavedDocument"] = 1] = "ImGuiTabItemFlags_UnsavedDocument";
        ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_SetSelected"] = 2] = "ImGuiTabItemFlags_SetSelected";
        ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_NoCloseWithMiddleMouseButton"] = 4] = "ImGuiTabItemFlags_NoCloseWithMiddleMouseButton";
        ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_NoPushId"] = 8] = "ImGuiTabItemFlags_NoPushId"; // Don't call PushID(tab->ID)/PopID() on BeginTabItem()/EndTabItem()
    })(ImGuiTabItemFlags = exports.ImGuiTabItemFlags || (exports.ImGuiTabItemFlags = {}));
    exports.TabItemFlags = ImGuiTabItemFlags;
    ;
    var ImGuiFocusedFlags;
    (function (ImGuiFocusedFlags) {
        ImGuiFocusedFlags[ImGuiFocusedFlags["None"] = 0] = "None";
        ImGuiFocusedFlags[ImGuiFocusedFlags["ChildWindows"] = 1] = "ChildWindows";
        ImGuiFocusedFlags[ImGuiFocusedFlags["RootWindow"] = 2] = "RootWindow";
        ImGuiFocusedFlags[ImGuiFocusedFlags["AnyWindow"] = 4] = "AnyWindow";
        ImGuiFocusedFlags[ImGuiFocusedFlags["RootAndChildWindows"] = 3] = "RootAndChildWindows";
    })(ImGuiFocusedFlags = exports.ImGuiFocusedFlags || (exports.ImGuiFocusedFlags = {}));
    exports.FocusedFlags = ImGuiFocusedFlags;
    var ImGuiHoveredFlags;
    (function (ImGuiHoveredFlags) {
        ImGuiHoveredFlags[ImGuiHoveredFlags["None"] = 0] = "None";
        ImGuiHoveredFlags[ImGuiHoveredFlags["ChildWindows"] = 1] = "ChildWindows";
        ImGuiHoveredFlags[ImGuiHoveredFlags["RootWindow"] = 2] = "RootWindow";
        ImGuiHoveredFlags[ImGuiHoveredFlags["AnyWindow"] = 4] = "AnyWindow";
        ImGuiHoveredFlags[ImGuiHoveredFlags["AllowWhenBlockedByPopup"] = 8] = "AllowWhenBlockedByPopup";
        //AllowWhenBlockedByModal     = 1 << 4,   // Return true even if a modal popup window is normally blocking access to this item/window. FIXME-TODO: Unavailable yet.
        ImGuiHoveredFlags[ImGuiHoveredFlags["AllowWhenBlockedByActiveItem"] = 32] = "AllowWhenBlockedByActiveItem";
        ImGuiHoveredFlags[ImGuiHoveredFlags["AllowWhenOverlapped"] = 64] = "AllowWhenOverlapped";
        ImGuiHoveredFlags[ImGuiHoveredFlags["AllowWhenDisabled"] = 128] = "AllowWhenDisabled";
        ImGuiHoveredFlags[ImGuiHoveredFlags["RectOnly"] = 104] = "RectOnly";
        ImGuiHoveredFlags[ImGuiHoveredFlags["RootAndChildWindows"] = 3] = "RootAndChildWindows";
    })(ImGuiHoveredFlags = exports.ImGuiHoveredFlags || (exports.ImGuiHoveredFlags = {}));
    exports.HoveredFlags = ImGuiHoveredFlags;
    var ImGuiDragDropFlags;
    (function (ImGuiDragDropFlags) {
        // BeginDragDropSource() flags
        ImGuiDragDropFlags[ImGuiDragDropFlags["None"] = 0] = "None";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceNoPreviewTooltip"] = 1] = "SourceNoPreviewTooltip";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceNoDisableHover"] = 2] = "SourceNoDisableHover";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceNoHoldToOpenOthers"] = 4] = "SourceNoHoldToOpenOthers";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceAllowNullID"] = 8] = "SourceAllowNullID";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceExtern"] = 16] = "SourceExtern";
        ImGuiDragDropFlags[ImGuiDragDropFlags["SourceAutoExpirePayload"] = 32] = "SourceAutoExpirePayload";
        // AcceptDragDropPayload() flags
        ImGuiDragDropFlags[ImGuiDragDropFlags["AcceptBeforeDelivery"] = 1024] = "AcceptBeforeDelivery";
        ImGuiDragDropFlags[ImGuiDragDropFlags["AcceptNoDrawDefaultRect"] = 2048] = "AcceptNoDrawDefaultRect";
        ImGuiDragDropFlags[ImGuiDragDropFlags["AcceptNoPreviewTooltip"] = 4096] = "AcceptNoPreviewTooltip";
        ImGuiDragDropFlags[ImGuiDragDropFlags["AcceptPeekOnly"] = 3072] = "AcceptPeekOnly";
    })(ImGuiDragDropFlags = exports.ImGuiDragDropFlags || (exports.ImGuiDragDropFlags = {}));
    exports.DragDropFlags = ImGuiDragDropFlags;
    // Standard Drag and Drop payload types. You can define you own payload types using 12-characters long strings. Types starting with '_' are defined by Dear ImGui.
    exports.IMGUI_PAYLOAD_TYPE_COLOR_3F = "_COL3F"; // float[3]     // Standard type for colors, without alpha. User code may use this type.
    exports.IMGUI_PAYLOAD_TYPE_COLOR_4F = "_COL4F"; // float[4]     // Standard type for colors. User code may use this type.
    var ImGuiDataType;
    (function (ImGuiDataType) {
        ImGuiDataType[ImGuiDataType["S8"] = 0] = "S8";
        ImGuiDataType[ImGuiDataType["U8"] = 1] = "U8";
        ImGuiDataType[ImGuiDataType["S16"] = 2] = "S16";
        ImGuiDataType[ImGuiDataType["U16"] = 3] = "U16";
        ImGuiDataType[ImGuiDataType["S32"] = 4] = "S32";
        ImGuiDataType[ImGuiDataType["U32"] = 5] = "U32";
        ImGuiDataType[ImGuiDataType["S64"] = 6] = "S64";
        ImGuiDataType[ImGuiDataType["U64"] = 7] = "U64";
        ImGuiDataType[ImGuiDataType["Float"] = 8] = "Float";
        ImGuiDataType[ImGuiDataType["Double"] = 9] = "Double";
        ImGuiDataType[ImGuiDataType["COUNT"] = 10] = "COUNT";
    })(ImGuiDataType = exports.ImGuiDataType || (exports.ImGuiDataType = {}));
    exports.DataType = ImGuiDataType;
    var ImGuiDir;
    (function (ImGuiDir) {
        ImGuiDir[ImGuiDir["None"] = -1] = "None";
        ImGuiDir[ImGuiDir["Left"] = 0] = "Left";
        ImGuiDir[ImGuiDir["Right"] = 1] = "Right";
        ImGuiDir[ImGuiDir["Up"] = 2] = "Up";
        ImGuiDir[ImGuiDir["Down"] = 3] = "Down";
        ImGuiDir[ImGuiDir["COUNT"] = 4] = "COUNT";
    })(ImGuiDir = exports.ImGuiDir || (exports.ImGuiDir = {}));
    exports.Dir = ImGuiDir;
    var ImGuiKey;
    (function (ImGuiKey) {
        ImGuiKey[ImGuiKey["Tab"] = 0] = "Tab";
        ImGuiKey[ImGuiKey["LeftArrow"] = 1] = "LeftArrow";
        ImGuiKey[ImGuiKey["RightArrow"] = 2] = "RightArrow";
        ImGuiKey[ImGuiKey["UpArrow"] = 3] = "UpArrow";
        ImGuiKey[ImGuiKey["DownArrow"] = 4] = "DownArrow";
        ImGuiKey[ImGuiKey["PageUp"] = 5] = "PageUp";
        ImGuiKey[ImGuiKey["PageDown"] = 6] = "PageDown";
        ImGuiKey[ImGuiKey["Home"] = 7] = "Home";
        ImGuiKey[ImGuiKey["End"] = 8] = "End";
        ImGuiKey[ImGuiKey["Insert"] = 9] = "Insert";
        ImGuiKey[ImGuiKey["Delete"] = 10] = "Delete";
        ImGuiKey[ImGuiKey["Backspace"] = 11] = "Backspace";
        ImGuiKey[ImGuiKey["Space"] = 12] = "Space";
        ImGuiKey[ImGuiKey["Enter"] = 13] = "Enter";
        ImGuiKey[ImGuiKey["Escape"] = 14] = "Escape";
        ImGuiKey[ImGuiKey["A"] = 15] = "A";
        ImGuiKey[ImGuiKey["C"] = 16] = "C";
        ImGuiKey[ImGuiKey["V"] = 17] = "V";
        ImGuiKey[ImGuiKey["X"] = 18] = "X";
        ImGuiKey[ImGuiKey["Y"] = 19] = "Y";
        ImGuiKey[ImGuiKey["Z"] = 20] = "Z";
        ImGuiKey[ImGuiKey["COUNT"] = 21] = "COUNT";
    })(ImGuiKey = exports.ImGuiKey || (exports.ImGuiKey = {}));
    exports.Key = ImGuiKey;
    var ImGuiNavInput;
    (function (ImGuiNavInput) {
        // Gamepad Mapping
        ImGuiNavInput[ImGuiNavInput["Activate"] = 0] = "Activate";
        ImGuiNavInput[ImGuiNavInput["Cancel"] = 1] = "Cancel";
        ImGuiNavInput[ImGuiNavInput["Input"] = 2] = "Input";
        ImGuiNavInput[ImGuiNavInput["Menu"] = 3] = "Menu";
        ImGuiNavInput[ImGuiNavInput["DpadLeft"] = 4] = "DpadLeft";
        ImGuiNavInput[ImGuiNavInput["DpadRight"] = 5] = "DpadRight";
        ImGuiNavInput[ImGuiNavInput["DpadUp"] = 6] = "DpadUp";
        ImGuiNavInput[ImGuiNavInput["DpadDown"] = 7] = "DpadDown";
        ImGuiNavInput[ImGuiNavInput["LStickLeft"] = 8] = "LStickLeft";
        ImGuiNavInput[ImGuiNavInput["LStickRight"] = 9] = "LStickRight";
        ImGuiNavInput[ImGuiNavInput["LStickUp"] = 10] = "LStickUp";
        ImGuiNavInput[ImGuiNavInput["LStickDown"] = 11] = "LStickDown";
        ImGuiNavInput[ImGuiNavInput["FocusPrev"] = 12] = "FocusPrev";
        ImGuiNavInput[ImGuiNavInput["FocusNext"] = 13] = "FocusNext";
        ImGuiNavInput[ImGuiNavInput["TweakSlow"] = 14] = "TweakSlow";
        ImGuiNavInput[ImGuiNavInput["TweakFast"] = 15] = "TweakFast";
        // [Internal] Don't use directly! This is used internally to differentiate keyboard from gamepad inputs for behaviors that require to differentiate them.
        // Keyboard behavior that have no corresponding gamepad mapping (e.g. CTRL+TAB) may be directly reading from io.KeyDown[] instead of io.NavInputs[].
        ImGuiNavInput[ImGuiNavInput["KeyMenu_"] = 16] = "KeyMenu_";
        ImGuiNavInput[ImGuiNavInput["KeyTab_"] = 17] = "KeyTab_";
        ImGuiNavInput[ImGuiNavInput["KeyLeft_"] = 18] = "KeyLeft_";
        ImGuiNavInput[ImGuiNavInput["KeyRight_"] = 19] = "KeyRight_";
        ImGuiNavInput[ImGuiNavInput["KeyUp_"] = 20] = "KeyUp_";
        ImGuiNavInput[ImGuiNavInput["KeyDown_"] = 21] = "KeyDown_";
        ImGuiNavInput[ImGuiNavInput["COUNT"] = 22] = "COUNT";
        ImGuiNavInput[ImGuiNavInput["InternalStart_"] = 16] = "InternalStart_";
    })(ImGuiNavInput = exports.ImGuiNavInput || (exports.ImGuiNavInput = {}));
    exports.NavInput = ImGuiNavInput;
    var ImGuiConfigFlags;
    (function (ImGuiConfigFlags) {
        ImGuiConfigFlags[ImGuiConfigFlags["None"] = 0] = "None";
        ImGuiConfigFlags[ImGuiConfigFlags["NavEnableKeyboard"] = 1] = "NavEnableKeyboard";
        ImGuiConfigFlags[ImGuiConfigFlags["NavEnableGamepad"] = 2] = "NavEnableGamepad";
        ImGuiConfigFlags[ImGuiConfigFlags["NavEnableSetMousePos"] = 4] = "NavEnableSetMousePos";
        ImGuiConfigFlags[ImGuiConfigFlags["NavNoCaptureKeyboard"] = 8] = "NavNoCaptureKeyboard";
        ImGuiConfigFlags[ImGuiConfigFlags["NoMouse"] = 16] = "NoMouse";
        ImGuiConfigFlags[ImGuiConfigFlags["NoMouseCursorChange"] = 32] = "NoMouseCursorChange";
        ImGuiConfigFlags[ImGuiConfigFlags["IsSRGB"] = 1048576] = "IsSRGB";
        ImGuiConfigFlags[ImGuiConfigFlags["IsTouchScreen"] = 2097152] = "IsTouchScreen"; // Application is using a touch screen instead of a mouse.
    })(ImGuiConfigFlags = exports.ImGuiConfigFlags || (exports.ImGuiConfigFlags = {}));
    exports.ConfigFlags = ImGuiConfigFlags;
    var ImGuiCol;
    (function (ImGuiCol) {
        ImGuiCol[ImGuiCol["Text"] = 0] = "Text";
        ImGuiCol[ImGuiCol["TextDisabled"] = 1] = "TextDisabled";
        ImGuiCol[ImGuiCol["WindowBg"] = 2] = "WindowBg";
        ImGuiCol[ImGuiCol["ChildBg"] = 3] = "ChildBg";
        ImGuiCol[ImGuiCol["PopupBg"] = 4] = "PopupBg";
        ImGuiCol[ImGuiCol["Border"] = 5] = "Border";
        ImGuiCol[ImGuiCol["BorderShadow"] = 6] = "BorderShadow";
        ImGuiCol[ImGuiCol["FrameBg"] = 7] = "FrameBg";
        ImGuiCol[ImGuiCol["FrameBgHovered"] = 8] = "FrameBgHovered";
        ImGuiCol[ImGuiCol["FrameBgActive"] = 9] = "FrameBgActive";
        ImGuiCol[ImGuiCol["TitleBg"] = 10] = "TitleBg";
        ImGuiCol[ImGuiCol["TitleBgActive"] = 11] = "TitleBgActive";
        ImGuiCol[ImGuiCol["TitleBgCollapsed"] = 12] = "TitleBgCollapsed";
        ImGuiCol[ImGuiCol["MenuBarBg"] = 13] = "MenuBarBg";
        ImGuiCol[ImGuiCol["ScrollbarBg"] = 14] = "ScrollbarBg";
        ImGuiCol[ImGuiCol["ScrollbarGrab"] = 15] = "ScrollbarGrab";
        ImGuiCol[ImGuiCol["ScrollbarGrabHovered"] = 16] = "ScrollbarGrabHovered";
        ImGuiCol[ImGuiCol["ScrollbarGrabActive"] = 17] = "ScrollbarGrabActive";
        ImGuiCol[ImGuiCol["CheckMark"] = 18] = "CheckMark";
        ImGuiCol[ImGuiCol["SliderGrab"] = 19] = "SliderGrab";
        ImGuiCol[ImGuiCol["SliderGrabActive"] = 20] = "SliderGrabActive";
        ImGuiCol[ImGuiCol["Button"] = 21] = "Button";
        ImGuiCol[ImGuiCol["ButtonHovered"] = 22] = "ButtonHovered";
        ImGuiCol[ImGuiCol["ButtonActive"] = 23] = "ButtonActive";
        ImGuiCol[ImGuiCol["Header"] = 24] = "Header";
        ImGuiCol[ImGuiCol["HeaderHovered"] = 25] = "HeaderHovered";
        ImGuiCol[ImGuiCol["HeaderActive"] = 26] = "HeaderActive";
        ImGuiCol[ImGuiCol["Separator"] = 27] = "Separator";
        ImGuiCol[ImGuiCol["SeparatorHovered"] = 28] = "SeparatorHovered";
        ImGuiCol[ImGuiCol["SeparatorActive"] = 29] = "SeparatorActive";
        ImGuiCol[ImGuiCol["ResizeGrip"] = 30] = "ResizeGrip";
        ImGuiCol[ImGuiCol["ResizeGripHovered"] = 31] = "ResizeGripHovered";
        ImGuiCol[ImGuiCol["ResizeGripActive"] = 32] = "ResizeGripActive";
        ImGuiCol[ImGuiCol["Tab"] = 33] = "Tab";
        ImGuiCol[ImGuiCol["TabHovered"] = 34] = "TabHovered";
        ImGuiCol[ImGuiCol["TabActive"] = 35] = "TabActive";
        ImGuiCol[ImGuiCol["TabUnfocused"] = 36] = "TabUnfocused";
        ImGuiCol[ImGuiCol["TabUnfocusedActive"] = 37] = "TabUnfocusedActive";
        ImGuiCol[ImGuiCol["PlotLines"] = 38] = "PlotLines";
        ImGuiCol[ImGuiCol["PlotLinesHovered"] = 39] = "PlotLinesHovered";
        ImGuiCol[ImGuiCol["PlotHistogram"] = 40] = "PlotHistogram";
        ImGuiCol[ImGuiCol["PlotHistogramHovered"] = 41] = "PlotHistogramHovered";
        ImGuiCol[ImGuiCol["TextSelectedBg"] = 42] = "TextSelectedBg";
        ImGuiCol[ImGuiCol["DragDropTarget"] = 43] = "DragDropTarget";
        ImGuiCol[ImGuiCol["NavHighlight"] = 44] = "NavHighlight";
        ImGuiCol[ImGuiCol["NavWindowingHighlight"] = 45] = "NavWindowingHighlight";
        ImGuiCol[ImGuiCol["NavWindowingDimBg"] = 46] = "NavWindowingDimBg";
        ImGuiCol[ImGuiCol["ModalWindowDimBg"] = 47] = "ModalWindowDimBg";
        ImGuiCol[ImGuiCol["COUNT"] = 48] = "COUNT";
    })(ImGuiCol = exports.ImGuiCol || (exports.ImGuiCol = {}));
    exports.Col = ImGuiCol;
    var ImGuiStyleVar;
    (function (ImGuiStyleVar) {
        // Enum name ......................// Member in ImGuiStyle structure (see ImGuiStyle for descriptions)
        ImGuiStyleVar[ImGuiStyleVar["Alpha"] = 0] = "Alpha";
        ImGuiStyleVar[ImGuiStyleVar["WindowPadding"] = 1] = "WindowPadding";
        ImGuiStyleVar[ImGuiStyleVar["WindowRounding"] = 2] = "WindowRounding";
        ImGuiStyleVar[ImGuiStyleVar["WindowBorderSize"] = 3] = "WindowBorderSize";
        ImGuiStyleVar[ImGuiStyleVar["WindowMinSize"] = 4] = "WindowMinSize";
        ImGuiStyleVar[ImGuiStyleVar["WindowTitleAlign"] = 5] = "WindowTitleAlign";
        // WindowMenuButtonPosition, // ImGuiDir WindowMenuButtonPosition
        ImGuiStyleVar[ImGuiStyleVar["ChildRounding"] = 6] = "ChildRounding";
        ImGuiStyleVar[ImGuiStyleVar["ChildBorderSize"] = 7] = "ChildBorderSize";
        ImGuiStyleVar[ImGuiStyleVar["PopupRounding"] = 8] = "PopupRounding";
        ImGuiStyleVar[ImGuiStyleVar["PopupBorderSize"] = 9] = "PopupBorderSize";
        ImGuiStyleVar[ImGuiStyleVar["FramePadding"] = 10] = "FramePadding";
        ImGuiStyleVar[ImGuiStyleVar["FrameRounding"] = 11] = "FrameRounding";
        ImGuiStyleVar[ImGuiStyleVar["FrameBorderSize"] = 12] = "FrameBorderSize";
        ImGuiStyleVar[ImGuiStyleVar["ItemSpacing"] = 13] = "ItemSpacing";
        ImGuiStyleVar[ImGuiStyleVar["ItemInnerSpacing"] = 14] = "ItemInnerSpacing";
        ImGuiStyleVar[ImGuiStyleVar["IndentSpacing"] = 15] = "IndentSpacing";
        ImGuiStyleVar[ImGuiStyleVar["ScrollbarSize"] = 16] = "ScrollbarSize";
        ImGuiStyleVar[ImGuiStyleVar["ScrollbarRounding"] = 17] = "ScrollbarRounding";
        ImGuiStyleVar[ImGuiStyleVar["GrabMinSize"] = 18] = "GrabMinSize";
        ImGuiStyleVar[ImGuiStyleVar["GrabRounding"] = 19] = "GrabRounding";
        ImGuiStyleVar[ImGuiStyleVar["TabRounding"] = 20] = "TabRounding";
        ImGuiStyleVar[ImGuiStyleVar["ButtonTextAlign"] = 21] = "ButtonTextAlign";
        ImGuiStyleVar[ImGuiStyleVar["SelectableTextAlign"] = 22] = "SelectableTextAlign";
        ImGuiStyleVar[ImGuiStyleVar["Count_"] = 23] = "Count_";
        ImGuiStyleVar[ImGuiStyleVar["COUNT"] = 23] = "COUNT";
    })(ImGuiStyleVar = exports.ImGuiStyleVar || (exports.ImGuiStyleVar = {}));
    exports.StyleVar = ImGuiStyleVar;
    var ImGuiBackendFlags;
    (function (ImGuiBackendFlags) {
        ImGuiBackendFlags[ImGuiBackendFlags["None"] = 0] = "None";
        ImGuiBackendFlags[ImGuiBackendFlags["HasGamepad"] = 1] = "HasGamepad";
        ImGuiBackendFlags[ImGuiBackendFlags["HasMouseCursors"] = 2] = "HasMouseCursors";
        ImGuiBackendFlags[ImGuiBackendFlags["HasSetMousePos"] = 4] = "HasSetMousePos";
        ImGuiBackendFlags[ImGuiBackendFlags["RendererHasVtxOffset"] = 8] = "RendererHasVtxOffset";
    })(ImGuiBackendFlags = exports.ImGuiBackendFlags || (exports.ImGuiBackendFlags = {}));
    exports.BackendFlags = ImGuiBackendFlags;
    var ImGuiColorEditFlags;
    (function (ImGuiColorEditFlags) {
        ImGuiColorEditFlags[ImGuiColorEditFlags["None"] = 0] = "None";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoAlpha"] = 2] = "NoAlpha";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoPicker"] = 4] = "NoPicker";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoOptions"] = 8] = "NoOptions";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoSmallPreview"] = 16] = "NoSmallPreview";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoInputs"] = 32] = "NoInputs";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoTooltip"] = 64] = "NoTooltip";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoLabel"] = 128] = "NoLabel";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoSidePreview"] = 256] = "NoSidePreview";
        ImGuiColorEditFlags[ImGuiColorEditFlags["NoDragDrop"] = 512] = "NoDragDrop";
        // User Options (right-click on widget to change some of them). You can set application defaults using SetColorEditOptions(). The idea is that you probably don't want to override them in most of your calls, let the user choose and/or call SetColorEditOptions() during startup.
        ImGuiColorEditFlags[ImGuiColorEditFlags["AlphaBar"] = 65536] = "AlphaBar";
        ImGuiColorEditFlags[ImGuiColorEditFlags["AlphaPreview"] = 131072] = "AlphaPreview";
        ImGuiColorEditFlags[ImGuiColorEditFlags["AlphaPreviewHalf"] = 262144] = "AlphaPreviewHalf";
        ImGuiColorEditFlags[ImGuiColorEditFlags["HDR"] = 524288] = "HDR";
        ImGuiColorEditFlags[ImGuiColorEditFlags["DisplayRGB"] = 1048576] = "DisplayRGB";
        ImGuiColorEditFlags[ImGuiColorEditFlags["DisplayHSV"] = 2097152] = "DisplayHSV";
        ImGuiColorEditFlags[ImGuiColorEditFlags["DisplayHex"] = 4194304] = "DisplayHex";
        ImGuiColorEditFlags[ImGuiColorEditFlags["Uint8"] = 8388608] = "Uint8";
        ImGuiColorEditFlags[ImGuiColorEditFlags["Float"] = 16777216] = "Float";
        ImGuiColorEditFlags[ImGuiColorEditFlags["PickerHueBar"] = 33554432] = "PickerHueBar";
        ImGuiColorEditFlags[ImGuiColorEditFlags["PickerHueWheel"] = 67108864] = "PickerHueWheel";
        ImGuiColorEditFlags[ImGuiColorEditFlags["InputRGB"] = 134217728] = "InputRGB";
        ImGuiColorEditFlags[ImGuiColorEditFlags["InputHSV"] = 268435456] = "InputHSV";
        // Defaults Options. You can set application defaults using SetColorEditOptions(). The intent is that you probably don't want to
        // override them in most of your calls. Let the user choose via the option menu and/or call SetColorEditOptions() once during startup.
        ImGuiColorEditFlags[ImGuiColorEditFlags["_OptionsDefault"] = 177209344] = "_OptionsDefault";
        // [Internal] Masks
        ImGuiColorEditFlags[ImGuiColorEditFlags["_DisplayMask"] = 7340032] = "_DisplayMask";
        ImGuiColorEditFlags[ImGuiColorEditFlags["_DataTypeMask"] = 25165824] = "_DataTypeMask";
        ImGuiColorEditFlags[ImGuiColorEditFlags["_PickerMask"] = 100663296] = "_PickerMask";
        ImGuiColorEditFlags[ImGuiColorEditFlags["_InputMask"] = 402653184] = "_InputMask";
    })(ImGuiColorEditFlags = exports.ImGuiColorEditFlags || (exports.ImGuiColorEditFlags = {}));
    exports.ColorEditFlags = ImGuiColorEditFlags;
    var ImGuiMouseCursor;
    (function (ImGuiMouseCursor) {
        ImGuiMouseCursor[ImGuiMouseCursor["None"] = -1] = "None";
        ImGuiMouseCursor[ImGuiMouseCursor["Arrow"] = 0] = "Arrow";
        ImGuiMouseCursor[ImGuiMouseCursor["TextInput"] = 1] = "TextInput";
        ImGuiMouseCursor[ImGuiMouseCursor["ResizeAll"] = 2] = "ResizeAll";
        ImGuiMouseCursor[ImGuiMouseCursor["ResizeNS"] = 3] = "ResizeNS";
        ImGuiMouseCursor[ImGuiMouseCursor["ResizeEW"] = 4] = "ResizeEW";
        ImGuiMouseCursor[ImGuiMouseCursor["ResizeNESW"] = 5] = "ResizeNESW";
        ImGuiMouseCursor[ImGuiMouseCursor["ResizeNWSE"] = 6] = "ResizeNWSE";
        ImGuiMouseCursor[ImGuiMouseCursor["Hand"] = 7] = "Hand";
        ImGuiMouseCursor[ImGuiMouseCursor["Count_"] = 8] = "Count_";
        ImGuiMouseCursor[ImGuiMouseCursor["COUNT"] = 8] = "COUNT";
    })(ImGuiMouseCursor = exports.ImGuiMouseCursor || (exports.ImGuiMouseCursor = {}));
    exports.MouseCursor = ImGuiMouseCursor;
    var ImGuiCond;
    (function (ImGuiCond) {
        ImGuiCond[ImGuiCond["Always"] = 1] = "Always";
        ImGuiCond[ImGuiCond["Once"] = 2] = "Once";
        ImGuiCond[ImGuiCond["FirstUseEver"] = 4] = "FirstUseEver";
        ImGuiCond[ImGuiCond["Appearing"] = 8] = "Appearing";
    })(ImGuiCond = exports.ImGuiCond || (exports.ImGuiCond = {}));
    exports.Cond = ImGuiCond;
    var ImDrawCornerFlags;
    (function (ImDrawCornerFlags) {
        ImDrawCornerFlags[ImDrawCornerFlags["TopLeft"] = 1] = "TopLeft";
        ImDrawCornerFlags[ImDrawCornerFlags["TopRight"] = 2] = "TopRight";
        ImDrawCornerFlags[ImDrawCornerFlags["BotLeft"] = 4] = "BotLeft";
        ImDrawCornerFlags[ImDrawCornerFlags["BotRight"] = 8] = "BotRight";
        ImDrawCornerFlags[ImDrawCornerFlags["Top"] = 3] = "Top";
        ImDrawCornerFlags[ImDrawCornerFlags["Bot"] = 12] = "Bot";
        ImDrawCornerFlags[ImDrawCornerFlags["Left"] = 5] = "Left";
        ImDrawCornerFlags[ImDrawCornerFlags["Right"] = 10] = "Right";
        ImDrawCornerFlags[ImDrawCornerFlags["All"] = 15] = "All";
    })(ImDrawCornerFlags = exports.ImDrawCornerFlags || (exports.ImDrawCornerFlags = {}));
    exports.wCornerFlags = ImDrawCornerFlags;
    var ImDrawListFlags;
    (function (ImDrawListFlags) {
        ImDrawListFlags[ImDrawListFlags["None"] = 0] = "None";
        ImDrawListFlags[ImDrawListFlags["AntiAliasedLines"] = 1] = "AntiAliasedLines";
        ImDrawListFlags[ImDrawListFlags["AntiAliasedFill"] = 2] = "AntiAliasedFill";
    })(ImDrawListFlags = exports.ImDrawListFlags || (exports.ImDrawListFlags = {}));
    exports.wListFlags = ImDrawListFlags;
    class ImVec2 {
        constructor(x = 0.0, y = 0.0) {
            this.x = x;
            this.y = y;
        }
        Set(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        Copy(other) {
            this.x = other.x;
            this.y = other.y;
            return this;
        }
        Equals(other) {
            if (this.x !== other.x) {
                return false;
            }
            if (this.y !== other.y) {
                return false;
            }
            return true;
        }
    }
    exports.ImVec2 = ImVec2;
    ImVec2.ZERO = new ImVec2(0.0, 0.0);
    ImVec2.UNIT = new ImVec2(1.0, 1.0);
    ImVec2.UNIT_X = new ImVec2(1.0, 0.0);
    ImVec2.UNIT_Y = new ImVec2(0.0, 1.0);
    class ImVec4 {
        constructor(x = 0.0, y = 0.0, z = 0.0, w = 1.0) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
            return this;
        }
        Copy(other) {
            this.x = other.x;
            this.y = other.y;
            this.z = other.z;
            this.w = other.w;
            return this;
        }
        Equals(other) {
            if (this.x !== other.x) {
                return false;
            }
            if (this.y !== other.y) {
                return false;
            }
            if (this.z !== other.z) {
                return false;
            }
            if (this.w !== other.w) {
                return false;
            }
            return true;
        }
    }
    exports.ImVec4 = ImVec4;
    ImVec4.ZERO = new ImVec4(0.0, 0.0, 0.0, 0.0);
    ImVec4.UNIT = new ImVec4(1.0, 1.0, 1.0, 1.0);
    ImVec4.UNIT_X = new ImVec4(1.0, 0.0, 0.0, 0.0);
    ImVec4.UNIT_Y = new ImVec4(0.0, 1.0, 0.0, 0.0);
    ImVec4.UNIT_Z = new ImVec4(0.0, 0.0, 1.0, 0.0);
    ImVec4.UNIT_W = new ImVec4(0.0, 0.0, 0.0, 1.0);
    ImVec4.BLACK = new ImVec4(0.0, 0.0, 0.0, 1.0);
    ImVec4.WHITE = new ImVec4(1.0, 1.0, 1.0, 1.0);
    //-----------------------------------------------------------------------------
    // Helpers
    //-----------------------------------------------------------------------------
    // Lightweight std::vector<> like class to avoid dragging dependencies (also: windows implementation of STL with debug enabled is absurdly slow, so let's bypass it so our code runs fast in debug).
    // Our implementation does NOT call C++ constructors/destructors. This is intentional and we do not require it. Do not use this class as a straight std::vector replacement in your code!
    class ImVector extends Array {
        constructor() {
            super(...arguments);
            this.Data = this;
            // public:
            // int                         Size;
            // int                         Capacity;
            // T*                          Data;
            // typedef T                   value_type;
            // typedef value_type*         iterator;
            // typedef const value_type*   const_iterator;
            // inline ImVector()           { Size = Capacity = 0; Data = NULL; }
            // inline ~ImVector()          { if (Data) ImGui::MemFree(Data); }
            // inline bool                 empty() const                   { return Size == 0; }
            // inline int                  size() const                    { return Size; }
            // inline int                  capacity() const                { return Capacity; }
            // inline value_type&          operator[](int i)               { IM_ASSERT(i < Size); return Data[i]; }
            // inline const value_type&    operator[](int i) const         { IM_ASSERT(i < Size); return Data[i]; }
            // inline void                 clear()                         { if (Data) { Size = Capacity = 0; ImGui::MemFree(Data); Data = NULL; } }
            // inline iterator             begin()                         { return Data; }
            // inline const_iterator       begin() const                   { return Data; }
            // inline iterator             end()                           { return Data + Size; }
            // inline const_iterator       end() const                     { return Data + Size; }
            // inline value_type&          front()                         { IM_ASSERT(Size > 0); return Data[0]; }
            // inline const value_type&    front() const                   { IM_ASSERT(Size > 0); return Data[0]; }
            // inline value_type&          back()                          { IM_ASSERT(Size > 0); return Data[Size - 1]; }
            // inline const value_type&    back() const                    { IM_ASSERT(Size > 0); return Data[Size - 1]; }
            // inline void                 swap(ImVector<T>& rhs)          { int rhs_size = rhs.Size; rhs.Size = Size; Size = rhs_size; int rhs_cap = rhs.Capacity; rhs.Capacity = Capacity; Capacity = rhs_cap; value_type* rhs_data = rhs.Data; rhs.Data = Data; Data = rhs_data; }
            // inline int                  _grow_capacity(int size) const  { int new_capacity = Capacity ? (Capacity + Capacity/2) : 8; return new_capacity > size ? new_capacity : size; }
            // inline void                 resize(int new_size)            { if (new_size > Capacity) reserve(_grow_capacity(new_size)); Size = new_size; }
            // inline void                 resize(int new_size, const T& v){ if (new_size > Capacity) reserve(_grow_capacity(new_size)); if (new_size > Size) for (int n = Size; n < new_size; n++) Data[n] = v; Size = new_size; }
            // inline void                 reserve(int new_capacity)
            // {
            //     if (new_capacity <= Capacity)
            //         return;
            //     T* new_data = (value_type*)ImGui::MemAlloc((size_t)new_capacity * sizeof(T));
            //     if (Data)
            //         memcpy(new_data, Data, (size_t)Size * sizeof(T));
            //     ImGui::MemFree(Data);
            //     Data = new_data;
            //     Capacity = new_capacity;
            // }
            // inline void                 push_back(const value_type& v)  { if (Size == Capacity) reserve(_grow_capacity(Size + 1)); Data[Size++] = v; }
            // inline void                 pop_back()                      { IM_ASSERT(Size > 0); Size--; }
            // inline void                 push_front(const value_type& v) { if (Size == 0) push_back(v); else insert(Data, v); }
            // inline iterator             erase(const_iterator it)                        { IM_ASSERT(it >= Data && it < Data+Size); const ptrdiff_t off = it - Data; memmove(Data + off, Data + off + 1, ((size_t)Size - (size_t)off - 1) * sizeof(value_type)); Size--; return Data + off; }
            // inline iterator             erase(const_iterator it, const_iterator it_last){ IM_ASSERT(it >= Data && it < Data+Size && it_last > it && it_last <= Data+Size); const ptrdiff_t count = it_last - it; const ptrdiff_t off = it - Data; memmove(Data + off, Data + off + count, ((size_t)Size - (size_t)off - count) * sizeof(value_type)); Size -= (int)count; return Data + off; }
            // inline iterator             erase_unsorted(const_iterator it)               { IM_ASSERT(it >= Data && it < Data+Size);  const ptrdiff_t off = it - Data; if (it < Data+Size-1) memcpy(Data + off, Data + Size - 1, sizeof(value_type)); Size--; return Data + off; }
            // inline iterator             insert(const_iterator it, const value_type& v)  { IM_ASSERT(it >= Data && it <= Data+Size); const ptrdiff_t off = it - Data; if (Size == Capacity) reserve(_grow_capacity(Size + 1)); if (off < (int)Size) memmove(Data + off + 1, Data + off, ((size_t)Size - (size_t)off) * sizeof(value_type)); Data[off] = v; Size++; return Data + off; }
            // inline bool                 contains(const value_type& v) const             { const T* data = Data;  const T* data_end = Data + Size; while (data < data_end) if (*data++ == v) return true; return false; }
        }
        get Size() { return this.length; }
        empty() { return this.length === 0; }
        clear() { this.length = 0; }
        pop_back() { return this.pop(); }
        push_back(value) { this.push(value); }
    }
    exports.ImVector = ImVector;
    // Helper: Parse and apply text filters. In format "aaaaa[,bbbb][,ccccc]"
    class ImGuiTextFilter {
        // IMGUI_API           ImGuiTextFilter(const char* default_filter = "");
        constructor(default_filter = "") {
            // [Internal]
            // struct TextRange
            // {
            //     const char* b;
            //     const char* e;
            //     TextRange() { b = e = NULL; }
            //     TextRange(const char* _b, const char* _e) { b = _b; e = _e; }
            //     const char* begin() const { return b; }
            //     const char* end() const { return e; }
            //     bool empty() const { return b == e; }
            //     char front() const { return *b; }
            //     static bool is_blank(char c) { return c == ' ' || c == '\t'; }
            //     void trim_blanks() { while (b < e && is_blank(*b)) b++; while (e > b && is_blank(*(e-1))) e--; }
            //     IMGUI_API void split(char separator, ImVector<TextRange>& out);
            // };
            // char                InputBuf[256];
            this.InputBuf = new ImStringBuffer(256);
            // ImVector<TextRange> Filters;
            // int                 CountGrep;
            this.CountGrep = 0;
            if (default_filter) {
                // ImStrncpy(InputBuf, default_filter, IM_ARRAYSIZE(InputBuf));
                this.InputBuf.buffer = default_filter;
                this.Build();
            }
            else {
                // InputBuf[0] = 0;
                this.InputBuf.buffer = "";
                this.CountGrep = 0;
            }
        }
        // IMGUI_API bool      Draw(const char* label = "Filter (inc,-exc)", float width = 0.0f);    // Helper calling InputText+Build
        Draw(label = "Filter (inc,-exc)", width = 0.0) {
            if (width !== 0.0)
                bind.PushItemWidth(width);
            const value_changed = InputText(label, this.InputBuf, IM_ARRAYSIZE(this.InputBuf));
            if (width !== 0.0)
                bind.PopItemWidth();
            if (value_changed)
                this.Build();
            return value_changed;
        }
        // IMGUI_API bool      PassFilter(const char* text, const char* text_end = NULL) const;
        PassFilter(text, text_end = null) {
            // if (Filters.empty())
            //     return true;
            // if (text == NULL)
            //     text = "";
            // for (int i = 0; i != Filters.Size; i++)
            // {
            //     const TextRange& f = Filters[i];
            //     if (f.empty())
            //         continue;
            //     if (f.front() == '-')
            //     {
            //         // Subtract
            //         if (ImStristr(text, text_end, f.begin()+1, f.end()) != NULL)
            //             return false;
            //     }
            //     else
            //     {
            //         // Grep
            //         if (ImStristr(text, text_end, f.begin(), f.end()) != NULL)
            //             return true;
            //     }
            // }
            // Implicit * grep
            if (this.CountGrep === 0)
                return true;
            return false;
        }
        // IMGUI_API void      Build();
        Build() {
            // Filters.resize(0);
            // TextRange input_range(InputBuf, InputBuf+strlen(InputBuf));
            // input_range.split(',', Filters);
            this.CountGrep = 0;
            // for (int i = 0; i != Filters.Size; i++)
            // {
            //     Filters[i].trim_blanks();
            //     if (Filters[i].empty())
            //         continue;
            //     if (Filters[i].front() != '-')
            //         CountGrep += 1;
            // }
        }
        // void                Clear() { InputBuf[0] = 0; Build(); }
        Clear() { this.InputBuf.buffer = ""; this.Build(); }
        // bool                IsActive() const { return !Filters.empty(); }
        IsActive() { return false; }
    }
    exports.ImGuiTextFilter = ImGuiTextFilter;
    // Helper: Text buffer for logging/accumulating text
    class ImGuiTextBuffer {
        constructor() {
            // ImVector<char>      Buf;
            this.Buf = "";
            // ImGuiTextBuffer()   { Buf.push_back(0); }
            // inline char         operator[](int i) { return Buf.Data[i]; }
            // const char*         begin() const { return &Buf.front(); }
            // const char*         end() const { return &Buf.back(); }      // Buf is zero-terminated, so end() will point on the zero-terminator
            // int                 size() const { return Buf.Size - 1; }
            // bool                empty() { return Buf.Size <= 1; }
            // void                clear() { Buf.clear(); Buf.push_back(0); }
            // void                reserve(int capacity) { Buf.reserve(capacity); }
            // const char*         c_str() const { return Buf.Data; }
            // IMGUI_API void      appendf(const char* fmt, ...) IM_FMTARGS(2);
            // IMGUI_API void      appendfv(const char* fmt, va_list args) IM_FMTLIST(2);
        }
        begin() { return this.Buf; }
        size() { return this.Buf.length; }
        clear() { this.Buf = ""; }
        append(text) { this.Buf += text; }
    }
    exports.ImGuiTextBuffer = ImGuiTextBuffer;
    // Helper: Simple Key->value storage
    // Typically you don't have to worry about this since a storage is held within each Window.
    // We use it to e.g. store collapse state for a tree (Int 0/1), store color edit options.
    // This is optimized for efficient reading (dichotomy into a contiguous buffer), rare writing (typically tied to user interactions)
    // You can use it as custom user storage for temporary values. Declare your own storage if, for example:
    // - You want to manipulate the open/close state of a particular sub-tree in your interface (tree node uses Int 0/1 to store their state).
    // - You want to store custom debug data easily without adding or editing structures in your code (probably not efficient, but convenient)
    // Types are NOT stored, so it is up to you to make sure your Key don't collide with different types.
    class ImGuiStorage {
    }
    exports.ImGuiStorage = ImGuiStorage;
    // Helpers macros to generate 32-bits encoded colors
    exports.IM_COL32_R_SHIFT = config.IMGUI_USE_BGRA_PACKED_COLOR ? 16 : 0;
    exports.IM_COL32_G_SHIFT = 8;
    exports.IM_COL32_B_SHIFT = config.IMGUI_USE_BGRA_PACKED_COLOR ? 0 : 16;
    exports.IM_COL32_A_SHIFT = 24;
    exports.IM_COL32_A_MASK = 0xFF000000;
    function IM_COL32(R, G, B, A = 255) {
        return ((A << exports.IM_COL32_A_SHIFT) | (B << exports.IM_COL32_B_SHIFT) | (G << exports.IM_COL32_G_SHIFT) | (R << exports.IM_COL32_R_SHIFT)) >>> 0;
    }
    exports.IM_COL32 = IM_COL32;
    exports.IM_COL32_WHITE = IM_COL32(255, 255, 255, 255); // Opaque white = 0xFFFFFFFF
    exports.IM_COL32_BLACK = IM_COL32(0, 0, 0, 255); // Opaque black
    exports.IM_COL32_BLACK_TRANS = IM_COL32(0, 0, 0, 0); // Transparent black = 0x00000000
    // ImColor() helper to implicity converts colors to either ImU32 (packed 4x1 byte) or ImVec4 (4x1 float)
    // Prefer using IM_COL32() macros if you want a guaranteed compile-time ImU32 for usage with ImDrawList API.
    // **Avoid storing ImColor! Store either u32 of ImVec4. This is not a full-featured color class. MAY OBSOLETE.
    // **None of the ImGui API are using ImColor directly but you can use it as a convenience to pass colors in either ImU32 or ImVec4 formats. Explicitly cast to ImU32 or ImVec4 if needed.
    class ImColor {
        constructor(r = 0.0, g = 0.0, b = 0.0, a = 1.0) {
            // ImVec4              Value;
            this.Value = new ImVec4();
            if (typeof (r) === "number") {
                if (r > 255 && g === 0.0 && b === 0.0 && a === 1.0) {
                    this.Value.x = Math.max(0.0, Math.min(1.0, ((r >> exports.IM_COL32_R_SHIFT) & 0xFF) / 255));
                    this.Value.y = Math.max(0.0, Math.min(1.0, ((r >> exports.IM_COL32_G_SHIFT) & 0xFF) / 255));
                    this.Value.z = Math.max(0.0, Math.min(1.0, ((r >> exports.IM_COL32_B_SHIFT) & 0xFF) / 255));
                    this.Value.w = Math.max(0.0, Math.min(1.0, ((r >> exports.IM_COL32_A_SHIFT) & 0xFF) / 255));
                }
                else if (r <= 1.0 && g <= 1.0 && b <= 1.0 && a <= 1.0) {
                    this.Value.x = Math.max(0.0, r);
                    this.Value.y = Math.max(0.0, g);
                    this.Value.z = Math.max(0.0, b);
                    this.Value.w = Math.max(0.0, a);
                }
                else {
                    this.Value.x = Math.max(0.0, Math.min(1.0, r / 255));
                    this.Value.y = Math.max(0.0, Math.min(1.0, g / 255));
                    this.Value.z = Math.max(0.0, Math.min(1.0, b / 255));
                    if (a <= 1.0) {
                        this.Value.w = Math.max(0.0, a);
                    }
                    else {
                        this.Value.w = Math.max(0.0, Math.min(1.0, a / 255));
                    }
                }
            }
            else {
                this.Value.Copy(r);
            }
        }
        // inline operator ImU32() const                                   { return ImGui::ColorConvertFloat4ToU32(Value); }
        toImU32() { return ColorConvertFloat4ToU32(this.Value); }
        // inline operator ImVec4() const                                  { return Value; }
        toImVec4() { return this.Value; }
        // FIXME-OBSOLETE: May need to obsolete/cleanup those helpers.
        // inline void    SetHSV(float h, float s, float v, float a = 1.0f){ ImGui::ColorConvertHSVtoRGB(h, s, v, Value.x, Value.y, Value.z); Value.w = a; }
        SetHSV(h, s, v, a = 1.0) {
            const ref_r = [this.Value.x];
            const ref_g = [this.Value.y];
            const ref_b = [this.Value.z];
            ColorConvertHSVtoRGB(h, s, v, ref_r, ref_g, ref_b);
            this.Value.x = ref_r[0];
            this.Value.y = ref_g[0];
            this.Value.z = ref_b[0];
            this.Value.w = a;
        }
        // static ImColor HSV(float h, float s, float v, float a = 1.0f)   { float r,g,b; ImGui::ColorConvertHSVtoRGB(h, s, v, r, g, b); return ImColor(r,g,b,a); }
        static HSV(h, s, v, a = 1.0) {
            const color = new ImColor();
            color.SetHSV(h, s, v, a);
            return color;
        }
    }
    exports.ImColor = ImColor;
    exports.ImGuiInputTextDefaultSize = 128;
    // Shared state of InputText(), passed to callback when a ImGuiInputTextFlags_Callback* flag is used and the corresponding callback is triggered.
    class ImGuiInputTextCallbackData {
        constructor(native, UserData) {
            this.native = native;
            this.UserData = UserData;
        }
        // ImGuiInputTextFlags EventFlag;      // One of ImGuiInputTextFlags_Callback* // Read-only
        get EventFlag() { return this.native.EventFlag; }
        // ImGuiInputTextFlags Flags;          // What user passed to InputText()      // Read-only
        get Flags() { return this.native.Flags; }
        // void*               UserData;       // What user passed to InputText()      // Read-only
        // public get UserData(): any { return this.native.UserData; }
        // CharFilter event:
        // ImWchar             EventChar;      // Character input                      // Read-write (replace character or set to zero)
        get EventChar() { return this.native.EventChar; }
        set EventChar(value) { this.native.EventChar = value; }
        // Completion,History,Always events:
        // If you modify the buffer contents make sure you update 'BufTextLen' and set 'BufDirty' to true.
        // ImGuiKey            EventKey;       // Key pressed (Up/Down/TAB)            // Read-only
        get EventKey() { return this.native.EventKey; }
        // char*               Buf;            // Current text buffer                  // Read-write (pointed data only, can't replace the actual pointer)
        get Buf() { return this.native.Buf; }
        set Buf(value) { this.native.Buf = value; }
        // int                 BufTextLen;     // Current text length in bytes         // Read-write
        get BufTextLen() { return this.native.BufTextLen; }
        set BufTextLen(value) { this.native.BufTextLen = value; }
        // int                 BufSize;        // Maximum text length in bytes         // Read-only
        get BufSize() { return this.native.BufSize; }
        // bool                BufDirty;       // Set if you modify Buf/BufTextLen!!   // Write
        set BufDirty(value) { this.native.BufDirty = value; }
        // int                 CursorPos;      //                                      // Read-write
        get CursorPos() { return this.native.CursorPos; }
        set CursorPos(value) { this.native.CursorPos = value; }
        // int                 SelectionStart; //                                      // Read-write (== to SelectionEnd when no selection)
        get SelectionStart() { return this.native.SelectionStart; }
        set SelectionStart(value) { this.native.SelectionStart = value; }
        // int                 SelectionEnd;   //                                      // Read-write
        get SelectionEnd() { return this.native.SelectionEnd; }
        set SelectionEnd(value) { this.native.SelectionEnd = value; }
        // NB: Helper functions for text manipulation. Calling those function loses selection.
        // IMGUI_API void    DeleteChars(int pos, int bytes_count);
        DeleteChars(pos, bytes_count) { return this.native.DeleteChars(pos, bytes_count); }
        // IMGUI_API void    InsertChars(int pos, const char* text, const char* text_end = NULL);
        InsertChars(pos, text, text_end = null) { return this.native.InsertChars(pos, text_end !== null ? text.substring(0, text_end) : text); }
        // bool              HasSelection() const { return SelectionStart != SelectionEnd; }
        HasSelection() { return this.native.HasSelection(); }
    }
    exports.ImGuiInputTextCallbackData = ImGuiInputTextCallbackData;
    // Resizing callback data to apply custom constraint. As enabled by SetNextWindowSizeConstraints(). Callback is called during the next Begin().
    // NB: For basic min/max size constraint on each axis you don't need to use the callback! The SetNextWindowSizeConstraints() parameters are enough.
    class ImGuiSizeCallbackData {
        constructor(native, UserData) {
            this.native = native;
            this.UserData = UserData;
        }
        get Pos() { return this.native.Pos; }
        get CurrentSize() { return this.native.CurrentSize; }
        get DesiredSize() { return this.native.DesiredSize; }
    }
    exports.ImGuiSizeCallbackData = ImGuiSizeCallbackData;
    class ImGuiListClipper {
        // items_count:  Use -1 to ignore (you can call Begin later). Use INT_MAX if you don't know how many items you have (in which case the cursor won't be advanced in the final step).
        // items_height: Use -1.0f to be calculated automatically on first step. Otherwise pass in the distance between your items, typically GetTextLineHeightWithSpacing() or GetFrameHeightWithSpacing().
        // If you don't specify an items_height, you NEED to call Step(). If you specify items_height you may call the old Begin()/End() api directly, but prefer calling Step().
        // ImGuiListClipper(int items_count = -1, float items_height = -1.0f)  { Begin(items_count, items_height); } // NB: Begin() initialize every fields (as we allow user to call Begin/End multiple times on a same instance if they want).
        constructor(items_count = -1, items_height = -1.0) {
            this.native = new bind.ImGuiListClipper(items_count, items_height);
        }
        get StartPosY() { return this.native.StartPosY; }
        get ItemsHeight() { return this.native.ItemsHeight; }
        get ItemsCount() { return this.native.ItemsCount; }
        get StepNo() { return this.native.StepNo; }
        get DisplayStart() { return this.native.DisplayStart; }
        get DisplayEnd() { return this.native.DisplayEnd; }
        // ~ImGuiListClipper()                                                 { IM_ASSERT(ItemsCount == -1); }      // Assert if user forgot to call End() or Step() until false.
        delete() {
            if (this.native) {
                this.native.delete();
                delete this.native;
            }
        }
        // IMGUI_API bool Step();                                              // Call until it returns false. The DisplayStart/DisplayEnd fields will be set and you can process/draw those items.
        Step() {
            if (!this.native) {
                throw new Error();
            }
            const busy = this.native.Step();
            if (!busy) {
                this.delete();
            }
            return busy;
        }
        // IMGUI_API void Begin(int items_count, float items_height = -1.0f);  // Automatically called by constructor if you passed 'items_count' or by Step() in Step 1.
        Begin(items_count, items_height = -1.0) {
            if (!this.native) {
                this.native = new Bind.ImGuiListClipper(items_count, items_height);
            }
            this.native.Begin(items_count, items_height);
        }
        // IMGUI_API void End();                                               // Automatically called on the last call of Step() that returns false.
        End() {
            if (!this.native) {
                throw new Error();
            }
            this.native.End();
            this.delete();
        }
    }
    exports.ImGuiListClipper = ImGuiListClipper;
    // Special Draw callback value to request renderer back-end to reset the graphics/render state.
    // The renderer back-end needs to handle this special value, otherwise it will crash trying to call a function at this address.
    // This is useful for example if you submitted callbacks which you know have altered the render state and you want it to be restored.
    // It is not done by default because they are many perfectly useful way of altering render state for imgui contents (e.g. changing shader/blending settings before an Image call).
    exports.ImDrawCallback_ResetRenderState = -1;
    // Typically, 1 command = 1 GPU draw call (unless command is a callback)
    // Pre 1.71 back-ends will typically ignore the VtxOffset/IdxOffset fields. When 'io.BackendFlags & ImGuiBackendFlags_RendererHasVtxOffset'
    // is enabled, those fields allow us to render meshes larger than 64K vertices while keeping 16-bits indices.
    class ImDrawCmd {
        constructor(native) {
            this.native = native;
            // ImDrawCallback  UserCallback;           // If != NULL, call the function instead of rendering the vertices. clip_rect and texture_id will be set normally.
            this.UserCallback = null; // TODO
            // void*           UserCallbackData;       // The draw callback code can access this.
            this.UserCallbackData = null; // TODO
        }
        // unsigned int    ElemCount;              // Number of indices (multiple of 3) to be rendered as triangles. Vertices are stored in the callee ImDrawList's vtx_buffer[] array, indices in idx_buffer[].
        get ElemCount() { return this.native.ElemCount; }
        // ImVec4          ClipRect;               // Clipping rectangle (x1, y1, x2, y2)
        get ClipRect() { return this.native.ClipRect; }
        // ImTextureID     TextureId;              // User-provided texture ID. Set by user in ImfontAtlas::SetTexID() for fonts or passed to Image*() functions. Ignore if never using images or multiple fonts atlas.
        get TextureId() {
            return ImGuiContext.getTexture(this.native.TextureId);
        }
        // unsigned int    VtxOffset;              // Start offset in vertex buffer. Pre-1.71 or without ImGuiBackendFlags_RendererHasVtxOffset: always 0. With ImGuiBackendFlags_RendererHasVtxOffset: may be >0 to support meshes larger than 64K vertices with 16-bits indices.
        get VtxOffset() { return this.native.VtxOffset; }
        // unsigned int    IdxOffset;              // Start offset in index buffer. Always equal to sum of ElemCount drawn so far.
        get IdxOffset() { return this.native.IdxOffset; }
    }
    exports.ImDrawCmd = ImDrawCmd;
    // Vertex index 
    // (to allow large meshes with 16-bits indices: set 'io.BackendFlags |= ImGuiBackendFlags_RendererHasVtxOffset' and handle ImDrawCmd::VtxOffset in the renderer back-end)
    // (to use 32-bits indices: override with '#define ImDrawIdx unsigned int' in imconfig.h)
    // #ifndef ImDrawIdx
    // typedef unsigned short ImDrawIdx;
    // #endif
    exports.ImDrawIdxSize = 2; // bind.ImDrawIdxSize;
    // Vertex layout
    // #ifndef IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT
    exports.ImDrawVertSize = 20; // bind.ImDrawVertSize;
    exports.ImDrawVertPosOffset = 0; // bind.ImDrawVertPosOffset;
    exports.ImDrawVertUVOffset = 8; // bind.ImDrawVertUVOffset;
    exports.ImDrawVertColOffset = 16; // bind.ImDrawVertColOffset;
    class ImDrawVert {
        constructor(buffer, byteOffset = 0) {
            this.pos = new Float32Array(buffer, byteOffset + bind.ImDrawVertPosOffset, 2);
            this.uv = new Float32Array(buffer, byteOffset + bind.ImDrawVertUVOffset, 2);
            this.col = new Uint32Array(buffer, byteOffset + bind.ImDrawVertColOffset, 1);
        }
    }
    exports.ImDrawVert = ImDrawVert;
    // #else
    // You can override the vertex format layout by defining IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT in imconfig.h
    // The code expect ImVec2 pos (8 bytes), ImVec2 uv (8 bytes), ImU32 col (4 bytes), but you can re-order them or add other fields as needed to simplify integration in your engine.
    // The type has to be described within the macro (you can either declare the struct or use a typedef)
    // NOTE: IMGUI DOESN'T CLEAR THE STRUCTURE AND DOESN'T CALL A CONSTRUCTOR SO ANY CUSTOM FIELD WILL BE UNINITIALIZED. IF YOU ADD EXTRA FIELDS (SUCH AS A 'Z' COORDINATES) YOU WILL NEED TO CLEAR THEM DURING RENDER OR TO IGNORE THEM.
    // IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT;
    // #endif
    // Draw channels are used by the Columns API to "split" the render list into different channels while building, so items of each column can be batched together.
    // You can also use them to simulate drawing layers and submit primitives in a different order than how they will be rendered.
    class ImDrawChannel {
    }
    exports.ImDrawChannel = ImDrawChannel;
    class ImDrawListSharedData {
        constructor(native) {
            this.native = native;
        }
    }
    exports.ImDrawListSharedData = ImDrawListSharedData;
    // Draw command list
    // This is the low-level list of polygons that ImGui functions are filling. At the end of the frame, all command lists are passed to your ImGuiIO::RenderDrawListFn function for rendering.
    // Each ImGui window contains its own ImDrawList. You can use ImGui::GetWindowDrawList() to access the current window draw list and draw custom primitives.
    // You can interleave normal ImGui:: calls and adding primitives to the current draw list.
    // All positions are generally in pixel coordinates (top-left at (0,0), bottom-right at io.DisplaySize), however you are totally free to apply whatever transformation matrix to want to the data (if you apply such transformation you'll want to apply it to ClipRect as well)
    // Important: Primitives are always added to the list and not culled (culling is done at higher-level by ImGui:: functions), if you use this API a lot consider coarse culling your drawn objects.
    class ImDrawList {
        constructor(native) {
            this.native = native;
        }
        IterateDrawCmds(callback) {
            this.native.IterateDrawCmds((draw_cmd, ElemStart) => {
                callback(new ImDrawCmd(draw_cmd), ElemStart);
            });
        }
        // This is what you have to render
        // ImVector<ImDrawCmd>     CmdBuffer;          // Draw commands. Typically 1 command = 1 GPU draw call, unless the command is a callback.
        // ImVector<ImDrawIdx>     IdxBuffer;          // Index buffer. Each command consume ImDrawCmd::ElemCount of those
        get IdxBuffer() { return this.native.IdxBuffer; }
        // ImVector<ImDrawVert>    VtxBuffer;          // Vertex buffer.
        get VtxBuffer() { return this.native.VtxBuffer; }
        // ImDrawListFlags         Flags;              // Flags, you may poke into these to adjust anti-aliasing settings per-primitive.
        get Flags() { return this.native.Flags; }
        set Flags(value) { this.native.Flags = value; }
        // [Internal, used while building lists]
        // const ImDrawListSharedData* _Data;          // Pointer to shared draw data (you can use ImGui::GetDrawListSharedData() to get the one from current ImGui context)
        // const char*             _OwnerName;         // Pointer to owner window's name for debugging
        // unsigned int            _VtxCurrentIdx;     // [Internal] == VtxBuffer.Size
        // ImDrawVert*             _VtxWritePtr;       // [Internal] point within VtxBuffer.Data after each add command (to avoid using the ImVector<> operators too much)
        // ImDrawIdx*              _IdxWritePtr;       // [Internal] point within IdxBuffer.Data after each add command (to avoid using the ImVector<> operators too much)
        // ImVector<ImVec4>        _ClipRectStack;     // [Internal]
        // ImVector<ImTextureID>   _TextureIdStack;    // [Internal]
        // ImVector<ImVec2>        _Path;              // [Internal] current path building
        // int                     _ChannelsCurrent;   // [Internal] current channel number (0)
        // int                     _ChannelsCount;     // [Internal] number of active channels (1+)
        // ImVector<ImDrawChannel> _Channels;          // [Internal] draw channels for columns API (not resized down so _ChannelsCount may be smaller than _Channels.Size)
        // ImDrawList(const ImDrawListSharedData* shared_data) { _Data = shared_data; _OwnerName = NULL; Clear(); }
        // ~ImDrawList() { ClearFreeMemory(); }
        // IMGUI_API void  PushClipRect(ImVec2 clip_rect_min, ImVec2 clip_rect_max, bool intersect_with_current_clip_rect = false);  // Render-level scissoring. This is passed down to your render function but not used for CPU-side coarse clipping. Prefer using higher-level ImGui::PushClipRect() to affect logic (hit-testing and widget culling)
        PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect = false) {
            this.native.PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect);
        }
        // IMGUI_API void  PushClipRectFullScreen();
        PushClipRectFullScreen() { this.native.PushClipRectFullScreen(); }
        // IMGUI_API void  PopClipRect();
        PopClipRect() { this.native.PopClipRect(); }
        // IMGUI_API void  PushTextureID(ImTextureID texture_id);
        PushTextureID(texture_id) {
            this.native.PushTextureID(ImGuiContext.setTexture(texture_id));
        }
        // IMGUI_API void  PopTextureID();
        PopTextureID() { this.native.PopTextureID(); }
        // inline ImVec2   GetClipRectMin() const { const ImVec4& cr = _ClipRectStack.back(); return ImVec2(cr.x, cr.y); }
        GetClipRectMin(out = new ImVec2()) {
            return this.native.GetClipRectMin(out);
        }
        // inline ImVec2   GetClipRectMax() const { const ImVec4& cr = _ClipRectStack.back(); return ImVec2(cr.z, cr.w); }
        GetClipRectMax(out = new ImVec2()) {
            return this.native.GetClipRectMax(out);
        }
        // Primitives
        // IMGUI_API void  AddLine(const ImVec2& a, const ImVec2& b, ImU32 col, float thickness = 1.0f);
        AddLine(a, b, col, thickness = 1.0) {
            this.native.AddLine(a, b, col, thickness);
        }
        // IMGUI_API void  AddRect(const ImVec2& a, const ImVec2& b, ImU32 col, float rounding = 0.0f, int rounding_corners_flags = ImDrawCornerFlags_All, float thickness = 1.0f);   // a: upper-left, b: lower-right, rounding_corners_flags: 4-bits corresponding to which corner to round
        AddRect(a, b, col, rounding = 0.0, rounding_corners_flags = ImDrawCornerFlags.All, thickness = 1.0) {
            this.native.AddRect(a, b, col, rounding, rounding_corners_flags, thickness);
        }
        // IMGUI_API void  AddRectFilled(const ImVec2& a, const ImVec2& b, ImU32 col, float rounding = 0.0f, int rounding_corners_flags = ImDrawCornerFlags_All);                     // a: upper-left, b: lower-right
        AddRectFilled(a, b, col, rounding = 0.0, rounding_corners_flags = ImDrawCornerFlags.All) {
            this.native.AddRectFilled(a, b, col, rounding, rounding_corners_flags);
        }
        // IMGUI_API void  AddRectFilledMultiColor(const ImVec2& a, const ImVec2& b, ImU32 col_upr_left, ImU32 col_upr_right, ImU32 col_bot_right, ImU32 col_bot_left);
        AddRectFilledMultiColor(a, b, col_upr_left, col_upr_right, col_bot_right, col_bot_left) {
            this.native.AddRectFilledMultiColor(a, b, col_upr_left, col_upr_right, col_bot_right, col_bot_left);
        }
        // IMGUI_API void  AddQuad(const ImVec2& a, const ImVec2& b, const ImVec2& c, const ImVec2& d, ImU32 col, float thickness = 1.0f);
        AddQuad(a, b, c, d, col, thickness = 1.0) {
            this.native.AddQuad(a, b, c, d, col, thickness);
        }
        // IMGUI_API void  AddQuadFilled(const ImVec2& a, const ImVec2& b, const ImVec2& c, const ImVec2& d, ImU32 col);
        AddQuadFilled(a, b, c, d, col) {
            this.native.AddQuadFilled(a, b, c, d, col);
        }
        // IMGUI_API void  AddTriangle(const ImVec2& a, const ImVec2& b, const ImVec2& c, ImU32 col, float thickness = 1.0f);
        AddTriangle(a, b, c, col, thickness = 1.0) {
            this.native.AddTriangle(a, b, c, col, thickness);
        }
        // IMGUI_API void  AddTriangleFilled(const ImVec2& a, const ImVec2& b, const ImVec2& c, ImU32 col);
        AddTriangleFilled(a, b, c, col) {
            this.native.AddTriangleFilled(a, b, c, col);
        }
        // IMGUI_API void  AddCircle(const ImVec2& centre, float radius, ImU32 col, int num_segments = 12, float thickness = 1.0f);
        AddCircle(centre, radius, col, num_segments = 12, thickness = 1.0) {
            this.native.AddCircle(centre, radius, col, num_segments, thickness);
        }
        // IMGUI_API void  AddCircleFilled(const ImVec2& centre, float radius, ImU32 col, int num_segments = 12);
        AddCircleFilled(centre, radius, col, num_segments = 12) {
            this.native.AddCircleFilled(centre, radius, col, num_segments);
        }
        AddText(...args) {
            if (args[0] instanceof ImFont) {
                const font = args[0];
                const font_size = args[1];
                const pos = args[2];
                const col = args[3];
                const text_begin = args[4];
                const text_end = args[5] || null;
                const wrap_width = args[6] = 0.0;
                const cpu_fine_clip_rect = args[7] || null;
                this.native.AddText_B(font.native, font_size, pos, col, text_end !== null ? text_begin.substring(0, text_end) : text_begin, wrap_width, cpu_fine_clip_rect);
            }
            else {
                const pos = args[0];
                const col = args[1];
                const text_begin = args[2];
                const text_end = args[3] || null;
                this.native.AddText_A(pos, col, text_end !== null ? text_begin.substring(0, text_end) : text_begin);
            }
        }
        // IMGUI_API void  AddImage(ImTextureID user_texture_id, const ImVec2& a, const ImVec2& b, const ImVec2& uv_a = ImVec2(0,0), const ImVec2& uv_b = ImVec2(1,1), ImU32 col = 0xFFFFFFFF);
        AddImage(user_texture_id, a, b, uv_a = ImVec2.ZERO, uv_b = ImVec2.UNIT, col = 0xFFFFFFFF) {
            this.native.AddImage(ImGuiContext.setTexture(user_texture_id), a, b, uv_a, uv_b, col);
        }
        // IMGUI_API void  AddImageQuad(ImTextureID user_texture_id, const ImVec2& a, const ImVec2& b, const ImVec2& c, const ImVec2& d, const ImVec2& uv_a = ImVec2(0,0), const ImVec2& uv_b = ImVec2(1,0), const ImVec2& uv_c = ImVec2(1,1), const ImVec2& uv_d = ImVec2(0,1), ImU32 col = 0xFFFFFFFF);
        AddImageQuad(user_texture_id, a, b, c, d, uv_a = ImVec2.ZERO, uv_b = ImVec2.UNIT_X, uv_c = ImVec2.UNIT, uv_d = ImVec2.UNIT_Y, col = 0xFFFFFFFF) {
            this.native.AddImageQuad(ImGuiContext.setTexture(user_texture_id), a, b, c, d, uv_a, uv_b, uv_c, uv_d, col);
        }
        // IMGUI_API void  AddImageRounded(ImTextureID user_texture_id, const ImVec2& a, const ImVec2& b, const ImVec2& uv_a, const ImVec2& uv_b, ImU32 col, float rounding, int rounding_corners = ImDrawCornerFlags_All);
        AddImageRounded(user_texture_id, a, b, uv_a, uv_b, col, rounding, rounding_corners = ImDrawCornerFlags.All) {
            this.native.AddImageRounded(ImGuiContext.setTexture(user_texture_id), a, b, uv_a, uv_b, col, rounding, rounding_corners);
        }
        // IMGUI_API void  AddPolyline(const ImVec2* points, const int num_points, ImU32 col, bool closed, float thickness);
        AddPolyline(points, num_points, col, closed, thickness) {
            this.native.AddPolyline(points, num_points, col, closed, thickness);
        }
        // IMGUI_API void  AddConvexPolyFilled(const ImVec2* points, const int num_points, ImU32 col);
        AddConvexPolyFilled(points, num_points, col) {
            this.native.AddConvexPolyFilled(points, num_points, col);
        }
        // IMGUI_API void  AddBezierCurve(const ImVec2& pos0, const ImVec2& cp0, const ImVec2& cp1, const ImVec2& pos1, ImU32 col, float thickness, int num_segments = 0);
        AddBezierCurve(pos0, cp0, cp1, pos1, col, thickness = 1.0, num_segments = 0) {
            this.native.AddBezierCurve(pos0, cp0, cp1, pos1, col, thickness, num_segments);
        }
        // Stateful path API, add points then finish with PathFill() or PathStroke()
        // inline    void  PathClear()                                                 { _Path.resize(0); }
        PathClear() { this.native.PathClear(); }
        // inline    void  PathLineTo(const ImVec2& pos)                               { _Path.push_back(pos); }
        PathLineTo(pos) { this.native.PathLineTo(pos); }
        // inline    void  PathLineToMergeDuplicate(const ImVec2& pos)                 { if (_Path.Size == 0 || memcmp(&_Path[_Path.Size-1], &pos, 8) != 0) _Path.push_back(pos); }
        PathLineToMergeDuplicate(pos) { this.native.PathLineToMergeDuplicate(pos); }
        // inline    void  PathFillConvex(ImU32 col)                                   { AddConvexPolyFilled(_Path.Data, _Path.Size, col); PathClear(); }
        PathFillConvex(col) { this.native.PathFillConvex(col); }
        // inline    void  PathStroke(ImU32 col, bool closed, float thickness = 1.0f)  { AddPolyline(_Path.Data, _Path.Size, col, closed, thickness); PathClear(); }
        PathStroke(col, closed, thickness = 1.0) { this.native.PathStroke(col, closed, thickness); }
        // IMGUI_API void  PathArcTo(const ImVec2& centre, float radius, float a_min, float a_max, int num_segments = 10);
        PathArcTo(centre, radius, a_min, a_max, num_segments = 10) { this.native.PathArcTo(centre, radius, a_min, a_max, num_segments); }
        // IMGUI_API void  PathArcToFast(const ImVec2& centre, float radius, int a_min_of_12, int a_max_of_12);                                // Use precomputed angles for a 12 steps circle
        PathArcToFast(centre, radius, a_min_of_12, a_max_of_12) { this.native.PathArcToFast(centre, radius, a_min_of_12, a_max_of_12); }
        // IMGUI_API void  PathBezierCurveTo(const ImVec2& p1, const ImVec2& p2, const ImVec2& p3, int num_segments = 0);
        PathBezierCurveTo(p1, p2, p3, num_segments = 0) { this.native.PathBezierCurveTo(p1, p2, p3, num_segments); }
        // IMGUI_API void  PathRect(const ImVec2& rect_min, const ImVec2& rect_max, float rounding = 0.0f, int rounding_corners_flags = ImDrawCornerFlags_All);
        PathRect(rect_min, rect_max, rounding = 0.0, rounding_corners_flags = ImDrawCornerFlags.All) { this.native.PathRect(rect_min, rect_max, rounding, rounding_corners_flags); }
        // Channels
        // - Use to simulate layers. By switching channels to can render out-of-order (e.g. submit foreground primitives before background primitives)
        // - Use to minimize draw calls (e.g. if going back-and-forth between multiple non-overlapping clipping rectangles, prefer to append into separate channels then merge at the end)
        // IMGUI_API void  ChannelsSplit(int channels_count);
        ChannelsSplit(channels_count) { this.native.ChannelsSplit(channels_count); }
        // IMGUI_API void  ChannelsMerge();
        ChannelsMerge() { this.native.ChannelsMerge(); }
        // IMGUI_API void  ChannelsSetCurrent(int channel_index);
        ChannelsSetCurrent(channel_index) { this.native.ChannelsSetCurrent(channel_index); }
        // Advanced
        // IMGUI_API void  AddCallback(ImDrawCallback callback, void* callback_data);  // Your rendering function must check for 'UserCallback' in ImDrawCmd and call the function instead of rendering triangles.
        AddCallback(callback, callback_data) {
            const _callback = (parent_list, draw_cmd) => {
                callback(new ImDrawList(parent_list), new ImDrawCmd(draw_cmd));
            };
            this.native.AddCallback(_callback, callback_data);
        }
        // IMGUI_API void  AddDrawCmd();                                               // This is useful if you need to forcefully create a new draw call (to allow for dependent rendering / blending). Otherwise primitives are merged into the same draw-call as much as possible
        AddDrawCmd() { this.native.AddDrawCmd(); }
        // Internal helpers
        // NB: all primitives needs to be reserved via PrimReserve() beforehand!
        // IMGUI_API void  Clear();
        Clear() { this.native.Clear(); }
        // IMGUI_API void  ClearFreeMemory();
        ClearFreeMemory() { this.native.ClearFreeMemory(); }
        // IMGUI_API void  PrimReserve(int idx_count, int vtx_count);
        PrimReserve(idx_count, vtx_count) { this.native.PrimReserve(idx_count, vtx_count); }
        // IMGUI_API void  PrimRect(const ImVec2& a, const ImVec2& b, ImU32 col);      // Axis aligned rectangle (composed of two triangles)
        PrimRect(a, b, col) { this.native.PrimRect(a, b, col); }
        // IMGUI_API void  PrimRectUV(const ImVec2& a, const ImVec2& b, const ImVec2& uv_a, const ImVec2& uv_b, ImU32 col);
        PrimRectUV(a, b, uv_a, uv_b, col) { this.native.PrimRectUV(a, b, uv_a, uv_b, col); }
        // IMGUI_API void  PrimQuadUV(const ImVec2& a, const ImVec2& b, const ImVec2& c, const ImVec2& d, const ImVec2& uv_a, const ImVec2& uv_b, const ImVec2& uv_c, const ImVec2& uv_d, ImU32 col);
        PrimQuadUV(a, b, c, d, uv_a, uv_b, uv_c, uv_d, col) { this.native.PrimQuadUV(a, b, c, d, uv_a, uv_b, uv_c, uv_d, col); }
        // inline    void  PrimWriteVtx(const ImVec2& pos, const ImVec2& uv, ImU32 col){ _VtxWritePtr->pos = pos; _VtxWritePtr->uv = uv; _VtxWritePtr->col = col; _VtxWritePtr++; _VtxCurrentIdx++; }
        PrimWriteVtx(pos, uv, col) { this.native.PrimWriteVtx(pos, uv, col); }
        // inline    void  PrimWriteIdx(ImDrawIdx idx)                                 { *_IdxWritePtr = idx; _IdxWritePtr++; }
        PrimWriteIdx(idx) { this.native.PrimWriteIdx(idx); }
        // inline    void  PrimVtx(const ImVec2& pos, const ImVec2& uv, ImU32 col)     { PrimWriteIdx((ImDrawIdx)_VtxCurrentIdx); PrimWriteVtx(pos, uv, col); }
        PrimVtx(pos, uv, col) { this.native.PrimVtx(pos, uv, col); }
        // IMGUI_API void  UpdateClipRect();
        UpdateClipRect() { this.native.UpdateClipRect(); }
        // IMGUI_API void  UpdateTextureID();
        UpdateTextureID() { this.native.UpdateTextureID(); }
    }
    exports.ImDrawList = ImDrawList;
    // All draw data to render an ImGui frame
    class ImDrawData {
        constructor(native) {
            this.native = native;
        }
        IterateDrawLists(callback) {
            this.native.IterateDrawLists((draw_list) => {
                callback(new ImDrawList(draw_list));
            });
        }
        // bool            Valid;                  // Only valid after Render() is called and before the next NewFrame() is called.
        get Valid() { return this.native.Valid; }
        // ImDrawList**    CmdLists;
        // int             CmdListsCount;
        get CmdListsCount() { return this.native.CmdListsCount; }
        // int             TotalIdxCount;          // For convenience, sum of all cmd_lists idx_buffer.Size
        get TotalIdxCount() { return this.native.TotalIdxCount; }
        // int             TotalVtxCount;          // For convenience, sum of all cmd_lists vtx_buffer.Size
        get TotalVtxCount() { return this.native.TotalVtxCount; }
        // ImVec2          DisplayPos;             // Upper-left position of the viewport to render (== upper-left of the orthogonal projection matrix to use)
        get DisplayPos() { return this.native.DisplayPos; }
        // ImVec2          DisplaySize;            // Size of the viewport to render (== io.DisplaySize for the main viewport) (DisplayPos + DisplaySize == lower-right of the orthogonal projection matrix to use)
        get DisplaySize() { return this.native.DisplaySize; }
        // ImVec2          FramebufferScale;       // Amount of pixels for each unit of DisplaySize. Based on io.DisplayFramebufferScale. Generally (1,1) on normal display, (2,2) on OSX with Retina display.
        get FramebufferScale() { return this.native.FramebufferScale; }
        // Functions
        // ImDrawData() { Valid = false; CmdLists = NULL; CmdListsCount = TotalVtxCount = TotalIdxCount = 0; }
        // IMGUI_API void DeIndexAllBuffers();               // For backward compatibility or convenience: convert all buffers from indexed to de-indexed, in case you cannot render indexed. Note: this is slow and most likely a waste of resources. Always prefer indexed rendering!
        DeIndexAllBuffers() { this.native.DeIndexAllBuffers(); }
        // IMGUI_API void ScaleClipRects(const ImVec2& fb_scale);  // Helper to scale the ClipRect field of each ImDrawCmd. Use if your final output buffer is at a different scale than ImGui expects, or if there is a difference between your window resolution and framebuffer resolution.
        ScaleClipRects(fb_scale) {
            this.native.ScaleClipRects(fb_scale);
        }
    }
    exports.ImDrawData = ImDrawData;
    class script_ImFontConfig {
        constructor() {
            // void*           FontData;                   //          // TTF/OTF data
            // int             FontDataSize;               //          // TTF/OTF data size
            this.FontData = null;
            // bool            FontDataOwnedByAtlas;       // true     // TTF/OTF data ownership taken by the container ImFontAtlas (will delete memory itself).
            this.FontDataOwnedByAtlas = true;
            // int             FontNo;                     // 0        // Index of font within TTF/OTF file
            this.FontNo = 0;
            // float           SizePixels;                 //          // Size in pixels for rasterizer.
            this.SizePixels = 0;
            // int             OversampleH, OversampleV;   // 3, 1     // Rasterize at higher quality for sub-pixel positioning. We don't use sub-pixel positions on the Y axis.
            this.OversampleH = 3;
            this.OversampleV = 1;
            // bool            PixelSnapH;                 // false    // Align every glyph to pixel boundary. Useful e.g. if you are merging a non-pixel aligned font with the default font. If enabled, you can set OversampleH/V to 1.
            this.PixelSnapH = false;
            // ImVec2          GlyphExtraSpacing;          // 0, 0     // Extra spacing (in pixels) between glyphs. Only X axis is supported for now.
            this.GlyphExtraSpacing = new ImVec2(0, 0);
            // ImVec2          GlyphOffset;                // 0, 0     // Offset all glyphs from this font input.
            this.GlyphOffset = new ImVec2(0, 0);
            // const ImWchar*  GlyphRanges;                // NULL     // Pointer to a user-provided list of Unicode range (2 value per range, values are inclusive, zero-terminated list). THE ARRAY DATA NEEDS TO PERSIST AS LONG AS THE FONT IS ALIVE.
            this.GlyphRanges = null;
            // float           GlyphMinAdvanceX;           // 0        // Minimum AdvanceX for glyphs, set Min to align font icons, set both Min/Max to enforce mono-space font
            this.GlyphMinAdvanceX = 0;
            // float           GlyphMaxAdvanceX;           // FLT_MAX  // Maximum AdvanceX for glyphs
            this.GlyphMaxAdvanceX = Number.MAX_VALUE;
            // bool            MergeMode;                  // false    // Merge into previous ImFont, so you can combine multiple inputs font into one ImFont (e.g. ASCII font + icons + Japanese glyphs). You may want to use GlyphOffset.y when merge font of different heights.
            this.MergeMode = false;
            // unsigned int    RasterizerFlags;            // 0x00     // Settings for custom font rasterizer (e.g. ImGuiFreeType). Leave as zero if you aren't using one.
            this.RasterizerFlags = 0;
            // float           RasterizerMultiply;         // 1.0f     // Brighten (>1.0f) or darken (<1.0f) font output. Brightening small fonts may be a good workaround to make them more readable.
            this.RasterizerMultiply = 1.0;
            // [Internal]
            // char            Name[32];                               // Name (strictly to ease debugging)
            this.Name = "";
            // ImFont*         DstFont;
            this.DstFont = null;
            // IMGUI_API ImFontConfig();
        }
    }
    exports.script_ImFontConfig = script_ImFontConfig;
    class ImFontConfig {
        constructor(internal = new script_ImFontConfig()) {
            this.internal = internal;
        }
        // void*           FontData;                   //          // TTF/OTF data
        // int             FontDataSize;               //          // TTF/OTF data size
        get FontData() { return this.internal.FontData; }
        // bool            FontDataOwnedByAtlas;       // true     // TTF/OTF data ownership taken by the container ImFontAtlas (will delete memory itself).
        get FontDataOwnedByAtlas() { return this.internal.FontDataOwnedByAtlas; }
        // int             FontNo;                     // 0        // Index of font within TTF/OTF file
        get FontNo() { return this.internal.FontNo; }
        // float           SizePixels;                 //          // Size in pixels for rasterizer.
        get SizePixels() { return this.internal.SizePixels; }
        // int             OversampleH, OversampleV;   // 3, 1     // Rasterize at higher quality for sub-pixel positioning. We don't use sub-pixel positions on the Y axis.
        get OversampleH() { return this.internal.OversampleH; }
        get OversampleV() { return this.internal.OversampleV; }
        // bool            PixelSnapH;                 // false    // Align every glyph to pixel boundary. Useful e.g. if you are merging a non-pixel aligned font with the default font. If enabled, you can set OversampleH/V to 1.
        get PixelSnapH() { return this.internal.PixelSnapH; }
        // ImVec2          GlyphExtraSpacing;          // 0, 0     // Extra spacing (in pixels) between glyphs. Only X axis is supported for now.
        get GlyphExtraSpacing() { return this.internal.GlyphExtraSpacing; }
        // ImVec2          GlyphOffset;                // 0, 0     // Offset all glyphs from this font input.
        get GlyphOffset() { return this.internal.GlyphOffset; }
        // const ImWchar*  GlyphRanges;                // NULL     // Pointer to a user-provided list of Unicode range (2 value per range, values are inclusive, zero-terminated list). THE ARRAY DATA NEEDS TO PERSIST AS LONG AS THE FONT IS ALIVE.
        get GlyphRanges() { return this.internal.GlyphRanges; }
        // float           GlyphMinAdvanceX;           // 0        // Minimum AdvanceX for glyphs, set Min to align font icons, set both Min/Max to enforce mono-space font
        get GlyphMinAdvanceX() { return this.internal.GlyphMinAdvanceX; }
        // float           GlyphMaxAdvanceX;           // FLT_MAX  // Maximum AdvanceX for glyphs
        get GlyphMaxAdvanceX() { return this.internal.GlyphMaxAdvanceX; }
        // bool            MergeMode;                  // false    // Merge into previous ImFont, so you can combine multiple inputs font into one ImFont (e.g. ASCII font + icons + Japanese glyphs). You may want to use GlyphOffset.y when merge font of different heights.
        get MergeMode() { return this.internal.MergeMode; }
        // unsigned int    RasterizerFlags;            // 0x00     // Settings for custom font rasterizer (e.g. ImGuiFreeType). Leave as zero if you aren't using one.
        get RasterizerFlags() { return this.internal.RasterizerFlags; }
        // float           RasterizerMultiply;         // 1.0f     // Brighten (>1.0f) or darken (<1.0f) font output. Brightening small fonts may be a good workaround to make them more readable.
        get RasterizerMultiply() { return this.internal.RasterizerMultiply; }
        // [Internal]
        // char            Name[32];                               // Name (strictly to ease debugging)
        get Name() { return this.internal.Name; }
        set Name(value) { this.internal.Name = value; }
        // ImFont*         DstFont;
        get DstFont() {
            const font = this.internal.DstFont;
            return font && new ImFont(font);
        }
    }
    exports.ImFontConfig = ImFontConfig;
    // struct ImFontGlyph
    class script_ImFontGlyph {
        constructor() {
            // ImWchar         Codepoint;          // 0x0000..0xFFFF
            this.Codepoint = 0;
            // float           AdvanceX;           // Distance to next character (= data from font + ImFontConfig::GlyphExtraSpacing.x baked in)
            this.AdvanceX = 0.0;
            // float           X0, Y0, X1, Y1;     // Glyph corners
            this.X0 = 0.0;
            this.Y0 = 0.0;
            this.X1 = 1.0;
            this.Y1 = 1.0;
            // float           U0, V0, U1, V1;     // Texture coordinates
            this.U0 = 0.0;
            this.V0 = 0.0;
            this.U1 = 1.0;
            this.V1 = 1.0;
        }
    }
    exports.script_ImFontGlyph = script_ImFontGlyph;
    class ImFontGlyph {
        constructor(internal = new script_ImFontGlyph()) {
            this.internal = internal;
        }
        // ImWchar         Codepoint;          // 0x0000..0xFFFF
        get Codepoint() { return this.internal.Codepoint; }
        // float           AdvanceX;           // Distance to next character (= data from font + ImFontConfig::GlyphExtraSpacing.x baked in)
        get AdvanceX() { return this.internal.AdvanceX; }
        ;
        // float           X0, Y0, X1, Y1;     // Glyph corners
        get X0() { return this.internal.X0; }
        ;
        get Y0() { return this.internal.Y0; }
        ;
        get X1() { return this.internal.X1; }
        ;
        get Y1() { return this.internal.Y1; }
        ;
        // float           U0, V0, U1, V1;     // Texture coordinates
        get U0() { return this.internal.U0; }
        ;
        get V0() { return this.internal.V0; }
        ;
        get U1() { return this.internal.U1; }
        ;
        get V1() { return this.internal.V1; }
        ;
    }
    exports.ImFontGlyph = ImFontGlyph;
    var ImFontAtlasFlags;
    (function (ImFontAtlasFlags) {
        ImFontAtlasFlags[ImFontAtlasFlags["None"] = 0] = "None";
        ImFontAtlasFlags[ImFontAtlasFlags["NoPowerOfTwoHeight"] = 1] = "NoPowerOfTwoHeight";
        ImFontAtlasFlags[ImFontAtlasFlags["NoMouseCursors"] = 2] = "NoMouseCursors";
    })(ImFontAtlasFlags = exports.ImFontAtlasFlags || (exports.ImFontAtlasFlags = {}));
    // Load and rasterize multiple TTF/OTF fonts into a same texture.
    // Sharing a texture for multiple fonts allows us to reduce the number of draw calls during rendering.
    // We also add custom graphic data into the texture that serves for ImGui.
    //  1. (Optional) Call AddFont*** functions. If you don't call any, the default font will be loaded for you.
    //  2. Call GetTexDataAsAlpha8() or GetTexDataAsRGBA32() to build and retrieve pixels data.
    //  3. Upload the pixels data into a texture within your graphics system.
    //  4. Call SetTexID(my_tex_id); and pass the pointer/identifier to your texture. This value will be passed back to you during rendering to identify the texture.
    // IMPORTANT: If you pass a 'glyph_ranges' array to AddFont*** functions, you need to make sure that your array persist up until the ImFont is build (when calling GetTextData*** or Build()). We only copy the pointer, not the data.
    class ImFontAtlas {
        constructor(native) {
            this.native = native;
        }
        // IMGUI_API ImFontAtlas();
        // IMGUI_API ~ImFontAtlas();
        // IMGUI_API ImFont*           AddFont(const ImFontConfig* font_cfg);
        // IMGUI_API ImFont*           AddFontDefault(const ImFontConfig* font_cfg = NULL);
        AddFontDefault(font_cfg = null) {
            return new ImFont(this.native.AddFontDefault(font_cfg));
        }
        // IMGUI_API ImFont*           AddFontFromFileTTF(const char* filename, float size_pixels, const ImFontConfig* font_cfg = NULL, const ImWchar* glyph_ranges = NULL);
        // IMGUI_API ImFont*           AddFontFromMemoryTTF(void* font_data, int font_size, float size_pixels, const ImFontConfig* font_cfg = NULL, const ImWchar* glyph_ranges = NULL); // Note: Transfer ownership of 'ttf_data' to ImFontAtlas! Will be deleted after Build(). Set font_cfg->FontDataOwnedByAtlas to false to keep ownership.
        AddFontFromMemoryTTF(data, size_pixels, font_cfg = null, glyph_ranges = null) {
            return new ImFont(this.native.AddFontFromMemoryTTF(new Uint8Array(data), size_pixels, font_cfg && font_cfg.internal, glyph_ranges));
        }
        // IMGUI_API ImFont*           AddFontFromMemoryCompressedTTF(const void* compressed_font_data, int compressed_font_size, float size_pixels, const ImFontConfig* font_cfg = NULL, const ImWchar* glyph_ranges = NULL); // 'compressed_font_data' still owned by caller. Compress with binary_to_compressed_c.cpp.
        // IMGUI_API ImFont*           AddFontFromMemoryCompressedBase85TTF(const char* compressed_font_data_base85, float size_pixels, const ImFontConfig* font_cfg = NULL, const ImWchar* glyph_ranges = NULL);              // 'compressed_font_data_base85' still owned by caller. Compress with binary_to_compressed_c.cpp with -base85 parameter.
        // IMGUI_API void              ClearTexData();             // Clear the CPU-side texture data. Saves RAM once the texture has been copied to graphics memory.
        ClearTexData() { this.native.ClearTexData(); }
        // IMGUI_API void              ClearInputData();           // Clear the input TTF data (inc sizes, glyph ranges)
        ClearInputData() { this.native.ClearInputData(); }
        // IMGUI_API void              ClearFonts();               // Clear the ImGui-side font data (glyphs storage, UV coordinates)
        ClearFonts() { this.native.ClearFonts(); }
        // IMGUI_API void              Clear();                    // Clear all
        Clear() { this.native.Clear(); }
        // Build atlas, retrieve pixel data.
        // User is in charge of copying the pixels into graphics memory (e.g. create a texture with your engine). Then store your texture handle with SetTexID().
        // RGBA32 format is provided for convenience and compatibility, but note that unless you use CustomRect to draw color data, the RGB pixels emitted from Fonts will all be white (~75% of waste).
        // Pitch = Width * BytesPerPixels
        // IMGUI_API bool              Build();                    // Build pixels data. This is called automatically for you by the GetTexData*** functions.
        Build() { return this.native.Build(); }
        // IMGUI_API bool              IsBuilt()                   { return Fonts.Size > 0 && (TexPixelsAlpha8 != NULL || TexPixelsRGBA32 != NULL); }
        IsBuilt() { return this.native.IsBuilt(); }
        // IMGUI_API void              GetTexDataAsAlpha8(unsigned char** out_pixels, int* out_width, int* out_height, int* out_bytes_per_pixel = NULL);  // 1 byte per-pixel
        GetTexDataAsAlpha8() {
            return this.native.GetTexDataAsAlpha8();
        }
        // IMGUI_API void              GetTexDataAsRGBA32(unsigned char** out_pixels, int* out_width, int* out_height, int* out_bytes_per_pixel = NULL);  // 4 bytes-per-pixel
        GetTexDataAsRGBA32() {
            return this.native.GetTexDataAsRGBA32();
        }
        // void                        SetTexID(ImTextureID id)    { TexID = id; }
        SetTexID(id) { this.TexID = id; }
        //-------------------------------------------
        // Glyph Ranges
        //-------------------------------------------
        // Helpers to retrieve list of common Unicode ranges (2 value per range, values are inclusive, zero-terminated list)
        // NB: Make sure that your string are UTF-8 and NOT in your local code page. In C++11, you can create UTF-8 string literal using the u8"Hello world" syntax. See FAQ for details.
        // IMGUI_API const ImWchar*    GetGlyphRangesDefault();    // Basic Latin, Extended Latin
        GetGlyphRangesDefault() { return this.native.GetGlyphRangesDefault(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesKorean();     // Default + Korean characters
        GetGlyphRangesKorean() { return this.native.GetGlyphRangesKorean(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesJapanese();   // Default + Hiragana, Katakana, Half-Width, Selection of 1946 Ideographs
        GetGlyphRangesJapanese() { return this.native.GetGlyphRangesJapanese(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesChineseFull();            // Default + Half-Width + Japanese Hiragana/Katakana + full set of about 21000 CJK Unified Ideographs
        GetGlyphRangesChineseFull() { return this.native.GetGlyphRangesChineseFull(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesChineseSimplifiedCommon();// Default + Half-Width + Japanese Hiragana/Katakana + set of 2500 CJK Unified Ideographs for common simplified Chinese
        GetGlyphRangesChineseSimplifiedCommon() { return this.native.GetGlyphRangesChineseSimplifiedCommon(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesCyrillic();   // Default + about 400 Cyrillic characters
        GetGlyphRangesCyrillic() { return this.native.GetGlyphRangesCyrillic(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesThai();       // Default + Thai characters
        GetGlyphRangesThai() { return this.native.GetGlyphRangesThai(); }
        // IMGUI_API const ImWchar*    GetGlyphRangesVietnamese();       // Default + Vietnamese characters
        GetGlyphRangesVietnamese() { return this.native.GetGlyphRangesVietnamese(); }
        // Helpers to build glyph ranges from text data. Feed your application strings/characters to it then call BuildRanges().
        // struct GlyphRangesBuilder
        // {
        //     ImVector<unsigned char> UsedChars;  // Store 1-bit per Unicode code point (0=unused, 1=used)
        //     GlyphRangesBuilder()                { UsedChars.resize(0x10000 / 8); memset(UsedChars.Data, 0, 0x10000 / 8); }
        //     bool           GetBit(int n) const  { return (UsedChars[n >> 3] & (1 << (n & 7))) != 0; }
        //     void           SetBit(int n)        { UsedChars[n >> 3] |= 1 << (n & 7); }  // Set bit 'c' in the array
        //     void           AddChar(ImWchar c)   { SetBit(c); }                          // Add character
        //     IMGUI_API void AddText(const char* text, const char* text_end = NULL);      // Add string (each character of the UTF-8 string are added)
        //     IMGUI_API void AddRanges(const ImWchar* ranges);                            // Add ranges, e.g. builder.AddRanges(ImFontAtlas::GetGlyphRangesDefault) to force add all of ASCII/Latin+Ext
        //     IMGUI_API void BuildRanges(ImVector<ImWchar>* out_ranges);                  // Output new ranges
        // };
        //-------------------------------------------
        // Custom Rectangles/Glyphs API
        //-------------------------------------------
        // You can request arbitrary rectangles to be packed into the atlas, for your own purposes. After calling Build(), you can query the rectangle position and render your pixels.
        // You can also request your rectangles to be mapped as font glyph (given a font + Unicode point), so you can render e.g. custom colorful icons and use them as regular glyphs.
        // struct CustomRect
        // {
        //     unsigned int    ID;             // Input    // User ID. Use <0x10000 to map into a font glyph, >=0x10000 for other/internal/custom texture data.
        //     unsigned short  Width, Height;  // Input    // Desired rectangle dimension
        //     unsigned short  X, Y;           // Output   // Packed position in Atlas
        //     float           GlyphAdvanceX;  // Input    // For custom font glyphs only (ID<0x10000): glyph xadvance
        //     ImVec2          GlyphOffset;    // Input    // For custom font glyphs only (ID<0x10000): glyph display offset
        //     ImFont*         Font;           // Input    // For custom font glyphs only (ID<0x10000): target font
        //     CustomRect()            { ID = 0xFFFFFFFF; Width = Height = 0; X = Y = 0xFFFF; GlyphAdvanceX = 0.0f; GlyphOffset = ImVec2(0,0); Font = NULL; }
        //     bool IsPacked() const   { return X != 0xFFFF; }
        // };
        // IMGUI_API int       AddCustomRectRegular(unsigned int id, int width, int height);                                                                   // Id needs to be >= 0x10000. Id >= 0x80000000 are reserved for ImGui and ImDrawList
        // IMGUI_API int       AddCustomRectFontGlyph(ImFont* font, ImWchar id, int width, int height, float advance_x, const ImVec2& offset = ImVec2(0,0));   // Id needs to be < 0x10000 to register a rectangle to map into a specific font.
        // IMGUI_API void      CalcCustomRectUV(const CustomRect* rect, ImVec2* out_uv_min, ImVec2* out_uv_max);
        // const CustomRect*   GetCustomRectByIndex(int index) const { if (index < 0) return NULL; return &CustomRects[index]; }
        //-------------------------------------------
        // Members
        //-------------------------------------------
        // bool                        Locked;             // Marked as Locked by ImGui::NewFrame() so attempt to modify the atlas will assert.
        get Locked() { return this.native.Locked; }
        set Locked(value) { this.native.Locked = value; }
        // ImFontAtlasFlags            Flags;              // Build flags (see ImFontAtlasFlags_)
        get Flags() { return this.native.Flags; }
        set Flags(value) { this.native.Flags = value; }
        // ImTextureID                 TexID;              // User data to refer to the texture once it has been uploaded to user's graphic systems. It is passed back to you during rendering via the ImDrawCmd structure.
        get TexID() {
            return ImGuiContext.getTexture(this.native.TexID);
        }
        set TexID(value) {
            this.native.TexID = ImGuiContext.setTexture(value);
        }
        // int                         TexDesiredWidth;    // Texture width desired by user before Build(). Must be a power-of-two. If have many glyphs your graphics API have texture size restrictions you may want to increase texture width to decrease height.
        get TexDesiredWidth() { return this.native.TexDesiredWidth; }
        set TexDesiredWidth(value) { this.native.TexDesiredWidth = value; }
        // int                         TexGlyphPadding;    // Padding between glyphs within texture in pixels. Defaults to 1.
        get TexGlyphPadding() { return this.native.TexGlyphPadding; }
        set TexGlyphPadding(value) { this.native.TexGlyphPadding = value; }
        // [Internal]
        // NB: Access texture data via GetTexData*() calls! Which will setup a default font for you.
        // unsigned char*              TexPixelsAlpha8;    // 1 component per pixel, each component is unsigned 8-bit. Total size = TexWidth * TexHeight
        // unsigned int*               TexPixelsRGBA32;    // 4 component per pixel, each component is unsigned 8-bit. Total size = TexWidth * TexHeight * 4
        // int                         TexWidth;           // Texture width calculated during Build().
        get TexWidth() { return this.native.TexWidth; }
        // int                         TexHeight;          // Texture height calculated during Build().
        get TexHeight() { return this.native.TexHeight; }
        // ImVec2                      TexUvScale;         // = (1.0f/TexWidth, 1.0f/TexHeight)
        get TexUvScale() { return this.native.TexUvScale; }
        // ImVec2                      TexUvWhitePixel;    // Texture coordinates to a white pixel
        get TexUvWhitePixel() { return this.native.TexUvWhitePixel; }
        // ImVector<ImFont*>           Fonts;              // Hold all the fonts returned by AddFont*. Fonts[0] is the default font upon calling ImGui::NewFrame(), use ImGui::PushFont()/PopFont() to change the current font.
        get Fonts() {
            const fonts = new ImVector();
            this.native.IterateFonts((font) => {
                fonts.push(new ImFont(font));
            });
            return fonts;
        }
    }
    exports.ImFontAtlas = ImFontAtlas;
    // Font runtime data and rendering
    // ImFontAtlas automatically loads a default embedded font for you when you call GetTexDataAsAlpha8() or GetTexDataAsRGBA32().
    class ImFont {
        constructor(native) {
            this.native = native;
        }
        // Members: Hot ~62/78 bytes
        // float                       FontSize;           // <user set>   // Height of characters, set during loading (don't change after loading)
        get FontSize() { return this.native.FontSize; }
        // float                       Scale;              // = 1.f        // Base font scale, multiplied by the per-window font scale which you can adjust with SetFontScale()
        get Scale() { return this.native.Scale; }
        set Scale(value) { this.native.Scale = value; }
        // ImVec2                      DisplayOffset;      // = (0.f,1.f)  // Offset font rendering by xx pixels
        get DisplayOffset() { return this.native.DisplayOffset; }
        // ImVector<ImFontGlyph>       Glyphs;             //              // All glyphs.
        get Glyphs() {
            const glyphs = new ImVector();
            this.native.IterateGlyphs((glyph) => {
                glyphs.push(new ImFontGlyph(glyph)); // TODO: wrap native
            });
            return glyphs;
        }
        // ImVector<float>             IndexAdvanceX;      //              // Sparse. Glyphs->AdvanceX in a directly indexable way (more cache-friendly, for CalcTextSize functions which are often bottleneck in large UI).
        // get IndexAdvanceX(): any { return this.native.IndexAdvanceX; }
        // ImVector<unsigned short>    IndexLookup;        //              // Sparse. Index glyphs by Unicode code-point.
        // get IndexLookup(): any { return this.native.IndexLookup; }
        // const ImFontGlyph*          FallbackGlyph;      // == FindGlyph(FontFallbackChar)
        get FallbackGlyph() {
            const glyph = this.native.FallbackGlyph;
            return glyph && new ImFontGlyph(glyph);
        }
        set FallbackGlyph(value) {
            this.native.FallbackGlyph = value && value.internal;
        }
        // float                       FallbackAdvanceX;   // == FallbackGlyph->AdvanceX
        get FallbackAdvanceX() { return this.native.FallbackAdvanceX; }
        // ImWchar                     FallbackChar;       // = '?'        // Replacement glyph if one isn't found. Only set via SetFallbackChar()
        get FallbackChar() { return this.native.FallbackChar; }
        // Members: Cold ~18/26 bytes
        // short                       ConfigDataCount;    // ~ 1          // Number of ImFontConfig involved in creating this font. Bigger than 1 when merging multiple font sources into one ImFont.
        get ConfigDataCount() { return this.ConfigData.length; }
        // ImFontConfig*               ConfigData;         //              // Pointer within ContainerAtlas->ConfigData
        get ConfigData() {
            const cfg_data = [];
            this.native.IterateConfigData((cfg) => {
                cfg_data.push(new ImFontConfig(cfg));
            });
            return cfg_data;
        }
        // ImFontAtlas*                ContainerAtlas;     //              // What we has been loaded into
        get ContainerAtlas() { return null; }
        // float                       Ascent, Descent;    //              // Ascent: distance from top to bottom of e.g. 'A' [0..FontSize]
        get Ascent() { return this.native.Ascent; }
        get Descent() { return this.native.Descent; }
        // int                         MetricsTotalSurface;//              // Total surface in pixels to get an idea of the font rasterization/texture cost (not exact, we approximate the cost of padding between glyphs)
        get MetricsTotalSurface() { return this.native.MetricsTotalSurface; }
        // Methods
        // IMGUI_API ImFont();
        // IMGUI_API ~ImFont();
        // IMGUI_API void              ClearOutputData();
        ClearOutputData() { return this.native.ClearOutputData(); }
        // IMGUI_API void              BuildLookupTable();
        BuildLookupTable() { return this.native.BuildLookupTable(); }
        // IMGUI_API const ImFontGlyph*FindGlyph(ImWchar c) const;
        FindGlyph(c) {
            const glyph = this.native.FindGlyph(c);
            return glyph && new ImFontGlyph(glyph);
        }
        // IMGUI_API const ImFontGlyph*FindGlyphNoFallback(ImWchar c) const;
        FindGlyphNoFallback(c) {
            const glyph = this.native.FindGlyphNoFallback(c);
            return glyph && new ImFontGlyph(glyph);
        }
        // IMGUI_API void              SetFallbackChar(ImWchar c);
        SetFallbackChar(c) { return this.native.SetFallbackChar(c); }
        // float                       GetCharAdvance(ImWchar c) const     { return ((int)c < IndexAdvanceX.Size) ? IndexAdvanceX[(int)c] : FallbackAdvanceX; }
        GetCharAdvance(c) { return this.native.GetCharAdvance(c); }
        // bool                        IsLoaded() const                    { return ContainerAtlas != NULL; }
        IsLoaded() { return this.native.IsLoaded(); }
        // const char*                 GetDebugName() const                { return ConfigData ? ConfigData->Name : "<unknown>"; }
        GetDebugName() { return this.native.GetDebugName(); }
        // 'max_width' stops rendering after a certain width (could be turned into a 2d size). FLT_MAX to disable.
        // 'wrap_width' enable automatic word-wrapping across multiple lines to fit into given width. 0.0f to disable.
        // IMGUI_API ImVec2            CalcTextSizeA(float size, float max_width, float wrap_width, const char* text_begin, const char* text_end = NULL, const char** remaining = NULL) const; // utf8
        CalcTextSizeA(size, max_width, wrap_width, text_begin, text_end = null, remaining = null) {
            return this.native.CalcTextSizeA(size, max_width, wrap_width, text_end !== null ? text_begin.substring(0, text_end) : text_begin, remaining, new ImVec2());
        }
        // IMGUI_API const char*       CalcWordWrapPositionA(float scale, const char* text, const char* text_end, float wrap_width) const;
        CalcWordWrapPositionA(scale, text, text_end = null, wrap_width) {
            return this.native.CalcWordWrapPositionA(scale, text_end !== null ? text.substring(0, text_end) : text, wrap_width);
        }
        // IMGUI_API void              RenderChar(ImDrawList* draw_list, float size, ImVec2 pos, ImU32 col, unsigned short c) const;
        RenderChar(draw_list, size, pos, col, c) {
            this.native.RenderChar(draw_list.native, size, pos, col, c);
        }
        // IMGUI_API void              RenderText(ImDrawList* draw_list, float size, ImVec2 pos, ImU32 col, const ImVec4& clip_rect, const char* text_begin, const char* text_end, float wrap_width = 0.0f, bool cpu_fine_clip = false) const;
        RenderText(draw_list, size, pos, col, clip_rect, text_begin, text_end = null, wrap_width = 0.0, cpu_fine_clip = false) { }
    }
    exports.ImFont = ImFont;
    // a script version of BindImGui.ImGuiStyle with matching interface
    class script_ImGuiStyle {
        constructor() {
            this.Alpha = 1.0;
            this.WindowPadding = new ImVec2(8, 8);
            this.WindowRounding = 7.0;
            this.WindowBorderSize = 0.0;
            this.WindowMinSize = new ImVec2(32, 32);
            this.WindowTitleAlign = new ImVec2(0.0, 0.5);
            this.WindowMenuButtonPosition = ImGuiDir.Left;
            this.ChildRounding = 0.0;
            this.ChildBorderSize = 1.0;
            this.PopupRounding = 0.0;
            this.PopupBorderSize = 1.0;
            this.FramePadding = new ImVec2(4, 3);
            this.FrameRounding = 0.0;
            this.FrameBorderSize = 0.0;
            this.ItemSpacing = new ImVec2(8, 4);
            this.ItemInnerSpacing = new ImVec2(4, 4);
            this.TouchExtraPadding = new ImVec2(0, 0);
            this.IndentSpacing = 21.0;
            this.ColumnsMinSpacing = 6.0;
            this.ScrollbarSize = 16.0;
            this.ScrollbarRounding = 9.0;
            this.GrabMinSize = 10.0;
            this.GrabRounding = 0.0;
            this.TabRounding = 0.0;
            this.TabBorderSize = 0.0;
            this.ButtonTextAlign = new ImVec2(0.5, 0.5);
            this.SelectableTextAlign = new ImVec2(0.0, 0.0);
            this.DisplayWindowPadding = new ImVec2(22, 22);
            this.DisplaySafeAreaPadding = new ImVec2(4, 4);
            this.MouseCursorScale = 1;
            this.AntiAliasedLines = true;
            this.AntiAliasedFill = true;
            this.CurveTessellationTol = 1.25;
            this.Colors = [];
            for (let i = 0; i < ImGuiCol.COUNT; ++i) {
                this.Colors[i] = new ImVec4();
            }
            const _this = new ImGuiStyle(this);
            const native = new bind.ImGuiStyle();
            const _that = new ImGuiStyle(native);
            _that.Copy(_this);
            bind.StyleColorsClassic(native);
            _this.Copy(_that);
            native.delete();
        }
        _getAt_Colors(index) { return this.Colors[index]; }
        _setAt_Colors(index, color) { this.Colors[index].Copy(color); return true; }
        ScaleAllSizes(scale_factor) {
            const _this = new ImGuiStyle(this);
            const native = new bind.ImGuiStyle();
            const _that = new ImGuiStyle(native);
            _that.Copy(_this);
            native.ScaleAllSizes(scale_factor);
            _this.Copy(_that);
            native.delete();
        }
    }
    class ImGuiStyle {
        constructor(internal = new script_ImGuiStyle()) {
            this.internal = internal;
            this.Colors = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return ImGuiCol.COUNT;
                    }
                    return this.internal._getAt_Colors(Number(key));
                },
                set: (target, key, value) => {
                    return this.internal._setAt_Colors(Number(key), value);
                },
            });
        }
        get Alpha() { return this.internal.Alpha; }
        set Alpha(value) { this.internal.Alpha = value; }
        get WindowPadding() { return this.internal.WindowPadding; }
        get WindowRounding() { return this.internal.WindowRounding; }
        set WindowRounding(value) { this.internal.WindowRounding = value; }
        get WindowBorderSize() { return this.internal.WindowBorderSize; }
        set WindowBorderSize(value) { this.internal.WindowBorderSize = value; }
        get WindowMinSize() { return this.internal.WindowMinSize; }
        get WindowTitleAlign() { return this.internal.WindowTitleAlign; }
        get WindowMenuButtonPosition() { return this.internal.WindowMenuButtonPosition; }
        set WindowMenuButtonPosition(value) { this.internal.WindowMenuButtonPosition = value; }
        get ChildRounding() { return this.internal.ChildRounding; }
        set ChildRounding(value) { this.internal.ChildRounding = value; }
        get ChildBorderSize() { return this.internal.ChildBorderSize; }
        set ChildBorderSize(value) { this.internal.ChildBorderSize = value; }
        get PopupRounding() { return this.internal.PopupRounding; }
        set PopupRounding(value) { this.internal.PopupRounding = value; }
        get PopupBorderSize() { return this.internal.PopupBorderSize; }
        set PopupBorderSize(value) { this.internal.PopupBorderSize = value; }
        get FramePadding() { return this.internal.FramePadding; }
        get FrameRounding() { return this.internal.FrameRounding; }
        set FrameRounding(value) { this.internal.FrameRounding = value; }
        get FrameBorderSize() { return this.internal.FrameBorderSize; }
        set FrameBorderSize(value) { this.internal.FrameBorderSize = value; }
        get ItemSpacing() { return this.internal.ItemSpacing; }
        get ItemInnerSpacing() { return this.internal.ItemInnerSpacing; }
        get TouchExtraPadding() { return this.internal.TouchExtraPadding; }
        get IndentSpacing() { return this.internal.IndentSpacing; }
        set IndentSpacing(value) { this.internal.IndentSpacing = value; }
        get ColumnsMinSpacing() { return this.internal.ColumnsMinSpacing; }
        set ColumnsMinSpacing(value) { this.internal.ColumnsMinSpacing = value; }
        get ScrollbarSize() { return this.internal.ScrollbarSize; }
        set ScrollbarSize(value) { this.internal.ScrollbarSize = value; }
        get ScrollbarRounding() { return this.internal.ScrollbarRounding; }
        set ScrollbarRounding(value) { this.internal.ScrollbarRounding = value; }
        get GrabMinSize() { return this.internal.GrabMinSize; }
        set GrabMinSize(value) { this.internal.GrabMinSize = value; }
        get GrabRounding() { return this.internal.GrabRounding; }
        set GrabRounding(value) { this.internal.GrabRounding = value; }
        get TabRounding() { return this.internal.TabRounding; }
        set TabRounding(value) { this.internal.TabRounding = value; }
        get TabBorderSize() { return this.internal.TabBorderSize; }
        set TabBorderSize(value) { this.internal.TabBorderSize = value; }
        get ButtonTextAlign() { return this.internal.ButtonTextAlign; }
        get SelectableTextAlign() { return this.internal.SelectableTextAlign; }
        get DisplayWindowPadding() { return this.internal.DisplayWindowPadding; }
        get DisplaySafeAreaPadding() { return this.internal.DisplaySafeAreaPadding; }
        get MouseCursorScale() { return this.internal.MouseCursorScale; }
        set MouseCursorScale(value) { this.internal.MouseCursorScale = value; }
        get AntiAliasedLines() { return this.internal.AntiAliasedLines; }
        set AntiAliasedLines(value) { this.internal.AntiAliasedLines = value; }
        get AntiAliasedFill() { return this.internal.AntiAliasedFill; }
        set AntiAliasedFill(value) { this.internal.AntiAliasedFill = value; }
        get CurveTessellationTol() { return this.internal.CurveTessellationTol; }
        set CurveTessellationTol(value) { this.internal.CurveTessellationTol = value; }
        Copy(other) {
            this.Alpha = other.Alpha;
            this.WindowPadding.Copy(other.WindowPadding);
            this.WindowRounding = other.WindowRounding;
            this.WindowBorderSize = other.WindowBorderSize;
            this.WindowMinSize.Copy(other.WindowMinSize);
            this.WindowTitleAlign.Copy(other.WindowTitleAlign);
            this.WindowMenuButtonPosition = other.WindowMenuButtonPosition;
            this.ChildRounding = other.ChildRounding;
            this.ChildBorderSize = other.ChildBorderSize;
            this.PopupRounding = other.PopupRounding;
            this.PopupBorderSize = other.PopupBorderSize;
            this.FramePadding.Copy(other.FramePadding);
            this.FrameRounding = other.FrameRounding;
            this.FrameBorderSize = other.FrameBorderSize;
            this.ItemSpacing.Copy(other.ItemSpacing);
            this.ItemInnerSpacing.Copy(other.ItemInnerSpacing);
            this.TouchExtraPadding.Copy(other.TouchExtraPadding);
            this.IndentSpacing = other.IndentSpacing;
            this.ColumnsMinSpacing = other.ColumnsMinSpacing;
            this.ScrollbarSize = other.ScrollbarSize;
            this.ScrollbarRounding = other.ScrollbarRounding;
            this.GrabMinSize = other.GrabMinSize;
            this.GrabRounding = other.GrabRounding;
            this.TabRounding = other.TabRounding;
            this.TabBorderSize = other.TabBorderSize;
            this.ButtonTextAlign.Copy(other.ButtonTextAlign);
            this.DisplayWindowPadding.Copy(other.DisplayWindowPadding);
            this.DisplaySafeAreaPadding.Copy(other.DisplaySafeAreaPadding);
            this.MouseCursorScale = other.MouseCursorScale;
            this.AntiAliasedLines = other.AntiAliasedLines;
            this.AntiAliasedFill = other.AntiAliasedFill;
            this.CurveTessellationTol = other.CurveTessellationTol;
            for (let i = 0; i < ImGuiCol.COUNT; ++i) {
                this.Colors[i].Copy(other.Colors[i]);
            }
            return this;
        }
        ScaleAllSizes(scale_factor) { this.internal.ScaleAllSizes(scale_factor); }
    }
    exports.ImGuiStyle = ImGuiStyle;
    // This is where your app communicate with Dear ImGui. Access via ImGui::GetIO().
    // Read 'Programmer guide' section in .cpp file for general usage.
    class ImGuiIO {
        constructor(native) {
            this.native = native;
            // int           KeyMap[ImGuiKey_COUNT];   // <unset>              // Map of indices into the KeysDown[512] entries array
            this.KeyMap = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return ImGuiKey.COUNT;
                    }
                    return this.native._getAt_KeyMap(Number(key));
                },
                set: (target, key, value) => {
                    return this.native._setAt_KeyMap(Number(key), value);
                },
            });
            // bool        MouseDown[5];               // Mouse buttons: left, right, middle + extras. ImGui itself mostly only uses left button (BeginPopupContext** are using right button). Others buttons allows us to track if the mouse is being used by your application + available to user as a convenience via IsMouse** API.
            this.MouseDown = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return 5;
                    }
                    return this.native._getAt_MouseDown(Number(key));
                },
                set: (target, key, value) => {
                    return this.native._setAt_MouseDown(Number(key), value);
                },
            });
            // bool        KeysDown[512];              // Keyboard keys that are pressed (in whatever storage order you naturally have access to keyboard data)
            this.KeysDown = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return 512;
                    }
                    return this.native._getAt_KeysDown(Number(key));
                },
                set: (target, key, value) => {
                    return this.native._setAt_KeysDown(Number(key), value);
                },
            });
            // float       NavInputs[ImGuiNavInput_COUNT]; // Gamepad inputs (keyboard keys will be auto-mapped and be written here by ImGui::NewFrame)
            this.NavInputs = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return ImGuiNavInput.COUNT;
                    }
                    return this.native._getAt_NavInputs(Number(key));
                },
                set: (target, key, value) => {
                    return this.native._setAt_NavInputs(Number(key), value);
                },
            });
            //------------------------------------------------------------------
            // [Internal] ImGui will maintain those fields. Forward compatibility not guaranteed!
            //------------------------------------------------------------------
            // ImVec2      MousePosPrev;               // Previous mouse position temporary storage (nb: not for public use, set to MousePos in NewFrame())
            // ImVec2      MouseClickedPos[5];         // Position at time of clicking
            this.MouseClickedPos = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return 5;
                    }
                    return this.native._getAt_MouseClickedPos(Number(key));
                },
            });
            // float       MouseClickedTime[5];        // Time of last click (used to figure out double-click)
            // bool        MouseClicked[5];            // Mouse button went from !Down to Down
            // bool        MouseDoubleClicked[5];      // Has mouse button been double-clicked?
            // bool        MouseReleased[5];           // Mouse button went from Down to !Down
            // bool        MouseDownOwned[5];          // Track if button was clicked inside a window. We don't request mouse capture from the application if click started outside ImGui bounds.
            // float       MouseDownDuration[5];       // Duration the mouse button has been down (0.0f == just clicked)
            this.MouseDownDuration = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return 5;
                    }
                    return this.native._getAt_MouseDownDuration(Number(key));
                },
            });
            // float       MouseDownDurationPrev[5];   // Previous time the mouse button has been down
            // ImVec2      MouseDragMaxDistanceAbs[5]; // Maximum distance, absolute, on each axis, of how much mouse has traveled from the clicking point
            // float       MouseDragMaxDistanceSqr[5]; // Squared maximum distance of how much mouse has traveled from the clicking point
            // float       KeysDownDuration[512];      // Duration the keyboard key has been down (0.0f == just pressed)
            this.KeysDownDuration = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return 512;
                    }
                    return this.native._getAt_KeysDownDuration(Number(key));
                },
            });
            // float       KeysDownDurationPrev[512];  // Previous duration the key has been down
            // float       NavInputsDownDuration[ImGuiNavInput_COUNT];
            this.NavInputsDownDuration = new Proxy([], {
                get: (target, key) => {
                    if (key === "length") {
                        return ImGuiNavInput.COUNT;
                    }
                    return this.native._getAt_NavInputsDownDuration(Number(key));
                },
            });
        }
        //------------------------------------------------------------------
        // Settings (fill once)                 // Default value:
        //------------------------------------------------------------------
        // ImGuiConfigFlags   ConfigFlags;         // = 0                  // See ImGuiConfigFlags_ enum. Set by user/application. Gamepad/keyboard navigation options, etc.
        get ConfigFlags() { return this.native.ConfigFlags; }
        set ConfigFlags(value) { this.native.ConfigFlags = value; }
        // ImGuiBackendFlags  BackendFlags;        // = 0                  // Set ImGuiBackendFlags_ enum. Set by imgui_impl_xxx files or custom back-end to communicate features supported by the back-end.
        get BackendFlags() { return this.native.BackendFlags; }
        set BackendFlags(value) { this.native.BackendFlags = value; }
        // ImVec2        DisplaySize;              // <unset>              // Display size, in pixels. For clamping windows positions.
        get DisplaySize() { return this.native.DisplaySize; }
        // float         DeltaTime;                // = 1.0f/60.0f         // Time elapsed since last frame, in seconds.
        get DeltaTime() { return this.native.DeltaTime; }
        set DeltaTime(value) { this.native.DeltaTime = value; }
        // float         IniSavingRate;            // = 5.0f               // Maximum time between saving positions/sizes to .ini file, in seconds.
        get IniSavingRate() { return this.native.IniSavingRate; }
        set IniSavingRate(value) { this.native.IniSavingRate = value; }
        // const char*   IniFilename;              // = "imgui.ini"        // Path to .ini file. NULL to disable .ini saving.
        get IniFilename() { return this.native.IniFilename; }
        set IniFilename(value) { this.native.IniFilename = value; }
        // const char*   LogFilename;              // = "imgui_log.txt"    // Path to .log file (default parameter to ImGui::LogToFile when no file is specified).
        get LogFilename() { return this.native.LogFilename; }
        set LogFilename(value) { this.native.LogFilename = value; }
        // float         MouseDoubleClickTime;     // = 0.30f              // Time for a double-click, in seconds.
        get MouseDoubleClickTime() { return this.native.MouseDoubleClickTime; }
        set MouseDoubleClickTime(value) { this.native.MouseDoubleClickTime = value; }
        // float         MouseDoubleClickMaxDist;  // = 6.0f               // Distance threshold to stay in to validate a double-click, in pixels.
        get MouseDoubleClickMaxDist() { return this.native.MouseDoubleClickMaxDist; }
        set MouseDoubleClickMaxDist(value) { this.native.MouseDoubleClickMaxDist = value; }
        // float         MouseDragThreshold;       // = 6.0f               // Distance threshold before considering we are dragging
        get MouseDragThreshold() { return this.native.MouseDragThreshold; }
        set MouseDragThreshold(value) { this.native.MouseDragThreshold = value; }
        // float         KeyRepeatDelay;           // = 0.250f             // When holding a key/button, time before it starts repeating, in seconds (for buttons in Repeat mode, etc.).
        get KeyRepeatDelay() { return this.native.KeyRepeatDelay; }
        set KeyRepeatDelay(value) { this.native.KeyRepeatDelay = value; }
        // float         KeyRepeatRate;            // = 0.050f             // When holding a key/button, rate at which it repeats, in seconds.
        get KeyRepeatRate() { return this.native.KeyRepeatRate; }
        set KeyRepeatRate(value) { this.native.KeyRepeatRate = value; }
        // void*         UserData;                 // = NULL               // Store your own data for retrieval by callbacks.
        get UserData() { return this.native.UserData; }
        set UserData(value) { this.native.UserData = value; }
        // ImFontAtlas*  Fonts;                    // <auto>               // Load and assemble one or more fonts into a single tightly packed texture. Output to Fonts array.
        get Fonts() { return new ImFontAtlas(this.native.Fonts); }
        // float         FontGlobalScale;          // = 1.0f               // Global scale all fonts
        get FontGlobalScale() { return this.native.FontGlobalScale; }
        set FontGlobalScale(value) { this.native.FontGlobalScale = value; }
        // bool          FontAllowUserScaling;     // = false              // Allow user scaling text of individual window with CTRL+Wheel.
        get FontAllowUserScaling() { return this.native.FontAllowUserScaling; }
        set FontAllowUserScaling(value) { this.native.FontAllowUserScaling = value; }
        // ImFont*       FontDefault;              // = NULL               // Font to use on NewFrame(). Use NULL to uses Fonts->Fonts[0].
        get FontDefault() {
            const font = this.native.FontDefault;
            return (font === null) ? null : new ImFont(font);
        }
        set FontDefault(value) {
            this.native.FontDefault = value && value.native;
        }
        // ImVec2        DisplayFramebufferScale;  // = (1.0f,1.0f)        // For retina display or other situations where window coordinates are different from framebuffer coordinates. User storage only, presently not used by ImGui.
        get DisplayFramebufferScale() { return this.native.DisplayFramebufferScale; }
        // Miscellaneous configuration options
        // bool          OptMacOSXBehaviors;       // = defined(__APPLE__) // OS X style: Text editing cursor movement using Alt instead of Ctrl, Shortcuts using Cmd/Super instead of Ctrl, Line/Text Start and End using Cmd+Arrows instead of Home/End, Double click selects by word instead of selecting whole text, Multi-selection in lists uses Cmd/Super instead of Ctrl
        get ConfigMacOSXBehaviors() { return this.native.ConfigMacOSXBehaviors; }
        set ConfigMacOSXBehaviors(value) { this.native.ConfigMacOSXBehaviors = value; }
        // bool          ConfigInputTextCursorBlink;   // = true               // Enable blinking cursor, for users who consider it annoying.
        get ConfigInputTextCursorBlink() { return this.native.ConfigInputTextCursorBlink; }
        set ConfigInputTextCursorBlink(value) { this.native.ConfigInputTextCursorBlink = value; }
        // bool          ConfigWindowsResizeFromEdges; // = false          // [BETA] Enable resizing of windows from their edges and from the lower-left corner. This requires (io.BackendFlags & ImGuiBackendFlags_HasMouseCursors) because it needs mouse cursor feedback. (This used to be the ImGuiWindowFlags_ResizeFromAnySide flag)
        get ConfigWindowsResizeFromEdges() { return this.native.ConfigWindowsResizeFromEdges; }
        set ConfigWindowsResizeFromEdges(value) { this.native.ConfigWindowsResizeFromEdges = value; }
        // bool        ConfigWindowsMoveFromTitleBarOnly;// = false        // [BETA] Set to true to only allow moving windows when clicked+dragged from the title bar. Windows without a title bar are not affected.
        get ConfigWindowsMoveFromTitleBarOnly() { return this.native.ConfigWindowsMoveFromTitleBarOnly; }
        set ConfigWindowsMoveFromTitleBarOnly(value) { this.native.ConfigWindowsMoveFromTitleBarOnly = value; }
        //------------------------------------------------------------------
        // Settings (User Functions)
        //------------------------------------------------------------------
        // Optional: Platform/Renderer back-end name (informational only! will be displayed in About Window) + User data for back-end/wrappers to store their own stuff.
        // const char* BackendPlatformName;            // = NULL
        get BackendPlatformName() { return this.native.BackendPlatformName; }
        set BackendPlatformName(value) { this.native.BackendPlatformName = value; }
        // const char* BackendRendererName;            // = NULL
        get BackendRendererName() { return this.native.BackendRendererName; }
        set BackendRendererName(value) { this.native.BackendRendererName = value; }
        // void*       BackendPlatformUserData;        // = NULL
        get BackendPlatformUserData() { return this.native.BackendPlatformUserData; }
        set BackendPlatformUserData(value) { this.native.BackendPlatformUserData = value; }
        // void*       BackendRendererUserData;        // = NULL
        get BackendRendererUserData() { return this.native.BackendRendererUserData; }
        set BackendRendererUserData(value) { this.native.BackendRendererUserData = value; }
        // void*       BackendLanguageUserData;        // = NULL
        get BackendLanguageUserData() { return this.native.BackendLanguageUserData; }
        set BackendLanguageUserData(value) { this.native.BackendLanguageUserData = value; }
        // Optional: access OS clipboard
        // (default to use native Win32 clipboard on Windows, otherwise uses a private clipboard. Override to access OS clipboard on other architectures)
        // const char* (*GetClipboardTextFn)(void* user_data);
        get GetClipboardTextFn() { return this.native.GetClipboardTextFn; }
        set GetClipboardTextFn(value) { this.native.GetClipboardTextFn = value; }
        // void        (*SetClipboardTextFn)(void* user_data, const char* text);
        get SetClipboardTextFn() { return this.native.SetClipboardTextFn; }
        set SetClipboardTextFn(value) { this.native.SetClipboardTextFn = value; }
        // void*       ClipboardUserData;
        get ClipboardUserData() { return this.native.ClipboardUserData; }
        set ClipboardUserData(value) { this.native.ClipboardUserData = value; }
        // Optional: override memory allocations. MemFreeFn() may be called with a NULL pointer.
        // (default to posix malloc/free)
        // void*       (*MemAllocFn)(size_t sz);
        // void        (*MemFreeFn)(void* ptr);
        // Optional: notify OS Input Method Editor of the screen position of your cursor for text input position (e.g. when using Japanese/Chinese IME in Windows)
        // (default to use native imm32 api on Windows)
        // void        (*ImeSetInputScreenPosFn)(int x, int y);
        // void*       ImeWindowHandle;            // (Windows) Set this to your HWND to get automatic IME cursor positioning.
        //------------------------------------------------------------------
        // Input - Fill before calling NewFrame()
        //------------------------------------------------------------------
        // ImVec2      MousePos;                   // Mouse position, in pixels. Set to ImVec2(-FLT_MAX,-FLT_MAX) if mouse is unavailable (on another screen, etc.)
        get MousePos() { return this.native.MousePos; }
        // float       MouseWheel;                 // Mouse wheel: 1 unit scrolls about 5 lines text.
        get MouseWheel() { return this.native.MouseWheel; }
        set MouseWheel(value) { this.native.MouseWheel = value; }
        // float       MouseWheelH;                    // Mouse wheel (Horizontal). Most users don't have a mouse with an horizontal wheel, may not be filled by all back-ends.
        get MouseWheelH() { return this.native.MouseWheelH; }
        set MouseWheelH(value) { this.native.MouseWheelH = value; }
        // bool        MouseDrawCursor;            // Request ImGui to draw a mouse cursor for you (if you are on a platform without a mouse cursor).
        get MouseDrawCursor() { return this.native.MouseDrawCursor; }
        set MouseDrawCursor(value) { this.native.MouseDrawCursor = value; }
        // bool        KeyCtrl;                    // Keyboard modifier pressed: Control
        get KeyCtrl() { return this.native.KeyCtrl; }
        set KeyCtrl(value) { this.native.KeyCtrl = value; }
        // bool        KeyShift;                   // Keyboard modifier pressed: Shift
        get KeyShift() { return this.native.KeyShift; }
        set KeyShift(value) { this.native.KeyShift = value; }
        // bool        KeyAlt;                     // Keyboard modifier pressed: Alt
        get KeyAlt() { return this.native.KeyAlt; }
        set KeyAlt(value) { this.native.KeyAlt = value; }
        // bool        KeySuper;                   // Keyboard modifier pressed: Cmd/Super/Windows
        get KeySuper() { return this.native.KeySuper; }
        set KeySuper(value) { this.native.KeySuper = value; }
        // Functions
        // IMGUI_API void AddInputCharacter(ImWchar c);                        // Add new character into InputCharacters[]
        AddInputCharacter(c) { this.native.AddInputCharacter(c); }
        // IMGUI_API void AddInputCharactersUTF8(const char* utf8_chars);      // Add new characters into InputCharacters[] from an UTF-8 string
        AddInputCharactersUTF8(utf8_chars) { this.native.AddInputCharactersUTF8(utf8_chars); }
        // inline void    ClearInputCharacters() { InputCharacters[0] = 0; }   // Clear the text input buffer manually
        ClearInputCharacters() { this.native.ClearInputCharacters(); }
        //------------------------------------------------------------------
        // Output - Retrieve after calling NewFrame()
        //------------------------------------------------------------------
        // bool        WantCaptureMouse;           // When io.WantCaptureMouse is true, do not dispatch mouse input data to your main application. This is set by ImGui when it wants to use your mouse (e.g. unclicked mouse is hovering a window, or a widget is active).
        get WantCaptureMouse() { return this.native.WantCaptureMouse; }
        set WantCaptureMouse(value) { this.native.WantCaptureMouse = value; }
        // bool        WantCaptureKeyboard;        // When io.WantCaptureKeyboard is true, do not dispatch keyboard input data to your main application. This is set by ImGui when it wants to use your keyboard inputs.
        get WantCaptureKeyboard() { return this.native.WantCaptureKeyboard; }
        set WantCaptureKeyboard(value) { this.native.WantCaptureKeyboard = value; }
        // bool        WantTextInput;              // Mobile/console: when io.WantTextInput is true, you may display an on-screen keyboard. This is set by ImGui when it wants textual keyboard input to happen (e.g. when a InputText widget is active).
        get WantTextInput() { return this.native.WantTextInput; }
        set WantTextInput(value) { this.native.WantTextInput = value; }
        // bool        WantSetMousePos;              // [BETA-NAV] MousePos has been altered, back-end should reposition mouse on next frame. Set only when 'NavMovesMouse=true'.
        get WantSetMousePos() { return this.native.WantSetMousePos; }
        set WantSetMousePos(value) { this.native.WantSetMousePos = value; }
        // bool        WantSaveIniSettings;        // When manual .ini load/save is active (io.IniFilename == NULL), this will be set to notify your application that you can call SaveIniSettingsToMemory() and save yourself. IMPORTANT: You need to clear io.WantSaveIniSettings yourself.
        get WantSaveIniSettings() { return this.native.WantSaveIniSettings; }
        set WantSaveIniSettings(value) { this.native.WantSaveIniSettings = value; }
        // bool        NavActive;                  // Directional navigation is currently allowed (will handle ImGuiKey_NavXXX events) = a window is focused and it doesn't use the ImGuiWindowFlags_NoNavInputs flag.
        get NavActive() { return this.native.NavActive; }
        set NavActive(value) { this.native.NavActive = value; }
        // bool        NavVisible;                 // Directional navigation is visible and allowed (will handle ImGuiKey_NavXXX events).
        get NavVisible() { return this.native.NavVisible; }
        set NavVisible(value) { this.native.NavVisible = value; }
        // float       Framerate;                  // Application framerate estimation, in frame per second. Solely for convenience. Rolling average estimation based on IO.DeltaTime over 120 frames
        get Framerate() { return this.native.Framerate; }
        // int         MetricsRenderVertices;      // Vertices output during last call to Render()
        get MetricsRenderVertices() { return this.native.MetricsRenderVertices; }
        // int         MetricsRenderIndices;       // Indices output during last call to Render() = number of triangles * 3
        get MetricsRenderIndices() { return this.native.MetricsRenderIndices; }
        // int         MetricsRenderWindows;       // Number of visible windows
        get MetricsRenderWindows() { return this.native.MetricsRenderWindows; }
        // int         MetricsActiveWindows;       // Number of visible root windows (exclude child windows)
        get MetricsActiveWindows() { return this.native.MetricsActiveWindows; }
        // int         MetricsActiveAllocations;   // Number of active allocations, updated by MemAlloc/MemFree based on current context. May be off if you have multiple imgui contexts.
        get MetricsActiveAllocations() { return this.native.MetricsActiveAllocations; }
        // ImVec2      MouseDelta;                 // Mouse delta. Note that this is zero if either current or previous position are invalid (-FLT_MAX,-FLT_MAX), so a disappearing/reappearing mouse won't have a huge delta.
        get MouseDelta() { return this.native.MouseDelta; }
    }
    exports.ImGuiIO = ImGuiIO;
    // Context creation and access, if you want to use multiple context, share context between modules (e.g. DLL).
    // All contexts share a same ImFontAtlas by default. If you want different font atlas, you can new() them and overwrite the GetIO().Fonts variable of an ImGui context.
    // All those functions are not reliant on the current context.
    class ImGuiContext {
        constructor(native) {
            this.native = native;
            this.textures = [];
        }
        static getTexture(index) {
            if (ImGuiContext.current_ctx === null) {
                throw new Error();
            }
            return ImGuiContext.current_ctx._getTexture(index);
        }
        static setTexture(texture) {
            if (ImGuiContext.current_ctx === null) {
                throw new Error();
            }
            return ImGuiContext.current_ctx._setTexture(texture);
        }
        _getTexture(index) {
            return this.textures[index] || null;
        }
        _setTexture(texture) {
            let index = this.textures.indexOf(texture);
            if (index === -1) {
                for (let i = 0; i < this.textures.length; ++i) {
                    if (this.textures[i] === null) {
                        this.textures[i] = texture;
                        return i;
                    }
                }
                index = this.textures.length;
                this.textures.push(texture);
            }
            return index;
        }
    }
    exports.ImGuiContext = ImGuiContext;
    ImGuiContext.current_ctx = null;
    // IMGUI_API ImGuiContext* CreateContext(ImFontAtlas* shared_font_atlas = NULL);
    function CreateContext(shared_font_atlas = null) {
        const ctx = new ImGuiContext(bind.CreateContext());
        if (ImGuiContext.current_ctx === null) {
            ImGuiContext.current_ctx = ctx;
        }
        return ctx;
    }
    exports.CreateContext = CreateContext;
    // IMGUI_API void          DestroyContext(ImGuiContext* ctx = NULL);   // NULL = Destroy current context
    function DestroyContext(ctx = null) {
        if (ctx === null) {
            ctx = ImGuiContext.current_ctx;
            ImGuiContext.current_ctx = null;
        }
        bind.DestroyContext((ctx === null) ? null : ctx.native);
    }
    exports.DestroyContext = DestroyContext;
    // IMGUI_API ImGuiContext* GetCurrentContext();
    function GetCurrentContext() {
        // const ctx_native: BindImGui.ImGuiContext | null = bind.GetCurrentContext();
        return ImGuiContext.current_ctx;
    }
    exports.GetCurrentContext = GetCurrentContext;
    // IMGUI_API void          SetCurrentContext(ImGuiContext* ctx);
    function SetCurrentContext(ctx) {
        bind.SetCurrentContext((ctx === null) ? null : ctx.native);
        ImGuiContext.current_ctx = ctx;
    }
    exports.SetCurrentContext = SetCurrentContext;
    // IMGUI_API bool          DebugCheckVersionAndDataLayout(const char* version_str, size_t sz_io, size_t sz_style, size_t sz_vec2, size_t sz_vec4, size_t sz_drawvert);
    function DebugCheckVersionAndDataLayout(version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_draw_vert, sz_draw_idx) {
        return bind.DebugCheckVersionAndDataLayout(version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_draw_vert, sz_draw_idx);
    }
    exports.DebugCheckVersionAndDataLayout = DebugCheckVersionAndDataLayout;
    // Main
    // IMGUI_API ImGuiIO&      GetIO();
    function GetIO() { return new ImGuiIO(bind.GetIO()); }
    exports.GetIO = GetIO;
    // IMGUI_API ImGuiStyle&   GetStyle();
    function GetStyle() { return new ImGuiStyle(bind.GetStyle()); }
    exports.GetStyle = GetStyle;
    // IMGUI_API void          NewFrame();                                 // start a new ImGui frame, you can submit any command from this point until Render()/EndFrame().
    function NewFrame() { bind.NewFrame(); }
    exports.NewFrame = NewFrame;
    // IMGUI_API void          EndFrame();                                 // ends the ImGui frame. automatically called by Render(), so most likely don't need to ever call that yourself directly. If you don't need to render you may call EndFrame() but you'll have wasted CPU already. If you don't need to render, better to not create any imgui windows instead!
    function EndFrame() { bind.EndFrame(); }
    exports.EndFrame = EndFrame;
    // IMGUI_API void          Render();                                   // ends the ImGui frame, finalize the draw data, then call your io.RenderDrawListsFn() function if set.
    function Render() { bind.Render(); }
    exports.Render = Render;
    // IMGUI_API ImDrawData*   GetDrawData();                              // same value as passed to your io.RenderDrawListsFn() function. valid after Render() and until the next call to NewFrame()
    function GetDrawData() {
        const draw_data = bind.GetDrawData();
        return (draw_data === null) ? null : new ImDrawData(draw_data);
    }
    exports.GetDrawData = GetDrawData;
    // Demo, Debug, Informations
    // IMGUI_API void          ShowDemoWindow(bool* p_open = NULL);        // create demo/test window (previously called ShowTestWindow). demonstrate most ImGui features. call this to learn about the library! try to make it always available in your application!
    function ShowDemoWindow(p_open = null) { bind.ShowDemoWindow(p_open); }
    exports.ShowDemoWindow = ShowDemoWindow;
    // IMGUI_API void          ShowAboutWindow(bool* p_open = NULL);       // create about window. display Dear ImGui version, credits and build/system information.
    function ShowAboutWindow(p_open = null) {
        if (p_open === null) {
            bind.ShowAboutWindow(null);
        }
        else if (Array.isArray(p_open)) {
            bind.ShowAboutWindow(p_open);
        }
        else {
            const ref_open = [p_open()];
            bind.ShowAboutWindow(ref_open);
            p_open(ref_open[0]);
        }
    }
    exports.ShowAboutWindow = ShowAboutWindow;
    // IMGUI_API void          ShowMetricsWindow(bool* p_open = NULL);     // create metrics window. display ImGui internals: draw commands (with individual draw calls and vertices), window list, basic internal state, etc.
    function ShowMetricsWindow(p_open = null) {
        if (p_open === null) {
            bind.ShowMetricsWindow(null);
        }
        else if (Array.isArray(p_open)) {
            bind.ShowMetricsWindow(p_open);
        }
        else {
            const ref_open = [p_open()];
            bind.ShowMetricsWindow(ref_open);
            p_open(ref_open[0]);
        }
    }
    exports.ShowMetricsWindow = ShowMetricsWindow;
    // IMGUI_API void          ShowStyleEditor(ImGuiStyle* ref = NULL);    // add style editor block (not a window). you can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it uses the default style)
    function ShowStyleEditor(ref = null) {
        if (ref === null) {
            bind.ShowStyleEditor(null);
        }
        else if (ref.internal instanceof bind.ImGuiStyle) {
            bind.ShowStyleEditor(ref.internal);
        }
        else {
            const native = new bind.ImGuiStyle();
            const wrap = new ImGuiStyle(native);
            wrap.Copy(ref);
            bind.ShowStyleEditor(native);
            ref.Copy(wrap);
            native.delete();
        }
    }
    exports.ShowStyleEditor = ShowStyleEditor;
    // IMGUI_API bool          ShowStyleSelector(const char* label);
    function ShowStyleSelector(label) { return bind.ShowStyleSelector(label); }
    exports.ShowStyleSelector = ShowStyleSelector;
    // IMGUI_API void          ShowFontSelector(const char* label);
    function ShowFontSelector(label) { bind.ShowFontSelector(label); }
    exports.ShowFontSelector = ShowFontSelector;
    // IMGUI_API void          ShowUserGuide();                            // add basic help/info block (not a window): how to manipulate ImGui as a end-user (mouse/keyboard controls).
    function ShowUserGuide() { bind.ShowUserGuide(); }
    exports.ShowUserGuide = ShowUserGuide;
    // IMGUI_API const char*   GetVersion();
    function GetVersion() { return bind.GetVersion(); }
    exports.GetVersion = GetVersion;
    // Styles
    // IMGUI_API void          StyleColorsClassic(ImGuiStyle* dst = NULL);
    function StyleColorsClassic(dst = null) {
        if (dst === null) {
            bind.StyleColorsClassic(null);
        }
        else if (dst.internal instanceof bind.ImGuiStyle) {
            bind.StyleColorsClassic(dst.internal);
        }
        else {
            const native = new bind.ImGuiStyle();
            const wrap = new ImGuiStyle(native);
            wrap.Copy(dst);
            bind.StyleColorsClassic(native);
            dst.Copy(wrap);
            native.delete();
        }
    }
    exports.StyleColorsClassic = StyleColorsClassic;
    // IMGUI_API void          StyleColorsDark(ImGuiStyle* dst = NULL);
    function StyleColorsDark(dst = null) {
        if (dst === null) {
            bind.StyleColorsDark(null);
        }
        else if (dst.internal instanceof bind.ImGuiStyle) {
            bind.StyleColorsDark(dst.internal);
        }
        else {
            const native = new bind.ImGuiStyle();
            const wrap = new ImGuiStyle(native);
            wrap.Copy(dst);
            bind.StyleColorsDark(native);
            dst.Copy(wrap);
            native.delete();
        }
    }
    exports.StyleColorsDark = StyleColorsDark;
    // IMGUI_API void          StyleColorsLight(ImGuiStyle* dst = NULL);
    function StyleColorsLight(dst = null) {
        if (dst === null) {
            bind.StyleColorsLight(null);
        }
        else if (dst.internal instanceof bind.ImGuiStyle) {
            bind.StyleColorsLight(dst.internal);
        }
        else {
            const native = new bind.ImGuiStyle();
            const wrap = new ImGuiStyle(native);
            wrap.Copy(dst);
            bind.StyleColorsLight(native);
            dst.Copy(wrap);
            native.delete();
        }
    }
    exports.StyleColorsLight = StyleColorsLight;
    // Window
    // IMGUI_API bool          Begin(const char* name, bool* p_open = NULL, ImGuiWindowFlags flags = 0);                                                   // push window to the stack and start appending to it. see .cpp for details. return false when window is collapsed, so you can early out in your code. 'bool* p_open' creates a widget on the upper-right to close the window (which sets your bool to false).
    function Begin(name, open = null, flags = 0) {
        if (open === null) {
            return bind.Begin(name, null, flags);
        }
        else if (Array.isArray(open)) {
            return bind.Begin(name, open, flags);
        }
        else {
            const ref_open = [open()];
            const opened = bind.Begin(name, ref_open, flags);
            open(ref_open[0]);
            return opened;
        }
    }
    exports.Begin = Begin;
    // IMGUI_API void          End();                                                                                                                      // finish appending to current window, pop it off the window stack.
    function End() { bind.End(); }
    exports.End = End;
    // IMGUI_API bool          BeginChild(const char* str_id, const ImVec2& size = ImVec2(0,0), bool border = false, ImGuiWindowFlags extra_flags = 0);    // begin a scrolling region. size==0.0f: use remaining window size, size<0.0f: use remaining window size minus abs(size). size>0.0f: fixed size. each axis can use a different mode, e.g. ImVec2(0,400).
    // IMGUI_API bool          BeginChild(ImGuiID id, const ImVec2& size = ImVec2(0,0), bool border = false, ImGuiWindowFlags extra_flags = 0);            // "
    function BeginChild(id, size = ImVec2.ZERO, border = false, extra_flags = 0) {
        return bind.BeginChild(id, size, border, extra_flags);
    }
    exports.BeginChild = BeginChild;
    // IMGUI_API void          EndChild();
    function EndChild() { bind.EndChild(); }
    exports.EndChild = EndChild;
    // IMGUI_API ImVec2        GetContentRegionMax();                                              // current content boundaries (typically window boundaries including scrolling, or current column boundaries), in windows coordinates
    function GetContentRegionMax(out = new ImVec2()) {
        return bind.GetContentRegionMax(out);
    }
    exports.GetContentRegionMax = GetContentRegionMax;
    // IMGUI_API ImVec2        GetContentRegionAvail();                                            // == GetContentRegionMax() - GetCursorPos()
    function GetContentRegionAvail(out = new ImVec2()) {
        return bind.GetContentRegionAvail(out);
    }
    exports.GetContentRegionAvail = GetContentRegionAvail;
    // IMGUI_API ImVec2        GetWindowContentRegionMin();                                        // content boundaries min (roughly (0,0)-Scroll), in window coordinates
    function GetWindowContentRegionMin(out = new ImVec2()) {
        return bind.GetWindowContentRegionMin(out);
    }
    exports.GetWindowContentRegionMin = GetWindowContentRegionMin;
    // IMGUI_API ImVec2        GetWindowContentRegionMax();                                        // content boundaries max (roughly (0,0)+Size-Scroll) where Size can be override with SetNextWindowContentSize(), in window coordinates
    function GetWindowContentRegionMax(out = new ImVec2()) {
        return bind.GetWindowContentRegionMax(out);
    }
    exports.GetWindowContentRegionMax = GetWindowContentRegionMax;
    // IMGUI_API float         GetWindowContentRegionWidth();                                      //
    function GetWindowContentRegionWidth() { return bind.GetWindowContentRegionWidth(); }
    exports.GetWindowContentRegionWidth = GetWindowContentRegionWidth;
    // IMGUI_API ImDrawList*   GetWindowDrawList();                                                // get rendering command-list if you want to append your own draw primitives
    function GetWindowDrawList() {
        return new ImDrawList(bind.GetWindowDrawList());
    }
    exports.GetWindowDrawList = GetWindowDrawList;
    // IMGUI_API ImVec2        GetWindowPos();                                                     // get current window position in screen space (useful if you want to do your own drawing via the DrawList api)
    function GetWindowPos(out = new ImVec2()) {
        return bind.GetWindowPos(out);
    }
    exports.GetWindowPos = GetWindowPos;
    // IMGUI_API ImVec2        GetWindowSize();                                                    // get current window size
    function GetWindowSize(out = new ImVec2()) {
        return bind.GetWindowSize(out);
    }
    exports.GetWindowSize = GetWindowSize;
    // IMGUI_API float         GetWindowWidth();
    function GetWindowWidth() { return bind.GetWindowWidth(); }
    exports.GetWindowWidth = GetWindowWidth;
    // IMGUI_API float         GetWindowHeight();
    function GetWindowHeight() { return bind.GetWindowHeight(); }
    exports.GetWindowHeight = GetWindowHeight;
    // IMGUI_API bool          IsWindowCollapsed();
    function IsWindowCollapsed() { return bind.IsWindowCollapsed(); }
    exports.IsWindowCollapsed = IsWindowCollapsed;
    // IMGUI_API bool          IsWindowAppearing();
    function IsWindowAppearing() { return bind.IsWindowAppearing(); }
    exports.IsWindowAppearing = IsWindowAppearing;
    // IMGUI_API void          SetWindowFontScale(float scale);                                    // per-window font scale. Adjust IO.FontGlobalScale if you want to scale all windows
    function SetWindowFontScale(scale) { bind.SetWindowFontScale(scale); }
    exports.SetWindowFontScale = SetWindowFontScale;
    // IMGUI_API void          SetNextWindowPos(const ImVec2& pos, ImGuiCond cond = 0, const ImVec2& pivot = ImVec2(0,0)); // set next window position. call before Begin(). use pivot=(0.5f,0.5f) to center on given point, etc.
    function SetNextWindowPos(pos, cond = 0, pivot = ImVec2.ZERO) {
        bind.SetNextWindowPos(pos, cond, pivot);
    }
    exports.SetNextWindowPos = SetNextWindowPos;
    // IMGUI_API void          SetNextWindowSize(const ImVec2& size, ImGuiCond cond = 0);          // set next window size. set axis to 0.0f to force an auto-fit on this axis. call before Begin()
    function SetNextWindowSize(pos, cond = 0) {
        bind.SetNextWindowSize(pos, cond);
    }
    exports.SetNextWindowSize = SetNextWindowSize;
    // IMGUI_API void          SetNextWindowSizeConstraints(const ImVec2& size_min, const ImVec2& size_max, ImGuiSizeConstraintCallback custom_callback = NULL, void* custom_callback_data = NULL); // set next window size limits. use -1,-1 on either X/Y axis to preserve the current size. Use callback to apply non-trivial programmatic constraints.
    function SetNextWindowSizeConstraints(size_min, size_max, custom_callback = null, custom_callback_data = null) {
        if (custom_callback) {
            bind.SetNextWindowSizeConstraints(size_min, size_max, (data) => {
                custom_callback(new ImGuiSizeCallbackData(data, custom_callback_data));
            }, null);
        }
        else {
            bind.SetNextWindowSizeConstraints(size_min, size_max, null, null);
        }
    }
    exports.SetNextWindowSizeConstraints = SetNextWindowSizeConstraints;
    // IMGUI_API void          SetNextWindowContentSize(const ImVec2& size);                       // set next window content size (~ enforce the range of scrollbars). not including window decorations (title bar, menu bar, etc.). set an axis to 0.0f to leave it automatic. call before Begin()
    function SetNextWindowContentSize(size) {
        bind.SetNextWindowContentSize(size);
    }
    exports.SetNextWindowContentSize = SetNextWindowContentSize;
    // IMGUI_API void          SetNextWindowCollapsed(bool collapsed, ImGuiCond cond = 0);         // set next window collapsed state. call before Begin()
    function SetNextWindowCollapsed(collapsed, cond = 0) {
        bind.SetNextWindowCollapsed(collapsed, cond);
    }
    exports.SetNextWindowCollapsed = SetNextWindowCollapsed;
    // IMGUI_API void          SetNextWindowFocus();                                               // set next window to be focused / front-most. call before Begin()
    function SetNextWindowFocus() { bind.SetNextWindowFocus(); }
    exports.SetNextWindowFocus = SetNextWindowFocus;
    // IMGUI_API void          SetNextWindowBgAlpha(float alpha);                                  // set next window background color alpha. helper to easily modify ImGuiCol_WindowBg/ChildBg/PopupBg.
    function SetNextWindowBgAlpha(alpha) { bind.SetNextWindowBgAlpha(alpha); }
    exports.SetNextWindowBgAlpha = SetNextWindowBgAlpha;
    // IMGUI_API void          SetWindowPos(const ImVec2& pos, ImGuiCond cond = 0);                // (not recommended) set current window position - call within Begin()/End(). prefer using SetNextWindowPos(), as this may incur tearing and side-effects.
    // IMGUI_API void          SetWindowSize(const ImVec2& size, ImGuiCond cond = 0);              // (not recommended) set current window size - call within Begin()/End(). set to ImVec2(0,0) to force an auto-fit. prefer using SetNextWindowSize(), as this may incur tearing and minor side-effects.
    // IMGUI_API void          SetWindowCollapsed(bool collapsed, ImGuiCond cond = 0);             // (not recommended) set current window collapsed state. prefer using SetNextWindowCollapsed().
    // IMGUI_API void          SetWindowFocus();                                                   // (not recommended) set current window to be focused / front-most. prefer using SetNextWindowFocus().
    // IMGUI_API void          SetWindowPos(const char* name, const ImVec2& pos, ImGuiCond cond = 0);      // set named window position.
    // IMGUI_API void          SetWindowSize(const char* name, const ImVec2& size, ImGuiCond cond = 0);    // set named window size. set axis to 0.0f to force an auto-fit on this axis.
    // IMGUI_API void          SetWindowCollapsed(const char* name, bool collapsed, ImGuiCond cond = 0);   // set named window collapsed state
    // IMGUI_API void          SetWindowFocus(const char* name);                                           // set named window to be focused / front-most. use NULL to remove focus.
    function SetWindowPos(name_or_pos, pos_or_cond = 0, cond = 0) {
        if (typeof (name_or_pos) === "string") {
            bind.SetWindowNamePos(name_or_pos, pos_or_cond, cond);
            return;
        }
        else {
            bind.SetWindowPos(name_or_pos, pos_or_cond);
        }
    }
    exports.SetWindowPos = SetWindowPos;
    function SetWindowSize(name_or_size, size_or_cond = 0, cond = 0) {
        if (typeof (name_or_size) === "string") {
            bind.SetWindowNamePos(name_or_size, size_or_cond, cond);
        }
        else {
            bind.SetWindowSize(name_or_size, size_or_cond);
        }
    }
    exports.SetWindowSize = SetWindowSize;
    function SetWindowCollapsed(name_or_collapsed, collapsed_or_cond = 0, cond = 0) {
        if (typeof (name_or_collapsed) === "string") {
            bind.SetWindowNameCollapsed(name_or_collapsed, collapsed_or_cond, cond);
        }
        else {
            bind.SetWindowCollapsed(name_or_collapsed, collapsed_or_cond);
        }
    }
    exports.SetWindowCollapsed = SetWindowCollapsed;
    function SetWindowFocus(name) {
        if (typeof (name) === "string") {
            bind.SetWindowNameFocus(name);
        }
        else {
            bind.SetWindowFocus();
        }
    }
    exports.SetWindowFocus = SetWindowFocus;
    // IMGUI_API float         GetScrollX();                                                       // get scrolling amount [0..GetScrollMaxX()]
    function GetScrollX() { return bind.GetScrollX(); }
    exports.GetScrollX = GetScrollX;
    // IMGUI_API float         GetScrollY();                                                       // get scrolling amount [0..GetScrollMaxY()]
    function GetScrollY() { return bind.GetScrollY(); }
    exports.GetScrollY = GetScrollY;
    // IMGUI_API float         GetScrollMaxX();                                                    // get maximum scrolling amount ~~ ContentSize.X - WindowSize.X
    function GetScrollMaxX() { return bind.GetScrollMaxX(); }
    exports.GetScrollMaxX = GetScrollMaxX;
    // IMGUI_API float         GetScrollMaxY();                                                    // get maximum scrolling amount ~~ ContentSize.Y - WindowSize.Y
    function GetScrollMaxY() { return bind.GetScrollMaxY(); }
    exports.GetScrollMaxY = GetScrollMaxY;
    // IMGUI_API void          SetScrollX(float scroll_x);                                         // set scrolling amount [0..GetScrollMaxX()]
    function SetScrollX(scroll_x) { bind.SetScrollX(scroll_x); }
    exports.SetScrollX = SetScrollX;
    // IMGUI_API void          SetScrollY(float scroll_y);                                         // set scrolling amount [0..GetScrollMaxY()]
    function SetScrollY(scroll_y) { bind.SetScrollY(scroll_y); }
    exports.SetScrollY = SetScrollY;
    // IMGUI_API void          SetScrollHereY(float center_y_ratio = 0.5f);                         // adjust scrolling amount to make current cursor position visible. center_y_ratio=0.0: top, 0.5: center, 1.0: bottom. When using to make a "default/current item" visible, consider using SetItemDefaultFocus() instead.
    function SetScrollHereY(center_y_ratio = 0.5) {
        bind.SetScrollHereY(center_y_ratio);
    }
    exports.SetScrollHereY = SetScrollHereY;
    // IMGUI_API void          SetScrollFromPosY(float pos_y, float center_y_ratio = 0.5f);        // adjust scrolling amount to make given position valid. use GetCursorPos() or GetCursorStartPos()+offset to get valid positions.
    function SetScrollFromPosY(pos_y, center_y_ratio = 0.5) {
        bind.SetScrollFromPosY(pos_y, center_y_ratio);
    }
    exports.SetScrollFromPosY = SetScrollFromPosY;
    // IMGUI_API void          SetStateStorage(ImGuiStorage* tree);                                // replace tree state storage with our own (if you want to manipulate it yourself, typically clear subsection of it)
    // IMGUI_API ImGuiStorage* GetStateStorage();
    // Parameters stacks (shared)
    // IMGUI_API void          PushFont(ImFont* font);                                             // use NULL as a shortcut to push default font
    function PushFont(font) { bind.PushFont(font ? font.native : null); }
    exports.PushFont = PushFont;
    // IMGUI_API void          PopFont();
    function PopFont() { bind.PopFont(); }
    exports.PopFont = PopFont;
    // IMGUI_API void          PushStyleColor(ImGuiCol idx, ImU32 col);
    // IMGUI_API void          PushStyleColor(ImGuiCol idx, const ImVec4& col);
    function PushStyleColor(idx, col) {
        if (col instanceof ImColor) {
            bind.PushStyleColor(idx, col.Value);
        }
        else {
            bind.PushStyleColor(idx, col);
        }
    }
    exports.PushStyleColor = PushStyleColor;
    // IMGUI_API void          PopStyleColor(int count = 1);
    function PopStyleColor(count = 1) {
        bind.PopStyleColor(count);
    }
    exports.PopStyleColor = PopStyleColor;
    // IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, float val);
    // IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, const ImVec2& val);
    function PushStyleVar(idx, val) {
        bind.PushStyleVar(idx, val);
    }
    exports.PushStyleVar = PushStyleVar;
    // IMGUI_API void          PopStyleVar(int count = 1);
    function PopStyleVar(count = 1) {
        bind.PopStyleVar(count);
    }
    exports.PopStyleVar = PopStyleVar;
    // IMGUI_API const ImVec4& GetStyleColorVec4(ImGuiCol idx);                                    // retrieve style color as stored in ImGuiStyle structure. use to feed back into PushStyleColor(), otherwhise use GetColorU32() to get style color + style alpha.
    function GetStyleColorVec4(idx) {
        return bind.GetStyleColorVec4(idx);
    }
    exports.GetStyleColorVec4 = GetStyleColorVec4;
    // IMGUI_API ImFont*       GetFont();                                                          // get current font
    function GetFont() {
        return new ImFont(bind.GetFont());
    }
    exports.GetFont = GetFont;
    // IMGUI_API float         GetFontSize();                                                      // get current font size (= height in pixels) of current font with current scale applied
    function GetFontSize() { return bind.GetFontSize(); }
    exports.GetFontSize = GetFontSize;
    // IMGUI_API ImVec2        GetFontTexUvWhitePixel();                                           // get UV coordinate for a while pixel, useful to draw custom shapes via the ImDrawList API
    function GetFontTexUvWhitePixel(out = new ImVec2()) {
        return bind.GetFontTexUvWhitePixel(out);
    }
    exports.GetFontTexUvWhitePixel = GetFontTexUvWhitePixel;
    function GetColorU32(...args) {
        if (args.length === 1) {
            if (typeof (args[0]) === "number") {
                // TODO: ImGuiCol or ImU32
                const idx = args[0];
                return bind.GetColorU32_A(idx, 1.0);
            }
            else {
                const col = args[0];
                return bind.GetColorU32_B(col);
            }
        }
        else {
            const idx = args[0];
            const alpha_mul = args[1];
            return bind.GetColorU32_A(idx, alpha_mul);
        }
    }
    exports.GetColorU32 = GetColorU32;
    // Parameters stacks (current window)
    // IMGUI_API void          PushItemWidth(float item_width);                                    // width of items for the common item+label case, pixels. 0.0f = default to ~2/3 of windows width, >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -1.0f always align width to the right side)
    function PushItemWidth(item_width) { bind.PushItemWidth(item_width); }
    exports.PushItemWidth = PushItemWidth;
    // IMGUI_API void          PopItemWidth();
    function PopItemWidth() { bind.PopItemWidth(); }
    exports.PopItemWidth = PopItemWidth;
    // IMGUI_API float         CalcItemWidth();                                                    // width of item given pushed settings and current cursor position
    function SetNextItemWidth(item_width) { bind.SetNextItemWidth(item_width); } // set width of the _next_ common large "item+label" widget. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -1.0f always align width to the right side)
    exports.SetNextItemWidth = SetNextItemWidth;
    function CalcItemWidth() { return bind.CalcItemWidth(); }
    exports.CalcItemWidth = CalcItemWidth;
    // IMGUI_API void          PushTextWrapPos(float wrap_pos_x = 0.0f);                           // word-wrapping for Text*() commands. < 0.0f: no wrapping; 0.0f: wrap to end of window (or column); > 0.0f: wrap at 'wrap_pos_x' position in window local space
    function PushTextWrapPos(wrap_pos_x = 0.0) {
        bind.PushTextWrapPos(wrap_pos_x);
    }
    exports.PushTextWrapPos = PushTextWrapPos;
    // IMGUI_API void          PopTextWrapPos();
    function PopTextWrapPos() { bind.PopTextWrapPos(); }
    exports.PopTextWrapPos = PopTextWrapPos;
    // IMGUI_API void          PushAllowKeyboardFocus(bool allow_keyboard_focus);                  // allow focusing using TAB/Shift-TAB, enabled by default but you can disable it for certain widgets
    function PushAllowKeyboardFocus(allow_keyboard_focus) { bind.PushAllowKeyboardFocus(allow_keyboard_focus); }
    exports.PushAllowKeyboardFocus = PushAllowKeyboardFocus;
    // IMGUI_API void          PopAllowKeyboardFocus();
    function PopAllowKeyboardFocus() { bind.PopAllowKeyboardFocus(); }
    exports.PopAllowKeyboardFocus = PopAllowKeyboardFocus;
    // IMGUI_API void          PushButtonRepeat(bool repeat);                                      // in 'repeat' mode, Button*() functions return repeated true in a typematic manner (using io.KeyRepeatDelay/io.KeyRepeatRate setting). Note that you can call IsItemActive() after any Button() to tell if the button is held in the current frame.
    function PushButtonRepeat(repeat) { bind.PushButtonRepeat(repeat); }
    exports.PushButtonRepeat = PushButtonRepeat;
    // IMGUI_API void          PopButtonRepeat();
    function PopButtonRepeat() { bind.PopButtonRepeat(); }
    exports.PopButtonRepeat = PopButtonRepeat;
    // Cursor / Layout
    // IMGUI_API void          Separator();                                                        // separator, generally horizontal. inside a menu bar or in horizontal layout mode, this becomes a vertical separator.
    function Separator() { bind.Separator(); }
    exports.Separator = Separator;
    // IMGUI_API void          SameLine(float pos_x = 0.0f, float spacing_w = -1.0f);              // call between widgets or groups to layout them horizontally
    function SameLine(pos_x = 0.0, spacing_w = -1.0) {
        bind.SameLine(pos_x, spacing_w);
    }
    exports.SameLine = SameLine;
    // IMGUI_API void          NewLine();                                                          // undo a SameLine()
    function NewLine() { bind.NewLine(); }
    exports.NewLine = NewLine;
    // IMGUI_API void          Spacing();                                                          // add vertical spacing
    function Spacing() { bind.Spacing(); }
    exports.Spacing = Spacing;
    // IMGUI_API void          Dummy(const ImVec2& size);                                          // add a dummy item of given size
    function Dummy(size) { bind.Dummy(size); }
    exports.Dummy = Dummy;
    // IMGUI_API void          Indent(float indent_w = 0.0f);                                      // move content position toward the right, by style.IndentSpacing or indent_w if != 0
    function Indent(indent_w = 0.0) { bind.Indent(indent_w); }
    exports.Indent = Indent;
    // IMGUI_API void          Unindent(float indent_w = 0.0f);                                    // move content position back to the left, by style.IndentSpacing or indent_w if != 0
    function Unindent(indent_w = 0.0) { bind.Unindent(indent_w); }
    exports.Unindent = Unindent;
    // IMGUI_API void          BeginGroup();                                                       // lock horizontal starting position + capture group bounding box into one "item" (so you can use IsItemHovered() or layout primitives such as SameLine() on whole group, etc.)
    function BeginGroup() { bind.BeginGroup(); }
    exports.BeginGroup = BeginGroup;
    // IMGUI_API void          EndGroup();
    function EndGroup() { bind.EndGroup(); }
    exports.EndGroup = EndGroup;
    // IMGUI_API ImVec2        GetCursorPos();                                                     // cursor position is relative to window position
    function GetCursorPos(out = new ImVec2()) { return bind.GetCursorPos(out); }
    exports.GetCursorPos = GetCursorPos;
    // IMGUI_API float         GetCursorPosX();                                                    // "
    function GetCursorPosX() { return bind.GetCursorPosX(); }
    exports.GetCursorPosX = GetCursorPosX;
    // IMGUI_API float         GetCursorPosY();                                                    // "
    function GetCursorPosY() { return bind.GetCursorPosY(); }
    exports.GetCursorPosY = GetCursorPosY;
    // IMGUI_API void          SetCursorPos(const ImVec2& local_pos);                              // "
    function SetCursorPos(local_pos) { bind.SetCursorPos(local_pos); }
    exports.SetCursorPos = SetCursorPos;
    // IMGUI_API void          SetCursorPosX(float x);                                             // "
    function SetCursorPosX(x) { bind.SetCursorPosX(x); }
    exports.SetCursorPosX = SetCursorPosX;
    // IMGUI_API void          SetCursorPosY(float y);                                             // "
    function SetCursorPosY(y) { bind.SetCursorPosY(y); }
    exports.SetCursorPosY = SetCursorPosY;
    // IMGUI_API ImVec2        GetCursorStartPos();                                                // initial cursor position
    function GetCursorStartPos(out = new ImVec2()) { return bind.GetCursorStartPos(out); }
    exports.GetCursorStartPos = GetCursorStartPos;
    // IMGUI_API ImVec2        GetCursorScreenPos();                                               // cursor position in absolute screen coordinates [0..io.DisplaySize] (useful to work with ImDrawList API)
    function GetCursorScreenPos(out = new ImVec2()) { return bind.GetCursorScreenPos(out); }
    exports.GetCursorScreenPos = GetCursorScreenPos;
    // IMGUI_API void          SetCursorScreenPos(const ImVec2& pos);                              // cursor position in absolute screen coordinates [0..io.DisplaySize]
    function SetCursorScreenPos(pos) { bind.SetCursorScreenPos(pos); }
    exports.SetCursorScreenPos = SetCursorScreenPos;
    // IMGUI_API void          AlignTextToFramePadding();                                          // vertically align/lower upcoming text to FramePadding.y so that it will aligns to upcoming widgets (call if you have text on a line before regular widgets)
    function AlignTextToFramePadding() { bind.AlignTextToFramePadding(); }
    exports.AlignTextToFramePadding = AlignTextToFramePadding;
    // IMGUI_API float         GetTextLineHeight();                                                // ~ FontSize
    function GetTextLineHeight() { return bind.GetTextLineHeight(); }
    exports.GetTextLineHeight = GetTextLineHeight;
    // IMGUI_API float         GetTextLineHeightWithSpacing();                                     // ~ FontSize + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of text)
    function GetTextLineHeightWithSpacing() { return bind.GetTextLineHeightWithSpacing(); }
    exports.GetTextLineHeightWithSpacing = GetTextLineHeightWithSpacing;
    // IMGUI_API float         GetFrameHeight();                                                   // ~ FontSize + style.FramePadding.y * 2
    function GetFrameHeight() { return bind.GetFrameHeight(); }
    exports.GetFrameHeight = GetFrameHeight;
    // IMGUI_API float         GetFrameHeightWithSpacing();                                        // ~ FontSize + style.FramePadding.y * 2 + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of framed widgets)
    function GetFrameHeightWithSpacing() { return bind.GetFrameHeightWithSpacing(); }
    exports.GetFrameHeightWithSpacing = GetFrameHeightWithSpacing;
    // Columns
    // You can also use SameLine(pos_x) for simplified columns. The columns API is still work-in-progress and rather lacking.
    // IMGUI_API void          Columns(int count = 1, const char* id = NULL, bool border = true);
    function Columns(count = 1, id = null, border = true) {
        id = id || "";
        bind.Columns(count, id, border);
    }
    exports.Columns = Columns;
    // IMGUI_API void          NextColumn();                                                       // next column, defaults to current row or next row if the current row is finished
    function NextColumn() { bind.NextColumn(); }
    exports.NextColumn = NextColumn;
    // IMGUI_API int           GetColumnIndex();                                                   // get current column index
    function GetColumnIndex() { return bind.GetColumnIndex(); }
    exports.GetColumnIndex = GetColumnIndex;
    // IMGUI_API float         GetColumnWidth(int column_index = -1);                              // get column width (in pixels). pass -1 to use current column
    function GetColumnWidth(column_index = -1) {
        return bind.GetColumnWidth(column_index);
    }
    exports.GetColumnWidth = GetColumnWidth;
    // IMGUI_API void          SetColumnWidth(int column_index, float width);                      // set column width (in pixels). pass -1 to use current column
    function SetColumnWidth(column_index, width) { bind.SetColumnWidth(column_index, width); }
    exports.SetColumnWidth = SetColumnWidth;
    // IMGUI_API float         GetColumnOffset(int column_index = -1);                             // get position of column line (in pixels, from the left side of the contents region). pass -1 to use current column, otherwise 0..GetColumnsCount() inclusive. column 0 is typically 0.0f
    function GetColumnOffset(column_index = -1) {
        return bind.GetColumnOffset(column_index);
    }
    exports.GetColumnOffset = GetColumnOffset;
    // IMGUI_API void          SetColumnOffset(int column_index, float offset_x);                  // set position of column line (in pixels, from the left side of the contents region). pass -1 to use current column
    function SetColumnOffset(column_index, offset_x) { bind.SetColumnOffset(column_index, offset_x); }
    exports.SetColumnOffset = SetColumnOffset;
    // IMGUI_API int           GetColumnsCount();
    function GetColumnsCount() { return bind.GetColumnsCount(); }
    exports.GetColumnsCount = GetColumnsCount;
    // ID scopes
    // If you are creating widgets in a loop you most likely want to push a unique identifier (e.g. object pointer, loop index) so ImGui can differentiate them.
    // You can also use the "##foobar" syntax within widget label to distinguish them from each others. Read "A primer on the use of labels/IDs" in the FAQ for more details.
    // IMGUI_API void          PushID(const char* str_id);                                         // push identifier into the ID stack. IDs are hash of the entire stack!
    // IMGUI_API void          PushID(const char* str_id_begin, const char* str_id_end);
    // IMGUI_API void          PushID(const void* ptr_id);
    // IMGUI_API void          PushID(int int_id);
    function PushID(id) { bind.PushID(id); }
    exports.PushID = PushID;
    // IMGUI_API void          PopID();
    function PopID() { bind.PopID(); }
    exports.PopID = PopID;
    // IMGUI_API ImGuiID       GetID(const char* str_id);                                          // calculate unique ID (hash of whole ID stack + given parameter). e.g. if you want to query into ImGuiStorage yourself
    // IMGUI_API ImGuiID       GetID(const char* str_id_begin, const char* str_id_end);
    // IMGUI_API ImGuiID       GetID(const void* ptr_id);
    function GetID(id) { return bind.GetID(id); }
    exports.GetID = GetID;
    // Widgets: Text
    // IMGUI_API void          TextUnformatted(const char* text, const char* text_end = NULL);               // raw text without formatting. Roughly equivalent to Text("%s", text) but: A) doesn't require null terminated string if 'text_end' is specified, B) it's faster, no memory copy is done, no buffer size limits, recommended for long chunks of text.
    function TextUnformatted(text, text_end = null) { bind.TextUnformatted(text_end !== null ? text.substring(0, text_end) : text); }
    exports.TextUnformatted = TextUnformatted;
    // IMGUI_API void          Text(const char* fmt, ...)                                     IM_FMTARGS(1); // simple formatted text
    // IMGUI_API void          TextV(const char* fmt, va_list args)                           IM_FMTLIST(1);
    function Text(fmt /*, ...args: any[]*/) { bind.Text(fmt /*, ...args*/); }
    exports.Text = Text;
    // IMGUI_API void          TextColored(const ImVec4& col, const char* fmt, ...)           IM_FMTARGS(2); // shortcut for PushStyleColor(ImGuiCol_Text, col); Text(fmt, ...); PopStyleColor();
    // IMGUI_API void          TextColoredV(const ImVec4& col, const char* fmt, va_list args) IM_FMTLIST(2);
    function TextColored(col, fmt /*, ...args: any[]*/) {
        bind.TextColored((col instanceof ImColor) ? col.Value : col, fmt /*, ...args*/);
    }
    exports.TextColored = TextColored;
    // IMGUI_API void          TextDisabled(const char* fmt, ...)                             IM_FMTARGS(1); // shortcut for PushStyleColor(ImGuiCol_Text, style.Colors[ImGuiCol_TextDisabled]); Text(fmt, ...); PopStyleColor();
    // IMGUI_API void          TextDisabledV(const char* fmt, va_list args)                   IM_FMTLIST(1);
    function TextDisabled(fmt /*, ...args: any[]*/) { bind.TextDisabled(fmt /*, ...args*/); }
    exports.TextDisabled = TextDisabled;
    // IMGUI_API void          TextWrapped(const char* fmt, ...)                              IM_FMTARGS(1); // shortcut for PushTextWrapPos(0.0f); Text(fmt, ...); PopTextWrapPos();. Note that this won't work on an auto-resizing window if there's no other widgets to extend the window width, yoy may need to set a size using SetNextWindowSize().
    // IMGUI_API void          TextWrappedV(const char* fmt, va_list args)                    IM_FMTLIST(1);
    function TextWrapped(fmt /*, ...args: any[]*/) { bind.TextWrapped(fmt /*, ...args*/); }
    exports.TextWrapped = TextWrapped;
    // IMGUI_API void          LabelText(const char* label, const char* fmt, ...)             IM_FMTARGS(2); // display text+label aligned the same way as value+label widgets
    // IMGUI_API void          LabelTextV(const char* label, const char* fmt, va_list args)   IM_FMTLIST(2);
    function LabelText(label, fmt /*, ...args: any[]*/) { bind.LabelText(label, fmt /*, ...args*/); }
    exports.LabelText = LabelText;
    // IMGUI_API void          BulletText(const char* fmt, ...)                               IM_FMTARGS(1); // shortcut for Bullet()+Text()
    // IMGUI_API void          BulletTextV(const char* fmt, va_list args)                     IM_FMTLIST(1);
    function BulletText(fmt /*, ...args: any[]*/) { bind.BulletText(fmt /*, ...args*/); }
    exports.BulletText = BulletText;
    // IMGUI_API void          Bullet();                                                                     // draw a small circle and keep the cursor on the same line. advance cursor x position by GetTreeNodeToLabelSpacing(), same distance that TreeNode() uses
    function Bullet() { bind.Bullet(); }
    exports.Bullet = Bullet;
    // Widgets: Main
    // IMGUI_API bool          Button(const char* label, const ImVec2& size = ImVec2(0,0));            // button
    function Button(label, size = ImVec2.ZERO) {
        return bind.Button(label, size);
    }
    exports.Button = Button;
    // IMGUI_API bool          SmallButton(const char* label);                                         // button with FramePadding=(0,0) to easily embed within text
    function SmallButton(label) { return bind.SmallButton(label); }
    exports.SmallButton = SmallButton;
    // IMGUI_API bool          ArrowButton(const char* str_id, ImGuiDir dir);                  // square button with an arrow shape
    function ArrowButton(str_id, dir) { return bind.ArrowButton(str_id, dir); }
    exports.ArrowButton = ArrowButton;
    // IMGUI_API bool          InvisibleButton(const char* str_id, const ImVec2& size);                // button behavior without the visuals, useful to build custom behaviors using the public api (along with IsItemActive, IsItemHovered, etc.)
    function InvisibleButton(str_id, size) {
        return bind.InvisibleButton(str_id, size);
    }
    exports.InvisibleButton = InvisibleButton;
    // IMGUI_API void          Image(ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0,0), const ImVec2& uv1 = ImVec2(1,1), const ImVec4& tint_col = ImVec4(1,1,1,1), const ImVec4& border_col = ImVec4(0,0,0,0));
    function Image(user_texture_id, size, uv0 = ImVec2.ZERO, uv1 = ImVec2.UNIT, tint_col = ImVec4.WHITE, border_col = ImVec4.ZERO) {
        bind.Image(ImGuiContext.setTexture(user_texture_id), size, uv0, uv1, tint_col, border_col);
    }
    exports.Image = Image;
    // IMGUI_API bool          ImageButton(ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0,0),  const ImVec2& uv1 = ImVec2(1,1), int frame_padding = -1, const ImVec4& bg_col = ImVec4(0,0,0,0), const ImVec4& tint_col = ImVec4(1,1,1,1));    // <0 frame_padding uses default frame padding settings. 0 for no padding
    function ImageButton(user_texture_id, size, uv0 = ImVec2.ZERO, uv1 = ImVec2.UNIT, frame_padding = -1, bg_col = ImVec4.ZERO, tint_col = ImVec4.WHITE) {
        return bind.ImageButton(ImGuiContext.setTexture(user_texture_id), size, uv0, uv1, frame_padding, bg_col, tint_col);
    }
    exports.ImageButton = ImageButton;
    // IMGUI_API bool          Checkbox(const char* label, bool* v);
    function Checkbox(label, v) {
        if (Array.isArray(v)) {
            return bind.Checkbox(label, v);
        }
        else {
            const ref_v = [v()];
            const ret = bind.Checkbox(label, ref_v);
            v(ref_v[0]);
            return ret;
        }
    }
    exports.Checkbox = Checkbox;
    // IMGUI_API bool          CheckboxFlags(const char* label, unsigned int* flags, unsigned int flags_value);
    function CheckboxFlags(label, flags, flags_value) {
        if (Array.isArray(flags)) {
            return bind.CheckboxFlags(label, flags, flags_value);
        }
        else {
            const ref_flags = [flags()];
            const ret = bind.CheckboxFlags(label, ref_flags, flags_value);
            flags(ref_flags[0]);
            return ret;
        }
    }
    exports.CheckboxFlags = CheckboxFlags;
    function RadioButton(label, ...args) {
        if (typeof (args[0]) === "boolean") {
            const active = args[0];
            return bind.RadioButton_A(label, active);
        }
        else {
            const v = args[0];
            const v_button = args[1];
            const _v = Array.isArray(v) ? v : [v()];
            const ret = bind.RadioButton_B(label, _v, v_button);
            if (!Array.isArray(v)) {
                v(_v[0]);
            }
            return ret;
        }
    }
    exports.RadioButton = RadioButton;
    function PlotLines(label, ...args) {
        if (Array.isArray(args[0])) {
            const values = args[0];
            const values_getter = (data, idx) => values[idx * stride];
            const values_count = typeof (args[1]) === "number" ? args[1] : values.length;
            const values_offset = typeof (args[2]) === "number" ? args[2] : 0;
            const overlay_text = typeof (args[3]) === "string" ? args[3] : null;
            const scale_min = typeof (args[4]) === "number" ? args[4] : Number.MAX_VALUE;
            const scale_max = typeof (args[5]) === "number" ? args[5] : Number.MAX_VALUE;
            const graph_size = args[6] || ImVec2.ZERO;
            const stride = typeof (args[7]) === "number" ? args[7] : 1;
            bind.PlotLines(label, values_getter, null, values_count, values_offset, overlay_text, scale_min, scale_max, graph_size);
        }
        else {
            const values_getter = args[0];
            const data = args[1];
            const values_count = args[2];
            const values_offset = typeof (args[3]) === "number" ? args[3] : 0;
            const overlay_text = typeof (args[4]) === "string" ? args[4] : null;
            const scale_min = typeof (args[5]) === "number" ? args[5] : Number.MAX_VALUE;
            const scale_max = typeof (args[6]) === "number" ? args[6] : Number.MAX_VALUE;
            const graph_size = args[7] || ImVec2.ZERO;
            bind.PlotLines(label, values_getter, data, values_count, values_offset, overlay_text, scale_min, scale_max, graph_size);
        }
    }
    exports.PlotLines = PlotLines;
    function PlotHistogram(label, ...args) {
        if (Array.isArray(args[0])) {
            const values = args[0];
            const values_getter = (data, idx) => values[idx * stride];
            const values_count = typeof (args[1]) === "number" ? args[1] : values.length;
            const values_offset = typeof (args[2]) === "number" ? args[2] : 0;
            const overlay_text = typeof (args[3]) === "string" ? args[3] : null;
            const scale_min = typeof (args[4]) === "number" ? args[4] : Number.MAX_VALUE;
            const scale_max = typeof (args[5]) === "number" ? args[5] : Number.MAX_VALUE;
            const graph_size = args[6] || ImVec2.ZERO;
            const stride = typeof (args[7]) === "number" ? args[7] : 1;
            bind.PlotHistogram(label, values_getter, null, values_count, values_offset, overlay_text, scale_min, scale_max, graph_size);
        }
        else {
            const values_getter = args[0];
            const data = args[1];
            const values_count = args[2];
            const values_offset = typeof (args[3]) === "number" ? args[3] : 0;
            const overlay_text = typeof (args[4]) === "string" ? args[4] : null;
            const scale_min = typeof (args[5]) === "number" ? args[5] : Number.MAX_VALUE;
            const scale_max = typeof (args[6]) === "number" ? args[6] : Number.MAX_VALUE;
            const graph_size = args[7] || ImVec2.ZERO;
            bind.PlotHistogram(label, values_getter, data, values_count, values_offset, overlay_text, scale_min, scale_max, graph_size);
        }
    }
    exports.PlotHistogram = PlotHistogram;
    // IMGUI_API void          ProgressBar(float fraction, const ImVec2& size_arg = ImVec2(-1,0), const char* overlay = NULL);
    function ProgressBar(fraction, size_arg = new ImVec2(-1, 0), overlay = null) {
        bind.ProgressBar(fraction, size_arg, overlay);
    }
    exports.ProgressBar = ProgressBar;
    // Widgets: Combo Box
    // The new BeginCombo()/EndCombo() api allows you to manage your contents and selection state however you want it.
    // The old Combo() api are helpers over BeginCombo()/EndCombo() which are kept available for convenience purpose.
    // IMGUI_API bool          BeginCombo(const char* label, const char* preview_value, ImGuiComboFlags flags = 0);
    function BeginCombo(label, preview_value = null, flags = 0) {
        return bind.BeginCombo(label, preview_value, flags);
    }
    exports.BeginCombo = BeginCombo;
    // IMGUI_API void          EndCombo();
    function EndCombo() { bind.EndCombo(); }
    exports.EndCombo = EndCombo;
    function Combo(label, current_item, ...args) {
        let ret = false;
        const _current_item = Array.isArray(current_item) ? current_item : [current_item()];
        if (Array.isArray(args[0])) {
            const items = args[0];
            const items_count = typeof (args[1]) === "number" ? args[1] : items.length;
            const popup_max_height_in_items = typeof (args[2]) === "number" ? args[2] : -1;
            const items_getter = (data, idx, out_text) => { out_text[0] = items[idx]; return true; };
            ret = bind.Combo(label, _current_item, items_getter, null, items_count, popup_max_height_in_items);
        }
        else if (typeof (args[0]) === "string") {
            const items_separated_by_zeros = args[0];
            const popup_max_height_in_items = typeof (args[1]) === "number" ? args[1] : -1;
            const items = items_separated_by_zeros.replace(/^\0+|\0+$/g, "").split("\0");
            const items_count = items.length;
            const items_getter = (data, idx, out_text) => { out_text[0] = items[idx]; return true; };
            ret = bind.Combo(label, _current_item, items_getter, null, items_count, popup_max_height_in_items);
        }
        else {
            const items_getter = args[0];
            const data = args[1];
            const items_count = args[2];
            const popup_max_height_in_items = typeof (args[3]) === "number" ? args[3] : -1;
            ret = bind.Combo(label, _current_item, items_getter, data, items_count, popup_max_height_in_items);
        }
        if (!Array.isArray(current_item)) {
            current_item(_current_item[0]);
        }
        return ret;
    }
    exports.Combo = Combo;
    // Widgets: Drags (tip: ctrl+click on a drag box to input with keyboard. manually input values aren't clamped, can go off-bounds)
    // For all the Float2/Float3/Float4/Int2/Int3/Int4 versions of every functions, note that a 'float v[X]' function argument is the same as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible. You can pass address of your first element out of a contiguous set, e.g. &myvector.x
    // IMGUI_API bool          DragFloat(const char* label, float* v, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);     // If v_min >= v_max we have no bound
    function DragFloat(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
        const _v = import_Scalar(v);
        const ret = bind.DragFloat(label, _v, v_speed, v_min, v_max, display_format, power);
        export_Scalar(_v, v);
        return ret;
    }
    exports.DragFloat = DragFloat;
    // IMGUI_API bool          DragFloat2(const char* label, float v[2], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
    function DragFloat2(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
        const _v = import_Vector2(v);
        const ret = bind.DragFloat2(label, _v, v_speed, v_min, v_max, display_format, power);
        export_Vector2(_v, v);
        return ret;
    }
    exports.DragFloat2 = DragFloat2;
    // IMGUI_API bool          DragFloat3(const char* label, float v[3], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
    function DragFloat3(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
        const _v = import_Vector3(v);
        const ret = bind.DragFloat3(label, _v, v_speed, v_min, v_max, display_format, power);
        export_Vector3(_v, v);
        return ret;
    }
    exports.DragFloat3 = DragFloat3;
    // IMGUI_API bool          DragFloat4(const char* label, float v[4], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
    function DragFloat4(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
        const _v = import_Vector4(v);
        const ret = bind.DragFloat4(label, _v, v_speed, v_min, v_max, display_format, power);
        export_Vector4(_v, v);
        return ret;
    }
    exports.DragFloat4 = DragFloat4;
    // IMGUI_API bool          DragFloatRange2(const char* label, float* v_current_min, float* v_current_max, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", const char* display_format_max = NULL, float power = 1.0f);
    function DragFloatRange2(label, v_current_min, v_current_max, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", display_format_max = null, power = 1.0) {
        const _v_current_min = import_Scalar(v_current_min);
        const _v_current_max = import_Scalar(v_current_max);
        const ret = bind.DragFloatRange2(label, _v_current_min, _v_current_max, v_speed, v_min, v_max, display_format, display_format_max, power);
        export_Scalar(_v_current_min, v_current_min);
        export_Scalar(_v_current_max, v_current_max);
        return ret;
    }
    exports.DragFloatRange2 = DragFloatRange2;
    // IMGUI_API bool          DragInt(const char* label, int* v, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* display_format = "%d");                                       // If v_min >= v_max we have no bound
    function DragInt(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
        const _v = import_Scalar(v);
        const ret = bind.DragInt(label, _v, v_speed, v_min, v_max, format);
        export_Scalar(_v, v);
        return ret;
    }
    exports.DragInt = DragInt;
    // IMGUI_API bool          DragInt2(const char* label, int v[2], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
    function DragInt2(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
        const _v = import_Vector2(v);
        const ret = bind.DragInt2(label, _v, v_speed, v_min, v_max, format);
        export_Vector2(_v, v);
        return ret;
    }
    exports.DragInt2 = DragInt2;
    // IMGUI_API bool          DragInt3(const char* label, int v[3], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
    function DragInt3(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
        const _v = import_Vector3(v);
        const ret = bind.DragInt3(label, _v, v_speed, v_min, v_max, format);
        export_Vector3(_v, v);
        return ret;
    }
    exports.DragInt3 = DragInt3;
    // IMGUI_API bool          DragInt4(const char* label, int v[4], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
    function DragInt4(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
        const _v = import_Vector4(v);
        const ret = bind.DragInt4(label, _v, v_speed, v_min, v_max, format);
        export_Vector4(_v, v);
        return ret;
    }
    exports.DragInt4 = DragInt4;
    // IMGUI_API bool          DragIntRange2(const char* label, int* v_current_min, int* v_current_max, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* display_format = "%.0f", const char* display_format_max = NULL);
    function DragIntRange2(label, v_current_min, v_current_max, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d", format_max = null) {
        const _v_current_min = import_Scalar(v_current_min);
        const _v_current_max = import_Scalar(v_current_max);
        const ret = bind.DragIntRange2(label, _v_current_min, _v_current_max, v_speed, v_min, v_max, format, format_max);
        export_Scalar(_v_current_min, v_current_min);
        export_Scalar(_v_current_max, v_current_max);
        return ret;
    }
    exports.DragIntRange2 = DragIntRange2;
    // IMGUI_API bool          DragScalar(const char* label, ImGuiDataType data_type, void* v, float v_speed, const void* v_min = NULL, const void* v_max = NULL, const char* format = NULL, float power = 1.0f);
    // IMGUI_API bool          DragScalarN(const char* label, ImGuiDataType data_type, void* v, int components, float v_speed, const void* v_min = NULL, const void* v_max = NULL, const char* format = NULL, float power = 1.0f);
    function DragScalar(label, v, v_speed, v_min = null, v_max = null, format = null, power = 1.0) {
        if (v instanceof Int8Array) {
            return bind.DragScalar(label, ImGuiDataType.S8, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Uint8Array) {
            return bind.DragScalar(label, ImGuiDataType.U8, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Int16Array) {
            return bind.DragScalar(label, ImGuiDataType.S16, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Uint16Array) {
            return bind.DragScalar(label, ImGuiDataType.U16, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Int32Array) {
            return bind.DragScalar(label, ImGuiDataType.S32, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Uint32Array) {
            return bind.DragScalar(label, ImGuiDataType.U32, v, v_speed, v_min, v_max, format, power);
        }
        // if (v instanceof Int64Array) { return bind.DragScalar(label, ImGuiDataType.S64, v, v_speed, v_min, v_max, format, power); }
        // if (v instanceof Uint64Array) { return bind.DragScalar(label, ImGuiDataType.U64, v, v_speed, v_min, v_max, format, power); }
        if (v instanceof Float32Array) {
            return bind.DragScalar(label, ImGuiDataType.Float, v, v_speed, v_min, v_max, format, power);
        }
        if (v instanceof Float64Array) {
            return bind.DragScalar(label, ImGuiDataType.Double, v, v_speed, v_min, v_max, format, power);
        }
        throw new Error();
    }
    exports.DragScalar = DragScalar;
    // Widgets: Input with Keyboard
    // IMGUI_API bool          InputText(const char* label, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
    function InputText(label, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : exports.ImGuiInputTextDefaultSize, flags = 0, callback = null, user_data = null) {
        const _callback = callback && ((data) => callback(new ImGuiInputTextCallbackData(data, user_data))) || null;
        if (Array.isArray(buf)) {
            return bind.InputText(label, buf, buf_size, flags, _callback, null);
        }
        else if (buf instanceof ImStringBuffer) {
            const ref_buf = [buf.buffer];
            const _buf_size = Math.min(buf_size, buf.size);
            const ret = bind.InputText(label, ref_buf, _buf_size, flags, _callback, null);
            buf.buffer = ref_buf[0];
            return ret;
        }
        else {
            const ref_buf = [buf()];
            const ret = bind.InputText(label, ref_buf, buf_size, flags, _callback, null);
            buf(ref_buf[0]);
            return ret;
        }
    }
    exports.InputText = InputText;
    // IMGUI_API bool          InputTextWithHint(const char* label, const char* hint, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
    function InputTextWithHint(label, hint, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : exports.ImGuiInputTextDefaultSize, flags = 0, callback = null, user_data = null) {
        const _callback = callback && ((data) => callback(new ImGuiInputTextCallbackData(data, user_data))) || null;
        if (Array.isArray(buf)) {
            return bind.InputTextWithHint(label, hint, buf, buf_size, flags, _callback, null);
        }
        else if (buf instanceof ImStringBuffer) {
            const ref_buf = [buf.buffer];
            const _buf_size = Math.min(buf_size, buf.size);
            const ret = bind.InputTextWithHint(label, hint, ref_buf, _buf_size, flags, _callback, null);
            buf.buffer = ref_buf[0];
            return ret;
        }
        else {
            const ref_buf = [buf()];
            const ret = bind.InputTextWithHint(label, hint, ref_buf, buf_size, flags, _callback, null);
            buf(ref_buf[0]);
            return ret;
        }
    }
    exports.InputTextWithHint = InputTextWithHint;
    // IMGUI_API bool          InputTextMultiline(const char* label, char* buf, size_t buf_size, const ImVec2& size = ImVec2(0,0), ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
    function InputTextMultiline(label, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : exports.ImGuiInputTextDefaultSize, size = ImVec2.ZERO, flags = 0, callback = null, user_data = null) {
        const _callback = callback && ((data) => callback(new ImGuiInputTextCallbackData(data, user_data))) || null;
        if (Array.isArray(buf)) {
            return bind.InputTextMultiline(label, buf, buf_size, size, flags, _callback, null);
        }
        else if (buf instanceof ImStringBuffer) {
            const ref_buf = [buf.buffer];
            const _buf_size = Math.min(buf_size, buf.size);
            const ret = bind.InputTextMultiline(label, ref_buf, _buf_size, size, flags, _callback, null);
            buf.buffer = ref_buf[0];
            return ret;
        }
        else {
            const ref_buf = [buf()];
            const ret = bind.InputTextMultiline(label, ref_buf, buf_size, size, flags, _callback, null);
            buf(ref_buf[0]);
            return ret;
        }
    }
    exports.InputTextMultiline = InputTextMultiline;
    // IMGUI_API bool          InputFloat(const char* label, float* v, float step = 0.0f, float step_fast = 0.0f, const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
    function InputFloat(label, v, step = 0.0, step_fast = 0.0, format = "%.3f", extra_flags = 0) {
        const _v = import_Scalar(v);
        const ret = bind.InputFloat(label, _v, step, step_fast, format, extra_flags);
        export_Scalar(_v, v);
        return ret;
    }
    exports.InputFloat = InputFloat;
    // IMGUI_API bool          InputFloat2(const char* label, float v[2], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
    function InputFloat2(label, v, format = "%.3f", extra_flags = 0) {
        const _v = import_Vector2(v);
        const ret = bind.InputFloat2(label, _v, format, extra_flags);
        export_Vector2(_v, v);
        return ret;
    }
    exports.InputFloat2 = InputFloat2;
    // IMGUI_API bool          InputFloat3(const char* label, float v[3], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
    function InputFloat3(label, v, format = "%.3f", extra_flags = 0) {
        const _v = import_Vector3(v);
        const ret = bind.InputFloat3(label, _v, format, extra_flags);
        export_Vector3(_v, v);
        return ret;
    }
    exports.InputFloat3 = InputFloat3;
    // IMGUI_API bool          InputFloat4(const char* label, float v[4], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
    function InputFloat4(label, v, format = "%.3f", extra_flags = 0) {
        const _v = import_Vector4(v);
        const ret = bind.InputFloat4(label, _v, format, extra_flags);
        export_Vector4(_v, v);
        return ret;
    }
    exports.InputFloat4 = InputFloat4;
    // IMGUI_API bool          InputInt(const char* label, int* v, int step = 1, int step_fast = 100, ImGuiInputTextFlags extra_flags = 0);
    function InputInt(label, v, step = 1, step_fast = 100, extra_flags = 0) {
        const _v = import_Scalar(v);
        const ret = bind.InputInt(label, _v, step, step_fast, extra_flags);
        export_Scalar(_v, v);
        return ret;
    }
    exports.InputInt = InputInt;
    // IMGUI_API bool          InputInt2(const char* label, int v[2], ImGuiInputTextFlags extra_flags = 0);
    function InputInt2(label, v, extra_flags = 0) {
        const _v = import_Vector2(v);
        const ret = bind.InputInt2(label, _v, extra_flags);
        export_Vector2(_v, v);
        return ret;
    }
    exports.InputInt2 = InputInt2;
    // IMGUI_API bool          InputInt3(const char* label, int v[3], ImGuiInputTextFlags extra_flags = 0);
    function InputInt3(label, v, extra_flags = 0) {
        const _v = import_Vector3(v);
        const ret = bind.InputInt3(label, _v, extra_flags);
        export_Vector3(_v, v);
        return ret;
    }
    exports.InputInt3 = InputInt3;
    // IMGUI_API bool          InputInt4(const char* label, int v[4], ImGuiInputTextFlags extra_flags = 0);
    function InputInt4(label, v, extra_flags = 0) {
        const _v = import_Vector4(v);
        const ret = bind.InputInt4(label, _v, extra_flags);
        export_Vector4(_v, v);
        return ret;
    }
    exports.InputInt4 = InputInt4;
    // IMGUI_API bool          InputDouble(const char* label, float* v, float step = 0.0f, float step_fast = 0.0f, const char* format = "%.6f", ImGuiInputTextFlags extra_flags = 0);
    function InputDouble(label, v, step = 0.0, step_fast = 0.0, format = "%.6f", extra_flags = 0) {
        const _v = import_Scalar(v);
        const ret = bind.InputDouble(label, _v, step, step_fast, format, extra_flags);
        export_Scalar(_v, v);
        return ret;
    }
    exports.InputDouble = InputDouble;
    // IMGUI_API bool          InputScalar(const char* label, ImGuiDataType data_type, void* v, const void* step = NULL, const void* step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags extra_flags = 0);
    // IMGUI_API bool          InputScalarN(const char* label, ImGuiDataType data_type, void* v, int components, const void* step = NULL, const void* step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags extra_flags = 0);
    function InputScalar(label, v, step = null, step_fast = null, format = null, extra_flags = 0) {
        if (v instanceof Int8Array) {
            return bind.InputScalar(label, ImGuiDataType.S8, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Uint8Array) {
            return bind.InputScalar(label, ImGuiDataType.U8, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Int16Array) {
            return bind.InputScalar(label, ImGuiDataType.S16, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Uint16Array) {
            return bind.InputScalar(label, ImGuiDataType.U16, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Int32Array) {
            return bind.InputScalar(label, ImGuiDataType.S32, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Uint32Array) {
            return bind.InputScalar(label, ImGuiDataType.U32, v, step, step_fast, format, extra_flags);
        }
        // if (v instanceof Int64Array) { return bind.InputScalar(label, ImGuiDataType.S64, v, step, step_fast, format, extra_flags); }
        // if (v instanceof Uint64Array) { return bind.InputScalar(label, ImGuiDataType.U64, v, step, step_fast, format, extra_flags); }
        if (v instanceof Float32Array) {
            return bind.InputScalar(label, ImGuiDataType.Float, v, step, step_fast, format, extra_flags);
        }
        if (v instanceof Float64Array) {
            return bind.InputScalar(label, ImGuiDataType.Double, v, step, step_fast, format, extra_flags);
        }
        throw new Error();
    }
    exports.InputScalar = InputScalar;
    // Widgets: Sliders (tip: ctrl+click on a slider to input with keyboard. manually input values aren't clamped, can go off-bounds)
    // IMGUI_API bool          SliderFloat(const char* label, float* v, float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);     // adjust format to decorate the value with a prefix or a suffix for in-slider labels or unit display. Use power!=1.0 for logarithmic sliders
    function SliderFloat(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
        const _v = import_Scalar(v);
        const ret = bind.SliderFloat(label, _v, v_min, v_max, format, power);
        export_Scalar(_v, v);
        return ret;
    }
    exports.SliderFloat = SliderFloat;
    // IMGUI_API bool          SliderFloat2(const char* label, float v[2], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
    function SliderFloat2(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
        const _v = import_Vector2(v);
        const ret = bind.SliderFloat2(label, _v, v_min, v_max, format, power);
        export_Vector2(_v, v);
        return ret;
    }
    exports.SliderFloat2 = SliderFloat2;
    // IMGUI_API bool          SliderFloat3(const char* label, float v[3], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
    function SliderFloat3(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
        const _v = import_Vector3(v);
        const ret = bind.SliderFloat3(label, _v, v_min, v_max, format, power);
        export_Vector3(_v, v);
        return ret;
    }
    exports.SliderFloat3 = SliderFloat3;
    // IMGUI_API bool          SliderFloat4(const char* label, float v[4], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
    function SliderFloat4(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
        const _v = import_Vector4(v);
        const ret = bind.SliderFloat4(label, _v, v_min, v_max, format, power);
        export_Vector4(_v, v);
        return ret;
    }
    exports.SliderFloat4 = SliderFloat4;
    // IMGUI_API bool          SliderAngle(const char* label, float* v_rad, float v_degrees_min = -360.0f, float v_degrees_max = +360.0f);
    function SliderAngle(label, v_rad, v_degrees_min = -360.0, v_degrees_max = +360.0) {
        const _v_rad = import_Scalar(v_rad);
        const ret = bind.SliderAngle(label, _v_rad, v_degrees_min, v_degrees_max);
        export_Scalar(_v_rad, v_rad);
        return ret;
    }
    exports.SliderAngle = SliderAngle;
    function SliderAngle3(label, v_rad, v_degrees_min = -360.0, v_degrees_max = +360.0) {
        const _v_rad = import_Vector3(v_rad);
        _v_rad[0] = Math.floor(_v_rad[0] * 180 / Math.PI);
        _v_rad[1] = Math.floor(_v_rad[1] * 180 / Math.PI);
        _v_rad[2] = Math.floor(_v_rad[2] * 180 / Math.PI);
        const ret = bind.SliderInt3(label, _v_rad, v_degrees_min, v_degrees_max, "%d deg");
        _v_rad[0] = _v_rad[0] * Math.PI / 180;
        _v_rad[1] = _v_rad[1] * Math.PI / 180;
        _v_rad[2] = _v_rad[2] * Math.PI / 180;
        export_Vector3(_v_rad, v_rad);
        return ret;
    }
    exports.SliderAngle3 = SliderAngle3;
    // IMGUI_API bool          SliderInt(const char* label, int* v, int v_min, int v_max, const char* format = "%d");
    function SliderInt(label, v, v_min, v_max, format = "%d") {
        const _v = import_Scalar(v);
        const ret = bind.SliderInt(label, _v, v_min, v_max, format);
        export_Scalar(_v, v);
        return ret;
    }
    exports.SliderInt = SliderInt;
    // IMGUI_API bool          SliderInt2(const char* label, int v[2], int v_min, int v_max, const char* format = "%d");
    function SliderInt2(label, v, v_min, v_max, format = "%d") {
        const _v = import_Vector2(v);
        const ret = bind.SliderInt2(label, _v, v_min, v_max, format);
        export_Vector2(_v, v);
        return ret;
    }
    exports.SliderInt2 = SliderInt2;
    // IMGUI_API bool          SliderInt3(const char* label, int v[3], int v_min, int v_max, const char* format = "%d");
    function SliderInt3(label, v, v_min, v_max, format = "%d") {
        const _v = import_Vector3(v);
        const ret = bind.SliderInt3(label, _v, v_min, v_max, format);
        export_Vector3(_v, v);
        return ret;
    }
    exports.SliderInt3 = SliderInt3;
    // IMGUI_API bool          SliderInt4(const char* label, int v[4], int v_min, int v_max, const char* format = "%d");
    function SliderInt4(label, v, v_min, v_max, format = "%d") {
        const _v = import_Vector4(v);
        const ret = bind.SliderInt4(label, _v, v_min, v_max, format);
        export_Vector4(_v, v);
        return ret;
    }
    exports.SliderInt4 = SliderInt4;
    // IMGUI_API bool          SliderScalar(const char* label, ImGuiDataType data_type, void* v, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
    // IMGUI_API bool          SliderScalarN(const char* label, ImGuiDataType data_type, void* v, int components, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
    function SliderScalar(label, v, v_min, v_max, format = null, power = 1.0) {
        if (v instanceof Int8Array) {
            return bind.SliderScalar(label, ImGuiDataType.S8, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint8Array) {
            return bind.SliderScalar(label, ImGuiDataType.U8, v, v_min, v_max, format, power);
        }
        if (v instanceof Int16Array) {
            return bind.SliderScalar(label, ImGuiDataType.S16, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint16Array) {
            return bind.SliderScalar(label, ImGuiDataType.U16, v, v_min, v_max, format, power);
        }
        if (v instanceof Int32Array) {
            return bind.SliderScalar(label, ImGuiDataType.S32, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint32Array) {
            return bind.SliderScalar(label, ImGuiDataType.U32, v, v_min, v_max, format, power);
        }
        // if (v instanceof Int64Array) { return bind.SliderScalar(label, ImGuiDataType.S64, v, v_min, v_max, format, power); }
        // if (v instanceof Uint64Array) { return bind.SliderScalar(label, ImGuiDataType.U64, v, v_min, v_max, format, power); }
        if (v instanceof Float32Array) {
            return bind.SliderScalar(label, ImGuiDataType.Float, v, v_min, v_max, format, power);
        }
        if (v instanceof Float64Array) {
            return bind.SliderScalar(label, ImGuiDataType.Double, v, v_min, v_max, format, power);
        }
        throw new Error();
    }
    exports.SliderScalar = SliderScalar;
    // IMGUI_API bool          VSliderFloat(const char* label, const ImVec2& size, float* v, float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
    function VSliderFloat(label, size, v, v_min, v_max, format = "%.3f", power = 1.0) {
        const _v = import_Scalar(v);
        const ret = bind.VSliderFloat(label, size, _v, v_min, v_max, format, power);
        export_Scalar(_v, v);
        return ret;
    }
    exports.VSliderFloat = VSliderFloat;
    // IMGUI_API bool          VSliderInt(const char* label, const ImVec2& size, int* v, int v_min, int v_max, const char* format = "%d");
    function VSliderInt(label, size, v, v_min, v_max, format = "%d") {
        const _v = import_Scalar(v);
        const ret = bind.VSliderInt(label, size, _v, v_min, v_max, format);
        export_Scalar(_v, v);
        return ret;
    }
    exports.VSliderInt = VSliderInt;
    // IMGUI_API bool          VSliderScalar(const char* label, const ImVec2& size, ImGuiDataType data_type, void* v, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
    function VSliderScalar(label, size, data_type, v, v_min, v_max, format = null, power = 1.0) {
        if (v instanceof Int8Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.S8, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint8Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.U8, v, v_min, v_max, format, power);
        }
        if (v instanceof Int16Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.S16, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint16Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.U16, v, v_min, v_max, format, power);
        }
        if (v instanceof Int32Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.S32, v, v_min, v_max, format, power);
        }
        if (v instanceof Uint32Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.U32, v, v_min, v_max, format, power);
        }
        // if (v instanceof Int64Array) { return bind.VSliderScalar(label, size, ImGuiDataType.S64, v, v_min, v_max, format, power); }
        // if (v instanceof Uint64Array) { return bind.VSliderScalar(label, size, ImGuiDataType.U64, v, v_min, v_max, format, power); }
        if (v instanceof Float32Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.Float, v, v_min, v_max, format, power);
        }
        if (v instanceof Float64Array) {
            return bind.VSliderScalar(label, size, ImGuiDataType.Double, v, v_min, v_max, format, power);
        }
        throw new Error();
    }
    exports.VSliderScalar = VSliderScalar;
    // Widgets: Color Editor/Picker (tip: the ColorEdit* functions have a little colored preview square that can be left-clicked to open a picker, and right-clicked to open an option menu.)
    // Note that a 'float v[X]' function argument is the same as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible. You can the pass the address of a first float element out of a contiguous structure, e.g. &myvector.x
    // IMGUI_API bool          ColorEdit3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
    function ColorEdit3(label, col, flags = 0) {
        const _col = import_Color3(col);
        const ret = bind.ColorEdit3(label, _col, flags);
        export_Color3(_col, col);
        return ret;
    }
    exports.ColorEdit3 = ColorEdit3;
    // IMGUI_API bool          ColorEdit4(const char* label, float col[4], ImGuiColorEditFlags flags = 0);
    function ColorEdit4(label, col, flags = 0) {
        const _col = import_Color4(col);
        const ret = bind.ColorEdit4(label, _col, flags);
        export_Color4(_col, col);
        return ret;
    }
    exports.ColorEdit4 = ColorEdit4;
    // IMGUI_API bool          ColorPicker3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
    function ColorPicker3(label, col, flags = 0) {
        const _col = import_Color3(col);
        const ret = bind.ColorPicker3(label, _col, flags);
        export_Color3(_col, col);
        return ret;
    }
    exports.ColorPicker3 = ColorPicker3;
    // IMGUI_API bool          ColorPicker4(const char* label, float col[4], ImGuiColorEditFlags flags = 0, const float* ref_col = NULL);
    function ColorPicker4(label, col, flags = 0, ref_col = null) {
        const _col = import_Color4(col);
        const _ref_col = ref_col ? import_Color4(ref_col) : null;
        const ret = bind.ColorPicker4(label, _col, flags, _ref_col);
        export_Color4(_col, col);
        if (_ref_col && ref_col) {
            export_Color4(_ref_col, ref_col);
        }
        return ret;
    }
    exports.ColorPicker4 = ColorPicker4;
    // IMGUI_API bool          ColorButton(const char* desc_id, const ImVec4& col, ImGuiColorEditFlags flags = 0, ImVec2 size = ImVec2(0,0));  // display a colored square/button, hover for details, return true when pressed.
    function ColorButton(desc_id, col, flags = 0, size = ImVec2.ZERO) {
        return bind.ColorButton(desc_id, col, flags, size);
    }
    exports.ColorButton = ColorButton;
    // IMGUI_API void          SetColorEditOptions(ImGuiColorEditFlags flags);                         // initialize current options (generally on application startup) if you want to select a default format, picker type, etc. User will be able to change many settings, unless you pass the _NoOptions flag to your calls.
    function SetColorEditOptions(flags) {
        bind.SetColorEditOptions(flags);
    }
    exports.SetColorEditOptions = SetColorEditOptions;
    function TreeNode(...args) {
        if (typeof (args[0]) === "string") {
            if (args.length === 1) {
                const label = args[0];
                return bind.TreeNode_A(label);
            }
            else {
                const str_id = args[0];
                const fmt = args[1];
                return bind.TreeNode_B(str_id, fmt);
            }
        }
        else {
            const ptr_id = args[0];
            const fmt = args[1];
            return bind.TreeNode_C(ptr_id, fmt);
        }
    }
    exports.TreeNode = TreeNode;
    function TreeNodeEx(...args) {
        if (typeof (args[0]) === "string") {
            if (args.length < 3) {
                const label = args[0];
                const flags = args[1] || 0;
                return bind.TreeNodeEx_A(label, flags);
            }
            else {
                const str_id = args[0];
                const flags = args[1];
                const fmt = args[2];
                return bind.TreeNodeEx_B(str_id, flags, fmt);
            }
        }
        else {
            const ptr_id = args[0];
            const flags = args[1];
            const fmt = args[2];
            return bind.TreeNodeEx_C(ptr_id, flags, fmt);
        }
    }
    exports.TreeNodeEx = TreeNodeEx;
    function TreePush(...args) {
        if (typeof (args[0]) === "string") {
            const str_id = args[0];
            bind.TreePush_A(str_id);
        }
        else {
            const ptr_id = args[0];
            bind.TreePush_B(ptr_id);
        }
    }
    exports.TreePush = TreePush;
    // IMGUI_API void          TreePop();                                                              // ~ Unindent()+PopId()
    function TreePop() { bind.TreePop(); }
    exports.TreePop = TreePop;
    // IMGUI_API void          TreeAdvanceToLabelPos();                                                // advance cursor x position by GetTreeNodeToLabelSpacing()
    function TreeAdvanceToLabelPos() { bind.TreeAdvanceToLabelPos(); }
    exports.TreeAdvanceToLabelPos = TreeAdvanceToLabelPos;
    // IMGUI_API float         GetTreeNodeToLabelSpacing();                                            // horizontal distance preceding label when using TreeNode*() or Bullet() == (g.FontSize + style.FramePadding.x*2) for a regular unframed TreeNode
    function GetTreeNodeToLabelSpacing() { return bind.GetTreeNodeToLabelSpacing(); }
    exports.GetTreeNodeToLabelSpacing = GetTreeNodeToLabelSpacing;
    function CollapsingHeader(label, ...args) {
        if (args.length === 0) {
            return bind.CollapsingHeader_A(label, 0);
        }
        else {
            if (typeof (args[0]) === "number") {
                const flags = args[0];
                return bind.CollapsingHeader_A(label, flags);
            }
            else {
                const p_open = args[0];
                const flags = args[1] || 0;
                const ref_open = Array.isArray(p_open) ? p_open : [p_open()];
                const ret = bind.CollapsingHeader_B(label, ref_open, flags);
                if (!Array.isArray(p_open)) {
                    p_open(ref_open[0]);
                }
                return ret;
            }
        }
    }
    exports.CollapsingHeader = CollapsingHeader;
    // IMGUI_API void          SetNextItemOpen(bool is_open, ImGuiCond cond = 0);                  // set next TreeNode/CollapsingHeader open state.
    function SetNextItemOpen(is_open, cond = 0) {
        bind.SetNextItemOpen(is_open, cond);
    }
    exports.SetNextItemOpen = SetNextItemOpen;
    function Selectable(label, ...args) {
        if (args.length === 0) {
            return bind.Selectable_A(label, false, 0, ImVec2.ZERO);
        }
        else {
            if (typeof (args[0]) === "boolean") {
                const selected = args[0];
                const flags = args[1] || 0;
                const size = args[2] || ImVec2.ZERO;
                return bind.Selectable_A(label, selected, flags, size);
            }
            else {
                const p_selected = args[0];
                const flags = args[1] || 0;
                const size = args[2] || ImVec2.ZERO;
                const ref_selected = Array.isArray(p_selected) ? p_selected : [p_selected()];
                const ret = bind.Selectable_B(label, ref_selected, flags, size);
                if (!Array.isArray(p_selected)) {
                    p_selected(ref_selected[0]);
                }
                return ret;
            }
        }
    }
    exports.Selectable = Selectable;
    function ListBox(label, current_item, ...args) {
        let ret = false;
        const _current_item = Array.isArray(current_item) ? current_item : [current_item()];
        if (Array.isArray(args[0])) {
            const items = args[0];
            const items_count = typeof (args[1]) === "number" ? args[1] : items.length;
            const height_in_items = typeof (args[2]) === "number" ? args[2] : -1;
            ret = bind.ListBox_A(label, _current_item, items, items_count, height_in_items);
        }
        else {
            const items_getter = args[0];
            const data = args[1];
            const items_count = args[2];
            const height_in_items = typeof (args[3]) === "number" ? args[3] : -1;
            ret = bind.ListBox_B(label, _current_item, items_getter, data, items_count, height_in_items);
        }
        if (!Array.isArray(current_item)) {
            current_item(_current_item[0]);
        }
        return ret;
    }
    exports.ListBox = ListBox;
    function ListBoxHeader(label, ...args) {
        if (typeof (args[0]) === "object") {
            const size = args[0];
            return bind.ListBoxHeader_A(label, size);
        }
        else {
            const items_count = args[0];
            const height_in_items = typeof (args[1]) === "number" ? args[1] : -1;
            return bind.ListBoxHeader_B(label, items_count, height_in_items);
        }
    }
    exports.ListBoxHeader = ListBoxHeader;
    // IMGUI_API void          ListBoxFooter();                                                        // terminate the scrolling region
    function ListBoxFooter() {
        bind.ListBoxFooter();
    }
    exports.ListBoxFooter = ListBoxFooter;
    function Value(prefix, ...args) {
        if (typeof (args[0]) === "boolean") {
            bind.Value_A(prefix, args[0]);
        }
        else if (typeof (args[0]) === "number") {
            if (Number.isInteger(args[0])) {
                bind.Value_B(prefix, args[0]);
            }
            else {
                bind.Value_D(prefix, args[0], typeof (args[1]) === "string" ? args[1] : null);
            }
        }
        else {
            bind.Text(prefix + String(args[0]));
        }
    }
    exports.Value = Value;
    // Tooltips
    // IMGUI_API void          BeginTooltip();                                                     // begin/append a tooltip window. to create full-featured tooltip (with any kind of contents).
    function BeginTooltip() { bind.BeginTooltip(); }
    exports.BeginTooltip = BeginTooltip;
    // IMGUI_API void          EndTooltip();
    function EndTooltip() { bind.EndTooltip(); }
    exports.EndTooltip = EndTooltip;
    // IMGUI_API void          SetTooltip(const char* fmt, ...) IM_FMTARGS(1);                     // set text tooltip under mouse-cursor, typically use with ImGui::IsItemHovered(). overidde any previous call to SetTooltip().
    // IMGUI_API void          SetTooltipV(const char* fmt, va_list args) IM_FMTLIST(1);
    function SetTooltip(fmt) {
        bind.SetTooltip(fmt);
    }
    exports.SetTooltip = SetTooltip;
    // Menus
    // IMGUI_API bool          BeginMainMenuBar();                                                 // create and append to a full screen menu-bar. only call EndMainMenuBar() if this returns true!
    function BeginMainMenuBar() { return bind.BeginMainMenuBar(); }
    exports.BeginMainMenuBar = BeginMainMenuBar;
    // IMGUI_API void          EndMainMenuBar();
    function EndMainMenuBar() { bind.EndMainMenuBar(); }
    exports.EndMainMenuBar = EndMainMenuBar;
    // IMGUI_API bool          BeginMenuBar();                                                     // append to menu-bar of current window (requires ImGuiWindowFlags_MenuBar flag set on parent window). only call EndMenuBar() if this returns true!
    function BeginMenuBar() { return bind.BeginMenuBar(); }
    exports.BeginMenuBar = BeginMenuBar;
    // IMGUI_API void          EndMenuBar();
    function EndMenuBar() { bind.EndMenuBar(); }
    exports.EndMenuBar = EndMenuBar;
    // IMGUI_API bool          BeginMenu(const char* label, bool enabled = true);                  // create a sub-menu entry. only call EndMenu() if this returns true!
    function BeginMenu(label, enabled = true) { return bind.BeginMenu(label, enabled); }
    exports.BeginMenu = BeginMenu;
    // IMGUI_API void          EndMenu();
    function EndMenu() { bind.EndMenu(); }
    exports.EndMenu = EndMenu;
    function MenuItem(label, ...args) {
        if (args.length === 0) {
            return bind.MenuItem_A(label, null, false, true);
        }
        else if (args.length === 1) {
            const shortcut = args[0];
            return bind.MenuItem_A(label, shortcut, false, true);
        }
        else {
            const shortcut = args[0];
            if (typeof (args[1]) === "boolean") {
                const selected = args[1];
                const enabled = typeof (args[2]) === "boolean" ? args[2] : true;
                return bind.MenuItem_A(label, shortcut, selected, enabled);
            }
            else {
                const p_selected = args[1];
                const enabled = typeof (args[2]) === "boolean" ? args[2] : true;
                const ref_selected = Array.isArray(p_selected) ? p_selected : [p_selected()];
                const ret = bind.MenuItem_B(label, shortcut, ref_selected, enabled);
                if (!Array.isArray(p_selected)) {
                    p_selected(ref_selected[0]);
                }
                return ret;
            }
        }
    }
    exports.MenuItem = MenuItem;
    // Popups
    // IMGUI_API void          OpenPopup(const char* str_id);                                      // call to mark popup as open (don't call every frame!). popups are closed when user click outside, or if CloseCurrentPopup() is called within a BeginPopup()/EndPopup() block. By default, Selectable()/MenuItem() are calling CloseCurrentPopup(). Popup identifiers are relative to the current ID-stack (so OpenPopup and BeginPopup needs to be at the same level).
    function OpenPopup(str_id) { bind.OpenPopup(str_id); }
    exports.OpenPopup = OpenPopup;
    // IMGUI_API bool          OpenPopupOnItemClick(const char* str_id = NULL, int mouse_button = 1);                                  // helper to open popup when clicked on last item. return true when just opened.
    function OpenPopupOnItemClick(str_id = null, mouse_button = 1) {
        return bind.OpenPopupOnItemClick(str_id, mouse_button);
    }
    exports.OpenPopupOnItemClick = OpenPopupOnItemClick;
    // IMGUI_API bool          BeginPopup(const char* str_id);                                     // return true if the popup is open, and you can start outputting to it. only call EndPopup() if BeginPopup() returned true!
    function BeginPopup(str_id) { return bind.BeginPopup(str_id); }
    exports.BeginPopup = BeginPopup;
    // IMGUI_API bool          BeginPopupModal(const char* name, bool* p_open = NULL, ImGuiWindowFlags extra_flags = 0);               // modal dialog (block interactions behind the modal window, can't close the modal window by clicking outside)
    function BeginPopupModal(str_id = "", p_open = null, extra_flags = 0) {
        if (Array.isArray(p_open)) {
            return bind.BeginPopupModal(str_id, p_open, extra_flags);
        }
        else if (typeof (p_open) === "function") {
            const _p_open = [p_open()];
            const ret = bind.BeginPopupModal(str_id, _p_open, extra_flags);
            p_open(_p_open[0]);
            return ret;
        }
        else {
            return bind.BeginPopupModal(str_id, null, extra_flags);
        }
    }
    exports.BeginPopupModal = BeginPopupModal;
    // IMGUI_API bool          BeginPopupContextItem(const char* str_id = NULL, int mouse_button = 1);                                 // helper to open and begin popup when clicked on last item. if you can pass a NULL str_id only if the previous item had an id. If you want to use that on a non-interactive item such as Text() you need to pass in an explicit ID here. read comments in .cpp!
    function BeginPopupContextItem(str_id = null, mouse_button = 1) {
        return bind.BeginPopupContextItem(str_id, mouse_button);
    }
    exports.BeginPopupContextItem = BeginPopupContextItem;
    // IMGUI_API bool          BeginPopupContextWindow(const char* str_id = NULL, int mouse_button = 1, bool also_over_items = true);  // helper to open and begin popup when clicked on current window.
    function BeginPopupContextWindow(str_id = null, mouse_button = 1, also_over_items = true) {
        return bind.BeginPopupContextWindow(str_id, mouse_button, also_over_items);
    }
    exports.BeginPopupContextWindow = BeginPopupContextWindow;
    // IMGUI_API bool          BeginPopupContextVoid(const char* str_id = NULL, int mouse_button = 1);                                 // helper to open and begin popup when clicked in void (where there are no imgui windows).
    function BeginPopupContextVoid(str_id = null, mouse_button = 1) {
        return bind.BeginPopupContextVoid(str_id, mouse_button);
    }
    exports.BeginPopupContextVoid = BeginPopupContextVoid;
    // IMGUI_API void          EndPopup();
    function EndPopup() { bind.EndPopup(); }
    exports.EndPopup = EndPopup;
    // IMGUI_API bool          IsPopupOpen(const char* str_id);                                    // return true if the popup is open
    function IsPopupOpen(str_id) { return bind.IsPopupOpen(str_id); }
    exports.IsPopupOpen = IsPopupOpen;
    // IMGUI_API void          CloseCurrentPopup();                                                // close the popup we have begin-ed into. clicking on a MenuItem or Selectable automatically close the current popup.
    function CloseCurrentPopup() { bind.CloseCurrentPopup(); }
    exports.CloseCurrentPopup = CloseCurrentPopup;
    // Tab Bars, Tabs
    // [BETA API] API may evolve!
    // IMGUI_API bool          BeginTabBar(const char* str_id, ImGuiTabBarFlags flags = 0);        // create and append into a TabBar
    function BeginTabBar(str_id, flags = 0) { return bind.BeginTabBar(str_id, flags); }
    exports.BeginTabBar = BeginTabBar;
    // IMGUI_API void          EndTabBar();                                                        // only call EndTabBar() if BeginTabBar() returns true!
    function EndTabBar() { bind.EndTabBar(); }
    exports.EndTabBar = EndTabBar;
    // IMGUI_API bool          BeginTabItem(const char* label, bool* p_open = NULL, ImGuiTabItemFlags flags = 0);// create a Tab. Returns true if the Tab is selected.
    function BeginTabItem(label, p_open = null, flags = 0) {
        // return bind.BeginTabItem(label, p_open, flags);
        if (p_open === null) {
            return bind.BeginTabItem(label, null, flags);
        }
        else if (Array.isArray(p_open)) {
            return bind.BeginTabItem(label, p_open, flags);
        }
        else {
            const ref_open = [p_open()];
            const ret = bind.BeginTabItem(label, ref_open, flags);
            p_open(ref_open[0]);
            return ret;
        }
    }
    exports.BeginTabItem = BeginTabItem;
    // IMGUI_API void          EndTabItem();                                                       // only call EndTabItem() if BeginTabItem() returns true!
    function EndTabItem() { bind.EndTabItem(); }
    exports.EndTabItem = EndTabItem;
    // IMGUI_API void          SetTabItemClosed(const char* tab_or_docked_window_label);           // notify TabBar or Docking system of a closed tab/window ahead (useful to reduce visual flicker on reorderable tab bars). For tab-bar: call after BeginTabBar() and before Tab submissions. Otherwise call with a window name.
    function SetTabItemClosed(tab_or_docked_window_label) { bind.SetTabItemClosed(tab_or_docked_window_label); }
    exports.SetTabItemClosed = SetTabItemClosed;
    // Logging/Capture: all text output from interface is captured to tty/file/clipboard. By default, tree nodes are automatically opened during logging.
    // IMGUI_API void          LogToTTY(int max_depth = -1);                                       // start logging to tty
    function LogToTTY(max_depth = -1) {
        bind.LogToTTY(max_depth);
    }
    exports.LogToTTY = LogToTTY;
    // IMGUI_API void          LogToFile(int max_depth = -1, const char* filename = NULL);         // start logging to file
    function LogToFile(max_depth = -1, filename = null) {
        bind.LogToFile(max_depth, filename);
    }
    exports.LogToFile = LogToFile;
    // IMGUI_API void          LogToClipboard(int max_depth = -1);                                 // start logging to OS clipboard
    function LogToClipboard(max_depth = -1) {
        bind.LogToClipboard(max_depth);
    }
    exports.LogToClipboard = LogToClipboard;
    // IMGUI_API void          LogFinish();                                                        // stop logging (close file, etc.)
    function LogFinish() { bind.LogFinish(); }
    exports.LogFinish = LogFinish;
    // IMGUI_API void          LogButtons();                                                       // helper to display buttons for logging to tty/file/clipboard
    function LogButtons() { bind.LogButtons(); }
    exports.LogButtons = LogButtons;
    // IMGUI_API void          LogText(const char* fmt, ...) IM_FMTARGS(1);                        // pass text data straight to log (without being displayed)
    function LogText(fmt) {
        bind.LogText(fmt);
    }
    exports.LogText = LogText;
    const _ImGui_DragDropPayload_data = {};
    // Drag and Drop
    // [BETA API] Missing Demo code. API may evolve.
    // IMGUI_API bool          BeginDragDropSource(ImGuiDragDropFlags flags = 0);                // call when the current item is active. If this return true, you can call SetDragDropPayload() + EndDragDropSource()
    function BeginDragDropSource(flags = 0) {
        return bind.BeginDragDropSource(flags);
    }
    exports.BeginDragDropSource = BeginDragDropSource;
    // IMGUI_API bool          SetDragDropPayload(const char* type, const void* data, size_t size, ImGuiCond cond = 0);// type is a user defined string of maximum 8 characters. Strings starting with '_' are reserved for dear imgui internal types. Data is copied and held by imgui.
    function SetDragDropPayload(type, data, cond = 0) {
        _ImGui_DragDropPayload_data[type] = data;
        return bind.SetDragDropPayload(type, data, 0, cond);
    }
    exports.SetDragDropPayload = SetDragDropPayload;
    // IMGUI_API void          EndDragDropSource();
    function EndDragDropSource() {
        bind.EndDragDropSource();
    }
    exports.EndDragDropSource = EndDragDropSource;
    // IMGUI_API bool          BeginDragDropTarget();                                                                  // call after submitting an item that may receive an item. If this returns true, you can call AcceptDragDropPayload() + EndDragDropTarget()
    function BeginDragDropTarget() {
        return bind.BeginDragDropTarget();
    }
    exports.BeginDragDropTarget = BeginDragDropTarget;
    // IMGUI_API const ImGuiPayload* AcceptDragDropPayload(const char* type, ImGuiDragDropFlags flags = 0);            // accept contents of a given type. If ImGuiDragDropFlags_AcceptBeforeDelivery is set you can peek into the payload before the mouse button is released.
    function AcceptDragDropPayload(type, flags = 0) {
        const data = _ImGui_DragDropPayload_data[type];
        return bind.AcceptDragDropPayload(type, flags) ? { Data: data } : null;
    }
    exports.AcceptDragDropPayload = AcceptDragDropPayload;
    // IMGUI_API void          EndDragDropTarget();
    function EndDragDropTarget() {
        bind.EndDragDropTarget();
    }
    exports.EndDragDropTarget = EndDragDropTarget;
    // Clipping
    // IMGUI_API void          PushClipRect(const ImVec2& clip_rect_min, const ImVec2& clip_rect_max, bool intersect_with_current_clip_rect);
    function PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect) {
        bind.PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect);
    }
    exports.PushClipRect = PushClipRect;
    // IMGUI_API void          PopClipRect();
    function PopClipRect() {
        bind.PopClipRect();
    }
    exports.PopClipRect = PopClipRect;
    // Focus
    // (FIXME: Those functions will be reworked after we merge the navigation branch + have a pass at focusing/tabbing features.)
    // (Prefer using "SetItemDefaultFocus()" over "if (IsWindowAppearing()) SetScrollHere()" when applicable, to make your code more forward compatible when navigation branch is merged)
    // IMGUI_API void          SetItemDefaultFocus();                                              // make last item the default focused item of a window (WIP navigation branch only). Pleaase use instead of SetScrollHere().
    function SetItemDefaultFocus() { bind.SetItemDefaultFocus(); }
    exports.SetItemDefaultFocus = SetItemDefaultFocus;
    // IMGUI_API void          SetKeyboardFocusHere(int offset = 0);                               // focus keyboard on the next widget. Use positive 'offset' to access sub components of a multiple component widget. Use -1 to access previous widget.
    function SetKeyboardFocusHere(offset = 0) {
        bind.SetKeyboardFocusHere(offset);
    }
    exports.SetKeyboardFocusHere = SetKeyboardFocusHere;
    // Utilities
    // IMGUI_API bool          IsItemHovered(ImGuiHoveredFlags flags = 0);                         // is the last item hovered? (and usable, aka not blocked by a popup, etc.). See ImGuiHoveredFlags for more options.
    function IsItemHovered(flags = 0) {
        return bind.IsItemHovered(flags);
    }
    exports.IsItemHovered = IsItemHovered;
    // IMGUI_API bool          IsItemActive();                                                     // is the last item active? (e.g. button being held, text field being edited- items that don't interact will always return false)
    function IsItemActive() { return bind.IsItemActive(); }
    exports.IsItemActive = IsItemActive;
    // IMGUI_API bool          IsItemEdited();                                                     // is the last item active? (e.g. button being held, text field being edited- items that don't interact will always return false)
    function IsItemEdited() { return bind.IsItemEdited(); }
    exports.IsItemEdited = IsItemEdited;
    // IMGUI_API bool          IsItemFocused();                                                    // is the last item focused for keyboard/gamepad navigation?
    function IsItemFocused() { return bind.IsItemFocused(); }
    exports.IsItemFocused = IsItemFocused;
    // IMGUI_API bool          IsItemClicked(int mouse_button = 0);                                // is the last item clicked? (e.g. button/node just clicked on)
    function IsItemClicked(mouse_button = 0) {
        return bind.IsItemClicked(mouse_button);
    }
    exports.IsItemClicked = IsItemClicked;
    // IMGUI_API bool          IsItemVisible();                                                    // is the last item visible? (aka not out of sight due to clipping/scrolling.)
    function IsItemVisible() { return bind.IsItemVisible(); }
    exports.IsItemVisible = IsItemVisible;
    // IMGUI_API bool          IsItemActivated();                                                  // was the last item just made active (item was previously inactive).
    function IsItemActivated() { return bind.IsItemActivated(); }
    exports.IsItemActivated = IsItemActivated;
    // IMGUI_API bool          IsItemDeactivated();                                                // was the last item just made inactive (item was previously active). Useful for Undo/Redo patterns with widgets that requires continuous editing.
    function IsItemDeactivated() { return bind.IsItemDeactivated(); }
    exports.IsItemDeactivated = IsItemDeactivated;
    // IMGUI_API bool          IsItemDeactivatedAfterEdit();                                     // was the last item just made inactive and made a value change when it was active? (e.g. Slider/Drag moved). Useful for Undo/Redo patterns with widgets that requires continuous editing. Note that you may get false positives (some widgets such as Combo()/ListBox()/Selectable() will return true even when clicking an already selected item).
    function IsItemDeactivatedAfterEdit() { return bind.IsItemDeactivatedAfterEdit(); }
    exports.IsItemDeactivatedAfterEdit = IsItemDeactivatedAfterEdit;
    // IMGUI_API bool          IsAnyItemHovered();
    function IsAnyItemHovered() { return bind.IsAnyItemHovered(); }
    exports.IsAnyItemHovered = IsAnyItemHovered;
    // IMGUI_API bool          IsAnyItemActive();
    function IsAnyItemActive() { return bind.IsAnyItemActive(); }
    exports.IsAnyItemActive = IsAnyItemActive;
    // IMGUI_API bool          IsAnyItemFocused();
    function IsAnyItemFocused() { return bind.IsAnyItemFocused(); }
    exports.IsAnyItemFocused = IsAnyItemFocused;
    // IMGUI_API ImVec2        GetItemRectMin();                                                   // get bounding rectangle of last item, in screen space
    function GetItemRectMin(out = new ImVec2()) {
        return bind.GetItemRectMin(out);
    }
    exports.GetItemRectMin = GetItemRectMin;
    // IMGUI_API ImVec2        GetItemRectMax();                                                   // "
    function GetItemRectMax(out = new ImVec2()) {
        return bind.GetItemRectMax(out);
    }
    exports.GetItemRectMax = GetItemRectMax;
    // IMGUI_API ImVec2        GetItemRectSize();                                                  // get size of last item, in screen space
    function GetItemRectSize(out = new ImVec2()) {
        return bind.GetItemRectSize(out);
    }
    exports.GetItemRectSize = GetItemRectSize;
    // IMGUI_API void          SetItemAllowOverlap();                                              // allow last item to be overlapped by a subsequent item. sometimes useful with invisible buttons, selectables, etc. to catch unused area.
    function SetItemAllowOverlap() { bind.SetItemAllowOverlap(); }
    exports.SetItemAllowOverlap = SetItemAllowOverlap;
    // IMGUI_API bool          IsWindowFocused(ImGuiFocusedFlags flags = 0);                       // is current window focused? or its root/child, depending on flags. see flags for options.
    function IsWindowFocused(flags = 0) {
        return bind.IsWindowFocused(flags);
    }
    exports.IsWindowFocused = IsWindowFocused;
    // IMGUI_API bool          IsWindowHovered(ImGuiHoveredFlags flags = 0);                       // is current window hovered (and typically: not blocked by a popup/modal)? see flags for options.
    function IsWindowHovered(flags = 0) {
        return bind.IsWindowHovered(flags);
    }
    exports.IsWindowHovered = IsWindowHovered;
    function IsRectVisible(...args) {
        if (args.length === 1) {
            const size = args[0];
            return bind.IsRectVisible_A(size);
        }
        else {
            const rect_min = args[0];
            const rect_max = args[1];
            return bind.IsRectVisible_B(rect_min, rect_max);
        }
    }
    exports.IsRectVisible = IsRectVisible;
    // IMGUI_API float         GetTime();
    function GetTime() { return bind.GetTime(); }
    exports.GetTime = GetTime;
    // IMGUI_API int           GetFrameCount();
    function GetFrameCount() { return bind.GetFrameCount(); }
    exports.GetFrameCount = GetFrameCount;
    function GetBackgroundDrawList() {
        return new ImDrawList(bind.GetBackgroundDrawList());
    }
    exports.GetBackgroundDrawList = GetBackgroundDrawList;
    function GetForegroundDrawList() {
        return new ImDrawList(bind.GetForegroundDrawList());
    }
    exports.GetForegroundDrawList = GetForegroundDrawList;
    // IMGUI_API ImDrawListSharedData* GetDrawListSharedData();
    function GetDrawListSharedData() {
        return new ImDrawListSharedData(bind.GetDrawListSharedData());
    }
    exports.GetDrawListSharedData = GetDrawListSharedData;
    // IMGUI_API const char*   GetStyleColorName(ImGuiCol idx);
    function GetStyleColorName(idx) { return bind.GetStyleColorName(idx); }
    exports.GetStyleColorName = GetStyleColorName;
    // IMGUI_API ImVec2        CalcTextSize(const char* text, const char* text_end = NULL, bool hide_text_after_double_hash = false, float wrap_width = -1.0f);
    function CalcTextSize(text, text_end = null, hide_text_after_double_hash = false, wrap_width = -1, out = new ImVec2()) {
        return bind.CalcTextSize(text_end !== null ? text.substring(0, text_end) : text, hide_text_after_double_hash, wrap_width, out);
    }
    exports.CalcTextSize = CalcTextSize;
    // IMGUI_API void          CalcListClipping(int items_count, float items_height, int* out_items_display_start, int* out_items_display_end);    // calculate coarse clipping for large list of evenly sized items. Prefer using the ImGuiListClipper higher-level helper if you can.
    function CalcListClipping(items_count, items_height, out_items_display_start, out_items_display_end) {
        return bind.CalcListClipping(items_count, items_height, out_items_display_start, out_items_display_end);
    }
    exports.CalcListClipping = CalcListClipping;
    // IMGUI_API bool          BeginChildFrame(ImGuiID id, const ImVec2& size, ImGuiWindowFlags extra_flags = 0);    // helper to create a child window / scrolling region that looks like a normal widget frame
    function BeginChildFrame(id, size, extra_flags = 0) {
        return bind.BeginChildFrame(id, size, extra_flags);
    }
    exports.BeginChildFrame = BeginChildFrame;
    // IMGUI_API void          EndChildFrame();
    function EndChildFrame() { bind.EndChildFrame(); }
    exports.EndChildFrame = EndChildFrame;
    // IMGUI_API ImVec4        ColorConvertU32ToFloat4(ImU32 in);
    function ColorConvertU32ToFloat4(in_, out = new ImVec4()) {
        return bind.ColorConvertU32ToFloat4(in_, out);
    }
    exports.ColorConvertU32ToFloat4 = ColorConvertU32ToFloat4;
    // IMGUI_API ImU32         ColorConvertFloat4ToU32(const ImVec4& in);
    function ColorConvertFloat4ToU32(in_) {
        return bind.ColorConvertFloat4ToU32(in_);
    }
    exports.ColorConvertFloat4ToU32 = ColorConvertFloat4ToU32;
    // IMGUI_API void          ColorConvertRGBtoHSV(float r, float g, float b, float& out_h, float& out_s, float& out_v);
    function ColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v) { bind.ColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v); }
    exports.ColorConvertRGBtoHSV = ColorConvertRGBtoHSV;
    // IMGUI_API void          ColorConvertHSVtoRGB(float h, float s, float v, float& out_r, float& out_g, float& out_b);
    function ColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b) { bind.ColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b); }
    exports.ColorConvertHSVtoRGB = ColorConvertHSVtoRGB;
    // Inputs
    // IMGUI_API int           GetKeyIndex(ImGuiKey imgui_key);                                    // map ImGuiKey_* values into user's key index. == io.KeyMap[key]
    function GetKeyIndex(imgui_key) {
        return bind.GetKeyIndex(imgui_key);
    }
    exports.GetKeyIndex = GetKeyIndex;
    // IMGUI_API bool          IsKeyDown(int user_key_index);                                      // is key being held. == io.KeysDown[user_key_index]. note that imgui doesn't know the semantic of each entry of io.KeyDown[]. Use your own indices/enums according to how your backend/engine stored them into KeyDown[]!
    function IsKeyDown(user_key_index) {
        return bind.IsKeyDown(user_key_index);
    }
    exports.IsKeyDown = IsKeyDown;
    // IMGUI_API bool          IsKeyPressed(int user_key_index, bool repeat = true);               // was key pressed (went from !Down to Down). if repeat=true, uses io.KeyRepeatDelay / KeyRepeatRate
    function IsKeyPressed(user_key_index, repeat = true) {
        return bind.IsKeyPressed(user_key_index, repeat);
    }
    exports.IsKeyPressed = IsKeyPressed;
    // IMGUI_API bool          IsKeyReleased(int user_key_index);                                  // was key released (went from Down to !Down)..
    function IsKeyReleased(user_key_index) {
        return bind.IsKeyReleased(user_key_index);
    }
    exports.IsKeyReleased = IsKeyReleased;
    // IMGUI_API int           GetKeyPressedAmount(int key_index, float repeat_delay, float rate); // uses provided repeat rate/delay. return a count, most often 0 or 1 but might be >1 if RepeatRate is small enough that DeltaTime > RepeatRate
    function GetKeyPressedAmount(user_key_index, repeat_delay, rate) {
        return bind.GetKeyPressedAmount(user_key_index, repeat_delay, rate);
    }
    exports.GetKeyPressedAmount = GetKeyPressedAmount;
    // IMGUI_API bool          IsMouseDown(int button);                                            // is mouse button held
    function IsMouseDown(button) {
        return bind.IsMouseDown(button);
    }
    exports.IsMouseDown = IsMouseDown;
    // IMGUI_API bool          IsMouseClicked(int button, bool repeat = false);                    // did mouse button clicked (went from !Down to Down)
    function IsMouseClicked(button, repeat = false) {
        return bind.IsMouseClicked(button, repeat);
    }
    exports.IsMouseClicked = IsMouseClicked;
    // IMGUI_API bool          IsMouseDoubleClicked(int button);                                   // did mouse button double-clicked. a double-click returns false in IsMouseClicked(). uses io.MouseDoubleClickTime.
    function IsMouseDoubleClicked(button) {
        return bind.IsMouseDoubleClicked(button);
    }
    exports.IsMouseDoubleClicked = IsMouseDoubleClicked;
    // IMGUI_API bool          IsMouseReleased(int button);                                        // did mouse button released (went from Down to !Down)
    function IsMouseReleased(button) {
        return bind.IsMouseReleased(button);
    }
    exports.IsMouseReleased = IsMouseReleased;
    // IMGUI_API bool          IsMouseDragging(int button = 0, float lock_threshold = -1.0f);      // is mouse dragging. if lock_threshold < -1.0f uses io.MouseDraggingThreshold
    function IsMouseDragging(button = 0, lock_threshold = -1.0) {
        return bind.IsMouseDragging(button, lock_threshold);
    }
    exports.IsMouseDragging = IsMouseDragging;
    // IMGUI_API bool          IsMouseHoveringRect(const ImVec2& r_min, const ImVec2& r_max, bool clip = true);  // is mouse hovering given bounding rect (in screen space). clipped by current clipping settings. disregarding of consideration of focus/window ordering/blocked by a popup.
    function IsMouseHoveringRect(r_min, r_max, clip = true) {
        return bind.IsMouseHoveringRect(r_min, r_max, clip);
    }
    exports.IsMouseHoveringRect = IsMouseHoveringRect;
    // IMGUI_API bool          IsMousePosValid(const ImVec2* mouse_pos = NULL);                    //
    function IsMousePosValid(mouse_pos = null) {
        return bind.IsMousePosValid(mouse_pos);
    }
    exports.IsMousePosValid = IsMousePosValid;
    // IMGUI_API ImVec2        GetMousePos();                                                      // shortcut to ImGui::GetIO().MousePos provided by user, to be consistent with other calls
    function GetMousePos(out = new ImVec2()) {
        return bind.GetMousePos(out);
    }
    exports.GetMousePos = GetMousePos;
    // IMGUI_API ImVec2        GetMousePosOnOpeningCurrentPopup();                                 // retrieve backup of mouse positioning at the time of opening popup we have BeginPopup() into
    function GetMousePosOnOpeningCurrentPopup(out = new ImVec2()) {
        return bind.GetMousePosOnOpeningCurrentPopup(out);
    }
    exports.GetMousePosOnOpeningCurrentPopup = GetMousePosOnOpeningCurrentPopup;
    // IMGUI_API ImVec2        GetMouseDragDelta(int button = 0, float lock_threshold = -1.0f);    // dragging amount since clicking. if lock_threshold < -1.0f uses io.MouseDraggingThreshold
    function GetMouseDragDelta(button = 0, lock_threshold = -1.0, out = new ImVec2()) {
        return bind.GetMouseDragDelta(button, lock_threshold, out);
    }
    exports.GetMouseDragDelta = GetMouseDragDelta;
    // IMGUI_API void          ResetMouseDragDelta(int button = 0);                                //
    function ResetMouseDragDelta(button = 0) {
        bind.ResetMouseDragDelta(button);
    }
    exports.ResetMouseDragDelta = ResetMouseDragDelta;
    // IMGUI_API ImGuiMouseCursor GetMouseCursor();                                                // get desired cursor type, reset in ImGui::NewFrame(), this is updated during the frame. valid before Render(). If you use software rendering by setting io.MouseDrawCursor ImGui will render those for you
    function GetMouseCursor() { return bind.GetMouseCursor(); }
    exports.GetMouseCursor = GetMouseCursor;
    // IMGUI_API void          SetMouseCursor(ImGuiMouseCursor type);                              // set desired cursor type
    function SetMouseCursor(type) { bind.SetMouseCursor(type); }
    exports.SetMouseCursor = SetMouseCursor;
    // IMGUI_API void          CaptureKeyboardFromApp(bool capture = true);                        // manually override io.WantCaptureKeyboard flag next frame (said flag is entirely left for your application handle). e.g. force capture keyboard when your widget is being hovered.
    function CaptureKeyboardFromApp(capture = true) {
        return bind.CaptureKeyboardFromApp(capture);
    }
    exports.CaptureKeyboardFromApp = CaptureKeyboardFromApp;
    // IMGUI_API void          CaptureMouseFromApp(bool capture = true);                           // manually override io.WantCaptureMouse flag next frame (said flag is entirely left for your application handle).
    function CaptureMouseFromApp(capture = true) {
        bind.CaptureMouseFromApp(capture);
    }
    exports.CaptureMouseFromApp = CaptureMouseFromApp;
    // Clipboard Utilities (also see the LogToClipboard() function to capture or output text data to the clipboard)
    // IMGUI_API const char*   GetClipboardText();
    function GetClipboardText() { return bind.GetClipboardText(); }
    exports.GetClipboardText = GetClipboardText;
    // IMGUI_API void          SetClipboardText(const char* text);
    function SetClipboardText(text) { bind.SetClipboardText(text); }
    exports.SetClipboardText = SetClipboardText;
    // Settings/.Ini Utilities
    // The disk functions are automatically called if io.IniFilename != NULL (default is "imgui.ini").
    // Set io.IniFilename to NULL to load/save manually. Read io.WantSaveIniSettings description about handling .ini saving manually.
    // IMGUI_API void          LoadIniSettingsFromDisk(const char* ini_filename);                  // call after CreateContext() and before the first call to NewFrame(). NewFrame() automatically calls LoadIniSettingsFromDisk(io.IniFilename).
    function LoadIniSettingsFromDisk(ini_filename) { throw new Error(); } // TODO
    exports.LoadIniSettingsFromDisk = LoadIniSettingsFromDisk;
    // IMGUI_API void          LoadIniSettingsFromMemory(const char* ini_data, size_t ini_size=0); // call after CreateContext() and before the first call to NewFrame() to provide .ini data from your own data source.
    function LoadIniSettingsFromMemory(ini_data, ini_size = 0) { bind.LoadIniSettingsFromMemory(ini_data); }
    exports.LoadIniSettingsFromMemory = LoadIniSettingsFromMemory;
    // IMGUI_API void          SaveIniSettingsToDisk(const char* ini_filename);
    function SaveIniSettingsToDisk(ini_filename) { throw new Error(); } // TODO
    exports.SaveIniSettingsToDisk = SaveIniSettingsToDisk;
    // IMGUI_API const char*   SaveIniSettingsToMemory(size_t* out_ini_size = NULL);               // return a zero-terminated string with the .ini data which you can save by your own mean. call when io.WantSaveIniSettings is set, then save data by your own mean and clear io.WantSaveIniSettings.
    function SaveIniSettingsToMemory(out_ini_size = null) { return bind.SaveIniSettingsToMemory(); }
    exports.SaveIniSettingsToMemory = SaveIniSettingsToMemory;
    // Memory Utilities
    // All those functions are not reliant on the current context.
    // If you reload the contents of imgui.cpp at runtime, you may need to call SetCurrentContext() + SetAllocatorFunctions() again.
    // IMGUI_API void          SetAllocatorFunctions(void* (*alloc_func)(size_t sz, void* user_data), void(*free_func)(void* ptr, void* user_data), void* user_data = NULL);
    function SetAllocatorFunctions(alloc_func, free_func, user_data = null) {
        bind.SetAllocatorFunctions(alloc_func, free_func, user_data);
    }
    exports.SetAllocatorFunctions = SetAllocatorFunctions;
    // IMGUI_API void*         MemAlloc(size_t sz);
    function MemAlloc(sz) { bind.MemAlloc(sz); }
    exports.MemAlloc = MemAlloc;
    // IMGUI_API void          MemFree(void* ptr);
    function MemFree(ptr) { bind.MemFree(ptr); }
    exports.MemFree = MemFree;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbWd1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPQSxtREFBcUM7SUFDNUIsb0JBQUk7SUFFYixJQUFJLElBQWlCLENBQUM7SUFTYixvQkFBSTtJQVJiLG1CQUE4QixLQUE0Qjs7WUFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFrQixFQUFRLEVBQUU7b0JBQ2xELGVBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBUEQsNEJBT0M7SUFHRCxTQUFTLGFBQWEsQ0FBQyxHQUFvSztRQUN2TCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FBRTtRQUM5QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUFFLE9BQU8sQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFDO1NBQUU7UUFDcEQsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsS0FBNEIsRUFBRSxHQUFvSztRQUNyTixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsT0FBTztTQUFFO1FBQ3RELElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO1lBQUUsR0FBRyxDQUFDLEtBQUssQ0FB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