!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,e,r,i,o,c){try{var a=t[o](c),u=a.value}catch(s){return void e(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function e(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var c=t.apply(e,r);function a(t){n(c,i,o,a,u,"next",t)}function u(t){n(c,i,o,a,u,"throw",t)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("A36C"),i=e("iWo5"),o=e("qULd"),c=function(t,n){var e,c,a=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),u(o,i)):s()}},u=function(t,n){e=t,c||(c=e);var i=e;Object(r.f)((function(){return i.classList.add("ion-activated")})),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(r.f)((function(){return n.classList.remove("ion-activated")})),t&&c!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,o.a)},onMove:function(t){return a(t.currentX,t.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),c=void 0}})}},"74mu":function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return u}));var i=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((i=!0,(r="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},c=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},a=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=e(regeneratorRuntime.mark((function t(n,e,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}()},UfqK:function(n,e,r){"use strict";r.d(e,"a",(function(){return c}));var i=r("fXoL"),o=r("tk/3"),c=function(){var n=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.http=t,this.URL_API="https://api-monoschinos.herokuapp.com/api/v1"}var e,r,i;return e=n,(r=[{key:"getLastest",value:function(){return this.http.get(this.URL_API+"/lastest")}},{key:"getEmision",value:function(t){return this.http.get("".concat(this.URL_API,"/emision?page=").concat(t))}},{key:"getCategory",value:function(t,n){return this.http.get("".concat(this.URL_API,"/category/").concat(t,"?page=").concat(n))}},{key:"getEpisode",value:function(t){return this.http.get("".concat(this.URL_API,"/episode/").concat(t))}},{key:"getAnimes",value:function(t){return this.http.get("".concat(this.URL_API,"/animes?page=").concat(t))}},{key:"getAnime",value:function(t){return this.http.get("".concat(this.URL_API,"/anime/").concat(t))}},{key:"getGenders",value:function(){return this.http.get(this.URL_API+"/genders")}},{key:"searchAnime",value:function(t){return this.http.get("".concat(this.URL_API,"/search/").concat(t))}},{key:"searchByGender",value:function(t,n){return this.http.get("".concat(this.URL_API,"/gender/").concat(t,"?page=").concat(n))}}])&&t(e.prototype,r),i&&t(e,i),n}();return n.\u0275fac=function(t){return new(t||n)(i.Nb(o.a))},n.\u0275prov=i.Cb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},ZaV5:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return o}));var i=function(){var t=e(regeneratorRuntime.mark((function t(n,e,r,i,o){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return c.classList.add(t)})),o&&Object.assign(c,o),e.appendChild(c),t.t0=c.componentOnReady,!t.t0){t.next=12;break}return t.next=12,c.componentOnReady();case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return a}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},u=function(t){r.impact(t)}}}])}();