import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { getIcons } from '@iconify/utils';
import { createHash } from 'node:crypto';
import { consola } from 'consola';
import { promises, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'ipx';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE$1 = /#/g;
const AMPERSAND_RE$1 = /&/g;
const SLASH_RE$1 = /\//g;
const EQUAL_RE$1 = /=/g;
const IM_RE$1 = /\?/g;
const PLUS_RE$1 = /\+/g;
const ENC_CARET_RE$1 = /%5e/gi;
const ENC_BACKTICK_RE$1 = /%60/gi;
const ENC_PIPE_RE$1 = /%7c/gi;
const ENC_SPACE_RE$1 = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE$1 = /%252f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE$1, "|");
}
function encodeQueryValue$1(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE$1, "%2B").replace(ENC_SPACE_RE$1, "+").replace(HASH_RE$1, "%23").replace(AMPERSAND_RE$1, "%26").replace(ENC_BACKTICK_RE$1, "`").replace(ENC_CARET_RE$1, "^").replace(SLASH_RE$1, "%2F");
}
function encodeQueryKey$1(text) {
  return encodeQueryValue$1(text).replace(EQUAL_RE$1, "%3D");
}
function encodePath$1(text) {
  return encode$1(text).replace(HASH_RE$1, "%23").replace(IM_RE$1, "%3F").replace(ENC_ENC_SLASH_RE$1, "%2F").replace(AMPERSAND_RE$1, "%26").replace(PLUS_RE$1, "%2B");
}
function decode$2(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$2(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey$1(text) {
  return decode$2(text.replace(PLUS_RE$1, " "));
}
function decodeQueryValue$1(text) {
  return decode$2(text.replace(PLUS_RE$1, " "));
}

function parseQuery$1(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey$1(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue$1(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem$1(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey$1(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey$1(key)}=${encodeQueryValue$1(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey$1(key)}=${encodeQueryValue$1(value)}`;
}
function stringifyQuery$1(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem$1(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX$1 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX$1 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX$1 = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE$1 = /^\.?\//;
function hasProtocol$1(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX$1.test(inputString);
  }
  return PROTOCOL_REGEX$1.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX$1.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash$1(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash$1(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash$1(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash$1(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash$1(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash$1(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash$1(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash$1(input = "") {
  return hasLeadingSlash$1(input) ? input : "/" + input;
}
function withoutBase$1(input, base) {
  if (isEmptyURL$1(base)) {
    return input;
  }
  const _base = withoutTrailingSlash$1(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length).replace(/^\/+/, "");
  return "/" + trimmed;
}
function withQuery$1(input, query) {
  const parsed = parseURL$1(input);
  const mergedQuery = { ...parseQuery$1(parsed.search), ...query };
  parsed.search = stringifyQuery$1(mergedQuery);
  return stringifyParsedURL$1(parsed);
}
function getQuery$3(input) {
  return parseQuery$1(parseURL$1(input).search);
}
function isEmptyURL$1(url) {
  return !url || url === "/";
}
function isNonEmptyURL$1(url) {
  return url && url !== "/";
}
function joinURL$1(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL$1(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE$1, "");
      url = withTrailingSlash$1(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol$1(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative$1 = Symbol.for("ufo:protocolRelative");
function parseURL$1(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol$1(input, { acceptRelative: true })) {
    return parsePath$1(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath$1(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative$1]: !protocol
  };
}
function parsePath$1(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL$1(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative$1] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NullObject = /* @__PURE__ */ (() => {
  const C = function() {
  };
  C.prototype = /* @__PURE__ */ Object.create(null);
  return C;
})();
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = new NullObject();
  const opt = {};
  const dec = opt.decode || decode$1;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode$1(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu$1(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu$1(baseObject, {}, namespace, merger);
  }
  const object = { ...defaults };
  for (const key of Object.keys(baseObject)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu$1(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu$1(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu$1(p, c, "", merger), {})
  );
}
const defu$1 = createDefu$1();
const defuFn = createDefu$1((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp$1(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

let H3Error$1 = class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode$1(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage$1(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
};
function createError$2(input) {
  if (typeof input === "string") {
    return new H3Error$1(input);
  }
  if (isError$1(input)) {
    return input;
  }
  const err = new H3Error$1(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp$1(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode$1(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode$1(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage$1(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError$1(error) ? error : createError$2(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError$1(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery$2(event) {
  return getQuery$3(event.path || "");
}
function isMethod$1(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod$1(event, expected, allowHead) {
  if (!isMethod$1(event, expected)) {
    throw createError$2({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders$1(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders$1(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol$1 = Symbol.for("h3RawBody");
const PayloadMethods$1$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody$1(event, encoding = "utf8") {
  assertMethod$1(event, PayloadMethods$1$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol$1] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol$1] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol$1 in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody$1(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS$1 = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage$1(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS$1, "");
}
function sanitizeStatusCode$1(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [name, opts.domain || "", opts.path || "/"].join(";");
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode$1(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode$1(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage$1(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode$1(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader$1(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp$1(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp$1(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode$1(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage$1(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody$1(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$2({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode$1(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage$1(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders$1(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp$1(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray$1(handler.onRequest),
    onBeforeResponse: _normalizeArray$1(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler$1(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray$1(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler$1(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler$1 = defineEventHandler$1;
function isEventHandler$1(input) {
  return hasProp$1(input, "__is_handler__");
}
function toEventHandler$1(input, _, _route) {
  return input;
}
function defineLazyEventHandler$1(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler$1(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler$1((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler$1 = defineLazyEventHandler$1;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler$1(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _rawReqUrl = event.node.req.url || "/";
    const _reqPath = _decodePath(event._path || _rawReqUrl);
    event._path = _reqPath;
    const _needsRawUrl = _reqPath !== _rawReqUrl;
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _needsRawUrl ? layer.route.length > 1 ? _rawReqUrl.slice(layer.route.length) || "/" : _rawReqUrl : _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$2({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL$1(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler$1(handler);
  } else if (!isEventHandler$1(handler)) {
    handler = toEventHandler$1(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash$1(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$2(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$2({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function _decodePath(url) {
  const qIndex = url.indexOf("?");
  const path = qIndex === -1 ? url : url.slice(0, qIndex);
  const query = qIndex === -1 ? "" : url.slice(qIndex);
  const decodedPath = path.includes("%25") ? decodePath(path.replace(/%25/g, "%2525")) : decodePath(path);
  return decodedPath + query;
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL$1(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler$1(handler);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$2({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$2({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler$1((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash$1(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$2(_error);
      if (!isError$1(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController });
const $fetch$1 = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError$1(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError$1);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError$1(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError$1(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError$1(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL$1(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler$1(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    colors: {
      primary: "emerald",
      secondary: "neutral",
      neutral: "zinc"
    },
    card: {
      slots: {
        root: "ring-1 ring-[var(--color-border-default)] shadow-xs"
      }
    },
    input: {
      slots: {
        root: "ring-[var(--color-border-default)] bg-surface-raised text-text-primary"
      }
    },
    textarea: {
      slots: {
        root: "ring-[var(--color-border-default)] bg-surface-raised text-text-primary"
      }
    },
    formField: {
      slots: {
        label: "text-text-primary font-medium",
        error: "text-red-700 dark:text-red-300"
      }
    },
    container: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "neutral": "slate",
      "success": "green",
      "warning": "yellow",
      "error": "red",
      "info": "blue"
    },
    "icons": {
      "arrowDown": "i-lucide-arrow-down",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "arrowUp": "i-lucide-arrow-up",
      "caution": "i-lucide-circle-alert",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "drag": "i-lucide-grip-vertical",
      "ellipsis": "i-lucide-ellipsis",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "loading": "i-lucide-loader-circle",
      "menu": "i-lucide-menu",
      "minus": "i-lucide-minus",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "plus": "i-lucide-plus",
      "reload": "i-lucide-rotate-ccw",
      "search": "i-lucide-search",
      "stop": "i-lucide-square",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "upload": "i-lucide-upload",
      "warning": "i-lucide-triangle-alert"
    },
    "tv": {
      "twMergeConfig": {}
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "base",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codex",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "cuida",
      "dashicons",
      "devicon",
      "devicon-plain",
      "dinkie-icons",
      "duo-icons",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fa7-brands",
      "fa7-regular",
      "fa7-solid",
      "fad",
      "famicons",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-color",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "garden",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "ix",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "lineicons",
      "logos",
      "ls",
      "lsicon",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-icon-theme",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "meteor-icons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "nrk",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "picon",
      "pixel",
      "pixelarticons",
      "prime",
      "proicons",
      "ps",
      "qlementine-icons",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "roentgen",
      "si",
      "si-glyph",
      "sidekickicons",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "stash",
      "streamline",
      "streamline-block",
      "streamline-color",
      "streamline-cyber",
      "streamline-cyber-color",
      "streamline-emojis",
      "streamline-flex",
      "streamline-flex-color",
      "streamline-freehand",
      "streamline-freehand-color",
      "streamline-kameleon-color",
      "streamline-logos",
      "streamline-pixel",
      "streamline-plump",
      "streamline-plump-color",
      "streamline-sharp",
      "streamline-sharp-color",
      "streamline-stickies-color",
      "streamline-ultimate",
      "streamline-ultimate-color",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "temaki",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons",
      "custom"
    ],
    "fetchTimeout": 1500,
    "customCollections": [
      "custom"
    ]
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "a9b9744a-091c-4dfd-af80-6a1dca58987a",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false,
        "isr": false
      },
      "/__nuxt_content/**": {
        "robots": false,
        "cache": false,
        "isr": false
      },
      "/__nuxt_content/content/sql_dump.txt": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBaseUrl": "http://localhost:8000",
    "esiaFeedbackUrl": "https://pos.gosuslugi.ru/landing/",
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "prompt": "ProsePrompt",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        },
        "customElements": []
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      },
      "highlight": {
        "noApiRoute": false,
        "theme": {
          "light": "material-theme-lighter",
          "default": "material-theme",
          "dark": "material-theme-palenight"
        },
        "highlighter": "shiki",
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml"
        ]
      }
    },
    "content": {
      "wsUrl": ""
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.12.0",
    "database": {
      "type": "sqlite",
      "filename": "/tmp/contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "D:/www/hr.admsr.ru/frontend/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "../../static"
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler$1((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$2({ statusCode: 400 });
          }
          targetPath = withoutBase$1(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL$1(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$3(event.path);
        target = withQuery$1(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$2({ statusCode: 400 });
          }
          targetPath = withoutBase$1(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL$1(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$3(event.path);
        target = withQuery$1(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase$1(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu$1({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
	
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		
		return;
	}
	
	const defaultRes = await defaultHandler(error, event, { json: true });
	
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase$1(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	
	const reqHeaders = getRequestHeaders$1(event);
	
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery$1(joinURL$1(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	
	if (!res) {
		const { template } = await import('./error-500.mjs');
		setResponseHeader$1(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader$1(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _oGyPFkUN7T1pg2Qz9VS52HIya5eSLZaWW3r_p1YhvLQ = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _oGyPFkUN7T1pg2Qz9VS52HIya5eSLZaWW3r_p1YhvLQ
];

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();

function useBase(base, handler) {
  base = withoutTrailingSlash(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = withoutBase(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler$1(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader$1(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
	
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const checksums = {
  "content": "v3.5.0--HYRmvgarZkwKdCHtXZ9d1cZozBqdr4DHMtHXP2zZMcA"
};
const checksumsStructure = {
  "content": "KhMgqnpHw-IXGVD_u1d0XNbHssaPiNvgmhUyVZwAT70"
};

const tables = {
  "content": "_content_content",
  "info": "_content_info"
};

const contentManifest = {
  "content": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "cta": "json",
      "description": "string",
      "extension": "string",
      "features": "json",
      "hero": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "pricing": "json",
      "section": "json",
      "seo": "json",
      "stem": "string",
      "steps": "json",
      "testimonials": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: void 0 }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchDatabase(event, collection) {
  return fetchContent(event, collection, "sql_dump.txt", {
    responseType: "text",
    headers: {
      "content-type": "text/plain"
    }
  });
}

const collections = {
  'lucide': () => import('./icons.mjs').then(m => m.default),
  'simple-icons': () => import('./icons2.mjs').then(m => m.default),
  'custom': () => ({"prefix":"custom","icons":{"i-custom-admsr":{"width":81,"height":107,"body":"<g fill=\"none\"><path d=\"M0 0H40.0988V100.071H6.7964C3.04285 100.071 0 96.8385 0 92.8509V0Z\" fill=\"#048E40\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.0992 0H39.6914V100.071H40.0992V0Z\" fill=\"white\"/>\r\n<path d=\"M40.0994 0H80.1981V92.8509C80.1981 96.8385 77.1553 100.071 73.4017 100.071H40.0994V0Z\" fill=\"#3C6AE4\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.0994 100.071H40.5071V0H40.0994V100.071Z\" fill=\"white\"/>\r\n<path d=\"M54.2997 59.1867L45.4673 22.5273L54.6051 24.2659L55.5213 30.6987L60.1024 26.7165L61.0186 31.924V34.9872L57.6591 38.0505L58.8808 43.8706L62.851 40.501L61.6294 34.9872L66.2105 30.0861L67.1267 35.5999L70.4862 32.6898L75.9835 37.7441L54.2997 59.1867Z\" fill=\"#FFC569\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.8478 60.8212L44.3577 21.4316L55.3267 23.5187L56.1156 29.0569L60.6532 25.1125L61.8373 31.8427V33.5289L66.7421 28.2814L67.6903 33.988L70.5015 31.5528L77.2091 37.7199L53.8478 60.8212ZM67.1264 35.5992L66.2102 30.0854L61.6291 34.9865L62.8507 40.5003L58.8804 43.8699L57.6588 38.0497L61.0183 34.9865V31.9233L60.102 26.7158L55.5209 30.698L54.6047 24.2652L45.4669 22.5266L54.2993 59.186L75.9832 37.7434L70.4858 32.6891L67.1264 35.5992ZM61.0378 36.1154L58.5651 38.37L59.3943 42.3201L61.9348 40.164L61.0378 36.1154Z\" fill=\"white\"/>\r\n<path d=\"M25.8981 59.1867L33.8464 22.5273L25.5927 24.2659L24.6765 30.6987L20.0954 26.7165L19.1792 31.924V34.9872L22.5386 38.0505L21.317 43.8706L17.3467 40.501L18.5684 34.9872L13.9873 30.0861L13.071 35.5999L9.71158 32.6898L4.21426 37.7441L25.8981 59.1867Z\" fill=\"#FFC569\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.3775 60.8497L34.9282 21.4121L24.8685 23.5311L24.0814 29.0573L19.5438 25.113L18.3597 31.8432V33.5294L13.4549 28.2819L12.5066 33.9884L9.69543 31.5533L2.98788 37.7203L26.3775 60.8497ZM13.0706 35.5996L13.9868 30.0858L18.5679 34.987L17.3463 40.5008L21.3166 43.8703L22.5382 38.0502L19.1787 34.987V31.9238L20.0949 26.7163L24.676 30.6985L25.5923 24.2657L33.846 22.5271L25.8977 59.1865L4.21381 37.7439L9.71113 32.6896L13.0706 35.5996ZM19.1592 36.1159L21.6318 38.3704L20.8027 42.3206L18.2622 40.1645L19.1592 36.1159Z\" fill=\"white\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.3704 88.8995L20.7056 89.8186L36.486 14.028C36.5529 13.7064 36.5867 13.378 36.5867 13.0487V11.7901C36.5867 11.3456 36.4143 10.9207 36.11 10.6155C35.8277 10.3324 35.4542 10.1746 35.066 10.1746H33.6978C34.9263 6.15945 39.0769 5.13576 40.8748 5.8352C42.2672 6.37685 43.1421 7.39896 43.4674 10.3784C43.5238 10.895 43.5743 11.4126 43.6248 11.9303C43.7788 13.5098 43.9328 15.0896 44.2554 16.6388L59.4922 89.8186L55.5219 88.8995L39.7935 72.9708L24.3704 88.8995ZM38.1137 8.64151C38.1145 8.2427 38.4917 7.86513 39.0011 7.76839C39.49 7.67553 40.0703 7.8557 40.4204 8.55802L40.4626 8.64267L41.3902 8.64279L41.3103 8.43462C40.9029 7.37219 40.0334 6.9882 39.2577 7.09331C38.4943 7.19674 37.8083 7.78268 37.8083 8.64269H37.961H38.1137V8.64151Z\" fill=\"#FFC569\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.6238 90.9839L35.6859 13.8402C35.74 13.5804 35.7673 13.315 35.7673 13.0488V11.7903C35.7673 11.5852 35.6877 11.3891 35.5474 11.2483C35.4171 11.1177 35.2448 11.0449 35.0657 11.0449H32.57L32.9185 9.90582C33.6168 7.62377 35.1503 6.1945 36.739 5.44232C38.2904 4.70781 40.0038 4.57 41.1561 5.0183C41.9709 5.33526 42.7002 5.82386 43.2539 6.71252C43.7887 7.57085 44.1112 8.72593 44.2807 10.2783C44.3376 10.8001 44.3885 11.322 44.4388 11.8379L44.4391 11.8408C44.5939 13.4287 44.744 14.9586 45.0547 16.451L60.5679 90.9583L55.1227 89.6979L39.7987 74.1787L24.7786 89.6912L19.6238 90.9839ZM39.7931 72.9709L55.5215 88.8997L59.4918 89.8187L44.255 16.6389C43.9324 15.0897 43.7784 13.51 43.6244 11.9305L43.6244 11.93C43.5739 11.4125 43.5235 10.895 43.4671 10.3786C43.1418 7.3991 42.2668 6.37699 40.8745 5.83534C39.2142 5.18944 35.5476 6.01295 34.0286 9.30468C33.9027 9.57756 33.7915 9.86741 33.6975 10.1748H35.0657C35.4539 10.1748 35.8274 10.3325 36.1096 10.6156C36.4139 10.9208 36.5863 11.3457 36.5863 11.7903V13.0488C36.5863 13.3782 36.5526 13.7066 36.4856 14.0282L20.7052 89.8187L24.3701 88.8997L39.7931 72.9709ZM40.212 8.23005C40.2875 8.32367 40.3575 8.43257 40.4201 8.55816L40.4623 8.64281L41.3898 8.64292L41.31 8.43475C41.2101 8.17423 41.0824 7.95449 40.9351 7.77277C40.8915 7.719 40.8462 7.66857 40.7994 7.62138C40.3594 7.17768 39.7865 7.02173 39.2573 7.09344C39.1359 7.10989 39.0165 7.13854 38.9015 7.17856C38.5758 7.29185 38.2854 7.49625 38.0858 7.77272C38.0388 7.83788 37.9968 7.90705 37.9606 7.97996C37.8638 8.17504 37.8083 8.39698 37.808 8.64102C37.808 8.64123 37.808 8.64144 37.808 8.64164C37.808 8.64204 37.808 8.64243 37.808 8.64282H38.1134V8.64164C38.1141 8.24283 38.4913 7.86526 39.0007 7.76852C39.1092 7.74792 39.2222 7.74076 39.3361 7.74975C39.644 7.77405 39.959 7.91627 40.212 8.23005Z\" fill=\"white\"/>\r\n<path d=\"M74.8135 99.9124C74.7542 99.8576 74.6934 99.8019 74.631 99.7454C73.2636 98.5049 71.1619 96.8444 68.2379 95.1818C62.3923 91.8578 53.2496 88.5186 40.0984 88.5186C26.9473 88.5186 17.8045 91.8578 11.9589 95.1818C9.03494 96.8444 6.9332 98.5049 5.56575 99.7454C5.5034 99.8019 5.4426 99.8576 5.3833 99.9124C5.83904 100.015 6.3116 100.069 6.79604 100.069H30.4475C35.7394 100.071 40.0284 103.173 40.0284 107C40.0284 103.172 44.3196 100.069 49.6134 100.069H73.4008C73.8852 100.069 74.3578 100.015 74.8135 99.9124Z\" fill=\"#27272A\"/>\r\n<path d=\"M5.03392 99.0858C4.82315 99.277 4.629 99.4588 4.45117 99.6298C4.75256 99.7475 5.06398 99.8432 5.38369 99.915C5.443 99.8602 5.50382 99.8045 5.56618 99.7479C6.93364 98.5074 9.03537 96.847 11.9593 95.1843C17.8049 91.8603 26.9477 88.5211 40.0988 88.5211C53.25 88.5211 62.3928 91.8603 68.2383 95.1843C71.1623 96.847 73.264 98.5074 74.6315 99.7479C74.6938 99.8045 74.7547 99.8602 74.814 99.915C75.1337 99.8432 75.4451 99.7475 75.7465 99.6298C75.5686 99.4588 75.3745 99.277 75.1637 99.0858C73.7555 97.8083 71.6054 96.1113 68.6251 94.4166C62.6622 91.0259 53.3868 87.6504 40.0988 87.6504C26.8109 87.6504 17.5354 91.0259 11.5725 94.4166C8.59224 96.1113 6.44218 97.8083 5.03392 99.0858Z\" fill=\"white\"/></g>"},"i-custom-admsur":{"width":28,"height":33,"body":"<defs><pattern id=\"pattern0_1462_24729\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\r\n<use xlink:href=\"#image0_1462_24729\" transform=\"matrix(0.000886525 0 0 0.000752203 0 -0.0107458)\"/>\r\n</pattern>\r\n<image id=\"image0_1462_24729\" width=\"1128\" height=\"1358\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGgAAAVOCAYAAAAuCA+vAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAA4CPSURBVHja7P15rKT3fd97fn6/Z63trL2vXESRFrVQlETRlmRLlrzItnRlJ1ESX3hkJxgH8ACDeAAnMwgyCBBgkiBAgIsZ/5EL58LX15nMDOI4iXNtSbZjbRQlUdyXXrh1N3s7ffpsdWp7tt9v/niqqs9pkk3aFF3q5vsFFKtrPVVPPVXA8+H39/2arVe+9qXNzc0POOdia22eZdmBIAh6cRyvj0ajA8YY3YjxAgAAAAAAwA1YlW1JcrK5FPScsbl82HMK8sqE/fDcuXO/e+HCBRVFoSAI1O/3FYahms2mRqORCGgAAAAAAADeGqtSkuRkJQVyxko+lFOgyoQKF5KeVqsr8kWm2MQqqp4CBYqrllw1UhiGN/wDAdsYAAAAAADghqwySVJlQkmBnEI5k9QBjRKFcRzLWivvvay1iqLo2oOtVRDcOIKxjhIaAAAAAACAG7GykiRvrKTdJy+r0BQbUr4uN+rJRh1FPldVVfLZQLaq5Ko3WOLk2MgAAAAAAAA34syw/oexqpTIjytnnE/klChMkkRxHCuOYyVJoiiKpv1ovPdy7sYJTEBAAwAAAAAAcEPG1D1ovLGyiuQVyCqS85GcIoV5lshVLckbVWVTWTZUVUlJGquqKmncxOZaqcz4fNwd2Bm60AAAAAAAANyQn5ckGWWSCsmMFKgvmVSV5scLoAAAAAAAADAzBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAAAAAAM0ZAAwAAAAAAMGMENAAAAAAAADNGQAMAAAAAADBjBDQAAAAAAAAzRkADAAAAAAAwYwQ0AAAA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ERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlCmgERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpiwhAtGCGT9km1uEaLa+M+7KcsZfM1qIIiIiIiIiIiK3QhU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpkwBjYiIiIiIiIjIlFljwBiDMQZrLVg7+dhY5TciIiIiIiIiIrcqxnjdrymBERERERERERGZMgU0IiIiIiIiIiJTpoBGRERERERERGTKFNCIiIiIiIiIiEyZAhoRERERERERkSlTQCMiIiIiIiIiMmUKaEREREREREREpszun4PEX6aVGtZXN0k7+xkNDWnWo56ie4RjDcslnLmMMQOsCeDamKSjJSgiIiIiIiIicgOdkNGqEqCExEOWQppQJinBtLFJAtZaYp3GXJMxRktTREREREREROQ2SLoZpCYSQsQQ6+oYIj5GaEKZwPaxUAYIRBOIxqDYRkRERERERETkLTAVddoSsDHUeUynA865nRU0Mdaf36hq5gZVNyIiIiIiIiIicmPJQgt6tsKHEQ6DMyUEvxXQTDKY0NxbximPiIiIiIiIiIjcWMQSifXApAgQIAZcDLhYXF1BY4yBGAkh1AGNes+IiIiIiIiIiNxWyVwKHQrSYEhoYZrqmNj0oqkTHYuJdRcaawLBBKBSeCMiIiIiIiIichPC9kFKAHggYChJY4lN2DmL02S2ppvpQSMiIiIiIiIiIrfMzgBsXGaxZWnZkpaLkFpIUjAWjKtvu5lKTYJFRERERERE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UUtYREREREREROSaAhAw+ToPHFlkqc1HW+ycwQluENAcPNj+2h133EGr1YKyrKtm0hSaebvVg0ZERERERERE5MZCCDz22GMAHH+rFTSLM/z5E488yL6FWYgVEd9Uz1QE73FZpiUsIiIiIiIiInID3dTx1OMP4mBzr69fN6BJDf177rn71Pz8PMRIjM2QJu+JMZIpoBERERERERERuaEsyzh+OL03gf5eX79uQHMCii8eD59ZvvBn3OcuEM7/gMyUEKDMegyD0xIWERERERERkfe/MIctZ0krS6sqaflNWn4T5ysiCZE56BwhhkWW9j9IHAXi2Te5f3mGuTe+yf/1x+75++0z5889AKf3evobzpOdJrb/0Y9+lPX1dXozMxTDIRiDcwpnREREREREREQAaLWITb/e4XBImqa4Tof19XWWl5c5cuTIb588crB/rR+/YUBzF/Sf/vjH/tMOnhkHDNdxqWHchVhERERERERE5P2vAlMRTCBiJzdvLWBJkwxGQ0gMo43L9Fxgvu0YrlzgkXuP8shdx5+93rPbm3kJBxb59w8++CCDwQCaeburstQsTiIiIiIiIiIigPceypKs3Sbk+aR3bwiBJ5988oY/f1MBTVKx+eXPfoJs4yIzDEh8AfnwJn9aREREREREROQ9zpR4WxKNJxqIuMkNHCEfgTX0UnBxhC3W6MUNTuxL+Oh9h/7zGz39TUUsRcHiYw8t/vzhw4ex1pLneT3dtoiIiIiIiIiIgPeQZXjvSdOUoiiw1vLQQw+xf56v3+jHbypleaLLn++Hr/9HTz3KfL6B3bxEt2uxPtcKEBEREREREZH3vehKcCXehvpmLJ4USCACeFxiGKxdZNZs0i4ucyDp88XH7mSZdyigAVhZ4/GPfOTRrwCUZUmv1yN4rzUkIiIiIiIiImIt1lqqjQ1M07O30+lw8uTyL3mYudGPJzf7ez46z+/OBZ577Mj838guF5w58ywwB25WK0FERERERERE3ucCGCDaek5rU8/eRLRgIvgRftCn2wP6Z/jIPQd59GCXuyy/fgKKGz37W2okEyN84hOfIIRAjJFur6f1IyIiIiIiIiLvf+OZrPea0TpGKEs6nQ5FUbCwsMDm5iZf/OIX/+FmGY7dzNO/pYDmQcfpH3nizi8c75XMVessdEutIBERERERERH5YNgrnKECKowLUKxzqOeg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\"/></defs><g fill=\"none\"><rect width=\"28\" height=\"33\" fill=\"url(#pattern0_1462_24729)\"/></g>"},"i-custom-fss":{"width":130.2,"height":111.8,"body":"<linearGradient id=\"g\" x2=\".8\" y2=\"1\">\r\n        <stop offset=\"20%\" stop-color=\"#13a7fe\"/>\r\n        <stop offset=\"49%\" stop-color=\"#0f37d3\"/>\r\n        <stop offset=\"56%\" stop-color=\"#7d2b9f\"/>\r\n        <stop offset=\"63%\" stop-color=\"#dc133c\"/>\r\n        <stop offset=\"85%\" stop-color=\"#c60b1f\"/>\r\n    </linearGradient>\r\n    <g fill=\"url(#g)\">\r\n        <path d=\"M57.2,0l-10,14.5h-8c-22.6,0-34.6,15.4-38,28.5c-2.7,10.4-0.8,20.7,5.2,28.4c4.8,6.2,14.4,13.5,33,13.5 h11.8l37.1-52.8h2.6c9.1,0,15.7,2.3,19.1,6.7c2.6,3.4,3.4,8.2,2.1,13.3c-2.6,10.1-13.3,15.4-22.5,15.4H73.8l-30.5,44.3h21.3 l18.4-26.8h6.5c22.1,0,36-14.8,39.5-28.5c2.7-10.4,0.8-20.7-5.2-28.4c-4.8-6.2-14.4-13.5-33-13.5H79.1L42,67.4h-2.6 c-9.1,0-15.7-2.3-19.1-6.7c-2.6-3.4-3.4-8.2-2.1-13.3c1.9-7.4,8.4-15.4,21-15.4h17.3L78.5,0H57.2z\"/>\r\n    </g>"},"i-custom-mintrud":{"left":-444.5,"top":257.3,"width":40,"height":46.4,"body":"<g style=\"enable-background:new -444.5 257.3 40 46.4;\"><style type=\"text/css\">\r\n\t.st0{fill:#216CB4;}\r\n\t.st1{fill:#3581BF;}\r\n\t.st2{fill:#6797CE;}\r\n\t.st3{fill:#97B3DD;}\r\n\t.st4{fill:#28A85E;}\r\n\t.st5{fill:#249842;}\r\n\t.st6{fill:#5EB980;}\r\n\t.st7{fill:#93CBA2;}\r\n\t.st8{fill:#E7D572;}\r\n\t.st9{fill:#DECA41;}\r\n\t.st10{fill:#D7C125;}\r\n\t.st11{fill:#F0E8B3;}\r\n</style>\r\n<g>\r\n\t<path class=\"st0\" d=\"M-419.4,301.5l13.9-6l0.1-3.1c-1.1-0.4-2.2-0.5-3.4-0.5C-414.3,291.8-418.9,296.1-419.4,301.5z\"/>\r\n\t<path class=\"st1\" d=\"M-425.6,303.2l1.1,0.5l3-1.3l0,0c0-3.5,1.4-6.7,3.7-9c2.3-2.3,5.5-3.7,9-3.7c1.2,0,2.3,0.2,3.4,0.5l0.1-4.2\r\n\t\tc-1.1-0.2-2.3-0.4-3.5-0.4c-4.7,0-8.9,1.9-11.9,4.9c-3.1,3.1-4.9,7.3-4.9,11.9C-425.7,302.7-425.7,303-425.6,303.2z\"/>\r\n\t<path class=\"st2\" d=\"M-431.7,300.6l4.1,1.8c0-5.2,2.1-9.9,5.5-13.3c3.4-3.4,8.1-5.5,13.4-5.5c1.2,0,2.4,0.1,3.6,0.3l0.1-4.2\r\n\t\tc-1.2-0.2-2.4-0.3-3.7-0.3c-6.4,0-12.1,2.6-16.3,6.7C-428.8,289.9-431.3,295-431.7,300.6z\"/>\r\n\t<path class=\"st3\" d=\"M-437.8,298l4,1.7c1.4-12.6,12-22.5,25-22.5c1.3,0,2.5,0.1,3.8,0.3l0.1-4.2c-1.3-0.2-2.6-0.3-3.9-0.3\r\n\t\tC-423.5,273.1-435.6,283.9-437.8,298z\"/>\r\n\t<path class=\"st4\" d=\"M-443.8,285.9l0.1,4.2c1.1-0.3,2.2-0.5,3.4-0.5c1,0,2,0.1,2.9,0.3c0.6-1.3,1.2-2.6,2-3.8\r\n\t\tc-1.5-0.5-3.2-0.7-4.9-0.7C-441.4,285.5-442.6,285.7-443.8,285.9z\"/>\r\n\t<path class=\"st5\" d=\"M-443.6,292.4l0.1,3.1l4,1.8c0.3-1.8,0.8-3.6,1.4-5.2c-0.7-0.1-1.4-0.2-2.1-0.2\r\n\t\tC-441.4,291.8-442.5,292-443.6,292.4z\"/>\r\n\t<path class=\"st6\" d=\"M-443.9,279.7l0.1,4.2c1.2-0.2,2.4-0.3,3.6-0.3c2.1,0,4.1,0.3,6,1c0.8-1.2,1.8-2.3,2.8-3.4\r\n\t\tc-2.7-1.1-5.7-1.7-8.8-1.7C-441.5,279.4-442.7,279.5-443.9,279.7z\"/>\r\n\t<path class=\"st7\" d=\"M-444.1,273.3l0.1,4.2c1.2-0.2,2.5-0.3,3.8-0.3c3.7,0,7.2,0.8,10.4,2.3c1.1-1,2.3-2,3.6-2.8\r\n\t\tc-4.2-2.3-8.9-3.6-14-3.6C-441.5,273.1-442.8,273.2-444.1,273.3z\"/>\r\n\t<path class=\"st8\" d=\"M-430.8,257.3h-8.4c-0.6,0.5-1.2,1-1.8,1.6c-1.3,1.3-2.4,2.7-3.4,4.3l0.2,8.4c0.3,0,0.6-0.1,0.9-0.1\r\n\t\tc0.7-3.7,2.6-7.1,5.2-9.7C-436,259.8-433.6,258.2-430.8,257.3L-430.8,257.3z M-404.9,271.6l0.2-7.8c-1-1.8-2.3-3.5-3.7-4.9\r\n\t\tc-0.6-0.6-1.1-1.1-1.8-1.6h-8.4c2.7,0.9,5.2,2.5,7.2,4.5c2.6,2.6,4.4,5.9,5.2,9.6C-405.7,271.5-405.3,271.5-404.9,271.6z\"/>\r\n\t<path class=\"st9\" d=\"M-424.7,262.4c-3.5,0-6.7,1.4-9,3.7c-1.5,1.5-2.6,3.3-3.2,5.3c-1.1-0.1-2.2-0.2-3.3-0.2c-0.3,0-0.6,0-0.9,0\r\n\t\tc0.7-3.1,2.3-5.9,4.5-8.1c3.1-3.1,7.3-4.9,11.9-4.9c4.7,0,8.9,1.9,11.9,4.9c2.2,2.2,3.8,5,4.5,8.1c-0.2,0-0.4,0-0.5,0\r\n\t\tc-1.3,0-2.5,0.1-3.7,0.2c-0.6-2.1-1.7-3.9-3.2-5.4C-418,263.8-421.2,262.4-424.7,262.4z\"/>\r\n\t<path class=\"st10\" d=\"M-424.7,264.5c-4.7,0-8.7,3-10.1,7.3c3.8,0.7,6.9,1.9,10.3,3.8c3-1.8,6.3-3,9.9-3.7\r\n\t\tC-416,267.6-420,264.5-424.7,264.5z\"/>\r\n\t<path class=\"st11\" d=\"M-442.4,257.3h-2.1l0.1,2.3C-443.8,258.7-443.1,258-442.4,257.3L-442.4,257.3z M-404.6,260l0.1-2.7h-2.5\r\n\t\tl0.1,0.1C-406.1,258.2-405.3,259.1-404.6,260z\"/>\r\n</g></g>"}}}),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const __G3T9B = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _IPMJzi = eventHandler(async (event) => {
  const { code, lang, theme: themeString, options: optionsStr } = getQuery(event);
  const theme = JSON.parse(themeString);
  const options = optionsStr ? JSON.parse(optionsStr) : {};
  const highlighter = await import('../build/mdc-highlighter.mjs').then((m) => m.default);
  return await highlighter(code, lang, theme, options);
});

const _6o8qtU = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('../build/database.compressed.mjs').then((m) => m[collection]);
});

const _SxA8c9 = defineEventHandler$1(() => {});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

class BoundableStatement {
	_statement;
	constructor(rawStmt) {
		this._statement = rawStmt;
	}
	bind(...params) {
		return new BoundStatement(this, params);
	}
}
class BoundStatement {
	#statement;
	#params;
	constructor(statement, params) {
		this.#statement = statement;
		this.#params = params;
	}
	bind(...params) {
		return new BoundStatement(this.#statement, params);
	}
	all() {
		return this.#statement.all(...this.#params);
	}
	run() {
		return this.#statement.run(...this.#params);
	}
	get() {
		return this.#statement.get(...this.#params);
	}
}

function sqliteConnector(opts) {
	let _db;
	const getDB = () => {
		if (_db) {
			return _db;
		}
		if (opts.name === ":memory:") {
			_db = new Database(":memory:");
			return _db;
		}
		const filePath = resolve(opts.cwd || ".", opts.path || `.data/${opts.name || "db"}.sqlite3`);
		mkdirSync(dirname(filePath), { recursive: true });
		_db = new Database(filePath);
		return _db;
	};
	return {
		name: "sqlite",
		dialect: "sqlite",
		getInstance: () => getDB(),
		exec: (sql) => getDB().exec(sql),
		prepare: (sql) => new StatementWrapper(() => getDB().prepare(sql)),
		dispose: () => {
			_db?.close?.();
			_db = undefined;
		}
	};
}
class StatementWrapper extends BoundableStatement {
	async all(...params) {
		return this._statement().all(...params);
	}
	async run(...params) {
		const res = this._statement().run(...params);
		return {
			success: res.changes > 0,
			...res
		};
	}
	async get(...params) {
		return this._statement().get(...params);
	}
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    if (["nitro-prerender", "nitro-dev"].includes("vercel")) {
      db = sqliteConnector(refineDatabaseConfig(localDatabase));
    } else {
      db = sqliteConnector(refineDatabaseConfig(database));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: ":memory:" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query: WHERE clause must be properly enclosed in parentheses");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query: WHERE clause contains unsafe SQL commands");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _HEwlO0 = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _Lb8sWU = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_b3BHEx = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_b3BHEx, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: __G3T9B, lazy: false, middleware: false, method: undefined },
  { route: '/api/_mdc/highlight', handler: _IPMJzi, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/content/sql_dump.txt', handler: _6o8qtU, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/sql_dump.txt', handler: _6o8qtU, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/content/query', handler: _HEwlO0, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/query', handler: _HEwlO0, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _Lb8sWU, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_b3BHEx, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler$1(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

export { $fetch$1 as $, joinURL$1 as A, joinURL as B, klona as C, parseQuery$1 as D, parseURL$1 as E, parseURL as F, publicAssetsURL as G, sanitizeStatusCode$1 as H, setCookie as I, toNodeListener as J, useNitroApp as K, useRuntimeConfig as L, withLeadingSlash$1 as M, withLeadingSlash as N, withQuery$1 as O, withTrailingSlash$1 as P, withoutTrailingSlash$1 as Q, buildAssetsURL as a, baseURL as b, createError$2 as c, decodePath as d, defineRenderHandler as e, defu$1 as f, defu as g, defuFn as h, deleteCookie as i, destr as j, encodeParam as k, encodePath$1 as l, encodePath as m, executeAsync as n, getContext as o, getCookie as p, getQuery$2 as q, getRequestHeader as r, getResponseStatus as s, getResponseStatusText as t, getRouteRules as u, getRouteRulesForPath as v, hasProtocol$1 as w, hasProtocol as x, isEqual as y, isScriptProtocol as z };
//# sourceMappingURL=nitro.mjs.map
