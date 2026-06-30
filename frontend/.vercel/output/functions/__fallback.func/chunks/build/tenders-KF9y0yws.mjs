import { _ as __nuxt_component_0 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { u as useHead, s as serverRenderer_cjs_prodExports, v as vueExports, b as useRoute, d as useAsyncData, e as _sfc_main$n, g as _sfc_main$u, f as _sfc_main$A, p as _sfc_main$i, h as useRuntimeConfig, k as useComponentProps, x as useLocale, l as useAppConfig, y as useForwardProps, z as reactivePick, t as tv, q as useForwardExpose, r as useVModel, P as Primitive, w as createContext } from './server.mjs';
import { _ as __nuxt_component_5 } from './EmptyState-ya4bNInt.mjs';
import { _ as _sfc_main$4 } from './Tabs-1OPBbOF8.mjs';
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

var PaginationEllipsis_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationEllipsis",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, { "data-type": "ellipsis" }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = vueExports.createTextVNode("…"))])]),
        _: 3
      }, 16);
    };
  }
});
var PaginationEllipsis_default = PaginationEllipsis_vue_vue_type_script_setup_true_lang_default;
const [injectPaginationRootContext, providePaginationRootContext] = /* @__PURE__ */ createContext("PaginationRoot");
var PaginationRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationRoot",
  props: {
    page: {
      type: Number,
      required: false
    },
    defaultPage: {
      type: Number,
      required: false,
      default: 1
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: false,
      default: 0
    },
    siblingCount: {
      type: Number,
      required: false,
      default: 2
    },
    disabled: {
      type: Boolean,
      required: false
    },
    showEdges: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "nav"
    }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { siblingCount, disabled, showEdges } = vueExports.toRefs(props);
    useForwardExpose();
    const page = useVModel(props, "page", emits, {
      defaultValue: props.defaultPage,
      passive: props.page === void 0
    });
    const pageCount = vueExports.computed(() => Math.max(1, Math.ceil(props.total / (props.itemsPerPage || 1))));
    providePaginationRootContext({
      page,
      onPageChange(value) {
        page.value = value;
      },
      pageCount,
      siblingCount,
      disabled,
      showEdges
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {
          page: vueExports.unref(page),
          pageCount: pageCount.value
        })]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var PaginationRoot_default = PaginationRoot_vue_vue_type_script_setup_true_lang_default;
var PaginationFirst_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationFirst",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectPaginationRootContext();
    useForwardExpose();
    const disabled = vueExports.computed(() => rootContext.page.value === 1 || rootContext.disabled.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        "aria-label": "First Page",
        type: _ctx.as === "button" ? "button" : void 0,
        disabled: disabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && vueExports.unref(rootContext).onPageChange(1))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = vueExports.createTextVNode("First page"))])]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var PaginationFirst_default = PaginationFirst_vue_vue_type_script_setup_true_lang_default;
var PaginationLast_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationLast",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectPaginationRootContext();
    useForwardExpose();
    const disabled = vueExports.computed(() => rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        "aria-label": "Last Page",
        type: _ctx.as === "button" ? "button" : void 0,
        disabled: disabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && vueExports.unref(rootContext).onPageChange(vueExports.unref(rootContext).pageCount.value))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = vueExports.createTextVNode("Last page"))])]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var PaginationLast_default = PaginationLast_vue_vue_type_script_setup_true_lang_default;
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}
function transform(items) {
  return items.map((value) => {
    if (typeof value === "number") return {
      type: "page",
      value
    };
    return { type: "ellipsis" };
  });
}
const ELLIPSIS = "ellipsis";
function getRange(currentPage, pageCount, siblingCount, showEdges) {
  const firstPageIndex = 1;
  const lastPageIndex = pageCount;
  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);
  if (showEdges) {
    const totalPageNumbers = Math.min(2 * siblingCount + 5, pageCount);
    const itemCount = totalPageNumbers - 2;
    const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 2 && Math.abs(lastPageIndex - itemCount - firstPageIndex + 1) > 2 && Math.abs(leftSiblingIndex - firstPageIndex) > 2;
    const showRightEllipsis = rightSiblingIndex < lastPageIndex - 2 && Math.abs(lastPageIndex - itemCount) > 2 && Math.abs(lastPageIndex - rightSiblingIndex) > 2;
    if (!showLeftEllipsis && showRightEllipsis) {
      const leftRange = range(1, itemCount);
      return [
        ...leftRange,
        ELLIPSIS,
        lastPageIndex
      ];
    }
    if (showLeftEllipsis && !showRightEllipsis) {
      const rightRange = range(lastPageIndex - itemCount + 1, lastPageIndex);
      return [
        firstPageIndex,
        ELLIPSIS,
        ...rightRange
      ];
    }
    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        ELLIPSIS,
        ...middleRange,
        ELLIPSIS,
        lastPageIndex
      ];
    }
    const fullRange = range(firstPageIndex, lastPageIndex);
    return fullRange;
  } else {
    const itemCount = siblingCount * 2 + 1;
    if (pageCount < itemCount) return range(1, lastPageIndex);
    else if (currentPage <= siblingCount + 1) return range(firstPageIndex, itemCount);
    else if (pageCount - currentPage <= siblingCount) return range(pageCount - itemCount + 1, lastPageIndex);
    else return range(leftSiblingIndex, rightSiblingIndex);
  }
}
var PaginationList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationList",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectPaginationRootContext();
    const transformedRange = vueExports.computed(() => {
      return transform(getRange(rootContext.page.value, rootContext.pageCount.value, rootContext.siblingCount.value, rootContext.showEdges.value));
    });
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.normalizeProps(vueExports.guardReactiveProps(props)), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", { items: transformedRange.value })]),
        _: 3
      }, 16);
    };
  }
});
var PaginationList_default = PaginationList_vue_vue_type_script_setup_true_lang_default;
var PaginationListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationListItem",
  props: {
    value: {
      type: Number,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectPaginationRootContext();
    const isSelected = vueExports.computed(() => rootContext.page.value === props.value);
    const disabled = vueExports.computed(() => rootContext.disabled.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        "data-type": "page",
        "aria-label": `Page ${_ctx.value}`,
        "aria-current": isSelected.value ? "page" : void 0,
        "data-selected": isSelected.value ? "true" : void 0,
        disabled: disabled.value,
        type: _ctx.as === "button" ? "button" : void 0,
        onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && vueExports.unref(rootContext).onPageChange(_ctx.value))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [vueExports.createTextVNode(vueExports.toDisplayString(_ctx.value), 1)])]),
        _: 3
      }, 16, [
        "aria-label",
        "aria-current",
        "data-selected",
        "disabled",
        "type"
      ]);
    };
  }
});
var PaginationListItem_default = PaginationListItem_vue_vue_type_script_setup_true_lang_default;
var PaginationNext_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationNext",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectPaginationRootContext();
    const disabled = vueExports.computed(() => rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        "aria-label": "Next Page",
        type: _ctx.as === "button" ? "button" : void 0,
        disabled: disabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && vueExports.unref(rootContext).onPageChange(vueExports.unref(rootContext).page.value + 1))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = vueExports.createTextVNode("Next page"))])]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var PaginationNext_default = PaginationNext_vue_vue_type_script_setup_true_lang_default;
var PaginationPrev_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PaginationPrev",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectPaginationRootContext();
    const disabled = vueExports.computed(() => rootContext.page.value === 1 || rootContext.disabled.value);
    return (_ctx, _cache) => {
      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(Primitive), vueExports.mergeProps(props, {
        "aria-label": "Previous Page",
        type: _ctx.as === "button" ? "button" : void 0,
        disabled: disabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && vueExports.unref(rootContext).onPageChange(vueExports.unref(rootContext).page.value - 1))
      }), {
        default: vueExports.withCtx(() => [vueExports.renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = vueExports.createTextVNode("Prev page"))])]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var PaginationPrev_default = PaginationPrev_vue_vue_type_script_setup_true_lang_default;
const _sfc_main$3 = {
  __name: "ActiveCompetitions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const competitionType = vueExports.computed(() => {
      const type = route.query.type;
      return type === "reserve" || type === "vacancy" ? type : null;
    });
    const heading = vueExports.computed(
      () => competitionType.value === "reserve" ? "Конкурсы на формирование кадрового резерва" : "Действующие конкурсы"
    );
    const { data: competitions, pending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "competitions",
      () => {
        const params = competitionType.value ? `?type=${competitionType.value}` : "";
        return $fetch(`${config.public.apiBaseUrl}/api/competitions/${params}`);
      },
      { server: false, watch: [competitionType] }
    )), __temp = await __temp, __restore(), __temp);
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$n;
      const _component_UButton = _sfc_main$u;
      const _component_UIcon = _sfc_main$A;
      const _component_DsEmptyState = __nuxt_component_5;
      const _component_UBadge = _sfc_main$i;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, vueExports.mergeProps({ class: "py-8" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center justify-between gap-4 mb-6"${_scopeId}><h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(heading))}</h2><div class="flex flex-wrap gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Вакансии",
              to: "/vacancies",
              color: "neutral",
              variant: "outline",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "Кадровый резерв",
              to: "/staffreserve",
              color: "neutral",
              variant: "outline",
              "trailing-icon": "i-lucide-arrow-right"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (vueExports.unref(pending)) {
              _push2(`<div class="flex justify-center py-12"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-loader-circle",
                class: "h-8 w-8 text-primary-500 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!vueExports.unref(competitions)?.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                icon: "i-lucide-calendar-off",
                title: "Конкурсы не проводятся",
                description: "В настоящее время активных конкурсов нет. Следите за обновлениями в разделе «Конкурсы»"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(competitions), (item) => {
                _push2(`<article class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8"${_scopeId}><div class="flex flex-wrap items-start justify-between gap-3 mb-4"${_scopeId}><h3 class="text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}</h3>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                  color: "primary",
                  variant: "subtle"
                }, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.competitionTypeLabel)}`);
                    } else {
                      return [
                        vueExports.createTextVNode(vueExports.toDisplayString(item.competitionTypeLabel), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
                if (item.date_start || item.date_end) {
                  _push2(`<p class="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-calendar",
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                  _push2(` Приём документов: `);
                  if (item.date_start) {
                    _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(item.date_start))}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.date_start && item.date_end) {
                    _push2(`<span${_scopeId}> — </span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.date_end) {
                    _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(item.date_end))}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.content) {
                  _push2(`<div class="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-4"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.content)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.requirements) {
                  _push2(`<div class="mb-4"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2"${_scopeId}> Требования </h4><p class="text-gray-600 dark:text-gray-400 whitespace-pre-line"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.requirements)}</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.acceptance_info) {
                  _push2(`<div class="mb-4"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2"${_scopeId}> Место и время приёма документов </h4><p class="text-gray-600 dark:text-gray-400 whitespace-pre-line"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.acceptance_info)}</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.contact_phones) {
                  _push2(`<div class="flex items-start gap-2 text-gray-600 dark:text-gray-400"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-phone",
                    class: "h-4 w-4 mt-1 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.contact_phones)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              vueExports.createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 mb-6" }, [
                vueExports.createVNode("h2", { class: "text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white" }, vueExports.toDisplayString(vueExports.unref(heading)), 1),
                vueExports.createVNode("div", { class: "flex flex-wrap gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    label: "Вакансии",
                    to: "/vacancies",
                    color: "neutral",
                    variant: "outline",
                    "trailing-icon": "i-lucide-arrow-right"
                  }),
                  vueExports.createVNode(_component_UButton, {
                    label: "Кадровый резерв",
                    to: "/staffreserve",
                    color: "neutral",
                    variant: "outline",
                    "trailing-icon": "i-lucide-arrow-right"
                  })
                ])
              ]),
              vueExports.unref(pending) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "flex justify-center py-12"
              }, [
                vueExports.createVNode(_component_UIcon, {
                  name: "i-lucide-loader-circle",
                  class: "h-8 w-8 text-primary-500 animate-spin"
                })
              ])) : !vueExports.unref(competitions)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                key: 1,
                icon: "i-lucide-calendar-off",
                title: "Конкурсы не проводятся",
                description: "В настоящее время активных конкурсов нет. Следите за обновлениями в разделе «Конкурсы»"
              })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 2,
                class: "space-y-6"
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(competitions), (item) => {
                  return vueExports.openBlock(), vueExports.createBlock("article", {
                    key: item.id,
                    class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8"
                  }, [
                    vueExports.createVNode("div", { class: "flex flex-wrap items-start justify-between gap-3 mb-4" }, [
                      vueExports.createVNode("h3", { class: "text-xl font-semibold text-gray-900 dark:text-white" }, vueExports.toDisplayString(item.title), 1),
                      vueExports.createVNode(_component_UBadge, {
                        color: "primary",
                        variant: "subtle"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.competitionTypeLabel), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    item.date_start || item.date_end ? (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 0,
                      class: "text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2"
                    }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-calendar",
                        class: "h-4 w-4"
                      }),
                      vueExports.createTextVNode(" Приём документов: "),
                      item.date_start ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(formatDate(item.date_start)), 1)) : vueExports.createCommentVNode("", true),
                      item.date_start && item.date_end ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, " — ")) : vueExports.createCommentVNode("", true),
                      item.date_end ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 2 }, vueExports.toDisplayString(formatDate(item.date_end)), 1)) : vueExports.createCommentVNode("", true)
                    ])) : vueExports.createCommentVNode("", true),
                    item.content ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-4"
                    }, vueExports.toDisplayString(item.content), 1)) : vueExports.createCommentVNode("", true),
                    item.requirements ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "mb-4"
                    }, [
                      vueExports.createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2" }, " Требования "),
                      vueExports.createVNode("p", { class: "text-gray-600 dark:text-gray-400 whitespace-pre-line" }, vueExports.toDisplayString(item.requirements), 1)
                    ])) : vueExports.createCommentVNode("", true),
                    item.acceptance_info ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 3,
                      class: "mb-4"
                    }, [
                      vueExports.createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2" }, " Место и время приёма документов "),
                      vueExports.createVNode("p", { class: "text-gray-600 dark:text-gray-400 whitespace-pre-line" }, vueExports.toDisplayString(item.acceptance_info), 1)
                    ])) : vueExports.createCommentVNode("", true),
                    item.contact_phones ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 4,
                      class: "flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    }, [
                      vueExports.createVNode(_component_UIcon, {
                        name: "i-lucide-phone",
                        class: "h-4 w-4 mt-1 shrink-0"
                      }),
                      vueExports.createVNode("span", null, vueExports.toDisplayString(item.contact_phones), 1)
                    ])) : vueExports.createCommentVNode("", true)
                  ]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActiveCompetitions.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "",
    "list": "flex items-center gap-1",
    "ellipsis": "pointer-events-none",
    "label": "min-w-5 text-center",
    "first": "",
    "prev": "",
    "item": "",
    "next": "",
    "last": ""
  }
};
const _sfc_main$2 = {
  __name: "UPagination",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    firstIcon: { type: null, required: false },
    prevIcon: { type: null, required: false },
    nextIcon: { type: null, required: false },
    lastIcon: { type: null, required: false },
    ellipsisIcon: { type: null, required: false },
    color: { type: null, required: false, default: "neutral" },
    variant: { type: null, required: false, default: "outline" },
    activeColor: { type: null, required: false, default: "primary" },
    activeVariant: { type: null, required: false, default: "solid" },
    showControls: { type: Boolean, required: false, default: true },
    size: { type: null, required: false },
    to: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    defaultPage: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    itemsPerPage: { type: Number, required: false, default: 10 },
    page: { type: Number, required: false },
    showEdges: { type: Boolean, required: false, default: false },
    siblingCount: { type: Number, required: false, default: 2 },
    total: { type: Number, required: false, default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const props = useComponentProps("pagination", _props);
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = vueExports.computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = vueExports.computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = vueExports.computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = vueExports.computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pagination || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, _attrs), {
        default: vueExports.withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationList_default), {
              "data-slot": "list",
              class: ui.value.list({ class: vueExports.unref(props).ui?.list })
            }, {
              default: vueExports.withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (vueExports.unref(props).showControls || !!slots.first) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationFirst_default), {
                      "as-child": "",
                      "data-slot": "first",
                      class: ui.value.first({ class: vueExports.unref(props).ui?.first })
                    }, {
                      default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                              color: vueExports.unref(props).color,
                              variant: vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              icon: firstIcon.value,
                              to: vueExports.unref(props).to?.(1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, "first", {}, () => [
                              vueExports.createVNode(_sfc_main$u, {
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: firstIcon.value,
                                to: vueExports.unref(props).to?.(1)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(props).showControls || !!slots.prev) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationPrev_default), {
                      "as-child": "",
                      "data-slot": "prev",
                      class: ui.value.prev({ class: vueExports.unref(props).ui?.prev })
                    }, {
                      default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                              color: vueExports.unref(props).color,
                              variant: vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              icon: prevIcon.value,
                              to: page > 1 ? vueExports.unref(props).to?.(page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, "prev", {}, () => [
                              vueExports.createVNode(_sfc_main$u, {
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: prevIcon.value,
                                to: page > 1 ? vueExports.unref(props).to?.(page - 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationListItem_default), {
                        "as-child": "",
                        value: item.value,
                        "data-slot": "item",
                        class: ui.value.item({ class: vueExports.unref(props).ui?.item })
                      }, {
                        default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "item", vueExports.mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                                color: page === item.value ? vueExports.unref(props).activeColor : vueExports.unref(props).color,
                                variant: page === item.value ? vueExports.unref(props).activeVariant : vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: vueExports.unref(props).to?.(item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              vueExports.renderSlot(_ctx.$slots, "item", vueExports.mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                                vueExports.createVNode(_sfc_main$u, {
                                  color: page === item.value ? vueExports.unref(props).activeColor : vueExports.unref(props).color,
                                  variant: page === item.value ? vueExports.unref(props).activeVariant : vueExports.unref(props).variant,
                                  size: vueExports.unref(props).size,
                                  label: String(item.value),
                                  ui: { label: ui.value.label() },
                                  to: vueExports.unref(props).to?.(item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationEllipsis_default), {
                        "as-child": "",
                        "data-slot": "ellipsis",
                        class: ui.value.ellipsis({ class: vueExports.unref(props).ui?.ellipsis })
                      }, {
                        default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                                as: "div",
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: vueExports.unref(props).ellipsisIcon || vueExports.unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              vueExports.renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                                vueExports.createVNode(_sfc_main$u, {
                                  as: "div",
                                  color: vueExports.unref(props).color,
                                  variant: vueExports.unref(props).variant,
                                  size: vueExports.unref(props).size,
                                  icon: vueExports.unref(props).ellipsisIcon || vueExports.unref(appConfig).ui.icons.ellipsis
                                }, null, 8, ["color", "variant", "size", "icon"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  if (vueExports.unref(props).showControls || !!slots.next) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationNext_default), {
                      "as-child": "",
                      "data-slot": "next",
                      class: ui.value.next({ class: vueExports.unref(props).ui?.next })
                    }, {
                      default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                              color: vueExports.unref(props).color,
                              variant: vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              icon: nextIcon.value,
                              to: page < pageCount ? vueExports.unref(props).to?.(page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, "next", {}, () => [
                              vueExports.createVNode(_sfc_main$u, {
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: nextIcon.value,
                                to: page < pageCount ? vueExports.unref(props).to?.(page + 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(props).showControls || !!slots.last) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(PaginationLast_default), {
                      "as-child": "",
                      "data-slot": "last",
                      class: ui.value.last({ class: vueExports.unref(props).ui?.last })
                    }, {
                      default: vueExports.withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, {
                              color: vueExports.unref(props).color,
                              variant: vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              icon: lastIcon.value,
                              to: vueExports.unref(props).to?.(pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            vueExports.renderSlot(_ctx.$slots, "last", {}, () => [
                              vueExports.createVNode(_sfc_main$u, {
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: lastIcon.value,
                                to: vueExports.unref(props).to?.(pageCount)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    vueExports.unref(props).showControls || !!slots.first ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationFirst_default), {
                      key: 0,
                      "as-child": "",
                      "data-slot": "first",
                      class: ui.value.first({ class: vueExports.unref(props).ui?.first })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, "first", {}, () => [
                          vueExports.createVNode(_sfc_main$u, {
                            color: vueExports.unref(props).color,
                            variant: vueExports.unref(props).variant,
                            size: vueExports.unref(props).size,
                            icon: firstIcon.value,
                            to: vueExports.unref(props).to?.(1)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(props).showControls || !!slots.prev ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationPrev_default), {
                      key: 1,
                      "as-child": "",
                      "data-slot": "prev",
                      class: ui.value.prev({ class: vueExports.unref(props).ui?.prev })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, "prev", {}, () => [
                          vueExports.createVNode(_sfc_main$u, {
                            color: vueExports.unref(props).color,
                            variant: vueExports.unref(props).variant,
                            size: vueExports.unref(props).size,
                            icon: prevIcon.value,
                            to: page > 1 ? vueExports.unref(props).to?.(page - 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items, (item, index) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: index }, [
                        item.type === "page" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationListItem_default), {
                          key: 0,
                          "as-child": "",
                          value: item.value,
                          "data-slot": "item",
                          class: ui.value.item({ class: vueExports.unref(props).ui?.item })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "item", vueExports.mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                              vueExports.createVNode(_sfc_main$u, {
                                color: page === item.value ? vueExports.unref(props).activeColor : vueExports.unref(props).color,
                                variant: page === item.value ? vueExports.unref(props).activeVariant : vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: vueExports.unref(props).to?.(item.value),
                                square: ""
                              }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationEllipsis_default), {
                          key: 1,
                          "as-child": "",
                          "data-slot": "ellipsis",
                          class: ui.value.ellipsis({ class: vueExports.unref(props).ui?.ellipsis })
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                              vueExports.createVNode(_sfc_main$u, {
                                as: "div",
                                color: vueExports.unref(props).color,
                                variant: vueExports.unref(props).variant,
                                size: vueExports.unref(props).size,
                                icon: vueExports.unref(props).ellipsisIcon || vueExports.unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 3
                        }, 8, ["class"]))
                      ], 64);
                    }), 128)),
                    vueExports.unref(props).showControls || !!slots.next ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationNext_default), {
                      key: 2,
                      "as-child": "",
                      "data-slot": "next",
                      class: ui.value.next({ class: vueExports.unref(props).ui?.next })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, "next", {}, () => [
                          vueExports.createVNode(_sfc_main$u, {
                            color: vueExports.unref(props).color,
                            variant: vueExports.unref(props).variant,
                            size: vueExports.unref(props).size,
                            icon: nextIcon.value,
                            to: page < pageCount ? vueExports.unref(props).to?.(page + 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(props).showControls || !!slots.last ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationLast_default), {
                      key: 3,
                      "as-child": "",
                      "data-slot": "last",
                      class: ui.value.last({ class: vueExports.unref(props).ui?.last })
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.renderSlot(_ctx.$slots, "last", {}, () => [
                          vueExports.createVNode(_sfc_main$u, {
                            color: vueExports.unref(props).color,
                            variant: vueExports.unref(props).variant,
                            size: vueExports.unref(props).size,
                            icon: lastIcon.value,
                            to: vueExports.unref(props).to?.(pageCount)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(PaginationList_default), {
                "data-slot": "list",
                class: ui.value.list({ class: vueExports.unref(props).ui?.list })
              }, {
                default: vueExports.withCtx(({ items }) => [
                  vueExports.unref(props).showControls || !!slots.first ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationFirst_default), {
                    key: 0,
                    "as-child": "",
                    "data-slot": "first",
                    class: ui.value.first({ class: vueExports.unref(props).ui?.first })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "first", {}, () => [
                        vueExports.createVNode(_sfc_main$u, {
                          color: vueExports.unref(props).color,
                          variant: vueExports.unref(props).variant,
                          size: vueExports.unref(props).size,
                          icon: firstIcon.value,
                          to: vueExports.unref(props).to?.(1)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).showControls || !!slots.prev ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationPrev_default), {
                    key: 1,
                    "as-child": "",
                    "data-slot": "prev",
                    class: ui.value.prev({ class: vueExports.unref(props).ui?.prev })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "prev", {}, () => [
                        vueExports.createVNode(_sfc_main$u, {
                          color: vueExports.unref(props).color,
                          variant: vueExports.unref(props).variant,
                          size: vueExports.unref(props).size,
                          icon: prevIcon.value,
                          to: page > 1 ? vueExports.unref(props).to?.(page - 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(items, (item, index) => {
                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: index }, [
                      item.type === "page" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationListItem_default), {
                        key: 0,
                        "as-child": "",
                        value: item.value,
                        "data-slot": "item",
                        class: ui.value.item({ class: vueExports.unref(props).ui?.item })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.renderSlot(_ctx.$slots, "item", vueExports.mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                            vueExports.createVNode(_sfc_main$u, {
                              color: page === item.value ? vueExports.unref(props).activeColor : vueExports.unref(props).color,
                              variant: page === item.value ? vueExports.unref(props).activeVariant : vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              label: String(item.value),
                              ui: { label: ui.value.label() },
                              to: vueExports.unref(props).to?.(item.value),
                              square: ""
                            }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationEllipsis_default), {
                        key: 1,
                        "as-child": "",
                        "data-slot": "ellipsis",
                        class: ui.value.ellipsis({ class: vueExports.unref(props).ui?.ellipsis })
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                            vueExports.createVNode(_sfc_main$u, {
                              as: "div",
                              color: vueExports.unref(props).color,
                              variant: vueExports.unref(props).variant,
                              size: vueExports.unref(props).size,
                              icon: vueExports.unref(props).ellipsisIcon || vueExports.unref(appConfig).ui.icons.ellipsis
                            }, null, 8, ["color", "variant", "size", "icon"])
                          ])
                        ]),
                        _: 3
                      }, 8, ["class"]))
                    ], 64);
                  }), 128)),
                  vueExports.unref(props).showControls || !!slots.next ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationNext_default), {
                    key: 2,
                    "as-child": "",
                    "data-slot": "next",
                    class: ui.value.next({ class: vueExports.unref(props).ui?.next })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "next", {}, () => [
                        vueExports.createVNode(_sfc_main$u, {
                          color: vueExports.unref(props).color,
                          variant: vueExports.unref(props).variant,
                          size: vueExports.unref(props).size,
                          icon: nextIcon.value,
                          to: page < pageCount ? vueExports.unref(props).to?.(page + 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : vueExports.createCommentVNode("", true),
                  vueExports.unref(props).showControls || !!slots.last ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(PaginationLast_default), {
                    key: 3,
                    "as-child": "",
                    "data-slot": "last",
                    class: ui.value.last({ class: vueExports.unref(props).ui?.last })
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.renderSlot(_ctx.$slots, "last", {}, () => [
                        vueExports.createVNode(_sfc_main$u, {
                          color: vueExports.unref(props).color,
                          variant: vueExports.unref(props).variant,
                          size: vueExports.unref(props).size,
                          icon: lastIcon.value,
                          to: vueExports.unref(props).to?.(pageCount)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : vueExports.createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const itemsPerPage = 10;
const _sfc_main$1 = {
  __name: "TabsTenders",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const activeTab = vueExports.ref("results");
    const currentPage = vueExports.ref(1);
    const config = useRuntimeConfig();
    const tabItems = [
      { label: "Результаты конкурсов", value: "results" },
      { label: "Положения о конкурсах", value: "rules" }
    ];
    const { data: results } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "competition-results",
      () => $fetch(`${config.public.apiBaseUrl}/api/competition-results/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const { data: rules } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      "competition-rules",
      () => $fetch(`${config.public.apiBaseUrl}/api/tenders/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const paginatedResults = vueExports.computed(() => {
      const items = results.value ?? [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return items.slice(start, start + itemsPerPage);
    });
    const paginatedRules = vueExports.computed(() => {
      const items = rules.value ?? [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return items.slice(start, start + itemsPerPage);
    });
    vueExports.watch(activeTab, () => {
      currentPage.value = 1;
    });
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$n;
      const _component_UTabs = _sfc_main$4;
      const _component_UButton = _sfc_main$u;
      const _component_DsEmptyState = __nuxt_component_5;
      const _component_UPagination = _sfc_main$2;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UContainer, vueExports.mergeProps({
        id: "competition-results",
        class: "pb-12"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
                  if (item.value === "results") {
                    _push3(`<div class="mt-6 space-y-4"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(paginatedResults), (entry) => {
                      _push3(`<div class="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-4 lg:p-6"${_scopeId2}><div class="flex flex-wrap items-center justify-between gap-3 mb-4"${_scopeId2}><h3 class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(entry.title)}</h3>`);
                      if (entry.completed_at) {
                        _push3(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(formatDate(entry.completed_at))}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="flex flex-wrap gap-3"${_scopeId2}>`);
                      if (entry.decreeConductLink) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                          label: "Постановление о проведении",
                          icon: "i-lucide-download",
                          to: entry.decreeConductLink,
                          target: "_blank",
                          external: "",
                          color: "primary",
                          size: "sm"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (entry.decreeResultsLink) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                          label: "Постановление о результатах",
                          icon: "i-lucide-download",
                          to: entry.decreeResultsLink,
                          target: "_blank",
                          external: "",
                          color: "primary",
                          size: "sm"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]-->`);
                    if (!vueExports.unref(results)?.length) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                        icon: "i-lucide-file-search",
                        title: "Результаты не опубликованы",
                        description: "Результаты завершённых конкурсов появятся здесь после официального размещения"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((vueExports.unref(results)?.length ?? 0) > itemsPerPage) {
                      _push3(`<div class="flex justify-center mt-6"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UPagination, {
                        page: vueExports.unref(currentPage),
                        "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                        total: vueExports.unref(results)?.length ?? 0,
                        "items-per-page": itemsPerPage,
                        color: "primary",
                        size: "sm"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="mt-6 space-y-3"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(paginatedRules), (entry) => {
                      _push3(`<div class="flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4"${_scopeId2}><span class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(entry.name)}</span>`);
                      if (entry.link) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                          label: "Скачать",
                          icon: "i-lucide-download",
                          to: entry.link,
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
                    if (!vueExports.unref(rules)?.length) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                        icon: "i-lucide-file-x",
                        title: "Документы отсутствуют",
                        description: "В этой категории пока нет опубликованных положений"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((vueExports.unref(rules)?.length ?? 0) > itemsPerPage) {
                      _push3(`<div class="flex justify-center mt-6"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UPagination, {
                        page: vueExports.unref(currentPage),
                        "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                        total: vueExports.unref(rules)?.length ?? 0,
                        "items-per-page": itemsPerPage,
                        color: "primary",
                        size: "sm"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    item.value === "results" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "mt-6 space-y-4"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(paginatedResults), (entry) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: entry.id,
                          class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-4 lg:p-6"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 mb-4" }, [
                            vueExports.createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, vueExports.toDisplayString(entry.title), 1),
                            entry.completed_at ? (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 0,
                              class: "text-sm text-gray-500 dark:text-gray-400"
                            }, vueExports.toDisplayString(formatDate(entry.completed_at)), 1)) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode("div", { class: "flex flex-wrap gap-3" }, [
                            entry.decreeConductLink ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                              key: 0,
                              label: "Постановление о проведении",
                              icon: "i-lucide-download",
                              to: entry.decreeConductLink,
                              target: "_blank",
                              external: "",
                              color: "primary",
                              size: "sm"
                            }, null, 8, ["to"])) : vueExports.createCommentVNode("", true),
                            entry.decreeResultsLink ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                              key: 1,
                              label: "Постановление о результатах",
                              icon: "i-lucide-download",
                              to: entry.decreeResultsLink,
                              target: "_blank",
                              external: "",
                              color: "primary",
                              size: "sm"
                            }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                          ])
                        ]);
                      }), 128)),
                      !vueExports.unref(results)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                        key: 0,
                        icon: "i-lucide-file-search",
                        title: "Результаты не опубликованы",
                        description: "Результаты завершённых конкурсов появятся здесь после официального размещения"
                      })) : vueExports.createCommentVNode("", true),
                      (vueExports.unref(results)?.length ?? 0) > itemsPerPage ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "flex justify-center mt-6"
                      }, [
                        vueExports.createVNode(_component_UPagination, {
                          page: vueExports.unref(currentPage),
                          "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                          total: vueExports.unref(results)?.length ?? 0,
                          "items-per-page": itemsPerPage,
                          color: "primary",
                          size: "sm"
                        }, null, 8, ["page", "onUpdate:page", "total"])
                      ])) : vueExports.createCommentVNode("", true)
                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "mt-6 space-y-3"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(paginatedRules), (entry) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: entry.id,
                          class: "flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                        }, [
                          vueExports.createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(entry.name), 1),
                          entry.link ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                            key: 0,
                            label: "Скачать",
                            icon: "i-lucide-download",
                            to: entry.link,
                            target: "_blank",
                            external: "",
                            color: "primary",
                            size: "sm"
                          }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                        ]);
                      }), 128)),
                      !vueExports.unref(rules)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                        key: 0,
                        icon: "i-lucide-file-x",
                        title: "Документы отсутствуют",
                        description: "В этой категории пока нет опубликованных положений"
                      })) : vueExports.createCommentVNode("", true),
                      (vueExports.unref(rules)?.length ?? 0) > itemsPerPage ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "flex justify-center mt-6"
                      }, [
                        vueExports.createVNode(_component_UPagination, {
                          page: vueExports.unref(currentPage),
                          "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                          total: vueExports.unref(rules)?.length ?? 0,
                          "items-per-page": itemsPerPage,
                          color: "primary",
                          size: "sm"
                        }, null, 8, ["page", "onUpdate:page", "total"])
                      ])) : vueExports.createCommentVNode("", true)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
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
                  item.value === "results" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "mt-6 space-y-4"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(paginatedResults), (entry) => {
                      return vueExports.openBlock(), vueExports.createBlock("div", {
                        key: entry.id,
                        class: "rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 p-4 lg:p-6"
                      }, [
                        vueExports.createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 mb-4" }, [
                          vueExports.createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, vueExports.toDisplayString(entry.title), 1),
                          entry.completed_at ? (vueExports.openBlock(), vueExports.createBlock("span", {
                            key: 0,
                            class: "text-sm text-gray-500 dark:text-gray-400"
                          }, vueExports.toDisplayString(formatDate(entry.completed_at)), 1)) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode("div", { class: "flex flex-wrap gap-3" }, [
                          entry.decreeConductLink ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                            key: 0,
                            label: "Постановление о проведении",
                            icon: "i-lucide-download",
                            to: entry.decreeConductLink,
                            target: "_blank",
                            external: "",
                            color: "primary",
                            size: "sm"
                          }, null, 8, ["to"])) : vueExports.createCommentVNode("", true),
                          entry.decreeResultsLink ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                            key: 1,
                            label: "Постановление о результатах",
                            icon: "i-lucide-download",
                            to: entry.decreeResultsLink,
                            target: "_blank",
                            external: "",
                            color: "primary",
                            size: "sm"
                          }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                        ])
                      ]);
                    }), 128)),
                    !vueExports.unref(results)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                      key: 0,
                      icon: "i-lucide-file-search",
                      title: "Результаты не опубликованы",
                      description: "Результаты завершённых конкурсов появятся здесь после официального размещения"
                    })) : vueExports.createCommentVNode("", true),
                    (vueExports.unref(results)?.length ?? 0) > itemsPerPage ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "flex justify-center mt-6"
                    }, [
                      vueExports.createVNode(_component_UPagination, {
                        page: vueExports.unref(currentPage),
                        "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                        total: vueExports.unref(results)?.length ?? 0,
                        "items-per-page": itemsPerPage,
                        color: "primary",
                        size: "sm"
                      }, null, 8, ["page", "onUpdate:page", "total"])
                    ])) : vueExports.createCommentVNode("", true)
                  ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    class: "mt-6 space-y-3"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(paginatedRules), (entry) => {
                      return vueExports.openBlock(), vueExports.createBlock("div", {
                        key: entry.id,
                        class: "flex flex-wrap items-center justify-between gap-3 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                      }, [
                        vueExports.createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, vueExports.toDisplayString(entry.name), 1),
                        entry.link ? (vueExports.openBlock(), vueExports.createBlock(_component_UButton, {
                          key: 0,
                          label: "Скачать",
                          icon: "i-lucide-download",
                          to: entry.link,
                          target: "_blank",
                          external: "",
                          color: "primary",
                          size: "sm"
                        }, null, 8, ["to"])) : vueExports.createCommentVNode("", true)
                      ]);
                    }), 128)),
                    !vueExports.unref(rules)?.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                      key: 0,
                      icon: "i-lucide-file-x",
                      title: "Документы отсутствуют",
                      description: "В этой категории пока нет опубликованных положений"
                    })) : vueExports.createCommentVNode("", true),
                    (vueExports.unref(rules)?.length ?? 0) > itemsPerPage ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "flex justify-center mt-6"
                    }, [
                      vueExports.createVNode(_component_UPagination, {
                        page: vueExports.unref(currentPage),
                        "onUpdate:page": ($event) => vueExports.isRef(currentPage) ? currentPage.value = $event : null,
                        total: vueExports.unref(rules)?.length ?? 0,
                        "items-per-page": itemsPerPage,
                        color: "primary",
                        size: "sm"
                      }, null, 8, ["page", "onUpdate:page", "total"])
                    ])) : vueExports.createCommentVNode("", true)
                  ]))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabsTenders.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "tenders",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Конкурсы" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Конкурсы" });
    const hero = useHeroImage("tenders");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_ActiveCompetitions = _sfc_main$3;
      const _component_TabsTenders = _sfc_main$1;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Конкурсы",
        description: "Конкурсы на замещение вакантных должностей и формирование кадрового резерва",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ActiveCompetitions, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_TabsTenders, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tenders-KF9y0yws.mjs.map
