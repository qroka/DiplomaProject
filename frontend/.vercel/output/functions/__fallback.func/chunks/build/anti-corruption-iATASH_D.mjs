import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { u as useHead, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, f as _sfc_main$A, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
import { _ as _sfc_main$1 } from './Tabs-1OPBbOF8.mjs';
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
import './TabsTrigger-B_2FHQlp.mjs';
import './RovingFocusItem-sciPZ7zL.mjs';

const _sfc_main = {
  __name: "anti-corruption",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Противодействие коррупции" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Нет коррупции!" });
    const hero = useHeroImage("antiCorruption");
    const config = useRuntimeConfig();
    const documentTabs = [
      {
        label: "Нормативные акты",
        value: "Нормативные, правовые и иные акты в сфере противодействия коррупции"
      },
      {
        label: "Экспертиза",
        value: "Антикоррупционная экспертиза"
      },
      {
        label: "Методические материалы",
        value: "Методические материалы"
      },
      {
        label: "Формы документов",
        value: "Формы документов, связанные с противодействием коррупции, для заполнения"
      },
      {
        label: "Комиссия",
        value: "Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов"
      }
    ];
    const activeDocTab = vueExports.ref(documentTabs[0].value);
    const { data: info } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "anti-corruption-info",
      () => $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-info/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const { data: documents } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "anti-corruption-docs",
      () => $fetch(`${config.public.apiBaseUrl}/api/anti-corruption-documents/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const esiaUrl = vueExports.computed(
      () => info.value?.esia_feedback_url || config.public.esiaFeedbackUrl || "https://pos.gosuslugi.ru/landing/"
    );
    function docsByCategory(category) {
      return (documents.value ?? []).filter((doc) => doc.category === category);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_UIcon = _sfc_main$A;
      const _component_UTabs = _sfc_main$1;
      const _component_UButton = _sfc_main$u;
      const _component_DsEmptyState = __nuxt_component_5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Противодействие коррупции",
        description: "Информация управления муниципальной службы, кадров и наград администрации Сургутского района",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12 space-y-10" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(info)?.intro) {
              _push2(`<p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).intro)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}><div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"${_scopeId}><div class="flex items-center gap-2 mb-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-clock",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}> График работы </h2></div><div class="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm leading-relaxed"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info)?.work_schedule)}</div></div><div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"${_scopeId}><div class="flex items-center gap-2 mb-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-map-pin",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}> Адрес </h2></div><p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info)?.address)}</p></div><div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6"${_scopeId}><div class="flex items-center gap-2 mb-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-user-check",
              class: "h-5 w-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}> Ответственные лица </h2></div>`);
            if (vueExports.unref(info)?.officialsList?.length) {
              _push2(`<ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(info).officialsList, (official) => {
                _push2(`<li${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(official)}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Сведения уточняются в управлении муниципальной службы, кадров и наград. </p>`);
            }
            _push2(`</div></section><section${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6"${_scopeId}> Документы </h2>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTabs, {
              modelValue: vueExports.unref(activeDocTab),
              "onUpdate:modelValue": ($event) => vueExports.isRef(activeDocTab) ? activeDocTab.value = $event : null,
              color: "primary",
              variant: "pill",
              size: "lg",
              items: documentTabs,
              "unmount-on-hide": false
            }, {
              content: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-6 space-y-3"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(docsByCategory(item.value), (doc) => {
                    _push3(`<div class="flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-4"${_scopeId2}><span class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(doc.name)}</span>`);
                    if (doc.file) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                        label: "Скачать",
                        icon: "i-lucide-download",
                        to: doc.file,
                        target: "_blank",
                        external: "",
                        color: "primary",
                        size: "sm"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                  if (!docsByCategory(item.value).length) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                      icon: "i-lucide-file-x",
                      title: "Документы отсутствуют",
                      description: "В этой категории пока нет опубликованных материалов"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "mt-6 space-y-3" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(docsByCategory(item.value), (doc) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: doc.id,
                          class: "flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                        }, [
                          vueExports.createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(doc.name), 1),
                          doc.file ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                            key: 0,
                            label: "Скачать",
                            icon: "i-lucide-download",
                            to: doc.file,
                            target: "_blank",
                            external: "",
                            color: "primary",
                            size: "sm"
                          }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                        ]);
                      }), 128)),
                      !docsByCategory(item.value).length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                        key: 0,
                        icon: "i-lucide-file-x",
                        title: "Документы отсутствуют",
                        description: "В этой категории пока нет опубликованных материалов"
                      })) : vueExports.createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section class="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-900/20 p-6 lg:p-8"${_scopeId}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> Сообщить о коррупционном правонарушении </h2><p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4"${_scopeId}> В соответствии с Федеральным законом от 02.05.2006 № 59-ФЗ направление обращения о коррупционных правонарушениях муниципальных служащих через информационную систему возможно только после идентификации и (или) аутентификации заявителя через Единую систему идентификации и аутентификации (ЕСИА). </p><p class="text-gray-600 dark:text-gray-400 text-sm mb-6"${_scopeId}> Для подачи обращения перейдите на Платформу обратной связи с авторизацией через Госуслуги. Размер каждого вложения — не более 10 МБ, суммарно — не более 10 МБ (pdf, jpg, png, docx и иные форматы по п. 4.9 Распоряжения № 497-р). </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Перейти к подаче обращения через ЕСИА",
              to: vueExports.unref(esiaUrl),
              target: "_blank",
              external: "",
              color: "primary",
              "trailing-icon": "i-lucide-external-link"
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              vueExports.unref(info)?.intro ? (vueExports.openBlock(), vueExports.createBlock("p", {
                key: 0,
                class: "text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl"
              }, vueExports.toDisplayString(vueExports.unref(info).intro), 1)) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("section", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                vueExports.createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6" }, [
                  vueExports.createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-clock",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, " График работы ")
                  ]),
                  vueExports.createVNode("div", { class: "text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm leading-relaxed" }, vueExports.toDisplayString(vueExports.unref(info)?.work_schedule), 1)
                ]),
                vueExports.createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6" }, [
                  vueExports.createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-map-pin",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, " Адрес ")
                  ]),
                  vueExports.createVNode("p", { class: "text-gray-700 dark:text-gray-300 text-sm leading-relaxed" }, vueExports.toDisplayString(vueExports.unref(info)?.address), 1)
                ]),
                vueExports.createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6" }, [
                  vueExports.createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-user-check",
                      class: "h-5 w-5 text-primary-500"
                    }),
                    vueExports.createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, " Ответственные лица ")
                  ]),
                  vueExports.unref(info)?.officialsList?.length ? (vueExports.openBlock(), vueExports.createBlock("ul", {
                    key: 0,
                    class: "space-y-2 text-sm text-gray-700 dark:text-gray-300"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(info).officialsList, (official) => {
                      return vueExports.openBlock(), vueExports.createBlock("li", { key: official }, vueExports.toDisplayString(official), 1);
                    }), 128))
                  ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 1,
                    class: "text-sm text-gray-500 dark:text-gray-400"
                  }, " Сведения уточняются в управлении муниципальной службы, кадров и наград. "))
                ])
              ]),
              vueExports.createVNode("section", null, [
                vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-6" }, " Документы "),
                vueExports.createVNode(_component_UTabs, {
                  modelValue: vueExports.unref(activeDocTab),
                  "onUpdate:modelValue": ($event) => vueExports.isRef(activeDocTab) ? activeDocTab.value = $event : null,
                  color: "primary",
                  variant: "pill",
                  size: "lg",
                  items: documentTabs,
                  "unmount-on-hide": false
                }, {
                  content: vueExports.withCtx(({ item }) => [
                    vueExports.createVNode("div", { class: "mt-6 space-y-3" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(docsByCategory(item.value), (doc) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: doc.id,
                          class: "flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                        }, [
                          vueExports.createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(doc.name), 1),
                          doc.file ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                            key: 0,
                            label: "Скачать",
                            icon: "i-lucide-download",
                            to: doc.file,
                            target: "_blank",
                            external: "",
                            color: "primary",
                            size: "sm"
                          }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                        ]);
                      }), 128)),
                      !docsByCategory(item.value).length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                        key: 0,
                        icon: "i-lucide-file-x",
                        title: "Документы отсутствуют",
                        description: "В этой категории пока нет опубликованных материалов"
                      })) : vueExports.createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              vueExports.createVNode("section", { class: "rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-900/20 p-6 lg:p-8" }, [
                vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-3" }, " Сообщить о коррупционном правонарушении "),
                vueExports.createVNode("p", { class: "text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4" }, " В соответствии с Федеральным законом от 02.05.2006 № 59-ФЗ направление обращения о коррупционных правонарушениях муниципальных служащих через информационную систему возможно только после идентификации и (или) аутентификации заявителя через Единую систему идентификации и аутентификации (ЕСИА). "),
                vueExports.createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-sm mb-6" }, " Для подачи обращения перейдите на Платформу обратной связи с авторизацией через Госуслуги. Размер каждого вложения — не более 10 МБ, суммарно — не более 10 МБ (pdf, jpg, png, docx и иные форматы по п. 4.9 Распоряжения № 497-р). "),
                vueExports.createVNode(_component_UButton, {
                  label: "Перейти к подаче обращения через ЕСИА",
                  to: vueExports.unref(esiaUrl),
                  target: "_blank",
                  external: "",
                  color: "primary",
                  "trailing-icon": "i-lucide-external-link"
                }, null, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anti-corruption.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=anti-corruption-iATASH_D.mjs.map
