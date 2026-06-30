import { k as useComponentProps, l as useAppConfig, h as useRuntimeConfig, v as vueExports, t as tv, s as serverRenderer_cjs_prodExports, f as _sfc_main$A } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'tailwindcss/colors';
import 'node:stream';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';

const theme = {
  "slots": {
    "base": [
      "relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold",
      "[&>a>code]:transition-colors"
    ],
    "leading": [
      "absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted",
      "transition"
    ],
    "leadingIcon": "size-4 shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  }
};
const _sfc_main = {
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.h3", _props);
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public?.mdc || {};
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.h3 || {} })());
    const generate = vueExports.computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        id: vueExports.unref(props).id,
        class: ui.value.base({ class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] })
      }, _attrs))}>`);
      if (vueExports.unref(props).id && generate.value) {
        _push(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `#${vueExports.unref(props).id}`)} class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.link({ class: vueExports.unref(props).ui?.link }))}"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.leading({ class: vueExports.unref(props).ui?.leading }))}">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
          name: vueExports.unref(appConfig).ui.icons.hash,
          class: ui.value.leadingIcon({ class: vueExports.unref(props).ui?.leadingIcon })
        }, null, _parent));
        _push(`</span>`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h3>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H3-CpFdtzwb.mjs.map
