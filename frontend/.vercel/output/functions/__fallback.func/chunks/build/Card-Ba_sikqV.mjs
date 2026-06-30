import { v as vueExports, k as useComponentProps, l as useAppConfig, t as tv, s as serverRenderer_cjs_prodExports, K as _sfc_main$v, f as _sfc_main$A } from './server.mjs';
import { s as ssrRenderSlot } from './ssrSlot-B9M8nGkC.mjs';
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

const theme = {
  "slots": {
    "base": [
      "group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default",
      "transition-colors"
    ],
    "icon": "size-6 mb-2 block",
    "title": "text-highlighted font-semibold",
    "description": "text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1",
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 text-dimmed pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "icon": "text-primary"
      },
      "neutral": {
        "icon": "text-highlighted"
      },
      "success": {
        "icon": "text-success"
      },
      "warning": {
        "icon": "text-warning"
      },
      "error": {
        "icon": "text-error"
      },
      "info": {
        "icon": "text-info"
      }
    },
    "to": {
      "true": ""
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "to": true,
      "class": {
        "base": "hover:bg-primary/10 hover:border-primary has-focus-visible:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:bg-neutral/10 hover:border-neutral has-focus-visible:border-neutral",
        "externalIcon": "group-hover:text-neutral"
      }
    },
    {
      "color": "success",
      "to": true,
      "class": {
        "base": "hover:bg-success/10 hover:border-success has-focus-visible:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "warning",
      "to": true,
      "class": {
        "base": "hover:bg-warning/10 hover:border-warning has-focus-visible:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error",
      "to": true,
      "class": {
        "base": "hover:bg-error/10 hover:border-error has-focus-visible:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "info",
      "to": true,
      "class": {
        "base": "hover:bg-info/10 hover:border-info has-focus-visible:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:bg-elevated/50 hover:border-inverted has-focus-visible:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseCard",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    icon: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = vueExports.useSlots();
    const props = useComponentProps("prose.card", _props);
    const appConfig = useAppConfig();
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.card || {} })({
      color: props.color,
      to: !!props.to,
      title: !!props.title
    }));
    const target = vueExports.computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    const ariaLabel = vueExports.computed(() => (props.title || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ui.value.base({ class: [vueExports.unref(props).ui?.base, vueExports.unref(props).class] })
      }, _attrs))}>`);
      if (vueExports.unref(props).to) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$v, vueExports.mergeProps({ "aria-label": ariaLabel.value }, { to: vueExports.unref(props).to, target: target.value, ..._ctx.$attrs }, {
          class: "focus:outline-none",
          raw: ""
        }), {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                vueExports.createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(props).icon) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
          name: vueExports.unref(props).icon,
          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!!vueExports.unref(props).to && target.value === "_blank") {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
          name: vueExports.unref(appConfig).ui.icons.external,
          class: ui.value.externalIcon({ class: vueExports.unref(props).ui?.externalIcon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(props).title || !!slots.title) {
        _push(`<p class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.title({ class: vueExports.unref(props).ui?.title }))}">`);
        ssrRenderSlot(_ctx.$slots, "title", { mdcUnwrap: "p" }, () => {
          _push(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).title)}`);
        }, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!!slots.default) {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}">`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Card-Ba_sikqV.mjs.map
