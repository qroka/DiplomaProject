import { k as useComponentProps, l as useAppConfig, h as useRuntimeConfig, v as vueExports, t as tv, s as serverRenderer_cjs_prodExports } from './server.mjs';
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
    "base": "text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary",
    "link": ""
  }
};
const _sfc_main = {
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.h4", _props);
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public?.mdc || {};
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.h4 || {} })());
    const generate = vueExports.computed(() => props.id && typeof headings?.anchorLinks === "object" && headings.anchorLinks.h4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        id: vueExports.unref(props).id,
        class: ui.value.base({ class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] })
      }, _attrs))}>`);
      if (vueExports.unref(props).id && generate.value) {
        _push(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `#${vueExports.unref(props).id}`)} class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.link({ class: vueExports.unref(props).ui?.link }))}">`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h4>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/H4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H4-Cz03DCjO.mjs.map
