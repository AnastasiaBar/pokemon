!function(){var t={"./src/blocks/btn-burger/btn-burger.js":function(t,e,r){"use strict";r.r(e),(0,r("./src/js/utils/documentReady.js").default)((function(){var t=document.querySelector(".overlay"),e=document.querySelector(".btn-burger__burger-btn"),r=document.querySelector(".sidebar");e.addEventListener("click",(function(){var e="mobile-menu"===document.body.getAttribute("data-state");document.body.dataset.state=e?"":"mobile-menu",t.classList.toggle("overlay--active",!e)})),document.addEventListener("click",(function(n){n.target!==r&&n.target!==e&&(document.body.dataset.state="",t.classList.remove("overlay--active"))}))}))},"./src/blocks/loader/loader.js":function(t,e,r){"use strict";r.r(e),(0,r("./src/js/utils/documentReady.js").default)((function(){}))},"./src/blocks/tabs/tabs.js":function(t,e,r){"use strict";r.r(e),(0,r("./src/js/utils/documentReady.js").default)((function(){document.querySelectorAll(".tabs__button").forEach((function(t){t.addEventListener("click",(function(t){!function(t,e){var r=document.getElementsByClassName("page__tab");Array.from(r).forEach((function(t){t.style.display="none"}));var n=document.getElementsByClassName("tabs__button");Array.from(n).forEach((function(t){t.className=t.className.replace("button--active","")})),document.getElementById("tab".concat(e)).style.display="grid",t.currentTarget.className+=" button--active"}(t,t.target.id)}))}))}))},"./src/js/script.js":function(){},"./src/js/utils/documentReady.js":function(t,e,r){"use strict";r.r(e);e.default=function(t){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)}}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r("./src/blocks/btn-burger/btn-burger.js"),r("./src/blocks/loader/loader.js"),r("./src/blocks/tabs/tabs.js"),r("./src/js/script.js")}();
//# sourceMappingURL=bundle.js.map
