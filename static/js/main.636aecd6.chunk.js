(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),i=t.n(r),l=(t(25),t(8)),c=t(9),u=t(11),s=t(10),d=t(1);function f(){return o.a.createElement("div",{className:"loader"},"Loading ...")}t(26);var h=o.a.lazy((function(){return t.e(4).then(t.bind(null,51))})),v=o.a.lazy((function(){return t.e(5).then(t.bind(null,47))})),p=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,window.innerWidth>900?o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(h,null)):o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(v,null)))}}]),t}(a.Component),m=(t(27),function(e){Object(u.a)(r,e);var n=Object(s.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var e=o.a.lazy((function(){return Promise.all([t.e(3),t.e(7)]).then(t.bind(null,50))})),n=o.a.lazy((function(){return t.e(6).then(t.bind(null,46))}));return o.a.createElement("div",null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(f,null)},o.a.createElement(p,null),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:e}),o.a.createElement(d.a,{component:n}))))}}]),r}(a.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=t(12);i.a.render(o.a.createElement(g.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ThreePWorld",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/ThreePWorld","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.636aecd6.chunk.js.map