import { _ as __nuxt_component_0 } from './PageHero-sozzGzkc.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DP6-J4il.mjs';
import { u as useHead, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, p as _sfc_main$i, f as _sfc_main$A, h as useRuntimeConfig, i as useToast, o as _sfc_main$d, g as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './Select-0CdyKozn.mjs';
import { b as _sfc_main$2$1, a as _sfc_main$1$1, _ as _sfc_main$3 } from './Textarea-C75BP7Lm.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TrainingFeedbackForm",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const toast = useToast();
    const loading = vueExports.ref(false);
    const form = vueExports.reactive({
      name: "",
      department: "",
      message: ""
    });
    function validate(state) {
      const errors = [];
      if (!state.message?.trim()) errors.push({ name: "message", message: "Введите текст предложения" });
      return errors;
    }
    async function onSubmit() {
      loading.value = true;
      try {
        await $fetch(`${config.public.apiBaseUrl}/api/training-feedback/`, {
          method: "POST",
          body: {
            name: form.name.trim(),
            department: form.department.trim(),
            message: form.message.trim()
          }
        });
        toast.add({
          title: "Предложение отправлено",
          description: "Спасибо за обратную связь!",
          color: "success"
        });
        form.name = "";
        form.department = "";
        form.message = "";
      } catch (error) {
        const err = error;
        toast.add({
          title: "Не удалось отправить",
          description: err.data?.error || "Попробуйте позже",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$2$1;
      const _component_UFormField = _sfc_main$1$1;
      const _component_UInput = _sfc_main$d;
      const _component_UTextarea = _sfc_main$3;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8" }, _attrs))}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2"> Предложения по организации обучения </h2><p class="text-sm text-gray-500 dark:text-gray-400 mb-6"> Форма не предназначена для подачи официальных обращений. Идентификация не требуется. </p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UForm, {
        state: vueExports.unref(form),
        validate,
        class: "space-y-4",
        onSubmit
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Имя (необязательно)",
              name: "name"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).name,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                    placeholder: "Как к вам обращаться"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                      placeholder: "Как к вам обращаться"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Подразделение (необязательно)",
              name: "department"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).department,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).department = $event,
                    placeholder: "Орган / управление"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).department,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).department = $event,
                      placeholder: "Орган / управление"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Ваше предложение",
              name: "message",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTextarea, {
                    modelValue: vueExports.unref(form).message,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).message = $event,
                    rows: 4,
                    placeholder: "Опишите тему, формат или пожелания по обучению"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UTextarea, {
                      modelValue: vueExports.unref(form).message,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).message = $event,
                      rows: 4,
                      placeholder: "Опишите тему, формат или пожелания по обучению"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              type: "submit",
              label: "Отправить предложение",
              color: "primary",
              loading: vueExports.unref(loading)
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                vueExports.createVNode(_component_UFormField, {
                  label: "Имя (необязательно)",
                  name: "name"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                      placeholder: "Как к вам обращаться"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Подразделение (необязательно)",
                  name: "department"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).department,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).department = $event,
                      placeholder: "Орган / управление"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              vueExports.createVNode(_component_UFormField, {
                label: "Ваше предложение",
                name: "message",
                required: ""
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UTextarea, {
                    modelValue: vueExports.unref(form).message,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).message = $event,
                    rows: 4,
                    placeholder: "Опишите тему, формат или пожелания по обучению"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UButton, {
                type: "submit",
                label: "Отправить предложение",
                color: "primary",
                loading: vueExports.unref(loading)
              }, null, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrainingFeedbackForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "TrainingFeedbackForm" });
const _sfc_main = {
  __name: "profdev",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Профессиональное развитие" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Профразвитие" });
    const hero = useHeroImage("profdev");
    const config = useRuntimeConfig();
    const typeFilter = vueExports.ref(null);
    const typeOptions = [
      { label: "Все типы", value: null },
      { label: "Обучающие мероприятия", value: "training" },
      { label: "Встречи с руководством", value: "leadership" },
      { label: "Мастер-классы", value: "masterclass" },
      { label: "Лучшие практики", value: "best_practice" }
    ];
    const { data: events } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "training-events",
      () => $fetch(`${config.public.apiBaseUrl}/api/training-events/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const filteredEvents = vueExports.computed(() => {
      const items = events.value ?? [];
      if (!typeFilter.value) return items;
      return items.filter((e) => e.event_type === typeFilter.value);
    });
    function formatDateTime(dateStr) {
      return new Date(dateStr).toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    function isPast(dateStr) {
      return new Date(dateStr) < /* @__PURE__ */ new Date();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_USelect = _sfc_main$2;
      const _component_UBadge = _sfc_main$i;
      const _component_UIcon = _sfc_main$A;
      const _component_TrainingFeedbackForm = __nuxt_component_6;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Профессиональное развитие",
        description: "Расписание обучающих мероприятий и предложения по организации обучения",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12 space-y-10" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}><div class="flex flex-wrap items-end justify-between gap-4 mb-6"${_scopeId}><h2 class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}> Расписание мероприятий </h2>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_USelect, {
              modelValue: vueExports.unref(typeFilter),
              "onUpdate:modelValue": ($event) => vueExports.isRef(typeFilter) ? typeFilter.value = $event : null,
              items: typeOptions,
              placeholder: "Все типы",
              "value-key": "value",
              class: "min-w-48"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (vueExports.unref(filteredEvents).length) {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(filteredEvents), (event) => {
                _push2(`<article class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "opacity-70": isPast(event.event_date) }, "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-5 lg:p-6"])}"${_scopeId}><div class="flex flex-wrap items-start justify-between gap-3 mb-3"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                  color: "primary",
                  variant: "subtle"
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(event.eventTypeLabel)}`);
                    } else {
                      return [
                        vueExports.createTextVNode(vueExports.toDisplayString(event.eventTypeLabel), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<time${serverRenderer_cjs_prodExports.ssrRenderAttr("datetime", event.event_date)} class="text-sm text-gray-500 dark:text-gray-400 shrink-0"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDateTime(event.event_date))}</time></div><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(event.title)}</h3>`);
                if (event.description) {
                  _push2(`<p class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(event.description)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (event.location) {
                  _push2(`<p class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-map-pin",
                    class: "h-4 w-4 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(` ${serverRenderer_cjs_prodExports.ssrInterpolate(event.location)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-12 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400"${_scopeId}> Мероприятия пока не запланированы </div>`);
            }
            _push2(`</section>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_TrainingFeedbackForm, null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("section", null, [
                vueExports.createVNode("div", { class: "flex flex-wrap items-end justify-between gap-4 mb-6" }, [
                  vueExports.createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, " Расписание мероприятий "),
                  vueExports.createVNode(_component_USelect, {
                    modelValue: vueExports.unref(typeFilter),
                    "onUpdate:modelValue": ($event) => vueExports.isRef(typeFilter) ? typeFilter.value = $event : null,
                    items: typeOptions,
                    placeholder: "Все типы",
                    "value-key": "value",
                    class: "min-w-48"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vueExports.unref(filteredEvents).length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "space-y-4"
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(filteredEvents), (event) => {
                    return vueExports.openBlock(), vueExports.createBlock("article", {
                      key: event.id,
                      class: ["rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-5 lg:p-6", { "opacity-70": isPast(event.event_date) }]
                    }, [
                      vueExports.createVNode("div", { class: "flex flex-wrap items-start justify-between gap-3 mb-3" }, [
                        vueExports.createVNode(_component_UBadge, {
                          color: "primary",
                          variant: "subtle"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createTextVNode(vueExports.toDisplayString(event.eventTypeLabel), 1)
                          ]),
                          _: 2
                        }, 1024),
                        vueExports.createVNode("time", {
                          datetime: event.event_date,
                          class: "text-sm text-gray-500 dark:text-gray-400 shrink-0"
                        }, vueExports.toDisplayString(formatDateTime(event.event_date)), 9, ["datetime"])
                      ]),
                      vueExports.createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-2" }, vueExports.toDisplayString(event.title), 1),
                      event.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                        key: 0,
                        class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-3"
                      }, vueExports.toDisplayString(event.description), 1)) : vueExports.createCommentVNode("", true),
                      event.location ? (vueExports.openBlock(), vueExports.createBlock("p", {
                        key: 1,
                        class: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                      }, [
                        vueExports.createVNode(_component_UIcon, {
                          name: "i-lucide-map-pin",
                          class: "h-4 w-4 shrink-0"
                        }),
                        vueExports.createTextVNode(" " + vueExports.toDisplayString(event.location), 1)
                      ])) : vueExports.createCommentVNode("", true)
                    ], 2);
                  }), 128))
                ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 1,
                  class: "text-center py-12 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400"
                }, " Мероприятия пока не запланированы "))
              ]),
              vueExports.createVNode(_component_TrainingFeedbackForm)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profdev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profdev-Dq6g9QNh.mjs.map
