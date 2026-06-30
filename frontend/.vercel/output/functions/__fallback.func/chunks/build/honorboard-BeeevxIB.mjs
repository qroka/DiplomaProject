import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { _ as _sfc_main$2 } from './Card-BxxdFxWm.mjs';
import { u as useHead, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, h as useRuntimeConfig, f as _sfc_main$A } from './server.mjs';
import { _ as __nuxt_component_5 } from './EmptyState-ya4bNInt.mjs';
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

const _sfc_main$1 = {
  __name: "StaffCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$2;
      const _component_UIcon = _sfc_main$A;
      const _component_DsEmptyState = __nuxt_component_5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "ds-container py-6" }, _attrs))}>`);
      if (__props.title || __props.subtitle) {
        _push(`<div class="mb-6">`);
        if (__props.title) {
          _push(`<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.title)}</h2>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.subtitle) {
          _push(`<p class="text-lg text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(__props.items, (item, index) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCard, {
          key: index,
          class: "bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/70",
          ui: { root: "h-full flex flex-col", body: "flex-1" }
        }, {
          header: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center text-center"${_scopeId}>`);
              if (item.image) {
                _push2(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", item.image)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", item.name)} class="w-45 h-60 object-cover mb-4 ring-2 ring-primary-500"${_scopeId}>`);
              } else {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-user",
                  class: "w-24 h-24 mb-4 text-gray-400"
                }, null, _parent2, _scopeId));
              }
              _push2(`<h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.surname)} ${serverRenderer_cjs_prodExports.ssrInterpolate(item.name)} ${serverRenderer_cjs_prodExports.ssrInterpolate(item.patronym)}</h3><p class="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.role)}</p></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "flex flex-col items-center text-center" }, [
                  item.image ? (vueExports.openBlock(), vueExports.createBlock("img", {
                    key: 0,
                    src: item.image,
                    alt: item.name,
                    class: "w-45 h-60 object-cover mb-4 ring-2 ring-primary-500"
                  }, null, 8, ["src", "alt"])) : (vueExports.openBlock(), vueExports.createBlock(_component_UIcon, {
                    key: 1,
                    name: "i-lucide-user",
                    class: "w-24 h-24 mb-4 text-gray-400"
                  })),
                  vueExports.createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, vueExports.toDisplayString(item.surname) + " " + vueExports.toDisplayString(item.name) + " " + vueExports.toDisplayString(item.patronym), 1),
                  vueExports.createVNode("p", { class: "text-sm text-primary-600 dark:text-primary-400 font-medium mt-1" }, vueExports.toDisplayString(item.role), 1)
                ])
              ];
            }
          }),
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.description)}</p>`);
            } else {
              return [
                vueExports.createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-sm leading-relaxed" }, vueExports.toDisplayString(item.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (__props.items.length === 0) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
          icon: "i-lucide-users",
          title: "Нет данных",
          description: "Информация о сотрудниках появится позже",
          class: "col-span-full"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StaffCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "honorboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Доска почёта" });
    const config = useRuntimeConfig();
    const { data: staffItems } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("staff", () => $fetch(`${config.public.apiBaseUrl}/api/staff/?honorboard=true`), { server: false })), __temp = await __temp, __restore(), __temp);
    const breadcrumbItems = buildBreadcrumbs({ label: "Доска почёта" });
    const hero = useHeroImage("honorboard");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_StaffCard = _sfc_main$1;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Доска почёта",
        description: "Сотрудники администрации, отмеченные за профессионализм, вклад в развитие района и служение жителям",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_StaffCard, {
        title: "Наша команда",
        subtitle: "Познакомьтесь с нашими сотрудниками",
        items: vueExports.unref(staffItems) ?? []
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/honorboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=honorboard-BeeevxIB.mjs.map
