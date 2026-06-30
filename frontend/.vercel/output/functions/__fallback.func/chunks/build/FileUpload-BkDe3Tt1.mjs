import { v as vueExports, k as useComponentProps, l as useAppConfig, x as useLocale, E as createReusableTemplate, a9 as useFormField, t as tv, s as serverRenderer_cjs_prodExports, G as _sfc_main$x, g as _sfc_main$u, P as Primitive, f as _sfc_main$A, ae as VisuallyHidden_default } from './server.mjs';

function parseAcceptToDataTypes(accept) {
  if (!accept || accept === "*") {
    return void 0;
  }
  const types = accept.split(",").map((type) => {
    const trimmedType = type.trim();
    if (trimmedType.includes("/") && trimmedType.endsWith("/*")) {
      return trimmedType.split("/")[0] || trimmedType;
    }
    return trimmedType;
  }).filter((type) => {
    return !type.startsWith(".");
  });
  return types.length > 0 ? types : void 0;
}
function useFileUpload(options) {
  const {
    accept = "*"
  } = options;
  const inputRef = vueExports.ref();
  const dropzoneRef = vueExports.ref();
  vueExports.computed(() => parseAcceptToDataTypes(vueExports.unref(accept)));
  const isDragging = vueExports.ref(false);
  const fileDialog = vueExports.reactive({
    open: () => {
    }
  });
  function open() {
    fileDialog.open();
  }
  return {
    isDragging,
    open,
    inputRef,
    dropzoneRef
  };
}
const theme = {
  "slots": {
    "root": "relative flex flex-col",
    "base": [
      "w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2",
      "transition-[background]"
    ],
    "wrapper": "flex flex-col items-center justify-center text-center",
    "icon": "shrink-0",
    "avatar": "shrink-0",
    "label": "font-medium text-default mt-2",
    "description": "text-muted mt-1",
    "actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
    "files": "",
    "file": "relative",
    "fileLeadingAvatar": "shrink-0",
    "fileWrapper": "flex flex-col min-w-0",
    "fileName": "text-default truncate",
    "fileSize": "text-muted truncate",
    "fileTrailingButton": ""
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "area": {
        "wrapper": "px-4 py-3",
        "base": "p-4"
      },
      "button": {}
    },
    "size": {
      "xs": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2 py-1 gap-1",
        "fileWrapper": "flex-row gap-1"
      },
      "sm": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2.5 py-1.5 gap-1.5",
        "fileWrapper": "flex-row gap-1"
      },
      "md": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-xs px-2.5 py-1.5 gap-1.5"
      },
      "lg": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-sm px-3 py-2 gap-2",
        "fileSize": "text-xs"
      },
      "xl": {
        "base": "text-base",
        "icon": "size-6",
        "file": "text-sm px-3 py-2 gap-2"
      }
    },
    "layout": {
      "list": {
        "root": "gap-2 items-start",
        "files": "flex flex-col w-full gap-2",
        "file": "min-w-0 flex items-center border border-default rounded-md w-full",
        "fileTrailingButton": "ms-auto"
      },
      "grid": {
        "fileWrapper": "hidden",
        "fileLeadingAvatar": "size-full rounded-lg",
        "fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
      }
    },
    "position": {
      "inside": "",
      "outside": ""
    },
    "dropzone": {
      "true": "border-dashed data-[dragging=true]:bg-elevated/25"
    },
    "interactive": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "multiple": {
      "true": ""
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "class": "focus-visible:outline-primary"
    },
    {
      "color": "secondary",
      "class": "focus-visible:outline-secondary"
    },
    {
      "color": "tertiary",
      "class": "focus-visible:outline-tertiary"
    },
    {
      "color": "info",
      "class": "focus-visible:outline-info"
    },
    {
      "color": "success",
      "class": "focus-visible:outline-success"
    },
    {
      "color": "warning",
      "class": "focus-visible:outline-warning"
    },
    {
      "color": "error",
      "class": "focus-visible:outline-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "border-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "border-secondary"
    },
    {
      "color": "tertiary",
      "highlight": true,
      "class": "border-tertiary"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "border-info"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "border-success"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "border-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "border-error"
    },
    {
      "color": "neutral",
      "class": "focus-visible:outline-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "border-inverted"
    },
    {
      "size": "xs",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1"
      }
    },
    {
      "size": "sm",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "md",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "lg",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "size": "xl",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "variant": "button",
      "size": "xs",
      "class": {
        "base": "p-1"
      }
    },
    {
      "variant": "button",
      "size": "sm",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "md",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "lg",
      "class": {
        "base": "p-2"
      }
    },
    {
      "variant": "button",
      "size": "xl",
      "class": {
        "base": "p-2"
      }
    },
    {
      "layout": "grid",
      "multiple": true,
      "class": {
        "files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
        "file": "p-0 aspect-square"
      }
    },
    {
      "layout": "grid",
      "multiple": false,
      "class": {
        "file": "absolute inset-0 p-0"
      }
    },
    {
      "interactive": true,
      "disabled": false,
      "class": "hover:bg-elevated/25"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "area",
    "size": "md"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UFileUpload",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    icon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    layout: { type: null, required: false, default: "grid" },
    position: { type: null, required: false, default: "outside" },
    highlight: { type: Boolean, required: false },
    accept: { type: String, required: false, default: "*" },
    multiple: { type: Boolean, required: false, default: false },
    reset: { type: Boolean, required: false, default: false },
    dropzone: { type: Boolean, required: false, default: true },
    interactive: { type: Boolean, required: false, default: true },
    required: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    fileIcon: { type: null, required: false },
    fileImage: { type: Boolean, required: false, default: true },
    fileDelete: { type: [Boolean, Object], required: false, default: true },
    fileDeleteIcon: { type: null, required: false },
    preview: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vueExports.mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = vueExports.useSlots();
    const modelValue = vueExports.useModel(__props, "modelValue");
    const props = useComponentProps("fileUpload", _props);
    const appConfig = useAppConfig();
    const { t } = useLocale();
    const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
    const { accept, multiple, reset } = vueExports.toRefs(_props);
    const { isDragging, open, inputRef, dropzoneRef } = useFileUpload({
      accept,
      dropzone: props.dropzone
    });
    const { emitFormInput, emitFormChange, id, name, color, highlight, disabled, ariaAttrs } = useFormField(_props);
    const variant = vueExports.computed(() => props.multiple ? "area" : props.variant);
    const layout = vueExports.computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
    const position = vueExports.computed(() => {
      if (layout.value === "grid" && props.multiple) {
        return "inside";
      }
      if (variant.value === "button") {
        return "outside";
      }
      return props.position;
    });
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.fileUpload || {} })({
      dropzone: props.dropzone,
      interactive: props.interactive,
      color: color.value ?? props.color,
      size: props.size,
      variant: variant.value,
      layout: layout.value,
      position: position.value,
      multiple: props.multiple,
      highlight: highlight.value ?? props.highlight,
      disabled: props.disabled
    }));
    function createObjectUrl(file) {
      if (!props.fileImage) return void 0;
      return URL.createObjectURL(file);
    }
    function formatFileSize(bytes) {
      if (bytes === 0) {
        return "0B";
      }
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const size = bytes / Math.pow(k, i);
      const formattedSize = i === 0 ? size.toString() : size.toFixed(0);
      return `${formattedSize}${sizes[i]}`;
    }
    function onUpdate(files, reset2 = false) {
      if (props.multiple) {
        if (reset2) {
          modelValue.value = files;
        } else {
          const existingFiles = modelValue.value || [];
          modelValue.value = [...existingFiles, ...files || []];
        }
      } else {
        modelValue.value = files?.[0] ?? null;
      }
      const event = new Event("change", { target: { value: modelValue.value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function removeFile(index) {
      if (!modelValue.value) {
        return;
      }
      if (!props.multiple || index === void 0) {
        onUpdate([], true);
        dropzoneRef.value?.focus();
        return;
      }
      const files = [...modelValue.value];
      files.splice(index, 1);
      onUpdate(files, true);
      dropzoneRef.value?.focus();
    }
    vueExports.watch(modelValue, (newValue) => {
      const hasModelReset = props.multiple ? !newValue?.length : !newValue;
      if (hasModelReset && inputRef.value?.$el) {
        inputRef.value.$el.value = "";
      }
    });
    __expose({
      inputRef: vueExports.toRef(() => inputRef.value?.$el),
      dropzoneRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DefineFilesTemplate), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
              _push2(`<!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "files-top", {
                files: modelValue.value,
                open: vueExports.unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<div data-slot="files" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.files({ class: vueExports.unref(props).ui?.files }))}"${_scopeId}>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => {
                _push2(`<!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                  _push2(`<div data-slot="file" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.file({ class: vueExports.unref(props).ui?.file }))}"${_scopeId}>`);
                  serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "file", {
                    file,
                    index
                  }, () => {
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "file-leading", {
                      file,
                      index,
                      ui: ui.value
                    }, () => {
                      _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, {
                        as: { img: "img" },
                        src: createObjectUrl(file),
                        icon: vueExports.unref(props).fileIcon || vueExports.unref(appConfig).ui.icons.file,
                        size: vueExports.unref(props).size,
                        "data-slot": "fileLeadingAvatar",
                        class: ui.value.fileLeadingAvatar({ class: vueExports.unref(props).ui?.fileLeadingAvatar })
                      }, null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                    _push2(`<div data-slot="fileWrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.fileWrapper({ class: vueExports.unref(props).ui?.fileWrapper }))}"${_scopeId}><span data-slot="fileName" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.fileName({ class: vueExports.unref(props).ui?.fileName }))}"${_scopeId}>`);
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "file-name", {
                      file,
                      index
                    }, () => {
                      _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(file.name)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span><span data-slot="fileSize" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.fileSize({ class: vueExports.unref(props).ui?.fileSize }))}"${_scopeId}>`);
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "file-size", {
                      file,
                      index
                    }, () => {
                      _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(formatFileSize(file.size))}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span></div>`);
                    serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "file-trailing", {
                      file,
                      index,
                      ui: ui.value
                    }, () => {
                      if (vueExports.unref(props).fileDelete) {
                        _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$u, vueExports.mergeProps({ color: "neutral" }, { ref_for: true }, {
                          ...layout.value === "grid" ? {
                            variant: "solid",
                            size: "xs"
                          } : {
                            variant: "link",
                            size: vueExports.unref(props).size
                          },
                          ...typeof vueExports.unref(props).fileDelete === "object" ? vueExports.unref(props).fileDelete : void 0
                        }, {
                          "aria-label": vueExports.unref(t)("fileUpload.removeFile", { filename: file.name }),
                          "trailing-icon": vueExports.unref(props).fileDeleteIcon || vueExports.unref(appConfig).ui.icons.close,
                          "data-slot": "fileTrailingButton",
                          class: ui.value.fileTrailingButton({ class: vueExports.unref(props).ui?.fileTrailingButton }),
                          onClick: ($event) => removeFile(index)
                        }), null, _parent2, _scopeId));
                      } else {
                        _push2(`<!---->`);
                      }
                    }, _push2, _parent2, _scopeId);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "files-bottom", {
                files: modelValue.value,
                open: vueExports.unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                vueExports.renderSlot(_ctx.$slots, "files-top", {
                  files: modelValue.value,
                  open: vueExports.unref(open),
                  removeFile
                }),
                vueExports.createVNode("div", {
                  "data-slot": "files",
                  class: ui.value.files({ class: vueExports.unref(props).ui?.files })
                }, [
                  vueExports.renderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                      return vueExports.openBlock(), vueExports.createBlock("div", {
                        key: file.name,
                        "data-slot": "file",
                        class: ui.value.file({ class: vueExports.unref(props).ui?.file })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "file", {
                          file,
                          index
                        }, () => [
                          vueExports.renderSlot(_ctx.$slots, "file-leading", {
                            file,
                            index,
                            ui: ui.value
                          }, () => [
                            vueExports.createVNode(_sfc_main$x, {
                              as: { img: "img" },
                              src: createObjectUrl(file),
                              icon: vueExports.unref(props).fileIcon || vueExports.unref(appConfig).ui.icons.file,
                              size: vueExports.unref(props).size,
                              "data-slot": "fileLeadingAvatar",
                              class: ui.value.fileLeadingAvatar({ class: vueExports.unref(props).ui?.fileLeadingAvatar })
                            }, null, 8, ["src", "icon", "size", "class"])
                          ]),
                          vueExports.createVNode("div", {
                            "data-slot": "fileWrapper",
                            class: ui.value.fileWrapper({ class: vueExports.unref(props).ui?.fileWrapper })
                          }, [
                            vueExports.createVNode("span", {
                              "data-slot": "fileName",
                              class: ui.value.fileName({ class: vueExports.unref(props).ui?.fileName })
                            }, [
                              vueExports.renderSlot(_ctx.$slots, "file-name", {
                                file,
                                index
                              }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(file.name), 1)
                              ])
                            ], 2),
                            vueExports.createVNode("span", {
                              "data-slot": "fileSize",
                              class: ui.value.fileSize({ class: vueExports.unref(props).ui?.fileSize })
                            }, [
                              vueExports.renderSlot(_ctx.$slots, "file-size", {
                                file,
                                index
                              }, () => [
                                vueExports.createTextVNode(vueExports.toDisplayString(formatFileSize(file.size)), 1)
                              ])
                            ], 2)
                          ], 2),
                          vueExports.renderSlot(_ctx.$slots, "file-trailing", {
                            file,
                            index,
                            ui: ui.value
                          }, () => [
                            vueExports.unref(props).fileDelete ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$u, vueExports.mergeProps({
                              key: 0,
                              color: "neutral"
                            }, { ref_for: true }, {
                              ...layout.value === "grid" ? {
                                variant: "solid",
                                size: "xs"
                              } : {
                                variant: "link",
                                size: vueExports.unref(props).size
                              },
                              ...typeof vueExports.unref(props).fileDelete === "object" ? vueExports.unref(props).fileDelete : void 0
                            }, {
                              "aria-label": vueExports.unref(t)("fileUpload.removeFile", { filename: file.name }),
                              "trailing-icon": vueExports.unref(props).fileDeleteIcon || vueExports.unref(appConfig).ui.icons.close,
                              "data-slot": "fileTrailingButton",
                              class: ui.value.fileTrailingButton({ class: vueExports.unref(props).ui?.fileTrailingButton }),
                              onClick: vueExports.withModifiers(($event) => removeFile(index), ["stop", "prevent"])
                            }), null, 16, ["aria-label", "trailing-icon", "class", "onClick"])) : vueExports.createCommentVNode("", true)
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ], 2),
                vueExports.renderSlot(_ctx.$slots, "files-bottom", {
                  files: modelValue.value,
                  open: vueExports.unref(open),
                  removeFile
                })
              ], 64)) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), {
        as: vueExports.unref(props).as,
        "data-slot": "root",
        class: ui.value.root({ class: [vueExports.unref(props).ui?.root, vueExports.unref(props).class] })
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {
              open: vueExports.unref(open),
              removeFile,
              ui: ui.value
            }, () => {
              serverRenderer_cjs_prodExports.ssrRenderVNode(_push2, vueExports.createVNode(vueExports.resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                ref_key: "dropzoneRef",
                ref: dropzoneRef,
                type: variant.value === "button" ? "button" : void 0,
                role: variant.value === "button" ? void 0 : "button",
                disabled: variant.value === "button" ? vueExports.unref(disabled) : void 0,
                "data-dragging": vueExports.unref(isDragging),
                "data-slot": "base",
                class: ui.value.base({ class: vueExports.unref(props).ui?.base }),
                tabindex: vueExports.unref(props).interactive && !vueExports.unref(disabled) ? 0 : -1,
                onClick: ($event) => vueExports.unref(props).interactive && !vueExports.unref(disabled) && vueExports.unref(open)(),
                onKeydown: () => {
                },
                onKeyup: ($event) => vueExports.unref(props).interactive && !vueExports.unref(disabled) && vueExports.unref(open)()
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (position.value === "inside") {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseFilesTemplate), null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (position.value === "inside" ? !vueExports.unref(props).preview || (vueExports.unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) {
                      _push3(`<div data-slot="wrapper" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper }))}"${_scopeId2}>`);
                      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                        if (variant.value === "button") {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$A, {
                            name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$x, {
                            icon: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                            size: vueExports.unref(props).size,
                            "data-slot": "avatar",
                            class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                          }, null, _parent3, _scopeId2));
                        }
                      }, _push3, _parent3, _scopeId2);
                      if (variant.value !== "button") {
                        _push3(`<!--[-->`);
                        if (vueExports.unref(props).label || !!slots.label) {
                          _push3(`<div data-slot="label" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.label({ class: vueExports.unref(props).ui?.label }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).label)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (vueExports.unref(props).description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.description({ class: vueExports.unref(props).ui?.description }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (!!slots.actions) {
                          _push3(`<div data-slot="actions" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.actions({ class: vueExports.unref(props).ui?.actions }))}"${_scopeId2}>`);
                          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: vueExports.unref(open),
                            removeFile
                          }, null, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      position.value === "inside" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseFilesTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                      (position.value === "inside" ? !vueExports.unref(props).preview || (vueExports.unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                      }, [
                        vueExports.renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                          variant.value === "button" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                            key: 0,
                            name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                          }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, {
                            key: 1,
                            icon: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                            size: vueExports.unref(props).size,
                            "data-slot": "avatar",
                            class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                          }, null, 8, ["icon", "size", "class"]))
                        ]),
                        variant.value !== "button" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                          vueExports.unref(props).label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            "data-slot": "label",
                            class: ui.value.label({ class: vueExports.unref(props).ui?.label })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "label", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).label), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            "data-slot": "description",
                            class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "description", {}, () => [
                              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                            ])
                          ], 2)) : vueExports.createCommentVNode("", true),
                          !!slots.actions ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 2,
                            "data-slot": "actions",
                            class: ui.value.actions({ class: vueExports.unref(props).ui?.actions })
                          }, [
                            vueExports.renderSlot(_ctx.$slots, "actions", {
                              files: modelValue.value,
                              open: vueExports.unref(open),
                              removeFile
                            })
                          ], 2)) : vueExports.createCommentVNode("", true)
                        ], 64)) : vueExports.createCommentVNode("", true)
                      ], 2)) : vueExports.createCommentVNode("", true)
                    ];
                  }
                }),
                _: 3
              }), _parent2, _scopeId);
              if (position.value === "outside") {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ReuseFilesTemplate), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VisuallyHidden_default), vueExports.mergeProps({
              id: vueExports.unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              as: "input",
              type: "file",
              feature: "fully-hidden",
              name: vueExports.unref(name),
              accept: vueExports.unref(accept),
              multiple: vueExports.unref(multiple),
              required: vueExports.unref(props).required,
              disabled: vueExports.unref(disabled)
            }, { ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }), null, _parent2, _scopeId));
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default", {
                open: vueExports.unref(open),
                removeFile,
                ui: ui.value
              }, () => [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                  ref_key: "dropzoneRef",
                  ref: dropzoneRef,
                  type: variant.value === "button" ? "button" : void 0,
                  role: variant.value === "button" ? void 0 : "button",
                  disabled: variant.value === "button" ? vueExports.unref(disabled) : void 0,
                  "data-dragging": vueExports.unref(isDragging),
                  "data-slot": "base",
                  class: ui.value.base({ class: vueExports.unref(props).ui?.base }),
                  tabindex: vueExports.unref(props).interactive && !vueExports.unref(disabled) ? 0 : -1,
                  onClick: ($event) => vueExports.unref(props).interactive && !vueExports.unref(disabled) && vueExports.unref(open)(),
                  onKeydown: vueExports.withKeys(vueExports.withModifiers(() => {
                  }, ["prevent"]), ["space"]),
                  onKeyup: vueExports.withKeys(($event) => vueExports.unref(props).interactive && !vueExports.unref(disabled) && vueExports.unref(open)(), ["enter", "space"])
                }, {
                  default: vueExports.withCtx(() => [
                    position.value === "inside" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseFilesTemplate), { key: 0 })) : vueExports.createCommentVNode("", true),
                    (position.value === "inside" ? !vueExports.unref(props).preview || (vueExports.unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      "data-slot": "wrapper",
                      class: ui.value.wrapper({ class: vueExports.unref(props).ui?.wrapper })
                    }, [
                      vueExports.renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                        variant.value === "button" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$A, {
                          key: 0,
                          name: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: vueExports.unref(props).ui?.icon })
                        }, null, 8, ["name", "class"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$x, {
                          key: 1,
                          icon: vueExports.unref(props).icon || vueExports.unref(appConfig).ui.icons.upload,
                          size: vueExports.unref(props).size,
                          "data-slot": "avatar",
                          class: ui.value.avatar({ class: vueExports.unref(props).ui?.avatar })
                        }, null, 8, ["icon", "size", "class"]))
                      ]),
                      variant.value !== "button" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                        vueExports.unref(props).label || !!slots.label ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          "data-slot": "label",
                          class: ui.value.label({ class: vueExports.unref(props).ui?.label })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "label", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).label), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        vueExports.unref(props).description || !!slots.description ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: vueExports.unref(props).ui?.description })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "description", {}, () => [
                            vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(props).description), 1)
                          ])
                        ], 2)) : vueExports.createCommentVNode("", true),
                        !!slots.actions ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 2,
                          "data-slot": "actions",
                          class: ui.value.actions({ class: vueExports.unref(props).ui?.actions })
                        }, [
                          vueExports.renderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: vueExports.unref(open),
                            removeFile
                          })
                        ], 2)) : vueExports.createCommentVNode("", true)
                      ], 64)) : vueExports.createCommentVNode("", true)
                    ], 2)) : vueExports.createCommentVNode("", true)
                  ]),
                  _: 3
                }, 40, ["type", "role", "disabled", "data-dragging", "class", "tabindex", "onClick", "onKeydown", "onKeyup"])),
                position.value === "outside" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ReuseFilesTemplate), { key: 0 })) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(VisuallyHidden_default), vueExports.mergeProps({
                id: vueExports.unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                as: "input",
                type: "file",
                feature: "fully-hidden",
                name: vueExports.unref(name),
                accept: vueExports.unref(accept),
                multiple: vueExports.unref(multiple),
                required: vueExports.unref(props).required,
                disabled: vueExports.unref(disabled)
              }, { ..._ctx.$attrs, ...vueExports.unref(ariaAttrs) }), null, 16, ["id", "name", "accept", "multiple", "required", "disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.8.1_@internation_af8eccc25614c82bd794e7ce0775ec2e/node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FileUpload-BkDe3Tt1.mjs.map
