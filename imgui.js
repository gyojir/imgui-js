var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Bind from "./bind-imgui";
export { Bind };
let bind;
export default function (value) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            Bind.default(value).then((value) => {
                bind = value;
                resolve();
            });
        });
    });
}
export { bind };
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
import * as config from "./imconfig";
export const IMGUI_VERSION = "1.71"; // bind.IMGUI_VERSION;
export const IMGUI_VERSION_NUM = 17100; // bind.IMGUI_VERSION_NUM;
// #define IMGUI_CHECKVERSION()        ImGui::DebugCheckVersionAndDataLayout(IMGUI_VERSION, sizeof(ImGuiIO), sizeof(ImGuiStyle), sizeof(ImVec2), sizeof(ImVec4), sizeof(ImDrawVert))
export function IMGUI_CHECKVERSION() { return DebugCheckVersionAndDataLayout(IMGUI_VERSION, bind.ImGuiIOSize, bind.ImGuiStyleSize, bind.ImVec2Size, bind.ImVec4Size, bind.ImDrawVertSize, bind.ImDrawIdxSize); }
export function IM_ASSERT(_EXPR) { if (!_EXPR) {
    throw new Error();
} }
export function IM_ARRAYSIZE(_ARR) {
    if (_ARR instanceof ImStringBuffer) {
        return _ARR.size;
    }
    else {
        return _ARR.length;
    }
}
export class ImStringBuffer {
    constructor(size, buffer = "") {
        this.size = size;
        this.buffer = buffer;
    }
}
// Flags for ImGui::Begin()
export { ImGuiWindowFlags as WindowFlags };
export var ImGuiWindowFlags;
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
})(ImGuiWindowFlags || (ImGuiWindowFlags = {}));
// Flags for ImGui::InputText()
export { ImGuiInputTextFlags as InputTextFlags };
export var ImGuiInputTextFlags;
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
})(ImGuiInputTextFlags || (ImGuiInputTextFlags = {}));
// Flags for ImGui::TreeNodeEx(), ImGui::CollapsingHeader*()
export { ImGuiTreeNodeFlags as TreeNodeFlags };
export var ImGuiTreeNodeFlags;
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
})(ImGuiTreeNodeFlags || (ImGuiTreeNodeFlags = {}));
// Flags for ImGui::Selectable()
export { ImGuiSelectableFlags as SelectableFlags };
export var ImGuiSelectableFlags;
(function (ImGuiSelectableFlags) {
    ImGuiSelectableFlags[ImGuiSelectableFlags["None"] = 0] = "None";
    ImGuiSelectableFlags[ImGuiSelectableFlags["DontClosePopups"] = 1] = "DontClosePopups";
    ImGuiSelectableFlags[ImGuiSelectableFlags["SpanAllColumns"] = 2] = "SpanAllColumns";
    ImGuiSelectableFlags[ImGuiSelectableFlags["AllowDoubleClick"] = 4] = "AllowDoubleClick";
    ImGuiSelectableFlags[ImGuiSelectableFlags["Disabled"] = 8] = "Disabled"; // Cannot be selected, display greyed out text
})(ImGuiSelectableFlags || (ImGuiSelectableFlags = {}));
// Flags for ImGui::BeginCombo()
export { ImGuiComboFlags as ComboFlags };
export var ImGuiComboFlags;
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
})(ImGuiComboFlags || (ImGuiComboFlags = {}));
// Flags for ImGui::BeginTabBar()
export { ImGuiTabBarFlags as TabBarFlags };
export var ImGuiTabBarFlags;
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
})(ImGuiTabBarFlags || (ImGuiTabBarFlags = {}));
;
// Flags for ImGui::BeginTabItem()
export { ImGuiTabItemFlags as TabItemFlags };
export var ImGuiTabItemFlags;
(function (ImGuiTabItemFlags) {
    ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_None"] = 0] = "ImGuiTabItemFlags_None";
    ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_UnsavedDocument"] = 1] = "ImGuiTabItemFlags_UnsavedDocument";
    ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_SetSelected"] = 2] = "ImGuiTabItemFlags_SetSelected";
    ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_NoCloseWithMiddleMouseButton"] = 4] = "ImGuiTabItemFlags_NoCloseWithMiddleMouseButton";
    ImGuiTabItemFlags[ImGuiTabItemFlags["ImGuiTabItemFlags_NoPushId"] = 8] = "ImGuiTabItemFlags_NoPushId"; // Don't call PushID(tab->ID)/PopID() on BeginTabItem()/EndTabItem()
})(ImGuiTabItemFlags || (ImGuiTabItemFlags = {}));
;
// Flags for ImGui::IsWindowFocused()
export { ImGuiFocusedFlags as FocusedFlags };
export var ImGuiFocusedFlags;
(function (ImGuiFocusedFlags) {
    ImGuiFocusedFlags[ImGuiFocusedFlags["None"] = 0] = "None";
    ImGuiFocusedFlags[ImGuiFocusedFlags["ChildWindows"] = 1] = "ChildWindows";
    ImGuiFocusedFlags[ImGuiFocusedFlags["RootWindow"] = 2] = "RootWindow";
    ImGuiFocusedFlags[ImGuiFocusedFlags["AnyWindow"] = 4] = "AnyWindow";
    ImGuiFocusedFlags[ImGuiFocusedFlags["RootAndChildWindows"] = 3] = "RootAndChildWindows";
})(ImGuiFocusedFlags || (ImGuiFocusedFlags = {}));
// Flags for ImGui::IsItemHovered(), ImGui::IsWindowHovered()
export { ImGuiHoveredFlags as HoveredFlags };
export var ImGuiHoveredFlags;
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
})(ImGuiHoveredFlags || (ImGuiHoveredFlags = {}));
// Flags for ImGui::BeginDragDropSource(), ImGui::AcceptDragDropPayload()
export { ImGuiDragDropFlags as DragDropFlags };
export var ImGuiDragDropFlags;
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
})(ImGuiDragDropFlags || (ImGuiDragDropFlags = {}));
// Standard Drag and Drop payload types. You can define you own payload types using 12-characters long strings. Types starting with '_' are defined by Dear ImGui.
export const IMGUI_PAYLOAD_TYPE_COLOR_3F = "_COL3F"; // float[3]     // Standard type for colors, without alpha. User code may use this type.
export const IMGUI_PAYLOAD_TYPE_COLOR_4F = "_COL4F"; // float[4]     // Standard type for colors. User code may use this type.
// A primary data type
export { ImGuiDataType as DataType };
export var ImGuiDataType;
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
})(ImGuiDataType || (ImGuiDataType = {}));
// A cardinal direction
export { ImGuiDir as Dir };
export var ImGuiDir;
(function (ImGuiDir) {
    ImGuiDir[ImGuiDir["None"] = -1] = "None";
    ImGuiDir[ImGuiDir["Left"] = 0] = "Left";
    ImGuiDir[ImGuiDir["Right"] = 1] = "Right";
    ImGuiDir[ImGuiDir["Up"] = 2] = "Up";
    ImGuiDir[ImGuiDir["Down"] = 3] = "Down";
    ImGuiDir[ImGuiDir["COUNT"] = 4] = "COUNT";
})(ImGuiDir || (ImGuiDir = {}));
// User fill ImGuiIO.KeyMap[] array with indices into the ImGuiIO.KeysDown[512] array
export { ImGuiKey as Key };
export var ImGuiKey;
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
})(ImGuiKey || (ImGuiKey = {}));
// [BETA] Gamepad/Keyboard directional navigation
// Keyboard: Set io.ConfigFlags |= EnableKeyboard to enable. NewFrame() will automatically fill io.NavInputs[] based on your io.KeyDown[] + io.KeyMap[] arrays.
// Gamepad:  Set io.ConfigFlags |= EnableGamepad to enable. Fill the io.NavInputs[] fields before calling NewFrame(). Note that io.NavInputs[] is cleared by EndFrame().
// Read instructions in imgui.cpp for more details.
export { ImGuiNavInput as NavInput };
export var ImGuiNavInput;
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
})(ImGuiNavInput || (ImGuiNavInput = {}));
// [BETA] Gamepad/Keyboard directional navigation flags, stored in io.ConfigFlags
export { ImGuiConfigFlags as ConfigFlags };
export var ImGuiConfigFlags;
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
})(ImGuiConfigFlags || (ImGuiConfigFlags = {}));
// Enumeration for PushStyleColor() / PopStyleColor()
export { ImGuiCol as Col };
export var ImGuiCol;
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
})(ImGuiCol || (ImGuiCol = {}));
// Enumeration for PushStyleVar() / PopStyleVar() to temporarily modify the ImGuiStyle structure.
// NB: the enum only refers to fields of ImGuiStyle which makes sense to be pushed/popped inside UI code. During initialization, feel free to just poke into ImGuiStyle directly.
// NB: if changing this enum, you need to update the associated internal table GStyleVarInfo[] accordingly. This is where we link enum values to members offset/type.
export { ImGuiStyleVar as StyleVar };
export var ImGuiStyleVar;
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
})(ImGuiStyleVar || (ImGuiStyleVar = {}));
// Back-end capabilities flags stored in io.BackendFlags. Set by imgui_impl_xxx or custom back-end.
export { ImGuiBackendFlags as BackendFlags };
export var ImGuiBackendFlags;
(function (ImGuiBackendFlags) {
    ImGuiBackendFlags[ImGuiBackendFlags["None"] = 0] = "None";
    ImGuiBackendFlags[ImGuiBackendFlags["HasGamepad"] = 1] = "HasGamepad";
    ImGuiBackendFlags[ImGuiBackendFlags["HasMouseCursors"] = 2] = "HasMouseCursors";
    ImGuiBackendFlags[ImGuiBackendFlags["HasSetMousePos"] = 4] = "HasSetMousePos";
    ImGuiBackendFlags[ImGuiBackendFlags["RendererHasVtxOffset"] = 8] = "RendererHasVtxOffset";
})(ImGuiBackendFlags || (ImGuiBackendFlags = {}));
// Enumeration for ColorEdit3() / ColorEdit4() / ColorPicker3() / ColorPicker4() / ColorButton()
export { ImGuiColorEditFlags as ColorEditFlags };
export var ImGuiColorEditFlags;
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
})(ImGuiColorEditFlags || (ImGuiColorEditFlags = {}));
// Enumeration for GetMouseCursor()
export { ImGuiMouseCursor as MouseCursor };
export var ImGuiMouseCursor;
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
})(ImGuiMouseCursor || (ImGuiMouseCursor = {}));
// Condition for ImGui::SetWindow***(), SetNextWindow***(), SetNextTreeNode***() functions
// All those functions treat 0 as a shortcut to Always. From the point of view of the user use this as an enum (don't combine multiple values into flags).
export { ImGuiCond as Cond };
export var ImGuiCond;
(function (ImGuiCond) {
    ImGuiCond[ImGuiCond["Always"] = 1] = "Always";
    ImGuiCond[ImGuiCond["Once"] = 2] = "Once";
    ImGuiCond[ImGuiCond["FirstUseEver"] = 4] = "FirstUseEver";
    ImGuiCond[ImGuiCond["Appearing"] = 8] = "Appearing";
})(ImGuiCond || (ImGuiCond = {}));
export { ImDrawCornerFlags as wCornerFlags };
export var ImDrawCornerFlags;
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
})(ImDrawCornerFlags || (ImDrawCornerFlags = {}));
export { ImDrawListFlags as wListFlags };
export var ImDrawListFlags;
(function (ImDrawListFlags) {
    ImDrawListFlags[ImDrawListFlags["None"] = 0] = "None";
    ImDrawListFlags[ImDrawListFlags["AntiAliasedLines"] = 1] = "AntiAliasedLines";
    ImDrawListFlags[ImDrawListFlags["AntiAliasedFill"] = 2] = "AntiAliasedFill";
})(ImDrawListFlags || (ImDrawListFlags = {}));
export class ImVec2 {
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
ImVec2.ZERO = new ImVec2(0.0, 0.0);
ImVec2.UNIT = new ImVec2(1.0, 1.0);
ImVec2.UNIT_X = new ImVec2(1.0, 0.0);
ImVec2.UNIT_Y = new ImVec2(0.0, 1.0);
export class ImVec4 {
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
export class ImVector extends Array {
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
// Helper: Parse and apply text filters. In format "aaaaa[,bbbb][,ccccc]"
export class ImGuiTextFilter {
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
// Helper: Text buffer for logging/accumulating text
export class ImGuiTextBuffer {
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
// Helper: Simple Key->value storage
// Typically you don't have to worry about this since a storage is held within each Window.
// We use it to e.g. store collapse state for a tree (Int 0/1), store color edit options.
// This is optimized for efficient reading (dichotomy into a contiguous buffer), rare writing (typically tied to user interactions)
// You can use it as custom user storage for temporary values. Declare your own storage if, for example:
// - You want to manipulate the open/close state of a particular sub-tree in your interface (tree node uses Int 0/1 to store their state).
// - You want to store custom debug data easily without adding or editing structures in your code (probably not efficient, but convenient)
// Types are NOT stored, so it is up to you to make sure your Key don't collide with different types.
export class ImGuiStorage {
}
// Helpers macros to generate 32-bits encoded colors
export const IM_COL32_R_SHIFT = config.IMGUI_USE_BGRA_PACKED_COLOR ? 16 : 0;
export const IM_COL32_G_SHIFT = 8;
export const IM_COL32_B_SHIFT = config.IMGUI_USE_BGRA_PACKED_COLOR ? 0 : 16;
export const IM_COL32_A_SHIFT = 24;
export const IM_COL32_A_MASK = 0xFF000000;
export function IM_COL32(R, G, B, A = 255) {
    return ((A << IM_COL32_A_SHIFT) | (B << IM_COL32_B_SHIFT) | (G << IM_COL32_G_SHIFT) | (R << IM_COL32_R_SHIFT)) >>> 0;
}
export const IM_COL32_WHITE = IM_COL32(255, 255, 255, 255); // Opaque white = 0xFFFFFFFF
export const IM_COL32_BLACK = IM_COL32(0, 0, 0, 255); // Opaque black
export const IM_COL32_BLACK_TRANS = IM_COL32(0, 0, 0, 0); // Transparent black = 0x00000000
// ImColor() helper to implicity converts colors to either ImU32 (packed 4x1 byte) or ImVec4 (4x1 float)
// Prefer using IM_COL32() macros if you want a guaranteed compile-time ImU32 for usage with ImDrawList API.
// **Avoid storing ImColor! Store either u32 of ImVec4. This is not a full-featured color class. MAY OBSOLETE.
// **None of the ImGui API are using ImColor directly but you can use it as a convenience to pass colors in either ImU32 or ImVec4 formats. Explicitly cast to ImU32 or ImVec4 if needed.
export class ImColor {
    constructor(r = 0.0, g = 0.0, b = 0.0, a = 1.0) {
        // ImVec4              Value;
        this.Value = new ImVec4();
        if (typeof (r) === "number") {
            if (r > 255 && g === 0.0 && b === 0.0 && a === 1.0) {
                this.Value.x = Math.max(0.0, Math.min(1.0, ((r >> IM_COL32_R_SHIFT) & 0xFF) / 255));
                this.Value.y = Math.max(0.0, Math.min(1.0, ((r >> IM_COL32_G_SHIFT) & 0xFF) / 255));
                this.Value.z = Math.max(0.0, Math.min(1.0, ((r >> IM_COL32_B_SHIFT) & 0xFF) / 255));
                this.Value.w = Math.max(0.0, Math.min(1.0, ((r >> IM_COL32_A_SHIFT) & 0xFF) / 255));
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
export const ImGuiInputTextDefaultSize = 128;
// Shared state of InputText(), passed to callback when a ImGuiInputTextFlags_Callback* flag is used and the corresponding callback is triggered.
export class ImGuiInputTextCallbackData {
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
// Resizing callback data to apply custom constraint. As enabled by SetNextWindowSizeConstraints(). Callback is called during the next Begin().
// NB: For basic min/max size constraint on each axis you don't need to use the callback! The SetNextWindowSizeConstraints() parameters are enough.
export class ImGuiSizeCallbackData {
    constructor(native, UserData) {
        this.native = native;
        this.UserData = UserData;
    }
    get Pos() { return this.native.Pos; }
    get CurrentSize() { return this.native.CurrentSize; }
    get DesiredSize() { return this.native.DesiredSize; }
}
export class ImGuiListClipper {
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
// Special Draw callback value to request renderer back-end to reset the graphics/render state.
// The renderer back-end needs to handle this special value, otherwise it will crash trying to call a function at this address.
// This is useful for example if you submitted callbacks which you know have altered the render state and you want it to be restored.
// It is not done by default because they are many perfectly useful way of altering render state for imgui contents (e.g. changing shader/blending settings before an Image call).
export const ImDrawCallback_ResetRenderState = -1;
// Typically, 1 command = 1 GPU draw call (unless command is a callback)
// Pre 1.71 back-ends will typically ignore the VtxOffset/IdxOffset fields. When 'io.BackendFlags & ImGuiBackendFlags_RendererHasVtxOffset'
// is enabled, those fields allow us to render meshes larger than 64K vertices while keeping 16-bits indices.
export class ImDrawCmd {
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
// Vertex index 
// (to allow large meshes with 16-bits indices: set 'io.BackendFlags |= ImGuiBackendFlags_RendererHasVtxOffset' and handle ImDrawCmd::VtxOffset in the renderer back-end)
// (to use 32-bits indices: override with '#define ImDrawIdx unsigned int' in imconfig.h)
// #ifndef ImDrawIdx
// typedef unsigned short ImDrawIdx;
// #endif
export const ImDrawIdxSize = 2; // bind.ImDrawIdxSize;
// Vertex layout
// #ifndef IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT
export const ImDrawVertSize = 20; // bind.ImDrawVertSize;
export const ImDrawVertPosOffset = 0; // bind.ImDrawVertPosOffset;
export const ImDrawVertUVOffset = 8; // bind.ImDrawVertUVOffset;
export const ImDrawVertColOffset = 16; // bind.ImDrawVertColOffset;
export class ImDrawVert {
    constructor(buffer, byteOffset = 0) {
        this.pos = new Float32Array(buffer, byteOffset + bind.ImDrawVertPosOffset, 2);
        this.uv = new Float32Array(buffer, byteOffset + bind.ImDrawVertUVOffset, 2);
        this.col = new Uint32Array(buffer, byteOffset + bind.ImDrawVertColOffset, 1);
    }
}
// #else
// You can override the vertex format layout by defining IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT in imconfig.h
// The code expect ImVec2 pos (8 bytes), ImVec2 uv (8 bytes), ImU32 col (4 bytes), but you can re-order them or add other fields as needed to simplify integration in your engine.
// The type has to be described within the macro (you can either declare the struct or use a typedef)
// NOTE: IMGUI DOESN'T CLEAR THE STRUCTURE AND DOESN'T CALL A CONSTRUCTOR SO ANY CUSTOM FIELD WILL BE UNINITIALIZED. IF YOU ADD EXTRA FIELDS (SUCH AS A 'Z' COORDINATES) YOU WILL NEED TO CLEAR THEM DURING RENDER OR TO IGNORE THEM.
// IMGUI_OVERRIDE_DRAWVERT_STRUCT_LAYOUT;
// #endif
// Draw channels are used by the Columns API to "split" the render list into different channels while building, so items of each column can be batched together.
// You can also use them to simulate drawing layers and submit primitives in a different order than how they will be rendered.
export class ImDrawChannel {
}
export class ImDrawListSharedData {
    constructor(native) {
        this.native = native;
    }
}
// Draw command list
// This is the low-level list of polygons that ImGui functions are filling. At the end of the frame, all command lists are passed to your ImGuiIO::RenderDrawListFn function for rendering.
// Each ImGui window contains its own ImDrawList. You can use ImGui::GetWindowDrawList() to access the current window draw list and draw custom primitives.
// You can interleave normal ImGui:: calls and adding primitives to the current draw list.
// All positions are generally in pixel coordinates (top-left at (0,0), bottom-right at io.DisplaySize), however you are totally free to apply whatever transformation matrix to want to the data (if you apply such transformation you'll want to apply it to ClipRect as well)
// Important: Primitives are always added to the list and not culled (culling is done at higher-level by ImGui:: functions), if you use this API a lot consider coarse culling your drawn objects.
export class ImDrawList {
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
// All draw data to render an ImGui frame
export class ImDrawData {
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
export class script_ImFontConfig {
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
export class ImFontConfig {
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
// struct ImFontGlyph
export class script_ImFontGlyph {
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
export class ImFontGlyph {
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
export var ImFontAtlasFlags;
(function (ImFontAtlasFlags) {
    ImFontAtlasFlags[ImFontAtlasFlags["None"] = 0] = "None";
    ImFontAtlasFlags[ImFontAtlasFlags["NoPowerOfTwoHeight"] = 1] = "NoPowerOfTwoHeight";
    ImFontAtlasFlags[ImFontAtlasFlags["NoMouseCursors"] = 2] = "NoMouseCursors";
})(ImFontAtlasFlags || (ImFontAtlasFlags = {}));
// Load and rasterize multiple TTF/OTF fonts into a same texture.
// Sharing a texture for multiple fonts allows us to reduce the number of draw calls during rendering.
// We also add custom graphic data into the texture that serves for ImGui.
//  1. (Optional) Call AddFont*** functions. If you don't call any, the default font will be loaded for you.
//  2. Call GetTexDataAsAlpha8() or GetTexDataAsRGBA32() to build and retrieve pixels data.
//  3. Upload the pixels data into a texture within your graphics system.
//  4. Call SetTexID(my_tex_id); and pass the pointer/identifier to your texture. This value will be passed back to you during rendering to identify the texture.
// IMPORTANT: If you pass a 'glyph_ranges' array to AddFont*** functions, you need to make sure that your array persist up until the ImFont is build (when calling GetTextData*** or Build()). We only copy the pointer, not the data.
export class ImFontAtlas {
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
// Font runtime data and rendering
// ImFontAtlas automatically loads a default embedded font for you when you call GetTexDataAsAlpha8() or GetTexDataAsRGBA32().
export class ImFont {
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
export class ImGuiStyle {
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
// This is where your app communicate with Dear ImGui. Access via ImGui::GetIO().
// Read 'Programmer guide' section in .cpp file for general usage.
export class ImGuiIO {
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
// Context creation and access, if you want to use multiple context, share context between modules (e.g. DLL).
// All contexts share a same ImFontAtlas by default. If you want different font atlas, you can new() them and overwrite the GetIO().Fonts variable of an ImGui context.
// All those functions are not reliant on the current context.
export class ImGuiContext {
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
ImGuiContext.current_ctx = null;
// IMGUI_API ImGuiContext* CreateContext(ImFontAtlas* shared_font_atlas = NULL);
export function CreateContext(shared_font_atlas = null) {
    const ctx = new ImGuiContext(bind.CreateContext());
    if (ImGuiContext.current_ctx === null) {
        ImGuiContext.current_ctx = ctx;
    }
    return ctx;
}
// IMGUI_API void          DestroyContext(ImGuiContext* ctx = NULL);   // NULL = Destroy current context
export function DestroyContext(ctx = null) {
    if (ctx === null) {
        ctx = ImGuiContext.current_ctx;
        ImGuiContext.current_ctx = null;
    }
    bind.DestroyContext((ctx === null) ? null : ctx.native);
}
// IMGUI_API ImGuiContext* GetCurrentContext();
export function GetCurrentContext() {
    // const ctx_native: BindImGui.ImGuiContext | null = bind.GetCurrentContext();
    return ImGuiContext.current_ctx;
}
// IMGUI_API void          SetCurrentContext(ImGuiContext* ctx);
export function SetCurrentContext(ctx) {
    bind.SetCurrentContext((ctx === null) ? null : ctx.native);
    ImGuiContext.current_ctx = ctx;
}
// IMGUI_API bool          DebugCheckVersionAndDataLayout(const char* version_str, size_t sz_io, size_t sz_style, size_t sz_vec2, size_t sz_vec4, size_t sz_drawvert);
export function DebugCheckVersionAndDataLayout(version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_draw_vert, sz_draw_idx) {
    return bind.DebugCheckVersionAndDataLayout(version_str, sz_io, sz_style, sz_vec2, sz_vec4, sz_draw_vert, sz_draw_idx);
}
// Main
// IMGUI_API ImGuiIO&      GetIO();
export function GetIO() { return new ImGuiIO(bind.GetIO()); }
// IMGUI_API ImGuiStyle&   GetStyle();
export function GetStyle() { return new ImGuiStyle(bind.GetStyle()); }
// IMGUI_API void          NewFrame();                                 // start a new ImGui frame, you can submit any command from this point until Render()/EndFrame().
export function NewFrame() { bind.NewFrame(); }
// IMGUI_API void          EndFrame();                                 // ends the ImGui frame. automatically called by Render(), so most likely don't need to ever call that yourself directly. If you don't need to render you may call EndFrame() but you'll have wasted CPU already. If you don't need to render, better to not create any imgui windows instead!
export function EndFrame() { bind.EndFrame(); }
// IMGUI_API void          Render();                                   // ends the ImGui frame, finalize the draw data, then call your io.RenderDrawListsFn() function if set.
export function Render() { bind.Render(); }
// IMGUI_API ImDrawData*   GetDrawData();                              // same value as passed to your io.RenderDrawListsFn() function. valid after Render() and until the next call to NewFrame()
export function GetDrawData() {
    const draw_data = bind.GetDrawData();
    return (draw_data === null) ? null : new ImDrawData(draw_data);
}
// Demo, Debug, Informations
// IMGUI_API void          ShowDemoWindow(bool* p_open = NULL);        // create demo/test window (previously called ShowTestWindow). demonstrate most ImGui features. call this to learn about the library! try to make it always available in your application!
export function ShowDemoWindow(p_open = null) { bind.ShowDemoWindow(p_open); }
// IMGUI_API void          ShowAboutWindow(bool* p_open = NULL);       // create about window. display Dear ImGui version, credits and build/system information.
export function ShowAboutWindow(p_open = null) {
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
// IMGUI_API void          ShowMetricsWindow(bool* p_open = NULL);     // create metrics window. display ImGui internals: draw commands (with individual draw calls and vertices), window list, basic internal state, etc.
export function ShowMetricsWindow(p_open = null) {
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
// IMGUI_API void          ShowStyleEditor(ImGuiStyle* ref = NULL);    // add style editor block (not a window). you can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it uses the default style)
export function ShowStyleEditor(ref = null) {
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
// IMGUI_API bool          ShowStyleSelector(const char* label);
export function ShowStyleSelector(label) { return bind.ShowStyleSelector(label); }
// IMGUI_API void          ShowFontSelector(const char* label);
export function ShowFontSelector(label) { bind.ShowFontSelector(label); }
// IMGUI_API void          ShowUserGuide();                            // add basic help/info block (not a window): how to manipulate ImGui as a end-user (mouse/keyboard controls).
export function ShowUserGuide() { bind.ShowUserGuide(); }
// IMGUI_API const char*   GetVersion();
export function GetVersion() { return bind.GetVersion(); }
// Styles
// IMGUI_API void          StyleColorsClassic(ImGuiStyle* dst = NULL);
export function StyleColorsClassic(dst = null) {
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
// IMGUI_API void          StyleColorsDark(ImGuiStyle* dst = NULL);
export function StyleColorsDark(dst = null) {
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
// IMGUI_API void          StyleColorsLight(ImGuiStyle* dst = NULL);
export function StyleColorsLight(dst = null) {
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
// Window
// IMGUI_API bool          Begin(const char* name, bool* p_open = NULL, ImGuiWindowFlags flags = 0);                                                   // push window to the stack and start appending to it. see .cpp for details. return false when window is collapsed, so you can early out in your code. 'bool* p_open' creates a widget on the upper-right to close the window (which sets your bool to false).
export function Begin(name, open = null, flags = 0) {
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
// IMGUI_API void          End();                                                                                                                      // finish appending to current window, pop it off the window stack.
export function End() { bind.End(); }
// IMGUI_API bool          BeginChild(const char* str_id, const ImVec2& size = ImVec2(0,0), bool border = false, ImGuiWindowFlags extra_flags = 0);    // begin a scrolling region. size==0.0f: use remaining window size, size<0.0f: use remaining window size minus abs(size). size>0.0f: fixed size. each axis can use a different mode, e.g. ImVec2(0,400).
// IMGUI_API bool          BeginChild(ImGuiID id, const ImVec2& size = ImVec2(0,0), bool border = false, ImGuiWindowFlags extra_flags = 0);            // "
export function BeginChild(id, size = ImVec2.ZERO, border = false, extra_flags = 0) {
    return bind.BeginChild(id, size, border, extra_flags);
}
// IMGUI_API void          EndChild();
export function EndChild() { bind.EndChild(); }
// IMGUI_API ImVec2        GetContentRegionMax();                                              // current content boundaries (typically window boundaries including scrolling, or current column boundaries), in windows coordinates
export function GetContentRegionMax(out = new ImVec2()) {
    return bind.GetContentRegionMax(out);
}
// IMGUI_API ImVec2        GetContentRegionAvail();                                            // == GetContentRegionMax() - GetCursorPos()
export function GetContentRegionAvail(out = new ImVec2()) {
    return bind.GetContentRegionAvail(out);
}
// IMGUI_API ImVec2        GetWindowContentRegionMin();                                        // content boundaries min (roughly (0,0)-Scroll), in window coordinates
export function GetWindowContentRegionMin(out = new ImVec2()) {
    return bind.GetWindowContentRegionMin(out);
}
// IMGUI_API ImVec2        GetWindowContentRegionMax();                                        // content boundaries max (roughly (0,0)+Size-Scroll) where Size can be override with SetNextWindowContentSize(), in window coordinates
export function GetWindowContentRegionMax(out = new ImVec2()) {
    return bind.GetWindowContentRegionMax(out);
}
// IMGUI_API float         GetWindowContentRegionWidth();                                      //
export function GetWindowContentRegionWidth() { return bind.GetWindowContentRegionWidth(); }
// IMGUI_API ImDrawList*   GetWindowDrawList();                                                // get rendering command-list if you want to append your own draw primitives
export function GetWindowDrawList() {
    return new ImDrawList(bind.GetWindowDrawList());
}
// IMGUI_API ImVec2        GetWindowPos();                                                     // get current window position in screen space (useful if you want to do your own drawing via the DrawList api)
export function GetWindowPos(out = new ImVec2()) {
    return bind.GetWindowPos(out);
}
// IMGUI_API ImVec2        GetWindowSize();                                                    // get current window size
export function GetWindowSize(out = new ImVec2()) {
    return bind.GetWindowSize(out);
}
// IMGUI_API float         GetWindowWidth();
export function GetWindowWidth() { return bind.GetWindowWidth(); }
// IMGUI_API float         GetWindowHeight();
export function GetWindowHeight() { return bind.GetWindowHeight(); }
// IMGUI_API bool          IsWindowCollapsed();
export function IsWindowCollapsed() { return bind.IsWindowCollapsed(); }
// IMGUI_API bool          IsWindowAppearing();
export function IsWindowAppearing() { return bind.IsWindowAppearing(); }
// IMGUI_API void          SetWindowFontScale(float scale);                                    // per-window font scale. Adjust IO.FontGlobalScale if you want to scale all windows
export function SetWindowFontScale(scale) { bind.SetWindowFontScale(scale); }
// IMGUI_API void          SetNextWindowPos(const ImVec2& pos, ImGuiCond cond = 0, const ImVec2& pivot = ImVec2(0,0)); // set next window position. call before Begin(). use pivot=(0.5f,0.5f) to center on given point, etc.
export function SetNextWindowPos(pos, cond = 0, pivot = ImVec2.ZERO) {
    bind.SetNextWindowPos(pos, cond, pivot);
}
// IMGUI_API void          SetNextWindowSize(const ImVec2& size, ImGuiCond cond = 0);          // set next window size. set axis to 0.0f to force an auto-fit on this axis. call before Begin()
export function SetNextWindowSize(pos, cond = 0) {
    bind.SetNextWindowSize(pos, cond);
}
// IMGUI_API void          SetNextWindowSizeConstraints(const ImVec2& size_min, const ImVec2& size_max, ImGuiSizeConstraintCallback custom_callback = NULL, void* custom_callback_data = NULL); // set next window size limits. use -1,-1 on either X/Y axis to preserve the current size. Use callback to apply non-trivial programmatic constraints.
export function SetNextWindowSizeConstraints(size_min, size_max, custom_callback = null, custom_callback_data = null) {
    if (custom_callback) {
        bind.SetNextWindowSizeConstraints(size_min, size_max, (data) => {
            custom_callback(new ImGuiSizeCallbackData(data, custom_callback_data));
        }, null);
    }
    else {
        bind.SetNextWindowSizeConstraints(size_min, size_max, null, null);
    }
}
// IMGUI_API void          SetNextWindowContentSize(const ImVec2& size);                       // set next window content size (~ enforce the range of scrollbars). not including window decorations (title bar, menu bar, etc.). set an axis to 0.0f to leave it automatic. call before Begin()
export function SetNextWindowContentSize(size) {
    bind.SetNextWindowContentSize(size);
}
// IMGUI_API void          SetNextWindowCollapsed(bool collapsed, ImGuiCond cond = 0);         // set next window collapsed state. call before Begin()
export function SetNextWindowCollapsed(collapsed, cond = 0) {
    bind.SetNextWindowCollapsed(collapsed, cond);
}
// IMGUI_API void          SetNextWindowFocus();                                               // set next window to be focused / front-most. call before Begin()
export function SetNextWindowFocus() { bind.SetNextWindowFocus(); }
// IMGUI_API void          SetNextWindowBgAlpha(float alpha);                                  // set next window background color alpha. helper to easily modify ImGuiCol_WindowBg/ChildBg/PopupBg.
export function SetNextWindowBgAlpha(alpha) { bind.SetNextWindowBgAlpha(alpha); }
// IMGUI_API void          SetWindowPos(const ImVec2& pos, ImGuiCond cond = 0);                // (not recommended) set current window position - call within Begin()/End(). prefer using SetNextWindowPos(), as this may incur tearing and side-effects.
// IMGUI_API void          SetWindowSize(const ImVec2& size, ImGuiCond cond = 0);              // (not recommended) set current window size - call within Begin()/End(). set to ImVec2(0,0) to force an auto-fit. prefer using SetNextWindowSize(), as this may incur tearing and minor side-effects.
// IMGUI_API void          SetWindowCollapsed(bool collapsed, ImGuiCond cond = 0);             // (not recommended) set current window collapsed state. prefer using SetNextWindowCollapsed().
// IMGUI_API void          SetWindowFocus();                                                   // (not recommended) set current window to be focused / front-most. prefer using SetNextWindowFocus().
// IMGUI_API void          SetWindowPos(const char* name, const ImVec2& pos, ImGuiCond cond = 0);      // set named window position.
// IMGUI_API void          SetWindowSize(const char* name, const ImVec2& size, ImGuiCond cond = 0);    // set named window size. set axis to 0.0f to force an auto-fit on this axis.
// IMGUI_API void          SetWindowCollapsed(const char* name, bool collapsed, ImGuiCond cond = 0);   // set named window collapsed state
// IMGUI_API void          SetWindowFocus(const char* name);                                           // set named window to be focused / front-most. use NULL to remove focus.
export function SetWindowPos(name_or_pos, pos_or_cond = 0, cond = 0) {
    if (typeof (name_or_pos) === "string") {
        bind.SetWindowNamePos(name_or_pos, pos_or_cond, cond);
        return;
    }
    else {
        bind.SetWindowPos(name_or_pos, pos_or_cond);
    }
}
export function SetWindowSize(name_or_size, size_or_cond = 0, cond = 0) {
    if (typeof (name_or_size) === "string") {
        bind.SetWindowNamePos(name_or_size, size_or_cond, cond);
    }
    else {
        bind.SetWindowSize(name_or_size, size_or_cond);
    }
}
export function SetWindowCollapsed(name_or_collapsed, collapsed_or_cond = 0, cond = 0) {
    if (typeof (name_or_collapsed) === "string") {
        bind.SetWindowNameCollapsed(name_or_collapsed, collapsed_or_cond, cond);
    }
    else {
        bind.SetWindowCollapsed(name_or_collapsed, collapsed_or_cond);
    }
}
export function SetWindowFocus(name) {
    if (typeof (name) === "string") {
        bind.SetWindowNameFocus(name);
    }
    else {
        bind.SetWindowFocus();
    }
}
// IMGUI_API float         GetScrollX();                                                       // get scrolling amount [0..GetScrollMaxX()]
export function GetScrollX() { return bind.GetScrollX(); }
// IMGUI_API float         GetScrollY();                                                       // get scrolling amount [0..GetScrollMaxY()]
export function GetScrollY() { return bind.GetScrollY(); }
// IMGUI_API float         GetScrollMaxX();                                                    // get maximum scrolling amount ~~ ContentSize.X - WindowSize.X
export function GetScrollMaxX() { return bind.GetScrollMaxX(); }
// IMGUI_API float         GetScrollMaxY();                                                    // get maximum scrolling amount ~~ ContentSize.Y - WindowSize.Y
export function GetScrollMaxY() { return bind.GetScrollMaxY(); }
// IMGUI_API void          SetScrollX(float scroll_x);                                         // set scrolling amount [0..GetScrollMaxX()]
export function SetScrollX(scroll_x) { bind.SetScrollX(scroll_x); }
// IMGUI_API void          SetScrollY(float scroll_y);                                         // set scrolling amount [0..GetScrollMaxY()]
export function SetScrollY(scroll_y) { bind.SetScrollY(scroll_y); }
// IMGUI_API void          SetScrollHereY(float center_y_ratio = 0.5f);                         // adjust scrolling amount to make current cursor position visible. center_y_ratio=0.0: top, 0.5: center, 1.0: bottom. When using to make a "default/current item" visible, consider using SetItemDefaultFocus() instead.
export function SetScrollHereY(center_y_ratio = 0.5) {
    bind.SetScrollHereY(center_y_ratio);
}
// IMGUI_API void          SetScrollFromPosY(float pos_y, float center_y_ratio = 0.5f);        // adjust scrolling amount to make given position valid. use GetCursorPos() or GetCursorStartPos()+offset to get valid positions.
export function SetScrollFromPosY(pos_y, center_y_ratio = 0.5) {
    bind.SetScrollFromPosY(pos_y, center_y_ratio);
}
// IMGUI_API void          SetStateStorage(ImGuiStorage* tree);                                // replace tree state storage with our own (if you want to manipulate it yourself, typically clear subsection of it)
// IMGUI_API ImGuiStorage* GetStateStorage();
// Parameters stacks (shared)
// IMGUI_API void          PushFont(ImFont* font);                                             // use NULL as a shortcut to push default font
export function PushFont(font) { bind.PushFont(font ? font.native : null); }
// IMGUI_API void          PopFont();
export function PopFont() { bind.PopFont(); }
// IMGUI_API void          PushStyleColor(ImGuiCol idx, ImU32 col);
// IMGUI_API void          PushStyleColor(ImGuiCol idx, const ImVec4& col);
export function PushStyleColor(idx, col) {
    if (col instanceof ImColor) {
        bind.PushStyleColor(idx, col.Value);
    }
    else {
        bind.PushStyleColor(idx, col);
    }
}
// IMGUI_API void          PopStyleColor(int count = 1);
export function PopStyleColor(count = 1) {
    bind.PopStyleColor(count);
}
// IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, float val);
// IMGUI_API void          PushStyleVar(ImGuiStyleVar idx, const ImVec2& val);
export function PushStyleVar(idx, val) {
    bind.PushStyleVar(idx, val);
}
// IMGUI_API void          PopStyleVar(int count = 1);
export function PopStyleVar(count = 1) {
    bind.PopStyleVar(count);
}
// IMGUI_API const ImVec4& GetStyleColorVec4(ImGuiCol idx);                                    // retrieve style color as stored in ImGuiStyle structure. use to feed back into PushStyleColor(), otherwhise use GetColorU32() to get style color + style alpha.
export function GetStyleColorVec4(idx) {
    return bind.GetStyleColorVec4(idx);
}
// IMGUI_API ImFont*       GetFont();                                                          // get current font
export function GetFont() {
    return new ImFont(bind.GetFont());
}
// IMGUI_API float         GetFontSize();                                                      // get current font size (= height in pixels) of current font with current scale applied
export function GetFontSize() { return bind.GetFontSize(); }
// IMGUI_API ImVec2        GetFontTexUvWhitePixel();                                           // get UV coordinate for a while pixel, useful to draw custom shapes via the ImDrawList API
export function GetFontTexUvWhitePixel(out = new ImVec2()) {
    return bind.GetFontTexUvWhitePixel(out);
}
export function GetColorU32(...args) {
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
// Parameters stacks (current window)
// IMGUI_API void          PushItemWidth(float item_width);                                    // width of items for the common item+label case, pixels. 0.0f = default to ~2/3 of windows width, >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -1.0f always align width to the right side)
export function PushItemWidth(item_width) { bind.PushItemWidth(item_width); }
// IMGUI_API void          PopItemWidth();
export function PopItemWidth() { bind.PopItemWidth(); }
// IMGUI_API float         CalcItemWidth();                                                    // width of item given pushed settings and current cursor position
export function SetNextItemWidth(item_width) { bind.SetNextItemWidth(item_width); } // set width of the _next_ common large "item+label" widget. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -1.0f always align width to the right side)
export function CalcItemWidth() { return bind.CalcItemWidth(); }
// IMGUI_API void          PushTextWrapPos(float wrap_pos_x = 0.0f);                           // word-wrapping for Text*() commands. < 0.0f: no wrapping; 0.0f: wrap to end of window (or column); > 0.0f: wrap at 'wrap_pos_x' position in window local space
export function PushTextWrapPos(wrap_pos_x = 0.0) {
    bind.PushTextWrapPos(wrap_pos_x);
}
// IMGUI_API void          PopTextWrapPos();
export function PopTextWrapPos() { bind.PopTextWrapPos(); }
// IMGUI_API void          PushAllowKeyboardFocus(bool allow_keyboard_focus);                  // allow focusing using TAB/Shift-TAB, enabled by default but you can disable it for certain widgets
export function PushAllowKeyboardFocus(allow_keyboard_focus) { bind.PushAllowKeyboardFocus(allow_keyboard_focus); }
// IMGUI_API void          PopAllowKeyboardFocus();
export function PopAllowKeyboardFocus() { bind.PopAllowKeyboardFocus(); }
// IMGUI_API void          PushButtonRepeat(bool repeat);                                      // in 'repeat' mode, Button*() functions return repeated true in a typematic manner (using io.KeyRepeatDelay/io.KeyRepeatRate setting). Note that you can call IsItemActive() after any Button() to tell if the button is held in the current frame.
export function PushButtonRepeat(repeat) { bind.PushButtonRepeat(repeat); }
// IMGUI_API void          PopButtonRepeat();
export function PopButtonRepeat() { bind.PopButtonRepeat(); }
// Cursor / Layout
// IMGUI_API void          Separator();                                                        // separator, generally horizontal. inside a menu bar or in horizontal layout mode, this becomes a vertical separator.
export function Separator() { bind.Separator(); }
// IMGUI_API void          SameLine(float pos_x = 0.0f, float spacing_w = -1.0f);              // call between widgets or groups to layout them horizontally
export function SameLine(pos_x = 0.0, spacing_w = -1.0) {
    bind.SameLine(pos_x, spacing_w);
}
// IMGUI_API void          NewLine();                                                          // undo a SameLine()
export function NewLine() { bind.NewLine(); }
// IMGUI_API void          Spacing();                                                          // add vertical spacing
export function Spacing() { bind.Spacing(); }
// IMGUI_API void          Dummy(const ImVec2& size);                                          // add a dummy item of given size
export function Dummy(size) { bind.Dummy(size); }
// IMGUI_API void          Indent(float indent_w = 0.0f);                                      // move content position toward the right, by style.IndentSpacing or indent_w if != 0
export function Indent(indent_w = 0.0) { bind.Indent(indent_w); }
// IMGUI_API void          Unindent(float indent_w = 0.0f);                                    // move content position back to the left, by style.IndentSpacing or indent_w if != 0
export function Unindent(indent_w = 0.0) { bind.Unindent(indent_w); }
// IMGUI_API void          BeginGroup();                                                       // lock horizontal starting position + capture group bounding box into one "item" (so you can use IsItemHovered() or layout primitives such as SameLine() on whole group, etc.)
export function BeginGroup() { bind.BeginGroup(); }
// IMGUI_API void          EndGroup();
export function EndGroup() { bind.EndGroup(); }
// IMGUI_API ImVec2        GetCursorPos();                                                     // cursor position is relative to window position
export function GetCursorPos(out = new ImVec2()) { return bind.GetCursorPos(out); }
// IMGUI_API float         GetCursorPosX();                                                    // "
export function GetCursorPosX() { return bind.GetCursorPosX(); }
// IMGUI_API float         GetCursorPosY();                                                    // "
export function GetCursorPosY() { return bind.GetCursorPosY(); }
// IMGUI_API void          SetCursorPos(const ImVec2& local_pos);                              // "
export function SetCursorPos(local_pos) { bind.SetCursorPos(local_pos); }
// IMGUI_API void          SetCursorPosX(float x);                                             // "
export function SetCursorPosX(x) { bind.SetCursorPosX(x); }
// IMGUI_API void          SetCursorPosY(float y);                                             // "
export function SetCursorPosY(y) { bind.SetCursorPosY(y); }
// IMGUI_API ImVec2        GetCursorStartPos();                                                // initial cursor position
export function GetCursorStartPos(out = new ImVec2()) { return bind.GetCursorStartPos(out); }
// IMGUI_API ImVec2        GetCursorScreenPos();                                               // cursor position in absolute screen coordinates [0..io.DisplaySize] (useful to work with ImDrawList API)
export function GetCursorScreenPos(out = new ImVec2()) { return bind.GetCursorScreenPos(out); }
// IMGUI_API void          SetCursorScreenPos(const ImVec2& pos);                              // cursor position in absolute screen coordinates [0..io.DisplaySize]
export function SetCursorScreenPos(pos) { bind.SetCursorScreenPos(pos); }
// IMGUI_API void          AlignTextToFramePadding();                                          // vertically align/lower upcoming text to FramePadding.y so that it will aligns to upcoming widgets (call if you have text on a line before regular widgets)
export function AlignTextToFramePadding() { bind.AlignTextToFramePadding(); }
// IMGUI_API float         GetTextLineHeight();                                                // ~ FontSize
export function GetTextLineHeight() { return bind.GetTextLineHeight(); }
// IMGUI_API float         GetTextLineHeightWithSpacing();                                     // ~ FontSize + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of text)
export function GetTextLineHeightWithSpacing() { return bind.GetTextLineHeightWithSpacing(); }
// IMGUI_API float         GetFrameHeight();                                                   // ~ FontSize + style.FramePadding.y * 2
export function GetFrameHeight() { return bind.GetFrameHeight(); }
// IMGUI_API float         GetFrameHeightWithSpacing();                                        // ~ FontSize + style.FramePadding.y * 2 + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of framed widgets)
export function GetFrameHeightWithSpacing() { return bind.GetFrameHeightWithSpacing(); }
// Columns
// You can also use SameLine(pos_x) for simplified columns. The columns API is still work-in-progress and rather lacking.
// IMGUI_API void          Columns(int count = 1, const char* id = NULL, bool border = true);
export function Columns(count = 1, id = null, border = true) {
    id = id || "";
    bind.Columns(count, id, border);
}
// IMGUI_API void          NextColumn();                                                       // next column, defaults to current row or next row if the current row is finished
export function NextColumn() { bind.NextColumn(); }
// IMGUI_API int           GetColumnIndex();                                                   // get current column index
export function GetColumnIndex() { return bind.GetColumnIndex(); }
// IMGUI_API float         GetColumnWidth(int column_index = -1);                              // get column width (in pixels). pass -1 to use current column
export function GetColumnWidth(column_index = -1) {
    return bind.GetColumnWidth(column_index);
}
// IMGUI_API void          SetColumnWidth(int column_index, float width);                      // set column width (in pixels). pass -1 to use current column
export function SetColumnWidth(column_index, width) { bind.SetColumnWidth(column_index, width); }
// IMGUI_API float         GetColumnOffset(int column_index = -1);                             // get position of column line (in pixels, from the left side of the contents region). pass -1 to use current column, otherwise 0..GetColumnsCount() inclusive. column 0 is typically 0.0f
export function GetColumnOffset(column_index = -1) {
    return bind.GetColumnOffset(column_index);
}
// IMGUI_API void          SetColumnOffset(int column_index, float offset_x);                  // set position of column line (in pixels, from the left side of the contents region). pass -1 to use current column
export function SetColumnOffset(column_index, offset_x) { bind.SetColumnOffset(column_index, offset_x); }
// IMGUI_API int           GetColumnsCount();
export function GetColumnsCount() { return bind.GetColumnsCount(); }
// ID scopes
// If you are creating widgets in a loop you most likely want to push a unique identifier (e.g. object pointer, loop index) so ImGui can differentiate them.
// You can also use the "##foobar" syntax within widget label to distinguish them from each others. Read "A primer on the use of labels/IDs" in the FAQ for more details.
// IMGUI_API void          PushID(const char* str_id);                                         // push identifier into the ID stack. IDs are hash of the entire stack!
// IMGUI_API void          PushID(const char* str_id_begin, const char* str_id_end);
// IMGUI_API void          PushID(const void* ptr_id);
// IMGUI_API void          PushID(int int_id);
export function PushID(id) { bind.PushID(id); }
// IMGUI_API void          PopID();
export function PopID() { bind.PopID(); }
// IMGUI_API ImGuiID       GetID(const char* str_id);                                          // calculate unique ID (hash of whole ID stack + given parameter). e.g. if you want to query into ImGuiStorage yourself
// IMGUI_API ImGuiID       GetID(const char* str_id_begin, const char* str_id_end);
// IMGUI_API ImGuiID       GetID(const void* ptr_id);
export function GetID(id) { return bind.GetID(id); }
// Widgets: Text
// IMGUI_API void          TextUnformatted(const char* text, const char* text_end = NULL);               // raw text without formatting. Roughly equivalent to Text("%s", text) but: A) doesn't require null terminated string if 'text_end' is specified, B) it's faster, no memory copy is done, no buffer size limits, recommended for long chunks of text.
export function TextUnformatted(text, text_end = null) { bind.TextUnformatted(text_end !== null ? text.substring(0, text_end) : text); }
// IMGUI_API void          Text(const char* fmt, ...)                                     IM_FMTARGS(1); // simple formatted text
// IMGUI_API void          TextV(const char* fmt, va_list args)                           IM_FMTLIST(1);
export function Text(fmt /*, ...args: any[]*/) { bind.Text(fmt /*, ...args*/); }
// IMGUI_API void          TextColored(const ImVec4& col, const char* fmt, ...)           IM_FMTARGS(2); // shortcut for PushStyleColor(ImGuiCol_Text, col); Text(fmt, ...); PopStyleColor();
// IMGUI_API void          TextColoredV(const ImVec4& col, const char* fmt, va_list args) IM_FMTLIST(2);
export function TextColored(col, fmt /*, ...args: any[]*/) {
    bind.TextColored((col instanceof ImColor) ? col.Value : col, fmt /*, ...args*/);
}
// IMGUI_API void          TextDisabled(const char* fmt, ...)                             IM_FMTARGS(1); // shortcut for PushStyleColor(ImGuiCol_Text, style.Colors[ImGuiCol_TextDisabled]); Text(fmt, ...); PopStyleColor();
// IMGUI_API void          TextDisabledV(const char* fmt, va_list args)                   IM_FMTLIST(1);
export function TextDisabled(fmt /*, ...args: any[]*/) { bind.TextDisabled(fmt /*, ...args*/); }
// IMGUI_API void          TextWrapped(const char* fmt, ...)                              IM_FMTARGS(1); // shortcut for PushTextWrapPos(0.0f); Text(fmt, ...); PopTextWrapPos();. Note that this won't work on an auto-resizing window if there's no other widgets to extend the window width, yoy may need to set a size using SetNextWindowSize().
// IMGUI_API void          TextWrappedV(const char* fmt, va_list args)                    IM_FMTLIST(1);
export function TextWrapped(fmt /*, ...args: any[]*/) { bind.TextWrapped(fmt /*, ...args*/); }
// IMGUI_API void          LabelText(const char* label, const char* fmt, ...)             IM_FMTARGS(2); // display text+label aligned the same way as value+label widgets
// IMGUI_API void          LabelTextV(const char* label, const char* fmt, va_list args)   IM_FMTLIST(2);
export function LabelText(label, fmt /*, ...args: any[]*/) { bind.LabelText(label, fmt /*, ...args*/); }
// IMGUI_API void          BulletText(const char* fmt, ...)                               IM_FMTARGS(1); // shortcut for Bullet()+Text()
// IMGUI_API void          BulletTextV(const char* fmt, va_list args)                     IM_FMTLIST(1);
export function BulletText(fmt /*, ...args: any[]*/) { bind.BulletText(fmt /*, ...args*/); }
// IMGUI_API void          Bullet();                                                                     // draw a small circle and keep the cursor on the same line. advance cursor x position by GetTreeNodeToLabelSpacing(), same distance that TreeNode() uses
export function Bullet() { bind.Bullet(); }
// Widgets: Main
// IMGUI_API bool          Button(const char* label, const ImVec2& size = ImVec2(0,0));            // button
export function Button(label, size = ImVec2.ZERO) {
    return bind.Button(label, size);
}
// IMGUI_API bool          SmallButton(const char* label);                                         // button with FramePadding=(0,0) to easily embed within text
export function SmallButton(label) { return bind.SmallButton(label); }
// IMGUI_API bool          ArrowButton(const char* str_id, ImGuiDir dir);                  // square button with an arrow shape
export function ArrowButton(str_id, dir) { return bind.ArrowButton(str_id, dir); }
// IMGUI_API bool          InvisibleButton(const char* str_id, const ImVec2& size);                // button behavior without the visuals, useful to build custom behaviors using the public api (along with IsItemActive, IsItemHovered, etc.)
export function InvisibleButton(str_id, size) {
    return bind.InvisibleButton(str_id, size);
}
// IMGUI_API void          Image(ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0,0), const ImVec2& uv1 = ImVec2(1,1), const ImVec4& tint_col = ImVec4(1,1,1,1), const ImVec4& border_col = ImVec4(0,0,0,0));
export function Image(user_texture_id, size, uv0 = ImVec2.ZERO, uv1 = ImVec2.UNIT, tint_col = ImVec4.WHITE, border_col = ImVec4.ZERO) {
    bind.Image(ImGuiContext.setTexture(user_texture_id), size, uv0, uv1, tint_col, border_col);
}
// IMGUI_API bool          ImageButton(ImTextureID user_texture_id, const ImVec2& size, const ImVec2& uv0 = ImVec2(0,0),  const ImVec2& uv1 = ImVec2(1,1), int frame_padding = -1, const ImVec4& bg_col = ImVec4(0,0,0,0), const ImVec4& tint_col = ImVec4(1,1,1,1));    // <0 frame_padding uses default frame padding settings. 0 for no padding
export function ImageButton(user_texture_id, size, uv0 = ImVec2.ZERO, uv1 = ImVec2.UNIT, frame_padding = -1, bg_col = ImVec4.ZERO, tint_col = ImVec4.WHITE) {
    return bind.ImageButton(ImGuiContext.setTexture(user_texture_id), size, uv0, uv1, frame_padding, bg_col, tint_col);
}
// IMGUI_API bool          Checkbox(const char* label, bool* v);
export function Checkbox(label, v) {
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
// IMGUI_API bool          CheckboxFlags(const char* label, unsigned int* flags, unsigned int flags_value);
export function CheckboxFlags(label, flags, flags_value) {
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
export function RadioButton(label, ...args) {
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
export function PlotLines(label, ...args) {
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
export function PlotHistogram(label, ...args) {
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
// IMGUI_API void          ProgressBar(float fraction, const ImVec2& size_arg = ImVec2(-1,0), const char* overlay = NULL);
export function ProgressBar(fraction, size_arg = new ImVec2(-1, 0), overlay = null) {
    bind.ProgressBar(fraction, size_arg, overlay);
}
// Widgets: Combo Box
// The new BeginCombo()/EndCombo() api allows you to manage your contents and selection state however you want it.
// The old Combo() api are helpers over BeginCombo()/EndCombo() which are kept available for convenience purpose.
// IMGUI_API bool          BeginCombo(const char* label, const char* preview_value, ImGuiComboFlags flags = 0);
export function BeginCombo(label, preview_value = null, flags = 0) {
    return bind.BeginCombo(label, preview_value, flags);
}
// IMGUI_API void          EndCombo();
export function EndCombo() { bind.EndCombo(); }
export function Combo(label, current_item, ...args) {
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
// Widgets: Drags (tip: ctrl+click on a drag box to input with keyboard. manually input values aren't clamped, can go off-bounds)
// For all the Float2/Float3/Float4/Int2/Int3/Int4 versions of every functions, note that a 'float v[X]' function argument is the same as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible. You can pass address of your first element out of a contiguous set, e.g. &myvector.x
// IMGUI_API bool          DragFloat(const char* label, float* v, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);     // If v_min >= v_max we have no bound
export function DragFloat(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
    const _v = import_Scalar(v);
    const ret = bind.DragFloat(label, _v, v_speed, v_min, v_max, display_format, power);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          DragFloat2(const char* label, float v[2], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
export function DragFloat2(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
    const _v = import_Vector2(v);
    const ret = bind.DragFloat2(label, _v, v_speed, v_min, v_max, display_format, power);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          DragFloat3(const char* label, float v[3], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
export function DragFloat3(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
    const _v = import_Vector3(v);
    const ret = bind.DragFloat3(label, _v, v_speed, v_min, v_max, display_format, power);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          DragFloat4(const char* label, float v[4], float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", float power = 1.0f);
export function DragFloat4(label, v, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", power = 1.0) {
    const _v = import_Vector4(v);
    const ret = bind.DragFloat4(label, _v, v_speed, v_min, v_max, display_format, power);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          DragFloatRange2(const char* label, float* v_current_min, float* v_current_max, float v_speed = 1.0f, float v_min = 0.0f, float v_max = 0.0f, const char* display_format = "%.3f", const char* display_format_max = NULL, float power = 1.0f);
export function DragFloatRange2(label, v_current_min, v_current_max, v_speed = 1.0, v_min = 0.0, v_max = 0.0, display_format = "%.3f", display_format_max = null, power = 1.0) {
    const _v_current_min = import_Scalar(v_current_min);
    const _v_current_max = import_Scalar(v_current_max);
    const ret = bind.DragFloatRange2(label, _v_current_min, _v_current_max, v_speed, v_min, v_max, display_format, display_format_max, power);
    export_Scalar(_v_current_min, v_current_min);
    export_Scalar(_v_current_max, v_current_max);
    return ret;
}
// IMGUI_API bool          DragInt(const char* label, int* v, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* display_format = "%d");                                       // If v_min >= v_max we have no bound
export function DragInt(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
    const _v = import_Scalar(v);
    const ret = bind.DragInt(label, _v, v_speed, v_min, v_max, format);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          DragInt2(const char* label, int v[2], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
export function DragInt2(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
    const _v = import_Vector2(v);
    const ret = bind.DragInt2(label, _v, v_speed, v_min, v_max, format);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          DragInt3(const char* label, int v[3], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
export function DragInt3(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
    const _v = import_Vector3(v);
    const ret = bind.DragInt3(label, _v, v_speed, v_min, v_max, format);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          DragInt4(const char* label, int v[4], float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* format = "%d");
export function DragInt4(label, v, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d") {
    const _v = import_Vector4(v);
    const ret = bind.DragInt4(label, _v, v_speed, v_min, v_max, format);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          DragIntRange2(const char* label, int* v_current_min, int* v_current_max, float v_speed = 1.0f, int v_min = 0, int v_max = 0, const char* display_format = "%.0f", const char* display_format_max = NULL);
export function DragIntRange2(label, v_current_min, v_current_max, v_speed = 1.0, v_min = 0, v_max = 0, format = "%d", format_max = null) {
    const _v_current_min = import_Scalar(v_current_min);
    const _v_current_max = import_Scalar(v_current_max);
    const ret = bind.DragIntRange2(label, _v_current_min, _v_current_max, v_speed, v_min, v_max, format, format_max);
    export_Scalar(_v_current_min, v_current_min);
    export_Scalar(_v_current_max, v_current_max);
    return ret;
}
// IMGUI_API bool          DragScalar(const char* label, ImGuiDataType data_type, void* v, float v_speed, const void* v_min = NULL, const void* v_max = NULL, const char* format = NULL, float power = 1.0f);
// IMGUI_API bool          DragScalarN(const char* label, ImGuiDataType data_type, void* v, int components, float v_speed, const void* v_min = NULL, const void* v_max = NULL, const char* format = NULL, float power = 1.0f);
export function DragScalar(label, v, v_speed, v_min = null, v_max = null, format = null, power = 1.0) {
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
// Widgets: Input with Keyboard
// IMGUI_API bool          InputText(const char* label, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
export function InputText(label, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : ImGuiInputTextDefaultSize, flags = 0, callback = null, user_data = null) {
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
// IMGUI_API bool          InputTextWithHint(const char* label, const char* hint, char* buf, size_t buf_size, ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
export function InputTextWithHint(label, hint, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : ImGuiInputTextDefaultSize, flags = 0, callback = null, user_data = null) {
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
// IMGUI_API bool          InputTextMultiline(const char* label, char* buf, size_t buf_size, const ImVec2& size = ImVec2(0,0), ImGuiInputTextFlags flags = 0, ImGuiInputTextCallback callback = NULL, void* user_data = NULL);
export function InputTextMultiline(label, buf, buf_size = buf instanceof ImStringBuffer ? buf.size : ImGuiInputTextDefaultSize, size = ImVec2.ZERO, flags = 0, callback = null, user_data = null) {
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
// IMGUI_API bool          InputFloat(const char* label, float* v, float step = 0.0f, float step_fast = 0.0f, const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
export function InputFloat(label, v, step = 0.0, step_fast = 0.0, format = "%.3f", extra_flags = 0) {
    const _v = import_Scalar(v);
    const ret = bind.InputFloat(label, _v, step, step_fast, format, extra_flags);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          InputFloat2(const char* label, float v[2], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
export function InputFloat2(label, v, format = "%.3f", extra_flags = 0) {
    const _v = import_Vector2(v);
    const ret = bind.InputFloat2(label, _v, format, extra_flags);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          InputFloat3(const char* label, float v[3], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
export function InputFloat3(label, v, format = "%.3f", extra_flags = 0) {
    const _v = import_Vector3(v);
    const ret = bind.InputFloat3(label, _v, format, extra_flags);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          InputFloat4(const char* label, float v[4], const char* format = "%.3f", ImGuiInputTextFlags extra_flags = 0);
export function InputFloat4(label, v, format = "%.3f", extra_flags = 0) {
    const _v = import_Vector4(v);
    const ret = bind.InputFloat4(label, _v, format, extra_flags);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          InputInt(const char* label, int* v, int step = 1, int step_fast = 100, ImGuiInputTextFlags extra_flags = 0);
export function InputInt(label, v, step = 1, step_fast = 100, extra_flags = 0) {
    const _v = import_Scalar(v);
    const ret = bind.InputInt(label, _v, step, step_fast, extra_flags);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          InputInt2(const char* label, int v[2], ImGuiInputTextFlags extra_flags = 0);
export function InputInt2(label, v, extra_flags = 0) {
    const _v = import_Vector2(v);
    const ret = bind.InputInt2(label, _v, extra_flags);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          InputInt3(const char* label, int v[3], ImGuiInputTextFlags extra_flags = 0);
export function InputInt3(label, v, extra_flags = 0) {
    const _v = import_Vector3(v);
    const ret = bind.InputInt3(label, _v, extra_flags);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          InputInt4(const char* label, int v[4], ImGuiInputTextFlags extra_flags = 0);
export function InputInt4(label, v, extra_flags = 0) {
    const _v = import_Vector4(v);
    const ret = bind.InputInt4(label, _v, extra_flags);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          InputDouble(const char* label, float* v, float step = 0.0f, float step_fast = 0.0f, const char* format = "%.6f", ImGuiInputTextFlags extra_flags = 0);
export function InputDouble(label, v, step = 0.0, step_fast = 0.0, format = "%.6f", extra_flags = 0) {
    const _v = import_Scalar(v);
    const ret = bind.InputDouble(label, _v, step, step_fast, format, extra_flags);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          InputScalar(const char* label, ImGuiDataType data_type, void* v, const void* step = NULL, const void* step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags extra_flags = 0);
// IMGUI_API bool          InputScalarN(const char* label, ImGuiDataType data_type, void* v, int components, const void* step = NULL, const void* step_fast = NULL, const char* format = NULL, ImGuiInputTextFlags extra_flags = 0);
export function InputScalar(label, v, step = null, step_fast = null, format = null, extra_flags = 0) {
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
// Widgets: Sliders (tip: ctrl+click on a slider to input with keyboard. manually input values aren't clamped, can go off-bounds)
// IMGUI_API bool          SliderFloat(const char* label, float* v, float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);     // adjust format to decorate the value with a prefix or a suffix for in-slider labels or unit display. Use power!=1.0 for logarithmic sliders
export function SliderFloat(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
    const _v = import_Scalar(v);
    const ret = bind.SliderFloat(label, _v, v_min, v_max, format, power);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          SliderFloat2(const char* label, float v[2], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
export function SliderFloat2(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
    const _v = import_Vector2(v);
    const ret = bind.SliderFloat2(label, _v, v_min, v_max, format, power);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          SliderFloat3(const char* label, float v[3], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
export function SliderFloat3(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
    const _v = import_Vector3(v);
    const ret = bind.SliderFloat3(label, _v, v_min, v_max, format, power);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          SliderFloat4(const char* label, float v[4], float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
export function SliderFloat4(label, v, v_min, v_max, format = "%.3f", power = 1.0) {
    const _v = import_Vector4(v);
    const ret = bind.SliderFloat4(label, _v, v_min, v_max, format, power);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          SliderAngle(const char* label, float* v_rad, float v_degrees_min = -360.0f, float v_degrees_max = +360.0f);
export function SliderAngle(label, v_rad, v_degrees_min = -360.0, v_degrees_max = +360.0) {
    const _v_rad = import_Scalar(v_rad);
    const ret = bind.SliderAngle(label, _v_rad, v_degrees_min, v_degrees_max);
    export_Scalar(_v_rad, v_rad);
    return ret;
}
export function SliderAngle3(label, v_rad, v_degrees_min = -360.0, v_degrees_max = +360.0) {
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
// IMGUI_API bool          SliderInt(const char* label, int* v, int v_min, int v_max, const char* format = "%d");
export function SliderInt(label, v, v_min, v_max, format = "%d") {
    const _v = import_Scalar(v);
    const ret = bind.SliderInt(label, _v, v_min, v_max, format);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          SliderInt2(const char* label, int v[2], int v_min, int v_max, const char* format = "%d");
export function SliderInt2(label, v, v_min, v_max, format = "%d") {
    const _v = import_Vector2(v);
    const ret = bind.SliderInt2(label, _v, v_min, v_max, format);
    export_Vector2(_v, v);
    return ret;
}
// IMGUI_API bool          SliderInt3(const char* label, int v[3], int v_min, int v_max, const char* format = "%d");
export function SliderInt3(label, v, v_min, v_max, format = "%d") {
    const _v = import_Vector3(v);
    const ret = bind.SliderInt3(label, _v, v_min, v_max, format);
    export_Vector3(_v, v);
    return ret;
}
// IMGUI_API bool          SliderInt4(const char* label, int v[4], int v_min, int v_max, const char* format = "%d");
export function SliderInt4(label, v, v_min, v_max, format = "%d") {
    const _v = import_Vector4(v);
    const ret = bind.SliderInt4(label, _v, v_min, v_max, format);
    export_Vector4(_v, v);
    return ret;
}
// IMGUI_API bool          SliderScalar(const char* label, ImGuiDataType data_type, void* v, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
// IMGUI_API bool          SliderScalarN(const char* label, ImGuiDataType data_type, void* v, int components, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
export function SliderScalar(label, v, v_min, v_max, format = null, power = 1.0) {
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
// IMGUI_API bool          VSliderFloat(const char* label, const ImVec2& size, float* v, float v_min, float v_max, const char* format = "%.3f", float power = 1.0f);
export function VSliderFloat(label, size, v, v_min, v_max, format = "%.3f", power = 1.0) {
    const _v = import_Scalar(v);
    const ret = bind.VSliderFloat(label, size, _v, v_min, v_max, format, power);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          VSliderInt(const char* label, const ImVec2& size, int* v, int v_min, int v_max, const char* format = "%d");
export function VSliderInt(label, size, v, v_min, v_max, format = "%d") {
    const _v = import_Scalar(v);
    const ret = bind.VSliderInt(label, size, _v, v_min, v_max, format);
    export_Scalar(_v, v);
    return ret;
}
// IMGUI_API bool          VSliderScalar(const char* label, const ImVec2& size, ImGuiDataType data_type, void* v, const void* v_min, const void* v_max, const char* format = NULL, float power = 1.0f);
export function VSliderScalar(label, size, data_type, v, v_min, v_max, format = null, power = 1.0) {
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
// Widgets: Color Editor/Picker (tip: the ColorEdit* functions have a little colored preview square that can be left-clicked to open a picker, and right-clicked to open an option menu.)
// Note that a 'float v[X]' function argument is the same as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible. You can the pass the address of a first float element out of a contiguous structure, e.g. &myvector.x
// IMGUI_API bool          ColorEdit3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
export function ColorEdit3(label, col, flags = 0) {
    const _col = import_Color3(col);
    const ret = bind.ColorEdit3(label, _col, flags);
    export_Color3(_col, col);
    return ret;
}
// IMGUI_API bool          ColorEdit4(const char* label, float col[4], ImGuiColorEditFlags flags = 0);
export function ColorEdit4(label, col, flags = 0) {
    const _col = import_Color4(col);
    const ret = bind.ColorEdit4(label, _col, flags);
    export_Color4(_col, col);
    return ret;
}
// IMGUI_API bool          ColorPicker3(const char* label, float col[3], ImGuiColorEditFlags flags = 0);
export function ColorPicker3(label, col, flags = 0) {
    const _col = import_Color3(col);
    const ret = bind.ColorPicker3(label, _col, flags);
    export_Color3(_col, col);
    return ret;
}
// IMGUI_API bool          ColorPicker4(const char* label, float col[4], ImGuiColorEditFlags flags = 0, const float* ref_col = NULL);
export function ColorPicker4(label, col, flags = 0, ref_col = null) {
    const _col = import_Color4(col);
    const _ref_col = ref_col ? import_Color4(ref_col) : null;
    const ret = bind.ColorPicker4(label, _col, flags, _ref_col);
    export_Color4(_col, col);
    if (_ref_col && ref_col) {
        export_Color4(_ref_col, ref_col);
    }
    return ret;
}
// IMGUI_API bool          ColorButton(const char* desc_id, const ImVec4& col, ImGuiColorEditFlags flags = 0, ImVec2 size = ImVec2(0,0));  // display a colored square/button, hover for details, return true when pressed.
export function ColorButton(desc_id, col, flags = 0, size = ImVec2.ZERO) {
    return bind.ColorButton(desc_id, col, flags, size);
}
// IMGUI_API void          SetColorEditOptions(ImGuiColorEditFlags flags);                         // initialize current options (generally on application startup) if you want to select a default format, picker type, etc. User will be able to change many settings, unless you pass the _NoOptions flag to your calls.
export function SetColorEditOptions(flags) {
    bind.SetColorEditOptions(flags);
}
export function TreeNode(...args) {
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
export function TreeNodeEx(...args) {
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
export function TreePush(...args) {
    if (typeof (args[0]) === "string") {
        const str_id = args[0];
        bind.TreePush_A(str_id);
    }
    else {
        const ptr_id = args[0];
        bind.TreePush_B(ptr_id);
    }
}
// IMGUI_API void          TreePop();                                                              // ~ Unindent()+PopId()
export function TreePop() { bind.TreePop(); }
// IMGUI_API void          TreeAdvanceToLabelPos();                                                // advance cursor x position by GetTreeNodeToLabelSpacing()
export function TreeAdvanceToLabelPos() { bind.TreeAdvanceToLabelPos(); }
// IMGUI_API float         GetTreeNodeToLabelSpacing();                                            // horizontal distance preceding label when using TreeNode*() or Bullet() == (g.FontSize + style.FramePadding.x*2) for a regular unframed TreeNode
export function GetTreeNodeToLabelSpacing() { return bind.GetTreeNodeToLabelSpacing(); }
export function CollapsingHeader(label, ...args) {
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
// IMGUI_API void          SetNextItemOpen(bool is_open, ImGuiCond cond = 0);                  // set next TreeNode/CollapsingHeader open state.
export function SetNextItemOpen(is_open, cond = 0) {
    bind.SetNextItemOpen(is_open, cond);
}
export function Selectable(label, ...args) {
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
export function ListBox(label, current_item, ...args) {
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
export function ListBoxHeader(label, ...args) {
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
// IMGUI_API void          ListBoxFooter();                                                        // terminate the scrolling region
export function ListBoxFooter() {
    bind.ListBoxFooter();
}
export function Value(prefix, ...args) {
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
// Tooltips
// IMGUI_API void          BeginTooltip();                                                     // begin/append a tooltip window. to create full-featured tooltip (with any kind of contents).
export function BeginTooltip() { bind.BeginTooltip(); }
// IMGUI_API void          EndTooltip();
export function EndTooltip() { bind.EndTooltip(); }
// IMGUI_API void          SetTooltip(const char* fmt, ...) IM_FMTARGS(1);                     // set text tooltip under mouse-cursor, typically use with ImGui::IsItemHovered(). overidde any previous call to SetTooltip().
// IMGUI_API void          SetTooltipV(const char* fmt, va_list args) IM_FMTLIST(1);
export function SetTooltip(fmt) {
    bind.SetTooltip(fmt);
}
// Menus
// IMGUI_API bool          BeginMainMenuBar();                                                 // create and append to a full screen menu-bar. only call EndMainMenuBar() if this returns true!
export function BeginMainMenuBar() { return bind.BeginMainMenuBar(); }
// IMGUI_API void          EndMainMenuBar();
export function EndMainMenuBar() { bind.EndMainMenuBar(); }
// IMGUI_API bool          BeginMenuBar();                                                     // append to menu-bar of current window (requires ImGuiWindowFlags_MenuBar flag set on parent window). only call EndMenuBar() if this returns true!
export function BeginMenuBar() { return bind.BeginMenuBar(); }
// IMGUI_API void          EndMenuBar();
export function EndMenuBar() { bind.EndMenuBar(); }
// IMGUI_API bool          BeginMenu(const char* label, bool enabled = true);                  // create a sub-menu entry. only call EndMenu() if this returns true!
export function BeginMenu(label, enabled = true) { return bind.BeginMenu(label, enabled); }
// IMGUI_API void          EndMenu();
export function EndMenu() { bind.EndMenu(); }
export function MenuItem(label, ...args) {
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
// Popups
// IMGUI_API void          OpenPopup(const char* str_id);                                      // call to mark popup as open (don't call every frame!). popups are closed when user click outside, or if CloseCurrentPopup() is called within a BeginPopup()/EndPopup() block. By default, Selectable()/MenuItem() are calling CloseCurrentPopup(). Popup identifiers are relative to the current ID-stack (so OpenPopup and BeginPopup needs to be at the same level).
export function OpenPopup(str_id) { bind.OpenPopup(str_id); }
// IMGUI_API bool          OpenPopupOnItemClick(const char* str_id = NULL, int mouse_button = 1);                                  // helper to open popup when clicked on last item. return true when just opened.
export function OpenPopupOnItemClick(str_id = null, mouse_button = 1) {
    return bind.OpenPopupOnItemClick(str_id, mouse_button);
}
// IMGUI_API bool          BeginPopup(const char* str_id);                                     // return true if the popup is open, and you can start outputting to it. only call EndPopup() if BeginPopup() returned true!
export function BeginPopup(str_id) { return bind.BeginPopup(str_id); }
// IMGUI_API bool          BeginPopupModal(const char* name, bool* p_open = NULL, ImGuiWindowFlags extra_flags = 0);               // modal dialog (block interactions behind the modal window, can't close the modal window by clicking outside)
export function BeginPopupModal(str_id = "", p_open = null, extra_flags = 0) {
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
// IMGUI_API bool          BeginPopupContextItem(const char* str_id = NULL, int mouse_button = 1);                                 // helper to open and begin popup when clicked on last item. if you can pass a NULL str_id only if the previous item had an id. If you want to use that on a non-interactive item such as Text() you need to pass in an explicit ID here. read comments in .cpp!
export function BeginPopupContextItem(str_id = null, mouse_button = 1) {
    return bind.BeginPopupContextItem(str_id, mouse_button);
}
// IMGUI_API bool          BeginPopupContextWindow(const char* str_id = NULL, int mouse_button = 1, bool also_over_items = true);  // helper to open and begin popup when clicked on current window.
export function BeginPopupContextWindow(str_id = null, mouse_button = 1, also_over_items = true) {
    return bind.BeginPopupContextWindow(str_id, mouse_button, also_over_items);
}
// IMGUI_API bool          BeginPopupContextVoid(const char* str_id = NULL, int mouse_button = 1);                                 // helper to open and begin popup when clicked in void (where there are no imgui windows).
export function BeginPopupContextVoid(str_id = null, mouse_button = 1) {
    return bind.BeginPopupContextVoid(str_id, mouse_button);
}
// IMGUI_API void          EndPopup();
export function EndPopup() { bind.EndPopup(); }
// IMGUI_API bool          IsPopupOpen(const char* str_id);                                    // return true if the popup is open
export function IsPopupOpen(str_id) { return bind.IsPopupOpen(str_id); }
// IMGUI_API void          CloseCurrentPopup();                                                // close the popup we have begin-ed into. clicking on a MenuItem or Selectable automatically close the current popup.
export function CloseCurrentPopup() { bind.CloseCurrentPopup(); }
// Tab Bars, Tabs
// [BETA API] API may evolve!
// IMGUI_API bool          BeginTabBar(const char* str_id, ImGuiTabBarFlags flags = 0);        // create and append into a TabBar
export function BeginTabBar(str_id, flags = 0) { return bind.BeginTabBar(str_id, flags); }
// IMGUI_API void          EndTabBar();                                                        // only call EndTabBar() if BeginTabBar() returns true!
export function EndTabBar() { bind.EndTabBar(); }
// IMGUI_API bool          BeginTabItem(const char* label, bool* p_open = NULL, ImGuiTabItemFlags flags = 0);// create a Tab. Returns true if the Tab is selected.
export function BeginTabItem(label, p_open = null, flags = 0) {
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
// IMGUI_API void          EndTabItem();                                                       // only call EndTabItem() if BeginTabItem() returns true!
export function EndTabItem() { bind.EndTabItem(); }
// IMGUI_API void          SetTabItemClosed(const char* tab_or_docked_window_label);           // notify TabBar or Docking system of a closed tab/window ahead (useful to reduce visual flicker on reorderable tab bars). For tab-bar: call after BeginTabBar() and before Tab submissions. Otherwise call with a window name.
export function SetTabItemClosed(tab_or_docked_window_label) { bind.SetTabItemClosed(tab_or_docked_window_label); }
// Logging/Capture: all text output from interface is captured to tty/file/clipboard. By default, tree nodes are automatically opened during logging.
// IMGUI_API void          LogToTTY(int max_depth = -1);                                       // start logging to tty
export function LogToTTY(max_depth = -1) {
    bind.LogToTTY(max_depth);
}
// IMGUI_API void          LogToFile(int max_depth = -1, const char* filename = NULL);         // start logging to file
export function LogToFile(max_depth = -1, filename = null) {
    bind.LogToFile(max_depth, filename);
}
// IMGUI_API void          LogToClipboard(int max_depth = -1);                                 // start logging to OS clipboard
export function LogToClipboard(max_depth = -1) {
    bind.LogToClipboard(max_depth);
}
// IMGUI_API void          LogFinish();                                                        // stop logging (close file, etc.)
export function LogFinish() { bind.LogFinish(); }
// IMGUI_API void          LogButtons();                                                       // helper to display buttons for logging to tty/file/clipboard
export function LogButtons() { bind.LogButtons(); }
// IMGUI_API void          LogText(const char* fmt, ...) IM_FMTARGS(1);                        // pass text data straight to log (without being displayed)
export function LogText(fmt) {
    bind.LogText(fmt);
}
const _ImGui_DragDropPayload_data = {};
// Drag and Drop
// [BETA API] Missing Demo code. API may evolve.
// IMGUI_API bool          BeginDragDropSource(ImGuiDragDropFlags flags = 0);                // call when the current item is active. If this return true, you can call SetDragDropPayload() + EndDragDropSource()
export function BeginDragDropSource(flags = 0) {
    return bind.BeginDragDropSource(flags);
}
// IMGUI_API bool          SetDragDropPayload(const char* type, const void* data, size_t size, ImGuiCond cond = 0);// type is a user defined string of maximum 8 characters. Strings starting with '_' are reserved for dear imgui internal types. Data is copied and held by imgui.
export function SetDragDropPayload(type, data, cond = 0) {
    _ImGui_DragDropPayload_data[type] = data;
    return bind.SetDragDropPayload(type, data, 0, cond);
}
// IMGUI_API void          EndDragDropSource();
export function EndDragDropSource() {
    bind.EndDragDropSource();
}
// IMGUI_API bool          BeginDragDropTarget();                                                                  // call after submitting an item that may receive an item. If this returns true, you can call AcceptDragDropPayload() + EndDragDropTarget()
export function BeginDragDropTarget() {
    return bind.BeginDragDropTarget();
}
// IMGUI_API const ImGuiPayload* AcceptDragDropPayload(const char* type, ImGuiDragDropFlags flags = 0);            // accept contents of a given type. If ImGuiDragDropFlags_AcceptBeforeDelivery is set you can peek into the payload before the mouse button is released.
export function AcceptDragDropPayload(type, flags = 0) {
    const data = _ImGui_DragDropPayload_data[type];
    return bind.AcceptDragDropPayload(type, flags) ? { Data: data } : null;
}
// IMGUI_API void          EndDragDropTarget();
export function EndDragDropTarget() {
    bind.EndDragDropTarget();
}
// Clipping
// IMGUI_API void          PushClipRect(const ImVec2& clip_rect_min, const ImVec2& clip_rect_max, bool intersect_with_current_clip_rect);
export function PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect) {
    bind.PushClipRect(clip_rect_min, clip_rect_max, intersect_with_current_clip_rect);
}
// IMGUI_API void          PopClipRect();
export function PopClipRect() {
    bind.PopClipRect();
}
// Focus
// (FIXME: Those functions will be reworked after we merge the navigation branch + have a pass at focusing/tabbing features.)
// (Prefer using "SetItemDefaultFocus()" over "if (IsWindowAppearing()) SetScrollHere()" when applicable, to make your code more forward compatible when navigation branch is merged)
// IMGUI_API void          SetItemDefaultFocus();                                              // make last item the default focused item of a window (WIP navigation branch only). Pleaase use instead of SetScrollHere().
export function SetItemDefaultFocus() { bind.SetItemDefaultFocus(); }
// IMGUI_API void          SetKeyboardFocusHere(int offset = 0);                               // focus keyboard on the next widget. Use positive 'offset' to access sub components of a multiple component widget. Use -1 to access previous widget.
export function SetKeyboardFocusHere(offset = 0) {
    bind.SetKeyboardFocusHere(offset);
}
// Utilities
// IMGUI_API bool          IsItemHovered(ImGuiHoveredFlags flags = 0);                         // is the last item hovered? (and usable, aka not blocked by a popup, etc.). See ImGuiHoveredFlags for more options.
export function IsItemHovered(flags = 0) {
    return bind.IsItemHovered(flags);
}
// IMGUI_API bool          IsItemActive();                                                     // is the last item active? (e.g. button being held, text field being edited- items that don't interact will always return false)
export function IsItemActive() { return bind.IsItemActive(); }
// IMGUI_API bool          IsItemEdited();                                                     // is the last item active? (e.g. button being held, text field being edited- items that don't interact will always return false)
export function IsItemEdited() { return bind.IsItemEdited(); }
// IMGUI_API bool          IsItemFocused();                                                    // is the last item focused for keyboard/gamepad navigation?
export function IsItemFocused() { return bind.IsItemFocused(); }
// IMGUI_API bool          IsItemClicked(int mouse_button = 0);                                // is the last item clicked? (e.g. button/node just clicked on)
export function IsItemClicked(mouse_button = 0) {
    return bind.IsItemClicked(mouse_button);
}
// IMGUI_API bool          IsItemVisible();                                                    // is the last item visible? (aka not out of sight due to clipping/scrolling.)
export function IsItemVisible() { return bind.IsItemVisible(); }
// IMGUI_API bool          IsItemActivated();                                                  // was the last item just made active (item was previously inactive).
export function IsItemActivated() { return bind.IsItemActivated(); }
// IMGUI_API bool          IsItemDeactivated();                                                // was the last item just made inactive (item was previously active). Useful for Undo/Redo patterns with widgets that requires continuous editing.
export function IsItemDeactivated() { return bind.IsItemDeactivated(); }
// IMGUI_API bool          IsItemDeactivatedAfterEdit();                                     // was the last item just made inactive and made a value change when it was active? (e.g. Slider/Drag moved). Useful for Undo/Redo patterns with widgets that requires continuous editing. Note that you may get false positives (some widgets such as Combo()/ListBox()/Selectable() will return true even when clicking an already selected item).
export function IsItemDeactivatedAfterEdit() { return bind.IsItemDeactivatedAfterEdit(); }
// IMGUI_API bool          IsAnyItemHovered();
export function IsAnyItemHovered() { return bind.IsAnyItemHovered(); }
// IMGUI_API bool          IsAnyItemActive();
export function IsAnyItemActive() { return bind.IsAnyItemActive(); }
// IMGUI_API bool          IsAnyItemFocused();
export function IsAnyItemFocused() { return bind.IsAnyItemFocused(); }
// IMGUI_API ImVec2        GetItemRectMin();                                                   // get bounding rectangle of last item, in screen space
export function GetItemRectMin(out = new ImVec2()) {
    return bind.GetItemRectMin(out);
}
// IMGUI_API ImVec2        GetItemRectMax();                                                   // "
export function GetItemRectMax(out = new ImVec2()) {
    return bind.GetItemRectMax(out);
}
// IMGUI_API ImVec2        GetItemRectSize();                                                  // get size of last item, in screen space
export function GetItemRectSize(out = new ImVec2()) {
    return bind.GetItemRectSize(out);
}
// IMGUI_API void          SetItemAllowOverlap();                                              // allow last item to be overlapped by a subsequent item. sometimes useful with invisible buttons, selectables, etc. to catch unused area.
export function SetItemAllowOverlap() { bind.SetItemAllowOverlap(); }
// IMGUI_API bool          IsWindowFocused(ImGuiFocusedFlags flags = 0);                       // is current window focused? or its root/child, depending on flags. see flags for options.
export function IsWindowFocused(flags = 0) {
    return bind.IsWindowFocused(flags);
}
// IMGUI_API bool          IsWindowHovered(ImGuiHoveredFlags flags = 0);                       // is current window hovered (and typically: not blocked by a popup/modal)? see flags for options.
export function IsWindowHovered(flags = 0) {
    return bind.IsWindowHovered(flags);
}
export function IsRectVisible(...args) {
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
// IMGUI_API float         GetTime();
export function GetTime() { return bind.GetTime(); }
// IMGUI_API int           GetFrameCount();
export function GetFrameCount() { return bind.GetFrameCount(); }
export function GetBackgroundDrawList() {
    return new ImDrawList(bind.GetBackgroundDrawList());
}
export function GetForegroundDrawList() {
    return new ImDrawList(bind.GetForegroundDrawList());
}
// IMGUI_API ImDrawListSharedData* GetDrawListSharedData();
export function GetDrawListSharedData() {
    return new ImDrawListSharedData(bind.GetDrawListSharedData());
}
// IMGUI_API const char*   GetStyleColorName(ImGuiCol idx);
export function GetStyleColorName(idx) { return bind.GetStyleColorName(idx); }
// IMGUI_API ImVec2        CalcTextSize(const char* text, const char* text_end = NULL, bool hide_text_after_double_hash = false, float wrap_width = -1.0f);
export function CalcTextSize(text, text_end = null, hide_text_after_double_hash = false, wrap_width = -1, out = new ImVec2()) {
    return bind.CalcTextSize(text_end !== null ? text.substring(0, text_end) : text, hide_text_after_double_hash, wrap_width, out);
}
// IMGUI_API void          CalcListClipping(int items_count, float items_height, int* out_items_display_start, int* out_items_display_end);    // calculate coarse clipping for large list of evenly sized items. Prefer using the ImGuiListClipper higher-level helper if you can.
export function CalcListClipping(items_count, items_height, out_items_display_start, out_items_display_end) {
    return bind.CalcListClipping(items_count, items_height, out_items_display_start, out_items_display_end);
}
// IMGUI_API bool          BeginChildFrame(ImGuiID id, const ImVec2& size, ImGuiWindowFlags extra_flags = 0);    // helper to create a child window / scrolling region that looks like a normal widget frame
export function BeginChildFrame(id, size, extra_flags = 0) {
    return bind.BeginChildFrame(id, size, extra_flags);
}
// IMGUI_API void          EndChildFrame();
export function EndChildFrame() { bind.EndChildFrame(); }
// IMGUI_API ImVec4        ColorConvertU32ToFloat4(ImU32 in);
export function ColorConvertU32ToFloat4(in_, out = new ImVec4()) {
    return bind.ColorConvertU32ToFloat4(in_, out);
}
// IMGUI_API ImU32         ColorConvertFloat4ToU32(const ImVec4& in);
export function ColorConvertFloat4ToU32(in_) {
    return bind.ColorConvertFloat4ToU32(in_);
}
// IMGUI_API void          ColorConvertRGBtoHSV(float r, float g, float b, float& out_h, float& out_s, float& out_v);
export function ColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v) { bind.ColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v); }
// IMGUI_API void          ColorConvertHSVtoRGB(float h, float s, float v, float& out_r, float& out_g, float& out_b);
export function ColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b) { bind.ColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b); }
// Inputs
// IMGUI_API int           GetKeyIndex(ImGuiKey imgui_key);                                    // map ImGuiKey_* values into user's key index. == io.KeyMap[key]
export function GetKeyIndex(imgui_key) {
    return bind.GetKeyIndex(imgui_key);
}
// IMGUI_API bool          IsKeyDown(int user_key_index);                                      // is key being held. == io.KeysDown[user_key_index]. note that imgui doesn't know the semantic of each entry of io.KeyDown[]. Use your own indices/enums according to how your backend/engine stored them into KeyDown[]!
export function IsKeyDown(user_key_index) {
    return bind.IsKeyDown(user_key_index);
}
// IMGUI_API bool          IsKeyPressed(int user_key_index, bool repeat = true);               // was key pressed (went from !Down to Down). if repeat=true, uses io.KeyRepeatDelay / KeyRepeatRate
export function IsKeyPressed(user_key_index, repeat = true) {
    return bind.IsKeyPressed(user_key_index, repeat);
}
// IMGUI_API bool          IsKeyReleased(int user_key_index);                                  // was key released (went from Down to !Down)..
export function IsKeyReleased(user_key_index) {
    return bind.IsKeyReleased(user_key_index);
}
// IMGUI_API int           GetKeyPressedAmount(int key_index, float repeat_delay, float rate); // uses provided repeat rate/delay. return a count, most often 0 or 1 but might be >1 if RepeatRate is small enough that DeltaTime > RepeatRate
export function GetKeyPressedAmount(user_key_index, repeat_delay, rate) {
    return bind.GetKeyPressedAmount(user_key_index, repeat_delay, rate);
}
// IMGUI_API bool          IsMouseDown(int button);                                            // is mouse button held
export function IsMouseDown(button) {
    return bind.IsMouseDown(button);
}
// IMGUI_API bool          IsMouseClicked(int button, bool repeat = false);                    // did mouse button clicked (went from !Down to Down)
export function IsMouseClicked(button, repeat = false) {
    return bind.IsMouseClicked(button, repeat);
}
// IMGUI_API bool          IsMouseDoubleClicked(int button);                                   // did mouse button double-clicked. a double-click returns false in IsMouseClicked(). uses io.MouseDoubleClickTime.
export function IsMouseDoubleClicked(button) {
    return bind.IsMouseDoubleClicked(button);
}
// IMGUI_API bool          IsMouseReleased(int button);                                        // did mouse button released (went from Down to !Down)
export function IsMouseReleased(button) {
    return bind.IsMouseReleased(button);
}
// IMGUI_API bool          IsMouseDragging(int button = 0, float lock_threshold = -1.0f);      // is mouse dragging. if lock_threshold < -1.0f uses io.MouseDraggingThreshold
export function IsMouseDragging(button = 0, lock_threshold = -1.0) {
    return bind.IsMouseDragging(button, lock_threshold);
}
// IMGUI_API bool          IsMouseHoveringRect(const ImVec2& r_min, const ImVec2& r_max, bool clip = true);  // is mouse hovering given bounding rect (in screen space). clipped by current clipping settings. disregarding of consideration of focus/window ordering/blocked by a popup.
export function IsMouseHoveringRect(r_min, r_max, clip = true) {
    return bind.IsMouseHoveringRect(r_min, r_max, clip);
}
// IMGUI_API bool          IsMousePosValid(const ImVec2* mouse_pos = NULL);                    //
export function IsMousePosValid(mouse_pos = null) {
    return bind.IsMousePosValid(mouse_pos);
}
// IMGUI_API ImVec2        GetMousePos();                                                      // shortcut to ImGui::GetIO().MousePos provided by user, to be consistent with other calls
export function GetMousePos(out = new ImVec2()) {
    return bind.GetMousePos(out);
}
// IMGUI_API ImVec2        GetMousePosOnOpeningCurrentPopup();                                 // retrieve backup of mouse positioning at the time of opening popup we have BeginPopup() into
export function GetMousePosOnOpeningCurrentPopup(out = new ImVec2()) {
    return bind.GetMousePosOnOpeningCurrentPopup(out);
}
// IMGUI_API ImVec2        GetMouseDragDelta(int button = 0, float lock_threshold = -1.0f);    // dragging amount since clicking. if lock_threshold < -1.0f uses io.MouseDraggingThreshold
export function GetMouseDragDelta(button = 0, lock_threshold = -1.0, out = new ImVec2()) {
    return bind.GetMouseDragDelta(button, lock_threshold, out);
}
// IMGUI_API void          ResetMouseDragDelta(int button = 0);                                //
export function ResetMouseDragDelta(button = 0) {
    bind.ResetMouseDragDelta(button);
}
// IMGUI_API ImGuiMouseCursor GetMouseCursor();                                                // get desired cursor type, reset in ImGui::NewFrame(), this is updated during the frame. valid before Render(). If you use software rendering by setting io.MouseDrawCursor ImGui will render those for you
export function GetMouseCursor() { return bind.GetMouseCursor(); }
// IMGUI_API void          SetMouseCursor(ImGuiMouseCursor type);                              // set desired cursor type
export function SetMouseCursor(type) { bind.SetMouseCursor(type); }
// IMGUI_API void          CaptureKeyboardFromApp(bool capture = true);                        // manually override io.WantCaptureKeyboard flag next frame (said flag is entirely left for your application handle). e.g. force capture keyboard when your widget is being hovered.
export function CaptureKeyboardFromApp(capture = true) {
    return bind.CaptureKeyboardFromApp(capture);
}
// IMGUI_API void          CaptureMouseFromApp(bool capture = true);                           // manually override io.WantCaptureMouse flag next frame (said flag is entirely left for your application handle).
export function CaptureMouseFromApp(capture = true) {
    bind.CaptureMouseFromApp(capture);
}
// Clipboard Utilities (also see the LogToClipboard() function to capture or output text data to the clipboard)
// IMGUI_API const char*   GetClipboardText();
export function GetClipboardText() { return bind.GetClipboardText(); }
// IMGUI_API void          SetClipboardText(const char* text);
export function SetClipboardText(text) { bind.SetClipboardText(text); }
// Settings/.Ini Utilities
// The disk functions are automatically called if io.IniFilename != NULL (default is "imgui.ini").
// Set io.IniFilename to NULL to load/save manually. Read io.WantSaveIniSettings description about handling .ini saving manually.
// IMGUI_API void          LoadIniSettingsFromDisk(const char* ini_filename);                  // call after CreateContext() and before the first call to NewFrame(). NewFrame() automatically calls LoadIniSettingsFromDisk(io.IniFilename).
export function LoadIniSettingsFromDisk(ini_filename) { throw new Error(); } // TODO
// IMGUI_API void          LoadIniSettingsFromMemory(const char* ini_data, size_t ini_size=0); // call after CreateContext() and before the first call to NewFrame() to provide .ini data from your own data source.
export function LoadIniSettingsFromMemory(ini_data, ini_size = 0) { bind.LoadIniSettingsFromMemory(ini_data); }
// IMGUI_API void          SaveIniSettingsToDisk(const char* ini_filename);
export function SaveIniSettingsToDisk(ini_filename) { throw new Error(); } // TODO
// IMGUI_API const char*   SaveIniSettingsToMemory(size_t* out_ini_size = NULL);               // return a zero-terminated string with the .ini data which you can save by your own mean. call when io.WantSaveIniSettings is set, then save data by your own mean and clear io.WantSaveIniSettings.
export function SaveIniSettingsToMemory(out_ini_size = null) { return bind.SaveIniSettingsToMemory(); }
// Memory Utilities
// All those functions are not reliant on the current context.
// If you reload the contents of imgui.cpp at runtime, you may need to call SetCurrentContext() + SetAllocatorFunctions() again.
// IMGUI_API void          SetAllocatorFunctions(void* (*alloc_func)(size_t sz, void* user_data), void(*free_func)(void* ptr, void* user_data), void* user_data = NULL);
export function SetAllocatorFunctions(alloc_func, free_func, user_data = null) {
    bind.SetAllocatorFunctions(alloc_func, free_func, user_data);
}
// IMGUI_API void*         MemAlloc(size_t sz);
export function MemAlloc(sz) { bind.MemAlloc(sz); }
// IMGUI_API void          MemFree(void* ptr);
export function MemFree(ptr) { bind.MemFree(ptr); }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWd1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxPQUFPLEtBQUssSUFBSSxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFFaEIsSUFBSSxJQUFpQixDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxPQUFPLFdBQWdCLEtBQTRCOztRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBbUIsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBa0IsRUFBUSxFQUFFO2dCQUNsRCxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQTtBQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUVoQixTQUFTLGFBQWEsQ0FBQyxHQUFvSztJQUN2TCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7S0FBRTtJQUM5QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRTtRQUFFLE9BQU8sQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFDO0tBQUU7SUFDcEQsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBNEIsRUFBRSxHQUFvSztJQUNyTixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTztLQUFFO0lBQ3RELElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO1FBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTztLQUFFO0lBQ3pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFvSDtJQUN4SSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0tBQUU7SUFDdEQsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBRSxDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUE0QixFQUFFLEdBQW9IO0lBQ3RLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTztLQUFFO0lBQ3pFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLEdBQXVGO0lBQzNHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0tBQUU7SUFDOUQsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLEtBQTRCLEVBQUUsR0FBdUY7SUFDekksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTztLQUFFO0lBQzVGLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBaUY7SUFDckcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztLQUFFO0lBQzNFLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLEtBQTRCLEVBQUUsR0FBaUY7SUFDbkksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtB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RyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdMLElBQUksYUFBYSxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSSxhQUFhLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0ksSUFBSSxlQUFlLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFBQyxJQUFJLGVBQWUsQ0FBQyxLQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNySixJQUFJLGFBQWEsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUFDLElBQUksYUFBYSxDQUFDLEtBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdJLElBQUksZUFBZSxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSSxlQUFlLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckosSUFBSSxZQUFZLEtBQTRCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLElBQUksYUFBYSxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSSxhQUFhLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0ksSUFBSSxlQUFlLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFBQyxJQUFJLGVBQWUs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