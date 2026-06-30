import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { _ as __nuxt_component_5 } from './EmptyState-ya4bNInt.mjs';
import { v as vueExports, u as useHead, s as serverRenderer_cjs_prodExports, d as useAsyncData, h as useRuntimeConfig } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "ContactsTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: allStaff, pending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "contacts-staff",
      () => $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/staff/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const groupedStaff = vueExports.computed(() => {
      const items = allStaff.value ?? [];
      const groups = {};
      for (const member of items) {
        const key = member.branch_name || "__none__";
        if (!groups[key]) {
          groups[key] = {
            branchId: key,
            branchName: member.branch_name || "Без отделения",
            branchAddress: member.branch_address || "",
            members: []
          };
        }
        groups[key].members.push(member);
      }
      return Object.values(groups);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsEmptyState = __nuxt_component_5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "ds-container py-8" }, _attrs))}>`);
      if (!vueExports.unref(pending) && vueExports.unref(groupedStaff).length === 0) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
          icon: "i-lucide-phone-off",
          title: "Контакты не найдены",
          description: "Данные о сотрудниках временно недоступны"
        }, null, _parent));
      } else {
        _push(`<div class="overflow-x-auto"><table class="w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-800"><th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">ФИО</th><th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Должность</th><th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Телефон</th><th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Email</th><th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Кабинет</th></tr></thead><tbody><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(groupedStaff), (group) => {
          _push(`<!--[--><tr class="bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-md hover:shadow-green-500/20"><td colspan="5" class="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400">${serverRenderer_cjs_prodExports.ssrInterpolate(group.branchName)} `);
          if (group.branchAddress) {
            _push(`<span class="font-normal text-gray-500 dark:text-gray-400">(${serverRenderer_cjs_prodExports.ssrInterpolate(group.branchAddress)})</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td></tr><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(group.members, (member) => {
            _push(`<tr class="bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-md hover:shadow-green-500/20"><td class="px-4 py-3 text-sm text-gray-900 dark:text-white">${serverRenderer_cjs_prodExports.ssrInterpolate(member.surname)} ${serverRenderer_cjs_prodExports.ssrInterpolate(member.name)} ${serverRenderer_cjs_prodExports.ssrInterpolate(member.patronym)}</td><td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(member.role)}</td><td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(member.phone)}</td><td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(member.email)}</td><td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(member.cabinet_number)}</td></tr>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactsTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Контакты" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Контакты" });
    const hero = useHeroImage("contacts");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_ContactsTable = _sfc_main$1;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Контакты",
        description: "Телефоны, адреса и режим работы отделов кадровой политики администрации Сургутского района",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ContactsTable, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacts-CztfnFdc.mjs.map
