import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './SectionHeading-CEKIZ9kY.mjs';
import { _ as __nuxt_component_8 } from './Surface-BpUAMKsj.mjs';
import { _ as __nuxt_component_1 } from './SectionDivider-Bm4E2pGh.mjs';
import { v as vueExports, n as useSeoMeta, s as serverRenderer_cjs_prodExports, g as _sfc_main$u } from './server.mjs';
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
  __name: "design-system",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Дизайн-система v2",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsSection = __nuxt_component_2;
      const _component_DsSectionHeading = __nuxt_component_3;
      const _component_DsSurface = __nuxt_component_8;
      const _component_DsSectionDivider = __nuxt_component_1;
      const _component_UButton = _sfc_main$u;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, {
        spacing: "lg",
        variant: "brand"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl"${_scopeId}><h1 class="text-display text-text-inverse text-balance"${_scopeId}> Дизайн-система v2 </h1><p class="text-body-lg text-text-inverse/80 mt-4 text-pretty"${_scopeId}> Тестовая страница примитивов ds/*. Используется для проверки токенов перед миграцией страниц. </p></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "max-w-3xl" }, [
                vueExports.createVNode("h1", { class: "text-display text-text-inverse text-balance" }, " Дизайн-система v2 "),
                vueExports.createVNode("p", { class: "text-body-lg text-text-inverse/80 mt-4 text-pretty" }, " Тестовая страница примитивов ds/*. Используется для проверки токенов перед миграцией страниц. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Типографика",
              description: "Шкала PT Sans: display, h1-h3, body, caption",
              "heading-id": "typography"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-4"${_scopeId}><p class="text-display text-text-primary"${_scopeId}>Display — 48px desktop</p><p class="text-h1 text-text-primary"${_scopeId}>H1 — заголовок страницы</p><p class="text-h2 text-text-accent"${_scopeId}>H2 — заголовок секции</p><p class="text-h3 text-text-primary"${_scopeId}>H3 — подзаголовок карточки</p><p class="text-body text-text-secondary"${_scopeId}>Body — основной текст портала кадровой политики.</p><p class="text-caption text-text-muted"${_scopeId}>Caption — метаданные и даты</p></div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Типографика",
                description: "Шкала PT Sans: display, h1-h3, body, caption",
                "heading-id": "typography"
              }),
              vueExports.createVNode("div", { class: "grid gap-4" }, [
                vueExports.createVNode("p", { class: "text-display text-text-primary" }, "Display — 48px desktop"),
                vueExports.createVNode("p", { class: "text-h1 text-text-primary" }, "H1 — заголовок страницы"),
                vueExports.createVNode("p", { class: "text-h2 text-text-accent" }, "H2 — заголовок секции"),
                vueExports.createVNode("p", { class: "text-h3 text-text-primary" }, "H3 — подзаголовок карточки"),
                vueExports.createVNode("p", { class: "text-body text-text-secondary" }, "Body — основной текст портала кадровой политики."),
                vueExports.createVNode("p", { class: "text-caption text-text-muted" }, "Caption — метаданные и даты")
              ])
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
              title: "Поверхности",
              description: "Непрозрачные карточки вместо glass по умолчанию",
              "heading-id": "surfaces"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid-cards"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "xs",
              padding: "lg"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-h3 text-text-primary"${_scopeId2}>Elevation xs</h3><p class="text-body text-text-secondary mt-2"${_scopeId2}>Тонкая тень для вложенных блоков.</p>`);
                } else {
                  return [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation xs"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Тонкая тень для вложенных блоков.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "sm",
              padding: "lg",
              interactive: ""
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-h3 text-text-primary"${_scopeId2}>Elevation sm + hover</h3><p class="text-body text-text-secondary mt-2"${_scopeId2}>Интерактивная карточка с подъёмом при наведении.</p>`);
                } else {
                  return [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation sm + hover"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Интерактивная карточка с подъёмом при наведении.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSurface, {
              elevation: "md",
              padding: "lg"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-h3 text-text-primary"${_scopeId2}>Elevation md</h3><p class="text-body text-text-secondary mt-2"${_scopeId2}>Акцентные блоки и модальные панели.</p>`);
                } else {
                  return [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation md"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Акцентные блоки и модальные панели.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Поверхности",
                description: "Непрозрачные карточки вместо glass по умолчанию",
                "heading-id": "surfaces"
              }),
              vueExports.createVNode("div", { class: "grid-cards" }, [
                vueExports.createVNode(_component_DsSurface, {
                  elevation: "xs",
                  padding: "lg"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation xs"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Тонкая тень для вложенных блоков.")
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_DsSurface, {
                  elevation: "sm",
                  padding: "lg",
                  interactive: ""
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation sm + hover"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Интерактивная карточка с подъёмом при наведении.")
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_DsSurface, {
                  elevation: "md",
                  padding: "lg"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("h3", { class: "text-h3 text-text-primary" }, "Elevation md"),
                    vueExports.createVNode("p", { class: "text-body text-text-secondary mt-2" }, "Акцентные блоки и модальные панели.")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: "md" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionDivider, {
              label: "Разделитель с подписью",
              variant: "brand"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
              title: "Кнопки (Nuxt UI)",
              description: "Семантика primary / secondary / neutral",
              "heading-id": "buttons"
            }, {
              action: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "outline",
                    to: "/vacancies",
                    label: "Вакансии",
                    class: "min-h-11 font-medium"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_component_UButton, {
                      color: "primary",
                      variant: "outline",
                      to: "/vacancies",
                      label: "Вакансии",
                      class: "min-h-11 font-medium"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "solid",
              label: "Primary",
              class: "min-h-11 font-medium"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "outline",
              label: "Secondary",
              class: "min-h-11 font-medium"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              label: "Neutral",
              class: "min-h-11 font-medium"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              label: "Ghost",
              class: "min-h-11 font-medium"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionDivider, { spacing: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_DsSectionDivider, {
                label: "Разделитель с подписью",
                variant: "brand"
              }),
              vueExports.createVNode(_component_DsSectionHeading, {
                title: "Кнопки (Nuxt UI)",
                description: "Семантика primary / secondary / neutral",
                "heading-id": "buttons"
              }, {
                action: vueExports.withCtx(() => [
                  vueExports.createVNode(_component_UButton, {
                    color: "primary",
                    variant: "outline",
                    to: "/vacancies",
                    label: "Вакансии",
                    class: "min-h-11 font-medium"
                  })
                ]),
                _: 1
              }),
              vueExports.createVNode("div", { class: "flex flex-wrap gap-3" }, [
                vueExports.createVNode(_component_UButton, {
                  color: "primary",
                  variant: "solid",
                  label: "Primary",
                  class: "min-h-11 font-medium"
                }),
                vueExports.createVNode(_component_UButton, {
                  color: "primary",
                  variant: "outline",
                  label: "Secondary",
                  class: "min-h-11 font-medium"
                }),
                vueExports.createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  label: "Neutral",
                  class: "min-h-11 font-medium"
                }),
                vueExports.createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  label: "Ghost",
                  class: "min-h-11 font-medium"
                })
              ]),
              vueExports.createVNode(_component_DsSectionDivider, { spacing: "lg" })
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
            _push2(`<article class="ds-prose"${_scopeId}><h2${_scopeId}>Prose-блок</h2><p${_scopeId}> Длинный текстовый контент ограничен шириной 65 символов для комфортного чтения. Ссылки выделяются цветом акцента. </p><p${_scopeId}><a href="/about"${_scopeId}>О кадровой политике</a> — пример ссылки внутри prose. </p></article>`);
          } else {
            return [
              vueExports.createVNode("article", { class: "ds-prose" }, [
                vueExports.createVNode("h2", null, "Prose-блок"),
                vueExports.createVNode("p", null, " Длинный текстовый контент ограничен шириной 65 символов для комфортного чтения. Ссылки выделяются цветом акцента. "),
                vueExports.createVNode("p", null, [
                  vueExports.createVNode("a", { href: "/about" }, "О кадровой политике"),
                  vueExports.createTextVNode(" — пример ссылки внутри prose. ")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/design-system.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=design-system-DgsFufFV.mjs.map
