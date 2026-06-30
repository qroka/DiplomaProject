import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$A, g as _sfc_main$u, o as _sfc_main$d, k as useComponentProps, l as useAppConfig, y as useForwardProps, z as reactivePick, t as tv, A as get$1, a9 as useFormField, a0 as useDirection, r as useVModel, q as useForwardExpose, P as Primitive, a4 as useId, a5 as Separator_default, Z as useFormControl, a1 as RovingFocusGroup_default, $ as VisuallyHiddenInput_default, a2 as useEventListener, a3 as Presence_default, w as createContext, a6 as useArrowNavigation, a7 as getActiveElement, a8 as useKbd$1, Y as handleAndDispatchCustomEvent$1 } from './server.mjs';
import { b as _sfc_main$2$1, a as _sfc_main$1$1, _ as _sfc_main$5, L as Label_default } from './Textarea-C75BP7Lm.mjs';
import { _ as __nuxt_component_8 } from './Surface-BpUAMKsj.mjs';
import { _ as _sfc_main$3 } from './Collapsible-CDkT1GM7.mjs';
import { a as _sfc_main$1$2, _ as _sfc_main$4 } from './InputDate-DlbLX7zg.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-CItW57sS.mjs';
import { _ as _sfc_main$6 } from './FileUpload-BkDe3Tt1.mjs';
import { y as isEqual } from '../_/nitro.mjs';

const RADIO_SELECT = "radio.select";
function handleSelect(event, value, callback) {
  const eventDetail = {
    originalEvent: event,
    value
  };
  handleAndDispatchCustomEvent$1(RADIO_SELECT, callback, eventDetail);
}
var Radio_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Radio",
  props: {
    id: {
      type: String,
      required: false
    },
    value: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
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
  emits: ["update:checked", "select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const checked = useVModel(props, "checked", emits, { passive: props.checked === void 0 });
    const { value } = vueExports.toRefs(props);
    const { forwardRef, currentElement: triggerElement } = useForwardExpose();
    const isFormControl = useFormControl(triggerElement);
    const ariaLabel = vueExports.computed(() => props.id && triggerElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText ?? props.value : void 0);
    function handleClick(event) {
      if (props.disabled) return;
      handleSelect(event, props.value, (ev) => {
        emits("select", ev);
        if (ev?.defaultPrevented) return;
        checked.value = true;
        if (isFormControl.value) ev.stopPropagation();
      });
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(_ctx.$attrs, {
        id: _ctx.id,
        ref: vueExports.unref(forwardRef),
        role: "radio",
        type: _ctx.as === "button" ? "button" : void 0,
        as: _ctx.as,
        "aria-checked": vueExports.unref(checked),
        "aria-label": ariaLabel.value,
        "as-child": _ctx.asChild,
        disabled: _ctx.disabled ? "" : void 0,
        "data-state": vueExports.unref(checked) ? "checked" : "unchecked",
        "data-disabled": _ctx.disabled ? "" : void 0,
        value: vueExports.unref(value),
        required: _ctx.required,
        name: _ctx.name,
        onClick: vueExports.withModifiers(handleClick, ["stop"])
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { checked: vueExports.unref(checked) }), vueExports.unref(isFormControl) && _ctx.name ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VisuallyHiddenInput_default), {
          key: 0,
          type: "radio",
          tabindex: "-1",
          value: vueExports.unref(value),
          checked: !!vueExports.unref(checked),
          name: _ctx.name,
          disabled: _ctx.disabled,
          required: _ctx.required
        }, null, 8, [
          "value",
          "checked",
          "name",
          "disabled",
          "required"
        ])) : vueExports.createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "id",
        "type",
        "as",
        "aria-checked",
        "aria-label",
        "as-child",
        "disabled",
        "data-state",
        "data-disabled",
        "value",
        "required",
        "name"
      ]);
    };
  }
});
var Radio_default = Radio_vue_vue_type_script_setup_true_lang_default;
const [injectRadioGroupRootContext, provideRadioGroupRootContext] = /* @__PURE__ */ createContext("RadioGroupRoot");
var RadioGroupRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {
      type: null,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    orientation: {
      type: String,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue,
      passive: props.modelValue === void 0
    });
    const { disabled, loop, orientation, name, required, dir: propDir } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    const isFormControl = useFormControl(currentElement);
    provideRadioGroupRootContext({
      modelValue,
      changeModelValue: (value) => {
        modelValue.value = value;
      },
      disabled,
      loop,
      orientation,
      name: name?.value,
      required
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(RovingFocusGroup_default), {
        "as-child": "",
        orientation: vueExports.unref(orientation),
        dir: vueExports.unref(dir),
        loop: vueExports.unref(loop)
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          ref: vueExports.unref(forwardRef),
          role: "radiogroup",
          "data-disabled": vueExports.unref(disabled) ? "" : void 0,
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "aria-orientation": vueExports.unref(orientation),
          "aria-required": vueExports.unref(required),
          dir: vueExports.unref(dir)
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) }), vueExports.unref(isFormControl) && vueExports.unref(name) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VisuallyHiddenInput_default), {
            key: 0,
            required: vueExports.unref(required),
            disabled: vueExports.unref(disabled),
            value: vueExports.unref(modelValue),
            name: vueExports.unref(name)
          }, null, 8, [
            "required",
            "disabled",
            "value",
            "name"
          ])) : vueExports.createCommentVNode("v-if", true)]),
          _: 3
        }, 8, [
          "data-disabled",
          "as-child",
          "as",
          "aria-orientation",
          "aria-required",
          "dir"
        ])]),
        _: 3
      }, 8, [
        "orientation",
        "dir",
        "loop"
      ]);
    };
  }
});
var RadioGroupRoot_default = RadioGroupRoot_vue_vue_type_script_setup_true_lang_default;
const [injectRadioGroupItemContext, provideRadiogroupItemContext] = /* @__PURE__ */ createContext("RadioGroupItem");
var RadioGroupItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  inheritAttrs: false,
  __name: "RadioGroupItem",
  props: {
    id: {
      type: String,
      required: false
    },
    value: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
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
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectRadioGroupRootContext();
    const disabled = vueExports.computed(() => rootContext.disabled.value || props.disabled);
    const required = vueExports.computed(() => rootContext.required.value || props.required);
    const checked = vueExports.computed(() => isEqual(rootContext.modelValue?.value, props.value));
    provideRadiogroupItemContext({
      disabled,
      checked
    });
    const isArrowKeyPressed = vueExports.ref(false);
    const ARROW_KEYS = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight"
    ];
    useEventListener("keydown", (event) => {
      if (ARROW_KEYS.includes(event.key)) isArrowKeyPressed.value = true;
    });
    useEventListener("keyup", () => {
      isArrowKeyPressed.value = false;
    });
    function handleFocus() {
      setTimeout(() => {
        if (isArrowKeyPressed.value) currentElement.value?.click();
      }, 0);
    }
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(RovingFocusItem_default), {
        checked: checked.value,
        disabled: disabled.value,
        "as-child": "",
        focusable: !disabled.value,
        active: checked.value
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(Radio_default, vueExports.mergeProps({
          ..._ctx.$attrs,
          ...props
        }, {
          ref: vueExports.unref(forwardRef),
          checked: checked.value,
          required: required.value,
          disabled: disabled.value,
          "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => vueExports.unref(rootContext).changeModelValue(_ctx.value)),
          onSelect: _cache[1] || (_cache[1] = ($event) => emits("select", $event)),
          onKeydown: _cache[2] || (_cache[2] = vueExports.withKeys(vueExports.withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: handleFocus
        }), {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {
            checked: checked.value,
            required: required.value,
            disabled: disabled.value
          })]),
          _: 3
        }, 16, [
          "checked",
          "required",
          "disabled"
        ])]),
        _: 3
      }, 8, [
        "checked",
        "disabled",
        "focusable",
        "active"
      ]);
    };
  }
});
var RadioGroupItem_default = RadioGroupItem_vue_vue_type_script_setup_true_lang_default;
var RadioGroupIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RadioGroupIndicator",
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
    const itemContext = injectRadioGroupItemContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), { present: _ctx.forceMount || vueExports.unref(itemContext).checked.value }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), vueExports.mergeProps({
          ref: vueExports.unref(forwardRef),
          "data-state": vueExports.unref(itemContext).checked.value ? "checked" : "unchecked",
          "data-disabled": vueExports.unref(itemContext).disabled.value ? "" : void 0,
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
var RadioGroupIndicator_default = RadioGroupIndicator_vue_vue_type_script_setup_true_lang_default;
const _hoisted_1 = {
  "aria-live": "polite",
  "aria-atomic": "true",
  role: "status",
  style: {
    transform: "translateX(-100%)",
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0
  }
};
const [injectStepperRootContext, provideStepperRootContext] = /* @__PURE__ */ createContext("StepperRoot");
var StepperRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperRoot",
  props: {
    defaultValue: {
      type: Number,
      required: false,
      default: 1
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    dir: {
      type: String,
      required: false
    },
    modelValue: {
      type: Number,
      required: false
    },
    linear: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { dir: propDir, orientation: propOrientation, linear } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    const totalStepperItems = vueExports.ref(/* @__PURE__ */ new Set());
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue,
      passive: props.modelValue === void 0
    });
    const totalStepperItemsArray = vueExports.computed(() => Array.from(totalStepperItems.value));
    const isFirstStep = vueExports.computed(() => modelValue.value === 1);
    const isLastStep = vueExports.computed(() => modelValue.value === totalStepperItemsArray.value.length);
    const totalSteps = vueExports.computed(() => totalStepperItems.value.size);
    function goToStep(step) {
      if (step > totalSteps.value) return;
      if (step < 1) return;
      if (totalStepperItems.value.size && !!totalStepperItemsArray.value[step] && !!totalStepperItemsArray.value[step].getAttribute("disabled")) return;
      if (linear.value) {
        if (step > (modelValue.value ?? 1) + 1) return;
      }
      modelValue.value = step;
    }
    function nextStep() {
      goToStep((modelValue.value ?? 1) + 1);
    }
    function prevStep() {
      goToStep((modelValue.value ?? 1) - 1);
    }
    function hasNext() {
      return (modelValue.value ?? 1) < totalSteps.value;
    }
    function hasPrev() {
      return (modelValue.value ?? 1) > 1;
    }
    const nextStepperItem = vueExports.ref(null);
    const prevStepperItem = vueExports.ref(null);
    const isNextDisabled = vueExports.computed(() => nextStepperItem.value ? nextStepperItem.value.getAttribute("disabled") === "" : true);
    const isPrevDisabled = vueExports.computed(() => prevStepperItem.value ? prevStepperItem.value.getAttribute("disabled") === "" : true);
    vueExports.watch(modelValue, async () => {
      await vueExports.nextTick(() => {
        nextStepperItem.value = totalStepperItemsArray.value.length && modelValue.value < totalStepperItemsArray.value.length ? totalStepperItemsArray.value[modelValue.value] : null;
        prevStepperItem.value = totalStepperItemsArray.value.length && modelValue.value > 1 ? totalStepperItemsArray.value[modelValue.value - 2] : null;
      });
    });
    vueExports.watch(totalStepperItemsArray, async () => {
      await vueExports.nextTick(() => {
        nextStepperItem.value = totalStepperItemsArray.value.length && modelValue.value < totalStepperItemsArray.value.length ? totalStepperItemsArray.value[modelValue.value] : null;
        prevStepperItem.value = totalStepperItemsArray.value.length && modelValue.value > 1 ? totalStepperItemsArray.value[modelValue.value - 2] : null;
      });
    });
    provideStepperRootContext({
      modelValue,
      changeModelValue: (value) => {
        modelValue.value = value;
      },
      orientation: propOrientation,
      dir,
      linear,
      totalStepperItems
    });
    __expose({
      goToStep,
      nextStep,
      prevStep,
      modelValue,
      totalSteps,
      isNextDisabled,
      isPrevDisabled,
      isFirstStep,
      isLastStep,
      hasNext,
      hasPrev
    });
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        role: "group",
        "aria-label": "progress",
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-linear": vueExports.unref(linear) ? "" : void 0,
        "data-orientation": _ctx.orientation
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {
          modelValue: vueExports.unref(modelValue),
          totalSteps: totalStepperItems.value.size,
          isNextDisabled: isNextDisabled.value,
          isPrevDisabled: isPrevDisabled.value,
          isFirstStep: isFirstStep.value,
          isLastStep: isLastStep.value,
          goToStep,
          nextStep,
          prevStep,
          hasNext,
          hasPrev
        }), vueExports.createElementVNode("div", _hoisted_1, " Step " + vueExports.toDisplayString(vueExports.unref(modelValue)) + " of " + vueExports.toDisplayString(totalStepperItems.value.size), 1)]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-linear",
        "data-orientation"
      ]);
    };
  }
});
var StepperRoot_default = StepperRoot_vue_vue_type_script_setup_true_lang_default;
const [injectStepperItemContext, provideStepperItemContext] = /* @__PURE__ */ createContext("StepperItem");
var StepperItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperItem",
  props: {
    step: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { disabled, step, completed } = vueExports.toRefs(props);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectStepperRootContext();
    const titleId = useId(void 0, "reka-stepper-item-title");
    const descriptionId = useId(void 0, "reka-stepper-item-description");
    const itemState = vueExports.computed(() => {
      if (completed.value) return "completed";
      if (rootContext.modelValue.value === step.value) return "active";
      if (rootContext.modelValue.value > step.value) return "completed";
      return "inactive";
    });
    const isFocusable = vueExports.computed(() => {
      if (disabled.value) return false;
      if (rootContext.linear.value) return step.value <= rootContext.modelValue.value || step.value === rootContext.modelValue.value + 1;
      return true;
    });
    provideStepperItemContext({
      titleId,
      descriptionId,
      state: itemState,
      disabled,
      step,
      isFocusable
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        ref: vueExports.unref(forwardRef),
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-current": itemState.value === "active" ? "true" : void 0,
        "data-state": itemState.value,
        disabled: vueExports.unref(disabled) || !isFocusable.value ? "" : void 0,
        "data-disabled": vueExports.unref(disabled) || !isFocusable.value ? "" : void 0,
        "data-orientation": vueExports.unref(rootContext).orientation.value
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { state: itemState.value })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-current",
        "data-state",
        "disabled",
        "data-disabled",
        "data-orientation"
      ]);
    };
  }
});
var StepperItem_default = StepperItem_vue_vue_type_script_setup_true_lang_default;
var StepperDescription_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperDescription",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "p"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const itemContext = injectStepperItemContext();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { id: vueExports.unref(itemContext).descriptionId }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var StepperDescription_default = StepperDescription_vue_vue_type_script_setup_true_lang_default;
var StepperIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const itemContext = injectStepperItemContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { step: vueExports.unref(itemContext).step.value }, () => [vueExports.createTextVNode(" Step " + vueExports.toDisplayString(vueExports.unref(itemContext).step.value), 1)])]),
        _: 3
      }, 16);
    };
  }
});
var StepperIndicator_default = StepperIndicator_vue_vue_type_script_setup_true_lang_default;
var StepperSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperSeparator",
  props: {
    orientation: {
      type: String,
      required: false
    },
    decorative: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectStepperRootContext();
    const itemContext = injectStepperItemContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Separator_default), vueExports.mergeProps(props, {
        decorative: "",
        orientation: vueExports.unref(rootContext).orientation.value,
        "data-state": vueExports.unref(itemContext).state.value
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["orientation", "data-state"]);
    };
  }
});
var StepperSeparator_default = StepperSeparator_vue_vue_type_script_setup_true_lang_default;
var StepperTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperTitle",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "h4"
    }
  },
  setup(__props) {
    const props = __props;
    const itemContext = injectStepperItemContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { id: vueExports.unref(itemContext).titleId }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var StepperTitle_default = StepperTitle_vue_vue_type_script_setup_true_lang_default;
var StepperTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "StepperTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const rootContext = injectStepperRootContext();
    const itemContext = injectStepperItemContext();
    const kbd = useKbd$1();
    const stepperItems = vueExports.computed(() => Array.from(rootContext.totalStepperItems.value));
    function handleMouseDown(event) {
      if (itemContext.disabled.value) return;
      if (rootContext.linear.value) {
        if (itemContext.step.value <= rootContext.modelValue.value || itemContext.step.value === rootContext.modelValue.value + 1) {
          if (event.ctrlKey === false) {
            rootContext.changeModelValue(itemContext.step.value);
            return;
          }
        }
      } else if (event.ctrlKey === false) {
        rootContext.changeModelValue(itemContext.step.value);
        return;
      }
      event.preventDefault();
    }
    function handleKeyDown(event) {
      event.preventDefault();
      if (itemContext.disabled.value) return;
      if ((event.key === kbd.ENTER || event.key === kbd.SPACE) && !event.ctrlKey && !event.shiftKey) rootContext.changeModelValue(itemContext.step.value);
      if ([
        kbd.ARROW_LEFT,
        kbd.ARROW_RIGHT,
        kbd.ARROW_UP,
        kbd.ARROW_DOWN
      ].includes(event.key)) useArrowNavigation(event, getActiveElement(), void 0, {
        itemsArray: stepperItems.value,
        focus: true,
        loop: false,
        arrowKeyOptions: rootContext.orientation.value,
        dir: rootContext.dir.value
      });
    }
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        ref: vueExports.unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-state": vueExports.unref(itemContext).state.value,
        disabled: vueExports.unref(itemContext).disabled.value || !vueExports.unref(itemContext).isFocusable.value ? "" : void 0,
        "data-disabled": vueExports.unref(itemContext).disabled.value || !vueExports.unref(itemContext).isFocusable.value ? "" : void 0,
        "data-orientation": vueExports.unref(rootContext).orientation.value,
        tabindex: vueExports.unref(itemContext).isFocusable.value ? 0 : -1,
        "aria-describedby": vueExports.unref(itemContext).descriptionId,
        "aria-labelledby": vueExports.unref(itemContext).titleId,
        onMousedown: vueExports.withModifiers(handleMouseDown, ["left"]),
        onKeydown: vueExports.withKeys(handleKeyDown, [
          "enter",
          "space",
          "left",
          "right",
          "up",
          "down"
        ])
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child",
        "data-state",
        "disabled",
        "data-disabled",
        "data-orientation",
        "tabindex",
        "aria-describedby",
        "aria-labelledby"
      ]);
    };
  }
});
var StepperTrigger_default = StepperTrigger_vue_vue_type_script_setup_true_lang_default;
const theme$1 = {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-full group-data-[disabled]:opacity-75 bg-accented",
    "wrapper": "",
    "title": "font-medium text-default",
    "description": "text-muted text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-6 text-xs",
        "icon": "size-3",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-1.5"
      },
      "sm": {
        "trigger": "size-8 text-sm",
        "icon": "size-4",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-10 text-base",
        "icon": "size-5",
        "title": "text-sm",
        "description": "text-sm",
        "wrapper": "mt-2.5"
      },
      "lg": {
        "trigger": "size-12 text-lg",
        "icon": "size-6",
        "title": "text-base",
        "description": "text-base",
        "wrapper": "mt-3"
      },
      "xl": {
        "trigger": "size-14 text-xl",
        "icon": "size-7",
        "title": "text-lg",
        "description": "text-lg",
        "wrapper": "mt-3.5"
      }
    },
    "color": {
      "primary": {
        "trigger": "group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary focus-visible:outline-primary",
        "separator": "group-data-[state=completed]:bg-primary"
      },
      "secondary": {
        "trigger": "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary focus-visible:outline-secondary",
        "separator": "group-data-[state=completed]:bg-secondary"
      },
      "tertiary": {
        "trigger": "group-data-[state=completed]:bg-tertiary group-data-[state=active]:bg-tertiary focus-visible:outline-tertiary",
        "separator": "group-data-[state=completed]:bg-tertiary"
      },
      "info": {
        "trigger": "group-data-[state=completed]:bg-info group-data-[state=active]:bg-info focus-visible:outline-info",
        "separator": "group-data-[state=completed]:bg-info"
      },
      "success": {
        "trigger": "group-data-[state=completed]:bg-success group-data-[state=active]:bg-success focus-visible:outline-success",
        "separator": "group-data-[state=completed]:bg-success"
      },
      "warning": {
        "trigger": "group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning focus-visible:outline-warning",
        "separator": "group-data-[state=completed]:bg-warning"
      },
      "error": {
        "trigger": "group-data-[state=completed]:bg-error group-data-[state=active]:bg-error focus-visible:outline-error",
        "separator": "group-data-[state=completed]:bg-error"
      },
      "neutral": {
        "trigger": "group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted focus-visible:outline-inverted",
        "separator": "group-data-[state=completed]:bg-inverted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const _sfc_main$2 = {
  __name: "UStepper",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    as: { type: null, required: false },
    items: { type: Array, required: true },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    valueKey: { type: null, required: false, default: "value" },
    defaultValue: { type: [String, Number], required: false },
    disabled: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    linear: { type: Boolean, required: false, default: true }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vueExports.mergeModels(["next", "prev"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const props = useComponentProps("stepper", _props);
    const modelValue = vueExports.useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "linear"));
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.stepper || {} })({
      orientation: props.orientation,
      size: props.size,
      color: props.color
    }));
    const currentStepIndex = vueExports.computed({
      get() {
        const value = modelValue.value ?? props.defaultValue;
        return (typeof value === "string" ? props.items.findIndex((item) => get$1(item, props.valueKey) === value) : value) ?? 0;
      },
      set(value) {
        modelValue.value = get$1(props.items?.[value], props.valueKey) ?? value;
      }
    });
    const currentStep = vueExports.computed(() => props.items?.[currentStepIndex.value]);
    const hasNext = vueExports.computed(() => currentStepIndex.value < props.items?.length - 1);
    const hasPrev = vueExports.computed(() => currentStepIndex.value > 0);
    __expose({
      next() {
        if (hasNext.value) {
          currentStepIndex.value += 1;
          emits("next", currentStep.value);
        }
      },
      prev() {
        if (hasPrev.value) {
          currentStepIndex.value -= 1;
          emits("prev", currentStep.value);
        }
      },
      hasNext,
      hasPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), {
        modelValue: currentStepIndex.value,
        "onUpdate:modelValue": ($event) => currentStepIndex.value = $event,
        orientation: vueExports.unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="header" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: vueExports.unref(props).ui?.header }))}"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).items, (item, count) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperItem_default), {
                key: count,
                step: count,
                disabled: item.disabled || vueExports.unref(props).disabled,
                "data-slot": "item",
                class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class] })
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-slot="container" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperTrigger_default), {
                      "data-slot": "trigger",
                      class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger] })
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperIndicator_default), {
                            "data-slot": "indicator",
                            class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => {
                                  if (item.icon) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                                      name: item.icon,
                                      "data-slot": "icon",
                                      class: ui.value.icon({ class: [vueExports.unref(props).ui?.icon, item.ui?.icon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(count + 1)}<!--]-->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  vueExports.renderSlot(_ctx.$slots, "indicator", {
                                    item,
                                    ui: ui.value
                                  }, () => [
                                    item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                      key: 0,
                                      name: item.icon,
                                      "data-slot": "icon",
                                      class: ui.value.icon({ class: [vueExports.unref(props).ui?.icon, item.ui?.icon] })
                                    }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(count + 1), 1)
                                    ], 64))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(StepperIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [vueExports.unref(props).ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (count < vueExports.unref(props).items.length - 1) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperSeparator_default), {
                        "data-slot": "separator",
                        class: ui.value.separator({ class: [vueExports.unref(props).ui?.separator, item.ui?.separator] })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => {
                      if (item.title || !!slots[item.slot ? `${item.slot}-title` : "title"]) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperTitle_default), {
                          as: "div",
                          "data-slot": "title",
                          class: ui.value.title({ class: [vueExports.unref(props).ui?.title, item.ui?.title] })
                        }, {
                          default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                                _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(item.title), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots[item.slot ? `${item.slot}-description` : "description"]) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(StepperDescription_default), {
                          as: "div",
                          "data-slot": "description",
                          class: ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description] })
                        }, {
                          default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => {
                                _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.description)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(item.description), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] })
                      }, [
                        vueExports.createVNode(vueExports.unref(StepperTrigger_default), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger] })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(StepperIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [vueExports.unref(props).ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        count < vueExports.unref(props).items.length - 1 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperSeparator_default), {
                          key: 0,
                          "data-slot": "separator",
                          class: ui.value.separator({ class: [vueExports.unref(props).ui?.separator, item.ui?.separator] })
                        }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                      ], 2),
                      vueExports.createVNode("div", {
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => [
                          item.title || !!slots[item.slot ? `${item.slot}-title` : "title"] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperTitle_default), {
                            key: 0,
                            as: "div",
                            "data-slot": "title",
                            class: ui.value.title({ class: [vueExports.unref(props).ui?.title, item.ui?.title] })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                          item.description || !!slots[item.slot ? `${item.slot}-description` : "description"] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperDescription_default), {
                            key: 1,
                            as: "div",
                            "data-slot": "description",
                            class: ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description] })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (currentStep.value?.content || !!slots.content || currentStep.value?.slot && !!slots[currentStep.value.slot]) {
              _push2(`<div data-slot="content" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.content({ class: vueExports.unref(props).ui?.content }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, currentStep.value?.slot || "content", { item: currentStep.value }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(currentStep.value?.content)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("div", {
                "data-slot": "header",
                class: ui.value.header({ class: vueExports.unref(props).ui?.header })
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).items, (item, count) => {
                  return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperItem_default), {
                    key: count,
                    step: count,
                    disabled: item.disabled || vueExports.unref(props).disabled,
                    "data-slot": "item",
                    class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class] })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] })
                      }, [
                        vueExports.createVNode(vueExports.unref(StepperTrigger_default), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger] })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(StepperIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [vueExports.unref(props).ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        count < vueExports.unref(props).items.length - 1 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperSeparator_default), {
                          key: 0,
                          "data-slot": "separator",
                          class: ui.value.separator({ class: [vueExports.unref(props).ui?.separator, item.ui?.separator] })
                        }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                      ], 2),
                      vueExports.createVNode("div", {
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => [
                          item.title || !!slots[item.slot ? `${item.slot}-title` : "title"] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperTitle_default), {
                            key: 0,
                            as: "div",
                            "data-slot": "title",
                            class: ui.value.title({ class: [vueExports.unref(props).ui?.title, item.ui?.title] })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                          item.description || !!slots[item.slot ? `${item.slot}-description` : "description"] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(StepperDescription_default), {
                            key: 1,
                            as: "div",
                            "data-slot": "description",
                            class: ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description] })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["step", "disabled", "class"]);
                }), 128))
              ], 2),
              currentStep.value?.content || !!slots.content || currentStep.value?.slot && !!slots[currentStep.value.slot] ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                "data-slot": "content",
                class: ui.value.content({ class: vueExports.unref(props).ui?.content })
              }, [
                vueExports.renderSlot(_ctx.$slots, currentStep.value?.slot || "content", { item: currentStep.value }, () => [
                  vueExports.createTextVNode(vueExports.toDisplayString(currentStep.value?.content), 1)
                ])
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative",
    "fieldset": "flex gap-x-2",
    "legend": "mb-1 block font-medium text-default",
    "item": "flex items-start",
    "container": "flex items-center",
    "base": "rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full after:bg-default after:rounded-full",
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
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "tertiary": {
        "base": "focus-visible:outline-tertiary",
        "indicator": "bg-tertiary"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
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
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "item": ""
      },
      "card": {
        "item": "border border-muted rounded-lg"
      },
      "table": {
        "item": "border border-muted"
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "indicator": {
      "start": {
        "item": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "item": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "sm": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "md": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "lg": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "xl": {
        "fieldset": "gap-y-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2"
      }
    },
    "highlight": {
      "true": ""
    },
    "disabled": {
      "true": {
        "item": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3"
      }
    },
    {
      "size": "md",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        "fieldset": "gap-0 -space-x-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        "fieldset": "gap-0 -space-y-px"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "tertiary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-tertiary"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "secondary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "tertiary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-tertiary/10 has-data-[state=checked]:border-tertiary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "info",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "success",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "warning",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "error",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "neutral",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "variant": [
        "card",
        "table"
      ],
      "disabled": true,
      "class": {
        "item": "cursor-not-allowed"
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
      "color": "secondary",
      "highlight": true,
      "class": {
        "base": "ring-secondary"
      }
    },
    {
      "color": "tertiary",
      "highlight": true,
      "class": {
        "base": "ring-tertiary"
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
const _sfc_main$1 = {
  __name: "URadioGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    legend: { type: String, required: false },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    size: { type: null, required: false },
    variant: { type: null, required: false },
    color: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    indicator: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const props = useComponentProps("radioGroup", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "loop", "required"), emits);
    const { emitFormChange, emitFormInput, color, name, size, highlight, id: _id, disabled, ariaAttrs } = useFormField(_props, { bind: false });
    const id = _id.value ?? vueExports.useId();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.radioGroup || {} })({
      size: size.value ?? props.size,
      color: color.value ?? props.color,
      highlight: highlight.value ?? props.highlight,
      disabled: disabled.value,
      required: props.required,
      orientation: props.orientation,
      variant: props.variant,
      indicator: props.indicator
    }));
    function normalizeItem(item) {
      if (item === null) {
        return {
          id: `${id}:null`,
          value: void 0,
          label: void 0
        };
      }
      if (typeof item === "string" || typeof item === "number" || typeof item === "bigint") {
        return {
          id: `${id}:${item}`,
          value: String(item),
          label: String(item)
        };
      }
      const value = get$1(item, props.valueKey);
      const label = get$1(item, props.labelKey);
      const description = get$1(item, props.descriptionKey);
      return {
        ...item,
        value,
        label,
        description,
        id: `${id}:${value}`
      };
    }
    const normalizedItems = vueExports.computed(() => {
      if (!props.items) {
        return [];
      }
      return props.items.map(normalizeItem);
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(RadioGroupRoot_default), vueExports.mergeProps({ id: vueExports.unref(id) }, vueExports.unref(rootProps), {
        "model-value": vueExports.unref(props).modelValue,
        "default-value": vueExports.unref(props).defaultValue,
        orientation: vueExports.unref(props).orientation,
        name: vueExports.unref(name),
        disabled: vueExports.unref(disabled),
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] }),
        "onUpdate:modelValue": onUpdate
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<fieldset${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
              "data-slot": "fieldset",
              class: ui.value.fieldset({ class: vueExports.unref(props).ui?.fieldset })
            }, vueExports.unref(ariaAttrs)))}${_scopeId}>`);
            if (vueExports.unref(props).legend || !!slots.legend) {
              _push2(`<legend data-slot="legend" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.legend({ class: vueExports.unref(props).ui?.legend }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).legend)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</legend>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(normalizedItems.value, (item) => {
              serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? "div" : vueExports.unref(Label_default)), {
                key: item.value,
                "data-slot": "item",
                class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class], disabled: item.disabled || vueExports.unref(disabled) })
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-slot="container" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(RadioGroupItem_default), {
                      id: item.id,
                      value: item.value,
                      disabled: item.disabled || vueExports.unref(disabled),
                      "data-slot": "base",
                      class: ui.value.base({ class: [vueExports.unref(props).ui?.base, item.ui?.base], disabled: item.disabled || vueExports.unref(disabled) })
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(RadioGroupIndicator_default), {
                            "data-slot": "indicator",
                            class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(RadioGroupIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.label || !!slots.label || (item.description || !!slots.description)) {
                      _push3(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                      if (item.label || !!slots.label) {
                        serverRenderer_cjs_prodExports.ssrRenderVNode(_push3, vueExports.createVNode(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(Label_default) : "p"), {
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label], disabled: item.disabled || vueExports.unref(disabled) })
                        }, {
                          default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "label", {
                                item,
                                modelValue: vueExports.unref(props).modelValue
                              }, () => {
                                _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                vueExports.renderSlot(_ctx.$slots, "label", {
                                  item,
                                  modelValue: vueExports.unref(props).modelValue
                                }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }), _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots.description) {
                        _push3(`<p data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description], disabled: item.disabled || vueExports.unref(disabled) }))}"${_scopeId2}>`);
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {
                          item,
                          modelValue: vueExports.unref(props).modelValue
                        }, () => {
                          _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.description)}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      vueExports.createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] })
                      }, [
                        vueExports.createVNode(vueExports.unref(RadioGroupItem_default), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || vueExports.unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [vueExports.unref(props).ui?.base, item.ui?.base], disabled: item.disabled || vueExports.unref(disabled) })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(RadioGroupIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(Label_default) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label], disabled: item.disabled || vueExports.unref(disabled) })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: vueExports.unref(props).modelValue
                            }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : vueExports.createCommentVNode("", true),
                        item.description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description], disabled: item.disabled || vueExports.unref(disabled) })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: vueExports.unref(props).modelValue
                          }, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.description), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]--></fieldset>`);
          } else {
            return [
              vueExports.createVNode("fieldset", vueExports.mergeProps({
                "data-slot": "fieldset",
                class: ui.value.fieldset({ class: vueExports.unref(props).ui?.fieldset })
              }, vueExports.unref(ariaAttrs)), [
                vueExports.unref(props).legend || !!slots.legend ? (vueExports.openBlock(), vueExports.createBlock("legend", {
                  key: 0,
                  "data-slot": "legend",
                  class: ui.value.legend({ class: vueExports.unref(props).ui?.legend })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "legend", {}, () => [
                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).legend), 1)
                  ])
                ], 2)) : vueExports.createCommentVNode("", true),
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(normalizedItems.value, (item) => {
                  return vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? "div" : vueExports.unref(Label_default)), {
                    key: item.value,
                    "data-slot": "item",
                    class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class], disabled: item.disabled || vueExports.unref(disabled) })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [vueExports.unref(props).ui?.container, item.ui?.container] })
                      }, [
                        vueExports.createVNode(vueExports.unref(RadioGroupItem_default), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || vueExports.unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [vueExports.unref(props).ui?.base, item.ui?.base], disabled: item.disabled || vueExports.unref(disabled) })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(RadioGroupIndicator_default), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [vueExports.unref(props).ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [vueExports.unref(props).ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(!vueExports.unref(props).variant || vueExports.unref(props).variant === "list" ? vueExports.unref(Label_default) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label], disabled: item.disabled || vueExports.unref(disabled) })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: vueExports.unref(props).modelValue
                            }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : vueExports.createCommentVNode("", true),
                        item.description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [vueExports.unref(props).ui?.description, item.ui?.description], disabled: item.disabled || vueExports.unref(disabled) })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: vueExports.unref(props).modelValue
                          }, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.description), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const lastStep = 3;
const _sfc_main = {
  __name: "ApplicationForm",
  __ssrInlineRender: true,
  props: {
    vacancy: {
      type: Object,
      default: null
    }
  },
  emits: ["submit", "cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const currentStep = vueExports.ref(0);
    const isSubmitting = vueExports.ref(false);
    const liveMessage = vueExports.ref("");
    const stepItems = [
      { value: 0, title: "Согласия", icon: "i-lucide-shield-check" },
      { value: 1, title: "Личные", icon: "i-lucide-user" },
      { value: 2, title: "Адрес", icon: "i-lucide-map-pin" },
      { value: 3, title: "Образование", icon: "i-lucide-graduation-cap" }
    ];
    const formState = vueExports.reactive({
      lastName: "",
      firstName: "",
      middleName: "",
      birthDate: null,
      phone: "",
      email: "",
      registrationAddress: "",
      residenceAddress: "",
      citizenship: "",
      education: "",
      specialty: "",
      municipalExperience: "",
      workExperience: "",
      maritalStatus: "",
      children: "",
      photo: null,
      resume: null,
      vacancySource: "",
      consentFalseInfo: false,
      consentVerification: false,
      consentPersonalData: false,
      consentResumeForwarding: false
    });
    const maritalStatusOptions = [
      { value: "single", label: "Холост/Не замужем" },
      { value: "married", label: "Женат/Замужем" },
      { value: "divorced", label: "Разведен(а)" },
      { value: "widowed", label: "Вдовец/Вдова" }
    ];
    function validateStep(step) {
      const errors = [];
      if (step === 0) {
        if (!formState.consentFalseInfo) errors.push({ name: "consentFalseInfo", message: "Необходимо согласие" });
        if (!formState.consentVerification) errors.push({ name: "consentVerification", message: "Необходимо согласие" });
        if (!formState.consentPersonalData) errors.push({ name: "consentPersonalData", message: "Необходимо согласие" });
        if (!formState.consentResumeForwarding) errors.push({ name: "consentResumeForwarding", message: "Необходимо согласие" });
      }
      if (step === 1) {
        if (!formState.lastName?.trim()) errors.push({ name: "lastName", message: "Введите фамилию" });
        if (!formState.firstName?.trim()) errors.push({ name: "firstName", message: "Введите имя" });
        if (!formState.birthDate) errors.push({ name: "birthDate", message: "Выберите дату рождения" });
        if (!formState.phone?.trim()) errors.push({ name: "phone", message: "Введите номер телефона" });
        if (!formState.email?.trim()) errors.push({ name: "email", message: "Введите email" });
      }
      if (step === 2) {
        if (!formState.registrationAddress?.trim()) errors.push({ name: "registrationAddress", message: "Введите адрес прописки" });
        if (!formState.residenceAddress?.trim()) errors.push({ name: "residenceAddress", message: "Введите адрес проживания" });
        if (!formState.citizenship?.trim()) errors.push({ name: "citizenship", message: "Введите гражданство" });
      }
      if (step === 3) {
        if (!formState.education?.trim()) errors.push({ name: "education", message: "Введите образование" });
        if (!formState.specialty?.trim()) errors.push({ name: "specialty", message: "Введите специальность" });
        if (!formState.maritalStatus) errors.push({ name: "maritalStatus", message: "Выберите семейное положение" });
        if (!formState.resume || Array.isArray(formState.resume) && formState.resume.length === 0) {
          errors.push({ name: "resume", message: "Загрузите резюме" });
        }
      }
      return errors;
    }
    const validate = (state) => {
      let errors = [];
      for (let step = 0; step <= lastStep; step++) {
        errors = errors.concat(validateStep(step));
      }
      return errors;
    };
    function nextStep() {
      const errors = validateStep(currentStep.value);
      if (errors.length) {
        liveMessage.value = errors[0].message;
        onError(errors);
        return;
      }
      if (currentStep.value < lastStep) {
        currentStep.value++;
        liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value].title}`;
      }
    }
    function prevStep() {
      if (currentStep.value > 0) {
        currentStep.value--;
        liveMessage.value = `Шаг ${currentStep.value + 1} из ${lastStep + 1}: ${stepItems[currentStep.value].title}`;
      }
    }
    const onError = (event) => {
      const errors = Array.isArray(event) ? event : event?.errors ?? [];
      if (errors?.length > 0) {
        const id = errors[0].id;
        const el = id ? (void 0).getElementById(id) : (void 0).querySelector(`[name="${errors[0].name}"]`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.focus();
      }
    };
    const handleSubmit = async () => {
      isSubmitting.value = true;
      try {
        emit("submit", { ...formState });
        liveMessage.value = "Заявка отправлена. Спасибо за отклик.";
        Object.keys(formState).forEach((key) => {
          if (key === "maritalStatus") formState[key] = "";
          else if (key === "photo" || key === "resume") formState[key] = null;
          else if (key.startsWith("consent")) formState[key] = false;
          else formState[key] = "";
        });
        currentStep.value = 0;
      } catch (error) {
        console.error("Form submission error:", error);
        liveMessage.value = "Не удалось отправить заявку. Проверьте данные и попробуйте снова.";
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$A;
      const _component_UStepper = _sfc_main$2;
      const _component_UForm = _sfc_main$2$1;
      const _component_DsSurface = __nuxt_component_8;
      const _component_UCollapsible = _sfc_main$3;
      const _component_UButton = _sfc_main$u;
      const _component_UFormField = _sfc_main$1$1;
      const _component_UCheckbox = _sfc_main$1$2;
      const _component_UInput = _sfc_main$d;
      const _component_UInputDate = _sfc_main$4;
      const _component_UTextarea = _sfc_main$5;
      const _component_URadioGroup = _sfc_main$1;
      const _component_UFileUpload = _sfc_main$6;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "application-form" }, _attrs))}><div class="text-center py-4 border-b border-border-default mb-6">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-file-text",
        class: "h-10 w-10 mx-auto mb-3 text-primary-500",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`<h2 class="text-h2 text-text-primary"> Форма отклика на вакансию </h2>`);
      if (__props.vacancy) {
        _push(`<p class="text-caption text-text-muted mt-2"> Вакансия: ${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UStepper, {
        modelValue: currentStep.value,
        "onUpdate:modelValue": ($event) => currentStep.value = $event,
        items: stepItems,
        linear: "",
        class: "mb-6",
        ui: { title: "hidden sm:block text-caption" }
      }, null, _parent));
      _push(`<div aria-live="polite" aria-atomic="true" class="sr-only">${serverRenderer_cjs_prodExports.ssrInterpolate(liveMessage.value)}</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UForm, {
        state: formState,
        validate,
        class: "space-y-6 pb-24 md:pb-0",
        onSubmit: handleSubmit,
        onError
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(currentStep.value === 0 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "none",
              padding: "md",
              class: "bg-surface-sunken border-amber-200 dark:border-amber-800"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-h3 text-text-primary mb-2"${_scopeId2}> Обязательные согласия </h3><p class="text-body text-text-secondary mb-4"${_scopeId2}> Для подачи заявки необходимо отметить все пункты ниже. </p>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCollapsible, { class: "mb-4" }, {
                    content: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="mt-2 space-y-2 text-caption text-text-secondary list-disc pl-5"${_scopeId3}><li${_scopeId3}>Подтверждение достоверности сведений и соответствия квалификации.</li><li${_scopeId3}>Согласие на проверочные мероприятия при отборе кандидатов.</li><li${_scopeId3}>Согласие на обработку персональных данных по 152-ФЗ.</li><li${_scopeId3}>Согласие на направление анкеты в муниципальные организации района.</li></ul>`);
                      } else {
                        return [
                          vueExports.createVNode("ul", { class: "mt-2 space-y-2 text-caption text-text-secondary list-disc pl-5" }, [
                            vueExports.createVNode("li", null, "Подтверждение достоверности сведений и соответствия квалификации."),
                            vueExports.createVNode("li", null, "Согласие на проверочные мероприятия при отборе кандидатов."),
                            vueExports.createVNode("li", null, "Согласие на обработку персональных данных по 152-ФЗ."),
                            vueExports.createVNode("li", null, "Согласие на направление анкеты в муниципальные организации района.")
                          ])
                        ];
                      }
                    }),
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                          label: "Что означает каждый пункт?",
                          color: "neutral",
                          variant: "link",
                          "trailing-icon": "i-lucide-chevron-down",
                          class: "px-0 min-h-11"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UButton, {
                            label: "Что означает каждый пункт?",
                            color: "neutral",
                            variant: "link",
                            "trailing-icon": "i-lucide-chevron-down",
                            class: "px-0 min-h-11"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-3"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentFalseInfo" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                          modelValue: formState.consentFalseInfo,
                          "onUpdate:modelValue": ($event) => formState.consentFalseInfo = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body text-text-secondary"${_scopeId4}> Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность </span>`);
                            } else {
                              return [
                                vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentFalseInfo,
                            "onUpdate:modelValue": ($event) => formState.consentFalseInfo = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentVerification" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                          modelValue: formState.consentVerification,
                          "onUpdate:modelValue": ($event) => formState.consentVerification = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body text-text-secondary"${_scopeId4}> На проведение в отношении меня проверочных мероприятий согласен (согласна) </span>`);
                            } else {
                              return [
                                vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На проведение в отношении меня проверочных мероприятий согласен (согласна) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentVerification,
                            "onUpdate:modelValue": ($event) => formState.consentVerification = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На проведение в отношении меня проверочных мероприятий согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentPersonalData" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                          modelValue: formState.consentPersonalData,
                          "onUpdate:modelValue": ($event) => formState.consentPersonalData = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body text-text-secondary"${_scopeId4}> Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ) </span>`);
                            } else {
                              return [
                                vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentPersonalData,
                            "onUpdate:modelValue": ($event) => formState.consentPersonalData = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentResumeForwarding" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                          modelValue: formState.consentResumeForwarding,
                          "onUpdate:modelValue": ($event) => formState.consentResumeForwarding = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body text-text-secondary"${_scopeId4}> На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна) </span>`);
                            } else {
                              return [
                                vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentResumeForwarding,
                            "onUpdate:modelValue": ($event) => formState.consentResumeForwarding = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, " Обязательные согласия "),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mb-4" }, " Для подачи заявки необходимо отметить все пункты ниже. "),
                    vueExports.createVNode(_component_UCollapsible, { class: "mb-4" }, {
                      content: vueExports.withCtx(() => [
                        vueExports.createVNode("ul", { class: "mt-2 space-y-2 text-caption text-text-secondary list-disc pl-5" }, [
                          vueExports.createVNode("li", null, "Подтверждение достоверности сведений и соответствия квалификации."),
                          vueExports.createVNode("li", null, "Согласие на проверочные мероприятия при отборе кандидатов."),
                          vueExports.createVNode("li", null, "Согласие на обработку персональных данных по 152-ФЗ."),
                          vueExports.createVNode("li", null, "Согласие на направление анкеты в муниципальные организации района.")
                        ])
                      ]),
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UButton, {
                          label: "Что означает каждый пункт?",
                          color: "neutral",
                          variant: "link",
                          "trailing-icon": "i-lucide-chevron-down",
                          class: "px-0 min-h-11"
                        })
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode("div", { class: "space-y-3" }, [
                      vueExports.createVNode(_component_UFormField, { name: "consentFalseInfo" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentFalseInfo,
                            "onUpdate:modelValue": ($event) => formState.consentFalseInfo = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentVerification" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentVerification,
                            "onUpdate:modelValue": ($event) => formState.consentVerification = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На проведение в отношении меня проверочных мероприятий согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentPersonalData" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentPersonalData,
                            "onUpdate:modelValue": ($event) => formState.consentPersonalData = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentResumeForwarding" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentResumeForwarding,
                            "onUpdate:modelValue": ($event) => formState.consentResumeForwarding = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(currentStep.value === 1 ? null : { display: "none" })}"${_scopeId}><h3 class="text-h3 text-text-primary border-b border-border-default pb-2"${_scopeId}> Личные данные </h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Фамилия",
              name: "lastName",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.lastName,
                    "onUpdate:modelValue": ($event) => formState.lastName = $event,
                    placeholder: "Введите фамилию"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.lastName,
                      "onUpdate:modelValue": ($event) => formState.lastName = $event,
                      placeholder: "Введите фамилию"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Имя",
              name: "firstName",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.firstName,
                    "onUpdate:modelValue": ($event) => formState.firstName = $event,
                    placeholder: "Введите имя"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.firstName,
                      "onUpdate:modelValue": ($event) => formState.firstName = $event,
                      placeholder: "Введите имя"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Отчество",
              name: "middleName"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.middleName,
                    "onUpdate:modelValue": ($event) => formState.middleName = $event,
                    placeholder: "Введите отчество"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.middleName,
                      "onUpdate:modelValue": ($event) => formState.middleName = $event,
                      placeholder: "Введите отчество"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Дата рождения",
              name: "birthDate",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInputDate, {
                    modelValue: formState.birthDate,
                    "onUpdate:modelValue": ($event) => formState.birthDate = $event,
                    icon: "i-lucide-calendar"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInputDate, {
                      modelValue: formState.birthDate,
                      "onUpdate:modelValue": ($event) => formState.birthDate = $event,
                      icon: "i-lucide-calendar"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Номер телефона",
              name: "phone",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.phone,
                    "onUpdate:modelValue": ($event) => formState.phone = $event,
                    placeholder: "+7 (XXX) XXX-XX-XX",
                    type: "tel"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.phone,
                      "onUpdate:modelValue": ($event) => formState.phone = $event,
                      placeholder: "+7 (XXX) XXX-XX-XX",
                      type: "tel"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "E-mail",
              name: "email",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.email,
                    "onUpdate:modelValue": ($event) => formState.email = $event,
                    placeholder: "example@email.com",
                    type: "email"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.email,
                      "onUpdate:modelValue": ($event) => formState.email = $event,
                      placeholder: "example@email.com",
                      type: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(currentStep.value === 2 ? null : { display: "none" })}"${_scopeId}><h3 class="text-h3 text-text-primary border-b border-border-default pb-2"${_scopeId}> Адресные данные </h3>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Адрес прописки",
              name: "registrationAddress",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.registrationAddress,
                    "onUpdate:modelValue": ($event) => formState.registrationAddress = $event,
                    placeholder: "Введите адрес прописки"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.registrationAddress,
                      "onUpdate:modelValue": ($event) => formState.registrationAddress = $event,
                      placeholder: "Введите адрес прописки"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Адрес проживания",
              name: "residenceAddress",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.residenceAddress,
                    "onUpdate:modelValue": ($event) => formState.residenceAddress = $event,
                    placeholder: "Введите адрес проживания"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.residenceAddress,
                      "onUpdate:modelValue": ($event) => formState.residenceAddress = $event,
                      placeholder: "Введите адрес проживания"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Гражданство",
              name: "citizenship",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.citizenship,
                    "onUpdate:modelValue": ($event) => formState.citizenship = $event,
                    placeholder: "Введите гражданство"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.citizenship,
                      "onUpdate:modelValue": ($event) => formState.citizenship = $event,
                      placeholder: "Введите гражданство"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-6" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(currentStep.value === 3 ? null : { display: "none" })}"${_scopeId}><div class="space-y-4"${_scopeId}><h3 class="text-h3 text-text-primary border-b border-border-default pb-2"${_scopeId}> Образование и опыт </h3>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Образование",
              name: "education",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.education,
                    "onUpdate:modelValue": ($event) => formState.education = $event,
                    placeholder: "Введите образование"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.education,
                      "onUpdate:modelValue": ($event) => formState.education = $event,
                      placeholder: "Введите образование"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Специальность",
              name: "specialty",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.specialty,
                    "onUpdate:modelValue": ($event) => formState.specialty = $event,
                    placeholder: "Введите специальность"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.specialty,
                      "onUpdate:modelValue": ($event) => formState.specialty = $event,
                      placeholder: "Введите специальность"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Стаж муниципальной службы",
              name: "municipalExperience"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.municipalExperience,
                    "onUpdate:modelValue": ($event) => formState.municipalExperience = $event,
                    placeholder: "Введите стаж"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.municipalExperience,
                      "onUpdate:modelValue": ($event) => formState.municipalExperience = $event,
                      placeholder: "Введите стаж"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Трудовая деятельность",
              name: "workExperience"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTextarea, {
                    modelValue: formState.workExperience,
                    "onUpdate:modelValue": ($event) => formState.workExperience = $event,
                    placeholder: "Сведения из трудовой книжки",
                    rows: 3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UTextarea, {
                      modelValue: formState.workExperience,
                      "onUpdate:modelValue": ($event) => formState.workExperience = $event,
                      placeholder: "Сведения из трудовой книжки",
                      rows: 3
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4"${_scopeId}><h3 class="text-h3 text-text-primary border-b border-border-default pb-2"${_scopeId}> Семейное положение </h3>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Семейное положение",
              name: "maritalStatus",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_URadioGroup, {
                    modelValue: formState.maritalStatus,
                    "onUpdate:modelValue": ($event) => formState.maritalStatus = $event,
                    items: maritalStatusOptions
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_URadioGroup, {
                      modelValue: formState.maritalStatus,
                      "onUpdate:modelValue": ($event) => formState.maritalStatus = $event,
                      items: maritalStatusOptions
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Наличие детей",
              name: "children"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: formState.children,
                    "onUpdate:modelValue": ($event) => formState.children = $event,
                    placeholder: "Количество и возраст детей"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.children,
                      "onUpdate:modelValue": ($event) => formState.children = $event,
                      placeholder: "Количество и возраст детей"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-4"${_scopeId}><h3 class="text-h3 text-text-primary border-b border-border-default pb-2"${_scopeId}> Файлы </h3>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Фото",
              name: "photo"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFileUpload, {
                    modelValue: formState.photo,
                    "onUpdate:modelValue": ($event) => formState.photo = $event,
                    accept: "image/*",
                    label: "Загрузите фото",
                    description: "JPG, PNG или GIF (макс. 5 МБ)"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UFileUpload, {
                      modelValue: formState.photo,
                      "onUpdate:modelValue": ($event) => formState.photo = $event,
                      accept: "image/*",
                      label: "Загрузите фото",
                      description: "JPG, PNG или GIF (макс. 5 МБ)"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Резюме",
              name: "resume",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFileUpload, {
                    modelValue: formState.resume,
                    "onUpdate:modelValue": ($event) => formState.resume = $event,
                    accept: ".pdf,.doc,.docx",
                    label: "Загрузите резюме",
                    description: "PDF, DOC или DOCX (макс. 10 МБ)"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UFileUpload, {
                      modelValue: formState.resume,
                      "onUpdate:modelValue": ($event) => formState.resume = $event,
                      accept: ".pdf,.doc,.docx",
                      label: "Загрузите резюме",
                      description: "PDF, DOC или DOCX (макс. 10 МБ)"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "О вакансии узнал(а)",
              name: "vacancySource"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTextarea, {
                    modelValue: formState.vacancySource,
                    "onUpdate:modelValue": ($event) => formState.vacancySource = $event,
                    placeholder: "Источник информации о вакансии",
                    rows: 2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UTextarea, {
                      modelValue: formState.vacancySource,
                      "onUpdate:modelValue": ($event) => formState.vacancySource = $event,
                      placeholder: "Источник информации о вакансии",
                      rows: 2
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="application-form__footer sticky bottom-0 left-0 right-0 z-10 -mx-4 px-4 py-3 md:mx-0 md:px-0 md:py-0 md:static bg-surface-raised/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-t border-border-default md:border-t-0 md:pt-6 flex flex-wrap justify-between gap-3 mt-4"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            if (currentStep.value > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Назад",
                color: "neutral",
                variant: "outline",
                type: "button",
                class: "min-h-11",
                onClick: prevStep
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Отмена",
              color: "neutral",
              variant: "ghost",
              type: "button",
              class: "min-h-11",
              onClick: ($event) => _ctx.$emit("cancel")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (currentStep.value < lastStep) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Далее",
                color: "primary",
                variant: "solid",
                type: "button",
                class: "min-h-11 font-medium ml-auto",
                onClick: nextStep
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Отправить",
                color: "primary",
                variant: "solid",
                type: "submit",
                loading: isSubmitting.value,
                class: "min-h-11 font-medium ml-auto"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              vueExports.withDirectives(vueExports.createVNode("div", { class: "space-y-4" }, [
                vueExports.createVNode(_component_DsSurface, {
                  elevation: "none",
                  padding: "md",
                  class: "bg-surface-sunken border-amber-200 dark:border-amber-800"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, " Обязательные согласия "),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mb-4" }, " Для подачи заявки необходимо отметить все пункты ниже. "),
                    vueExports.createVNode(_component_UCollapsible, { class: "mb-4" }, {
                      content: vueExports.withCtx(() => [
                        vueExports.createVNode("ul", { class: "mt-2 space-y-2 text-caption text-text-secondary list-disc pl-5" }, [
                          vueExports.createVNode("li", null, "Подтверждение достоверности сведений и соответствия квалификации."),
                          vueExports.createVNode("li", null, "Согласие на проверочные мероприятия при отборе кандидатов."),
                          vueExports.createVNode("li", null, "Согласие на обработку персональных данных по 152-ФЗ."),
                          vueExports.createVNode("li", null, "Согласие на направление анкеты в муниципальные организации района.")
                        ])
                      ]),
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UButton, {
                          label: "Что означает каждый пункт?",
                          color: "neutral",
                          variant: "link",
                          "trailing-icon": "i-lucide-chevron-down",
                          class: "px-0 min-h-11"
                        })
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode("div", { class: "space-y-3" }, [
                      vueExports.createVNode(_component_UFormField, { name: "consentFalseInfo" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentFalseInfo,
                            "onUpdate:modelValue": ($event) => formState.consentFalseInfo = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Мне известно, что сообщение заведомо ложных сведений и несоответствие квалификационным требованиям могут повлечь отказ в приёме на должность ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentVerification" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentVerification,
                            "onUpdate:modelValue": ($event) => formState.consentVerification = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На проведение в отношении меня проверочных мероприятий согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentPersonalData" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentPersonalData,
                            "onUpdate:modelValue": ($event) => formState.consentPersonalData = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " Даю согласие на обработку персональных данных в целях, связанных с возможным трудоустройством (152-ФЗ) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, { name: "consentResumeForwarding" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: formState.consentResumeForwarding,
                            "onUpdate:modelValue": ($event) => formState.consentResumeForwarding = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-body text-text-secondary" }, " На направление моей анкеты в муниципальные организации Сургутского района согласен (согласна) ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ], 512), [
                [vueExports.vShow, currentStep.value === 0]
              ]),
              vueExports.withDirectives(vueExports.createVNode("div", { class: "space-y-4" }, [
                vueExports.createVNode("h3", { class: "text-h3 text-text-primary border-b border-border-default pb-2" }, " Личные данные "),
                vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                  vueExports.createVNode(_component_UFormField, {
                    label: "Фамилия",
                    name: "lastName",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.lastName,
                        "onUpdate:modelValue": ($event) => formState.lastName = $event,
                        placeholder: "Введите фамилию"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Имя",
                    name: "firstName",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.firstName,
                        "onUpdate:modelValue": ($event) => formState.firstName = $event,
                        placeholder: "Введите имя"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Отчество",
                    name: "middleName"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.middleName,
                        "onUpdate:modelValue": ($event) => formState.middleName = $event,
                        placeholder: "Введите отчество"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  vueExports.createVNode(_component_UFormField, {
                    label: "Дата рождения",
                    name: "birthDate",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInputDate, {
                        modelValue: formState.birthDate,
                        "onUpdate:modelValue": ($event) => formState.birthDate = $event,
                        icon: "i-lucide-calendar"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Номер телефона",
                    name: "phone",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.phone,
                        "onUpdate:modelValue": ($event) => formState.phone = $event,
                        placeholder: "+7 (XXX) XXX-XX-XX",
                        type: "tel"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                vueExports.createVNode(_component_UFormField, {
                  label: "E-mail",
                  name: "email",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.email,
                      "onUpdate:modelValue": ($event) => formState.email = $event,
                      placeholder: "example@email.com",
                      type: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ], 512), [
                [vueExports.vShow, currentStep.value === 1]
              ]),
              vueExports.withDirectives(vueExports.createVNode("div", { class: "space-y-4" }, [
                vueExports.createVNode("h3", { class: "text-h3 text-text-primary border-b border-border-default pb-2" }, " Адресные данные "),
                vueExports.createVNode(_component_UFormField, {
                  label: "Адрес прописки",
                  name: "registrationAddress",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.registrationAddress,
                      "onUpdate:modelValue": ($event) => formState.registrationAddress = $event,
                      placeholder: "Введите адрес прописки"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Адрес проживания",
                  name: "residenceAddress",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.residenceAddress,
                      "onUpdate:modelValue": ($event) => formState.residenceAddress = $event,
                      placeholder: "Введите адрес проживания"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Гражданство",
                  name: "citizenship",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: formState.citizenship,
                      "onUpdate:modelValue": ($event) => formState.citizenship = $event,
                      placeholder: "Введите гражданство"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ], 512), [
                [vueExports.vShow, currentStep.value === 2]
              ]),
              vueExports.withDirectives(vueExports.createVNode("div", { class: "space-y-6" }, [
                vueExports.createVNode("div", { class: "space-y-4" }, [
                  vueExports.createVNode("h3", { class: "text-h3 text-text-primary border-b border-border-default pb-2" }, " Образование и опыт "),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Образование",
                    name: "education",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.education,
                        "onUpdate:modelValue": ($event) => formState.education = $event,
                        placeholder: "Введите образование"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Специальность",
                    name: "specialty",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.specialty,
                        "onUpdate:modelValue": ($event) => formState.specialty = $event,
                        placeholder: "Введите специальность"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Стаж муниципальной службы",
                    name: "municipalExperience"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.municipalExperience,
                        "onUpdate:modelValue": ($event) => formState.municipalExperience = $event,
                        placeholder: "Введите стаж"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Трудовая деятельность",
                    name: "workExperience"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UTextarea, {
                        modelValue: formState.workExperience,
                        "onUpdate:modelValue": ($event) => formState.workExperience = $event,
                        placeholder: "Сведения из трудовой книжки",
                        rows: 3
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                vueExports.createVNode("div", { class: "space-y-4" }, [
                  vueExports.createVNode("h3", { class: "text-h3 text-text-primary border-b border-border-default pb-2" }, " Семейное положение "),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Семейное положение",
                    name: "maritalStatus",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_URadioGroup, {
                        modelValue: formState.maritalStatus,
                        "onUpdate:modelValue": ($event) => formState.maritalStatus = $event,
                        items: maritalStatusOptions
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Наличие детей",
                    name: "children"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UInput, {
                        modelValue: formState.children,
                        "onUpdate:modelValue": ($event) => formState.children = $event,
                        placeholder: "Количество и возраст детей"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                vueExports.createVNode("div", { class: "space-y-4" }, [
                  vueExports.createVNode("h3", { class: "text-h3 text-text-primary border-b border-border-default pb-2" }, " Файлы "),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Фото",
                    name: "photo"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UFileUpload, {
                        modelValue: formState.photo,
                        "onUpdate:modelValue": ($event) => formState.photo = $event,
                        accept: "image/*",
                        label: "Загрузите фото",
                        description: "JPG, PNG или GIF (макс. 5 МБ)"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_component_UFormField, {
                    label: "Резюме",
                    name: "resume",
                    required: ""
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UFileUpload, {
                        modelValue: formState.resume,
                        "onUpdate:modelValue": ($event) => formState.resume = $event,
                        accept: ".pdf,.doc,.docx",
                        label: "Загрузите резюме",
                        description: "PDF, DOC или DOCX (макс. 10 МБ)"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                vueExports.createVNode(_component_UFormField, {
                  label: "О вакансии узнал(а)",
                  name: "vacancySource"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UTextarea, {
                      modelValue: formState.vacancySource,
                      "onUpdate:modelValue": ($event) => formState.vacancySource = $event,
                      placeholder: "Источник информации о вакансии",
                      rows: 2
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ], 512), [
                [vueExports.vShow, currentStep.value === 3]
              ]),
              vueExports.createVNode("div", { class: "application-form__footer sticky bottom-0 left-0 right-0 z-10 -mx-4 px-4 py-3 md:mx-0 md:px-0 md:py-0 md:static bg-surface-raised/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-t border-border-default md:border-t-0 md:pt-6 flex flex-wrap justify-between gap-3 mt-4" }, [
                vueExports.createVNode("div", { class: "flex gap-2" }, [
                  currentStep.value > 0 ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                    key: 0,
                    label: "Назад",
                    color: "neutral",
                    variant: "outline",
                    type: "button",
                    class: "min-h-11",
                    onClick: prevStep
                  })) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(_component_UButton, {
                    label: "Отмена",
                    color: "neutral",
                    variant: "ghost",
                    type: "button",
                    class: "min-h-11",
                    onClick: ($event) => _ctx.$emit("cancel")
                  }, null, 8, ["onClick"])
                ]),
                currentStep.value < lastStep ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                  key: 0,
                  label: "Далее",
                  color: "primary",
                  variant: "solid",
                  type: "button",
                  class: "min-h-11 font-medium ml-auto",
                  onClick: nextStep
                })) : (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                  key: 1,
                  label: "Отправить",
                  color: "primary",
                  variant: "solid",
                  type: "submit",
                  loading: isSubmitting.value,
                  class: "min-h-11 font-medium ml-auto"
                }, null, 8, ["loading"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ApplicationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ApplicationForm = Object.assign(_sfc_main, { __name: "ApplicationForm" });

export { ApplicationForm as A };
//# sourceMappingURL=ApplicationForm-D3mPRbFX.mjs.map
