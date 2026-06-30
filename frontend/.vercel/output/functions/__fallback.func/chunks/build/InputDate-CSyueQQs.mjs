import { v as vueExports, k as useComponentProps, l as useAppConfig, y as useForwardProps, z as reactivePick, a5 as useFormField, t as tv, s as serverRenderer_cjs_prodExports, P as Primitive, f as _sfc_main$A, D as reactiveOmit, aq as useFieldGroup, ar as useComponentIcons, E as createReusableTemplate, aw as DateRangeField, ax as DateField, G as _sfc_main$x, q as useForwardExpose, r as useVModel, a7 as isNullish, av as isValueEqualOrExist, V as useFormControl, W as VisuallyHiddenInput_default, $ as Presence_default, w as createContext } from './server.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-sciPZ7zL.mjs';
import { L as Label_default } from './Textarea-BZalJ9Lx.mjs';
import { y as isEqual } from '../_/nitro.mjs';

const [injectCheckboxGroupRootContext] = /* @__PURE__ */ createContext("CheckboxGroupRoot");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const [injectCheckboxRootContext, provideCheckboxRootContext] = /* @__PURE__ */ createContext("CheckboxRoot");
var CheckboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    value: {
      type: null,
      required: false,
      default: "on"
    },
    id: {
      type: String,
      required: false
    },
    trueValue: {
      type: null,
      required: false,
      default: () => true
    },
    falseValue: {
      type: null,
      required: false,
      default: () => false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const checkboxGroupContext = injectCheckboxGroupRootContext(null);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? props.falseValue,
      passive: props.modelValue === void 0
    });
    const disabled = vueExports.computed(() => checkboxGroupContext?.disabled.value || props.disabled);
    const isChecked = vueExports.computed(() => isEqual(modelValue.value, props.trueValue));
    const checkboxState = vueExports.computed(() => {
      if (!isNullish(checkboxGroupContext?.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
      else {
        if (modelValue.value === "indeterminate") return "indeterminate";
        return isChecked.value;
      }
    });
    function handleClick() {
      if (!isNullish(checkboxGroupContext?.modelValue.value)) {
        const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
        if (isValueEqualOrExist(modelValueArray, props.value)) {
          const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
          modelValueArray.splice(index, 1);
        } else modelValueArray.push(props.value);
        checkboxGroupContext.modelValue.value = modelValueArray;
      } else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
      else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
    }
    const isFormControl = useFormControl(currentElement);
    const ariaLabel = vueExports.computed(() => props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0);
    provideCheckboxRootContext({
      disabled,
      state: checkboxState
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(checkboxGroupContext)?.rovingFocus.value ? vueExports.unref(RovingFocusItem_default) : vueExports.unref(Primitive)), vueExports.mergeProps(_ctx.$attrs, {
        id: _ctx.id,
        ref: vueExports.unref(forwardRef),
        role: "checkbox",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-checked": vueExports.unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
        "aria-required": _ctx.required,
        "aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
        "data-state": vueExports.unref(getState)(checkboxState.value),
        "data-disabled": disabled.value ? "" : void 0,
        disabled: disabled.value,
        focusable: vueExports.unref(checkboxGroupContext)?.rovingFocus.value ? !disabled.value : void 0,
        onKeydown: vueExports.withKeys(vueExports.withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: handleClick
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {
          modelValue: vueExports.unref(modelValue),
          state: checkboxState.value
        }), vueExports.unref(isFormControl) && _ctx.name && !vueExports.unref(checkboxGroupContext) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VisuallyHiddenInput_default), {
          key: 0,
          type: "checkbox",
          checked: !!checkboxState.value,
          name: _ctx.name,
          value: _ctx.value,
          disabled: disabled.value,
          required: _ctx.required
        }, null, 8, [
          "checked",
          "name",
          "value",
          "disabled",
          "required"
        ])) : vueExports.createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "id",
        "as-child",
        "as",
        "type",
        "aria-checked",
        "aria-required",
        "aria-label",
        "data-state",
        "data-disabled",
        "disabled",
        "focusable",
        "onKeydown"
      ]);
    };
  }
});
var CheckboxRoot_default = CheckboxRoot_vue_vue_type_script_setup_true_lang_default;
var CheckboxIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const rootContext = injectCheckboxRootContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(isIndeterminate)(vueExports.unref(rootContext).state.value) || vueExports.unref(rootContext).state.value === true }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          "data-state": vueExports.unref(getState)(vueExports.unref(rootContext).state.value),
          "data-disabled": vueExports.unref(rootContext).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": _ctx.asChild,
          as: _ctx.as
        }, _ctx.$attrs), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "data-disabled",
          "as-child",
          "as"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var CheckboxIndicator_default = CheckboxIndicator_vue_vue_type_script_setup_true_lang_default;
const theme$1 = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "highlight": {
      "true": ""
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-neutral"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    },
    {
      "color": "primary",
      "highlight": true,
      "class": {
        "base": "ring-primary"
      }
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": {
        "base": "ring-neutral"
      }
    },
    {
      "color": "success",
      "highlight": true,
      "class": {
        "base": "ring-success"
      }
    },
    {
      "color": "warning",
      "highlight": true,
      "class": {
        "base": "ring-warning"
      }
    },
    {
      "color": "error",
      "highlight": true,
      "class": {
        "base": "ring-error"
      }
    },
    {
      "color": "info",
      "highlight": true,
      "class": {
        "base": "ring-info"
      }
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": {
        "base": "ring-inverted"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    trueValue: { type: null, required: false },
    falseValue: { type: null, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const emits = __emit;
    const props = useComponentProps("checkbox", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
    const { id: _id, emitFormChange, emitFormInput, size, color, highlight, name, disabled, ariaAttrs } = useFormField(_props);
    const id = _id.value ?? vueExports.useId();
    const attrs = vueExports.useAttrs();
    const forwardedAttrs = vueExports.computed(() => {
      const { "data-state": _, ...rest } = attrs;
      return rest;
    });
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.checkbox || {} })({
      size: size.value ?? props.size,
      color: color.value ?? props.color,
      variant: props.variant,
      indicator: props.indicator,
      highlight: highlight.value ?? props.highlight,
      required: props.required,
      disabled: disabled.value
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: !vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(props).as : vueExports.unref(Label_default),
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: vueExports.unref(props).ui?.container }))}"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CheckboxRoot_default), vueExports.mergeProps({ id: vueExports.unref(id) }, { ...vueExports.unref(rootProps), ...forwardedAttrs.value, ...vueExports.unref(ariaAttrs) }, {
              name: vueExports.unref(name),
              disabled: vueExports.unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: vueExports.unref(props).ui?.base }),
              "onUpdate:modelValue": onUpdate
            }), {
              default: vueExports.withCtx(({ state }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CheckboxIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (state === "indeterminate") {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                            name: vueExports.unref(props).indeterminateIcon || vueExports.unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                            name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          state === "indeterminate" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                            key: 0,
                            name: vueExports.unref(props).indeterminateIcon || vueExports.unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                            key: 1,
                            name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(CheckboxIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                    }, {
                      default: vueExports.withCtx(() => [
                        state === "indeterminate" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                          key: 0,
                          name: vueExports.unref(props).indeterminateIcon || vueExports.unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                        }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                          key: 1,
                          name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (vueExports.unref(props).label || !!slots.label || (vueExports.unref(props).description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId}>`);
              if (vueExports.unref(props).label || !!slots.label) {
                serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(Label_default) : "p"), {
                  for: vueExports.unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: vueExports.unref(props).ui?.label })
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "label", {
                        label: vueExports.unref(props).label
                      }, () => {
                        _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        vueExports.renderSlot(_ctx.$slots, "label", {
                          label: vueExports.unref(props).label
                        }, () => [
                          vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).description || !!slots.description) {
                _push2(`<p data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {
                  description: vueExports.unref(props).description
                }, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: vueExports.unref(props).ui?.container })
              }, [
                vueExports.createVNode(vueExports.unref(CheckboxRoot_default), vueExports.mergeProps({ id: vueExports.unref(id) }, { ...vueExports.unref(rootProps), ...forwardedAttrs.value, ...vueExports.unref(ariaAttrs) }, {
                  name: vueExports.unref(name),
                  disabled: vueExports.unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: vueExports.unref(props).ui?.base }),
                  "onUpdate:modelValue": onUpdate
                }), {
                  default: vueExports.withCtx(({ state }) => [
                    vueExports.createVNode(vueExports.unref(CheckboxIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                    }, {
                      default: vueExports.withCtx(() => [
                        state === "indeterminate" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                          key: 0,
                          name: vueExports.unref(props).indeterminateIcon || vueExports.unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                        }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                          key: 1,
                          name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "name", "disabled", "class"])
              ], 2),
              vueExports.unref(props).label || !!slots.label || (vueExports.unref(props).description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
              }, [
                vueExports.unref(props).label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(Label_default) : "p"), {
                  key: 0,
                  for: vueExports.unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: vueExports.unref(props).ui?.label })
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.renderSlot(_ctx.$slots, "label", {
                      label: vueExports.unref(props).label
                    }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : vueExports.createCommentVNode("", true),
                vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "description", {
                    description: vueExports.unref(props).description
                  }, () => [
                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                  ])
                ], 2)) : vueExports.createCommentVNode("", true)
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "base": [
      "group relative inline-flex items-center rounded-md select-none",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "segment": [
      "rounded text-center outline-hidden data-placeholder:text-dimmed data-[segment=literal]:text-muted data-invalid:text-error data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "transition-colors"
    ],
    "separatorIcon": "shrink-0 size-4 text-muted"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": [
          "px-2 py-1 text-sm/4 gap-1",
          "gap-0.25"
        ],
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-10"
      },
      "sm": {
        "base": [
          "px-2.5 py-1.5 text-sm/4 gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-10"
      },
      "md": {
        "base": [
          "px-2.5 py-1.5 text-base/5 gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-9 data-[segment=month]:w-9 data-[segment=year]:w-11"
      },
      "lg": {
        "base": [
          "px-3 py-2 text-base/5 gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-9 data-[segment=month]:w-9 data-[segment=year]:w-11"
      },
      "xl": {
        "base": [
          "px-3 py-2 text-base gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "segment": "data-[segment=day]:w-10 data-[segment=month]:w-10 data-[segment=year]:w-12"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "neutral": "",
      "success": "",
      "warning": "",
      "error": "",
      "info": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "fixed": {
      "false": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "variant": "outline",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "variant": "soft",
      "class": {
        "segment": "focus:bg-accented/50 group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "subtle",
      "class": {
        "segment": "focus:bg-accented"
      }
    },
    {
      "variant": "ghost",
      "class": {
        "segment": "focus:bg-elevated group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "none",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-neutral"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    },
    {
      "fixed": false,
      "size": "xs",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "sm",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "md",
      "class": "md:text-sm"
    },
    {
      "fixed": false,
      "size": "lg",
      "class": "md:text-sm"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInputDate",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    separatorIcon: { type: null, required: false },
    range: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    defaultPlaceholder: { type: Object, required: false },
    placeholder: { type: Object, required: false },
    hourCycle: { type: null, required: false },
    step: { type: Object, required: false },
    granularity: { type: String, required: false },
    hideTimeZone: { type: Boolean, required: false },
    maxValue: { type: Object, required: false },
    minValue: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    isDateUnavailable: { type: Function, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const props = useComponentProps("inputDate", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactiveOmit(props, "id", "name", "range", "modelValue", "defaultValue", "color", "variant", "size", "highlight", "fixed", "disabled", "autofocus", "autofocusDelay", "icon", "avatar", "leading", "leadingIcon", "trailing", "trailingIcon", "loading", "loadingIcon", "separatorIcon", "class", "ui"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formFieldSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(_props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const [DefineSegmentsTemplate, ReuseSegmentsTemplate] = createReusableTemplate();
    const inputSize = vueExports.computed(() => fieldGroupSize.value || formFieldSize.value);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.inputDate || {} })({
      color: color.value ?? props.color,
      variant: props.variant,
      size: inputSize.value ?? props.size,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      loading: props.loading,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputsRef = vueExports.ref([]);
    function setInputRef(index, el) {
      inputsRef.value[index] = el;
    }
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function onFocus(event) {
      emitFormFocus();
      emits("focus", event);
    }
    const DateField$1 = vueExports.computed(() => props.range ? DateRangeField : DateField);
    __expose({
      inputsRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineSegmentsTemplate), null, {
        default: vueExports.withCtx(({ segments, type }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(segments, (segment, index) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DateField$1).Input, {
                key: `${segment.part}-${index}`,
                ref_for: true,
                ref: (el) => setInputRef(index, el),
                type,
                part: segment.part,
                "data-slot": "segment",
                class: ui.value.segment({ class: vueExports.unref(props).ui?.segment }),
                "data-segment": segment.part
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(segment.value.trim())}`);
                  } else {
                    return [
                      vueExports.createTextVNode(vueExports.toDisplayString(segment.value.trim()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(segments, (segment, index) => {
                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DateField$1).Input, {
                  key: `${segment.part}-${index}`,
                  ref_for: true,
                  ref: (el) => setInputRef(index, el),
                  type,
                  part: segment.part,
                  "data-slot": "segment",
                  class: ui.value.segment({ class: vueExports.unref(props).ui?.segment }),
                  "data-segment": segment.part
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createTextVNode(vueExports.toDisplayString(segment.value.trim()), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "part", "class", "data-segment"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DateField$1).Root, vueExports.mergeProps({ ...vueExports.unref(rootProps), ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }, {
        id: vueExports.unref(id),
        "model-value": vueExports.unref(props).modelValue,
        "default-value": vueExports.unref(props).defaultValue,
        name: vueExports.unref(name),
        disabled: vueExports.unref(disabled),
        "data-slot": "base",
        class: ui.value.base({ class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] }),
        "onUpdate:modelValue": onUpdate,
        onBlur,
        onFocus
      }), {
        default: vueExports.withCtx(({ segments }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Array.isArray(segments)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseSegmentsTemplate), { segments }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseSegmentsTemplate), {
                segments: segments.start,
                type: "start"
              }, null, _parent2, _scopeId));
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                  name: vueExports.unref(props).separatorIcon || vueExports.unref(appConfig).ui.icons.minus,
                  "data-slot": "separatorIcon",
                  class: ui.value.separatorIcon({ class: vueExports.unref(props).ui?.separatorIcon })
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseSegmentsTemplate), {
                segments: segments.end,
                type: "end"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (vueExports.unref(isLeading) || !!vueExports.unref(props).avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.leading({ class: vueExports.unref(props).ui?.leading }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (vueExports.unref(isLeading) && vueExports.unref(leadingIconName)) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: vueExports.unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: vueExports.unref(props).ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!vueExports.unref(props).avatar) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({
                    size: vueExports.unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, vueExports.unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: vueExports.unref(props).ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.trailing({ class: vueExports.unref(props).ui?.trailing }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (vueExports.unref(trailingIconName)) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: vueExports.unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: vueExports.unref(props).ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Array.isArray(segments) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseSegmentsTemplate), {
                key: 0,
                segments
              }, null, 8, ["segments"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                vueExports.createVNode(vueExports.unref(ReuseSegmentsTemplate), {
                  segments: segments.start,
                  type: "start"
                }, null, 8, ["segments"]),
                vueExports.renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [
                  vueExports.createVNode(_sfc_main$A, {
                    name: vueExports.unref(props).separatorIcon || vueExports.unref(appConfig).ui.icons.minus,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: vueExports.unref(props).ui?.separatorIcon })
                  }, null, 8, ["name", "class"])
                ]),
                vueExports.createVNode(vueExports.unref(ReuseSegmentsTemplate), {
                  segments: segments.end,
                  type: "end"
                }, null, 8, ["segments"])
              ], 64)),
              vueExports.renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              vueExports.unref(isLeading) || !!vueExports.unref(props).avatar || !!slots.leading ? (vueExports.openBlock(), vueExports.createBlock("span", {
                key: 2,
                "data-slot": "leading",
                class: ui.value.leading({ class: vueExports.unref(props).ui?.leading })
              }, [
                vueExports.renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                    key: 0,
                    name: vueExports.unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: vueExports.unref(props).ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!vueExports.unref(props).avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                    key: 1,
                    size: vueExports.unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, vueExports.unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: vueExports.unref(props).ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                ])
              ], 2)) : vueExports.createCommentVNode("", true),
              vueExports.unref(isTrailing) || !!slots.trailing ? (vueExports.openBlock(), vueExports.createBlock("span", {
                key: 3,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: vueExports.unref(props).ui?.trailing })
              }, [
                vueExports.renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                    key: 0,
                    name: vueExports.unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: vueExports.unref(props).ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                ])
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/InputDate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=InputDate-CSyueQQs.mjs.map
