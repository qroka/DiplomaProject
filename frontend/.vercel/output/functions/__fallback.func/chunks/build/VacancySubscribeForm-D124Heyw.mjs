import { _ as _export_sfc, v as vueExports, i as useToast, d as useAsyncData, s as serverRenderer_cjs_prodExports, p as _sfc_main$i, f as _sfc_main$A, o as _sfc_main$d, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_7 } from './Surface-X0lNFFsI.mjs';
import { b as _sfc_main$2$1, a as _sfc_main$1$1 } from './Textarea-BZalJ9Lx.mjs';
import { _ as _sfc_main$3 } from './Select-CgIdPBev.mjs';
import { a as _sfc_main$1$2 } from './InputDate-CSyueQQs.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
    class: "ds-surface animate-pulse",
    "data-elevation": "xs",
    "data-padding": "lg",
    "aria-hidden": "true"
  }, _attrs))}><div class="flex justify-between items-start mb-4"><div class="flex-1 space-y-2"><div class="h-5 bg-surface-sunken rounded w-3/4"></div><div class="h-4 bg-surface-sunken rounded w-1/2"></div></div><div class="h-5 w-14 bg-surface-sunken rounded-full"></div></div><div class="space-y-2 mb-6"><div class="h-4 bg-surface-sunken rounded w-2/3"></div><div class="h-4 bg-surface-sunken rounded w-1/2"></div><div class="h-4 bg-surface-sunken rounded w-3/5"></div></div><div class="flex gap-2 mb-6"><div class="h-6 w-16 bg-surface-sunken rounded-full"></div><div class="h-6 w-20 bg-surface-sunken rounded-full"></div></div><div class="flex gap-3 pt-4 border-t border-border-default"><div class="h-11 bg-surface-sunken rounded-lg flex-[2]"></div><div class="h-11 bg-surface-sunken rounded-lg flex-1"></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/SkeletonCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "DsSkeletonCard" });
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VacancyCard",
  __ssrInlineRender: true,
  props: {
    vacancy: {
      type: Object,
      required: true
    }
  },
  emits: ["apply"],
  setup(__props) {
    const props = __props;
    const formattedDate = vueExports.computed(() => {
      const raw = props.vacancy.created_at;
      if (!raw) return "";
      try {
        return new Date(raw).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
          year: "numeric"
        });
      } catch {
        return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSurface = __nuxt_component_7;
      const _component_UIcon = _sfc_main$A;
      const _component_UBadge = _sfc_main$i;
      const _component_UButton = _sfc_main$u;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, vueExports.mergeProps({
        class: [
          __props.vacancy.isNew && "ring-2 ring-border-brand",
          "h-full flex flex-col"
        ],
        elevation: "sm",
        padding: "none",
        interactive: true,
        tag: "article"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full p-4 sm:p-6"${_scopeId}><div class="flex justify-between items-start gap-3 mb-4"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><h3 class="text-h3 text-text-primary mb-2 text-balance"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.title)}</h3><div class="flex items-center gap-2 text-caption text-text-muted"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-building-2",
              class: "h-4 w-4 shrink-0",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.company || __props.vacancy.branch || "Администрация Сургутского района")}</span></div></div><div class="flex flex-col items-end gap-2 shrink-0"${_scopeId}>`);
            if (__props.vacancy.isNew) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                color: "primary",
                variant: "subtle",
                size: "sm"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Новое `);
                  } else {
                    return [
                      vueExports.createTextVNode(" Новое ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (vueExports.unref(formattedDate)) {
              _push2(`<time${serverRenderer_cjs_prodExports.ssrRenderAttr("datetime", __props.vacancy.created_at)} class="text-caption text-text-muted whitespace-nowrap"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(formattedDate))}</time>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="space-y-2.5 mb-4 flex-1"${_scopeId}>`);
            if (__props.vacancy.location) {
              _push2(`<div class="flex items-center gap-2 text-body text-text-secondary"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-map-pin",
                class: "h-4 w-4 shrink-0 text-text-muted",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.location)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.vacancy.salary) {
              _push2(`<div class="flex items-center gap-2 text-body font-semibold text-text-success"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-wallet",
                class: "h-4 w-4 shrink-0",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.salary)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.vacancy.employmentType) {
              _push2(`<div class="flex items-center gap-2 text-caption text-text-muted"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-briefcase",
                class: "h-4 w-4 shrink-0",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.employmentType)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.vacancy.experience) {
              _push2(`<div class="flex items-center gap-2 text-caption text-text-muted"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-award",
                class: "h-4 w-4 shrink-0",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Опыт: ${serverRenderer_cjs_prodExports.ssrInterpolate(__props.vacancy.experience)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.vacancy.skills?.length) {
              _push2(`<div class="flex flex-wrap gap-2 mb-5"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(__props.vacancy.skills.slice(0, 4), (skill, skillIndex) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                  key: skillIndex,
                  color: "neutral",
                  variant: "subtle",
                  size: "sm"
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(skill)}`);
                    } else {
                      return [
                        vueExports.createTextVNode(vueExports.toDisplayString(skill), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex gap-3 mt-auto pt-4 border-t border-border-default"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Откликнуться",
              "aria-label": "Откликнуться на вакансию: " + __props.vacancy.title,
              color: "primary",
              variant: "solid",
              class: "flex-2 justify-center",
              onClick: ($event) => _ctx.$emit("apply", __props.vacancy)
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Подробнее",
              "aria-label": "Подробнее о вакансии: " + __props.vacancy.title,
              color: "primary",
              variant: "outline",
              class: "flex-1 justify-center",
              to: __props.vacancy.detailsLink
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "flex flex-col h-full p-4 sm:p-6" }, [
                vueExports.createVNode("div", { class: "flex justify-between items-start gap-3 mb-4" }, [
                  vueExports.createVNode("div", { class: "min-w-0 flex-1" }, [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary mb-2 text-balance" }, vueExports.toDisplayString(__props.vacancy.title), 1),
                    vueExports.createVNode("div", { class: "flex items-center gap-2 text-caption text-text-muted" }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-building-2",
                        class: "h-4 w-4 shrink-0",
                        "aria-hidden": "true"
                      }),
                      vueExports.createVNode("span", { class: "truncate" }, vueExports.toDisplayString(__props.vacancy.company || __props.vacancy.branch || "Администрация Сургутского района"), 1)
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex flex-col items-end gap-2 shrink-0" }, [
                    __props.vacancy.isNew ? (vueExports.openBlock(), vueExports.createBlock(_component_UBadge, {
                      key: 0,
                      color: "primary",
                      variant: "subtle",
                      size: "sm"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(" Новое ")
                      ]),
                      _: 1
                    })) : vueExports.createCommentVNode("", true),
                    vueExports.unref(formattedDate) ? (vueExports.openBlock(), vueExports.createBlock("time", {
                      key: 1,
                      datetime: __props.vacancy.created_at,
                      class: "text-caption text-text-muted whitespace-nowrap"
                    }, vueExports.toDisplayString(vueExports.unref(formattedDate)), 9, ["datetime"])) : vueExports.createCommentVNode("", true)
                  ])
                ]),
                vueExports.createVNode("div", { class: "space-y-2.5 mb-4 flex-1" }, [
                  __props.vacancy.location ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-2 text-body text-text-secondary"
                  }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-map-pin",
                      class: "h-4 w-4 shrink-0 text-text-muted",
                      "aria-hidden": "true"
                    }),
                    vueExports.createVNode("span", null, vueExports.toDisplayString(__props.vacancy.location), 1)
                  ])) : vueExports.createCommentVNode("", true),
                  __props.vacancy.salary ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    class: "flex items-center gap-2 text-body font-semibold text-text-success"
                  }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-wallet",
                      class: "h-4 w-4 shrink-0",
                      "aria-hidden": "true"
                    }),
                    vueExports.createVNode("span", null, vueExports.toDisplayString(__props.vacancy.salary), 1)
                  ])) : vueExports.createCommentVNode("", true),
                  __props.vacancy.employmentType ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 2,
                    class: "flex items-center gap-2 text-caption text-text-muted"
                  }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-briefcase",
                      class: "h-4 w-4 shrink-0",
                      "aria-hidden": "true"
                    }),
                    vueExports.createVNode("span", null, vueExports.toDisplayString(__props.vacancy.employmentType), 1)
                  ])) : vueExports.createCommentVNode("", true),
                  __props.vacancy.experience ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 3,
                    class: "flex items-center gap-2 text-caption text-text-muted"
                  }, [
                    vueExports.createVNode(_component_UIcon, {
                      name: "i-lucide-award",
                      class: "h-4 w-4 shrink-0",
                      "aria-hidden": "true"
                    }),
                    vueExports.createVNode("span", null, "Опыт: " + vueExports.toDisplayString(__props.vacancy.experience), 1)
                  ])) : vueExports.createCommentVNode("", true)
                ]),
                __props.vacancy.skills?.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap gap-2 mb-5"
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.vacancy.skills.slice(0, 4), (skill, skillIndex) => {
                    return vueExports.openBlock(), vueExports.createBlock(_component_UBadge, {
                      key: skillIndex,
                      color: "neutral",
                      variant: "subtle",
                      size: "sm"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(vueExports.toDisplayString(skill), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("div", { class: "flex gap-3 mt-auto pt-4 border-t border-border-default" }, [
                  vueExports.createVNode(_component_UButton, {
                    label: "Откликнуться",
                    "aria-label": "Откликнуться на вакансию: " + __props.vacancy.title,
                    color: "primary",
                    variant: "solid",
                    class: "flex-2 justify-center",
                    onClick: ($event) => _ctx.$emit("apply", __props.vacancy)
                  }, null, 8, ["aria-label", "onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    label: "Подробнее",
                    "aria-label": "Подробнее о вакансии: " + __props.vacancy.title,
                    color: "primary",
                    variant: "outline",
                    class: "flex-1 justify-center",
                    to: __props.vacancy.detailsLink
                  }, null, 8, ["aria-label", "to"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VacancyCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VacancyCard = Object.assign(_sfc_main$1, { __name: "VacancyCard" });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VacancySubscribeForm",
  __ssrInlineRender: true,
  props: {
    initialBranch: {
      type: String,
      default: ""
    },
    /** Встроенный блок без внешнего контейнера страницы */
    embedded: {
      type: Boolean,
      default: false
    },
    /** Промо-раскладка для главной: текст слева, форма справа */
    promo: {
      type: Boolean,
      default: false
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const config = useRuntimeConfig();
    const toast = useToast();
    const loading = vueExports.ref(false);
    const form = vueExports.reactive({
      email: "",
      branch: props.initialBranch,
      work_schedule: null,
      required_experience: null,
      job_type: null,
      consentPersonalData: false
    });
    vueExports.watch(() => props.initialBranch, (value) => {
      if (value) form.branch = value;
    });
    const { data: workSchedules } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("sub-ws", () => $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/work_schedule/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const { data: experiences } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("sub-exp", () => $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/required_experience/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const { data: jobTypes } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("sub-jt", () => $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/job_type/`), { server: false })), __temp = await __temp, __restore(), __temp);
    const toOptions = (items) => (items ?? []).map((i) => ({ label: i.name, value: i.id }));
    const workScheduleOptions = vueExports.computed(() => toOptions(workSchedules.value));
    const experienceOptions = vueExports.computed(() => toOptions(experiences.value));
    const jobTypeOptions = vueExports.computed(() => toOptions(jobTypes.value));
    function validate(state) {
      const errors = [];
      if (!state.email?.trim()) errors.push({ name: "email", message: "Укажите email" });
      if (!state.consentPersonalData) errors.push({ name: "consentPersonalData", message: "Необходимо согласие" });
      return errors;
    }
    async function onSubmit() {
      loading.value = true;
      try {
        await $fetch(`${config.public.apiBaseUrl}/api/vacancy-subscribe/`, {
          method: "POST",
          body: {
            email: form.email.trim(),
            branch: form.branch.trim(),
            work_schedule: form.work_schedule || null,
            required_experience: form.required_experience || null,
            job_type: form.job_type || null
          }
        });
        toast.add({
          title: "Подписка оформлена",
          description: "Уведомления о новых вакансиях будут приходить на указанный email.",
          color: "success"
        });
        form.email = "";
        form.branch = props.initialBranch;
        form.work_schedule = null;
        form.required_experience = null;
        form.job_type = null;
        form.consentPersonalData = false;
      } catch {
        toast.add({
          title: "Не удалось оформить подписку",
          description: "Проверьте данные и попробуйте снова",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSurface = __nuxt_component_7;
      const _component_UBadge = _sfc_main$i;
      const _component_UIcon = _sfc_main$A;
      const _component_UForm = _sfc_main$2$1;
      const _component_UFormField = _sfc_main$1$1;
      const _component_UInput = _sfc_main$d;
      const _component_USelect = _sfc_main$3;
      const _component_UCheckbox = _sfc_main$1$2;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: __props.embedded ? void 0 : "ds-container py-8 lg:py-10"
      }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
        elevation: __props.promo ? "sm" : "sm",
        padding: __props.promo ? "lg" : "lg",
        class: __props.promo ? "ring-1 ring-border-brand/30" : void 0
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.promo ? "grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-start" : "max-w-2xl")}"${_scopeId}>`);
            if (__props.promo) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                color: "primary",
                variant: "subtle",
                size: "sm",
                class: "mb-3"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Уведомления `);
                  } else {
                    return [
                      vueExports.createTextVNode(" Уведомления ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<h2 class="text-h2 text-text-primary text-balance mb-3"${_scopeId}> Подписка на новые вакансии </h2><p class="text-body text-text-secondary mb-6 text-pretty"${_scopeId}> Укажите email и критерии — мы сообщим о публикации подходящих вакансий в администрации района. </p><ul class="space-y-3 text-body text-text-secondary"${_scopeId}><li class="flex items-start gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-bell",
                class: "h-5 w-5 shrink-0 text-primary-500 mt-0.5",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Уведомления только по выбранным критериям</span></li><li class="flex items-start gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-shield-check",
                class: "h-5 w-5 shrink-0 text-primary-500 mt-0.5",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Данные обрабатываются в соответствии с 152-ФЗ</span></li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}>`);
            if (!__props.promo) {
              _push2(`<!--[--><h2 class="text-h2 text-text-primary mb-2"${_scopeId}> Подписка на новые вакансии </h2><p class="text-body text-text-secondary mb-6"${_scopeId}> Укажите email и критерии — мы сообщим о публикации подходящих вакансий </p><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UForm, {
              state: vueExports.unref(form),
              validate,
              class: "space-y-4",
              onSubmit
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                    label: "Email",
                    name: "email",
                    required: ""
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                          modelValue: vueExports.unref(form).email,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                          type: "email",
                          placeholder: "example@email.com",
                          autocomplete: "email"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UInput, {
                            modelValue: vueExports.unref(form).email,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                            type: "email",
                            placeholder: "example@email.com",
                            autocomplete: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                    label: "Орган / отдел (необязательно)",
                    name: "branch"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                          modelValue: vueExports.unref(form).branch,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).branch = $event,
                          placeholder: "Например: Департамент образования"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UInput, {
                            modelValue: vueExports.unref(form).branch,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).branch = $event,
                            placeholder: "Например: Департамент образования"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                    label: "График работы",
                    name: "work_schedule"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_USelect, {
                          modelValue: vueExports.unref(form).work_schedule,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).work_schedule = $event,
                          items: vueExports.unref(workScheduleOptions),
                          placeholder: "Любой",
                          "value-key": "value"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).work_schedule,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).work_schedule = $event,
                            items: vueExports.unref(workScheduleOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                    label: "Опыт работы",
                    name: "required_experience"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_USelect, {
                          modelValue: vueExports.unref(form).required_experience,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).required_experience = $event,
                          items: vueExports.unref(experienceOptions),
                          placeholder: "Любой",
                          "value-key": "value"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).required_experience,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).required_experience = $event,
                            items: vueExports.unref(experienceOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                    label: "Тип должности",
                    name: "job_type"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_USelect, {
                          modelValue: vueExports.unref(form).job_type,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).job_type = $event,
                          items: vueExports.unref(jobTypeOptions),
                          placeholder: "Любой",
                          "value-key": "value"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).job_type,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).job_type = $event,
                            items: vueExports.unref(jobTypeOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentPersonalData" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                          modelValue: vueExports.unref(form).consentPersonalData,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-text-secondary"${_scopeId4}> Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ </span>`);
                            } else {
                              return [
                                vueExports.createVNode("span", { class: "text-sm text-text-secondary" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: vueExports.unref(form).consentPersonalData,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-sm text-text-secondary" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    label: "Подписаться",
                    color: "primary",
                    loading: vueExports.unref(loading)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UFormField, {
                      label: "Email",
                      name: "email",
                      required: ""
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UInput, {
                          modelValue: vueExports.unref(form).email,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                          type: "email",
                          placeholder: "example@email.com",
                          autocomplete: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_component_UFormField, {
                      label: "Орган / отдел (необязательно)",
                      name: "branch"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UInput, {
                          modelValue: vueExports.unref(form).branch,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).branch = $event,
                          placeholder: "Например: Департамент образования"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                      vueExports.createVNode(_component_UFormField, {
                        label: "График работы",
                        name: "work_schedule"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).work_schedule,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).work_schedule = $event,
                            items: vueExports.unref(workScheduleOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, {
                        label: "Опыт работы",
                        name: "required_experience"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).required_experience,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).required_experience = $event,
                            items: vueExports.unref(experienceOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, {
                        label: "Тип должности",
                        name: "job_type"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_USelect, {
                            modelValue: vueExports.unref(form).job_type,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).job_type = $event,
                            items: vueExports.unref(jobTypeOptions),
                            placeholder: "Любой",
                            "value-key": "value"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      })
                    ]),
                    vueExports.createVNode(_component_UFormField, { name: "consentPersonalData" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UCheckbox, {
                          modelValue: vueExports.unref(form).consentPersonalData,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                          required: ""
                        }, {
                          label: vueExports.withCtx(() => [
                            vueExports.createVNode("span", { class: "text-sm text-text-secondary" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_component_UButton, {
                      type: "submit",
                      label: "Подписаться",
                      color: "primary",
                      loading: vueExports.unref(loading)
                    }, null, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", {
                class: __props.promo ? "grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-start" : "max-w-2xl"
              }, [
                __props.promo ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                  vueExports.createVNode(_component_UBadge, {
                    color: "primary",
                    variant: "subtle",
                    size: "sm",
                    class: "mb-3"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Уведомления ")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode("h2", { class: "text-h2 text-text-primary text-balance mb-3" }, " Подписка на новые вакансии "),
                  vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6 text-pretty" }, " Укажите email и критерии — мы сообщим о публикации подходящих вакансий в администрации района. "),
                  vueExports.createVNode("ul", { class: "space-y-3 text-body text-text-secondary" }, [
                    vueExports.createVNode("li", { class: "flex items-start gap-2" }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-bell",
                        class: "h-5 w-5 shrink-0 text-primary-500 mt-0.5",
                        "aria-hidden": "true"
                      }),
                      vueExports.createVNode("span", null, "Уведомления только по выбранным критериям")
                    ]),
                    vueExports.createVNode("li", { class: "flex items-start gap-2" }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-shield-check",
                        class: "h-5 w-5 shrink-0 text-primary-500 mt-0.5",
                        "aria-hidden": "true"
                      }),
                      vueExports.createVNode("span", null, "Данные обрабатываются в соответствии с 152-ФЗ")
                    ])
                  ])
                ])) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("div", null, [
                  !__props.promo ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                    vueExports.createVNode("h2", { class: "text-h2 text-text-primary mb-2" }, " Подписка на новые вакансии "),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mb-6" }, " Укажите email и критерии — мы сообщим о публикации подходящих вакансий ")
                  ], 64)) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(_component_UForm, {
                    state: vueExports.unref(form),
                    validate,
                    class: "space-y-4",
                    onSubmit
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UFormField, {
                        label: "Email",
                        name: "email",
                        required: ""
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UInput, {
                            modelValue: vueExports.unref(form).email,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                            type: "email",
                            placeholder: "example@email.com",
                            autocomplete: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, {
                        label: "Орган / отдел (необязательно)",
                        name: "branch"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UInput, {
                            modelValue: vueExports.unref(form).branch,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).branch = $event,
                            placeholder: "Например: Департамент образования"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                        vueExports.createVNode(_component_UFormField, {
                          label: "График работы",
                          name: "work_schedule"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_component_USelect, {
                              modelValue: vueExports.unref(form).work_schedule,
                              "onUpdate:modelValue": ($event) => vueExports.unref(form).work_schedule = $event,
                              items: vueExports.unref(workScheduleOptions),
                              placeholder: "Любой",
                              "value-key": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_component_UFormField, {
                          label: "Опыт работы",
                          name: "required_experience"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_component_USelect, {
                              modelValue: vueExports.unref(form).required_experience,
                              "onUpdate:modelValue": ($event) => vueExports.unref(form).required_experience = $event,
                              items: vueExports.unref(experienceOptions),
                              placeholder: "Любой",
                              "value-key": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_component_UFormField, {
                          label: "Тип должности",
                          name: "job_type"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_component_USelect, {
                              modelValue: vueExports.unref(form).job_type,
                              "onUpdate:modelValue": ($event) => vueExports.unref(form).job_type = $event,
                              items: vueExports.unref(jobTypeOptions),
                              placeholder: "Любой",
                              "value-key": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        })
                      ]),
                      vueExports.createVNode(_component_UFormField, { name: "consentPersonalData" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UCheckbox, {
                            modelValue: vueExports.unref(form).consentPersonalData,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                            required: ""
                          }, {
                            label: vueExports.withCtx(() => [
                              vueExports.createVNode("span", { class: "text-sm text-text-secondary" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UButton, {
                        type: "submit",
                        label: "Подписаться",
                        color: "primary",
                        loading: vueExports.unref(loading)
                      }, null, 8, ["loading"])
                    ]),
                    _: 1
                  }, 8, ["state"])
                ])
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VacancySubscribeForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "VacancySubscribeForm" });

export { VacancyCard as V, __nuxt_component_4 as _, __nuxt_component_8 as a };
//# sourceMappingURL=VacancySubscribeForm-D124Heyw.mjs.map
