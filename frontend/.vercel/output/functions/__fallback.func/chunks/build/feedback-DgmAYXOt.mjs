import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { u as useHead, v as vueExports, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, g as _sfc_main$u, h as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_7 } from './Surface-X0lNFFsI.mjs';
import { b as _sfc_main$2, a as _sfc_main$1, _ as _sfc_main$3 } from './Textarea-BZalJ9Lx.mjs';
import { _ as _sfc_main$4 } from './FileUpload-D2vDTnAm.mjs';
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
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Обратная связь" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Обратная связь" });
    const config = useRuntimeConfig();
    const formLoading = vueExports.ref(false);
    const formSuccess = vueExports.ref("");
    const formError = vueExports.ref("");
    const formState = vueExports.reactive({
      message: "",
      photo: null
    });
    const validateForm = (state) => {
      const errors = [];
      if (!state.message?.trim()) errors.push({ name: "message", message: "Введите сообщение" });
      return errors;
    };
    const submitFeedback = async () => {
      formLoading.value = true;
      formSuccess.value = "";
      formError.value = "";
      try {
        const formData = new FormData();
        formData.append("message", formState.message);
        if (formState.photo) {
          formData.append("photo", formState.photo);
        }
        const data = await $fetch(`${config.public.apiBaseUrl}/api/submit-feedback/`, {
          method: "POST",
          body: formData
        });
        formSuccess.value = data.message;
        formState.message = "";
        formState.photo = null;
      } catch (error) {
        if (error.data?.error) {
          formError.value = error.data.error;
        } else {
          formError.value = "Произошла ошибка при отправке. Попробуйте позже.";
        }
      } finally {
        formLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_DsSurface = __nuxt_component_7;
      const _component_UForm = _sfc_main$2;
      const _component_UFormField = _sfc_main$1;
      const _component_UTextarea = _sfc_main$3;
      const _component_UFileUpload = _sfc_main$4;
      const _component_UButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "compact",
        title: "Обратная связь",
        description: "Вопросы, предложения и замечания к работе кадрового портала"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "sm",
              padding: "lg",
              class: "mb-6"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-body-lg text-text-primary mb-6"${_scopeId2}> Если у вас есть вопросы, предложения или замечания к работе кадрового портала, пожалуйста, заполните форму ниже. Мы обязательно рассмотрим ваше обращение. </p>`);
                  if (vueExports.unref(formSuccess)) {
                    _push3(`<div role="status" aria-live="polite" class="mb-6 p-4 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-lg text-text-primary"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(formSuccess))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(formError)) {
                    _push3(`<div role="alert" aria-live="assertive" class="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(formError))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UForm, {
                    state: vueExports.unref(formState),
                    validate: validateForm,
                    class: "space-y-5",
                    onSubmit: submitFeedback
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                          label: "Сообщение",
                          name: "message",
                          required: ""
                        }, {
                          default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTextarea, {
                                modelValue: vueExports.unref(formState).message,
                                "onUpdate:modelValue": ($event) => vueExports.unref(formState).message = $event,
                                rows: 5,
                                placeholder: "Опишите ваш вопрос или предложение"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vueExports.createVNode(_component_UTextarea, {
                                  modelValue: vueExports.unref(formState).message,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(formState).message = $event,
                                  rows: 5,
                                  placeholder: "Опишите ваш вопрос или предложение"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
                          label: "Фото (необязательно)",
                          name: "photo"
                        }, {
                          default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFileUpload, {
                                modelValue: vueExports.unref(formState).photo,
                                "onUpdate:modelValue": ($event) => vueExports.unref(formState).photo = $event,
                                accept: "image/*",
                                label: "Прикрепить изображение",
                                description: "JPG, PNG или GIF"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vueExports.createVNode(_component_UFileUpload, {
                                  modelValue: vueExports.unref(formState).photo,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(formState).photo = $event,
                                  accept: "image/*",
                                  label: "Прикрепить изображение",
                                  description: "JPG, PNG или GIF"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-end gap-3 pt-2"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                          label: "Отправить",
                          color: "primary",
                          type: "submit",
                          loading: vueExports.unref(formLoading)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode(_component_UFormField, {
                            label: "Сообщение",
                            name: "message",
                            required: ""
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_component_UTextarea, {
                                modelValue: vueExports.unref(formState).message,
                                "onUpdate:modelValue": ($event) => vueExports.unref(formState).message = $event,
                                rows: 5,
                                placeholder: "Опишите ваш вопрос или предложение"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          vueExports.createVNode(_component_UFormField, {
                            label: "Фото (необязательно)",
                            name: "photo"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_component_UFileUpload, {
                                modelValue: vueExports.unref(formState).photo,
                                "onUpdate:modelValue": ($event) => vueExports.unref(formState).photo = $event,
                                accept: "image/*",
                                label: "Прикрепить изображение",
                                description: "JPG, PNG или GIF"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          vueExports.createVNode("div", { class: "flex justify-end gap-3 pt-2" }, [
                            vueExports.createVNode(_component_UButton, {
                              label: "Отправить",
                              color: "primary",
                              type: "submit",
                              loading: vueExports.unref(formLoading)
                            }, null, 8, ["loading"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode("p", { class: "text-body-lg text-text-primary mb-6" }, " Если у вас есть вопросы, предложения или замечания к работе кадрового портала, пожалуйста, заполните форму ниже. Мы обязательно рассмотрим ваше обращение. "),
                    vueExports.unref(formSuccess) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      role: "status",
                      "aria-live": "polite",
                      class: "mb-6 p-4 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-lg text-text-primary"
                    }, vueExports.toDisplayString(vueExports.unref(formSuccess)), 1)) : vueExports.createCommentVNode("", true),
                    vueExports.unref(formError) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      role: "alert",
                      "aria-live": "assertive",
                      class: "mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
                    }, vueExports.toDisplayString(vueExports.unref(formError)), 1)) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode(_component_UForm, {
                      state: vueExports.unref(formState),
                      validate: validateForm,
                      class: "space-y-5",
                      onSubmit: submitFeedback
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_component_UFormField, {
                          label: "Сообщение",
                          name: "message",
                          required: ""
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_component_UTextarea, {
                              modelValue: vueExports.unref(formState).message,
                              "onUpdate:modelValue": ($event) => vueExports.unref(formState).message = $event,
                              rows: 5,
                              placeholder: "Опишите ваш вопрос или предложение"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_component_UFormField, {
                          label: "Фото (необязательно)",
                          name: "photo"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_component_UFileUpload, {
                              modelValue: vueExports.unref(formState).photo,
                              "onUpdate:modelValue": ($event) => vueExports.unref(formState).photo = $event,
                              accept: "image/*",
                              label: "Прикрепить изображение",
                              description: "JPG, PNG или GIF"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode("div", { class: "flex justify-end gap-3 pt-2" }, [
                          vueExports.createVNode(_component_UButton, {
                            label: "Отправить",
                            color: "primary",
                            type: "submit",
                            loading: vueExports.unref(formLoading)
                          }, null, 8, ["loading"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_DsSurface, {
                elevation: "sm",
                padding: "lg",
                class: "mb-6"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("p", { class: "text-body-lg text-text-primary mb-6" }, " Если у вас есть вопросы, предложения или замечания к работе кадрового портала, пожалуйста, заполните форму ниже. Мы обязательно рассмотрим ваше обращение. "),
                  vueExports.unref(formSuccess) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    role: "status",
                    "aria-live": "polite",
                    class: "mb-6 p-4 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-lg text-text-primary"
                  }, vueExports.toDisplayString(vueExports.unref(formSuccess)), 1)) : vueExports.createCommentVNode("", true),
                  vueExports.unref(formError) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    role: "alert",
                    "aria-live": "assertive",
                    class: "mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
                  }, vueExports.toDisplayString(vueExports.unref(formError)), 1)) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(_component_UForm, {
                    state: vueExports.unref(formState),
                    validate: validateForm,
                    class: "space-y-5",
                    onSubmit: submitFeedback
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_component_UFormField, {
                        label: "Сообщение",
                        name: "message",
                        required: ""
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UTextarea, {
                            modelValue: vueExports.unref(formState).message,
                            "onUpdate:modelValue": ($event) => vueExports.unref(formState).message = $event,
                            rows: 5,
                            placeholder: "Опишите ваш вопрос или предложение"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_component_UFormField, {
                        label: "Фото (необязательно)",
                        name: "photo"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_component_UFileUpload, {
                            modelValue: vueExports.unref(formState).photo,
                            "onUpdate:modelValue": ($event) => vueExports.unref(formState).photo = $event,
                            accept: "image/*",
                            label: "Прикрепить изображение",
                            description: "JPG, PNG или GIF"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode("div", { class: "flex justify-end gap-3 pt-2" }, [
                        vueExports.createVNode(_component_UButton, {
                          label: "Отправить",
                          color: "primary",
                          type: "submit",
                          loading: vueExports.unref(formLoading)
                        }, null, 8, ["loading"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["state"])
                ]),
                _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=feedback-DgmAYXOt.mjs.map
