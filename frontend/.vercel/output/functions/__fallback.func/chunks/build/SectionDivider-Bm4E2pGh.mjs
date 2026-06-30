import { v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "SectionDivider",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    variant: { default: "brand" },
    spacing: { default: "md" }
  },
  setup(__props) {
    const props = __props;
    const marginClass = vueExports.computed(() => {
      const map = { sm: "my-4", md: "my-6", lg: "my-8" };
      return map[props.spacing];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["flex items-center gap-3", vueExports.unref(marginClass)],
        role: "separator",
        "aria-label": __props.label
      }, _attrs))}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([__props.variant === "brand" ? "bg-gradient-brand" : "bg-border-default", "flex-1 h-px"])}"></div>`);
      if (__props.label) {
        _push(`<span class="text-caption text-text-muted shrink-0">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.label) {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([__props.variant === "brand" ? "bg-gradient-brand" : "bg-border-default", "flex-1 h-px"])}"></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/SectionDivider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "DsSectionDivider" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SectionDivider-Bm4E2pGh.mjs.map
