import { v as vueExports, s as serverRenderer_cjs_prodExports, p as _sfc_main$i, g as _sfc_main$u } from './server.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: { default: void 0 },
    variant: { default: "inner" },
    image: { default: void 0 },
    imageAlt: { default: "Иллюстрация раздела" },
    badge: { default: void 0 },
    buttonLabel: { default: void 0 },
    buttonLink: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const resolvedImage = vueExports.computed(() => {
      const value = vueExports.toValue(props.image);
      return typeof value === "string" ? value : void 0;
    });
    const isIllustration = vueExports.computed(() => resolvedImage.value?.endsWith(".svg") ?? false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$i;
      const _component_UButton = _sfc_main$u;
      if (__props.variant === "home") {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "ds-container py-8 lg:py-12" }, _attrs))}><div class="rounded-xl ring-1 ring-border-default bg-gradient-brand p-1"><div class="grid-hero rounded-[calc(0.75rem-4px)] bg-surface-raised p-6 lg:p-10"><div class="flex flex-col justify-center">`);
        if (__props.badge) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "subtle",
            size: "sm",
            class: "w-fit mb-4"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.badge)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(__props.badge), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="text-display text-text-primary text-balance">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h1>`);
        if (__props.description) {
          _push(`<p class="text-body-lg text-text-secondary mt-4 text-pretty max-w-prose">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$slots.actions) {
          _push(`<div class="mt-6 flex flex-wrap gap-3">`);
          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
          _push(`</div>`);
        } else if (__props.buttonLabel && __props.buttonLink) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
            label: __props.buttonLabel,
            to: __props.buttonLink,
            color: "primary",
            size: "lg",
            class: "mt-6 w-fit"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (vueExports.unref(resolvedImage)) {
          _push(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", vueExports.unref(resolvedImage))}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", __props.imageAlt)} class="${serverRenderer_cjs_prodExports.ssrRenderClass([
            "rounded-lg shadow-md w-full aspect-[4/3] hidden lg:block",
            vueExports.unref(isIllustration) ? "object-contain bg-surface-sunken p-6" : "object-cover"
          ])}">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else if (__props.variant === "inner") {
        _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "relative w-full min-h-[280px] lg:min-h-[360px] flex items-end" }, _attrs))}>`);
        if (vueExports.unref(resolvedImage)) {
          _push(`<div class="absolute inset-0 -z-10"><div class="absolute inset-0 bg-linear-to-r from-zinc-900/80 via-zinc-800/70 to-zinc-700/50"></div><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", vueExports.unref(resolvedImage))}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", __props.imageAlt)} class="${serverRenderer_cjs_prodExports.ssrRenderClass([
            "h-full",
            vueExports.unref(isIllustration) ? "w-2/3 ml-auto object-contain object-right opacity-35 lg:opacity-45" : "w-full object-cover"
          ])}"></div>`);
        } else {
          _push(`<div class="absolute inset-0 -z-10 bg-surface-brand"></div>`);
        }
        _push(`<div class="ds-container py-12 lg:py-16 w-full"><div class="max-w-3xl">`);
        if (__props.badge) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "subtle",
            size: "sm",
            class: "w-fit mb-4"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.badge)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(__props.badge), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="text-h1 lg:text-display text-text-inverse text-balance">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h1>`);
        if (__props.description) {
          _push(`<p class="text-body-lg text-text-inverse/85 mt-4 text-pretty max-w-2xl">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$slots.actions) {
          _push(`<div class="mt-6 flex flex-wrap gap-3">`);
          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else {
        _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-surface-brand-muted border-b border-border-default" }, _attrs))}><div class="ds-container py-10 lg:py-14">`);
        if (__props.badge) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "subtle",
            size: "sm",
            class: "w-fit mb-3"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(__props.badge)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(__props.badge), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="text-h1 text-text-accent text-balance">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h1>`);
        if (__props.description) {
          _push(`<p class="text-body-lg text-text-secondary mt-3 text-pretty max-w-2xl">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$slots.actions) {
          _push(`<div class="mt-5 flex flex-wrap gap-3">`);
          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "DsPageHero" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHero-C6QkD8NM.mjs.map
