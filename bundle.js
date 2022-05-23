(()=>{"use strict";var e={301:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),d=t(667),c=t.n(d),p=new URL(t(695),t.b),s=i()(a()),l=c()(p);s.push([e.id,".home{\r\n    margin:auto;\r\n    width: 100%;    \r\n}\r\nbody{\r\n    background-image: url("+l+");\r\n    background-repeat: repeat;\r\n}\r\n/*Contents of Home Page*/\r\n.style{   \r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center; \r\n    margin:auto;\r\n    margin-top: 5%;\r\n    width:36%;\r\n    background: rgba(218, 71, 13, 0.80);\r\n    box-shadow: 0px 6px 9px 9px;    \r\n}\r\n.style p{\r\n    margin:auto;\r\n    width:50%;\r\n}\r\n.style h1{\r\n    padding:10px 0px 0px 10px;\r\n}\r\n.style h2{\r\n    margin:auto;\r\n    width:90%;\r\n    padding: 10px 0px 10px 80px;\r\n}\r\n.style img{\r\n    padding-left:50px;\r\n}\r\n/*About Page and Contact Page*/\r\n.about{ \r\n    display:grid;\r\n    grid-template-rows: 20% 80%;   \r\n    margin:auto;\r\n    margin-top: 5%;\r\n    width:36%;\r\n    height: 20rem;\r\n    background: rgba(218, 71, 13, 0.90);\r\n    box-shadow: 0px 6px 9px 9px; \r\n    justify-content: center;\r\n    align-items: center;  \r\n}\r\n.about p{\r\n    display: grid;\r\n    grid-row: 2/3;\r\n    justify-content: center;\r\n    font-size:1.5rem;    \r\n    padding: 10px 30px 60px 30px;\r\n    font-stretch: expanded;\r\n}\r\n.about h1{ \r\n    display: grid;\r\n    justify-content: center;   \r\n    margin:auto;\r\n    width:50%;\r\n    padding:10px 0px 0px 10px;\r\n}\r\n.contact{\r\n    display:grid;\r\n    grid-template-rows: 25% 25% 25% 25%;   \r\n    margin:auto;\r\n    margin-top: 5%;\r\n    width:36%;\r\n    height: 20rem;\r\n    background: rgba(218, 71, 13, 0.90);\r\n    box-shadow: 0px 6px 9px 9px; \r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.contact p{\r\n    display: grid;\r\n    justify-content: center;\r\n    font-size:1.5rem;    \r\n    padding: 15px 0px 60px 0px;\r\n    font-stretch: expanded;\r\n}\r\n.contact h1{ \r\n    display: grid;\r\n    justify-content: center;   \r\n    margin:auto;\r\n    width:50%;\r\n    padding:10px 0px 0px 10px;\r\n}\r\n/*Menu Page and Contents*/\r\n.course{\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: clip;\r\n    grid-template-rows: 5rem 12rem 5rem;    \r\n    margin:auto;\r\n    margin-top: 5%;\r\n    width:17rem;    \r\n    background: rgba(218, 71, 13, 0.80);\r\n    box-shadow: 0px 6px 9px 9px;\r\n}\r\n.menu{\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto;\r\n    grid-template-rows: 20% 80%;\r\n    height: 35rem;\r\n    margin:auto;    \r\n    margin-top: 2%;\r\n    width:80rem;\r\n    background: rgba(209, 201, 198, 0.8);\r\n    box-shadow: 0px 6px 9px 9px;\r\n}\r\n.course p{\r\n    display: grid;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n    grid-row: 3/4;\r\n}\r\n.menu h1{\r\n    display: grid;\r\n    grid-column: 1/span 4;\r\n    justify-content: center;\r\n    margin:auto;\r\n    width:50%;\r\n    padding:10px 0px 0px 10px;\r\n}\r\nh2{\r\n    margin:auto;\r\n    width:90%;\r\n    padding: 10px 0px 10px 80px;\r\n}\r\n.course img{\r\n    height:10rem;\r\n    grid-row: 2/3;\r\n    justify-content: center;\r\n}\r\n/*Navigation Bar*/\r\nnav{\r\n    display: grid;\r\n    grid-template-columns: 900px 100px 100px 100px 100px;\r\n    grid-template-rows: 75px;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: rgba(218, 71, 13, 0.9);\r\n    font-family: 'Permanent Marker';\r\n    font-size: 1.8rem;\r\n}\r\nnav div:hover{\r\n    background-color: rgb(209, 164, 75);\r\n    color: green;\r\n    cursor: pointer;\r\n    /*box-shadow: 0px 1px 3px 3px;*/\r\n}\r\nnav div.active{\r\n    background-color: rgb(209, 164, 75);\r\n}",""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],p=r.base?c[0]+r.base:c[0],s=o[p]||0,l="".concat(p," ").concat(s);o[p]=s+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=r(e,a),p=0;p<o.length;p++){var s=t(o[p]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},695:(e,n,t)=>{e.exports=t.p+"2796a397e3100241db62.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),d=t(565),c=t.n(d),p=t(216),s=t.n(p),l=t(589),u=t.n(l),m=t(301),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"091e398788fb995b5927.jpg",x=()=>{const e=document.querySelector("#content");e.classList.add("home"),e.textContent="",w(),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("h2"),r=document.createElement("a"),a=new Image;return n.textContent="Welcome to the Sizzla Restaurant!",r.appendChild(a),a.title="GHC Foods",a.src=g,a.alt="Bird",r.href="https://www.ghcfoods.com/",e.classList.add("style"),t.textContent="The best restaurant in Jamaica!",e.appendChild(n),e.appendChild(r),e.appendChild(t),e})())},f=t.p+"1fc442a108b8825f08b5.jpg",v=t.p+"b6786431fd771c98ff5e.jpg",C=t.p+"21893fb80c7506a24a78.png",y=t.p+"37b0ddcdfd246cde3754.jpg",b=()=>{const e=document.querySelector("#content");e.classList.add("home"),e.textContent="",w(),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1");return n.textContent="Menu",e.classList.add("menu"),e.appendChild(n),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=new Image;return n.textContent="Entree",t.textContent="Seasoned Fries",r.src=f,e.classList.add("course"),e.appendChild(n),e.appendChild(r),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("a"),a=new Image;return r.appendChild(a),n.textContent="Main",t.textContent="Jerk Salmon",a.src=v,a.title="Click To See Main Ingredients!",r.href="https://www.ghcfoods.com/products",e.classList.add("course"),e.appendChild(n),e.appendChild(r),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=new Image;return n.textContent="Desert",t.textContent="Potato Pudding",r.src=C,e.classList.add("course"),e.appendChild(n),e.appendChild(r),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=new Image;return n.textContent="Drink",t.textContent="Beer",r.src=y,e.classList.add("course"),e.appendChild(n),e.appendChild(r),e.appendChild(t),e})()),e})())},w=()=>{const e=document.querySelector("#content");e.classList.add("nav"),e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");return e.textContent="Sizzla Restaurant",n.textContent="Home",n.addEventListener("click",(()=>{x()})),t.textContent="About",t.addEventListener("click",(()=>{(()=>{const e=document.querySelector("#content");e.classList.add("home"),e.textContent="",w(),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p");return n.textContent="About Us",e.classList.add("about"),t.textContent="Using our no MSG added all natural ingredients, Sizzla Restaurant is dedicated to providing the best dining experience which not only tastes good, but is also healthy!",e.appendChild(n),e.appendChild(t),e})())})()})),r.textContent="Menu",r.addEventListener("click",(()=>{b()})),a.textContent="Contact",a.addEventListener("click",(()=>{(()=>{const e=document.querySelector("#content");e.classList.add("home"),e.textContent="",w(),e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p");return n.textContent="Contact Us",e.classList.add("contact"),t.textContent="225 1/2 Marcus Garvey Drive Kingston Jamaica",r.textContent="Tel: (876)553-6813",a.textContent="info@ghcfoods.com",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a),e})())})()})),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a),e})())};w(),x()})()})();