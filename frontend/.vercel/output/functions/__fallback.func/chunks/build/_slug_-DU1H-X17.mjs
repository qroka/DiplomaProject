import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { v as vueExports, b as useRoute, c as createError, u as useHead, d as useAsyncData, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, f as _sfc_main$A, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
import { g as getDepartment } from './departments-Ck1P6-b_.mjs';
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

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const slug = vueExports.computed(() => String(route.params.slug));
    const department = vueExports.computed(() => getDepartment(slug.value));
    const fallbackHero = useHeroImage("about");
    const breadcrumbItems = vueExports.computed(() => {
      if (!department.value) return buildBreadcrumbs({ label: "Орган" });
      return buildBreadcrumbs(
        { label: "О нас", to: "/about" },
        { label: department.value.name }
      );
    });
    vueExports.watchEffect(() => {
      if (!department.value) {
        throw createError({ statusCode: 404, statusMessage: "Орган не найден" });
      }
    });
    useHead(() => ({ title: department.value?.name ?? "Орган" }));
    const { data: allVacancies } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      `vacancies-dept-${slug.value}`,
      () => $fetch(`${config.public.apiBaseUrl}/api/vacancies/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const relatedVacancies = vueExports.computed(() => {
      const branch = department.value?.vacancyBranch;
      if (!branch || !allVacancies.value) return [];
      const target = branch.toLowerCase();
      return allVacancies.value.filter((v) => {
        if (v.is_active === false) return false;
        const b = (v.branch || "").toLowerCase();
        return b.includes(target) || target.includes(b);
      });
    });
    const vacanciesLink = vueExports.computed(() => {
      const branch = department.value?.vacancyBranch;
      return branch ? `/vacancies?org=${encodeURIComponent(branch)}` : "/vacancies";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_UIcon = _sfc_main$A;
      const _component_UButton = _sfc_main$u;
      if (vueExports.unref(department)) {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
          variant: "inner",
          title: vueExports.unref(department).name,
          description: vueExports.unref(department).intro ?? "",
          image: vueExports.unref(department).image ?? vueExports.unref(fallbackHero).src,
          "image-alt": vueExports.unref(department).name
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-8"${_scopeId}>`);
              if (vueExports.unref(department).units?.length) {
                _push2(`<section${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"${_scopeId}> В состав управления входят </h2><ul class="space-y-2"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(department).units, (unit) => {
                  _push2(`<li class="flex gap-2 text-gray-700 dark:text-gray-300"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-check",
                    class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(unit)}</span></li>`);
                });
                _push2(`<!--]--></ul></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(department).tasks?.length) {
                _push2(`<section${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"${_scopeId}> Ключевые задачи </h2><ul class="space-y-3"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(department).tasks, (task) => {
                  _push2(`<li class="flex gap-2 text-gray-700 dark:text-gray-300"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-circle-check",
                    class: "h-5 w-5 text-green-600 shrink-0 mt-0.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(task)}</span></li>`);
                });
                _push2(`<!--]--></ul></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (!vueExports.unref(department).units?.length && !vueExports.unref(department).tasks?.length) {
                _push2(`<section${_scopeId}><p class="text-gray-600 dark:text-gray-300 leading-relaxed"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).intro)}</p><p class="mt-4 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Подробное описание функций и задач органа будет дополнено администрацией. </p></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><aside class="space-y-6"${_scopeId}>`);
              if (vueExports.unref(department).head) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4"${_scopeId}> Руководитель </h2><p class="font-medium text-gray-900 dark:text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).head.name)}</p><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).head.role)}</p>`);
                if (vueExports.unref(department).head.phone) {
                  _push2(`<div class="mt-4 flex gap-2 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-phone",
                    class: "h-4 w-4 shrink-0 mt-0.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).head.phone)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (vueExports.unref(department).head.email) {
                  _push2(`<div class="mt-2 flex gap-2 text-sm"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-mail",
                    class: "h-4 w-4 shrink-0 mt-0.5 text-gray-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `mailto:${vueExports.unref(department).head.email}`)} class="text-primary-600 dark:text-primary-400 hover:underline"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).head.email)}</a></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else if (vueExports.unref(department).phone || vueExports.unref(department).email) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4"${_scopeId}> Контакты </h2>`);
                if (vueExports.unref(department).phone) {
                  _push2(`<div class="flex gap-2 text-sm text-gray-600 dark:text-gray-300"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-phone",
                    class: "h-4 w-4 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).phone)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (vueExports.unref(department).email) {
                  _push2(`<div class="mt-2 flex gap-2 text-sm"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-mail",
                    class: "h-4 w-4 shrink-0 text-gray-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `mailto:${vueExports.unref(department).email}`)} class="text-primary-600 dark:text-primary-400 hover:underline"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(department).email)}</a></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(relatedVacancies).length) {
                _push2(`<div class="rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-950/20 p-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}> Открытые вакансии </h2><p class="text-sm text-gray-600 dark:text-gray-400 mb-4"${_scopeId}> В этом органе есть ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(relatedVacancies).length)} актуальных вакансий </p>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                  label: "Смотреть вакансии",
                  to: vueExports.unref(vacanciesLink),
                  color: "primary",
                  block: ""
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</aside></div><div class="mt-10"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "← Вернуться к разделу «О нас»",
                to: "/about",
                color: "neutral",
                variant: "ghost"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  vueExports.createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                    vueExports.unref(department).units?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 0 }, [
                      vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-4" }, " В состав управления входят "),
                      vueExports.createVNode("ul", { class: "space-y-2" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(department).units, (unit) => {
                          return vueExports.openBlock(), vueExports.createBlock("li", {
                            key: unit,
                            class: "flex gap-2 text-gray-700 dark:text-gray-300"
                          }, [
                            vueExports.createVNode(_component_UIcon, {
                              name: "i-lucide-check",
                              class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                            }),
                            vueExports.createVNode("span", null, vueExports.toDisplayString(unit), 1)
                          ]);
                        }), 128))
                      ])
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(department).tasks?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                      vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-4" }, " Ключевые задачи "),
                      vueExports.createVNode("ul", { class: "space-y-3" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(department).tasks, (task) => {
                          return vueExports.openBlock(), vueExports.createBlock("li", {
                            key: task,
                            class: "flex gap-2 text-gray-700 dark:text-gray-300"
                          }, [
                            vueExports.createVNode(_component_UIcon, {
                              name: "i-lucide-circle-check",
                              class: "h-5 w-5 text-green-600 shrink-0 mt-0.5"
                            }),
                            vueExports.createVNode("span", null, vueExports.toDisplayString(task), 1)
                          ]);
                        }), 128))
                      ])
                    ])) : vueExports.createCommentVNode("", true),
                    !vueExports.unref(department).units?.length && !vueExports.unref(department).tasks?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 2 }, [
                      vueExports.createVNode("p", { class: "text-gray-600 dark:text-gray-300 leading-relaxed" }, vueExports.toDisplayString(vueExports.unref(department).intro), 1),
                      vueExports.createVNode("p", { class: "mt-4 text-sm text-gray-500 dark:text-gray-400" }, " Подробное описание функций и задач органа будет дополнено администрацией. ")
                    ])) : vueExports.createCommentVNode("", true)
                  ]),
                  vueExports.createVNode("aside", { class: "space-y-6" }, [
                    vueExports.unref(department).head ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"
                    }, [
                      vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-4" }, " Руководитель "),
                      vueExports.createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, vueExports.toDisplayString(vueExports.unref(department).head.name), 1),
                      vueExports.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-1" }, vueExports.toDisplayString(vueExports.unref(department).head.role), 1),
                      vueExports.unref(department).head.phone ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "mt-4 flex gap-2 text-sm text-gray-600 dark:text-gray-300"
                      }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-phone",
                          class: "h-4 w-4 shrink-0 mt-0.5"
                        }),
                        vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(department).head.phone), 1)
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(department).head.email ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "mt-2 flex gap-2 text-sm"
                      }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-mail",
                          class: "h-4 w-4 shrink-0 mt-0.5 text-gray-500"
                        }),
                        vueExports.createVNode("a", {
                          href: `mailto:${vueExports.unref(department).head.email}`,
                          class: "text-primary-600 dark:text-primary-400 hover:underline"
                        }, vueExports.toDisplayString(vueExports.unref(department).head.email), 9, ["href"])
                      ])) : vueExports.createCommentVNode("", true)
                    ])) : vueExports.unref(department).phone || vueExports.unref(department).email ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"
                    }, [
                      vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-4" }, " Контакты "),
                      vueExports.unref(department).phone ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "flex gap-2 text-sm text-gray-600 dark:text-gray-300"
                      }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-phone",
                          class: "h-4 w-4 shrink-0"
                        }),
                        vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(department).phone), 1)
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(department).email ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "mt-2 flex gap-2 text-sm"
                      }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-mail",
                          class: "h-4 w-4 shrink-0 text-gray-500"
                        }),
                        vueExports.createVNode("a", {
                          href: `mailto:${vueExports.unref(department).email}`,
                          class: "text-primary-600 dark:text-primary-400 hover:underline"
                        }, vueExports.toDisplayString(vueExports.unref(department).email), 9, ["href"])
                      ])) : vueExports.createCommentVNode("", true)
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(relatedVacancies).length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-950/20 p-6"
                    }, [
                      vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-2" }, " Открытые вакансии "),
                      vueExports.createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mb-4" }, " В этом органе есть " + vueExports.toDisplayString(vueExports.unref(relatedVacancies).length) + " актуальных вакансий ", 1),
                      vueExports.createVNode(_component_UButton, {
                        label: "Смотреть вакансии",
                        to: vueExports.unref(vacanciesLink),
                        color: "primary",
                        block: ""
                      }, null, 8, ["to"])
                    ])) : vueExports.createCommentVNode("", true)
                  ])
                ]),
                vueExports.createVNode("div", { class: "mt-10" }, [
                  vueExports.createVNode(_component_UButton, {
                    label: "← Вернуться к разделу «О нас»",
                    to: "/about",
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/departments/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DU1H-X17.mjs.map
