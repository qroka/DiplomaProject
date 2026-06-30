import { v as vueExports, k as useComponentProps, l as useAppConfig, t as tv, s as serverRenderer_cjs_prodExports, aI as transformUI } from './server.mjs';
import { _ as _sfc_main$1 } from './Tabs-1OPBbOF8.mjs';
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
import './TabsTrigger-B_2FHQlp.mjs';
import './RovingFocusItem-sciPZ7zL.mjs';

const theme = {
  "slots": {
    "root": "my-5 gap-4"
  }
};
const _sfc_main = {
  __name: "ProseTabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
    hash: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("prose.tabs", _props);
    const model = vueExports.useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.tabs || {} }));
    const rerenderCount = vueExports.ref(1);
    const items = vueExports.computed(() => {
      rerenderCount.value;
      return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
    });
    function transformSlot(slot, index) {
      if (typeof slot.type === "symbol") {
        return slot.children?.map(transformSlot);
      }
      return {
        index,
        label: slot.props?.label || `${index}`,
        description: slot.props?.description,
        icon: slot.props?.icon,
        component: slot
      };
    }
    async function onUpdateModelValue() {
      if (props.hash) {
        const hash = props.hash.startsWith("#") ? props.hash : `#${props.hash}`;
        setTimeout(() => {
          (void 0).querySelector(hash)?.scrollIntoView();
        }, 200);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, vueExports.mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onUpdateModelValue],
        color: "primary",
        variant: "link",
        items: items.value,
        class: vueExports.unref(props).class,
        "unmount-on-hide": false,
        ui: vueExports.unref(transformUI)(ui.value(), vueExports.unref(props).ui)
      }, _attrs), {
        content: vueExports.withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(item.component), null, null), _parent2, _scopeId);
          } else {
            return [
              (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(item.component)))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs-BcUsM_j_.mjs.map
