import { v as vueExports, k as useComponentProps, x as useLocale, b6 as useClipboard, l as useAppConfig, t as tv, s as serverRenderer_cjs_prodExports, f as _sfc_main$A, g as _sfc_main$u, W as getSlotChildrenText } from './server.mjs';
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
    "root": "relative flex flex-wrap items-center gap-2 border border-muted bg-muted rounded-md px-4 py-3 my-5 last:mb-0",
    "icon": "size-4 shrink-0 text-highlighted",
    "content": "min-w-0",
    "description": "text-sm/6 text-default font-medium",
    "actions": "flex flex-wrap items-center gap-1.5 ms-auto"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProsePrompt",
  __ssrInlineRender: true,
  props: {
    description: { type: String, required: false },
    icon: { type: null, required: false },
    actions: { type: Array, required: false, default: () => ["copy"] },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("prose.prompt", _props);
    const { t } = useLocale();
    const { copy, copied } = useClipboard();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.prompt || {} })());
    function getPromptText() {
      const children = slots.default?.();
      return children ? getSlotChildrenText(children).trim() : "";
    }
    function copyPrompt() {
      copy(getPromptText());
    }
    function openInCursor() {
      const url = new URL("cursor://anysphere.cursor-deeplink/prompt");
      url.searchParams.set("text", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    function openInWindsurf() {
      const url = new URL("windsurf://cascade/newChat");
      url.searchParams.set("prompt", getPromptText());
      (void 0).open(url.toString(), "_self");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _ctx.$attrs, _attrs))}>`);
      if (vueExports.unref(props).icon) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
          name: vueExports.unref(props).icon,
          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.content({ class: vueExports.unref(props).ui?.content }))}">`);
      if (vueExports.unref(props).description) {
        _push(`<p class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.actions({ class: vueExports.unref(props).ui?.actions }))}">`);
      if (vueExports.unref(props).actions.includes("copy")) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
          icon: vueExports.unref(copied) ? vueExports.unref(appConfig).ui.icons.copyCheck : vueExports.unref(appConfig).ui.icons.copy,
          size: "sm",
          label: vueExports.unref(t)("prose.prompt.copy"),
          onClick: copyPrompt
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(props).actions.includes("cursor")) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
          icon: "i-simple-icons-cursor",
          color: "neutral",
          variant: "outline",
          size: "sm",
          label: vueExports.unref(t)("prose.prompt.openIn", { name: "Cursor" }),
          onClick: openInCursor
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(props).actions.includes("windsurf")) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
          icon: "i-simple-icons-windsurf",
          color: "neutral",
          variant: "outline",
          size: "sm",
          label: vueExports.unref(t)("prose.prompt.openIn", { name: "Windsurf" }),
          onClick: openInWindsurf
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Prompt-CXLiNoi6.mjs.map
