import { _ as __nuxt_component_0 } from './PageHero-sozzGzkc.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3 } from './SectionHeading-CEKIZ9kY.mjs';
import { _ as __nuxt_component_1$1 } from './SectionDivider-Bm4E2pGh.mjs';
import { u as useHead, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, f as _sfc_main$A, h as useRuntimeConfig, k as useComponentProps, l as useAppConfig, t as tv, P as Primitive, x as useLocale, V as useDateFormatter, m as usePrefix, W as getSlotChildrenText, X as ImageComponent, K as _sfc_main$v, p as _sfc_main$i, G as _sfc_main$x, j as _sfc_main$l, g as _sfc_main$u, N as omit, T as avatarGroupInjectionKey, U as _sfc_main$y, y as useForwardProps, z as reactivePick, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_6 } from './EmptyState-BbxOOQYN.mjs';
import { _ as _sfc_main$a } from './Tabs-CWS-jJiK.mjs';
import { _ as __nuxt_component_8 } from './Surface-BpUAMKsj.mjs';
import { _ as __nuxt_component_11, a as __nuxt_component_4, V as VacancyCard } from './VacancySubscribeForm-nYXxQS29.mjs';
import { A as ApplicationForm } from './ApplicationForm-D3mPRbFX.mjs';
import { _ as _sfc_main$b } from './Accordion-DTFNW1AI.mjs';
import { u as useHeroImage } from './useHeroImage-Bf8YjZE4.mjs';
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
import './TabsTrigger-C-UmOaop.mjs';
import './RovingFocusItem-CItW57sS.mjs';
import './Textarea-C75BP7Lm.mjs';
import './Select-0CdyKozn.mjs';
import './InputDate-DlbLX7zg.mjs';
import './Collapsible-CDkT1GM7.mjs';
import './FileUpload-BkDe3Tt1.mjs';

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
const __nuxt_component_2 = Object.assign(_sfc_main$9, { __name: "PartnerLogoLink" });
const theme$5 = {
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
    const ui = vueExports.computed(() => tv({ extend: tv(theme$5), ...appConfig.ui?.marquee || {} })({
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
      const _component_DsSection = __nuxt_component_2$1;
      const _component_DsSectionDivider = __nuxt_component_1$1;
      const _component_PartnerLogoLink = __nuxt_component_2;
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
const theme$4 = {
  "slots": {
    "root": "inline-flex flex-row-reverse justify-end",
    "base": "relative rounded-full ring-bg first:me-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "base": "ring -me-0.5"
      },
      "2xs": {
        "base": "ring -me-0.5"
      },
      "xs": {
        "base": "ring -me-0.5"
      },
      "sm": {
        "base": "ring-2 -me-1.5"
      },
      "md": {
        "base": "ring-2 -me-1.5"
      },
      "lg": {
        "base": "ring-2 -me-1.5"
      },
      "xl": {
        "base": "ring-3 -me-2"
      },
      "2xl": {
        "base": "ring-3 -me-2"
      },
      "3xl": {
        "base": "ring-3 -me-2"
      }
    },
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "defaultVariants": {
    "size": "md",
    "color": "neutral"
  }
};
const _sfc_main$6 = {
  __name: "UAvatarGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    max: { type: [Number, String], required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("avatarGroup", _props);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$4), ...appConfig.ui?.avatarGroup || {} })({
      size: props.size,
      color: props.color
    }));
    const max = vueExports.computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const children = vueExports.computed(() => {
      let children2 = slots.default?.();
      if (children2?.length) {
        children2 = children2.flatMap((child) => {
          if (typeof child.type === "symbol") {
            if (typeof child.children === "string") {
              return;
            }
            return child.children;
          }
          return child;
        }).filter(Boolean);
      }
      return children2 || [];
    });
    const visibleAvatars = vueExports.computed(() => {
      if (!children.value.length) {
        return [];
      }
      if (!max.value || max.value <= 0) {
        return [...children.value].reverse();
      }
      return [...children.value].slice(0, max.value).reverse();
    });
    const hiddenCount = vueExports.computed(() => {
      if (!children.value.length) {
        return 0;
      }
      return children.value.length - visibleAvatars.value.length;
    });
    vueExports.provide(avatarGroupInjectionKey, vueExports.computed(() => ({
      size: props.size,
      color: props.color
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (hiddenCount.value > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, {
                text: `+${hiddenCount.value}`,
                "data-slot": "base",
                class: ui.value.base({ class: vueExports.unref(props).ui?.base })
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(visibleAvatars.value, (avatar, count) => {
              serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(avatar), {
                key: count,
                "data-slot": "base",
                class: ui.value.base({ class: vueExports.unref(props).ui?.base })
              }, null), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              hiddenCount.value > 0 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, {
                key: 0,
                text: `+${hiddenCount.value}`,
                "data-slot": "base",
                class: ui.value.base({ class: vueExports.unref(props).ui?.base })
              }, null, 8, ["text", "class"])) : vueExports.createCommentVNode("", true),
              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(visibleAvatars.value, (avatar, count) => {
                return vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(avatar), {
                  key: count,
                  "data-slot": "base",
                  class: ui.value.base({ class: vueExports.unref(props).ui?.base })
                }, null, 8, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-muted",
    "avatar": "shrink-0"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-center"
      },
      "vertical": {
        "root": "flex flex-col"
      }
    },
    "to": {
      "true": {
        "name": [
          "text-default peer-hover:text-highlighted peer-focus-visible:text-highlighted",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-toned peer-focus-visible:text-toned",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115 group-has-focus-visible/user:scale-115"
      },
      "false": {
        "name": "text-highlighted",
        "description": ""
      }
    },
    "size": {
      "3xs": {
        "root": "gap-1",
        "wrapper": "flex items-center gap-1",
        "name": "text-xs",
        "description": "text-xs"
      },
      "2xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "sm": {
        "root": "gap-2",
        "name": "text-xs",
        "description": "text-xs"
      },
      "md": {
        "root": "gap-2",
        "name": "text-sm",
        "description": "text-xs"
      },
      "lg": {
        "root": "gap-2.5",
        "name": "text-sm",
        "description": "text-sm"
      },
      "xl": {
        "root": "gap-2.5",
        "name": "text-base",
        "description": "text-sm"
      },
      "2xl": {
        "root": "gap-3",
        "name": "text-base",
        "description": "text-base"
      },
      "3xl": {
        "root": "gap-3",
        "name": "text-lg",
        "description": "text-base"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UUser",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    avatar: { type: Object, required: false },
    chip: { type: [Boolean, Object], required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("user", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.user || {} })({
      size: props.size,
      orientation: props.orientation,
      to: !!props.to || !!props.onClick
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-orientation": vueExports.unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] }),
        onClick: vueExports.unref(props).onClick
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => {
              if (vueExports.unref(props).chip && vueExports.unref(props).avatar) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$y, vueExports.mergeProps({ inset: "" }, typeof vueExports.unref(props).chip === "object" ? vueExports.unref(props).chip : {}, {
                  size: vueExports.unref(props).size
                }), {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({
                        alt: vueExports.unref(props).name
                      }, vueExports.unref(props).avatar, {
                        size: vueExports.unref(props).size,
                        "data-slot": "avatar",
                        class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        vueExports.createVNode(_sfc_main$x, vueExports.mergeProps({
                          alt: vueExports.unref(props).name
                        }, vueExports.unref(props).avatar, {
                          size: vueExports.unref(props).size,
                          "data-slot": "avatar",
                          class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (vueExports.unref(props).avatar) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({
                  alt: vueExports.unref(props).name
                }, vueExports.unref(props).avatar, {
                  size: vueExports.unref(props).size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId}>`);
            if (vueExports.unref(props).to) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, vueExports.mergeProps({
                "aria-label": vueExports.unref(props).name
              }, { to: vueExports.unref(props).to, target: vueExports.unref(props).target, ..._ctx.$attrs }, {
                class: vueExports.unref(prefix)("focus:outline-none peer"),
                raw: ""
              }), {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(vueExports.unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      vueExports.createVNode("span", {
                        class: vueExports.unref(prefix)("absolute inset-0"),
                        "aria-hidden": "true"
                      }, null, 2)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (vueExports.unref(props).name || !!slots.name) {
                _push2(`<p data-slot="name" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.name({ class: vueExports.unref(props).ui?.name }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).description || !!slots.description) {
                _push2(`<p data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => [
                vueExports.unref(props).chip && vueExports.unref(props).avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$y, vueExports.mergeProps({
                  key: 0,
                  inset: ""
                }, typeof vueExports.unref(props).chip === "object" ? vueExports.unref(props).chip : {}, {
                  size: vueExports.unref(props).size
                }), {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_sfc_main$x, vueExports.mergeProps({
                      alt: vueExports.unref(props).name
                    }, vueExports.unref(props).avatar, {
                      size: vueExports.unref(props).size,
                      "data-slot": "avatar",
                      class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                    }), null, 16, ["alt", "size", "class"])
                  ]),
                  _: 1
                }, 16, ["size"])) : vueExports.unref(props).avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                  key: 1,
                  alt: vueExports.unref(props).name
                }, vueExports.unref(props).avatar, {
                  size: vueExports.unref(props).size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                }), null, 16, ["alt", "size", "class"])) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
              }, [
                vueExports.unref(props).to ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                  key: 0,
                  "aria-label": vueExports.unref(props).name
                }, { to: vueExports.unref(props).to, target: vueExports.unref(props).target, ..._ctx.$attrs }, {
                  class: vueExports.unref(prefix)("focus:outline-none peer"),
                  raw: ""
                }), {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("span", {
                      class: vueExports.unref(prefix)("absolute inset-0"),
                      "aria-hidden": "true"
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["aria-label", "class"])) : vueExports.createCommentVNode("", true),
                vueExports.renderSlot(_ctx.$slots, "default", {}, () => [
                  vueExports.unref(props).name || !!slots.name ? (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 0,
                    "data-slot": "name",
                    class: ui.value.name({ class: vueExports.unref(props).ui?.name })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "name", {}, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).name), 1)
                    ])
                  ], 2)) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 1,
                    "data-slot": "description",
                    class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "description", {}, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                    ])
                  ], 2)) : vueExports.createCommentVNode("", true)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/User.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative group/blog-post flex flex-col rounded-lg overflow-hidden",
    "header": "relative overflow-hidden aspect-[16/9] w-full pointer-events-none",
    "body": "min-w-0 flex-1 flex flex-col",
    "footer": "",
    "image": "object-cover object-top w-full h-full",
    "title": "text-xl text-pretty font-semibold text-highlighted",
    "description": "mt-1 text-base text-pretty",
    "authors": "pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5",
    "avatar": "",
    "meta": "flex items-center gap-2 mb-2",
    "date": "text-sm",
    "badge": ""
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "lg:grid lg:grid-cols-2 lg:items-center gap-x-8",
        "body": "justify-center p-4 sm:p-6 lg:px-0"
      },
      "vertical": {
        "root": "flex flex-col",
        "body": "p-4 sm:p-6"
      }
    },
    "variant": {
      "outline": {
        "root": "bg-default ring ring-default",
        "date": "text-toned",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "date": "text-muted",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "date": "text-muted",
        "description": "text-toned"
      },
      "ghost": {
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
      },
      "naked": {
        "root": "p-0 sm:p-0",
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
      }
    },
    "to": {
      "true": {
        "root": [
          "has-focus-visible:ring-2 has-focus-visible:ring-primary",
          "transition"
        ],
        "image": "transform transition-transform duration-200 group-hover/blog-post:scale-110",
        "avatar": "transform transition-transform duration-200 hover:scale-115 focus-visible:outline-primary"
      }
    },
    "image": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated hover:ring-accented"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50",
        "header": [
          "group-hover/blog-post:shadow-none",
          "transition-all"
        ]
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "vertical",
      "class": {
        "header": "group-hover/blog-post:rounded-b-none"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "horizontal",
      "class": {
        "header": "group-hover/blog-post:rounded-r-none"
      }
    },
    {
      "orientation": "vertical",
      "image": false,
      "variant": "naked",
      "class": {
        "body": "p-0 sm:p-0"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UBlogPost",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "article" },
    title: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: [String, Date], required: false },
    badge: { type: [String, Object], required: false },
    authors: { type: Array, required: false },
    image: { type: [String, Object], required: false },
    orientation: { type: null, required: false, default: "vertical" },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("blogPost", _props);
    const { locale } = useLocale();
    const appConfig = useAppConfig();
    const formatter = useDateFormatter(locale.value.code);
    const prefix = usePrefix();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.blogPost || {} })({
      orientation: props.orientation,
      variant: props.variant,
      image: !!props.image,
      to: !!props.to || !!props.onClick
    }));
    const date = vueExports.computed(() => {
      if (!props.date) {
        return;
      }
      try {
        return formatter.custom(new Date(props.date), { dateStyle: "medium" });
      } catch {
        return props.date;
      }
    });
    const datetime = vueExports.computed(() => {
      if (!props.date) {
        return;
      }
      try {
        return new Date(props.date)?.toISOString();
      } catch {
        return void 0;
      }
    });
    const ariaLabel = vueExports.computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Post link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-orientation": vueExports.unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] }),
        onClick: vueExports.unref(props).onClick
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(props).image || !!slots.header) {
              _push2(`<div data-slot="header" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.header({ class: vueExports.unref(props).ui?.header }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", { ui: ui.value }, () => {
                serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps(typeof vueExports.unref(props).image === "string" ? { src: vueExports.unref(props).image, alt: vueExports.unref(props).title } : { alt: vueExports.unref(props).title, ...vueExports.unref(props).image }, {
                  "data-slot": "image",
                  class: ui.value.image({ class: vueExports.unref(props).ui?.image, to: !!vueExports.unref(props).to })
                }), null), _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="body" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.body({ class: vueExports.unref(props).ui?.body }))}"${_scopeId}>`);
            if (vueExports.unref(props).to) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, vueExports.mergeProps({ "aria-label": ariaLabel.value }, { to: vueExports.unref(props).to, target: vueExports.unref(props).target, ..._ctx.$attrs }, {
                class: vueExports.unref(prefix)("focus:outline-none peer"),
                raw: ""
              }), {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass(vueExports.unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      vueExports.createVNode("span", {
                        class: vueExports.unref(prefix)("absolute inset-0"),
                        "aria-hidden": "true"
                      }, null, 2)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "body", {}, () => {
              if (date.value || !!slots.date || (vueExports.unref(props).badge || !!slots.badge)) {
                _push2(`<div data-slot="meta" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.meta({ class: vueExports.unref(props).ui?.meta }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
                  if (vueExports.unref(props).badge) {
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$i, vueExports.mergeProps({
                      color: "neutral",
                      variant: "subtle"
                    }, typeof vueExports.unref(props).badge === "string" ? { label: vueExports.unref(props).badge } : vueExports.unref(props).badge, {
                      "data-slot": "badge",
                      class: ui.value.badge({ class: vueExports.unref(props).ui?.badge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                if (date.value || !!slots.date) {
                  _push2(`<time${serverRenderer_cjs_prodExports.ssrRenderAttr("datetime", datetime.value)} data-slot="date" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.date({ class: vueExports.unref(props).ui?.date }))}"${_scopeId}>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "date", {}, () => {
                    _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(date.value)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</time>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).title || !!slots.title) {
                _push2(`<h2 data-slot="title" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.title({ class: vueExports.unref(props).ui?.title }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).description || !!slots.description) {
                _push2(`<div data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).authors?.length || !!slots.authors) {
                _push2(`<div data-slot="authors" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.authors({ class: vueExports.unref(props).ui?.authors }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "authors", { ui: ui.value }, () => {
                  if (vueExports.unref(props).authors?.length) {
                    _push2(`<!--[-->`);
                    if (vueExports.unref(props).authors.length > 1) {
                      _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, null, {
                        default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).authors, (author, index) => {
                              _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                "data-slot": "avatar",
                                class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar, to: !!author.to }),
                                raw: ""
                              }, {
                                default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({ ref_for: true }, author.avatar), null, _parent4, _scopeId3));
                                  } else {
                                    return [
                                      vueExports.createVNode(_sfc_main$x, vueExports.mergeProps({ ref_for: true }, author.avatar), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          } else {
                            return [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).authors, (author, index) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, {
                                  key: index,
                                  to: author.to,
                                  target: author.target,
                                  "data-slot": "avatar",
                                  class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar, to: !!author.to }),
                                  raw: ""
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$x, vueExports.mergeProps({ ref_for: true }, author.avatar), null, 16)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "target", "class"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent2, _scopeId));
                    } else {
                      _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.unref(props).authors[0], null, _parent2, _scopeId));
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.footer({ class: vueExports.unref(props).ui?.footer }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.unref(props).image || !!slots.header ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: vueExports.unref(props).ui?.header })
              }, [
                vueExports.renderSlot(_ctx.$slots, "header", { ui: ui.value }, () => [
                  (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(vueExports.unref(ImageComponent)), vueExports.mergeProps(typeof vueExports.unref(props).image === "string" ? { src: vueExports.unref(props).image, alt: vueExports.unref(props).title } : { alt: vueExports.unref(props).title, ...vueExports.unref(props).image }, {
                    "data-slot": "image",
                    class: ui.value.image({ class: vueExports.unref(props).ui?.image, to: !!vueExports.unref(props).to })
                  }), null, 16, ["class"]))
                ])
              ], 2)) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: vueExports.unref(props).ui?.body })
              }, [
                vueExports.unref(props).to ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                  key: 0,
                  "aria-label": ariaLabel.value
                }, { to: vueExports.unref(props).to, target: vueExports.unref(props).target, ..._ctx.$attrs }, {
                  class: vueExports.unref(prefix)("focus:outline-none peer"),
                  raw: ""
                }), {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("span", {
                      class: vueExports.unref(prefix)("absolute inset-0"),
                      "aria-hidden": "true"
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["aria-label", "class"])) : vueExports.createCommentVNode("", true),
                vueExports.renderSlot(_ctx.$slots, "body", {}, () => [
                  date.value || !!slots.date || (vueExports.unref(props).badge || !!slots.badge) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    "data-slot": "meta",
                    class: ui.value.meta({ class: vueExports.unref(props).ui?.meta })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "badge", {}, () => [
                      vueExports.unref(props).badge ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$i, vueExports.mergeProps({
                        key: 0,
                        color: "neutral",
                        variant: "subtle"
                      }, typeof vueExports.unref(props).badge === "string" ? { label: vueExports.unref(props).badge } : vueExports.unref(props).badge, {
                        "data-slot": "badge",
                        class: ui.value.badge({ class: vueExports.unref(props).ui?.badge })
                      }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                    ]),
                    date.value || !!slots.date ? (vueExports.openBlock(), vueExports.createBlock("time", {
                      key: 0,
                      datetime: datetime.value,
                      "data-slot": "date",
                      class: ui.value.date({ class: vueExports.unref(props).ui?.date })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "date", {}, () => [
                        vueExports.createTextVNode(vueExports.toDisplayString(date.value), 1)
                      ])
                    ], 10, ["datetime"])) : vueExports.createCommentVNode("", true)
                  ], 2)) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).title || !!slots.title ? (vueExports.openBlock(), vueExports.createBlock("h2", {
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
                  ], 2)) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).authors?.length || !!slots.authors ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 3,
                    "data-slot": "authors",
                    class: ui.value.authors({ class: vueExports.unref(props).ui?.authors })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, "authors", { ui: ui.value }, () => [
                      vueExports.unref(props).authors?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                        vueExports.unref(props).authors.length > 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, { key: 0 }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).authors, (author, index) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                "data-slot": "avatar",
                                class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar, to: !!author.to }),
                                raw: ""
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$x, vueExports.mergeProps({ ref_for: true }, author.avatar), null, 16)
                                ]),
                                _: 2
                              }, 1032, ["to", "target", "class"]);
                            }), 128))
                          ]),
                          _: 1
                        })) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$5, vueExports.mergeProps({ key: 1 }, vueExports.unref(props).authors[0]), null, 16))
                      ], 64)) : vueExports.createCommentVNode("", true)
                    ])
                  ], 2)) : vueExports.createCommentVNode("", true)
                ])
              ], 2),
              !!slots.footer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                "data-slot": "footer",
                class: ui.value.footer({ class: vueExports.unref(props).ui?.footer })
              }, [
                vueExports.renderSlot(_ctx.$slots, "footer")
              ], 2)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/BlogPost.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
  "base": "flex flex-col gap-8 lg:gap-y-16",
  "variants": {
    "orientation": {
      "horizontal": "sm:grid sm:grid-cols-2 lg:grid-cols-3",
      "vertical": ""
    }
  }
};
const _sfc_main$3 = {
  __name: "UBlogPosts",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    posts: { type: Array, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("blogPosts", _props);
    const getProxySlots = () => omit(slots, ["default"]);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.blogPosts || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: vueExports.unref(props).as,
        "data-orientation": vueExports.unref(props).orientation,
        class: ui.value({ orientation: vueExports.unref(props).orientation, class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(props).posts, (post, index) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, vueExports.mergeProps({
                  key: index,
                  orientation: vueExports.unref(props).orientation === "vertical" ? "horizontal" : "vertical"
                }, { ref_for: true }, post), vueExports.createSlots({ _: 2 }, [
                  vueExports.renderList(getProxySlots(), (_2, name) => {
                    return {
                      name,
                      fn: vueExports.withCtx((slotData, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData, { post }), null, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData, { post }))
                          ];
                        }
                      })
                    };
                  })
                ]), _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default", {}, () => [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(props).posts, (post, index) => {
                  return vueExports.openBlock(), vueExports.createBlock(_sfc_main$4, vueExports.mergeProps({
                    key: index,
                    orientation: vueExports.unref(props).orientation === "vertical" ? "horizontal" : "vertical"
                  }, { ref_for: true }, post), vueExports.createSlots({ _: 2 }, [
                    vueExports.renderList(getProxySlots(), (_2, name) => {
                      return {
                        name,
                        fn: vueExports.withCtx((slotData) => [
                          vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData, { post }))
                        ])
                      };
                    })
                  ]), 1040, ["orientation"]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/BlogPosts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
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
      const _component_DsSection = __nuxt_component_2$1;
      const _component_DsSectionHeading = __nuxt_component_3;
      const _component_UButton = _sfc_main$u;
      const _component_DsSkeletonCard = __nuxt_component_4;
      const _component_DsEmptyState = __nuxt_component_6;
      const _component_UCarousel = _sfc_main$2;
      const _component_DsSurface = __nuxt_component_8;
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
                    "trailing-icon": "i-lucide-arrow-right",
                    class: "min-h-11 font-medium"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UButton, {
                      label: "Все вакансии",
                      to: "/vacancies",
                      color: "primary",
                      variant: "outline",
                      "trailing-icon": "i-lucide-arrow-right",
                      class: "min-h-11 font-medium"
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
                      variant: "solid",
                      class: "min-h-11 font-medium"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_component_UButton, {
                        label: "Все вакансии",
                        to: "/vacancies",
                        color: "primary",
                        variant: "solid",
                        class: "min-h-11 font-medium"
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
                              to: "/vacancies",
                              class: "min-h-11 font-medium"
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
                                to: "/vacancies",
                                class: "min-h-11 font-medium"
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
                            to: "/vacancies",
                            class: "min-h-11 font-medium"
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
                    "trailing-icon": "i-lucide-arrow-right",
                    class: "min-h-11 font-medium"
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
                    variant: "solid",
                    class: "min-h-11 font-medium"
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
                        to: "/vacancies",
                        class: "min-h-11 font-medium"
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Главная" });
    const hero = useHeroImage("home");
    const config = useRuntimeConfig();
    const { data: vacanciesData, pending: vacanciesPending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("vacancies", () => $fetch(`${config.public.apiBaseUrl}/api/vacancies/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const activeValueTab = vueExports.ref("competence");
    const valueTabs = [
      {
        label: "Компетенция и опыт",
        value: "competence",
        subtitle: "Опора на надёжность",
        intro: "Мы работаем в сложных климатических и экономических условиях, где ошибки обходятся дорого. Поэтому мы:",
        points: [
          "ценим глубокие профессиональные знания и практический опыт",
          "инвестируем в обучение и развитие сотрудников: организуем тренинги, курсы повышения квалификации, стажировки в ведущих организациях",
          "создаём систему наставничества, чтобы передавать опыт от ветеранов отрасли молодым специалистам",
          "поощряем стремление к саморазвитию и профессиональному росту"
        ],
        benefit: "Уверенность в своих силах, возможность постоянно учиться, карьерный рост и признание заслуг."
      },
      {
        label: "Сплочённость и доверие",
        value: "unity",
        subtitle: "Сила команды Севера",
        intro: "Суровый климат учит нас держаться вместе. Мы строим отношения на взаимном уважении и поддержке:",
        points: [
          "работаем как единая команда, где каждый готов прийти на помощь коллеге",
          "поддерживаем атмосферу взаимовыручки и солидарности",
          "ценим традиции коллектива и создаём новые, укрепляющие командный дух",
          "организуем корпоративные мероприятия и спортивные соревнования для сплочения команды"
        ],
        benefit: "Чувство принадлежности к сильной команде, поддержку в сложных ситуациях, дружескую атмосферу на работе."
      },
      {
        label: "Чёткие задачи и цели",
        value: "goals",
        subtitle: "Курс на развитие района",
        intro: "Мы отвечаем за благополучие тысяч жителей Сургутского района, поэтому работаем системно и целенаправленно:",
        points: [
          "ставим ясные и измеримые цели для каждого подразделения и сотрудника",
          "выстраиваем прозрачные процессы планирования и отчётности",
          "фокусируемся на результатах, которые улучшают жизнь людей в районе",
          "регулярно пересматриваем приоритеты с учётом потребностей жителей и стратегических задач региона"
        ],
        benefit: "Понимание своей роли в общем деле, чёткие ориентиры для работы, возможность видеть реальный вклад в развитие района."
      },
      {
        label: "Открытость и коммуникации",
        value: "openness",
        subtitle: "Диалог с жителями и внутри команды",
        intro: "Администрация — связующее звено между властью и жителями. Мы строим работу на принципах прозрачности и диалога:",
        points: [
          "активно взаимодействуем с жителями через общественные советы, встречи, онлайн-платформы",
          "обеспечиваем прозрачность принимаемых решений и доступность информации",
          "поощряем инициативу и обратную связь внутри коллектива: каждый сотрудник может предложить идею по улучшению работы",
          "развиваем внутренние каналы коммуникации: корпоративные чаты, информационные стенды, регулярные собрания"
        ],
        benefit: "Участие в принятии решений, открытый диалог с руководством и жителями, возможность влиять на развитие района."
      }
    ];
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
      const _component_DsPageHero = __nuxt_component_0;
      const _component_PartnersLogos = __nuxt_component_1;
      const _component_DsSection = __nuxt_component_2$1;
      const _component_DsSectionHeading = __nuxt_component_3;
      const _component_UBlogPosts = _sfc_main$3;
      const _component_UBlogPost = _sfc_main$4;
      const _component_DsEmptyState = __nuxt_component_6;
      const _component_UTabs = _sfc_main$a;
      const _component_DsSurface = __nuxt_component_8;
      const _component_UIcon = _sfc_main$A;
      const _component_VacancyCarousel = _sfc_main$1;
      const _component_VacancySubscribeForm = __nuxt_component_11;
      const _component_UAccordion = _sfc_main$b;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "home",
        title: "Успешная команда - успешный район",
        description: "Отправьте резюме через раздел «Вакансии» — специалист свяжется с вами для консультации",
        "button-label": "Наши вакансии",
        "button-link": "/vacancies",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PartnersLogos, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Новости",
              description: "Коротко о наших текущих мероприятиях",
              "heading-id": "news"
            }, null, _parent2, _scopeId));
            if (vueExports.unref(posts)?.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBlogPosts, { class: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6" }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(posts), (post) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBlogPost, {
                        key: post.id,
                        title: post.title,
                        description: post.description,
                        date: post.date,
                        image: post.imageUrl,
                        ui: {
                          root: "bg-secondary-500 ring-1 ring-border-default",
                          title: "text-white",
                          description: "text-white/80",
                          date: "text-white/60"
                        }
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(posts), (post) => {
                        return vueExports.openBlock(), vueExports.createBlock(_component_UBlogPost, {
                          key: post.id,
                          title: post.title,
                          description: post.description,
                          date: post.date,
                          image: post.imageUrl,
                          ui: {
                            root: "bg-secondary-500 ring-1 ring-border-default",
                            title: "text-white",
                            description: "text-white/80",
                            date: "text-white/60"
                          }
                        }, null, 8, ["title", "description", "date", "image"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
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
                description: "Коротко о наших текущих мероприятиях",
                "heading-id": "news"
              }),
              vueExports.unref(posts)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_UBlogPosts, {
                key: 0,
                class: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              }, {
                default: vueExports.withCtx(() => [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(posts), (post) => {
                    return vueExports.openBlock(), vueExports.createBlock(_component_UBlogPost, {
                      key: post.id,
                      title: post.title,
                      description: post.description,
                      date: post.date,
                      image: post.imageUrl,
                      ui: {
                        root: "bg-secondary-500 ring-1 ring-border-default",
                        title: "text-white",
                        description: "text-white/80",
                        date: "text-white/60"
                      }
                    }, null, 8, ["title", "description", "date", "image"]);
                  }), 128))
                ]),
                _: 1
              })) : (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
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
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, {
        spacing: "md",
        variant: "muted"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Наши ценности",
              description: "Принципы, на которых строится работа администрации Сургутского района",
              "heading-id": "values"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTabs, {
              modelValue: vueExports.unref(activeValueTab),
              "onUpdate:modelValue": ($event) => vueExports.isRef(activeValueTab) ? activeValueTab.value = $event : null,
              color: "primary",
              variant: "pill",
              size: "lg",
              items: valueTabs,
              "unmount-on-hide": false,
              class: "w-full"
            }, {
              content: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
                    elevation: "sm",
                    padding: "lg",
                    class: "mt-6"
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 class="text-h3 text-text-primary mb-2"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}</h3><p class="text-body font-medium text-text-accent mb-4"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.subtitle)}</p><p class="text-body text-text-secondary mb-4"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.intro)}</p><ul class="space-y-2 mb-6"${_scopeId3}><!--[-->`);
                        serverRenderer_cjs_prodExports.ssrRenderList(item.points, (point) => {
                          _push4(`<li class="flex gap-2 text-body text-text-secondary"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                            name: "i-lucide-check",
                            class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(point)}</span></li>`);
                        });
                        _push4(`<!--]--></ul><p class="text-overline uppercase tracking-wide text-text-muted mb-2"${_scopeId3}> Что это даёт сотрудникам </p><p class="text-body text-text-primary"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.benefit)}</p>`);
                      } else {
                        return [
                          vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, vueExports.toDisplayString(item.label), 1),
                          vueExports.createVNode("p", { class: "text-body font-medium text-text-accent mb-4" }, vueExports.toDisplayString(item.subtitle), 1),
                          vueExports.createVNode("p", { class: "text-body text-text-secondary mb-4" }, vueExports.toDisplayString(item.intro), 1),
                          vueExports.createVNode("ul", { class: "space-y-2 mb-6" }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(item.points, (point) => {
                              return vueExports.openBlock(), vueExports.createBlock("li", {
                                key: point,
                                class: "flex gap-2 text-body text-text-secondary"
                              }, [
                                vueExports.createVNode(_component_UIcon, {
                                  name: "i-lucide-check",
                                  class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5",
                                  "aria-hidden": "true"
                                }),
                                vueExports.createVNode("span", null, vueExports.toDisplayString(point), 1)
                              ]);
                            }), 128))
                          ]),
                          vueExports.createVNode("p", { class: "text-overline uppercase tracking-wide text-text-muted mb-2" }, " Что это даёт сотрудникам "),
                          vueExports.createVNode("p", { class: "text-body text-text-primary" }, vueExports.toDisplayString(item.benefit), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_DsSurface, {
                      elevation: "sm",
                      padding: "lg",
                      class: "mt-6"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, vueExports.toDisplayString(item.label), 1),
                        vueExports.createVNode("p", { class: "text-body font-medium text-text-accent mb-4" }, vueExports.toDisplayString(item.subtitle), 1),
                        vueExports.createVNode("p", { class: "text-body text-text-secondary mb-4" }, vueExports.toDisplayString(item.intro), 1),
                        vueExports.createVNode("ul", { class: "space-y-2 mb-6" }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(item.points, (point) => {
                            return vueExports.openBlock(), vueExports.createBlock("li", {
                              key: point,
                              class: "flex gap-2 text-body text-text-secondary"
                            }, [
                              vueExports.createVNode(_component_UIcon, {
                                name: "i-lucide-check",
                                class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5",
                                "aria-hidden": "true"
                              }),
                              vueExports.createVNode("span", null, vueExports.toDisplayString(point), 1)
                            ]);
                          }), 128))
                        ]),
                        vueExports.createVNode("p", { class: "text-overline uppercase tracking-wide text-text-muted mb-2" }, " Что это даёт сотрудникам "),
                        vueExports.createVNode("p", { class: "text-body text-text-primary" }, vueExports.toDisplayString(item.benefit), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Наши ценности",
                description: "Принципы, на которых строится работа администрации Сургутского района",
                "heading-id": "values"
              }),
              vueExports.createVNode(_component_UTabs, {
                modelValue: vueExports.unref(activeValueTab),
                "onUpdate:modelValue": ($event) => vueExports.isRef(activeValueTab) ? activeValueTab.value = $event : null,
                color: "primary",
                variant: "pill",
                size: "lg",
                items: valueTabs,
                "unmount-on-hide": false,
                class: "w-full"
              }, {
                content: vueExports.withCtx(({ item }) => [
                  vueExports.createVNode(_component_DsSurface, {
                    elevation: "sm",
                    padding: "lg",
                    class: "mt-6"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2" }, vueExports.toDisplayString(item.label), 1),
                      vueExports.createVNode("p", { class: "text-body font-medium text-text-accent mb-4" }, vueExports.toDisplayString(item.subtitle), 1),
                      vueExports.createVNode("p", { class: "text-body text-text-secondary mb-4" }, vueExports.toDisplayString(item.intro), 1),
                      vueExports.createVNode("ul", { class: "space-y-2 mb-6" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(item.points, (point) => {
                          return vueExports.openBlock(), vueExports.createBlock("li", {
                            key: point,
                            class: "flex gap-2 text-body text-text-secondary"
                          }, [
                            vueExports.createVNode(_component_UIcon, {
                              name: "i-lucide-check",
                              class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5",
                              "aria-hidden": "true"
                            }),
                            vueExports.createVNode("span", null, vueExports.toDisplayString(point), 1)
                          ]);
                        }), 128))
                      ]),
                      vueExports.createVNode("p", { class: "text-overline uppercase tracking-wide text-text-muted mb-2" }, " Что это даёт сотрудникам "),
                      vueExports.createVNode("p", { class: "text-body text-text-primary" }, vueExports.toDisplayString(item.benefit), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_VacancySubscribeForm, { promo: "" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_VacancySubscribeForm, { promo: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Часто задаваемые вопросы",
              description: "Ответы на популярные вопросы о работе в администрации района",
              "heading-id": "faq"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UAccordion, {
              items: FAQ_items,
              ui: {
                wrapper: "flex flex-col gap-3",
                item: "ds-surface ring-1 ring-border-default rounded-lg overflow-hidden",
                header: "px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast min-h-11",
                body: "px-4 pb-4 text-body text-text-secondary",
                trailing: "text-primary-500"
              },
              multiple: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Часто задаваемые вопросы",
                description: "Ответы на популярные вопросы о работе в администрации района",
                "heading-id": "faq"
              }),
              vueExports.createVNode(_component_UAccordion, {
                items: FAQ_items,
                ui: {
                  wrapper: "flex flex-col gap-3",
                  item: "ds-surface ring-1 ring-border-default rounded-lg overflow-hidden",
                  header: "px-4 py-3 text-text-primary font-medium hover:bg-surface-sunken transition-colors duration-fast min-h-11",
                  body: "px-4 pb-4 text-body text-text-secondary",
                  trailing: "text-primary-500"
                },
                multiple: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D7nSwPTN.mjs.map
