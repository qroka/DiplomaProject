import { v as vueExports, k as useComponentProps, l as useAppConfig, y as useForwardProps, z as reactivePick, t as tv, s as serverRenderer_cjs_prodExports, aO as AccordionRoot_default, aP as AccordionItem_default, A as get$1, aQ as AccordionTrigger_default, f as _sfc_main$A, aR as AccordionContent_default, aM as injectAccordionRootContext, aN as injectAccordionItemContext, q as useForwardExpose, P as Primitive } from './server.mjs';

var AccordionHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "h3"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectAccordionRootContext();
    const itemContext = injectAccordionItemContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "data-orientation": vueExports.unref(rootContext).orientation,
        "data-state": vueExports.unref(itemContext).dataState.value,
        "data-disabled": vueExports.unref(itemContext).dataDisabled.value
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-orientation",
        "data-state",
        "data-disabled"
      ]);
    };
  }
});
var AccordionHeader_default = AccordionHeader_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: null, required: false },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const props = useComponentProps("accordion", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.accordion || {} })({
      disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), {
        type: vueExports.unref(props).type,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).items, (item, index) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionItem_default), {
                key: vueExports.unref(get$1)(item, vueExports.unref(props).valueKey) ?? index,
                value: vueExports.unref(get$1)(item, vueExports.unref(props).valueKey) ?? String(index),
                disabled: item.disabled,
                "data-slot": "item",
                class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class] })
              }, {
                default: vueExports.withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionHeader_default), {
                      as: "div",
                      "data-slot": "header",
                      class: ui.value.header({ class: [vueExports.unref(props).ui?.header, item.ui?.header] })
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionTrigger_default), {
                            "data-slot": "trigger",
                            class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  if (item.icon) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                                      name: item.icon,
                                      "data-slot": "leadingIcon",
                                      class: ui.value.leadingIcon({ class: [vueExports.unref(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots.default) {
                                  _push5(`<span data-slot="label" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label] }))}"${_scopeId4}>`);
                                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                                    name: item.trailingIcon || vueExports.unref(props).trailingIcon || vueExports.unref(appConfig).ui.icons.chevronDown,
                                    "data-slot": "trailingIcon",
                                    class: ui.value.trailingIcon({ class: [vueExports.unref(props).ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  vueExports.renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                      key: 0,
                                      name: item.icon,
                                      "data-slot": "leadingIcon",
                                      class: ui.value.leadingIcon({ class: [vueExports.unref(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                                  ]),
                                  vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots.default ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 0,
                                    "data-slot": "label",
                                    class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label] })
                                  }, [
                                    vueExports.renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                                    ])
                                  ], 2)) : vueExports.createCommentVNode("", true),
                                  vueExports.renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    vueExports.createVNode(_sfc_main$A, {
                                      name: item.trailingIcon || vueExports.unref(props).trailingIcon || vueExports.unref(appConfig).ui.icons.chevronDown,
                                      "data-slot": "trailingIcon",
                                      class: ui.value.trailingIcon({ class: [vueExports.unref(props).ui?.trailingIcon, item.ui?.trailingIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(AccordionTrigger_default), {
                              "data-slot": "trigger",
                              class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.renderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "leadingIcon",
                                    class: ui.value.leadingIcon({ class: [vueExports.unref(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
                                  }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                                ]),
                                vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots.default ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 0,
                                  "data-slot": "label",
                                  class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label] })
                                }, [
                                  vueExports.renderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                                  ])
                                ], 2)) : vueExports.createCommentVNode("", true),
                                vueExports.renderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  vueExports.createVNode(_sfc_main$A, {
                                    name: item.trailingIcon || vueExports.unref(props).trailingIcon || vueExports.unref(appConfig).ui.icons.chevronDown,
                                    "data-slot": "trailingIcon",
                                    class: ui.value.trailingIcon({ class: [vueExports.unref(props).ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionContent_default), {
                        "data-slot": "content",
                        class: ui.value.content({ class: [vueExports.unref(props).ui?.content, item.ui?.content] })
                      }, {
                        default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              _push4(`<div data-slot="body" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.body({ class: [vueExports.unref(props).ui?.body, item.ui?.body] }))}"${_scopeId3}>`);
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              vueExports.renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                vueExports.createVNode("div", {
                                  "data-slot": "body",
                                  class: ui.value.body({ class: [vueExports.unref(props).ui?.body, item.ui?.body] })
                                }, [
                                  vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    vueExports.createTextVNode(vueExports.toDisplayString(item.content), 1)
                                  ])
                                ], 2)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(AccordionHeader_default), {
                        as: "div",
                        "data-slot": "header",
                        class: ui.value.header({ class: [vueExports.unref(props).ui?.header, item.ui?.header] })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(AccordionTrigger_default), {
                            "data-slot": "trigger",
                            class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [vueExports.unref(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
                                }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                              ]),
                              vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots.default ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label] })
                              }, [
                                vueExports.renderSlot(_ctx.$slots, "default", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                                ])
                              ], 2)) : vueExports.createCommentVNode("", true),
                              vueExports.renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                vueExports.createVNode(_sfc_main$A, {
                                  name: item.trailingIcon || vueExports.unref(props).trailingIcon || vueExports.unref(appConfig).ui.icons.chevronDown,
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: [vueExports.unref(props).ui?.trailingIcon, item.ui?.trailingIcon] })
                                }, null, 8, ["name", "class"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(AccordionContent_default), {
                        key: 0,
                        "data-slot": "content",
                        class: ui.value.content({ class: [vueExports.unref(props).ui?.content, item.ui?.content] })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => [
                            vueExports.createVNode("div", {
                              "data-slot": "body",
                              class: ui.value.body({ class: [vueExports.unref(props).ui?.body, item.ui?.body] })
                            }, [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(item.content), 1)
                              ])
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).items, (item, index) => {
                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(AccordionItem_default), {
                  key: vueExports.unref(get$1)(item, vueExports.unref(props).valueKey) ?? index,
                  value: vueExports.unref(get$1)(item, vueExports.unref(props).valueKey) ?? String(index),
                  disabled: item.disabled,
                  "data-slot": "item",
                  class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item, item.class] })
                }, {
                  default: vueExports.withCtx(({ open }) => [
                    vueExports.createVNode(vueExports.unref(AccordionHeader_default), {
                      as: "div",
                      "data-slot": "header",
                      class: ui.value.header({ class: [vueExports.unref(props).ui?.header, item.ui?.header] })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(AccordionTrigger_default), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [vueExports.unref(props).ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [vueExports.unref(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
                              }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots.default ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [vueExports.unref(props).ui?.label, item.ui?.label] })
                            }, [
                              vueExports.renderSlot(_ctx.$slots, "default", {
                                item,
                                index,
                                open
                              }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                              ])
                            ], 2)) : vueExports.createCommentVNode("", true),
                            vueExports.renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              vueExports.createVNode(_sfc_main$A, {
                                name: item.trailingIcon || vueExports.unref(props).trailingIcon || vueExports.unref(appConfig).ui.icons.chevronDown,
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: [vueExports.unref(props).ui?.trailingIcon, item.ui?.trailingIcon] })
                              }, null, 8, ["name", "class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(AccordionContent_default), {
                      key: 0,
                      "data-slot": "content",
                      class: ui.value.content({ class: [vueExports.unref(props).ui?.content, item.ui?.content] })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          open,
                          ui: ui.value
                        }, () => [
                          vueExports.createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: [vueExports.unref(props).ui?.body, item.ui?.body] })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(item.content), 1)
                            ])
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Accordion-DTFNW1AI.mjs.map
