(this["webpackJsonp8-bit-art-generator"]=this["webpackJsonp8-bit-art-generator"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),s=(a(14),a(6)),f=a(2),i=a.n(f),l=a(3),u=a(1),m=(a(16),function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)});function d(e){var t=c.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],o=c.a.useRef((function(){return r(!1)}));return c.a.useEffect((function(){return o.current}),[e]),[n,c.a.useCallback((function(){return function(e){if(navigator.clipboard)return navigator.clipboard.writeText(e);var t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",document.body.appendChild(t);var a=window.getSelection();if(!a)return Promise.reject();var n=window.document.createRange();a.removeAllRanges(),n.selectNode(t),a.addRange(n);try{window.document.execCommand("copy")}catch(c){return Promise.reject()}return a.removeAllRanges(),window.document.body.removeChild(t),Promise.resolve()}(e).then((function(){return r(!0)})).catch((function(){return r((function(e){return e}))}))}),[e]),o.current]}var b=function(e){return Array(e).fill().map((function(t){return Array(e).fill("")}))},h=function(e){var t=Object(n.useState)(13),a=Object(u.a)(t,2),r=a[0],o=a[1],f=Object(n.useState)(b(r)),h=Object(u.a)(f,2),p=h[0],v=h[1],E=Object(n.useState)("#62fb60"),g=Object(u.a)(E,2),k=g[0],w=g[1],j=Object(n.useState)([]),y=Object(u.a)(j,2),N=y[0],x=y[1],O=Object(n.useState)(20),C=Object(u.a)(O,2),S=C[0],A=C[1],R=Object(n.useState)(!1),G=Object(u.a)(R,2),B=G[0],H=G[1],I=Object(n.useRef)(null),M=Object(n.useState)(""),T=Object(u.a)(M,2),F=T[0],z=T[1],V=Object(n.useState)("#pixelart {\n\t\twidth: 240px;\n\t\theight: 240px;\n\t}\n\t"),q=Object(u.a)(V,2),D=q[0],J=q[1],K=d(F),L=Object(u.a)(K,2),P=L[0],U=L[1],W=d("\n\t<style>\n\t".concat(D,"\n\t</style>\n\t<div id='pixelart-css'></div>\n\t")),X=Object(u.a)(W,2),Y=X[0],$=X[1];Object(n.useEffect)((function(){var e=b(r),t=p;t.forEach((function(a,n){r>n&&a.forEach((function(a,c){r>c&&(e[n][c]=t[n][c])}))})),v(e)}),[r]),Object(n.useEffect)((function(){v([["","","","","","","","","","","","",""],["","","#000000","#000000","#000000","","","","#000000","#000000","#000000","",""],["","#000000","#ff0000","#ff0000","#ff0000","#000000","","#000000","#ff0000","#ff0000","#ff0000","#000000",""],["#000000","#ff0000","#ffffff","#ffffff","#ff0000","#ff0000","#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000"],["#000000","#ff0000","#ffffff","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000"],["#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000"],["#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000"],["","#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000",""],["","","#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000","",""],["","","","#000000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#000000","","",""],["","","","","#000000","#ff0000","#ff0000","#ff0000","#000000","","","",""],["","","","","","#000000","#ff0000","#000000","","","","",""],["","","","","","","#000000","","","","","",""]])}),[]),Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=[],p.forEach((function(e,n){e.forEach((function(e,c){e&&(t.push("".concat(c*S,"px ").concat(n*S,"px  ").concat(e)),a.push('<rect width="'.concat(S,'" height="').concat(S,'" style="transform:translate(').concat(c*S,"px , ").concat(n*S,'px )" fill="').concat(e,'" />')))}))})),t=t.join(","),n="\n\t\t\t\t#pixelart-css {\n\t\t\t\t\twidth: ".concat(S*r,"px;\n\t\t\t\t\theight: ").concat(S*r,"px;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t#pixelart-css:after {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: ").concat(S,"px;\n\t\t\t\t\theight: ").concat(S,"px;\n\t\t\t\t\tbackground: ").concat(p[0][0]?p[0][0]:"transparent",";\n\t\t\t\t\tbox-shadow:").concat(t," ;\n\t\t\t\t\t\n\t\t\t\t}"),J(n),c=['<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(S*r,'" height="').concat(S*r,'" viewBox="0 0 ').concat(S*r," ").concat(S*r,'">'),a.join(""),"</svg>"].join(""),z(c);case 8:case"end":return e.stop()}}),e)})))()}),[p,S,r]),Object(n.useEffect)((function(){I&&Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.current.innerHTML=F;case 1:case"end":return e.stop()}}),e)})))()}),[F,I]),Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.getElementById("live-style"))&&t.remove(),(a=document.createElement("style")).type="text/css",a.id="live-style",a.innerHTML=D,document.getElementsByTagName("head")[0].appendChild(a);case 7:case"end":return e.stop()}}),e)})))()}),[D]);var _=function(e){w(e);var t=Object(s.a)(N);t.includes(e)||(t.unshift(e),t.splice(6)),x(t)},Q=function(e,t,a){a.ctrlKey?p[e][t]&&w(p[e][t]):Object(l.a)(i.a.mark((function n(){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(c=Object(s.a)(p))[e][t]=k,a.shiftKey&&(c[e][t]=""),v(Object(s.a)(c));case 4:case"end":return n.stop()}}),n)})))()},Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=" \n\t\t<style>\n\t\t".concat(D,"\n\t\t</style>\n\t\t<div id='pixelart-css'></div>\n\t\t"),m("pixelart.html",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=Object(n.useMemo)((function(){return p.map((function(e,t){return c.a.createElement("div",{className:"cellrow",key:t},e.map((function(e,a){var n={width:S,height:S,background:e};return c.a.createElement("div",{key:"".concat(t,"+").concat(a),className:"cell",style:n,onClick:function(e){return Q(t,a,e)},onMouseOver:function(e){return function(e,t,a){a.ctrlKey?p[e][t]&&w(p[e][t]):B&&Q(e,t,a)}(t,a,e)}})})))}))}),[p,S,B]);return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"draw-container"},c.a.createElement("div",{className:"settings noselect"},c.a.createElement("div",{className:"grid-size"},c.a.createElement("button",{className:"btn action-btn mx-1 btn-square decrement",onClick:function(){return o((function(e){return e>1?e-1:e}))}},"-"),c.a.createElement("span",{className:"grid-size-value"},r," x ",r),c.a.createElement("button",{className:"btn action-btn mx-1 btn-square increment",onClick:function(){return o((function(e){return e+1}))}},"+")),c.a.createElement("div",{className:"pixel-size"},c.a.createElement("button",{className:"btn action-btn mx-1 btn-square decrement",onClick:function(){return A((function(e){return e>5?e-1:e}))}},"-"),c.a.createElement("span",{className:"pixel-size-value"},S,"px"),c.a.createElement("button",{className:"btn action-btn mx-1 btn-square increment",onClick:function(){return A((function(e){return e+1}))}},"+")),c.a.createElement("div",{className:"extra"},c.a.createElement("button",{className:"btn action-btn mx-1 reset-btn",onClick:function(){return v(b(r))}},"Reset")),c.a.createElement("br",null)),c.a.createElement("div",{className:"color center"},c.a.createElement("span",{className:"small text-muted my-05 text-center"},"(Hold 'Shift' key and drag to Erase) ",c.a.createElement("br",null)," (Hold 'Ctrl' and hover over a cell to copy it's color)"," "),c.a.createElement("div",{className:"colors"},N.map((function(e,t){return c.a.createElement("span",{key:t,className:"color-history circle",style:{background:e},onClick:function(){return _(e)}})})),c.a.createElement("input",{type:"color",value:k,onChange:function(e){return _(e.target.value)}}))),c.a.createElement("div",{className:"vs noselect"},c.a.createElement("div",{className:"art-container"},c.a.createElement("span",{className:"art-header"},"CSS"),c.a.createElement("div",{id:"pixelart-css",className:"no-line-height"}),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{className:"btn action-btn my-1 css-download",onClick:Z},"Download"),c.a.createElement("button",{className:"btn action-btn my-1 css-copy",onClick:function(){$()}},Y?"Copied CSS! ":"Copy CSS"))),c.a.createElement("div",{className:"art-container"},c.a.createElement("span",{className:"art-header",onDoubleClick:function(){var e=JSON.stringify(p);m("canvas.json",e)}},"YOUR CANVAS"),c.a.createElement("div",{id:"pixelart-canvas",className:"canvas no-line-height",onSelect:function(){return!1},onMouseDown:function(){return H(!0)},onMouseUp:function(){return H(!1)}},ee)),c.a.createElement("div",{className:"art-container"},c.a.createElement("span",{className:"art-header"},"SVG"),c.a.createElement("div",{id:"pixelart-svg",className:"no-line-height",ref:I}),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{className:"btn action-btn my-1 svg-download",onClick:function(){m("pixelart.svg",F)}},"Download"),c.a.createElement("button",{className:"btn action-btn my-1 svg-copy",onClick:function(){U()}},P?"Copied SVG! ":"Copy SVG"))))))};var p=function(){return c.a.createElement("div",{className:"gitIcons"},c.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/8-bit-art-generator/fork","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-repo-forked","data-show-count":"true","aria-label":"Fork akashraj9828/8-bit-art-generator on GitHub"},"Fork"),c.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/8-bit-art-generator","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star akashraj9828/8-bit-art-generator on GitHub"},"Star"),c.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/8-bit-art-generator/issues","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-issue-opened","data-show-count":"true","aria-label":"Issue akashraj9828/8-bit-art-generator on GitHub"},"Issue"),c.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-show-count":"true","aria-label":"Follow @akashraj9828 on GitHub"},"Follow @akashraj9828"))},v=(a(17),a(18),function(){return c.a.createElement("div",{className:"see-also"},[["SVG TEXT ANIMATION GENERATOR","https://akashraj9828.github.io/svg-text-animation-generator/"]].map((function(e,t){var a=Object(u.a)(e,2),n=a[0],r=a[1];return c.a.createElement("span",{className:"projects mx-1",key:t},"Also see (",c.a.createElement("a",{href:r},n),")")})))});var E=function(){return c.a.createElement("footer",null,c.a.createElement(p,null),c.a.createElement(v,null),c.a.createElement("span",{className:"footer-text"},"With"," ",c.a.createElement("span",{className:"heart","aria-label":"love"},"\u2764")," ","by ",c.a.createElement("a",{href:"https://akashraj.tech"},"Akash Raj")))},g=(a(19),a(20),function(){return c.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/akashraj9828"},c.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),c.a.createElement("span",{style:{marginLeft:"5px",fontSize:"28px!important"}},"Buy me a coffee"))}),k=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("header",null,"8-Bit Art Generator"),c.a.createElement(g,null))};var w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(h,null),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1485a52f.chunk.js.map