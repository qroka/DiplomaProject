import { v as vueExports, k as useComponentProps, l as useAppConfig, t as tv, s as serverRenderer_cjs_prodExports, P as Primitive } from './server.mjs';
import { s as ssrRenderSlot } from './ssrSlot-B9M8nGkC.mjs';
import { r as renderSlot } from './slot-DusE14yH.mjs';
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
    "container": "flex items-center gap-3 font-mono text-sm",
    "name": "font-semibold text-primary",
    "wrapper": "flex-1 flex items-center gap-1.5 text-xs",
    "required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
    "type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
    "description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
  }
};
const _sfc_main = {
  __name: "ProseField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("prose.field", _props);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.field || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: vueExports.unref(props).ui?.container }))}"${_scopeId}>`);
            if (vueExports.unref(props).name) {
              _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.name({ class: vueExports.unref(props).ui?.name }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(props).type || vueExports.unref(props).required) {
              _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId}>`);
              if (vueExports.unref(props).type) {
                _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.type({ class: vueExports.unref(props).ui?.type }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).required) {
                _push2(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.required({ class: vueExports.unref(props).ui?.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || vueExports.unref(props).description) {
              _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("div", {
                class: ui.value.container({ class: vueExports.unref(props).ui?.container })
              }, [
                vueExports.unref(props).name ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  class: ui.value.name({ class: vueExports.unref(props).ui?.name })
                }, vueExports.toDisplayString(vueExports.unref(props).name), 3)) : vueExports.createCommentVNode("", true),
                vueExports.unref(props).type || vueExports.unref(props).required ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                }, [
                  vueExports.unref(props).type ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    class: ui.value.type({ class: vueExports.unref(props).ui?.type })
                  }, vueExports.toDisplayString(vueExports.unref(props).type), 3)) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).required ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 1,
                    class: ui.value.required({ class: vueExports.unref(props).ui?.required })
                  }, " required ", 2)) : vueExports.createCommentVNode("", true)
                ], 2)) : vueExports.createCommentVNode("", true)
              ], 2),
              !!slots.default || vueExports.unref(props).description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: ui.value.description({ class: vueExports.unref(props).ui?.description })
              }, [
                renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                ])
              ], 2)) : vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-CbtUnBQp.mjs.map
