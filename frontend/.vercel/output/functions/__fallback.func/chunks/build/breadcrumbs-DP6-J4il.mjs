import { v as vueExports, s as serverRenderer_cjs_prodExports, k as useComponentProps, x as useLocale, l as useAppConfig, t as tv, P as Primitive, K as _sfc_main$v, L as pickLinkProps, M as _sfc_main$w, f as _sfc_main$A, G as _sfc_main$x, A as get$1 } from './server.mjs';

const theme = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    },
    "color": {
      "primary": {
        "link": "focus-visible:outline-primary"
      },
      "secondary": {
        "link": "focus-visible:outline-secondary"
      },
      "tertiary": {
        "link": "focus-visible:outline-tertiary"
      },
      "info": {
        "link": "focus-visible:outline-info"
      },
      "success": {
        "link": "focus-visible:outline-success"
      },
      "warning": {
        "link": "focus-visible:outline-warning"
      },
      "error": {
        "link": "focus-visible:outline-error"
      },
      "neutral": {
        "link": "focus-visible:outline-inverted"
      }
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "color": "primary",
      "active": true,
      "class": {
        "link": "text-primary"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "link": "text-secondary"
      }
    },
    {
      "color": "tertiary",
      "active": true,
      "class": {
        "link": "text-tertiary"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "link": "text-info"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "link": "text-success"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "link": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "link": "text-error"
      }
    },
    {
      "color": "neutral",
      "active": true,
      "class": {
        "link": "text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary"
  }
};
const _sfc_main$1 = {
  __name: "UBreadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    items: { type: Array, required: false },
    separatorIcon: { type: null, required: false },
    color: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("breadcrumb", _props);
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = vueExports.computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.breadcrumb || {} })({
      color: props.color
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "aria-label": "breadcrumb",
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol data-slot="list" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.list({ class: vueExports.unref(props).ui?.list }))}"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).items, (item, index) => {
              _push2(`<!--[--><li data-slot="item" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item] }))}"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                default: vueExports.withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": (item.active ?? active) && index === vueExports.unref(props).items.length - 1 ? "page" : void 0,
                      "data-slot": "link",
                      class: ui.value.link({ class: [vueExports.unref(props).ui?.link, item.ui?.link, item.class], active: item.active ?? index === vueExports.unref(props).items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            active: item.active ?? index === vueExports.unref(props).items.length - 1,
                            index,
                            ui: ui.value
                          }, () => {
                            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: item.active ?? index === vueExports.unref(props).items.length - 1,
                              index,
                              ui: ui.value
                            }, () => {
                              if (item.icon) {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                                  name: item.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [vueExports.unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({
                                  size: vueExports.unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "linkLeadingAvatar",
                                  class: ui.value.linkLeadingAvatar({ class: [vueExports.unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span data-slot="linkLabel" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.linkLabel({ class: [vueExports.unref(props).ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId3}>`);
                              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                index
                              }, () => {
                                _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: item.active ?? index === vueExports.unref(props).items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              active: item.active ?? index === vueExports.unref(props).items.length - 1,
                              index,
                              ui: ui.value
                            }, () => [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                index,
                                ui: ui.value
                              }, () => [
                                item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [vueExports.unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                }, null, 8, ["name", "class"])) : item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                                  key: 1,
                                  size: vueExports.unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "linkLeadingAvatar",
                                  class: ui.value.linkLeadingAvatar({ class: [vueExports.unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                              ]),
                              vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 0,
                                "data-slot": "linkLabel",
                                class: ui.value.linkLabel({ class: [vueExports.unref(props).ui?.linkLabel, item.ui?.linkLabel] })
                              }, [
                                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                  index
                                }, () => [
                                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                                ])
                              ], 2)) : vueExports.createCommentVNode("", true),
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                index
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": (item.active ?? active) && index === vueExports.unref(props).items.length - 1 ? "page" : void 0,
                        "data-slot": "link",
                        class: ui.value.link({ class: [vueExports.unref(props).ui?.link, item.ui?.link, item.class], active: item.active ?? index === vueExports.unref(props).items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: vueExports.withCtx(() => [
                          vueExports.renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            active: item.active ?? index === vueExports.unref(props).items.length - 1,
                            index,
                            ui: ui.value
                          }, () => [
                            vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: item.active ?? index === vueExports.unref(props).items.length - 1,
                              index,
                              ui: ui.value
                            }, () => [
                              item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "linkLeadingIcon",
                                class: ui.value.linkLeadingIcon({ class: [vueExports.unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                              }, null, 8, ["name", "class"])) : item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                                key: 1,
                                size: vueExports.unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "linkLeadingAvatar",
                                class: ui.value.linkLeadingAvatar({ class: [vueExports.unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                              }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 0,
                              "data-slot": "linkLabel",
                              class: ui.value.linkLabel({ class: [vueExports.unref(props).ui?.linkLabel, item.ui?.linkLabel] })
                            }, [
                              vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                index
                              }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                              ])
                            ], 2)) : vueExports.createCommentVNode("", true),
                            vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: item.active ?? index === vueExports.unref(props).items.length - 1,
                              index
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < vueExports.unref(props).items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" data-slot="separator" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.separator({ class: [vueExports.unref(props).ui?.separator, item.ui?.separator] }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: separatorIcon.value,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: [vueExports.unref(props).ui?.separatorIcon, item.ui?.separatorIcon] })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              vueExports.createVNode("ol", {
                "data-slot": "list",
                class: ui.value.list({ class: vueExports.unref(props).ui?.list })
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).items, (item, index) => {
                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: index }, [
                    vueExports.createVNode("li", {
                      "data-slot": "item",
                      class: ui.value.item({ class: [vueExports.unref(props).ui?.item, item.ui?.item] })
                    }, [
                      vueExports.createVNode(_sfc_main$v, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                        default: vueExports.withCtx(({ active, ...slotProps }) => [
                          vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                            as: "span",
                            "aria-current": (item.active ?? active) && index === vueExports.unref(props).items.length - 1 ? "page" : void 0,
                            "data-slot": "link",
                            class: ui.value.link({ class: [vueExports.unref(props).ui?.link, item.ui?.link, item.class], active: item.active ?? index === vueExports.unref(props).items.length - 1, disabled: !!item.disabled, to: !!item.to })
                          }), {
                            default: vueExports.withCtx(() => [
                              vueExports.renderSlot(_ctx.$slots, item.slot || "item", {
                                item,
                                active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                index,
                                ui: ui.value
                              }, () => [
                                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "linkLeadingIcon",
                                    class: ui.value.linkLeadingIcon({ class: [vueExports.unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                                    key: 1,
                                    size: vueExports.unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                  }, { ref_for: true }, item.avatar, {
                                    "data-slot": "linkLeadingAvatar",
                                    class: ui.value.linkLeadingAvatar({ class: [vueExports.unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === vueExports.unref(props).items.length - 1 })
                                  }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                                ]),
                                vueExports.unref(get$1)(item, vueExports.unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 0,
                                  "data-slot": "linkLabel",
                                  class: ui.value.linkLabel({ class: [vueExports.unref(props).ui?.linkLabel, item.ui?.linkLabel] })
                                }, [
                                  vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                    index
                                  }, () => [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, vueExports.unref(props).labelKey)), 1)
                                  ])
                                ], 2)) : vueExports.createCommentVNode("", true),
                                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: item.active ?? index === vueExports.unref(props).items.length - 1,
                                  index
                                })
                              ])
                            ]),
                            _: 2
                          }, 1040, ["aria-current", "class"])
                        ]),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < vueExports.unref(props).items.length - 1 ? (vueExports.openBlock(), vueExports.createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      "data-slot": "separator",
                      class: ui.value.separator({ class: [vueExports.unref(props).ui?.separator, item.ui?.separator] })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [
                        vueExports.createVNode(_sfc_main$A, {
                          name: separatorIcon.value,
                          "data-slot": "separatorIcon",
                          class: ui.value.separatorIcon({ class: [vueExports.unref(props).ui?.separatorIcon, item.ui?.separatorIcon] })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : vueExports.createCommentVNode("", true)
                  ], 64);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    items: {},
    ariaLabel: { default: "Навигационная цепочка" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumb = _sfc_main$1;
      if (__props.items.length > 1) {
        _push(`<nav${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
          "aria-label": __props.ariaLabel,
          class: "ds-container pt-4 pb-2"
        }, _attrs))}>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBreadcrumb, {
          items: __props.items,
          "separator-icon": "i-lucide-chevron-right",
          ui: {
            link: "text-caption text-text-secondary hover:text-text-accent",
            linkLabel: "text-caption"
          }
        }, null, _parent));
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "DsBreadcrumbs" });
function buildBreadcrumbs(...segments) {
  const items = [
    { label: "Главная", to: "/", icon: "i-lucide-home" }
  ];
  for (const segment of segments) {
    if (segment.to) {
      items.push({ label: segment.label, to: segment.to });
    } else {
      items.push({ label: segment.label });
    }
  }
  return items;
}

export { __nuxt_component_1 as _, buildBreadcrumbs as b };
//# sourceMappingURL=breadcrumbs-DP6-J4il.mjs.map
