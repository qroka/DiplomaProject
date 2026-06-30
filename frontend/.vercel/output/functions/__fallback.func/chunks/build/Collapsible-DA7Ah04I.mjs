import { k as useComponentProps, x as useLocale, l as useAppConfig, v as vueExports, t as tv, s as serverRenderer_cjs_prodExports, aI as transformUI, f as _sfc_main$A } from './server.mjs';
import { _ as _sfc_main$1 } from './Collapsible-8cfMzLTS.mjs';
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
    "root": "my-5",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate",
    "content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
  }
};
const _sfc_main = {
  __name: "ProseCollapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: null, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("prose.collapsible", _props);
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.collapsible || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, vueExports.mergeProps({
        "unmount-on-hide": false,
        class: vueExports.unref(props).class,
        ui: vueExports.unref(transformUI)(ui.value, vueExports.unref(props).ui)
      }, _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.trigger({ class: vueExports.unref(props).ui?.trigger }))}"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
              name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.chevronDown,
              class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
            }, null, _parent2, _scopeId));
            _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(open ? vueExports.unref(props).closeText || vueExports.unref(t)("prose.collapsible.closeText") : vueExports.unref(props).openText || vueExports.unref(t)("prose.collapsible.openText"))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).name || vueExports.unref(t)("prose.collapsible.name"))}</span></button>`);
          } else {
            return [
              vueExports.createVNode("button", {
                class: ui.value.trigger({ class: vueExports.unref(props).ui?.trigger })
              }, [
                vueExports.createVNode(_sfc_main$A, {
                  name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.chevronDown,
                  class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
                }, null, 8, ["name", "class"]),
                vueExports.createVNode("span", {
                  class: ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel })
                }, vueExports.toDisplayString(open ? vueExports.unref(props).closeText || vueExports.unref(t)("prose.collapsible.closeText") : vueExports.unref(props).openText || vueExports.unref(t)("prose.collapsible.openText")) + " " + vueExports.toDisplayString(vueExports.unref(props).name || vueExports.unref(t)("prose.collapsible.name")), 3)
              ], 2)
            ];
          }
        }),
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-DA7Ah04I.mjs.map
