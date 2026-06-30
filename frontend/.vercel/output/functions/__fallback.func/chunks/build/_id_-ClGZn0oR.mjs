import { v as vueExports, b as useRoute, i as useToast, u as useHead, s as serverRenderer_cjs_prodExports, j as _sfc_main$l, e as _sfc_main$n, f as _sfc_main$A, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
import { A as ApplicationForm } from './ApplicationForm-D3mPRbFX.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DP6-J4il.mjs';
import { _ as _sfc_main$1 } from './Card-BxxdFxWm.mjs';
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
import './Textarea-C75BP7Lm.mjs';
import './Surface-BpUAMKsj.mjs';
import './Collapsible-CDkT1GM7.mjs';
import './InputDate-DlbLX7zg.mjs';
import './RovingFocusItem-CItW57sS.mjs';
import './FileUpload-BkDe3Tt1.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const config = useRuntimeConfig();
    const toast = useToast();
    const vacancy = vueExports.ref(null);
    const loading = vueExports.ref(true);
    const error = vueExports.ref(null);
    const isApplicationFormOpen = vueExports.ref(false);
    useHead(() => ({ title: vacancy.value?.title ? String(vacancy.value.title) : "Вакансия" }));
    const breadcrumbItems = vueExports.computed(() => {
      const items = buildBreadcrumbs({ label: "Вакансии", to: "/vacancies" });
      if (vacancy.value?.title) items.push({ label: String(vacancy.value.title) });
      return items;
    });
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
    }
    function closeApplicationForm() {
      isApplicationFormOpen.value = false;
    }
    async function handleFormSubmit(formData) {
      try {
        const data = new FormData();
        data.append("vacancy_title", String(vacancy.value?.title || ""));
        for (const [key, value] of Object.entries(formData)) {
          if (value instanceof File || Array.isArray(value) && value[0] instanceof File) {
            const files = Array.isArray(value) ? value : [value];
            for (const file of files) {
              if (file instanceof File) data.append(key.replace(/([A-Z])/g, "_$1").toLowerCase(), file);
            }
          } else if (value !== null && value !== void 0) {
            const fieldName = key.replace(/([A-Z])/g, "_$1").toLowerCase();
            if (typeof value === "boolean") {
              data.append(fieldName, value ? "true" : "false");
            } else if (value instanceof Date) {
              data.append(fieldName, value.toISOString().split("T")[0]);
            } else {
              data.append(fieldName, String(value));
            }
          }
        }
        await $fetch(`${config.public.apiBaseUrl}/api/apply/`, { method: "POST", body: data });
        toast.add({ title: "Заявка отправлена", color: "success" });
        setTimeout(closeApplicationForm, 1500);
      } catch {
        toast.add({ title: "Ошибка отправки", description: "Попробуйте снова", color: "error" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$l;
      const _component_ApplicationForm = ApplicationForm;
      const _component_UContainer = _sfc_main$n;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UIcon = _sfc_main$A;
      const _component_UButton = _sfc_main$u;
      const _component_UCard = _sfc_main$1;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(isApplicationFormOpen),
        "onUpdate:open": ($event) => vueExports.isRef(isApplicationFormOpen) ? isApplicationFormOpen.value = $event : null,
        title: "Отклик на вакансию"
      }, {
        body: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ApplicationForm, {
              vacancy: vueExports.unref(vacancy),
              onSubmit: handleFormSubmit,
              onCancel: closeApplicationForm
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_ApplicationForm, {
                vacancy: vueExports.unref(vacancy),
                onSubmit: handleFormSubmit,
                onCancel: closeApplicationForm
              }, null, 8, ["vacancy"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent2, _scopeId));
            if (vueExports.unref(loading)) {
              _push2(`<div class="flex justify-center py-20"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-loader-circle",
                class: "h-8 w-8 text-primary-500 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (vueExports.unref(error)) {
              _push2(`<div class="text-center py-20"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-search-x",
                class: "h-16 w-16 text-gray-400 mx-auto mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2"${_scopeId}>Вакансия не найдена</h2><p class="text-gray-500 dark:text-gray-400 mb-6"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(error))}</p>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Вернуться к вакансиям",
                to: "/vacancies",
                color: "primary"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (vueExports.unref(vacancy)) {
              _push2(`<!--[--><h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).title)}</h1><div class="max-w-3xl space-y-6"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCard, {
                class: "bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800",
                ui: { body: "p-4 sm:p-6" }
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId2}>`);
                    if (vueExports.unref(vacancy).branch) {
                      _push3(`<div class="flex items-center gap-3 text-gray-500 dark:text-gray-400 sm:col-span-2"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                        name: "i-lucide-building",
                        class: "h-5 w-5 shrink-0"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}><p class="text-sm"${_scopeId2}>Орган</p><p class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).branch)}</p></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex items-center gap-3 text-gray-500 dark:text-gray-400"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: "i-lucide-map-pin",
                      class: "h-5 w-5 shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="text-sm"${_scopeId2}>Локация</p><p class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).location)}</p></div></div><div class="flex items-center gap-3 text-green-600 dark:text-green-400"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: "i-lucide-wallet",
                      class: "h-5 w-5 shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Зарплата</p><p class="text-gray-900 dark:text-white font-semibold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).salary)}</p></div></div><div class="flex items-center gap-3 text-gray-500 dark:text-gray-400"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: "i-lucide-award",
                      class: "h-5 w-5 shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="text-sm"${_scopeId2}>Опыт</p><p class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).experience || "Не указан")}</p></div></div><div class="flex items-center gap-3 text-gray-500 dark:text-gray-400"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                      name: "i-lucide-clock",
                      class: "h-5 w-5 shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="text-sm"${_scopeId2}>График работы</p><p class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).workSchedule || "Не указан")}</p></div></div></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                        vueExports.unref(vacancy).branch ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-3 text-gray-500 dark:text-gray-400 sm:col-span-2"
                        }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-building",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Орган"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).branch), 1)
                          ])
                        ])) : vueExports.createCommentVNode("", true),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-map-pin",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Локация"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).location), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-green-600 dark:text-green-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-wallet",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Зарплата"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-semibold" }, vueExports.toDisplayString(vueExports.unref(vacancy).salary), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-award",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Опыт"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).experience || "Не указан"), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-clock",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "График работы"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).workSchedule || "Не указан"), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (vueExports.unref(vacancy).description) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCard, {
                  class: "bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800",
                  ui: { body: "p-4 sm:p-6" }
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3"${_scopeId2}>Описание вакансии</h3><div class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(vacancy).description)}</div>`);
                    } else {
                      return [
                        vueExports.createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white mb-3" }, "Описание вакансии"),
                        vueExports.createVNode("div", { class: "text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(vacancy).description), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex flex-wrap gap-3"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Откликнуться",
                color: "primary",
                size: "lg",
                onClick: ($event) => isApplicationFormOpen.value = true
              }, null, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Конкурсы",
                to: "/tenders",
                color: "neutral",
                variant: "outline",
                size: "lg"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm text-gray-400 dark:text-gray-500"${_scopeId}> Опубликовано ${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(vueExports.unref(vacancy).created_at))}</p></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, 8, ["items"]),
              vueExports.unref(loading) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "flex justify-center py-20"
              }, [
                vueExports.createVNode(_component_UIcon, {
                  name: "i-lucide-loader-circle",
                  class: "h-8 w-8 text-primary-500 animate-spin"
                })
              ])) : vueExports.unref(error) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                class: "text-center py-20"
              }, [
                vueExports.createVNode(_component_UIcon, {
                  name: "i-lucide-search-x",
                  class: "h-16 w-16 text-gray-400 mx-auto mb-4"
                }),
                vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-2" }, "Вакансия не найдена"),
                vueExports.createVNode("p", { class: "text-gray-500 dark:text-gray-400 mb-6" }, vueExports.toDisplayString(vueExports.unref(error)), 1),
                vueExports.createVNode(_component_UButton, {
                  label: "Вернуться к вакансиям",
                  to: "/vacancies",
                  color: "primary"
                })
              ])) : vueExports.unref(vacancy) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                vueExports.createVNode("h1", { class: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8" }, vueExports.toDisplayString(vueExports.unref(vacancy).title), 1),
                vueExports.createVNode("div", { class: "max-w-3xl space-y-6" }, [
                  vueExports.createVNode(_component_UCard, {
                    class: "bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800",
                    ui: { body: "p-4 sm:p-6" }
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                        vueExports.unref(vacancy).branch ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-3 text-gray-500 dark:text-gray-400 sm:col-span-2"
                        }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-building",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Орган"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).branch), 1)
                          ])
                        ])) : vueExports.createCommentVNode("", true),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-map-pin",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Локация"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).location), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-green-600 dark:text-green-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-wallet",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Зарплата"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-semibold" }, vueExports.toDisplayString(vueExports.unref(vacancy).salary), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-award",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "Опыт"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).experience || "Не указан"), 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-3 text-gray-500 dark:text-gray-400" }, [
                          vueExports.createVNode(_component_UIcon, {
                            name: "i-lucide-clock",
                            class: "h-5 w-5 shrink-0"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-sm" }, "График работы"),
                            vueExports.createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(vueExports.unref(vacancy).workSchedule || "Не указан"), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.unref(vacancy).description ? (vueExports.openBlock(), vueExports.createBlock(_component_UCard, {
                    key: 0,
                    class: "bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800",
                    ui: { body: "p-4 sm:p-6" }
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white mb-3" }, "Описание вакансии"),
                      vueExports.createVNode("div", { class: "text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(vacancy).description), 1)
                    ]),
                    _: 1
                  })) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    vueExports.createVNode(_component_UButton, {
                      label: "Откликнуться",
                      color: "primary",
                      size: "lg",
                      onClick: ($event) => isApplicationFormOpen.value = true
                    }, null, 8, ["onClick"]),
                    vueExports.createVNode(_component_UButton, {
                      label: "Конкурсы",
                      to: "/tenders",
                      color: "neutral",
                      variant: "outline",
                      size: "lg"
                    })
                  ]),
                  vueExports.createVNode("p", { class: "text-sm text-gray-400 dark:text-gray-500" }, " Опубликовано " + vueExports.toDisplayString(formatDate(vueExports.unref(vacancy).created_at)), 1)
                ])
              ], 64)) : vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancyinfo/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-ClGZn0oR.mjs.map
