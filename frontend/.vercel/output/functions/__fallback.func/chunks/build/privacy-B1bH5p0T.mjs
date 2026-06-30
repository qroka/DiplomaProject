import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { v as vueExports, u as useHead, s as serverRenderer_cjs_prodExports, e as _sfc_main$n, a as __nuxt_component_0$1 } from './server.mjs';
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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Политика конфиденциальности" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Политика конфиденциальности" });
    const hero = useHeroImage("privacy");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_UContainer = _sfc_main$n;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Политика конфиденциальности",
        description: "Политика обработки и защиты персональных данных",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, { class: "py-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ds-prose max-w-none"${_scopeId}><h2${_scopeId}>1. Общие положения</h2><p${_scopeId}>Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Администрации Сургутского района.</p><h2${_scopeId}>2. Сбор персональных данных</h2><p${_scopeId}>Мы собираем персональные данные только когда вы добровольно предоставляете их нам, например, при заполнении формы отклика на вакансию.</p><h2${_scopeId}>3. Использование персональных данных</h2><p${_scopeId}>Собранные данные используются исключительно для целей, связанных с рассмотрением вашей кандидатуры на вакантную должность.</p><h2${_scopeId}>4. Защита данных</h2><p${_scopeId}>Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа.</p><h2${_scopeId}>5. Контакты</h2><p${_scopeId}>По вопросам обработки персональных данных обращайтесь через раздел `);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/contacts" }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Контакты`);
                } else {
                  return [
                    vueExports.createTextVNode("Контакты")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`.</p></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "ds-prose max-w-none" }, [
                vueExports.createVNode("h2", null, "1. Общие положения"),
                vueExports.createVNode("p", null, "Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Администрации Сургутского района."),
                vueExports.createVNode("h2", null, "2. Сбор персональных данных"),
                vueExports.createVNode("p", null, "Мы собираем персональные данные только когда вы добровольно предоставляете их нам, например, при заполнении формы отклика на вакансию."),
                vueExports.createVNode("h2", null, "3. Использование персональных данных"),
                vueExports.createVNode("p", null, "Собранные данные используются исключительно для целей, связанных с рассмотрением вашей кандидатуры на вакантную должность."),
                vueExports.createVNode("h2", null, "4. Защита данных"),
                vueExports.createVNode("p", null, "Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа."),
                vueExports.createVNode("h2", null, "5. Контакты"),
                vueExports.createVNode("p", null, [
                  vueExports.createTextVNode("По вопросам обработки персональных данных обращайтесь через раздел "),
                  vueExports.createVNode(_component_NuxtLink, { to: "/contacts" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode("Контакты")
                    ]),
                    _: 1
                  }),
                  vueExports.createTextVNode(".")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-B1bH5p0T.mjs.map
