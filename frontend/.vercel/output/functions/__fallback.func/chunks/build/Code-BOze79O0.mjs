import { k as useComponentProps, l as useAppConfig, v as vueExports, t as tv, s as serverRenderer_cjs_prodExports } from './server.mjs';
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
  "base": "px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block",
  "variants": {
    "color": {
      "primary": "border border-primary/25 bg-primary/10 text-primary",
      "neutral": "border border-muted text-highlighted bg-muted",
      "success": "border border-success/25 bg-success/10 text-success",
      "warning": "border border-warning/25 bg-warning/10 text-warning",
      "error": "border border-error/25 bg-error/10 text-error",
      "info": "border border-info/25 bg-info/10 text-info"
    }
  },
  "defaultVariants": {
    "color": "neutral"
  }
};
const _sfc_main = {
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    lang: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.code", _props);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.code || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<code${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ui.value({ class: [vueExports.unref(props).ui?.base, (vueExports.unref(props).class || "").split(",").join(" ")], color: vueExports.unref(props).color })
      }, _attrs))}>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</code>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Code-BOze79O0.mjs.map
