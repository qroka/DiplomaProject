import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { u as useHead, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, f as _sfc_main$A, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
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

const _sfc_main = {
  __name: "staffreserve",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Кадровый резерв" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Кадровый резерв" });
    const hero = useHeroImage("staffreserve");
    const config = useRuntimeConfig();
    const { data: info } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "staff-reserve-info",
      () => $fetch(`${config.public.apiBaseUrl}/api/staff-reserve/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_UIcon = _sfc_main$A;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Кадровый резерв",
        description: "Организация кадрового резерва администрации Сургутского района",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12 space-y-10" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(info)) {
              _push2(`<section${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"${_scopeId}> О кадровом резерве </h2><p class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).purpose)}</p></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(info)?.positionsList?.length) {
              _push2(`<section${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"${_scopeId}> Должности, на которые формируется резерв </h2><ul class="space-y-2"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(info).positionsList, (position) => {
                _push2(`<li class="flex gap-2 text-gray-700 dark:text-gray-300"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-briefcase",
                  class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(position)}</span></li>`);
              });
              _push2(`<!--]--></ul></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(info)?.additional_content) {
              _push2(`<section${_scopeId}><div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).additional_content)}</div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8"${_scopeId}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> Действующие конкурсы на формирование кадрового резерва </h2><p class="text-gray-500 dark:text-gray-400 mb-4"${_scopeId}> Актуальная информация о приёме документов размещена в разделе «Конкурсы». </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Перейти к конкурсам на кадровый резерв",
              to: "/tenders?type=reserve",
              color: "primary",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</section><section class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8"${_scopeId}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> Результаты конкурсов </h2><p class="text-gray-500 dark:text-gray-400 mb-4"${_scopeId}> Архивные документы по завершённым конкурсам хранятся в разделе «Конкурсы». </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Смотреть результаты конкурсов",
              to: "/tenders?tab=results",
              color: "neutral",
              variant: "outline",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</section><div class="flex flex-wrap gap-3 pt-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Вакансии",
              to: "/vacancies",
              color: "neutral",
              variant: "ghost"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Все конкурсы",
              to: "/tenders",
              color: "neutral",
              variant: "ghost"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.unref(info) ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 0 }, [
                vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-4" }, " О кадровом резерве "),
                vueExports.createVNode("p", { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(info).purpose), 1)
              ])) : vueExports.createCommentVNode("", true),
              vueExports.unref(info)?.positionsList?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-4" }, " Должности, на которые формируется резерв "),
                vueExports.createVNode("ul", { class: "space-y-2" }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(info).positionsList, (position) => {
                    return vueExports.openBlock(), vueExports.createBlock("li", {
                      key: position,
                      class: "flex gap-2 text-gray-700 dark:text-gray-300"
                    }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-briefcase",
                        class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                      }),
                      vueExports.createVNode("span", null, vueExports.toDisplayString(position), 1)
                    ]);
                  }), 128))
                ])
              ])) : vueExports.createCommentVNode("", true),
              vueExports.unref(info)?.additional_content ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 2 }, [
                vueExports.createVNode("div", { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(info).additional_content), 1)
              ])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("section", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8" }, [
                vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-3" }, " Действующие конкурсы на формирование кадрового резерва "),
                vueExports.createVNode("p", { class: "text-gray-500 dark:text-gray-400 mb-4" }, " Актуальная информация о приёме документов размещена в разделе «Конкурсы». "),
                vueExports.createVNode(_component_UButton, {
                  label: "Перейти к конкурсам на кадровый резерв",
                  to: "/tenders?type=reserve",
                  color: "primary",
                  "trailing-icon": "i-lucide-arrow-right"
                })
              ]),
              vueExports.createVNode("section", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8" }, [
                vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-3" }, " Результаты конкурсов "),
                vueExports.createVNode("p", { class: "text-gray-500 dark:text-gray-400 mb-4" }, " Архивные документы по завершённым конкурсам хранятся в разделе «Конкурсы». "),
                vueExports.createVNode(_component_UButton, {
                  label: "Смотреть результаты конкурсов",
                  to: "/tenders?tab=results",
                  color: "neutral",
                  variant: "outline",
                  "trailing-icon": "i-lucide-arrow-right"
                })
              ]),
              vueExports.createVNode("div", { class: "flex flex-wrap gap-3 pt-2" }, [
                vueExports.createVNode(_component_UButton, {
                  label: "Вакансии",
                  to: "/vacancies",
                  color: "neutral",
                  variant: "ghost"
                }),
                vueExports.createVNode(_component_UButton, {
                  label: "Все конкурсы",
                  to: "/tenders",
                  color: "neutral",
                  variant: "ghost"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/staffreserve.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=staffreserve-CSKrH4JX.mjs.map
