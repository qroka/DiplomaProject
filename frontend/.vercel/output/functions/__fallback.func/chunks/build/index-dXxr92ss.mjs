import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { v as vueExports, u as useHead, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, g as _sfc_main$u, k as useComponentProps, l as useAppConfig, m as usePrefix, t as tv, P as Primitive, a as __nuxt_component_0$1, f as _sfc_main$A } from './server.mjs';
import { h as headOfDistrict, s as socialLinks, a as deputies, d as departments } from './departments-Ck1P6-b_.mjs';
import { _ as __nuxt_component_7 } from './Surface-X0lNFFsI.mjs';
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

const theme = {
  "slots": {
    "root": "relative isolate rounded-xl overflow-hidden",
    "container": "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "title": "text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "footer": "mt-8",
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
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center"
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "naked": {
        "description": "text-muted"
      }
    },
    "title": {
      "true": {
        "description": "mt-6"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$3 = {
  __name: "UPageCTA",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false, default: false },
    variant: { type: null, required: false },
    links: { type: Array, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("pageCTA", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageCTA || {} })({
      variant: props.variant,
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
                  if (!!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links)) {
                    _push3(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description)) {
                      _push3(`<div data-slot="header" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: vueExports.unref(props).ui?.header }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        if (vueExports.unref(props).title || !!slots.title) {
                          _push3(`<h2 data-slot="title" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.title({ class: vueExports.unref(props).ui?.title }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).title)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</h2>`);
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
                                size: "lg"
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
                    !!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      "data-slot": "wrapper",
                      class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                    }, [
                      !!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: vueExports.unref(props).ui?.header })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "header", {}, () => [
                          vueExports.unref(props).title || !!slots.title ? (vueExports.openBlock(), vueExports.createBlock("h2", {
                            key: 0,
                            "data-slot": "title",
                            class: ui.value.title({ class: vueExports.unref(props).ui?.title })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "title", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).title), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
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
                                  size: "lg"
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
                  !!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) || !!slots.body || !!slots.footer || (vueExports.unref(props).links?.length || !!slots.links) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                  }, [
                    !!slots.header || (vueExports.unref(props).title || !!slots.title) || (vueExports.unref(props).description || !!slots.description) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      "data-slot": "header",
                      class: ui.value.header({ class: vueExports.unref(props).ui?.header })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "header", {}, () => [
                        vueExports.unref(props).title || !!slots.title ? (vueExports.openBlock(), vueExports.createBlock("h2", {
                          key: 0,
                          "data-slot": "title",
                          class: ui.value.title({ class: vueExports.unref(props).ui?.title })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "title", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).title), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
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
                                size: "lg"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Testimonial",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      required: true
    },
    quote: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "Testimonial image"
    },
    author: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCTA = _sfc_main$3;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "ds-container py-20" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UPageCTA, {
        ui: {
          root: "bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl relative overflow-visible backdrop-blur-sm",
          container: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 -my-16 items-center py-6 lg:py-10",
          wrapper: "col-span-2"
        },
        orientation: "horizontal",
        reverse: ""
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", __props.image)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", __props.alt)} class="w-full h-full object-cover rounded-xl shadow-2xl"${_scopeId}></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "relative" }, [
                vueExports.createVNode("img", {
                  src: __props.image,
                  alt: __props.alt,
                  class: "w-full h-full object-cover rounded-xl shadow-2xl"
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        description: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed italic"${_scopeId}> &quot;${serverRenderer_cjs_prodExports.ssrInterpolate(__props.quote)}&quot; </p><p class="text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.author)}</p>`);
          } else {
            return [
              vueExports.createVNode("p", { class: "text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed italic" }, ' "' + vueExports.toDisplayString(__props.quote) + '" ', 1),
              vueExports.createVNode("p", { class: "text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium" }, vueExports.toDisplayString(__props.author), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeputyStructure",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Структура администрации"
    },
    subtitle: {
      type: String,
      default: "Отраслевые (функциональные) органы по курирующим заместителям главы"
    }
  },
  setup(__props) {
    function departmentName(slug) {
      return departments[slug]?.name ?? slug;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$n;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$A;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, vueExports.mergeProps({ class: "py-8 lg:py-12" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl mb-8"${_scopeId}><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h2>`);
            if (__props.subtitle) {
              _push2(`<p class="text-lg text-gray-500 dark:text-gray-400"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-6"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(deputies), (deputy) => {
              _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden"${_scopeId}><div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40"${_scopeId}><p class="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(deputy.role)}</p><h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(deputy.surname)} ${serverRenderer_cjs_prodExports.ssrInterpolate(deputy.name)} ${serverRenderer_cjs_prodExports.ssrInterpolate(deputy.patronymic)}</h3></div><ul class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(deputy.departmentSlugs, (slug) => {
                _push2(`<li${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
                  to: `/about/departments/${slug}`,
                  class: "group flex items-center justify-between gap-4 px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(departmentName(slug))}</span>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                        name: "i-lucide-arrow-right",
                        class: "h-5 w-5 text-gray-400 group-hover:text-primary-500 shrink-0 transition-colors"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        vueExports.createVNode("span", { class: "group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors" }, vueExports.toDisplayString(departmentName(slug)), 1),
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-arrow-right",
                          class: "h-5 w-5 text-gray-400 group-hover:text-primary-500 shrink-0 transition-colors"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "max-w-3xl mb-8" }, [
                vueExports.createVNode("h2", { class: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3" }, vueExports.toDisplayString(__props.title), 1),
                __props.subtitle ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 0,
                  class: "text-lg text-gray-500 dark:text-gray-400"
                }, vueExports.toDisplayString(__props.subtitle), 1)) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode("div", { class: "space-y-6" }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(deputies), (deputy) => {
                  return vueExports.openBlock(), vueExports.createBlock("div", {
                    key: `${deputy.surname}-${deputy.name}`,
                    class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden"
                  }, [
                    vueExports.createVNode("div", { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40" }, [
                      vueExports.createVNode("p", { class: "text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide" }, vueExports.toDisplayString(deputy.role), 1),
                      vueExports.createVNode("h3", { class: "text-xl font-semibold text-gray-900 dark:text-white mt-1" }, vueExports.toDisplayString(deputy.surname) + " " + vueExports.toDisplayString(deputy.name) + " " + vueExports.toDisplayString(deputy.patronymic), 1)
                    ]),
                    vueExports.createVNode("ul", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(deputy.departmentSlugs, (slug) => {
                        return vueExports.openBlock(), vueExports.createBlock("li", { key: slug }, [
                          vueExports.createVNode(_component_NuxtLink, {
                            to: `/about/departments/${slug}`,
                            class: "group flex items-center justify-between gap-4 px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors" }, vueExports.toDisplayString(departmentName(slug)), 1),
                              vueExports.createVNode(_component_UIcon, {
                                name: "i-lucide-arrow-right",
                                class: "h-5 w-5 text-gray-400 group-hover:text-primary-500 shrink-0 transition-colors"
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DeputyStructure.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "DeputyStructure" });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "О нас" });
    const headFullName = `${headOfDistrict.surname} ${headOfDistrict.name} ${headOfDistrict.patronymic}`;
    const breadcrumbItems = buildBreadcrumbs({ label: "О нас" });
    const hero = useHeroImage("about");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_Testimonial = _sfc_main$2;
      const _component_DeputyStructure = __nuxt_component_4;
      const _component_DsSurface = __nuxt_component_7;
      const _component_UButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "О нас",
        description: "Администрация Сургутского района: миссия, полномочия и структура",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl mx-auto text-center mb-4"${_scopeId}><p class="text-body-lg text-text-secondary leading-relaxed"${_scopeId}> Администрация Сургутского района — орган местного самоуправления, который обеспечивает реализацию полномочий муниципального образования, координирует работу отраслевых органов и отвечает за развитие района и благополучие его жителей. </p></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "max-w-3xl mx-auto text-center mb-4" }, [
                vueExports.createVNode("p", { class: "text-body-lg text-text-secondary leading-relaxed" }, " Администрация Сургутского района — орган местного самоуправления, который обеспечивает реализацию полномочий муниципального образования, координирует работу отраслевых органов и отвечает за развитие района и благополучие его жителей. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Testimonial, {
        image: vueExports.unref(headOfDistrict).image,
        quote: vueExports.unref(headOfDistrict).quote,
        author: `${vueExports.unref(headOfDistrict).role} ${headFullName}`,
        alt: `Фото: ${headFullName}`
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DeputyStructure, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "sm",
              padding: "lg",
              class: "text-center"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-h2 text-text-primary mb-2"${_scopeId2}> Команда Сургутского района </h2><p class="text-body text-text-secondary mb-6"${_scopeId2}> Следите за новостями и жизнью администрации в официальных социальных сетях </p><div class="flex flex-wrap justify-center gap-3"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(socialLinks), (link) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                      key: link.url,
                      to: link.url,
                      target: "_blank",
                      icon: link.icon,
                      label: link.label,
                      color: "neutral",
                      variant: "outline"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    vueExports.createVNode("h2", { class: "text-h2 text-text-primary mb-2" }, " Команда Сургутского района "),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6" }, " Следите за новостями и жизнью администрации в официальных социальных сетях "),
                    vueExports.createVNode("div", { class: "flex flex-wrap justify-center gap-3" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(socialLinks), (link) => {
                        return vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                          key: link.url,
                          to: link.url,
                          target: "_blank",
                          icon: link.icon,
                          label: link.label,
                          color: "neutral",
                          variant: "outline"
                        }, null, 8, ["to", "icon", "label"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap justify-center gap-4 mt-10"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Доска почёта",
              to: "/honorboard",
              color: "primary",
              variant: "solid",
              size: "lg",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Кадровый резерв",
              to: "/staffreserve",
              color: "primary",
              variant: "outline",
              size: "lg",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSurface, {
                elevation: "sm",
                padding: "lg",
                class: "text-center"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("h2", { class: "text-h2 text-text-primary mb-2" }, " Команда Сургутского района "),
                  vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6" }, " Следите за новостями и жизнью администрации в официальных социальных сетях "),
                  vueExports.createVNode("div", { class: "flex flex-wrap justify-center gap-3" }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(socialLinks), (link) => {
                      return vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                        key: link.url,
                        to: link.url,
                        target: "_blank",
                        icon: link.icon,
                        label: link.label,
                        color: "neutral",
                        variant: "outline"
                      }, null, 8, ["to", "icon", "label"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              vueExports.createVNode("div", { class: "flex flex-wrap justify-center gap-4 mt-10" }, [
                vueExports.createVNode(_component_UButton, {
                  label: "Доска почёта",
                  to: "/honorboard",
                  color: "primary",
                  variant: "solid",
                  size: "lg",
                  "trailing-icon": "i-lucide-arrow-right"
                }),
                vueExports.createVNode(_component_UButton, {
                  label: "Кадровый резерв",
                  to: "/staffreserve",
                  color: "primary",
                  variant: "outline",
                  size: "lg",
                  "trailing-icon": "i-lucide-arrow-right"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dXxr92ss.mjs.map
