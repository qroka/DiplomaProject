import { v as vueExports, s as serverRenderer_cjs_prodExports, e as _sfc_main$n } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    spacing: { default: "md" },
    variant: { default: "default" },
    headingId: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const sectionClasses = vueExports.computed(() => [
      props.spacing === "lg" ? "ds-section-spacing-lg" : "ds-section-spacing-md",
      props.variant === "muted" && "bg-surface-sunken",
      props.variant === "brand" && "bg-surface-brand text-text-inverse"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$n;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: vueExports.unref(sectionClasses),
        "aria-labelledby": __props.headingId || void 0
      }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "header"),
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/Section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "DsSection" });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: { default: void 0 },
    overline: { default: void 0 },
    headingId: { default: void 0 },
    align: { default: "left" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["mb-6 lg:mb-8", __props.align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"]
      }, _attrs))}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([__props.align === "center" && "sm:flex-col sm:items-center", "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"])}"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.align === "center" ? "text-center" : "")}">`);
      if (__props.overline) {
        _push(`<p class="text-overline uppercase tracking-wide text-text-muted mb-2">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.overline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2${serverRenderer_cjs_prodExports.ssrRenderAttr("id", __props.headingId)} class="text-h2 text-text-primary text-balance">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="text-body-lg text-text-secondary mt-3 text-pretty">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.action) {
        _push(`<div class="shrink-0">`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/SectionHeading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main, { __name: "DsSectionHeading" });

export { __nuxt_component_7 as _, __nuxt_component_9 as a };
//# sourceMappingURL=SectionHeading-DAShvJNb.mjs.map
