import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$A } from './server.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "EmptyState",
  __ssrInlineRender: true,
  props: {
    icon: { default: "i-lucide-inbox" },
    title: {},
    description: { default: void 0 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$A;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "text-center py-12 px-4" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: __props.icon,
        class: "h-14 w-14 text-text-muted mx-auto mb-4",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`<h3 class="text-h3 text-text-primary mb-2">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h3><p class="text-body text-text-secondary max-w-md mx-auto">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}</p>`);
      if (_ctx.$slots.action) {
        _push(`<div class="mt-6">`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/EmptyState.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "DsEmptyState" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=EmptyState-BbxOOQYN.mjs.map
