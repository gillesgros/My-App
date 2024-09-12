"use strict";
/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_vue_1 = require("./components/HelloWorld.vue");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vitejs.dev"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ("/vite.svg") }, { class: ("logo") }), { alt: ("Vite logo") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vuejs.org/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ("./assets/vue.svg") }, { class: ("logo vue") }), { alt: ("Vue logo") }));
    // @ts-ignore
    [HelloWorld_vue_1.default,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(HelloWorld_vue_1.default, new HelloWorld_vue_1.default({ msg: ("Vite + Vue"), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ msg: ("Vite + Vue"), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['vue'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            HelloWorld: HelloWorld_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
;
