import { v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Surface",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    elevation: { default: "sm" },
    padding: { default: "md" },
    interactive: { type: Boolean, default: false },
    glass: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(__props.tag), vueExports.mergeProps({
        class: ["ds-surface", [
          __props.interactive && "ds-surface-interactive",
          __props.glass && "ds-surface-glass"
        ]],
        "data-elevation": __props.elevation,
        "data-padding": __props.padding
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/Surface.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "DsSurface" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=Surface-BpUAMKsj.mjs.map
