import { v as vueExports, k as useComponentProps, l as useAppConfig, t as tv, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { c as TabsRoot_default, b as TabsList_default, a as TabsIndicator_default, d as TabsTrigger_default, T as TabsContent_default } from './TabsTrigger-B_2FHQlp.mjs';
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
import './RovingFocusItem-sciPZ7zL.mjs';

const theme = {
  "slots": {
    "root": "relative group *:not-first:my-0! *:not-first:static! my-5",
    "list": "relative flex items-center gap-1 border border-muted bg-default border-b-0 rounded-t-md overflow-x-auto p-2",
    "indicator": "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-elevated rounded-md shadow-xs",
    "trigger": [
      "relative inline-flex items-center gap-1.5 text-default data-[state=active]:text-highlighted hover:bg-elevated/50 px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0",
    "triggerLabel": "truncate"
  }
};
const _sfc_main = {
  __name: "ProseCodeGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
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
    const props = useComponentProps("prose.codeGroup", _props);
    const model = vueExports.useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.codeGroup || {} })());
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
        label: slot.props?.filename || slot.props?.label || `${index}`,
        icon: slot.props?.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabsRoot_default), vueExports.mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "default-value": vueExports.unref(props).defaultValue,
        "unmount-on-hide": false,
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabsList_default), {
              class: ui.value.list({ class: vueExports.unref(props).ui?.list })
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabsIndicator_default), {
                    class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(items.value, (item, index) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabsTrigger_default), {
                      key: index,
                      value: String(index),
                      class: ui.value.trigger({ class: vueExports.unref(props).ui?.trigger })
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel }))}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            vueExports.createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            vueExports.createVNode("span", {
                              class: ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel })
                            }, vueExports.toDisplayString(item.label), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(TabsIndicator_default), {
                      class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                    }, null, 8, ["class"]),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items.value, (item, index) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TabsTrigger_default), {
                        key: index,
                        value: String(index),
                        class: ui.value.trigger({ class: vueExports.unref(props).ui?.trigger })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
                          }, null, 8, ["icon", "filename", "class"]),
                          vueExports.createVNode("span", {
                            class: ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel })
                          }, vueExports.toDisplayString(item.label), 3)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(items.value, (item, index) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabsContent_default), {
                key: index,
                value: String(index),
                "as-child": ""
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    serverRenderer_cjs_prodExports.ssrRenderVNode(_push3, vueExports.createVNode(vueExports.resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(item.component), {
                        "hide-header": "",
                        tabindex: "-1"
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(TabsList_default), {
                class: ui.value.list({ class: vueExports.unref(props).ui?.list })
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(TabsIndicator_default), {
                    class: ui.value.indicator({ class: vueExports.unref(props).ui?.indicator })
                  }, null, 8, ["class"]),
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items.value, (item, index) => {
                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TabsTrigger_default), {
                      key: index,
                      value: String(index),
                      class: ui.value.trigger({ class: vueExports.unref(props).ui?.trigger })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_sfc_main$1, {
                          icon: item.icon,
                          filename: item.label,
                          class: ui.value.triggerIcon({ class: vueExports.unref(props).ui?.triggerIcon })
                        }, null, 8, ["icon", "filename", "class"]),
                        vueExports.createVNode("span", {
                          class: ui.value.triggerLabel({ class: vueExports.unref(props).ui?.triggerLabel })
                        }, vueExports.toDisplayString(item.label), 3)
                      ]),
                      _: 2
                    }, 1032, ["value", "class"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items.value, (item, index) => {
                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(TabsContent_default), {
                  key: index,
                  value: String(index),
                  "as-child": ""
                }, {
                  default: vueExports.withCtx(() => [
                    (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeGroup-ftULFWo6.mjs.map
