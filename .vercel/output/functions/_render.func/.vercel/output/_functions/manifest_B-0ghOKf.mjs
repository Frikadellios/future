import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_lT_U1ha6.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_CQuuhllk.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/devopsick/GitHub/future/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BNYwb576.js"}],"styles":[{"type":"external","src":"/_astro/index.CU9DBdiY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BNYwb576.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/devopsick/GitHub/future/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/devopsick/GitHub/future/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/devopsick/GitHub/future/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_pKrBaDk0.mjs","/home/devopsick/GitHub/future/node_modules/astro/dist/env/setup.js":"chunks/setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B-0ghOKf.mjs","@/components/layout/shooting-stars":"_astro/shooting-stars.CUDnXgNq.js","@/components/layout/stars-background":"_astro/stars-background.pDPVhULg.js","/home/devopsick/GitHub/future/src/components/ui/github-button":"_astro/github-button.BGYBcjds.js","@/components/ui/globe":"_astro/globe.BbeVeh0d.js","@/components/ui/sparkles":"_astro/sparkles.DUPIhmvw.js","@astrojs/react/client.js":"_astro/client.CwX2CSfC.js","/home/devopsick/GitHub/future/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.Dn2bebqY.js","/home/devopsick/GitHub/future/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts":"_astro/BaseHead.astro_astro_type_script_index_0_lang.BGfjo5mV.js","/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=0&lang.ts":"_astro/provider-animations.astro_astro_type_script_index_0_lang.BGfjo5mV.js","/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=1&lang.ts":"_astro/provider-animations.astro_astro_type_script_index_1_lang.Bgsy6TLw.js","astro:scripts/page.js":"_astro/page.BNYwb576.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/devopsick/GitHub/future/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:before-swap\",e=>[...e.newDocument.head.querySelectorAll('link[as=\"font\"]')].forEach(o=>o.remove()));"],["/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:before-swap\",e=>[...e.newDocument.head.querySelectorAll('link[as=\"font\"]')].forEach(o=>o.remove()));"],["/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=1&lang.ts","function e(){document.querySelectorAll(\".animate\").forEach((t,n)=>{setTimeout(()=>{t.classList.add(\"show\")},n*150)})}document.addEventListener(\"DOMContentLoaded\",e);document.addEventListener(\"astro:after-swap\",e);"]],"assets":["/_astro/odessa-2023.DoZ2qafE.jpg","/_astro/inter.Dxq58mVK.woff2","/_astro/index.CU9DBdiY.css","/favicon.ico","/favicon.svg","/favicon.png","/robots.txt","/_astro/stars-background.pDPVhULg.js","/_astro/sparkles.DUPIhmvw.js","/_astro/index.CWu_4F6r.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.Dn2bebqY.js","/_astro/globe.BbeVeh0d.js","/_astro/jsx-runtime.BjG_zV1W.js","/_astro/shooting-stars.CUDnXgNq.js","/_astro/client.CwX2CSfC.js","/_astro/page.BNYwb576.js","/_astro/github-button.BGYBcjds.js","/_astro/index.Bel2lkwj.js","/_astro/utils.CmAReE4r.js","/js/scroll.js","/js/animate.js","/js/main.js","/js/theme.js","/_astro/page.BNYwb576.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"MKRzEL8b/oxPlNqsjJack1Qw4L1DOtcryk/GdGdlBC0=","envGetSecretEnabled":true});

export { manifest };
