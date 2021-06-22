var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n,s){if(e){const r=g(e,t,n,s);return e[0](r)}}function g(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function m(e,t,n,s,r,i,o){const a=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,i);if(a){const r=g(t,n,s,o);e.p(r,a)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function c(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function x(){return $(" ")}function h(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){return""===e?null:+e}function w(e,t){e.value=null==t?"":t}function y(e,t,n){e.classList[n?"add":"remove"](t)}let C;function k(e){C=e}function T(e){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.on_mount.push(e)}const E=[],M=[],S=[],P=[],_=Promise.resolve();let B=!1;function j(e){S.push(e)}function L(e){P.push(e)}let N=!1;const R=new Set;function D(){if(!N){N=!0;do{for(let e=0;e<E.length;e+=1){const t=E[e];k(t),F(t.$$)}for(k(null),E.length=0;M.length;)M.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];R.has(t)||(R.add(t),t())}S.length=0}while(E.length);for(;P.length;)P.pop()();B=!1,N=!1,R.clear()}}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const I=new Set;let O;function V(){O={r:0,c:[],p:O}}function Z(){O.r||r(O.c),O=O.p}function H(e,t){e&&e.i&&(I.delete(e),e.i(t))}function U(e,t,n,s){if(e&&e.o){if(I.has(e))return;I.add(e),O.c.push((()=>{I.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function q(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function W(e){e&&e.c()}function z(e,t,s,o){const{fragment:a,on_mount:g,on_destroy:m,after_update:l}=e.$$;a&&a.m(t,s),o||j((()=>{const t=g.map(n).filter(i);m?m.push(...t):r(t),e.$$.on_mount=[]})),l.forEach(j)}function G(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){-1===e.$$.dirty[0]&&(E.push(e),B||(B=!0,_.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,n,i,o,a,g,m=[-1]){const l=C;k(t);const c=t.$$={fragment:null,ctx:null,props:g,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:s(),dirty:m,skip_bound:!1};let u=!1;if(c.ctx=i?i(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return c.ctx&&a(c.ctx[e],c.ctx[e]=r)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](r),u&&J(t,e)),n})):[],c.update(),u=!0,r(c.before_update),c.fragment=!!o&&o(c.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);c.fragment&&c.fragment.l(e),e.forEach(A)}else c.fragment&&c.fragment.c();n.intro&&H(t.$$.fragment),z(t,n.target,n.anchor,n.customElement),D()}k(l)}class Q{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var X,Y=(function(e,t){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,function(e){if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const t="The message port closed before a response was received.",n="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class r extends WeakMap{constructor(e,t){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const i=e=>e&&"object"==typeof e&&"function"==typeof e.then,o=(t,n)=>(...s)=>{e.runtime.lastError?t.reject(new Error(e.runtime.lastError.message)):n.singleCallbackArg||s.length<=1&&!1!==n.singleCallbackArg?t.resolve(s[0]):t.resolve(s)},a=e=>1==e?"argument":"arguments",g=(e,t)=>function(n,...s){if(s.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${s.length}`);if(s.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${s.length}`);return new Promise(((r,i)=>{if(t.fallbackToNoCallback)try{n[e](...s,o({resolve:r,reject:i},t))}catch(i){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),n[e](...s),t.fallbackToNoCallback=!1,t.noCallback=!0,r()}else t.noCallback?(n[e](...s),r()):n[e](...s,o({resolve:r,reject:i},t))}))},m=(e,t,n)=>new Proxy(t,{apply:(t,s,r)=>n.call(s,e,...r)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const c=(e,t={},n={})=>{let s=Object.create(null),r={has:(t,n)=>n in e||n in s,get(r,i,o){if(i in s)return s[i];if(!(i in e))return;let a=e[i];if("function"==typeof a)if("function"==typeof t[i])a=m(e,e[i],t[i]);else if(l(n,i)){let t=g(i,n[i]);a=m(e,e[i],t)}else a=a.bind(e);else if("object"==typeof a&&null!==a&&(l(t,i)||l(n,i)))a=c(a,t[i],n[i]);else{if(!l(n,"*"))return Object.defineProperty(s,i,{configurable:!0,enumerable:!0,get:()=>e[i],set(t){e[i]=t}}),a;a=c(a,t[i],n["*"])}return s[i]=a,a},set:(t,n,r,i)=>(n in s?s[n]=r:e[n]=r,!0),defineProperty:(e,t,n)=>Reflect.defineProperty(s,t,n),deleteProperty:(e,t)=>Reflect.deleteProperty(s,t)},i=Object.create(e);return new Proxy(i,r)},u=e=>({addListener(t,n,...s){t.addListener(e.get(n),...s)},hasListener:(t,n)=>t.hasListener(e.get(n)),removeListener(t,n){t.removeListener(e.get(n))}}),d=new r((e=>"function"!=typeof e?e:function(t){const n=c(t,{},{getContent:{minArgs:0,maxArgs:0}});e(n)}));let A=!1;const f=new r((e=>"function"!=typeof e?e:function(t,s,r){let o,a,g=!1,m=new Promise((e=>{o=function(t){A||(console.warn(n,(new Error).stack),A=!0),g=!0,e(t)}}));try{a=e(t,s,o)}catch(e){a=Promise.reject(e)}const l=!0!==a&&i(a);if(!0!==a&&!l&&!g)return!1;const c=e=>{e.then((e=>{r(e)}),(e=>{let t;t=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",r({__mozWebExtensionPolyfillReject__:!0,message:t})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return c(l?a:m),!0})),p=({reject:n,resolve:s},r)=>{e.runtime.lastError?e.runtime.lastError.message===t?s():n(new Error(e.runtime.lastError.message)):r&&r.__mozWebExtensionPolyfillReject__?n(new Error(r.message)):s(r)},$=(e,t,n,...s)=>{if(s.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${s.length}`);if(s.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${s.length}`);return new Promise(((e,t)=>{const r=p.bind(null,{resolve:e,reject:t});s.push(r),n.sendMessage(...s)}))},x={devtools:{network:{onRequestFinished:u(d)}},runtime:{onMessage:u(f),onMessageExternal:u(f),sendMessage:$.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:$.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":h},services:{"*":h},websites:{"*":h}},c(e,x,s)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=s(chrome)}else e.exports=browser}(e)}(X={exports:{}},X.exports),X.exports);const ee=e=>({}),te=e=>({setEditing:e[1]}),ne=e=>({}),se=e=>({setEditing:e[1]});function re(e){let t;const n=e[3].display,s=a(n,e,e[2],te);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,r){s&&s.p&&(!t||4&r)&&m(s,n,e,e[2],r,ee,te)},i(e){t||(H(s,e),t=!0)},o(e){U(s,e),t=!1},d(e){s&&s.d(e)}}}function ie(e){let t;const n=e[3].edit,s=a(n,e,e[2],se);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,r){s&&s.p&&(!t||4&r)&&m(s,n,e,e[2],r,ne,se)},i(e){t||(H(s,e),t=!0)},o(e){U(s,e),t=!1},d(e){s&&s.d(e)}}}function oe(e){let t,n,s,r;const i=[ie,re],o=[];function a(e,t){return e[0]?1:0}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=$("")},m(e,n){o[t].m(e,n),d(e,s,n),r=!0},p(e,[r]){let g=t;t=a(e),t===g?o[t].p(e,r):(V(),U(o[g],1,1,(()=>{o[g]=null})),Z(),n=o[t],n?n.p(e,r):(n=o[t]=i[t](e),n.c()),H(n,1),n.m(s.parentNode,s))},i(e){r||(H(n),r=!0)},o(e){U(n),r=!1},d(e){o[t].d(e),e&&A(s)}}}function ae(e,t,n){let{$$slots:s={},$$scope:r}=t,{isEditing:i}=t;return e.$$set=e=>{"isEditing"in e&&n(0,i=e.isEditing),"$$scope"in e&&n(2,r=e.$$scope)},[i,()=>n(0,i=!i),r,s]}class ge extends Q{constructor(e){super(),K(this,e,ae,oe,o,{isEditing:0})}}function me(t){let n,s,i;return{c(){n=f("input"),b(n,"class","time svelte-3amb15"),b(n,"type","number"),b(n,"placeholder",t[2]),b(n,"min","0"),b(n,"max",t[1])},m(e,r){d(e,n,r),w(n,t[0]),s||(i=[h(n,"input",t[7]),h(n,"onchange",t[4]),h(n,"focusout",t[3]),h(n,"input",t[5])],s=!0)},p(e,[t]){2&t&&b(n,"max",e[1]),1&t&&v(n.value)!==e[0]&&w(n,e[0])},i:e,o:e,d(e){e&&A(n),s=!1,r(i)}}}function le(e,t,n){let{name:s}=t,{max:r}=t,{value:i}=t,o=s.slice(0,1)+s.slice(0,1);const a=(g=r,e=>{e.preventDefault();let t=e.target.value;t.length>2&&n(0,i=e.target.value.slice(0,2)),2===t.length&&parseInt(t)>g&&(e.target.value=g)});var g;return e.$$set=e=>{"name"in e&&n(6,s=e.name),"max"in e&&n(1,r=e.max),"value"in e&&n(0,i=e.value)},[i,r,o,e=>{e.target.value>0&&(e.target.value=e.target.value.toString().padStart(2,"0"))},e=>{(2===e.target.value.length&&e.keyCode>47&&e.keyCode<58||189===e.keyCode)&&e.preventDefault()},a,s,function(){i=v(this.value),n(0,i)}]}class ce extends Q{constructor(e){super(),K(this,e,le,me,o,{name:6,max:1,value:0})}}function ue(e){let t,n,s,r,i,o,a,g,m,l,c,p,$,h;function b(t){e[3](t)}let v={name:"Hours",max:"23"};function w(t){e[4](t)}void 0!==e[0]&&(v.value=e[0]),n=new ce({props:v}),M.push((()=>q(n,"value",b)));let y={name:"Minutes",max:"59"};function C(t){e[5](t)}void 0!==e[1]&&(y.value=e[1]),a=new ce({props:y}),M.push((()=>q(a,"value",w)));let k={name:"Seconds",max:"59"};return void 0!==e[2]&&(k.value=e[2]),p=new ce({props:k}),M.push((()=>q(p,"value",C))),{c(){t=f("div"),W(n.$$.fragment),r=x(),i=f("span"),i.textContent=":",o=x(),W(a.$$.fragment),m=x(),l=f("span"),l.textContent=":",c=x(),W(p.$$.fragment)},m(e,s){d(e,t,s),z(n,t,null),u(t,r),u(t,i),u(t,o),z(a,t,null),u(t,m),u(t,l),u(t,c),z(p,t,null),h=!0},p(e,[t]){const r={};!s&&1&t&&(s=!0,r.value=e[0],L((()=>s=!1))),n.$set(r);const i={};!g&&2&t&&(g=!0,i.value=e[1],L((()=>g=!1))),a.$set(i);const o={};!$&&4&t&&($=!0,o.value=e[2],L((()=>$=!1))),p.$set(o)},i(e){h||(H(n.$$.fragment,e),H(a.$$.fragment,e),H(p.$$.fragment,e),h=!0)},o(e){U(n.$$.fragment,e),U(a.$$.fragment,e),U(p.$$.fragment,e),h=!1},d(e){e&&A(t),G(n),G(a),G(p)}}}function de(e,t,n){let{hours:s}=t,{mins:r}=t,{secs:i}=t;return e.$$set=e=>{"hours"in e&&n(0,s=e.hours),"mins"in e&&n(1,r=e.mins),"secs"in e&&n(2,i=e.secs)},[s,r,i,function(e){s=e,n(0,s)},function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}class Ae extends Q{constructor(e){super(),K(this,e,de,ue,o,{hours:0,mins:1,secs:2})}}function fe(t){let n,s,r=t[2](t[0])+"";return{c(){n=f("label"),s=$(r),b(n,"for",t[1]),b(n,"class","time")},m(e,t){d(e,n,t),u(n,s)},p(e,[t]){1&t&&r!==(r=e[2](e[0])+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(s,r),2&t&&b(n,"for",e[1])},i:e,o:e,d(e){e&&A(n)}}}function pe(e,t,n){let{count:s}=t,{type:r}=t;return e.$$set=e=>{"count"in e&&n(0,s=e.count),"type"in e&&n(1,r=e.type)},[s,r,e=>e.toString().padStart(2,"0")]}class $e extends Q{constructor(e){super(),K(this,e,pe,fe,o,{count:0,type:1})}}function xe(e){let t,n,s,r,i,o,a,g,m,l,c;return n=new $e({props:{type:"Hours",count:e[0]}}),o=new $e({props:{type:"Minutes",count:e[1]}}),l=new $e({props:{type:"Seconds",count:e[2]}}),{c(){t=f("div"),W(n.$$.fragment),s=x(),r=f("span"),r.textContent=":",i=x(),W(o.$$.fragment),a=x(),g=f("span"),g.textContent=":",m=x(),W(l.$$.fragment)},m(e,A){d(e,t,A),z(n,t,null),u(t,s),u(t,r),u(t,i),z(o,t,null),u(t,a),u(t,g),u(t,m),z(l,t,null),c=!0},p(e,[t]){const s={};1&t&&(s.count=e[0]),n.$set(s);const r={};2&t&&(r.count=e[1]),o.$set(r);const i={};4&t&&(i.count=e[2]),l.$set(i)},i(e){c||(H(n.$$.fragment,e),H(o.$$.fragment,e),H(l.$$.fragment,e),c=!0)},o(e){U(n.$$.fragment,e),U(o.$$.fragment,e),U(l.$$.fragment,e),c=!1},d(e){e&&A(t),G(n),G(o),G(l)}}}function he(e,t,n){let{H:s}=t,{M:r}=t,{S:i}=t;return e.$$set=e=>{"H"in e&&n(0,s=e.H),"M"in e&&n(1,r=e.M),"S"in e&&n(2,i=e.S)},[s,r,i]}class be extends Q{constructor(e){super(),K(this,e,he,xe,o,{H:0,M:1,S:2})}}const ve=e=>({disabled:1&e}),we=e=>({disabled:e[0]});function ye(e){let t,n,s,r,o;const g=e[4].default,l=a(g,e,e[3],we);return{c(){t=f("button"),l&&l.c(),b(t,"class",n=c(e[2].class)+" svelte-s7s34u"),t.disabled=e[0]},m(n,a){d(n,t,a),l&&l.m(t,null),s=!0,r||(o=h(t,"click",(function(){i(e[1])&&e[1].apply(this,arguments)})),r=!0)},p(r,[i]){e=r,l&&l.p&&(!s||9&i)&&m(l,g,e,e[3],i,ve,we),(!s||4&i&&n!==(n=c(e[2].class)+" svelte-s7s34u"))&&b(t,"class",n),(!s||1&i)&&(t.disabled=e[0])},i(e){s||(H(l,e),s=!0)},o(e){U(l,e),s=!1},d(e){e&&A(t),l&&l.d(e),r=!1,o()}}}function Ce(e,n,s){let{$$slots:r={},$$scope:i}=n,{disabled:o}=n,{handleClick:a}=n;return e.$$set=e=>{s(2,n=t(t({},n),l(e))),"disabled"in e&&s(0,o=e.disabled),"handleClick"in e&&s(1,a=e.handleClick),"$$scope"in e&&s(3,i=e.$$scope)},n=l(n),[o,a,n,i,r]}class ke extends Q{constructor(e){super(),K(this,e,Ce,ye,o,{disabled:0,handleClick:1})}}function Te(t){let n,s,r;return{c(){n=f("div"),s=p("svg"),r=p("path"),b(r,"fill",t[1]),b(r,"stroke",t[1]),b(r,"stroke-width","30"),b(r,"d","M109.395 227.59C99.3957 233.257 87 226.034 87 214.54V96.022C87 84.5286 99.3957 77.3053 109.395 82.9717L213.97 142.231C224.11 147.977 224.11 162.586 213.97 168.331L109.395 227.59Z"),b(s,"width","55"),b(s,"height","55"),b(s,"viewBox","0 0 309 309"),b(s,"fill","none"),b(s,"xmlns","http://www.w3.org/2000/svg"),b(n,"class","icon svelte-dwoyhn"),y(n,"magic",!t[0])},m(e,t){d(e,n,t),u(n,s),u(s,r)},p(e,[t]){2&t&&b(r,"fill",e[1]),2&t&&b(r,"stroke",e[1]),1&t&&y(n,"magic",!e[0])},i:e,o:e,d(e){e&&A(n)}}}function Ee(e,t,n){let s,{disabled:r}=t;return e.$$set=e=>{"disabled"in e&&n(0,r=e.disabled)},e.$$.update=()=>{1&e.$$.dirty&&n(1,s=r?"#BABABA":"#111827")},[r,s]}class Me extends Q{constructor(e){super(),K(this,e,Ee,Te,o,{disabled:0})}}function Se(t){let n,s,r,i;return{c(){n=f("div"),s=p("svg"),r=p("path"),i=p("path"),b(r,"fill",t[1]),b(r,"d","M79 211.667C79 227.315 90.1929 240 104 240C117.807 240 129 227.315 129 211.667V98.3333C129 82.6853 117.807 70 104 70C90.1929 70 79 82.6853 79 98.3333V211.667ZM204 240C190.193 240 179 227.315 179 211.667V98.3333C179 82.6853 190.193 70 204 70C217.807 70 229 82.6853 229 98.3333V211.667C229 227.315 217.807 240 204 240Z"),b(i,"stroke",t[1]),b(i,"d","M79 211.667C79 227.315 90.1929 240 104 240C117.807 240 129 227.315 129 211.667V98.3333C129 82.6853 117.807 70 104 70C90.1929 70 79 82.6853 79 98.3333V211.667ZM204 240C190.193 240 179 227.315 179 211.667V98.3333C179 82.6853 190.193 70 204 70C217.807 70 229 82.6853 229 98.3333V211.667C229 227.315 217.807 240 204 240Z"),b(s,"class","icon svelte-dwoyhn"),b(s,"width","55"),b(s,"height","55"),b(s,"viewBox","0 0 309 309"),b(s,"fill","none"),b(s,"xmlns","http://www.w3.org/2000/svg"),b(n,"class","icon svelte-dwoyhn"),y(n,"magic",!t[0])},m(e,t){d(e,n,t),u(n,s),u(s,r),u(s,i)},p(e,[t]){2&t&&b(r,"fill",e[1]),2&t&&b(i,"stroke",e[1]),1&t&&y(n,"magic",!e[0])},i:e,o:e,d(e){e&&A(n)}}}function Pe(e,t,n){let s,{disabled:r}=t;return e.$$set=e=>{"disabled"in e&&n(0,r=e.disabled)},e.$$.update=()=>{1&e.$$.dirty&&n(1,s=r?"#BABABA":"#111827")},[r,s]}class _e extends Q{constructor(e){super(),K(this,e,Pe,Se,o,{disabled:0})}}function Be(t){let n,s,r;return{c(){n=f("div"),s=p("svg"),r=p("path"),b(r,"fill",t[1]),b(r,"stroke",t[1]),b(r,"stroke-width","15"),b(r,"d","M163.395 70C119.353 70 83.1449 103.666 78.9917 146.721C78.5521 151.278 74.8834 155 70.3055 155C62.9256 155 59.2252 163.919 64.4375 169.143L86.8712 191.63C86.9435 191.702 87.0036 191.786 87.0493 191.877C87.3397 192.459 88.1154 192.586 88.5755 192.126L111.571 169.133C116.787 163.918 113.093 155 105.718 155C101.146 155 97.3849 151.275 97.9477 146.738C101.996 114.097 129.723 88.8889 163.395 88.8889C199.86 88.8889 229.352 118.45 229.352 155C229.352 191.55 199.86 221.111 163.395 221.111C148.624 221.111 134.972 216.188 124.004 207.912C119.818 204.753 113.834 204.678 110.13 208.39C106.449 212.08 106.419 218.101 110.482 221.366C124.981 233.02 143.326 240 163.395 240C210.224 240 248.196 201.939 248.196 155C248.196 108.061 210.224 70 163.395 70Z"),b(s,"width","55"),b(s,"height","55"),b(s,"viewBox","20 0 309 309"),b(s,"fill","none"),b(s,"xmlns","http://www.w3.org/2000/svg"),b(n,"class","icon svelte-dwoyhn"),y(n,"magic",!t[0])},m(e,t){d(e,n,t),u(n,s),u(s,r)},p(e,[t]){2&t&&b(r,"fill",e[1]),2&t&&b(r,"stroke",e[1]),1&t&&y(n,"magic",!e[0])},i:e,o:e,d(e){e&&A(n)}}}function je(e,t,n){let s,{disabled:r}=t;return e.$$set=e=>{"disabled"in e&&n(0,r=e.disabled)},e.$$.update=()=>{1&e.$$.dirty&&n(1,s=r?"#BABABA":"#111827")},[r,s]}class Le extends Q{constructor(e){super(),K(this,e,je,Be,o,{disabled:0})}}function Ne(e){let t,n,s,r,i;function o(t){e[14](t)}function a(t){e[15](t)}function g(t){e[16](t)}let m={};return void 0!==e[7]&&(m.hours=e[7]),void 0!==e[8]&&(m.mins=e[8]),void 0!==e[9]&&(m.secs=e[9]),t=new Ae({props:m}),M.push((()=>q(t,"hours",o))),M.push((()=>q(t,"mins",a))),M.push((()=>q(t,"secs",g))),{c(){W(t.$$.fragment)},m(e,n){z(t,e,n),i=!0},p(e,i){const o={};!n&&128&i&&(n=!0,o.hours=e[7],L((()=>n=!1))),!s&&256&i&&(s=!0,o.mins=e[8],L((()=>s=!1))),!r&&512&i&&(r=!0,o.secs=e[9],L((()=>r=!1))),t.$set(o)},i(e){i||(H(t.$$.fragment,e),i=!0)},o(e){U(t.$$.fragment,e),i=!1},d(e){G(t,e)}}}function Re(e){let t,n;return t=new be({props:{H:e[11],M:e[12],S:e[13]}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};2048&n&&(s.H=e[11]),4096&n&&(s.M=e[12]),8192&n&&(s.S=e[13]),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function De(e){let t,n;return t=new Me({props:{disabled:0==e[10]||e[1]}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};1026&n&&(s.disabled=0==e[10]||e[1]),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function Fe(e){let t,n;return t=new ke({props:{class:"button-bottom",disabled:e[1]||0==e[10]||e[0]===e[10],handleClick:e[19],$$slots:{default:[Oe]},$$scope:{ctx:e}}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};1027&n&&(s.disabled=e[1]||0==e[10]||e[0]===e[10]),14400&n&&(s.handleClick=e[19]),4195331&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function Ie(e){let t,n;return t=new ke({props:{class:"button-bottom",disabled:!e[2],handleClick:e[18],$$slots:{default:[Ve]},$$scope:{ctx:e}}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.disabled=!e[2]),32&n&&(s.handleClick=e[18]),4194308&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function Oe(e){let t,n;return t=new Le({props:{disabled:e[1]||0==e[10]||e[0]===e[10]}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};1027&n&&(s.disabled=e[1]||0==e[10]||e[0]===e[10]),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function Ve(e){let t,n;return t=new _e({props:{disabled:!e[2]}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.disabled=!e[2]),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function Ze(e){let t,n,s,r,i,o,a,g,m,l;s=new ge({props:{isEditing:e[3],$$slots:{display:[Re],edit:[Ne]},$$scope:{ctx:e}}}),o=new ke({props:{class:"button-top",disabled:0==e[10]||e[1],handleClick:e[17],$$slots:{default:[De]},$$scope:{ctx:e}}});const c=[Ie,Fe],p=[];function $(e,t){return e[2]?0:1}return g=$(e),m=p[g]=c[g](e),{c(){t=f("div"),n=f("div"),W(s.$$.fragment),r=x(),i=f("div"),W(o.$$.fragment),a=x(),m.c(),b(n,"class","time-container svelte-cb03hd"),b(i,"class","button-container svelte-cb03hd"),b(t,"class","app svelte-cb03hd")},m(e,m){d(e,t,m),u(t,n),z(s,n,null),u(t,r),u(t,i),z(o,i,null),u(i,a),p[g].m(i,null),l=!0},p(e,[t]){const n={};8&t&&(n.isEditing=e[3]),4209536&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const r={};1026&t&&(r.disabled=0==e[10]||e[1]),1040&t&&(r.handleClick=e[17]),4195330&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r);let a=g;g=$(e),g===a?p[g].p(e,t):(V(),U(p[a],1,1,(()=>{p[a]=null})),Z(),m=p[g],m?m.p(e,t):(m=p[g]=c[g](e),m.c()),H(m,1),m.m(i,null))},i(e){l||(H(s.$$.fragment,e),H(o.$$.fragment,e),H(m),l=!0)},o(e){U(s.$$.fragment,e),U(o.$$.fragment,e),U(m),l=!1},d(e){e&&A(t),G(s),G(o),p[g].d()}}}function He(e,t,n){let s,r,i,o,{countDown:a}=t,{interval:g}=t,{isTimerActive:m}=t,{isTimeRemaining:l}=t,{start:c}=t,{stop:u}=t,{reset:d}=t,A="",f="",p="";return e.$$set=e=>{"countDown"in e&&n(0,a=e.countDown),"interval"in e&&n(1,g=e.interval),"isTimerActive"in e&&n(2,m=e.isTimerActive),"isTimeRemaining"in e&&n(3,l=e.isTimeRemaining),"start"in e&&n(4,c=e.start),"stop"in e&&n(5,u=e.stop),"reset"in e&&n(6,d=e.reset)},e.$$.update=()=>{896&e.$$.dirty&&n(10,s=(e=>60*e*60)(A)+(e=>60*e)(f)+p),1&e.$$.dirty&&n(11,r=Math.floor(a%86400/3600)),1&e.$$.dirty&&n(12,i=Math.floor(a%3600/60)),1&e.$$.dirty&&n(13,o=Math.floor(a%60))},[a,g,m,l,c,u,d,A,f,p,s,r,i,o,function(e){A=e,n(7,A)},function(e){f=e,n(8,f)},function(e){p=e,n(9,p)},()=>c(s),()=>u(),()=>{n(11,r=n(12,i=n(13,o=0))),d()}]}class Ue extends Q{constructor(e){super(),K(this,e,He,Ze,o,{countDown:0,interval:1,isTimerActive:2,isTimeRemaining:3,start:4,stop:5,reset:6})}}function qe(e){let t,n;return t=new Ue({props:{countDown:e[0],interval:e[1],isTimerActive:e[2],isTimeRemaining:e[3],start:e[4],stop:e[5],reset:e[6]}}),{c(){W(t.$$.fragment)},m(e,s){z(t,e,s),n=!0},p(e,[n]){const s={};1&n&&(s.countDown=e[0]),2&n&&(s.interval=e[1]),4&n&&(s.isTimerActive=e[2]),8&n&&(s.isTimeRemaining=e[3]),t.$set(s)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function We(e,t,n){let s,r,i,o,a;return T((async()=>{a=Y.runtime.connect({name:"background-timer-port"}),a.onMessage.addListener((({msg:e,countDown:t,interval:a,isTimerActive:g,isTimeRemaining:m})=>{"timer-state"===e&&(n(0,s=t),n(1,r=a),n(2,i=g),n(3,o=m))}))})),[s,r,i,o,e=>a.postMessage({msg:"start-timer",input:e}),()=>a.postMessage({msg:"stop-timer"}),()=>a.postMessage({msg:"reset-timer"})]}return new class extends Q{constructor(e){super(),K(this,e,We,qe,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=app.js.map
