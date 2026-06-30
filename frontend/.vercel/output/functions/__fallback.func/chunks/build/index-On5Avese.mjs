import { v as vueExports, u as useHead, d as useAsyncData, s as serverRenderer_cjs_prodExports, f as _sfc_main$A, g as _sfc_main$u, h as useRuntimeConfig, j as _sfc_main$l, T as navIcons, a as __nuxt_component_0$1, k as useComponentProps, x as useLocale, l as useAppConfig, y as useForwardProps, z as reactivePick, t as tv, P as Primitive, m as usePrefix, e as _sfc_main$n } from './server.mjs';
import { _ as __nuxt_component_7, a as __nuxt_component_9 } from './SectionHeading-DAShvJNb.mjs';
import { _ as __nuxt_component_1$1 } from './SectionDivider-Bm4E2pGh.mjs';
import { _ as __nuxt_component_5$1 } from './EmptyState-ya4bNInt.mjs';
import { a as __nuxt_component_8, _ as __nuxt_component_4$1, V as VacancyCard } from './VacancySubscribeForm-D124Heyw.mjs';
import { _ as __nuxt_component_7$1 } from './Surface-X0lNFFsI.mjs';
import { A as ApplicationForm } from './ApplicationForm-Cr76jRNi.mjs';
import { _ as _sfc_main$c } from './Accordion-Co3fqJrZ.mjs';
import { u as useHeroImage } from './useHeroImage-CV5TxxU-.mjs';
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
import './Textarea-BZalJ9Lx.mjs';
import './Select-CgIdPBev.mjs';
import './InputDate-CSyueQQs.mjs';
import './RovingFocusItem-sciPZ7zL.mjs';
import './Collapsible-8cfMzLTS.mjs';
import './FileUpload-D2vDTnAm.mjs';

const theme$2 = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
    "wrapper": "",
    "header": "",
    "headline": "mb-4",
    "title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-lg sm:text-xl/8 text-muted",
    "body": "mt-10",
    "footer": "mt-10",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "wrapper": "text-center",
        "description": "text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "headline": {
      "true": {
        "headline": "font-semibold text-primary flex items-center gap-1.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  }
};
const _sfc_main$b = {
  __name: "UPageHero",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    headline: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("pageHero", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.pageHero || {} })({
      orientation: props.orientation,
      reverse: props.reverse,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-orientation": vueExports.unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$n, {
              "data-slot": "container",
              class: ui.value.container({ class: vueExports.unref(props).ui?.container })
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links)) {
                    _push3(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description)) {
                      _push3(`<div data-slot="header" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: vueExports.unref(props).ui?.header }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (vueExports.unref(props).headline || !!slots.headline) {
                          _push3(`<div data-slot="headline" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.headline({ class: vueExports.unref(props).ui?.headline, headline: !slots.headline }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (vueExports.unref(props).title || !!slots.title) {
                          _push3(`<h1 data-slot="title" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.title({ class: vueExports.unref(props).ui?.title }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h1>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (vueExports.unref(props).description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.body) {
                      _push3(`<div data-slot="body" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.body({ class: vueExports.unref(props).ui?.body }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!slots.footer || (vueExports.unref(props).links?.length || !!slots.links)) {
                      _push3(`<div data-slot="footer" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.footer({ class: vueExports.unref(props).ui?.footer }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        if (vueExports.unref(props).links?.length || !!slots.links) {
                          _push3(`<div data-slot="links" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.links({ class: vueExports.unref(props).ui?.links }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).links, (link, index) => {
                              _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, vueExports.mergeProps({
                                key: index,
                                size: "xl"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!!slots.default) {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else if (vueExports.unref(props).orientation === "horizontal") {
                    _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(vueExports.unref(prefix)("hidden lg:block"))}"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      "data-slot": "wrapper",
                      class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                    }, [
                      !!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: vueExports.unref(props).ui?.header })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "header", {}, () => [
                          vueExports.unref(props).headline || !!slots.headline ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            "data-slot": "headline",
                            class: ui.value.headline({ class: vueExports.unref(props).ui?.headline, headline: !slots.headline })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "headline", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).headline), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.unref(props).title || !!slots.title ? (vueExports.openBlock(), vueExports.createBlock("h1", {
                            key: 1,
                            "data-slot": "title",
                            class: ui.value.title({ class: vueExports.unref(props).ui?.title })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "title", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).title), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 2,
                            "data-slot": "description",
                            class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "description", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true),
                      !!slots.body ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        "data-slot": "body",
                        class: ui.value.body({ class: vueExports.unref(props).ui?.body })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "body")
                      ], 2)) : vueExports.createCommentVNode("", true),
                      !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: vueExports.unref(props).ui?.footer })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "footer", {}, () => [
                          vueExports.unref(props).links?.length || !!slots.links ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            "data-slot": "links",
                            class: ui.value.links({ class: vueExports.unref(props).ui?.links })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "links", {}, () => [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).links, (link, index) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$u, vueExports.mergeProps({
                                  key: index,
                                  size: "xl"
                                }, { ref_for: true }, link), null, 16);
                              }), 128))
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ], 2)) : vueExports.createCommentVNode("", true),
                    !!slots.default ? vueExports.renderSlot(_ctx.$slots, "default", { key: 1 }) : vueExports.unref(props).orientation === "horizontal" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: vueExports.unref(prefix)("hidden lg:block")
                    }, null, 2)) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "top"),
              vueExports.createVNode(_sfc_main$n, {
                "data-slot": "container",
                class: ui.value.container({ class: vueExports.unref(props).ui?.container })
              }, {
                default: vueExports.withCtx(() => [
                  !!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                  }, [
                    !!slots.header || (vueExports.unref(props).headline || !!slots.headline) || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      "data-slot": "header",
                      class: ui.value.header({ class: vueExports.unref(props).ui?.header })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "header", {}, () => [
                        vueExports.unref(props).headline || !!slots.headline ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          "data-slot": "headline",
                          class: ui.value.headline({ class: vueExports.unref(props).ui?.headline, headline: !slots.headline })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "headline", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).headline), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.unref(props).title || !!slots.title ? (vueExports.openBlock(), vueExports.createBlock("h1", {
                          key: 1,
                          "data-slot": "title",
                          class: ui.value.title({ class: vueExports.unref(props).ui?.title })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "title", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).title), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 2,
                          "data-slot": "description",
                          class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "description", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ])
                    ], 2)) : vueExports.createCommentVNode("", true),
                    !!slots.body ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      "data-slot": "body",
                      class: ui.value.body({ class: vueExports.unref(props).ui?.body })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "body")
                    ], 2)) : vueExports.createCommentVNode("", true),
                    !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      "data-slot": "footer",
                      class: ui.value.footer({ class: vueExports.unref(props).ui?.footer })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "footer", {}, () => [
                        vueExports.unref(props).links?.length || !!slots.links ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          "data-slot": "links",
                          class: ui.value.links({ class: vueExports.unref(props).ui?.links })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "links", {}, () => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).links, (link, index) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$u, vueExports.mergeProps({
                                key: index,
                                size: "xl"
                              }, { ref_for: true }, link), null, 16);
                            }), 128))
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ])
                    ], 2)) : vueExports.createCommentVNode("", true)
                  ], 2)) : vueExports.createCommentVNode("", true),
                  !!slots.default ? vueExports.renderSlot(_ctx.$slots, "default", { key: 1 }) : vueExports.unref(props).orientation === "horizontal" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 2,
                    class: vueExports.unref(prefix)("hidden lg:block")
                  }, null, 2)) : vueExports.createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              vueExports.renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    image: {},
    imageAlt: {}
  },
  setup(__props) {
    const links = [
      {
        label: "Вакансии",
        to: "/vacancies",
        icon: "i-lucide-briefcase"
      },
      {
        label: "О кадрах",
        to: "/about",
        color: "neutral",
        variant: "subtle",
        trailingIcon: "i-lucide-arrow-right"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$b;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UPageHero, vueExports.mergeProps({
        title: "Успешная команда - успешный район",
        description: "Работа в администрации Сургутского района: стабильность, развитие и реальный вклад в жизнь района.",
        orientation: "horizontal",
        links,
        ui: {
          root: "border-b border-default",
          container: "min-h-[calc(100dvh-var(--ui-header-height,4rem))] py-16 sm:py-20 lg:py-24 gap-10 sm:gap-y-16 lg:gap-16 lg:items-center",
          title: "text-4xl sm:text-5xl lg:text-6xl",
          description: "max-w-xl"
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", __props.image)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", __props.imageAlt)} width="640" height="480" class="w-full rounded-lg object-contain p-4 shadow-2xl ring ring-default bg-elevated/50 sm:p-6" fetchpriority="high"${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("img", {
                src: __props.image,
                alt: __props.imageAlt,
                width: "640",
                height: "480",
                class: "w-full rounded-lg object-contain p-4 shadow-2xl ring ring-default bg-elevated/50 sm:p-6",
                fetchpriority: "high"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$a, { __name: "HomeHero" });
const _sfc_main$9 = /* @__PURE__ */ vueExports.defineComponent({
  ...{ inheritAttrs: false },
  __name: "PartnerLogoLink",
  __ssrInlineRender: true,
  props: {
    logo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, vueExports.mergeProps({
        to: __props.logo.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: ["flex items-center justify-center p-4 rounded-lg bg-surface-raised border border-border-default hover:shadow-sm transition-[box-shadow,transform] duration-fast hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus-ring focus-visible:outline-offset-2", _ctx.$attrs.class]
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", __props.logo.image)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", __props.logo.alt)} class="h-12 w-12 object-contain opacity-80 hover:opacity-100 transition-opacity"${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("img", {
                src: __props.logo.image,
                alt: __props.logo.alt,
                class: "h-12 w-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnerLogoLink.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$9, { __name: "PartnerLogoLink" });
const theme$1 = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "![animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$8 = {
  __name: "UMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("marquee", _props);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.marquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-orientation": vueExports.unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).repeat, (i) => {
              _push2(`<div data-slot="content" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.content({ class: [vueExports.unref(props).ui?.content] }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).repeat, (i) => {
                return vueExports.openBlock(), vueExports.createBlock("div", {
                  key: i,
                  "data-slot": "content",
                  class: ui.value.content({ class: [vueExports.unref(props).ui?.content] })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PartnersLogos",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = [
      { url: "https://lk.fss.ru/", image: "/Icons/i-custom-fss.svg", alt: "Фонд социального страхования" },
      { url: "https://mintrud.gov.ru", image: "/Icons/i-custom-mintrud.svg", alt: "Министерство труда России" },
      { url: "https://admsr.ru", image: "/Icons/i-custom-admsr.svg", alt: "Администрация Сургутского района" },
      { url: "https://admsurgut.ru", image: "/Icons/i-custom-admsur.svg", alt: "Администрация города Сургута" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionDivider = __nuxt_component_1$1;
      const _component_PartnerLogoLink = __nuxt_component_2$1;
      const _component_UMarquee = _sfc_main$8;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, vueExports.mergeProps({
        spacing: "md",
        variant: "muted"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionDivider, {
              label: "С нами работают",
              variant: "brand",
              spacing: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid-logos md:hidden motion-reduce:md:grid mb-2"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(partners, (logo, index) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PartnerLogoLink, {
                key: `grid-${index}`,
                logo
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="hidden md:block motion-reduce:hidden group **:data-marquee:hover:[animation-play-state:paused] **:data-marquee:focus-within:[animation-play-state:paused]"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              overlay: false,
              ui: { root: "[--gap:24px]" }
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(partners, (logo, index) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PartnerLogoLink, {
                      key: `marquee-${index}`,
                      logo,
                      class: "px-4"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(partners, (logo, index) => {
                      return vueExports.createVNode(_component_PartnerLogoLink, {
                        key: `marquee-${index}`,
                        logo,
                        class: "px-4"
                      }, null, 8, ["logo"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSectionDivider, {
                label: "С нами работают",
                variant: "brand",
                spacing: "sm"
              }),
              vueExports.createVNode("div", { class: "grid-logos md:hidden motion-reduce:md:grid mb-2" }, [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(partners, (logo, index) => {
                  return vueExports.createVNode(_component_PartnerLogoLink, {
                    key: `grid-${index}`,
                    logo
                  }, null, 8, ["logo"]);
                }), 64))
              ]),
              vueExports.createVNode("div", { class: "hidden md:block motion-reduce:hidden group **:data-marquee:hover:[animation-play-state:paused] **:data-marquee:focus-within:[animation-play-state:paused]" }, [
                vueExports.createVNode(_component_UMarquee, {
                  "pause-on-hover": "",
                  overlay: false,
                  ui: { root: "[--gap:24px]" }
                }, {
                  default: vueExports.withCtx(() => [
                    (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(partners, (logo, index) => {
                      return vueExports.createVNode(_component_PartnerLogoLink, {
                        key: `marquee-${index}`,
                        logo,
                        class: "px-4"
                      }, null, 8, ["logo"]);
                    }), 64))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnersLogos.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$7, { __name: "PartnersLogos" });
const _sfc_main$6 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HomeHighlights",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        icon: "i-lucide-shield-check",
        title: "Стабильная занятость",
        description: "Муниципальная служба с социальными гарантиями и предсказуемым графиком."
      },
      {
        icon: "i-lucide-graduation-cap",
        title: "Развитие и обучение",
        description: "Курсы, наставничество и программы повышения квалификации для сотрудников."
      },
      {
        icon: "i-lucide-users",
        title: "Сильная команда",
        description: "Сплочённый коллектив, ориентированный на развитие района и поддержку жителей."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_7;
      const _component_UIcon = _sfc_main$A;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, vueExports.mergeProps({
        spacing: "md",
        variant: "muted"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-4 sm:grid-cols-3 sm:gap-5"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(items, (item) => {
              _push2(`<article class="group rounded-xl bg-surface-raised p-5 ring-1 ring-border-default transition-[box-shadow,transform] duration-300 hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"${_scopeId}><div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "size-5",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`</div><h2 class="text-h3 text-text-primary"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}</h2><p class="mt-2 text-body text-text-secondary text-pretty"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.description)}</p></article>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "grid gap-4 sm:grid-cols-3 sm:gap-5" }, [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items, (item) => {
                  return vueExports.createVNode("article", {
                    key: item.title,
                    class: "group rounded-xl bg-surface-raised p-5 ring-1 ring-border-default transition-[box-shadow,transform] duration-300 hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  }, [
                    vueExports.createVNode("div", { class: "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400" }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: item.icon,
                        class: "size-5",
                        "aria-hidden": "true"
                      }, null, 8, ["name"])
                    ]),
                    vueExports.createVNode("h2", { class: "text-h3 text-text-primary" }, vueExports.toDisplayString(item.title), 1),
                    vueExports.createVNode("p", { class: "mt-2 text-body text-text-secondary text-pretty" }, vueExports.toDisplayString(item.description), 1)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHighlights.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$6, { __name: "HomeHighlights" });
const _sfc_main$5 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HomeNews",
  __ssrInlineRender: true,
  props: {
    posts: {}
  },
  setup(__props) {
    const props = __props;
    const featured = vueExports.computed(() => props.posts?.[0]);
    const rest = vueExports.computed(() => props.posts?.slice(1, 3) ?? []);
    function formatDate(value) {
      try {
        return new Intl.DateTimeFormat("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(new Date(value));
      } catch {
        return value;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_DsEmptyState = __nuxt_component_5$1;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, vueExports.mergeProps({ spacing: "md" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Новости",
              description: "Коротко о текущих мероприятиях и событиях команды",
              "heading-id": "news"
            }, null, _parent2, _scopeId));
            if (__props.posts?.length) {
              _push2(`<div class="grid gap-5 lg:grid-cols-12 lg:gap-6"${_scopeId}>`);
              if (vueExports.unref(featured)) {
                _push2(`<article class="overflow-hidden rounded-2xl bg-surface-raised ring-1 ring-border-default lg:col-span-7"${_scopeId}>`);
                if (vueExports.unref(featured).imageUrl) {
                  _push2(`<div class="aspect-[16/10] overflow-hidden bg-surface-sunken"${_scopeId}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", vueExports.unref(featured).imageUrl)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", vueExports.unref(featured).title)} class="size-full object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:hover:scale-100" loading="eager"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="p-6 lg:p-8"${_scopeId}>`);
                if (vueExports.unref(featured).date) {
                  _push2(`<time${serverRenderer_cjs_prodExports.ssrRenderAttr("datetime", vueExports.unref(featured).date)} class="text-caption text-text-muted"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(vueExports.unref(featured).date))}</time>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<h3 class="mt-2 text-h2 text-text-primary text-balance"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(featured).title)}</h3>`);
                if (vueExports.unref(featured).description) {
                  _push2(`<p class="mt-3 text-body-lg text-text-secondary text-pretty line-clamp-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(featured).description)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></article>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(rest).length) {
                _push2(`<div class="flex flex-col gap-4 lg:col-span-5"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(rest), (post) => {
                  _push2(`<article class="flex flex-1 flex-col overflow-hidden rounded-xl bg-surface-raised ring-1 ring-border-default sm:flex-row"${_scopeId}>`);
                  if (post.imageUrl) {
                    _push2(`<div class="aspect-video shrink-0 overflow-hidden bg-surface-sunken sm:w-36 lg:w-40"${_scopeId}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", post.imageUrl)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", post.title)} class="size-full object-cover" loading="lazy"${_scopeId}></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="flex flex-col justify-center p-4 lg:p-5"${_scopeId}>`);
                  if (post.date) {
                    _push2(`<time${serverRenderer_cjs_prodExports.ssrRenderAttr("datetime", post.date)} class="text-caption text-text-muted"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(post.date))}</time>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<h3 class="mt-1 text-h3 text-text-primary line-clamp-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(post.title)}</h3>`);
                  if (post.description) {
                    _push2(`<p class="mt-2 text-body text-text-secondary line-clamp-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(post.description)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></article>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                icon: "i-lucide-newspaper",
                title: "Новости скоро появятся",
                description: "Мы готовим материалы о мероприятиях и достижениях команды"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Новости",
                description: "Коротко о текущих мероприятиях и событиях команды",
                "heading-id": "news"
              }),
              __props.posts?.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "grid gap-5 lg:grid-cols-12 lg:gap-6"
              }, [
                vueExports.unref(featured) ? (vueExports.openBlock(), vueExports.createBlock("article", {
                  key: 0,
                  class: "overflow-hidden rounded-2xl bg-surface-raised ring-1 ring-border-default lg:col-span-7"
                }, [
                  vueExports.unref(featured).imageUrl ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "aspect-[16/10] overflow-hidden bg-surface-sunken"
                  }, [
                    vueExports.createVNode("img", {
                      src: vueExports.unref(featured).imageUrl,
                      alt: vueExports.unref(featured).title,
                      class: "size-full object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:hover:scale-100",
                      loading: "eager"
                    }, null, 8, ["src", "alt"])
                  ])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("div", { class: "p-6 lg:p-8" }, [
                    vueExports.unref(featured).date ? (vueExports.openBlock(), vueExports.createBlock("time", {
                      key: 0,
                      datetime: vueExports.unref(featured).date,
                      class: "text-caption text-text-muted"
                    }, vueExports.toDisplayString(formatDate(vueExports.unref(featured).date)), 9, ["datetime"])) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode("h3", { class: "mt-2 text-h2 text-text-primary text-balance" }, vueExports.toDisplayString(vueExports.unref(featured).title), 1),
                    vueExports.unref(featured).description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 1,
                      class: "mt-3 text-body-lg text-text-secondary text-pretty line-clamp-3"
                    }, vueExports.toDisplayString(vueExports.unref(featured).description), 1)) : vueExports.createCommentVNode("", true)
                  ])
                ])) : vueExports.createCommentVNode("", true),
                vueExports.unref(rest).length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  class: "flex flex-col gap-4 lg:col-span-5"
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(rest), (post) => {
                    return vueExports.openBlock(), vueExports.createBlock("article", {
                      key: post.id,
                      class: "flex flex-1 flex-col overflow-hidden rounded-xl bg-surface-raised ring-1 ring-border-default sm:flex-row"
                    }, [
                      post.imageUrl ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "aspect-video shrink-0 overflow-hidden bg-surface-sunken sm:w-36 lg:w-40"
                      }, [
                        vueExports.createVNode("img", {
                          src: post.imageUrl,
                          alt: post.title,
                          class: "size-full object-cover",
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.createVNode("div", { class: "flex flex-col justify-center p-4 lg:p-5" }, [
                        post.date ? (vueExports.openBlock(), vueExports.createBlock("time", {
                          key: 0,
                          datetime: post.date,
                          class: "text-caption text-text-muted"
                        }, vueExports.toDisplayString(formatDate(post.date)), 9, ["datetime"])) : vueExports.createCommentVNode("", true),
                        vueExports.createVNode("h3", { class: "mt-1 text-h3 text-text-primary line-clamp-2" }, vueExports.toDisplayString(post.title), 1),
                        post.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                          key: 1,
                          class: "mt-2 text-body text-text-secondary line-clamp-2"
                        }, vueExports.toDisplayString(post.description), 1)) : vueExports.createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])) : vueExports.createCommentVNode("", true)
              ])) : (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                key: 1,
                icon: "i-lucide-newspaper",
                title: "Новости скоро появятся",
                description: "Мы готовим материалы о мероприятиях и достижениях команды"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeNews.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$5, { __name: "HomeNews" });
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HomeValuesBento",
  __ssrInlineRender: true,
  setup(__props) {
    const values = [
      {
        id: "competence",
        title: "Компетенция и опыт",
        subtitle: "Опора на надёжность",
        summary: "Глубокие знания, наставничество и инвестиции в обучение сотрудников.",
        icon: "i-lucide-badge-check",
        tint: "bg-gradient-to-br from-primary-500/8 to-transparent"
      },
      {
        id: "unity",
        title: "Сплочённость и доверие",
        subtitle: "Сила команды Севера",
        summary: "Взаимная поддержка, традиции коллектива и атмосфера взаимовыручки.",
        icon: "i-lucide-heart-handshake",
        tint: "bg-gradient-to-br from-zinc-500/8 to-transparent"
      },
      {
        id: "goals",
        title: "Чёткие задачи и цели",
        subtitle: "Курс на развитие района",
        summary: "Измеримые цели, прозрачное планирование и фокус на результат для жителей.",
        icon: "i-lucide-target",
        tint: "bg-gradient-to-br from-emerald-600/10 to-transparent"
      },
      {
        id: "openness",
        title: "Открытость и коммуникации",
        subtitle: "Диалог с жителями и командой",
        summary: "Прозрачные решения, обратная связь и инициативы сотрудников.",
        icon: "i-lucide-messages-square",
        tint: "bg-gradient-to-br from-primary-500/6 via-transparent to-zinc-500/6"
      }
    ];
    function cellClass(index) {
      const layouts = [
        "lg:col-span-7 bg-surface-raised",
        "lg:col-span-5 bg-surface-sunken",
        "lg:col-span-5 bg-surface-raised",
        "lg:col-span-7 bg-surface-sunken"
      ];
      return layouts[index] ?? "bg-surface-raised";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_UIcon = _sfc_main$A;
      const _component_UButton = _sfc_main$u;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, vueExports.mergeProps({ spacing: "md" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Наши ценности",
              description: "Принципы, на которых строится работа администрации Сургутского района",
              "heading-id": "values"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-4 lg:grid-cols-12 lg:gap-5"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(values, (value, index) => {
              _push2(`<article class="${serverRenderer_cjs_prodExports.ssrRenderClass([cellClass(index), "group relative overflow-hidden rounded-2xl p-6 lg:p-8 ring-1 ring-border-default transition-[box-shadow,transform] duration-300 hover:shadow-lg hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"])}"${_scopeId}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([value.tint, "pointer-events-none absolute inset-0 opacity-60"])}" aria-hidden="true"${_scopeId}></div><div class="relative"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: value.icon,
                class: "mb-4 size-8 text-primary-600 dark:text-primary-400",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-h3 text-text-primary text-balance"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(value.title)}</h3><p class="mt-2 text-body font-medium text-text-accent"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(value.subtitle)}</p><p class="mt-3 text-body text-text-secondary text-pretty"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(value.summary)}</p></div></article>`);
            });
            _push2(`<!--]--></div><div class="mt-6"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Подробнее о кадровой политике",
              to: "/about",
              color: "neutral",
              variant: "ghost",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Наши ценности",
                description: "Принципы, на которых строится работа администрации Сургутского района",
                "heading-id": "values"
              }),
              vueExports.createVNode("div", { class: "grid gap-4 lg:grid-cols-12 lg:gap-5" }, [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(values, (value, index) => {
                  return vueExports.createVNode("article", {
                    key: value.id,
                    class: [cellClass(index), "group relative overflow-hidden rounded-2xl p-6 lg:p-8 ring-1 ring-border-default transition-[box-shadow,transform] duration-300 hover:shadow-lg hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"]
                  }, [
                    vueExports.createVNode("div", {
                      class: ["pointer-events-none absolute inset-0 opacity-60", value.tint],
                      "aria-hidden": "true"
                    }, null, 2),
                    vueExports.createVNode("div", { class: "relative" }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: value.icon,
                        class: "mb-4 size-8 text-primary-600 dark:text-primary-400",
                        "aria-hidden": "true"
                      }, null, 8, ["name"]),
                      vueExports.createVNode("h3", { class: "text-h3 text-text-primary text-balance" }, vueExports.toDisplayString(value.title), 1),
                      vueExports.createVNode("p", { class: "mt-2 text-body font-medium text-text-accent" }, vueExports.toDisplayString(value.subtitle), 1),
                      vueExports.createVNode("p", { class: "mt-3 text-body text-text-secondary text-pretty" }, vueExports.toDisplayString(value.summary), 1)
                    ])
                  ], 2);
                }), 64))
              ]),
              vueExports.createVNode("div", { class: "mt-6" }, [
                vueExports.createVNode(_component_UButton, {
                  label: "Подробнее о кадровой политике",
                  to: "/about",
                  color: "neutral",
                  variant: "ghost",
                  "trailing-icon": "i-lucide-arrow-right"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeValuesBento.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$4, { __name: "HomeValuesBento" });
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "HomeCareerPaths",
  __ssrInlineRender: true,
  setup(__props) {
    const paths = [
      {
        label: "Конкурсы",
        to: "/tenders",
        description: "Открытые конкурсы на замещение должностей",
        icon: navIcons["/tenders"]
      },
      {
        label: "Кадровый резерв",
        to: "/staffreserve",
        description: "Как вступить в резерв и развивать карьеру",
        icon: navIcons["/staffreserve"]
      },
      {
        label: "Молодёжь",
        to: "/youth",
        description: "Стажировки и программы для молодых специалистов",
        icon: navIcons["/youth"]
      },
      {
        label: "Профразвитие",
        to: "/profdev",
        description: "Обучение, повышение квалификации и наставничество",
        icon: navIcons["/profdev"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$A;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, vueExports.mergeProps({
        spacing: "md",
        variant: "muted"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Карьерные возможности",
              description: "Разделы портала для тех, кто хочет развиваться в муниципальной службе",
              "heading-id": "career"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(paths, (path) => {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                key: path.to,
                to: path.to,
                class: "group flex flex-col rounded-xl bg-surface-raised p-5 ring-1 ring-border-default transition-[box-shadow,transform,border-color] duration-300 hover:ring-primary-500/30 hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-surface-sunken text-primary-600 transition-colors group-hover:bg-primary-500/10 dark:text-primary-400"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: path.icon,
                      class: "size-5",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><h3 class="text-h3 text-text-primary"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(path.label)}</h3><p class="mt-2 flex-1 text-body text-text-secondary text-pretty"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(path.description)}</p><span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400"${_scopeId2}> Перейти `);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: "i-lucide-arrow-right",
                      class: "size-4 transition-transform group-hover:translate-x-0.5",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-surface-sunken text-primary-600 transition-colors group-hover:bg-primary-500/10 dark:text-primary-400" }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: path.icon,
                          class: "size-5",
                          "aria-hidden": "true"
                        }, null, 8, ["name"])
                      ]),
                      vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, vueExports.toDisplayString(path.label), 1),
                      vueExports.createVNode("p", { class: "mt-2 flex-1 text-body text-text-secondary text-pretty" }, vueExports.toDisplayString(path.description), 1),
                      vueExports.createVNode("span", { class: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400" }, [
                        vueExports.createTextVNode(" Перейти "),
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-arrow-right",
                          class: "size-4 transition-transform group-hover:translate-x-0.5",
                          "aria-hidden": "true"
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Карьерные возможности",
                description: "Разделы портала для тех, кто хочет развиваться в муниципальной службе",
                "heading-id": "career"
              }),
              vueExports.createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paths, (path) => {
                  return vueExports.createVNode(_component_NuxtLink, {
                    key: path.to,
                    to: path.to,
                    class: "group flex flex-col rounded-xl bg-surface-raised p-5 ring-1 ring-border-default transition-[box-shadow,transform,border-color] duration-300 hover:ring-primary-500/30 hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-surface-sunken text-primary-600 transition-colors group-hover:bg-primary-500/10 dark:text-primary-400" }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: path.icon,
                          class: "size-5",
                          "aria-hidden": "true"
                        }, null, 8, ["name"])
                      ]),
                      vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, vueExports.toDisplayString(path.label), 1),
                      vueExports.createVNode("p", { class: "mt-2 flex-1 text-body text-text-secondary text-pretty" }, vueExports.toDisplayString(path.description), 1),
                      vueExports.createVNode("span", { class: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400" }, [
                        vueExports.createTextVNode(" Перейти "),
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-arrow-right",
                          class: "size-4 transition-transform group-hover:translate-x-0.5",
                          "aria-hidden": "true"
                        })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeCareerPaths.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "HomeCareerPaths" });
function isObject(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
  return isObject(subject) || Array.isArray(subject);
}
function areOptionsEqual(optionsA, optionsB) {
  const optionsAKeys = Object.keys(optionsA);
  const optionsBKeys = Object.keys(optionsB);
  if (optionsAKeys.length !== optionsBKeys.length) return false;
  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
  if (breakpointsA !== breakpointsB) return false;
  return optionsAKeys.every((key) => {
    const valueA = optionsA[key];
    const valueB = optionsB[key];
    if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
    return areOptionsEqual(valueA, valueB);
  });
}
function sortAndMapPluginToOptions(plugins) {
  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
  if (pluginsA.length !== pluginsB.length) return false;
  const optionsA = sortAndMapPluginToOptions(pluginsA);
  const optionsB = sortAndMapPluginToOptions(pluginsB);
  return optionsA.every((optionA, index) => {
    const optionB = optionsB[index];
    return areOptionsEqual(optionA, optionB);
  });
}
function emblaCarouselVue(options = {}, plugins = []) {
  const isRefOptions = vueExports.isRef(options);
  const isRefPlugins = vueExports.isRef(plugins);
  let storedOptions = isRefOptions ? options.value : options;
  let storedPlugins = isRefPlugins ? plugins.value : plugins;
  const emblaNode = vueExports.shallowRef();
  const emblaApi = vueExports.shallowRef();
  function reInit() {
    if (!emblaApi.value) return;
    emblaApi.value.reInit(storedOptions, storedPlugins);
  }
  if (isRefOptions) {
    vueExports.watch(options, (newOptions) => {
      if (areOptionsEqual(storedOptions, newOptions)) return;
      storedOptions = newOptions;
      reInit();
    });
  }
  if (isRefPlugins) {
    vueExports.watch(plugins, (newPlugins) => {
      if (arePluginsEqual(storedPlugins, newPlugins)) return;
      storedPlugins = newPlugins;
      reInit();
    });
  }
  return [emblaNode, emblaApi];
}
emblaCarouselVue.globalOptions = void 0;
const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$2 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const props = useComponentProps("carousel", _props);
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = vueExports.computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = vueExports.computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = vueExports.computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay?.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = vueExports.computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll?.stopOnInteraction ?? true;
    });
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = vueExports.computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = vueExports.ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('./embla-carousel-autoplay.esm-DpLNY5i4.mjs').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('./embla-carousel-auto-scroll.esm-CIFmKTyb.mjs').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('./embla-carousel-auto-height.esm-CXT4Elzl.mjs').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('./embla-carousel-class-names.esm-qIpKPfku.mjs').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('./embla-carousel-fade.esm-CPiEa60R.mjs').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('./embla-carousel-wheel-gestures.esm-BXfSsESr.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    vueExports.watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], async () => {
      await loadPlugins();
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = emblaCarouselVue(options, plugins);
    vueExports.watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = vueExports.ref(false);
    const canScrollPrev = vueExports.ref(false);
    const selectedIndex = vueExports.ref(0);
    const scrollSnaps = vueExports.ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": vueExports.unref(props).orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.viewport({ class: vueExports.unref(props).ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.container({ class: vueExports.unref(props).ui?.container }))}"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).items, (item, index) => {
              _push2(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ key: index }, { ref_for: true }, vueExports.unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [vueExports.unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (vueExports.unref(props).arrows || vueExports.unref(props).dots) {
              _push2(`<div data-slot="controls" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.controls({ class: vueExports.unref(props).ui?.controls }))}"${_scopeId}>`);
              if (vueExports.unref(props).arrows) {
                _push2(`<div data-slot="arrows" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.arrows({ class: vueExports.unref(props).ui?.arrows }))}"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, vueExports.mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": vueExports.unref(t)("carousel.prev")
                }, typeof vueExports.unref(props).prev === "object" ? vueExports.unref(props).prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: vueExports.unref(props).ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, vueExports.mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": vueExports.unref(t)("carousel.next")
                }, typeof vueExports.unref(props).next === "object" ? vueExports.unref(props).next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: vueExports.unref(props).ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).dots) {
                _push2(`<div role="tablist"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("carousel.dots"))} data-slot="dots" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.dots({ class: vueExports.unref(props).ui?.dots }))}"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("carousel.goto", { slide: index + 1 }))}${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.dot({ class: vueExports.unref(props).ui?.dot, active: selectedIndex.value === index }))}"${serverRenderer_cjs_prodExports.ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: vueExports.unref(props).ui?.viewport })
              }, [
                vueExports.createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: vueExports.unref(props).ui?.container })
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).items, (item, index) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", vueExports.mergeProps({ key: index }, { ref_for: true }, vueExports.unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [vueExports.unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      vueExports.renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              vueExports.unref(props).arrows || vueExports.unref(props).dots ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: vueExports.unref(props).ui?.controls })
              }, [
                vueExports.unref(props).arrows ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: vueExports.unref(props).ui?.arrows })
                }, [
                  vueExports.createVNode(_sfc_main$u, vueExports.mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": vueExports.unref(t)("carousel.prev")
                  }, typeof vueExports.unref(props).prev === "object" ? vueExports.unref(props).prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: vueExports.unref(props).ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  vueExports.createVNode(_sfc_main$u, vueExports.mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": vueExports.unref(t)("carousel.next")
                  }, typeof vueExports.unref(props).next === "object" ? vueExports.unref(props).next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: vueExports.unref(props).ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : vueExports.createCommentVNode("", true),
                vueExports.unref(props).dots ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": vueExports.unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: vueExports.unref(props).ui?.dots })
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(scrollSnaps.value, (_2, index) => {
                    return vueExports.openBlock(), vueExports.createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": vueExports.unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: vueExports.unref(props).ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : vueExports.createCommentVNode("", true)
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "VacancyCarousel",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Последние вакансии"
    },
    subtitle: {
      type: String,
      default: "Актуальные предложения от работодателей"
    },
    vacancies: {
      type: Array,
      required: true,
      default: () => []
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const config = useRuntimeConfig();
    const isApplicationFormOpen = vueExports.ref(false);
    const selectedVacancy = vueExports.ref(null);
    const isSubmitting = vueExports.ref(false);
    const submitStatus = vueExports.ref(null);
    const carouselItems = vueExports.computed(() => {
      const all = [...props.vacancies];
      const count = Math.min(5, all.length);
      for (let i = all.length - 1; i > all.length - 1 - count; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      const selected = all.slice(-count);
      selected.push({ isPlaceholder: true });
      return selected;
    });
    const openApplicationForm = (vacancy) => {
      submitStatus.value = null;
      selectedVacancy.value = vacancy;
      isApplicationFormOpen.value = true;
    };
    const closeApplicationForm = () => {
      isApplicationFormOpen.value = false;
      selectedVacancy.value = null;
      submitStatus.value = null;
    };
    const handleFormSubmit = async (formData) => {
      isSubmitting.value = true;
      submitStatus.value = null;
      try {
        const data = new FormData();
        data.append("vacancy_title", selectedVacancy.value?.title || "");
        for (const [key, value] of Object.entries(formData)) {
          if (value instanceof File || Array.isArray(value) && value[0] instanceof File) {
            const files = Array.isArray(value) ? value : [value];
            for (const file of files) {
              if (file instanceof File) {
                data.append(key, file);
              }
            }
          } else if (value !== null && value !== void 0) {
            let fieldName = key.replace(/([A-Z])/g, "_$1").toLowerCase();
            if (value instanceof Date) {
              data.append(fieldName, value.toISOString().split("T")[0]);
            } else {
              data.append(fieldName, value);
            }
          }
        }
        await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
          method: "POST",
          body: data
        });
        submitStatus.value = "success";
        setTimeout(() => closeApplicationForm(), 2e3);
      } catch (error) {
        console.error("Server error:", error.data || error.message || error);
        submitStatus.value = "error";
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$l;
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_UButton = _sfc_main$u;
      const _component_DsSkeletonCard = __nuxt_component_4$1;
      const _component_DsEmptyState = __nuxt_component_5$1;
      const _component_UCarousel = _sfc_main$2;
      const _component_DsSurface = __nuxt_component_7$1;
      const _component_UIcon = _sfc_main$A;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex-1 pb-6" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: isApplicationFormOpen.value,
        "onUpdate:open": ($event) => isApplicationFormOpen.value = $event,
        title: "Отклик на вакансию"
      }, {
        body: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(ApplicationForm, {
              vacancy: selectedVacancy.value,
              onSubmit: handleFormSubmit,
              onCancel: closeApplicationForm
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(ApplicationForm, {
                vacancy: selectedVacancy.value,
                onSubmit: handleFormSubmit,
                onCancel: closeApplicationForm
              }, null, 8, ["vacancy"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: __props.title,
              description: __props.subtitle,
              align: "left"
            }, {
              action: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                    label: "Все вакансии",
                    to: "/vacancies",
                    color: "primary",
                    variant: "outline",
                    "trailing-icon": "i-lucide-arrow-right"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UButton, {
                      label: "Все вакансии",
                      to: "/vacancies",
                      color: "primary",
                      variant: "outline",
                      "trailing-icon": "i-lucide-arrow-right"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.pending) {
              _push2(`<div class="grid-cards"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(3, (i) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSkeletonCard, { key: i }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (!__props.vacancies.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                icon: "i-lucide-search-x",
                title: "Вакансии не найдены",
                description: "Сейчас нет открытых позиций. Загляните позже или подпишитесь на обновления"
              }, {
                action: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                      label: "Все вакансии",
                      to: "/vacancies",
                      color: "primary",
                      variant: "solid"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_component_UButton, {
                        label: "Все вакансии",
                        to: "/vacancies",
                        color: "primary",
                        variant: "solid"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCarousel, {
                items: carouselItems.value,
                arrows: true,
                dots: true,
                loop: false,
                ui: { item: "basis-full md:basis-1/2 lg:basis-1/3" }
              }, {
                default: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!item.isPlaceholder) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(VacancyCard, {
                        vacancy: item,
                        onApply: openApplicationForm
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
                        elevation: "sm",
                        padding: "lg",
                        class: "h-full flex flex-col items-center justify-center text-center min-h-[320px]"
                      }, {
                        default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                              name: "i-lucide-arrow-right-circle",
                              class: "h-14 w-14 text-primary-500 mx-auto mb-4",
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                            _push4(`<h3 class="text-h3 text-text-primary mb-2"${_scopeId3}> Смотреть все вакансии </h3><p class="text-body text-text-secondary mb-6 max-w-xs"${_scopeId3}> Ознакомьтесь со всеми актуальными предложениями </p>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                              label: "Все вакансии",
                              color: "primary",
                              variant: "solid",
                              to: "/vacancies"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(_component_UIcon, {
                                name: "i-lucide-arrow-right-circle",
                                class: "h-14 w-14 text-primary-500 mx-auto mb-4",
                                "aria-hidden": "true"
                              }),
                              vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, " Смотреть все вакансии "),
                              vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6 max-w-xs" }, " Ознакомьтесь со всеми актуальными предложениями "),
                              vueExports.createVNode(_component_UButton, {
                                label: "Все вакансии",
                                color: "primary",
                                variant: "solid",
                                to: "/vacancies"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      !item.isPlaceholder ? (vueExports.openBlock(), vueExports.createBlock(VacancyCard, {
                        key: 0,
                        vacancy: item,
                        onApply: openApplicationForm
                      }, null, 8, ["vacancy"])) : (vueExports.openBlock(), vueExports.createBlock(_component_DsSurface, {
                        key: 1,
                        elevation: "sm",
                        padding: "lg",
                        class: "h-full flex flex-col items-center justify-center text-center min-h-[320px]"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-arrow-right-circle",
                            class: "h-14 w-14 text-primary-500 mx-auto mb-4",
                            "aria-hidden": "true"
                          }),
                          vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, " Смотреть все вакансии "),
                          vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6 max-w-xs" }, " Ознакомьтесь со всеми актуальными предложениями "),
                          vueExports.createVNode(_component_UButton, {
                            label: "Все вакансии",
                            color: "primary",
                            variant: "solid",
                            to: "/vacancies"
                          })
                        ]),
                        _: 1
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: __props.title,
                description: __props.subtitle,
                align: "left"
              }, {
                action: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    label: "Все вакансии",
                    to: "/vacancies",
                    color: "primary",
                    variant: "outline",
                    "trailing-icon": "i-lucide-arrow-right"
                  })
                ]),
                _: 1
              }, 8, ["title", "description"]),
              __props.pending ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "grid-cards"
              }, [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(3, (i) => {
                  return vueExports.createVNode(_component_DsSkeletonCard, { key: i });
                }), 64))
              ])) : !__props.vacancies.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                key: 1,
                icon: "i-lucide-search-x",
                title: "Вакансии не найдены",
                description: "Сейчас нет открытых позиций. Загляните позже или подпишитесь на обновления"
              }, {
                action: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    label: "Все вакансии",
                    to: "/vacancies",
                    color: "primary",
                    variant: "solid"
                  })
                ]),
                _: 1
              })) : (vueExports.openBlock(), vueExports.createBlock(_component_UCarousel, {
                key: 2,
                items: carouselItems.value,
                arrows: true,
                dots: true,
                loop: false,
                ui: { item: "basis-full md:basis-1/2 lg:basis-1/3" }
              }, {
                default: vueExports.withCtx(({ item }) => [
                  !item.isPlaceholder ? (vueExports.openBlock(), vueExports.createBlock(VacancyCard, {
                    key: 0,
                    vacancy: item,
                    onApply: openApplicationForm
                  }, null, 8, ["vacancy"])) : (vueExports.openBlock(), vueExports.createBlock(_component_DsSurface, {
                    key: 1,
                    elevation: "sm",
                    padding: "lg",
                    class: "h-full flex flex-col items-center justify-center text-center min-h-[320px]"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-arrow-right-circle",
                        class: "h-14 w-14 text-primary-500 mx-auto mb-4",
                        "aria-hidden": "true"
                      }),
                      vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, " Смотреть все вакансии "),
                      vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6 max-w-xs" }, " Ознакомьтесь со всеми актуальными предложениями "),
                      vueExports.createVNode(_component_UButton, {
                        label: "Все вакансии",
                        color: "primary",
                        variant: "solid",
                        to: "/vacancies"
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["items"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VacancyCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Главная" });
    const hero = useHeroImage("home");
    const config = useRuntimeConfig();
    const { data: vacanciesData, pending: vacanciesPending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("vacancies", () => $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const { data: posts } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("news-posts", () => $fetch(`${config.public.apiBaseUrl}/api/news/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const FAQ_items = [
      {
        label: "Как устроиться на работу?",
        icon: "i-lucide-file-text",
        content: "Откройте раздел «Вакансии», выберите должность и заполните форму отклика. После отправки с вами свяжется специалист отдела кадров."
      },
      {
        label: "Какие преимущества у муниципальной службы?",
        icon: "i-lucide-shield-check",
        content: "Стабильная занятость, социальные гарантии, оплачиваемый отпуск и больничный, предсказуемый карьерный рост по установленным правилам и программы профессионального развития."
      },
      {
        label: "Оплачивается ли длительный больничный?",
        icon: "i-lucide-heart-pulse",
        content: "Да. Период нетрудоспособности оплачивается в соответствии с законодательством, рабочее место сохраняется. После выхода на работу нельзя понизить в должности из-за болезни."
      },
      {
        label: "Как устроены переработки?",
        icon: "i-lucide-clock",
        content: "Рабочий день нормирован. Переработки компенсируются деньгами или дополнительными выходными. Неоплачиваемые сверхурочные без согласия сотрудника не допускаются."
      },
      {
        label: "Какой у вас коллектив?",
        icon: "i-lucide-users",
        content: "Команда профессионалов, ориентированных на развитие района и поддержку жителей. Мы ценим взаимовыручку, наставничество и открытый диалог внутри коллектива."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHero = __nuxt_component_0;
      const _component_PartnersLogos = __nuxt_component_1;
      const _component_HomeHighlights = __nuxt_component_2;
      const _component_HomeNews = __nuxt_component_3;
      const _component_HomeValuesBento = __nuxt_component_4;
      const _component_HomeCareerPaths = __nuxt_component_5;
      const _component_VacancyCarousel = _sfc_main$1;
      const _component_DsSection = __nuxt_component_7;
      const _component_VacancySubscribeForm = __nuxt_component_8;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_UAccordion = _sfc_main$c;
      const _component_UIcon = _sfc_main$A;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeHero, {
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PartnersLogos, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeHighlights, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeNews, { posts: vueExports.unref(posts) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeValuesBento, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeCareerPaths, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_VacancyCarousel, {
        title: "Актуальные вакансии",
        subtitle: "Открытые должности в администрации Сургутского района",
        vacancies: vueExports.unref(vacanciesData) ?? [],
        pending: vueExports.unref(vacanciesPending)
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, {
        spacing: "md",
        variant: "muted"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_VacancySubscribeForm, {
              promo: "",
              embedded: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_VacancySubscribeForm, {
                promo: "",
                embedded: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start"${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Часто задаваемые вопросы",
              description: "Ответы на популярные вопросы о работе в администрации района",
              "heading-id": "faq"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UAccordion, {
              items: FAQ_items,
              ui: {
                root: "flex flex-col gap-3",
                item: "ds-surface ring-1 ring-border-default rounded-lg overflow-hidden",
                header: "px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast",
                body: "px-4 pb-4 text-body text-text-secondary",
                trailingIcon: "text-primary-500"
              },
              multiple: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><aside class="rounded-2xl bg-surface-sunken p-6 ring-1 ring-border-default lg:sticky lg:top-24"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-message-circle",
              class: "mb-4 size-8 text-primary-600 dark:text-primary-400",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-h3 text-text-primary"${_scopeId}> Остались вопросы? </h3><p class="mt-2 text-body text-text-secondary text-pretty"${_scopeId}> Свяжитесь с отделом кадров или отправьте обращение через форму обратной связи. </p><div class="mt-5 flex flex-col gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Контакты",
              to: "/contacts",
              color: "primary",
              block: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Обратная связь",
              to: "/feedback",
              color: "neutral",
              variant: "outline",
              block: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></aside></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start" }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode(_component_DsSectionHeading, {
                    title: "Часто задаваемые вопросы",
                    description: "Ответы на популярные вопросы о работе в администрации района",
                    "heading-id": "faq"
                  }),
                  vueExports.createVNode(_component_UAccordion, {
                    items: FAQ_items,
                    ui: {
                      root: "flex flex-col gap-3",
                      item: "ds-surface ring-1 ring-border-default rounded-lg overflow-hidden",
                      header: "px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast",
                      body: "px-4 pb-4 text-body text-text-secondary",
                      trailingIcon: "text-primary-500"
                    },
                    multiple: ""
                  })
                ]),
                vueExports.createVNode("aside", { class: "rounded-2xl bg-surface-sunken p-6 ring-1 ring-border-default lg:sticky lg:top-24" }, [
                  vueExports.createVNode(_component_UIcon, {
                    name: "i-lucide-message-circle",
                    class: "mb-4 size-8 text-primary-600 dark:text-primary-400",
                    "aria-hidden": "true"
                  }),
                  vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, " Остались вопросы? "),
                  vueExports.createVNode("p", { class: "mt-2 text-body text-text-secondary text-pretty" }, " Свяжитесь с отделом кадров или отправьте обращение через форму обратной связи. "),
                  vueExports.createVNode("div", { class: "mt-5 flex flex-col gap-3" }, [
                    vueExports.createVNode(_component_UButton, {
                      label: "Контакты",
                      to: "/contacts",
                      color: "primary",
                      block: ""
                    }),
                    vueExports.createVNode(_component_UButton, {
                      label: "Обратная связь",
                      to: "/feedback",
                      color: "neutral",
                      variant: "outline",
                      block: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-On5Avese.mjs.map
