(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.create-task {\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  padding: 5% 5%;\r\n  margin: auto 10%;\r\n}\r\n\r\n.task-title {\r\n  margin-bottom: 5%;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.task-body {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid grey;\r\n  height: 30px;\r\n}\r\n\r\n.task-body button {\r\n  border-left: 1px solid blue;\r\n  height: 100%;\r\n  background-color: blue;\r\n}\r\n\r\n.list-title button {\r\n  border: 1px solid red;\r\n  padding: 2% 2%;\r\n  color: red;\r\n  background-color: transparent;\r\n}\r\n\r\n.task-body input,\r\n.task-body button {\r\n  flex-grow: 1;\r\n  border: none;\r\n}\r\n\r\n.list-tasks li button {\r\n  background-color: transparent;\r\n  border: none;\r\n  margin-right: 5px;\r\n  height: 100%;\r\n}\r\n\r\n.task-body input,\r\n.task-body button:focus {\r\n  outline: none;\r\n}\r\n\r\n.task-body button:hover {\r\n  background-color: grey;\r\n}\r\n\r\n.fa-plus {\r\n  color: white;\r\n}\r\n\r\n.list-tasks {\r\n  border: 1px solid;\r\n  margin: auto 10%;\r\n  margin-top: 5%;\r\n  padding: 2% 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.list-title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5%;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.list-title button:hover {\r\n  background-color: blue;\r\n  color: white;\r\n  border: 1px solid white;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.list-tasks ul {\r\n  list-style: none;\r\n  width: 70vw;\r\n}\r\n\r\n.list-tasks li {\r\n  border-bottom: 1px solid gray;\r\n  background-color: #d6d8db;\r\n  width: 100%;\r\n  height: 5vw;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.list-tasks li input {\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-window-close {\r\n  background-color: transparent;\r\n  color: white;\r\n  font-size: large;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.fa-window-close:hover {\r\n  color: blue;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n  color: red;\r\n}\r\n\r\n.text-box {\r\n  width: 100%;\r\n  margin: auto 5% !important;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=t.base?l[0]+t.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=r(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var l=t(n,o),s=0;s<a.length;s++){var d=r(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),l=r.n(c),s=r(216),d=r.n(s),u=r(589),p=r.n(u),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n=>{localStorage.clear(),localStorage.setItem("to-do",JSON.stringify(n))};function b(n){const e=document.querySelector(".list-body");e.innerHTML="";const r=document.createElement("ul");n.forEach((n=>{const t=document.createElement("li");t.setAttribute("id","checkbox"),!0===n.completed?t.className="line":t.className="";const o=document.createElement("input");o.id=n.id,o.type="checkbox",o.name="checkbox";const a=document.createElement("span");a.id=n.id;const i=document.createElement("button");o.checked=n.completed,t.appendChild(o),a.innerHTML=n.description,t.appendChild(a),t.appendChild(i),i.id=n.id,i.setAttribute("onclick","deleteTaskFnc(this.id)"),i.innerHTML='<i class="fas fa-window-close"></i>',r.appendChild(t),e.appendChild(r)})),h(n)}const g=document.querySelector("#createTask"),y=document.querySelector("#newTask");let v=JSON.parse(localStorage.getItem("to-do"));null==v&&(v=[]),((n,e)=>{n.addEventListener("click",(()=>{b(e=e.filter((n=>!1===n.completed))),window.location.reload()}))})(document.querySelector("#deleteAll"),v),window.addEventListener("load",b(v)),g.addEventListener("click",(()=>{const n={description:y.value,completed:!1,id:Math.random().toString(16).slice(2)};v.push(n),b(v),window.location.reload()})),window.deleteTaskFnc=n=>{!function(n,e){const r=e.findIndex((e=>e.id===n));e.splice(r,1),b(e),window.location.reload()}(n,v)},function(n,e){for(let r=0;r<n.length;r+=1)n[r].addEventListener("click",(n=>{let r=n.path||n.composedPath&&n.composedPath();n.target.style.display="none";const t=document.createElement("input");t.id=n.target.id;for(let n=0;n<r[1].children.length;n+=1)r[1].children[n].style.display="none";t.type="text",t.className="text-box",t.value=r[0].innerHTML,r[1].appendChild(t),document.querySelector(".text-box").addEventListener("keyup",(n=>{13===n.keyCode&&e.forEach((n=>{n.id===r[0].id&&(n.description=t.value,b(e),window.location.reload())}))}))}))}(document.getElementsByTagName("span"),v);const x=document.querySelectorAll('input[name="checkbox"]');var w;w=v,x.forEach((n=>{n.addEventListener("change",(e=>{let r=e.path||e.composedPath&&e.composedPath();if(""===r[1].className){r[1].className="line";for(let e=0;e<w.length;e+=1)w[e].id===n.id&&(w[e].completed=!0,h(w))}else{r[1].className="";for(let e=0;e<w.length;e+=1)w[e].id===n.id&&(w[e].completed=!1,h(w))}}))}))})()})();