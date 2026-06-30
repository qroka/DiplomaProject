import { _ as __nuxt_component_0$1 } from './PageHero-C6QkD8NM.mjs';
import { b as buildBreadcrumbs, _ as __nuxt_component_1 } from './breadcrumbs-DKNtD-Qq.mjs';
import { v as vueExports, u as useHead, b as useRoute, S as useRouter, d as useAsyncData, s as serverRenderer_cjs_prodExports, p as _sfc_main$i, g as _sfc_main$u, h as useRuntimeConfig, i as useToast, j as _sfc_main$l, f as _sfc_main$A, k as useComponentProps, l as useAppConfig, y as useForwardProps, z as reactivePick, t as tv, O as DropdownMenuRoot_default, Q as DropdownMenuTrigger_default, R as DropdownMenuArrow_default, x as useLocale, B as usePortal, C as useForwardPropsEmits, D as reactiveOmit, E as createReusableTemplate, F as isArrayOfArray, G as _sfc_main$x, A as get$1, H as _sfc_main$g, I as DropdownMenu, J as FieldGroupReset, o as _sfc_main$d, K as _sfc_main$v, L as pickLinkProps, M as _sfc_main$w, N as omit } from './server.mjs';
import { f as defu } from '../_/nitro.mjs';
import { _ as __nuxt_component_7, a as __nuxt_component_9 } from './SectionHeading-DAShvJNb.mjs';
import { a as __nuxt_component_8, _ as __nuxt_component_4, V as VacancyCard } from './VacancySubscribeForm-D124Heyw.mjs';
import { _ as __nuxt_component_5 } from './EmptyState-ya4bNInt.mjs';
import { A as ApplicationForm } from './ApplicationForm-Cr76jRNi.mjs';
import { u as useHeroImage } from './useHeroImage-CV5TxxU-.mjs';
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
import './Surface-X0lNFFsI.mjs';
import './Textarea-BZalJ9Lx.mjs';
import './Select-CgIdPBev.mjs';
import './InputDate-CSyueQQs.mjs';
import './RovingFocusItem-sciPZ7zL.mjs';
import './Collapsible-8cfMzLTS.mjs';
import './FileUpload-D2vDTnAm.mjs';

function useFilter$1(options) {
  const computedOptions = vueExports.computed(() => vueExports.unref(options));
  const collator = vueExports.computed(() => new Intl.Collator("en", {
    usage: "search",
    ...computedOptions.value
  }));
  const startsWith = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    return collator.value.compare(string.slice(0, substring.length), substring) === 0;
  };
  const endsWith = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    return collator.value.compare(string.slice(-substring.length), substring) === 0;
  };
  const contains = (string, substring) => {
    if (substring.length === 0) return true;
    string = string.normalize("NFC");
    substring = substring.normalize("NFC");
    let scan = 0;
    const sliceLen = substring.length;
    for (; scan + sliceLen <= string.length; scan++) {
      const slice = string.slice(scan, scan + sliceLen);
      if (collator.value.compare(substring, slice) === 0) return true;
    }
    return false;
  };
  return {
    startsWith,
    endsWith,
    contains
  };
}
function useFilter() {
  const { contains, startsWith } = useFilter$1({ sensitivity: "base" });
  function score(value, searchTerm) {
    if (!contains(value, searchTerm)) return null;
    if (contains(searchTerm, value)) return 0;
    if (startsWith(value, searchTerm)) return 1;
    return 2;
  }
  function scoreItem(item, searchTerm, fields) {
    if (typeof item !== "object" || item === null) {
      return score(String(item), searchTerm);
    }
    let bestScore = null;
    for (const field of fields) {
      const value = get$1(item, field);
      if (value == null) continue;
      const values = Array.isArray(value) ? value.map(String) : [String(value)];
      for (const v of values) {
        const s = score(v, searchTerm);
        if (s !== null && (bestScore === null || s < bestScore)) bestScore = s;
        if (bestScore === 0) return 0;
      }
    }
    return bestScore;
  }
  function filter(items, searchTerm, fields) {
    if (!searchTerm) return items;
    const scored = [];
    for (const item of items) {
      const s = scoreItem(item, searchTerm, fields);
      if (s !== null) {
        scored.push({ item, score: s });
      }
    }
    scored.sort((a, b) => a.score - b.score);
    return scored.map(({ item }) => item);
  }
  function filterGroups(groups, searchTerm, options) {
    if (!searchTerm) return groups;
    return groups.map((group) => {
      const result = [];
      for (const item of group) {
        if (item === void 0 || item === null) continue;
        if (options.isStructural?.(item)) {
          result.push({ item, score: -1 });
          continue;
        }
        const s = scoreItem(item, searchTerm, options.fields);
        if (s !== null) {
          result.push({ item, score: s });
        }
      }
      result.sort((a, b) => a.score - b.score);
      return result.map(({ item }) => item);
    }).filter((group) => group.some((item) => !options.isStructural?.(item)));
  }
  return { score, scoreItem, filter, filterGroups };
}
const _sfc_main$5 = {
  __name: "UDropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    items: { type: null, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true },
    sub: { type: Boolean, required: false },
    labelKey: { type: null, required: true },
    descriptionKey: { type: null, required: true },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true },
    size: { type: null, required: false },
    filter: { type: [Boolean, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    searchTerm: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: true },
    uiOverride: { type: null, required: false },
    loop: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false },
    sideFlip: { type: Boolean, required: false },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    alignFlip: { type: Boolean, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    hideShiftedArrow: { type: Boolean, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false }
  },
  emits: ["update:searchTerm", "escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const { t, dir } = useLocale();
    const appConfig = useAppConfig();
    const { filterGroups } = useFilter();
    const _searchTerm = vueExports.ref("");
    const searchTerm = vueExports.computed({
      get: () => props.searchTerm ?? _searchTerm.value,
      set: (value) => {
        _searchTerm.value = value;
        emits("update:searchTerm", value);
      }
    });
    const inputProps = vueExports.toRef(() => defu(props.filter, { placeholder: t("dropdownMenu.search"), variant: "none" }));
    const portalProps = usePortal(vueExports.toRef(() => props.portal));
    const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "size", "filter", "filterFields", "ignoreFilter", "searchTerm", "class", "ui", "uiOverride"), emits);
    const getProxySlots = () => omit(slots, ["default"]);
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
    const childrenIcon = vueExports.computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
    const groups = vueExports.computed(() => {
      if (!props.items?.length) return [];
      return isArrayOfArray(props.items) ? props.items : [props.items];
    });
    const isStructuralItem = (item) => !!item.type && ["label", "separator"].includes(item.type);
    const filteredGroups = vueExports.computed(() => {
      if (!props.filter || props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) && props.filterFields.length ? props.filterFields : [props.labelKey];
      return filterGroups(groups.value, searchTerm.value, {
        fields,
        isStructural: isStructuralItem
      });
    });
    const hasFilteredItems = vueExports.computed(() => filteredGroups.value.some((group) => group.some((item) => !isStructuralItem(item))));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineItemTemplate), null, {
        default: vueExports.withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index,
              ui: __props.ui
            }, () => {
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index,
                ui: __props.ui
              }, () => {
                if (item.loading) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: __props.loadingIcon || vueExports.unref(appConfig).ui.icons.loading,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, loading: true })
                  }, null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: item.icon,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.avatar) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, vueExports.mergeProps({
                    size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "itemLeadingAvatar",
                    class: __props.ui.itemLeadingAvatar({ class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if (vueExports.unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (vueExports.unref(get$1)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"])) {
                _push2(`<span data-slot="itemWrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemLabel({ class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel], active }))}"${_scopeId}>`);
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get$1)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : vueExports.unref(appConfig).ui.icons.external,
                    "data-slot": "itemLabelExternalIcon",
                    class: __props.ui.itemLabelExternalIcon({ class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
                if (vueExports.unref(get$1)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
                  _push2(`<span data-slot="itemDescription" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] }))}"${_scopeId}>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                    item,
                    active,
                    index
                  }, () => {
                    _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(get$1)(item, props.descriptionKey))}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span data-slot="itemTrailing" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                item,
                active,
                index,
                ui: __props.ui
              }, () => {
                if (item.children?.length) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                    name: childrenIcon.value,
                    "data-slot": "itemTrailingIcon",
                    class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.kbds?.length) {
                  _push2(`<span data-slot="itemTrailingKbds" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] }))}"${_scopeId}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, vueExports.mergeProps({
                      key: kbdIndex,
                      size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
                    }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></span>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                      name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                      "data-slot": "itemTrailingIcon",
                      class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$A, {
                        name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                        "data-slot": "itemTrailingIcon",
                        class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                      }, null, 8, ["name", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index,
                ui: __props.ui
              }, () => [
                vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                  item,
                  active,
                  index,
                  ui: __props.ui
                }, () => [
                  item.loading ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                    key: 0,
                    name: __props.loadingIcon || vueExports.unref(appConfig).ui.icons.loading,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, loading: true })
                  }, null, 8, ["name", "class"])) : item.icon ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                    key: 1,
                    name: item.icon,
                    "data-slot": "itemLeadingIcon",
                    class: __props.ui.itemLeadingIcon({ class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon], color: item?.color, active })
                  }, null, 8, ["name", "class"])) : item.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, vueExports.mergeProps({
                    key: 2,
                    size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "itemLeadingAvatar",
                    class: __props.ui.itemLeadingAvatar({ class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar], active })
                  }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
                ]),
                vueExports.unref(get$1)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || (vueExports.unref(get$1)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  "data-slot": "itemWrapper",
                  class: __props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] })
                }, [
                  vueExports.createVNode("span", {
                    "data-slot": "itemLabel",
                    class: __props.ui.itemLabel({ class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel], active })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : vueExports.unref(appConfig).ui.icons.external,
                      "data-slot": "itemLabelExternalIcon",
                      class: __props.ui.itemLabelExternalIcon({ class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon], color: item?.color, active })
                    }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
                  ], 2),
                  vueExports.unref(get$1)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    "data-slot": "itemDescription",
                    class: __props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] })
                  }, [
                    vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
                      item,
                      active,
                      index
                    }, () => [
                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(get$1)(item, props.descriptionKey)), 1)
                    ])
                  ], 2)) : vueExports.createCommentVNode("", true)
                ], 2)) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("span", {
                  "data-slot": "itemTrailing",
                  class: __props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] })
                }, [
                  vueExports.renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                    item,
                    active,
                    index,
                    ui: __props.ui
                  }, () => [
                    item.children?.length ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                      key: 0,
                      name: childrenIcon.value,
                      "data-slot": "itemTrailingIcon",
                      class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color, active })
                    }, null, 8, ["name", "class"])) : item.kbds?.length ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 1,
                      "data-slot": "itemTrailingKbds",
                      class: __props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(item.kbds, (kbd, kbdIndex) => {
                        return vueExports.openBlock(), vueExports.createBlock(_sfc_main$g, vueExports.mergeProps({
                          key: kbdIndex,
                          size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
                        }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                      }), 128))
                    ], 2)) : vueExports.createCommentVNode("", true)
                  ]),
                  vueExports.createVNode(vueExports.unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$A, {
                        name: __props.checkedIcon || vueExports.unref(appConfig).ui.icons.check,
                        "data-slot": "itemTrailingIcon",
                        class: __props.ui.itemTrailingIcon({ class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon], color: item?.color })
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1024)
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Portal, vueExports.unref(portalProps), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(FieldGroupReset), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer_cjs_prodExports.ssrRenderVNode(_push3, vueExports.createVNode(vueExports.resolveDynamicComponent(__props.sub ? vueExports.unref(DropdownMenu).SubContent : vueExports.unref(DropdownMenu).Content), vueExports.mergeProps({
                    "data-slot": "content",
                    class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
                  }, vueExports.unref(contentProps)), {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!__props.filter) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Filter, {
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "as-child": ""
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$d, vueExports.mergeProps({
                                  autofocus: "",
                                  autocomplete: "off",
                                  size: __props.size
                                }, inputProps.value, {
                                  "data-slot": "input",
                                  class: __props.ui.input({ class: __props.uiOverride?.input }),
                                  onChange: () => {
                                  }
                                }), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({
                                    autofocus: "",
                                    autocomplete: "off",
                                    size: __props.size
                                  }, inputProps.value, {
                                    "data-slot": "input",
                                    class: __props.ui.input({ class: __props.uiOverride?.input }),
                                    onChange: vueExports.withModifiers(() => {
                                    }, ["stop"])
                                  }), null, 16, ["size", "class", "onChange"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-top", {
                          sub: __props.sub ?? false
                        }, null, _push4, _parent4, _scopeId3);
                        if (!searchTerm.value || hasFilteredItems.value) {
                          _push4(`<div role="presentation" data-slot="viewport" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.viewport({ class: __props.uiOverride?.viewport }))}"${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Group, {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: __props.ui.group({ class: __props.uiOverride?.group })
                            }, {
                              default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  serverRenderer_cjs_prodExports.ssrRenderList(group, (item, index) => {
                                    _push5(`<!--[-->`);
                                    if (item.type === "label") {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Label, {
                                        "data-slot": "label",
                                        class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                      }, {
                                        default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                item,
                                                index
                                              }, null, 8, ["item", "index"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else if (item.type === "separator") {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Separator, {
                                        "data-slot": "separator",
                                        class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                      }, null, _parent5, _scopeId4));
                                    } else if (item?.children?.length) {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Sub, {
                                        open: item.open,
                                        "default-open": item.defaultOpen
                                      }, {
                                        default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).SubTrigger, {
                                              as: "button",
                                              type: "button",
                                              disabled: item.disabled,
                                              "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                            }, {
                                              default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                                    item,
                                                    index
                                                  }, null, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                      item,
                                                      index
                                                    }, null, 8, ["item", "index"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.mergeProps({
                                              sub: "",
                                              class: item.ui?.content,
                                              ui: __props.ui,
                                              "ui-override": __props.uiOverride,
                                              portal: __props.portal,
                                              items: item.children,
                                              align: "start",
                                              "align-offset": -4,
                                              "side-offset": 3,
                                              "label-key": __props.labelKey,
                                              "description-key": __props.descriptionKey,
                                              "checked-icon": __props.checkedIcon,
                                              "loading-icon": __props.loadingIcon,
                                              "external-icon": __props.externalIcon,
                                              size: __props.size,
                                              filter: item.filter,
                                              "filter-fields": item.filterFields || __props.filterFields,
                                              "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                            }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                              vueExports.renderList(getProxySlots(), (_6, name) => {
                                                return {
                                                  name,
                                                  fn: vueExports.withCtx((slotData, _push7, _parent7, _scopeId6) => {
                                                    if (_push7) {
                                                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData), null, _push7, _parent7, _scopeId6);
                                                    } else {
                                                      return [
                                                        vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                                      ];
                                                    }
                                                  })
                                                };
                                              })
                                            ]), _parent6, _scopeId5));
                                          } else {
                                            return [
                                              vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                                as: "button",
                                                type: "button",
                                                disabled: item.disabled,
                                                "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                                "data-slot": "item",
                                                class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                              }, {
                                                default: vueExports.withCtx(() => [
                                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                    item,
                                                    index
                                                  }, null, 8, ["item", "index"])
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled", "text-value", "class"]),
                                              vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                                                sub: "",
                                                class: item.ui?.content,
                                                ui: __props.ui,
                                                "ui-override": __props.uiOverride,
                                                portal: __props.portal,
                                                items: item.children,
                                                align: "start",
                                                "align-offset": -4,
                                                "side-offset": 3,
                                                "label-key": __props.labelKey,
                                                "description-key": __props.descriptionKey,
                                                "checked-icon": __props.checkedIcon,
                                                "loading-icon": __props.loadingIcon,
                                                "external-icon": __props.externalIcon,
                                                size: __props.size,
                                                filter: item.filter,
                                                "filter-fields": item.filterFields || __props.filterFields,
                                                "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                              }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                                vueExports.renderList(getProxySlots(), (_6, name) => {
                                                  return {
                                                    name,
                                                    fn: vueExports.withCtx((slotData) => [
                                                      vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                                    ])
                                                  };
                                                })
                                              ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else if (item.type === "checkbox") {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).CheckboxItem, {
                                        "model-value": item.checked,
                                        disabled: item.disabled,
                                        "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                        "onUpdate:modelValue": item.onUpdateChecked,
                                        onSelect: item.onSelect
                                      }, {
                                        default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                item,
                                                index
                                              }, null, 8, ["item", "index"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, vueExports.mergeProps({ ref_for: true }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                        default: vueExports.withCtx(({ active, ...slotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenu).Item, {
                                              "as-child": "",
                                              disabled: item.disabled,
                                              "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                              onSelect: item.onSelect
                                            }, {
                                              default: vueExports.withCtx((_5, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                                    "data-slot": "item",
                                                    class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                                  }), {
                                                    default: vueExports.withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseItemTemplate), {
                                                          item,
                                                          active,
                                                          index
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                            item,
                                                            active,
                                                            index
                                                          }, null, 8, ["item", "active", "index"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                                      "data-slot": "item",
                                                      class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                                    }), {
                                                      default: vueExports.withCtx(() => [
                                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                          item,
                                                          active,
                                                          index
                                                        }, null, 8, ["item", "active", "index"])
                                                      ]),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              vueExports.createVNode(vueExports.unref(DropdownMenu).Item, {
                                                "as-child": "",
                                                disabled: item.disabled,
                                                "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                                onSelect: item.onSelect
                                              }, {
                                                default: vueExports.withCtx(() => [
                                                  vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                                    "data-slot": "item",
                                                    class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                                  }), {
                                                    default: vueExports.withCtx(() => [
                                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                        item,
                                                        active,
                                                        index
                                                      }, null, 8, ["item", "active", "index"])
                                                    ]),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled", "text-value", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    }
                                    _push5(`<!--]-->`);
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                        key: `group-${groupIndex}-${index}`
                                      }, [
                                        item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                          key: 0,
                                          "data-slot": "label",
                                          class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                          key: 1,
                                          "data-slot": "separator",
                                          class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                        }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                          key: 2,
                                          open: item.open,
                                          "default-open": item.defaultOpen
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                              as: "button",
                                              type: "button",
                                              disabled: item.disabled,
                                              "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                            }, {
                                              default: vueExports.withCtx(() => [
                                                vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                  item,
                                                  index
                                                }, null, 8, ["item", "index"])
                                              ]),
                                              _: 2
                                            }, 1032, ["disabled", "text-value", "class"]),
                                            vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                                              sub: "",
                                              class: item.ui?.content,
                                              ui: __props.ui,
                                              "ui-override": __props.uiOverride,
                                              portal: __props.portal,
                                              items: item.children,
                                              align: "start",
                                              "align-offset": -4,
                                              "side-offset": 3,
                                              "label-key": __props.labelKey,
                                              "description-key": __props.descriptionKey,
                                              "checked-icon": __props.checkedIcon,
                                              "loading-icon": __props.loadingIcon,
                                              "external-icon": __props.externalIcon,
                                              size: __props.size,
                                              filter: item.filter,
                                              "filter-fields": item.filterFields || __props.filterFields,
                                              "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                            }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                              vueExports.renderList(getProxySlots(), (_5, name) => {
                                                return {
                                                  name,
                                                  fn: vueExports.withCtx((slotData) => [
                                                    vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                                  ])
                                                };
                                              })
                                            ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                          ]),
                                          _: 2
                                        }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                          key: 3,
                                          "model-value": item.checked,
                                          disabled: item.disabled,
                                          "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                          "onUpdate:modelValue": item.onUpdateChecked,
                                          onSelect: item.onSelect
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ]),
                                          _: 2
                                        }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                                          key: 4,
                                          ref_for: true
                                        }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                          default: vueExports.withCtx(({ active, ...slotProps }) => [
                                            vueExports.createVNode(vueExports.unref(DropdownMenu).Item, {
                                              "as-child": "",
                                              disabled: item.disabled,
                                              "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                              onSelect: item.onSelect
                                            }, {
                                              default: vueExports.withCtx(() => [
                                                vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                                  "data-slot": "item",
                                                  class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                                }), {
                                                  default: vueExports.withCtx(() => [
                                                    vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                      item,
                                                      active,
                                                      index
                                                    }, null, 8, ["item", "active", "index"])
                                                  ]),
                                                  _: 2
                                                }, 1040, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["disabled", "text-value", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040))
                                      ], 64);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (searchTerm.value && !hasFilteredItems.value) {
                          _push4(`<div data-slot="empty" class="${serverRenderer_cjs_prodExports.ssrRenderClass(__props.ui.empty({ class: __props.uiOverride?.empty }))}"${_scopeId3}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                            _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value }))}`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "content-bottom", {
                          sub: __props.sub ?? false
                        }, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!__props.filter ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Filter, {
                            key: 0,
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "as-child": ""
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({
                                autofocus: "",
                                autocomplete: "off",
                                size: __props.size
                              }, inputProps.value, {
                                "data-slot": "input",
                                class: __props.ui.input({ class: __props.uiOverride?.input }),
                                onChange: vueExports.withModifiers(() => {
                                }, ["stop"])
                              }), null, 16, ["size", "class", "onChange"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])) : vueExports.createCommentVNode("", true),
                          vueExports.renderSlot(_ctx.$slots, "content-top", {
                            sub: __props.sub ?? false
                          }),
                          !searchTerm.value || hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            role: "presentation",
                            "data-slot": "viewport",
                            class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Group, {
                                key: `group-${groupIndex}`,
                                "data-slot": "group",
                                class: __props.ui.group({ class: __props.uiOverride?.group })
                              }, {
                                default: vueExports.withCtx(() => [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                      key: `group-${groupIndex}-${index}`
                                    }, [
                                      item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                        key: 0,
                                        "data-slot": "label",
                                        class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                        key: 1,
                                        "data-slot": "separator",
                                        class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                      }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                        key: 2,
                                        open: item.open,
                                        "default-open": item.defaultOpen
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                            as: "button",
                                            type: "button",
                                            disabled: item.disabled,
                                            "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                          }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                item,
                                                index
                                              }, null, 8, ["item", "index"])
                                            ]),
                                            _: 2
                                          }, 1032, ["disabled", "text-value", "class"]),
                                          vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                                            sub: "",
                                            class: item.ui?.content,
                                            ui: __props.ui,
                                            "ui-override": __props.uiOverride,
                                            portal: __props.portal,
                                            items: item.children,
                                            align: "start",
                                            "align-offset": -4,
                                            "side-offset": 3,
                                            "label-key": __props.labelKey,
                                            "description-key": __props.descriptionKey,
                                            "checked-icon": __props.checkedIcon,
                                            "loading-icon": __props.loadingIcon,
                                            "external-icon": __props.externalIcon,
                                            size: __props.size,
                                            filter: item.filter,
                                            "filter-fields": item.filterFields || __props.filterFields,
                                            "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                          }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                            vueExports.renderList(getProxySlots(), (_4, name) => {
                                              return {
                                                name,
                                                fn: vueExports.withCtx((slotData) => [
                                                  vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                                ])
                                              };
                                            })
                                          ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                        ]),
                                        _: 2
                                      }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                        key: 3,
                                        "model-value": item.checked,
                                        disabled: item.disabled,
                                        "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                        "onUpdate:modelValue": item.onUpdateChecked,
                                        onSelect: item.onSelect
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                                        key: 4,
                                        ref_for: true
                                      }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                        default: vueExports.withCtx(({ active, ...slotProps }) => [
                                          vueExports.createVNode(vueExports.unref(DropdownMenu).Item, {
                                            "as-child": "",
                                            disabled: item.disabled,
                                            "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                            onSelect: item.onSelect
                                          }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                                "data-slot": "item",
                                                class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                              }), {
                                                default: vueExports.withCtx(() => [
                                                  vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index
                                                  }, null, 8, ["item", "active", "index"])
                                                ]),
                                                _: 2
                                              }, 1040, ["class"])
                                            ]),
                                            _: 2
                                          }, 1032, ["disabled", "text-value", "onSelect"])
                                        ]),
                                        _: 2
                                      }, 1040))
                                    ], 64);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ], 2)) : vueExports.createCommentVNode("", true),
                          searchTerm.value && !hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 2,
                            "data-slot": "empty",
                            class: __props.ui.empty({ class: __props.uiOverride?.empty })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.renderSlot(_ctx.$slots, "default"),
                          vueExports.renderSlot(_ctx.$slots, "content-bottom", {
                            sub: __props.sub ?? false
                          })
                        ];
                      }
                    }),
                    _: 3
                  }), _parent3, _scopeId2);
                } else {
                  return [
                    (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(__props.sub ? vueExports.unref(DropdownMenu).SubContent : vueExports.unref(DropdownMenu).Content), vueExports.mergeProps({
                      "data-slot": "content",
                      class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
                    }, vueExports.unref(contentProps)), {
                      default: vueExports.withCtx(() => [
                        !!__props.filter ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Filter, {
                          key: 0,
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({
                              autofocus: "",
                              autocomplete: "off",
                              size: __props.size
                            }, inputProps.value, {
                              "data-slot": "input",
                              class: __props.ui.input({ class: __props.uiOverride?.input }),
                              onChange: vueExports.withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["size", "class", "onChange"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])) : vueExports.createCommentVNode("", true),
                        vueExports.renderSlot(_ctx.$slots, "content-top", {
                          sub: __props.sub ?? false
                        }),
                        !searchTerm.value || hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
                          role: "presentation",
                          "data-slot": "viewport",
                          class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                            return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Group, {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: __props.ui.group({ class: __props.uiOverride?.group })
                            }, {
                              default: vueExports.withCtx(() => [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                    key: `group-${groupIndex}-${index}`
                                  }, [
                                    item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                      key: 0,
                                      "data-slot": "label",
                                      class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                      key: 1,
                                      "data-slot": "separator",
                                      class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                    }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                      key: 2,
                                      open: item.open,
                                      "default-open": item.defaultOpen
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                          as: "button",
                                          type: "button",
                                          disabled: item.disabled,
                                          "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                          "data-slot": "item",
                                          class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ]),
                                          _: 2
                                        }, 1032, ["disabled", "text-value", "class"]),
                                        vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                                          sub: "",
                                          class: item.ui?.content,
                                          ui: __props.ui,
                                          "ui-override": __props.uiOverride,
                                          portal: __props.portal,
                                          items: item.children,
                                          align: "start",
                                          "align-offset": -4,
                                          "side-offset": 3,
                                          "label-key": __props.labelKey,
                                          "description-key": __props.descriptionKey,
                                          "checked-icon": __props.checkedIcon,
                                          "loading-icon": __props.loadingIcon,
                                          "external-icon": __props.externalIcon,
                                          size: __props.size,
                                          filter: item.filter,
                                          "filter-fields": item.filterFields || __props.filterFields,
                                          "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                        }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                          vueExports.renderList(getProxySlots(), (_3, name) => {
                                            return {
                                              name,
                                              fn: vueExports.withCtx((slotData) => [
                                                vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                              ])
                                            };
                                          })
                                        ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                      ]),
                                      _: 2
                                    }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                      key: 3,
                                      "model-value": item.checked,
                                      disabled: item.disabled,
                                      "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                      "data-slot": "item",
                                      class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                      "onUpdate:modelValue": item.onUpdateChecked,
                                      onSelect: item.onSelect
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                          item,
                                          index
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 2
                                    }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                                      key: 4,
                                      ref_for: true
                                    }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                      default: vueExports.withCtx(({ active, ...slotProps }) => [
                                        vueExports.createVNode(vueExports.unref(DropdownMenu).Item, {
                                          "as-child": "",
                                          disabled: item.disabled,
                                          "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                          onSelect: item.onSelect
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                              "data-slot": "item",
                                              class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                            }), {
                                              default: vueExports.withCtx(() => [
                                                vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["disabled", "text-value", "onSelect"])
                                      ]),
                                      _: 2
                                    }, 1040))
                                  ], 64);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ], 2)) : vueExports.createCommentVNode("", true),
                        searchTerm.value && !hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 2,
                          "data-slot": "empty",
                          class: __props.ui.empty({ class: __props.uiOverride?.empty })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.renderSlot(_ctx.$slots, "default"),
                        vueExports.renderSlot(_ctx.$slots, "content-bottom", {
                          sub: __props.sub ?? false
                        })
                      ]),
                      _: 3
                    }, 16, ["class"]))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(FieldGroupReset), null, {
                default: vueExports.withCtx(() => [
                  (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(__props.sub ? vueExports.unref(DropdownMenu).SubContent : vueExports.unref(DropdownMenu).Content), vueExports.mergeProps({
                    "data-slot": "content",
                    class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
                  }, vueExports.unref(contentProps)), {
                    default: vueExports.withCtx(() => [
                      !!__props.filter ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Filter, {
                        key: 0,
                        modelValue: searchTerm.value,
                        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                        "as-child": ""
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_sfc_main$d, vueExports.mergeProps({
                            autofocus: "",
                            autocomplete: "off",
                            size: __props.size
                          }, inputProps.value, {
                            "data-slot": "input",
                            class: __props.ui.input({ class: __props.uiOverride?.input }),
                            onChange: vueExports.withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["size", "class", "onChange"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])) : vueExports.createCommentVNode("", true),
                      vueExports.renderSlot(_ctx.$slots, "content-top", {
                        sub: __props.sub ?? false
                      }),
                      !searchTerm.value || hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        role: "presentation",
                        "data-slot": "viewport",
                        class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(filteredGroups.value, (group, groupIndex) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Group, {
                            key: `group-${groupIndex}`,
                            "data-slot": "group",
                            class: __props.ui.group({ class: __props.uiOverride?.group })
                          }, {
                            default: vueExports.withCtx(() => [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(group, (item, index) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                  key: `group-${groupIndex}-${index}`
                                }, [
                                  item.type === "label" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Label, {
                                    key: 0,
                                    "data-slot": "label",
                                    class: __props.ui.label({ class: [__props.uiOverride?.label, item.ui?.label, item.class] })
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])) : item.type === "separator" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Separator, {
                                    key: 1,
                                    "data-slot": "separator",
                                    class: __props.ui.separator({ class: [__props.uiOverride?.separator, item.ui?.separator, item.class] })
                                  }, null, 8, ["class"])) : item?.children?.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).Sub, {
                                    key: 2,
                                    open: item.open,
                                    "default-open": item.defaultOpen
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                        "data-slot": "item",
                                        class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color })
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                                        sub: "",
                                        class: item.ui?.content,
                                        ui: __props.ui,
                                        "ui-override": __props.uiOverride,
                                        portal: __props.portal,
                                        items: item.children,
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": __props.labelKey,
                                        "description-key": __props.descriptionKey,
                                        "checked-icon": __props.checkedIcon,
                                        "loading-icon": __props.loadingIcon,
                                        "external-icon": __props.externalIcon,
                                        size: __props.size,
                                        filter: item.filter,
                                        "filter-fields": item.filterFields || __props.filterFields,
                                        "ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
                                      }, { ref_for: true }, item.content), vueExports.createSlots({ _: 2 }, [
                                        vueExports.renderList(getProxySlots(), (_2, name) => {
                                          return {
                                            name,
                                            fn: vueExports.withCtx((slotData) => [
                                              vueExports.renderSlot(_ctx.$slots, name, vueExports.mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
                                    ]),
                                    _: 2
                                  }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenu).CheckboxItem, {
                                    key: 3,
                                    "model-value": item.checked,
                                    disabled: item.disabled,
                                    "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                    "data-slot": "item",
                                    class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color }),
                                    "onUpdate:modelValue": item.onUpdateChecked,
                                    onSelect: item.onSelect
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$v, vueExports.mergeProps({
                                    key: 4,
                                    ref_for: true
                                  }, vueExports.unref(pickLinkProps)(item), { custom: "" }), {
                                    default: vueExports.withCtx(({ active, ...slotProps }) => [
                                      vueExports.createVNode(vueExports.unref(DropdownMenu).Item, {
                                        "as-child": "",
                                        disabled: item.disabled,
                                        "text-value": vueExports.unref(get$1)(item, props.labelKey),
                                        onSelect: item.onSelect
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(_sfc_main$w, vueExports.mergeProps({ ref_for: true }, slotProps, {
                                            "data-slot": "item",
                                            class: __props.ui.item({ class: [__props.uiOverride?.item, item.ui?.item, item.class], color: item?.color, active })
                                          }), {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(vueExports.unref(ReuseItemTemplate), {
                                                item,
                                                active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "onSelect"])
                                    ]),
                                    _: 2
                                  }, 1040))
                                ], 64);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 128))
                      ], 2)) : vueExports.createCommentVNode("", true),
                      searchTerm.value && !hasFilteredItems.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        "data-slot": "empty",
                        class: __props.ui.empty({ class: __props.uiOverride?.empty })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                          vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)
                        ])
                      ], 2)) : vueExports.createCommentVNode("", true),
                      vueExports.renderSlot(_ctx.$slots, "default"),
                      vueExports.renderSlot(_ctx.$slots, "content-bottom", {
                        sub: __props.sub ?? false
                      })
                    ]),
                    _: 3
                  }, 16, ["class"]))
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "content": "min-w-32 max-h-(--reka-dropdown-menu-content-available-height) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col",
    "input": "border-b border-default",
    "empty": "text-center text-muted",
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
    "arrow": "fill-bg stroke-default",
    "group": "p-1 isolate",
    "label": "w-full flex items-center font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
    "itemTrailingKbdsSize": "",
    "itemWrapper": "flex-1 flex flex-col text-start min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted",
    "itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
  },
  "variants": {
    "color": {
      "primary": "",
      "neutral": "",
      "success": "",
      "warning": "",
      "error": "",
      "info": ""
    },
    "active": {
      "true": {
        "item": "text-highlighted before:bg-elevated",
        "itemLeadingIcon": "text-default"
      },
      "false": {
        "item": [
          "text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    },
    "size": {
      "xs": {
        "label": "p-1 text-xs gap-1",
        "item": "p-1 text-xs gap-1",
        "empty": "p-2 text-xs",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "sm": {
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "empty": "p-2.5 text-xs",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "md": {
        "label": "p-1.5 text-sm gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "empty": "p-2.5 text-sm",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "lg": {
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-sm gap-2",
        "empty": "p-3 text-sm",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "md"
      },
      "xl": {
        "label": "p-2 text-base gap-2",
        "item": "p-2 text-base gap-2",
        "empty": "p-3 text-base",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemTrailingIcon": "size-6",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "lg"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": false,
      "class": {
        "item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
        "itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "neutral",
      "active": false,
      "class": {
        "item": "text-neutral data-highlighted:text-neutral data-highlighted:before:bg-neutral/10 data-[state=open]:before:bg-neutral/10",
        "itemLeadingIcon": "text-neutral/75 group-data-highlighted:text-neutral group-data-[state=open]:text-neutral"
      }
    },
    {
      "color": "success",
      "active": false,
      "class": {
        "item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
        "itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "warning",
      "active": false,
      "class": {
        "item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
        "itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "active": false,
      "class": {
        "item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
        "itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "info",
      "active": false,
      "class": {
        "item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
        "itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "primary",
      "active": true,
      "class": {
        "item": "text-primary before:bg-primary/10",
        "itemLeadingIcon": "text-primary"
      }
    },
    {
      "color": "neutral",
      "active": true,
      "class": {
        "item": "text-neutral before:bg-neutral/10",
        "itemLeadingIcon": "text-neutral"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "item": "text-success before:bg-success/10",
        "itemLeadingIcon": "text-success"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "item": "text-warning before:bg-warning/10",
        "itemLeadingIcon": "text-warning"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "item": "text-error before:bg-error/10",
        "itemLeadingIcon": "text-error"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "item": "text-info before:bg-info/10",
        "itemLeadingIcon": "text-info"
      }
    }
  ],
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$4 = {
  __name: "UDropdownMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    size: { type: null, required: false },
    items: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    loadingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    filter: { type: [Boolean, Object], required: false, default: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ vueExports.mergeModels(["update:open"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const searchTerm = vueExports.useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const props = useComponentProps("dropdownMenu", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "defaultOpen", "open", "modal"), emits);
    const contentProps = vueExports.toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = vueExports.toRef(() => defu(props.arrow, { rounded: true }));
    const getProxySlots = () => omit(slots, ["default"]);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.dropdownMenu || {} })({
      size: props.size
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuRoot_default), vueExports.mergeProps(vueExports.unref(rootProps), _attrs), {
        default: vueExports.withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuTrigger_default), {
                "as-child": "",
                class: vueExports.unref(props).class,
                disabled: vueExports.unref(props).disabled
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      vueExports.renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.mergeProps({
              "search-term": searchTerm.value,
              "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
              class: ui.value.content({ class: [!slots.default && vueExports.unref(props).class, vueExports.unref(props).ui?.content] }),
              ui: ui.value,
              "ui-override": vueExports.unref(props).ui
            }, contentProps.value, {
              items: vueExports.unref(props).items,
              portal: vueExports.unref(props).portal,
              "label-key": vueExports.unref(props).labelKey,
              "description-key": vueExports.unref(props).descriptionKey,
              "checked-icon": vueExports.unref(props).checkedIcon,
              "loading-icon": vueExports.unref(props).loadingIcon,
              "external-icon": vueExports.unref(props).externalIcon,
              size: vueExports.unref(props).size,
              filter: vueExports.unref(props).filter,
              "filter-fields": vueExports.unref(props).filterFields,
              "ignore-filter": vueExports.unref(props).ignoreFilter
            }), vueExports.createSlots({
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!!vueExports.unref(props).arrow) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps(arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: vueExports.unref(props).ui?.arrow })
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!vueExports.unref(props).arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: vueExports.unref(props).ui?.arrow })
                    }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              vueExports.renderList(getProxySlots(), (_, name) => {
                return {
                  name,
                  fn: vueExports.withCtx((slotData, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        vueExports.renderSlot(_ctx.$slots, name, slotData)
                      ];
                    }
                  })
                };
              })
            ]), _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuTrigger_default), {
                key: 0,
                "as-child": "",
                class: vueExports.unref(props).class,
                disabled: vueExports.unref(props).disabled
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class", "disabled"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(_sfc_main$5, vueExports.mergeProps({
                "search-term": searchTerm.value,
                "onUpdate:searchTerm": ($event) => searchTerm.value = $event,
                class: ui.value.content({ class: [!slots.default && vueExports.unref(props).class, vueExports.unref(props).ui?.content] }),
                ui: ui.value,
                "ui-override": vueExports.unref(props).ui
              }, contentProps.value, {
                items: vueExports.unref(props).items,
                portal: vueExports.unref(props).portal,
                "label-key": vueExports.unref(props).labelKey,
                "description-key": vueExports.unref(props).descriptionKey,
                "checked-icon": vueExports.unref(props).checkedIcon,
                "loading-icon": vueExports.unref(props).loadingIcon,
                "external-icon": vueExports.unref(props).externalIcon,
                size: vueExports.unref(props).size,
                filter: vueExports.unref(props).filter,
                "filter-fields": vueExports.unref(props).filterFields,
                "ignore-filter": vueExports.unref(props).ignoreFilter
              }), vueExports.createSlots({
                default: vueExports.withCtx(() => [
                  !!vueExports.unref(props).arrow ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(DropdownMenuArrow_default), vueExports.mergeProps({ key: 0 }, arrowProps.value, {
                    "data-slot": "arrow",
                    class: ui.value.arrow({ class: vueExports.unref(props).ui?.arrow })
                  }), null, 16, ["class"])) : vueExports.createCommentVNode("", true)
                ]),
                _: 2
              }, [
                vueExports.renderList(getProxySlots(), (_, name) => {
                  return {
                    name,
                    fn: vueExports.withCtx((slotData) => [
                      vueExports.renderSlot(_ctx.$slots, name, slotData)
                    ])
                  };
                })
              ]), 1040, ["search-term", "onUpdate:searchTerm", "class", "ui", "ui-override", "items", "portal", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon", "size", "filter", "filter-fields", "ignore-filter"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DropdownFilters",
  __ssrInlineRender: true,
  props: {
    field: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: Number,
      default: null
    }
  },
  emits: ["change", "update:modelValue"],
  async setup(__props, { expose: __expose, emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const config = useRuntimeConfig();
    const isOpen = vueExports.ref(false);
    const selectedItem = vueExports.ref(null);
    const { data: filterOptions } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData(
      `filters-${props.field}`,
      () => $fetch(`${config.public.apiBaseUrl}/api/vacancy-filters/${props.field}/`),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    vueExports.watch(() => props.modelValue, (val) => {
      if (val == null) {
        selectedItem.value = null;
        return;
      }
      const match = (filterOptions.value ?? []).find((o) => o.id === val);
      if (match) selectedItem.value = match;
    }, { immediate: true });
    const displayLabel = vueExports.computed(() => selectedItem.value?.name || props.label || props.field);
    function selectOption(option) {
      selectedItem.value = option;
      const value = option?.id ?? null;
      const label = option?.name ?? null;
      emit("update:modelValue", { value, label });
      emit("change", { field: props.field, value, label });
    }
    const menuItems = vueExports.computed(() => {
      const items = [
        {
          label: "Все",
          onSelect: () => selectOption(null)
        }
      ];
      for (const option of filterOptions.value ?? []) {
        items.push({
          label: option.name,
          icon: selectedItem.value?.id === option.id ? "i-lucide-check" : void 0,
          onSelect: () => selectOption(option)
        });
      }
      return [items];
    });
    function reset() {
      selectOption(null);
    }
    __expose({ reset });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdownMenu = _sfc_main$4;
      const _component_UButton = _sfc_main$u;
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UDropdownMenu, vueExports.mergeProps({
        items: vueExports.unref(menuItems),
        ui: { content: "w-(--reka-dropdown-menu-trigger-width)" },
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: vueExports.unref(displayLabel),
              "trailing-icon": vueExports.unref(isOpen) ? "i-lucide-chevron-up" : "i-lucide-chevron-down",
              color: "neutral",
              variant: "outline",
              "aria-expanded": vueExports.unref(isOpen)
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_component_UButton, {
                label: vueExports.unref(displayLabel),
                "trailing-icon": vueExports.unref(isOpen) ? "i-lucide-chevron-up" : "i-lucide-chevron-down",
                color: "neutral",
                variant: "outline",
                "aria-expanded": vueExports.unref(isOpen)
              }, null, 8, ["label", "trailing-icon", "aria-expanded"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropdownFilters.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "DropdownFilters" });
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "FilterBar",
  __ssrInlineRender: true,
  props: {
    filterDefs: {},
    total: {},
    ariaLabel: { default: "Фильтры вакансий" }
  },
  emits: ["change", "reset"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const activeFilters = vueExports.reactive({});
    const filterRefs = vueExports.ref({});
    function setFilterRef(field, el) {
      if (el && typeof el === "object" && "reset" in el) {
        filterRefs.value[field] = el;
      }
    }
    function onFilterUpdate(field, payload) {
      if (payload.value == null) {
        delete activeFilters[field];
      } else {
        activeFilters[field] = payload;
      }
      emitChange();
    }
    function emitChange() {
      const result = {};
      for (const [field, data] of Object.entries(activeFilters)) {
        result[field] = data.value;
      }
      emit("change", result);
    }
    const activeChips = vueExports.computed(
      () => Object.entries(activeFilters).filter(([, data]) => data.label).map(([field, data]) => ({ field, label: data.label }))
    );
    const hasActiveFilters = vueExports.computed(() => activeChips.value.length > 0);
    function clearFilter(field) {
      delete activeFilters[field];
      filterRefs.value[field]?.reset();
      emitChange();
    }
    function resetAll() {
      for (const field of Object.keys(activeFilters)) {
        filterRefs.value[field]?.reset();
      }
      for (const key of Object.keys(activeFilters)) {
        delete activeFilters[key];
      }
      emit("change", {});
      emit("reset");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownFilters = __nuxt_component_0;
      const _component_UButton = _sfc_main$u;
      const _component_UBadge = _sfc_main$i;
      const _component_UIcon = _sfc_main$A;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "ds-container pb-6" }, _attrs))}><div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"><div class="flex flex-wrap gap-3" role="group"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", __props.ariaLabel)}><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(__props.filterDefs, (filter) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DropdownFilters, {
          key: filter.field,
          ref_for: true,
          ref: (el) => setFilterRef(filter.field, el),
          field: filter.field,
          label: filter.label,
          "model-value": vueExports.unref(activeFilters)[filter.field]?.value ?? null,
          "onUpdate:modelValue": (payload) => onFilterUpdate(filter.field, payload)
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-3 sm:ml-auto"><p class="text-caption text-text-secondary" aria-live="polite" aria-atomic="true"> Найдено: <span class="font-semibold text-text-primary">${serverRenderer_cjs_prodExports.ssrInterpolate(__props.total)}</span></p>`);
      if (vueExports.unref(hasActiveFilters)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          label: "Сбросить всё",
          color: "error",
          variant: "outline",
          size: "sm",
          "aria-label": "Сбросить все фильтры",
          onClick: resetAll
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (vueExports.unref(activeChips).length) {
        _push(`<div class="flex flex-wrap gap-2 mt-4" role="list" aria-label="Активные фильтры"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(activeChips), (chip) => {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
            key: chip.field,
            color: "neutral",
            variant: "subtle",
            size: "md",
            role: "listitem",
            class: "cursor-pointer gap-1 min-h-9 px-3",
            "aria-label": `Убрать фильтр: ${chip.label}`,
            onClick: ($event) => clearFilter(chip.field)
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(chip.label)} `);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                  name: "i-lucide-x",
                  class: "h-3.5 w-3.5",
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(chip.label) + " ", 1),
                  vueExports.createVNode(_component_UIcon, {
                    name: "i-lucide-x",
                    class: "h-3.5 w-3.5",
                    "aria-hidden": "true"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ds/FilterBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "DsFilterBar" });
const _sfc_main$1 = {
  __name: "VacancyCards",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Последние вакансии"
    },
    subtitle: {
      type: String,
      default: "Найдите подходящую вакансию для вашей карьеры"
    },
    vacancies: {
      type: Array,
      required: true,
      default: () => []
    },
    pending: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: "md"
    },
    headingAlign: {
      type: String,
      default: "left"
    },
    skeletonCount: {
      type: Number,
      default: 6
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const isApplicationFormOpen = vueExports.ref(false);
    const selectedVacancy = vueExports.ref(null);
    const isSubmitting = vueExports.ref(false);
    const submitStatus = vueExports.ref(null);
    const liveMessage = vueExports.ref("");
    const toast = useToast();
    const openApplicationForm = (vacancy) => {
      submitStatus.value = null;
      selectedVacancy.value = vacancy;
      isApplicationFormOpen.value = true;
    };
    const closeApplicationForm = () => {
      isApplicationFormOpen.value = false;
      selectedVacancy.value = null;
      submitStatus.value = null;
    };
    const handleFormSubmit = async (formData) => {
      isSubmitting.value = true;
      submitStatus.value = null;
      try {
        const data = new FormData();
        data.append("vacancy_title", selectedVacancy.value?.title || "");
        for (const [key, value] of Object.entries(formData)) {
          if (value instanceof File || Array.isArray(value) && value[0] instanceof File) {
            const files = Array.isArray(value) ? value : [value];
            for (const file of files) {
              if (file instanceof File) {
                data.append(key, file);
              }
            }
          } else if (value !== null && value !== void 0) {
            let fieldName = key.replace(/([A-Z])/g, "_$1").toLowerCase();
            const fieldMap = {
              last_name: "last_name",
              first_name: "first_name",
              middle_name: "middle_name",
              birth_date: "birth_date",
              registration_address: "registration_address",
              residence_address: "residence_address",
              municipal_experience: "municipal_experience",
              work_experience: "work_experience",
              marital_status: "marital_status",
              vacancy_source: "vacancy_source",
              consent_false_info: "consent_false_info",
              consent_verification: "consent_verification",
              consent_personal_data: "consent_personal_data",
              consent_resume_forwarding: "consent_resume_forwarding"
            };
            fieldName = fieldMap[fieldName] || fieldName;
            if (typeof value === "boolean") {
              data.append(fieldName, value ? "true" : "false");
            } else if (value instanceof Date) {
              data.append(fieldName, value.toISOString().split("T")[0]);
            } else {
              data.append(fieldName, value);
            }
          }
        }
        await $fetch(`${config.public.apiBaseUrl}/api/apply/`, {
          method: "POST",
          body: data
        });
        submitStatus.value = "success";
        liveMessage.value = "Заявка отправлена. Ваша заявка на вакансию успешно отправлена.";
        toast.add({
          title: "Заявка отправлена",
          description: "Ваша заявка на вакансию успешно отправлена.",
          color: "success"
        });
        setTimeout(() => closeApplicationForm(), 2e3);
      } catch (error) {
        console.error("Server error:", error.data || error.message || error);
        submitStatus.value = "error";
        liveMessage.value = "Произошла ошибка при отправке заявки. Попробуйте снова.";
        toast.add({
          id: "apply-error",
          title: "Произошла ошибка",
          description: "Попробуйте снова",
          color: "error"
        });
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$l;
      const _component_DsSection = __nuxt_component_7;
      const _component_DsSectionHeading = __nuxt_component_9;
      const _component_DsSkeletonCard = __nuxt_component_4;
      const _component_DsEmptyState = __nuxt_component_5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex-1 pb-6" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: isApplicationFormOpen.value,
        "onUpdate:open": ($event) => isApplicationFormOpen.value = $event,
        title: "Отклик на вакансию"
      }, {
        body: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(ApplicationForm, {
              vacancy: selectedVacancy.value,
              onSubmit: handleFormSubmit,
              onCancel: closeApplicationForm
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(ApplicationForm, {
                vacancy: selectedVacancy.value,
                onSubmit: handleFormSubmit,
                onCancel: closeApplicationForm
              }, null, 8, ["vacancy"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div aria-live="polite" aria-atomic="true" class="sr-only">${serverRenderer_cjs_prodExports.ssrInterpolate(liveMessage.value)}</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSection, { spacing: __props.spacing }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSectionHeading, {
                title: __props.title,
                description: __props.subtitle,
                align: __props.headingAlign
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.pending) {
              _push2(`<div class="grid-cards"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(__props.skeletonCount, (i) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsSkeletonCard, { key: i }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (!__props.vacancies.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsEmptyState, {
                icon: "i-lucide-search-x",
                title: "Вакансии не найдены",
                description: "Попробуйте изменить параметры поиска или сбросить фильтры"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="grid-cards"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(__props.vacancies, (vacancy) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(VacancyCard, {
                  key: vacancy.id ?? vacancy.title,
                  vacancy,
                  onApply: openApplicationForm
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              __props.title ? (vueExports.openBlock(), vueExports.createBlock(_component_DsSectionHeading, {
                key: 0,
                title: __props.title,
                description: __props.subtitle,
                align: __props.headingAlign
              }, null, 8, ["title", "description", "align"])) : vueExports.createCommentVNode("", true),
              __props.pending ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                class: "grid-cards"
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.skeletonCount, (i) => {
                  return vueExports.openBlock(), vueExports.createBlock(_component_DsSkeletonCard, { key: i });
                }), 128))
              ])) : !__props.vacancies.length ? (vueExports.openBlock(), vueExports.createBlock(_component_DsEmptyState, {
                key: 2,
                icon: "i-lucide-search-x",
                title: "Вакансии не найдены",
                description: "Попробуйте изменить параметры поиска или сбросить фильтры"
              })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 3,
                class: "grid-cards"
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(__props.vacancies, (vacancy) => {
                  return vueExports.openBlock(), vueExports.createBlock(VacancyCard, {
                    key: vacancy.id ?? vacancy.title,
                    vacancy,
                    onApply: openApplicationForm
                  }, null, 8, ["vacancy"]);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VacancyCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "vacancies",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Вакансии" });
    const breadcrumbItems = buildBreadcrumbs({ label: "Вакансии" });
    const hero = useHeroImage("vacancies");
    const route = useRoute();
    const router = useRouter();
    const config = useRuntimeConfig();
    const filters = vueExports.reactive({});
    const vacancyFilterDefs = [
      { field: "work_schedule", label: "График работы" },
      { field: "required_experience", label: "Опыт работы" },
      { field: "job_type", label: "Тип должности" }
    ];
    const orgFilter = vueExports.computed(() => {
      const org = route.query.org;
      return typeof org === "string" ? decodeURIComponent(org) : "";
    });
    const { data: vacanciesData, refresh, pending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAsyncData("vacancies-page", () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, val]) => {
        if (val != null) params.append(key, String(val));
      });
      if (orgFilter.value) params.append("org", orgFilter.value);
      const queryString = params.toString();
      const url = `${config.public.apiBaseUrl}/api/vacancies/${queryString ? `?${queryString}` : ""}`;
      return $fetch(url);
    }, { server: false, watch: [orgFilter] })), __temp = await __temp, __restore(), __temp);
    function onFiltersChange(newFilters) {
      Object.keys(filters).forEach((k) => delete filters[k]);
      Object.assign(filters, newFilters);
      refresh();
    }
    function onFiltersReset() {
      Object.keys(filters).forEach((k) => delete filters[k]);
      refresh();
    }
    function clearOrgFilter() {
      router.push({ path: "/vacancies", query: { ...route.query, org: void 0 } });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DsPageHero = __nuxt_component_0$1;
      const _component_DsBreadcrumbs = __nuxt_component_1;
      const _component_DsFilterBar = __nuxt_component_2;
      const _component_UBadge = _sfc_main$i;
      const _component_UButton = _sfc_main$u;
      const _component_VacancyCards = _sfc_main$1;
      const _component_VacancySubscribeForm = __nuxt_component_8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsPageHero, {
        variant: "inner",
        title: "Вакансии",
        description: "Актуальный перечень вакантных должностей в администрации Сургутского района",
        image: vueExports.unref(hero).src,
        "image-alt": vueExports.unref(hero).alt
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsBreadcrumbs, { items: vueExports.unref(breadcrumbItems) }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_DsFilterBar, {
        "filter-defs": vacancyFilterDefs,
        total: vueExports.unref(vacanciesData)?.length ?? 0,
        onChange: onFiltersChange,
        onReset: onFiltersReset
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(orgFilter)) {
              _push2(`<div class="mt-4 flex flex-wrap items-center gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "md"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Орган: ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(orgFilter))}`);
                  } else {
                    return [
                      vueExports.createTextVNode(" Орган: " + vueExports.toDisplayString(vueExports.unref(orgFilter)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
                label: "Сбросить орган",
                color: "neutral",
                variant: "link",
                size: "sm",
                onClick: clearOrgFilter
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.unref(orgFilter) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "mt-4 flex flex-wrap items-center gap-2"
              }, [
                vueExports.createVNode(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "md"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createTextVNode(" Орган: " + vueExports.toDisplayString(vueExports.unref(orgFilter)), 1)
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_component_UButton, {
                  label: "Сбросить орган",
                  color: "neutral",
                  variant: "link",
                  size: "sm",
                  onClick: clearOrgFilter
                })
              ])) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ds-container pb-4">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        label: "Конкурсы на замещение должностей",
        to: "/tenders",
        color: "primary",
        variant: "outline",
        "trailing-icon": "i-lucide-arrow-right"
      }, null, _parent));
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_VacancyCards, {
        title: "Актуальные вакансии",
        subtitle: "Квалификационные требования, оплата труда и условия поступления на муниципальную службу",
        vacancies: vueExports.unref(vacanciesData) ?? [],
        pending: vueExports.unref(pending),
        "skeleton-count": 6
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_VacancySubscribeForm, {
        embedded: "",
        "initial-branch": vueExports.unref(orgFilter)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vacancies-CHFpGZYr.mjs.map
