import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { u as useHead, b as useRoute, v as vueExports, d as useAsyncData, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, f as _sfc_main$A, h as useRuntimeConfig, i as useToast, o as _sfc_main$d, g as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './Tabs-1OPBbOF8.mjs';
import { b as _sfc_main$2$1, a as _sfc_main$1$1, _ as _sfc_main$4 } from './Textarea-BZalJ9Lx.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$2 } from './InputDate-CSyueQQs.mjs';
import { _ as _sfc_main$5 } from './FileUpload-D2vDTnAm.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PracticeApplicationForm",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const toast = useToast();
    const loading = vueExports.ref(false);
    const form = vueExports.reactive({
      lastName: "",
      firstName: "",
      middleName: "",
      birthDate: null,
      phone: "",
      email: "",
      educationalInstitution: "",
      course: "",
      specialty: "",
      practicePeriod: "",
      preferredDepartment: "",
      comment: "",
      applicationLetter: null,
      consentPersonalData: false
    });
    function validate(state) {
      const errors = [];
      if (!state.lastName?.trim()) errors.push({ name: "lastName", message: "Введите фамилию" });
      if (!state.firstName?.trim()) errors.push({ name: "firstName", message: "Введите имя" });
      if (!state.birthDate) errors.push({ name: "birthDate", message: "Укажите дату рождения" });
      if (!state.phone?.trim()) errors.push({ name: "phone", message: "Введите телефон" });
      if (!state.email?.trim()) errors.push({ name: "email", message: "Введите email" });
      if (!state.educationalInstitution?.trim()) errors.push({ name: "educationalInstitution", message: "Укажите учебное заведение" });
      if (!state.course?.trim()) errors.push({ name: "course", message: "Укажите курс" });
      if (!state.specialty?.trim()) errors.push({ name: "specialty", message: "Укажите специальность" });
      if (!state.practicePeriod?.trim()) errors.push({ name: "practicePeriod", message: "Укажите период практики" });
      if (!state.consentPersonalData) errors.push({ name: "consentPersonalData", message: "Необходимо согласие" });
      return errors;
    }
    function resetForm() {
      form.lastName = "";
      form.firstName = "";
      form.middleName = "";
      form.birthDate = null;
      form.phone = "";
      form.email = "";
      form.educationalInstitution = "";
      form.course = "";
      form.specialty = "";
      form.practicePeriod = "";
      form.preferredDepartment = "";
      form.comment = "";
      form.applicationLetter = null;
      form.consentPersonalData = false;
    }
    async function onSubmit() {
      loading.value = true;
      try {
        const data = new FormData();
        data.append("last_name", form.lastName.trim());
        data.append("first_name", form.firstName.trim());
        if (form.middleName.trim()) data.append("middle_name", form.middleName.trim());
        if (form.birthDate) data.append("birth_date", form.birthDate.toISOString().split("T")[0]);
        data.append("phone", form.phone.trim());
        data.append("email", form.email.trim());
        data.append("educational_institution", form.educationalInstitution.trim());
        data.append("course", form.course.trim());
        data.append("specialty", form.specialty.trim());
        data.append("practice_period", form.practicePeriod.trim());
        if (form.preferredDepartment.trim()) data.append("preferred_department", form.preferredDepartment.trim());
        if (form.comment.trim()) data.append("comment", form.comment.trim());
        if (form.applicationLetter) data.append("application_letter", form.applicationLetter);
        data.append("consent_personal_data", form.consentPersonalData ? "true" : "false");
        await $fetch(`${config.public.apiBaseUrl}/api/youth/practice-apply/`, {
          method: "POST",
          body: data
        });
        toast.add({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами для согласования практики.",
          color: "success"
        });
        resetForm();
      } catch {
        toast.add({
          title: "Не удалось отправить заявку",
          description: "Проверьте данные и попробуйте снова",
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
      const _component_UInputDate = _sfc_main$3;
      const _component_UTextarea = _sfc_main$4;
      const _component_UFileUpload = _sfc_main$5;
      const _component_UCheckbox = _sfc_main$1$2;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-6 lg:p-8" }, _attrs))}><h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2"> Заявка на практику </h3><p class="text-sm text-gray-500 dark:text-gray-400 mb-6"> Заполните форму — специалист свяжется с вами для согласования прохождения практики в администрации Сургутского района. </p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UForm, {
        state: vueExports.unref(form),
        validate,
        class: "space-y-5",
        onSubmit
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Фамилия",
              name: "lastName",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).lastName,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).lastName = $event,
                    placeholder: "Иванов"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).lastName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).lastName = $event,
                      placeholder: "Иванов"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Имя",
              name: "firstName",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).firstName,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).firstName = $event,
                    placeholder: "Иван"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).firstName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).firstName = $event,
                      placeholder: "Иван"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Отчество",
              name: "middleName"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).middleName,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).middleName = $event,
                    placeholder: "Иванович"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).middleName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).middleName = $event,
                      placeholder: "Иванович"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Дата рождения",
              name: "birthDate",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInputDate, {
                    modelValue: vueExports.unref(form).birthDate,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).birthDate = $event,
                    icon: "i-lucide-calendar"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInputDate, {
                      modelValue: vueExports.unref(form).birthDate,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).birthDate = $event,
                      icon: "i-lucide-calendar"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Телефон",
              name: "phone",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).phone,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                    type: "tel",
                    placeholder: "+7 (XXX) XXX-XX-XX"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).phone,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                      type: "tel",
                      placeholder: "+7 (XXX) XXX-XX-XX"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Email",
              name: "email",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).email,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                    type: "email",
                    placeholder: "example@email.com"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).email,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                      type: "email",
                      placeholder: "example@email.com"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Учебное заведение",
              name: "educationalInstitution",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).educationalInstitution,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).educationalInstitution = $event,
                    placeholder: "Полное название вуза / колледжа"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).educationalInstitution,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).educationalInstitution = $event,
                      placeholder: "Полное название вуза / колледжа"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Курс",
              name: "course",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).course,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).course = $event,
                    placeholder: "Например: 3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).course,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).course = $event,
                      placeholder: "Например: 3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Специальность",
              name: "specialty",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).specialty,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).specialty = $event,
                    placeholder: "Направление подготовки"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).specialty,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).specialty = $event,
                      placeholder: "Направление подготовки"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Желаемый период практики",
              name: "practicePeriod",
              required: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).practicePeriod,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).practicePeriod = $event,
                    placeholder: "Например: июнь–июль 2026"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).practicePeriod,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).practicePeriod = $event,
                      placeholder: "Например: июнь–июль 2026"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Желаемое подразделение (необязательно)",
              name: "preferredDepartment"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
                    modelValue: vueExports.unref(form).preferredDepartment,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).preferredDepartment = $event,
                    placeholder: "Орган / управление администрации"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).preferredDepartment,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).preferredDepartment = $event,
                      placeholder: "Орган / управление администрации"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Комментарий",
              name: "comment"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTextarea, {
                    modelValue: vueExports.unref(form).comment,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).comment = $event,
                    rows: 3,
                    placeholder: "Дополнительная информация"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UTextarea, {
                      modelValue: vueExports.unref(form).comment,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).comment = $event,
                      rows: 3,
                      placeholder: "Дополнительная информация"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, {
              label: "Сопроводительное письмо",
              name: "applicationLetter"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFileUpload, {
                    modelValue: vueExports.unref(form).applicationLetter,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).applicationLetter = $event,
                    accept: ".pdf,.doc,.docx",
                    label: "Прикрепить файл",
                    description: "PDF, DOC или DOCX (макс. 10 МБ)"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UFileUpload, {
                      modelValue: vueExports.unref(form).applicationLetter,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).applicationLetter = $event,
                      accept: ".pdf,.doc,.docx",
                      label: "Прикрепить файл",
                      description: "PDF, DOC или DOCX (макс. 10 МБ)"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UFormField, { name: "consentPersonalData" }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UCheckbox, {
                    modelValue: vueExports.unref(form).consentPersonalData,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                    required: ""
                  }, {
                    label: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId3}> Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ </span>`);
                      } else {
                        return [
                          vueExports.createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UCheckbox, {
                      modelValue: vueExports.unref(form).consentPersonalData,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                      required: ""
                    }, {
                      label: vueExports.withCtx(() => [
                        vueExports.createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              type: "submit",
              label: "Отправить заявку",
              color: "primary",
              loading: vueExports.unref(loading)
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                vueExports.createVNode(_component_UFormField, {
                  label: "Фамилия",
                  name: "lastName",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).lastName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).lastName = $event,
                      placeholder: "Иванов"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Имя",
                  name: "firstName",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).firstName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).firstName = $event,
                      placeholder: "Иван"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Отчество",
                  name: "middleName"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).middleName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).middleName = $event,
                      placeholder: "Иванович"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                vueExports.createVNode(_component_UFormField, {
                  label: "Дата рождения",
                  name: "birthDate",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInputDate, {
                      modelValue: vueExports.unref(form).birthDate,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).birthDate = $event,
                      icon: "i-lucide-calendar"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Телефон",
                  name: "phone",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).phone,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                      type: "tel",
                      placeholder: "+7 (XXX) XXX-XX-XX"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
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
                    placeholder: "example@email.com"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UFormField, {
                label: "Учебное заведение",
                name: "educationalInstitution",
                required: ""
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UInput, {
                    modelValue: vueExports.unref(form).educationalInstitution,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).educationalInstitution = $event,
                    placeholder: "Полное название вуза / колледжа"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                vueExports.createVNode(_component_UFormField, {
                  label: "Курс",
                  name: "course",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).course,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).course = $event,
                      placeholder: "Например: 3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UFormField, {
                  label: "Специальность",
                  name: "specialty",
                  required: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(form).specialty,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).specialty = $event,
                      placeholder: "Направление подготовки"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              vueExports.createVNode(_component_UFormField, {
                label: "Желаемый период практики",
                name: "practicePeriod",
                required: ""
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UInput, {
                    modelValue: vueExports.unref(form).practicePeriod,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).practicePeriod = $event,
                    placeholder: "Например: июнь–июль 2026"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UFormField, {
                label: "Желаемое подразделение (необязательно)",
                name: "preferredDepartment"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UInput, {
                    modelValue: vueExports.unref(form).preferredDepartment,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).preferredDepartment = $event,
                    placeholder: "Орган / управление администрации"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UFormField, {
                label: "Комментарий",
                name: "comment"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UTextarea, {
                    modelValue: vueExports.unref(form).comment,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).comment = $event,
                    rows: 3,
                    placeholder: "Дополнительная информация"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UFormField, {
                label: "Сопроводительное письмо",
                name: "applicationLetter"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UFileUpload, {
                    modelValue: vueExports.unref(form).applicationLetter,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).applicationLetter = $event,
                    accept: ".pdf,.doc,.docx",
                    label: "Прикрепить файл",
                    description: "PDF, DOC или DOCX (макс. 10 МБ)"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UFormField, { name: "consentPersonalData" }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UCheckbox, {
                    modelValue: vueExports.unref(form).consentPersonalData,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).consentPersonalData = $event,
                    required: ""
                  }, {
                    label: vueExports.withCtx(() => [
                      vueExports.createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, " Даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ ")
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              vueExports.createVNode(_component_UButton, {
                type: "submit",
                label: "Отправить заявку",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PracticeApplicationForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "PracticeApplicationForm" });
const _sfc_main = {
  __name: "youth",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Муниципальная служба для молодёжи" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Молодёжь" });
    const hero = useHeroImage("youth");
    useRoute();
    const config = useRuntimeConfig();
    const tabItems = [
      { label: "Практика", value: "practice" },
      { label: "Стажировка", value: "internship" },
      { label: "Школьникам", value: "school" }
    ];
    const activeTab = vueExports.ref("practice");
    const { data: info } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "youth-info",
      () => $fetch(`${config.public.apiBaseUrl}/api/youth/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_UTabs = _sfc_main$2;
      const _component_UIcon = _sfc_main$A;
      const _component_PracticeApplicationForm = __nuxt_component_5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Муниципальная служба для молодёжи",
        description: "Популяризация муниципальной службы и ранняя профориентация",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8 lg:py-12" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(info)?.intro) {
              _push2(`<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).intro)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UTabs, {
              modelValue: vueExports.unref(activeTab),
              "onUpdate:modelValue": ($event) => vueExports.isRef(activeTab) ? activeTab.value = $event : null,
              color: "primary",
              variant: "pill",
              size: "lg",
              items: tabItems,
              "unmount-on-hide": false
            }, {
              content: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.value === "practice") {
                    _push3(`<div class="mt-6 space-y-8"${_scopeId2}>`);
                    if (vueExports.unref(info)?.institutionsList?.length) {
                      _push3(`<section${_scopeId2}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4"${_scopeId2}> Учебные заведения, с которыми заключены соглашения </h2><ul class="space-y-2"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(info).institutionsList, (institution) => {
                        _push3(`<li class="flex gap-2 text-gray-700 dark:text-gray-300"${_scopeId2}>`);
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                          name: "i-lucide-graduation-cap",
                          class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(institution)}</span></li>`);
                      });
                      _push3(`<!--]--></ul></section>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (vueExports.unref(info)?.practice_steps) {
                      _push3(`<section${_scopeId2}><h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4"${_scopeId2}> Как попасть на практику в администрации Сургутского района </h2><div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).practice_steps)}</div></section>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_PracticeApplicationForm, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.value === "internship") {
                    _push3(`<div class="mt-6"${_scopeId2}>`);
                    if (vueExports.unref(info)?.internship_content) {
                      _push3(`<div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).internship_content)}</div>`);
                    } else {
                      _push3(`<p class="text-gray-500 dark:text-gray-400"${_scopeId2}> Информация о стажировках будет размещена дополнительно. </p>`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="mt-6"${_scopeId2}>`);
                    if (vueExports.unref(info)?.school_content) {
                      _push3(`<div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(info).school_content)}</div>`);
                    } else {
                      _push3(`<p class="text-gray-500 dark:text-gray-400"${_scopeId2}> Информация для школьников будет размещена дополнительно. </p>`);
                    }
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    item.value === "practice" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "mt-6 space-y-8"
                    }, [
                      vueExports.unref(info)?.institutionsList?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 0 }, [
                        vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-4" }, " Учебные заведения, с которыми заключены соглашения "),
                        vueExports.createVNode("ul", { class: "space-y-2" }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(info).institutionsList, (institution) => {
                            return vueExports.openBlock(), vueExports.createBlock("li", {
                              key: institution,
                              class: "flex gap-2 text-gray-700 dark:text-gray-300"
                            }, [
                              vueExports.createVNode(_component_UIcon, {
                                name: "i-lucide-graduation-cap",
                                class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                              }),
                              vueExports.createVNode("span", null, vueExports.toDisplayString(institution), 1)
                            ]);
                          }), 128))
                        ])
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(info)?.practice_steps ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                        vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-4" }, " Как попасть на практику в администрации Сургутского района "),
                        vueExports.createVNode("div", { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(info).practice_steps), 1)
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.createVNode(_component_PracticeApplicationForm)
                    ])) : item.value === "internship" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "mt-6"
                    }, [
                      vueExports.unref(info)?.internship_content ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                      }, vueExports.toDisplayString(vueExports.unref(info).internship_content), 1)) : (vueExports.openBlock(), vueExports.createBlock("p", {
                        key: 1,
                        class: "text-gray-500 dark:text-gray-400"
                      }, " Информация о стажировках будет размещена дополнительно. "))
                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "mt-6"
                    }, [
                      vueExports.unref(info)?.school_content ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                      }, vueExports.toDisplayString(vueExports.unref(info).school_content), 1)) : (vueExports.openBlock(), vueExports.createBlock("p", {
                        key: 1,
                        class: "text-gray-500 dark:text-gray-400"
                      }, " Информация для школьников будет размещена дополнительно. "))
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.unref(info)?.intro ? (vueExports.openBlock(), vueExports.createBlock("p", {
                key: 0,
                class: "text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl"
              }, vueExports.toDisplayString(vueExports.unref(info).intro), 1)) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(_component_UTabs, {
                modelValue: vueExports.unref(activeTab),
                "onUpdate:modelValue": ($event) => vueExports.isRef(activeTab) ? activeTab.value = $event : null,
                color: "primary",
                variant: "pill",
                size: "lg",
                items: tabItems,
                "unmount-on-hide": false
              }, {
                content: vueExports.withCtx(({ item }) => [
                  item.value === "practice" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "mt-6 space-y-8"
                  }, [
                    vueExports.unref(info)?.institutionsList?.length ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 0 }, [
                      vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-4" }, " Учебные заведения, с которыми заключены соглашения "),
                      vueExports.createVNode("ul", { class: "space-y-2" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(info).institutionsList, (institution) => {
                          return vueExports.openBlock(), vueExports.createBlock("li", {
                            key: institution,
                            class: "flex gap-2 text-gray-700 dark:text-gray-300"
                          }, [
                            vueExports.createVNode(_component_UIcon, {
                              name: "i-lucide-graduation-cap",
                              class: "h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                            }),
                            vueExports.createVNode("span", null, vueExports.toDisplayString(institution), 1)
                          ]);
                        }), 128))
                      ])
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(info)?.practice_steps ? (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                      vueExports.createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white mb-4" }, " Как попасть на практику в администрации Сургутского района "),
                      vueExports.createVNode("div", { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line" }, vueExports.toDisplayString(vueExports.unref(info).practice_steps), 1)
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode(_component_PracticeApplicationForm)
                  ])) : item.value === "internship" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    class: "mt-6"
                  }, [
                    vueExports.unref(info)?.internship_content ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                    }, vueExports.toDisplayString(vueExports.unref(info).internship_content), 1)) : (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 1,
                      class: "text-gray-500 dark:text-gray-400"
                    }, " Информация о стажировках будет размещена дополнительно. "))
                  ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 2,
                    class: "mt-6"
                  }, [
                    vueExports.unref(info)?.school_content ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                    }, vueExports.toDisplayString(vueExports.unref(info).school_content), 1)) : (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 1,
                      class: "text-gray-500 dark:text-gray-400"
                    }, " Информация для школьников будет размещена дополнительно. "))
                  ]))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/youth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=youth-C6Ggpmr9.mjs.map
