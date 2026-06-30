import { k as useComponentProps, x as useLocale, b4 as useClipboard, l as useAppConfig, v as vueExports, t as tv, s as serverRenderer_cjs_prodExports, g as _sfc_main$u } from './server.mjs';
import _sfc_main$1 from './CodeIcon-zNIMLtZb.mjs';
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
    "root": "relative my-5 group",
    "header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-default text-sm/6",
    "icon": "size-4 shrink-0",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",
    "base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap wrap-break-word overflow-x-auto focus:outline-none **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-accented/50!"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProsePre",
  __ssrInlineRender: true,
  props: {
    icon: { type: null, required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.pre", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const baseRef = vueExports.useTemplateRef("baseRef");
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.pre || {} })());
    function copyCode() {
      const code = props.code ?? baseRef.value?.textContent ?? "";
      copy(code);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root], filename: !!vueExports.unref(props).filename })
      }, _attrs))}>`);
      if (vueExports.unref(props).filename && !vueExports.unref(props).hideHeader) {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: vueExports.unref(props).ui?.header }))}">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
          icon: vueExports.unref(props).icon,
          filename: vueExports.unref(props).filename,
          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
        }, null, _parent));
        _push(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.filename({ class: vueExports.unref(props).ui?.filename }))}">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
        icon: vueExports.unref(copied) ? vueExports.unref(appConfig).ui.icons.copyCheck : vueExports.unref(appConfig).ui.icons.copy,
        color: "neutral",
        variant: "outline",
        size: "sm",
        "aria-label": vueExports.unref(t)("prose.pre.copy"),
        class: ui.value.copy({ class: vueExports.unref(props).ui?.copy }),
        tabindex: "-1",
        onClick: copyCode
      }, null, _parent));
      _push(`<pre${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref_key: "baseRef",
        ref: baseRef,
        class: ui.value.base({ class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] })
      }, _ctx.$attrs))}>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pre-C1_SEe2O.mjs.map
