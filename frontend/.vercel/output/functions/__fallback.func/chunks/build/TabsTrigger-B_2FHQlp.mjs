import { v as vueExports, X as useDirection, q as useForwardExpose, r as useVModel, a0 as useId, P as Primitive, Y as RovingFocusGroup_default, al as useResizeObserver, $ as Presence_default, w as createContext, aW as useMounted } from './server.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-sciPZ7zL.mjs';

const [injectTabsRootContext, provideTabsRootContext] = /* @__PURE__ */ createContext("TabsRoot");
var TabsRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
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
    activationMode: {
      type: String,
      required: false,
      default: "automatic"
    },
    modelValue: {
      type: null,
      required: false
    },
    unmountOnHide: {
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
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { orientation, unmountOnHide, dir: propDir } = vueExports.toRefs(props);
    const dir = useDirection(propDir);
    useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue,
      passive: props.modelValue === void 0
    });
    const tabsList = vueExports.ref();
    const contentIds = vueExports.shallowRef(/* @__PURE__ */ new Set());
    provideTabsRootContext({
      modelValue,
      changeModelValue: (value) => {
        modelValue.value = value;
      },
      orientation,
      dir,
      unmountOnHide,
      activationMode: props.activationMode,
      baseId: useId(void 0, "reka-tabs"),
      tabsList,
      contentIds,
      registerContent: (value) => {
        contentIds.value = /* @__PURE__ */ new Set([...contentIds.value, value]);
      },
      unregisterContent: (value) => {
        const newSet = new Set(contentIds.value);
        newSet.delete(value);
        contentIds.value = newSet;
      }
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        dir: vueExports.unref(dir),
        "data-orientation": vueExports.unref(orientation),
        "as-child": _ctx.asChild,
        as: _ctx.as
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { modelValue: vueExports.unref(modelValue) })]),
        _: 3
      }, 8, [
        "dir",
        "data-orientation",
        "as-child",
        "as"
      ]);
    };
  }
});
var TabsRoot_default = TabsRoot_vue_vue_type_script_setup_true_lang_default;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var TabsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabsContent",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
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
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    const rootContext = injectTabsRootContext();
    const triggerId = vueExports.computed(() => makeTriggerId(rootContext.baseId, props.value));
    const contentId = vueExports.computed(() => makeContentId(rootContext.baseId, props.value));
    const isSelected = vueExports.computed(() => props.value === rootContext.modelValue.value);
    const isMountAnimationPreventedRef = vueExports.ref(isSelected.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Presence_default), {
        present: _ctx.forceMount || isSelected.value,
        "force-mount": ""
      }, {
        default: vueExports.withCtx(({ present }) => [vueExports.createVNode(vueExports.unref(Primitive), {
          id: contentId.value,
          ref: vueExports.unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          role: "tabpanel",
          "data-state": isSelected.value ? "active" : "inactive",
          "data-orientation": vueExports.unref(rootContext).orientation.value,
          "aria-labelledby": triggerId.value,
          hidden: !present,
          tabindex: "0",
          style: vueExports.normalizeStyle({ animationDuration: isMountAnimationPreventedRef.value ? "0s" : void 0 })
        }, {
          default: vueExports.withCtx(() => [(vueExports.unref(rootContext).unmountOnHide.value ? present : true) ? vueExports.renderSlot(_ctx.$slots, "default", { key: 0 }) : vueExports.createCommentVNode("v-if", true)]),
          _: 2
        }, 1032, [
          "id",
          "as-child",
          "as",
          "data-state",
          "data-orientation",
          "aria-labelledby",
          "hidden",
          "style"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var TabsContent_default = TabsContent_vue_vue_type_script_setup_true_lang_default;
var TabsIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabsIndicator",
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
  setup(__props, { expose: __expose }) {
    const props = __props;
    const context = injectTabsRootContext();
    __expose({ updateIndicatorStyle });
    useForwardExpose();
    const isMounted = useMounted();
    const indicatorStyle = vueExports.ref({
      size: null,
      position: null
    });
    const tabs = vueExports.ref([]);
    vueExports.watch(() => [context.modelValue.value, context?.dir.value], () => {
      updateIndicatorStyle();
    }, {
      immediate: true,
      flush: "post"
    });
    vueExports.watchPostEffect(() => {
      tabs.value = Array.from(context.tabsList.value?.querySelectorAll('[role="tab"]') || []);
    });
    useResizeObserver(vueExports.computed(() => [context.tabsList.value, ...tabs.value]), updateIndicatorStyle);
    function updateIndicatorStyle() {
      const activeTab = context.tabsList.value?.querySelector('[role="tab"][data-state="active"]');
      if (!activeTab) return;
      if (context.orientation.value === "horizontal") indicatorStyle.value = {
        size: activeTab.offsetWidth,
        position: activeTab.offsetLeft
      };
      else indicatorStyle.value = {
        size: activeTab.offsetHeight,
        position: activeTab.offsetTop
      };
    }
    return (_ctx, _cache) => {
      return vueExports.unref(isMounted) && typeof indicatorStyle.value.size === "number" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps({ key: 0 }, props, { style: {
        "--reka-tabs-indicator-size": `${indicatorStyle.value.size}px`,
        "--reka-tabs-indicator-position": `${indicatorStyle.value.position}px`
      } }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["style"])) : vueExports.createCommentVNode("v-if", true);
    };
  }
});
var TabsIndicator_default = TabsIndicator_vue_vue_type_script_setup_true_lang_default;
var TabsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabsList",
  props: {
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
    }
  },
  setup(__props) {
    const props = __props;
    const { loop } = vueExports.toRefs(props);
    const { forwardRef, currentElement } = useForwardExpose();
    const context = injectTabsRootContext();
    context.tabsList = currentElement;
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(RovingFocusGroup_default), {
        "as-child": "",
        orientation: vueExports.unref(context).orientation.value,
        dir: vueExports.unref(context).dir.value,
        loop: vueExports.unref(loop)
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          ref: vueExports.unref(forwardRef),
          role: "tablist",
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "aria-orientation": vueExports.unref(context).orientation.value
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "aria-orientation"
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
var TabsList_default = TabsList_vue_vue_type_script_setup_true_lang_default;
var TabsTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {
      type: [String, Number],
      required: true
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
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    const rootContext = injectTabsRootContext();
    const triggerId = vueExports.computed(() => makeTriggerId(rootContext.baseId, props.value));
    const contentId = vueExports.computed(() => rootContext.contentIds.value.has(props.value) ? makeContentId(rootContext.baseId, props.value) : void 0);
    const isSelected = vueExports.computed(() => props.value === rootContext.modelValue.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(RovingFocusItem_default), {
        "as-child": "",
        focusable: !_ctx.disabled,
        active: isSelected.value
      }, {
        default: vueExports.withCtx(() => [vueExports.createVNode(vueExports.unref(Primitive), {
          id: triggerId.value,
          ref: vueExports.unref(forwardRef),
          role: "tab",
          type: _ctx.as === "button" ? "button" : void 0,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-selected": isSelected.value ? "true" : "false",
          "aria-controls": contentId.value,
          "data-state": isSelected.value ? "active" : "inactive",
          disabled: _ctx.disabled,
          "data-disabled": _ctx.disabled ? "" : void 0,
          "data-orientation": vueExports.unref(rootContext).orientation.value,
          onMousedown: _cache[0] || (_cache[0] = vueExports.withModifiers((event) => {
            if (!_ctx.disabled && event.ctrlKey === false) vueExports.unref(rootContext).changeModelValue(_ctx.value);
            else event.preventDefault();
          }, ["left"])),
          onKeydown: _cache[1] || (_cache[1] = vueExports.withKeys(($event) => vueExports.unref(rootContext).changeModelValue(_ctx.value), ["enter", "space"])),
          onFocus: _cache[2] || (_cache[2] = () => {
            const isAutomaticActivation = vueExports.unref(rootContext).activationMode !== "manual";
            if (!isSelected.value && !_ctx.disabled && isAutomaticActivation) vueExports.unref(rootContext).changeModelValue(_ctx.value);
          })
        }, {
          default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "as",
          "as-child",
          "aria-selected",
          "aria-controls",
          "data-state",
          "disabled",
          "data-disabled",
          "data-orientation"
        ])]),
        _: 3
      }, 8, ["focusable", "active"]);
    };
  }
});
var TabsTrigger_default = TabsTrigger_vue_vue_type_script_setup_true_lang_default;

export { TabsContent_default as T, TabsIndicator_default as a, TabsList_default as b, TabsRoot_default as c, TabsTrigger_default as d };
//# sourceMappingURL=TabsTrigger-B_2FHQlp.mjs.map
