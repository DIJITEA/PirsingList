"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[942],{2942:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var i,r,o,c,s=e(2791),u=e(7737),a=e(9439),l=e(168),d=e(7787),f=function(n){return n.WHITE="#FFFFFF",n.BLACK="#000000",n.BUTTON_DISABLED_BG="#f9f9f9",n.BUTTON_DISABLED_TEXT="#acacac",n.TRANSPARENT="transparent",n.ORANGE_DEFAULT="#FF7020",n.ORANGE_HOVER="#FFAB08",n.ORANGE_ACTIVE="#F86310",n.WHITE_DEFAULT="#F2F2F3",n.GRAY="#B1B1B1",n.DARKGRAY="#202124",n}(f||{}),h=f,p=function(n){return n.Nunito="Nunito",n}(p||{}),x=p,j="\n\tfont-family: ".concat(x.Nunito,";\n\tfont-size: 32px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 100%;\n    "),A=d.ZP.input(i||(i=(0,l.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 90%;\n\theight: 50px;\n\tcolor: white;\n\tbackground-color: ",";\n\tborder: 2px solid ",";\n\tmargin-bottom: 15px;\n\t",";\n"])),h.DARKGRAY,h.GRAY,j),g=e(184),m=function(n){var t=n.getInput;return(0,g.jsx)(A,{onChange:function(n){return t(n.target.value)}})},y="\n\tfont-family: ".concat(x.Nunito,";\n\tfont-size: 32px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 100%;\n"),v=d.ZP.button(r||(r=(0,l.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: calc(90% + 4px);\n\theight: 50px;\n\tcolor: white;\n\tbackground-color: ",";\n\tborder: 2px solid ",";\n\t",";\n"])),h.DARKGRAY,h.GRAY,y),F=function(n){var t=n.src,e=n.srcFunc;return(0,g.jsx)(v,{onClick:e,children:t})},T=d.ZP.div(o||(o=(0,l.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n"]))),E=function(n){n.apiAdminKey;var t=n.setApiAdminKey,e=(0,s.useState)(""),i=(0,a.Z)(e,2),r=i[0],o=i[1];return(0,g.jsxs)(T,{children:[(0,g.jsx)(m,{getInput:o}),(0,g.jsx)(F,{src:"enter key",srcFunc:function(){localStorage.setItem("apiAdminKey",r),t(r)}})]})},G=d.zo.div(c||(c=(0,l.Z)(["\n\tposition: fixed;\n\ttop: 0px;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackdrop-filter: blur(2px);\n\t","\n"])),(function(n){return n.$active?"":"display: none"})),R=function(n){var t=n.src;return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:t.color}),(0,g.jsx)("div",{children:t.count}),(0,g.jsx)("div",{children:t.mm}),(0,g.jsx)("div",{children:t.steel})]})},N=function(n){var t=n.products;return console.log(t),(0,g.jsx)(g.Fragment,{children:t.map((function(n,t){return(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:n.name}),n.collection.map((function(n,t){return(0,g.jsx)(R,{src:n},t)}))]},t)}))})},k=function(n){var t=n.useLazyGetPirsingQuery,e=(0,s.useState)(""),i=(0,a.Z)(e,2),r=i[0],o=i[1],c=(0,s.useState)(!0),u=(0,a.Z)(c,2),l=u[0],d=u[1],f=t({}),h=(0,a.Z)(f,4),p=h[0],x=h[1];h[2],h[3];return(0,s.useEffect)((function(){"fulfilled"===x.status&&(console.log(x.data.record.collection[0].name),d(!1))}),[x]),(0,s.useEffect)((function(){var n=localStorage.getItem("apiAdminKey");null!==n&&(o(n),p({authToken:n}))}),[r]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(G,{$active:l,children:(0,g.jsx)(E,{apiAdminKey:r,setApiAdminKey:o})}),"fulfilled"===x.status?(0,g.jsx)(N,{products:x.data.record.collection}):(0,g.jsx)("div",{})]})},w=function(){return(0,g.jsx)(k,{useLazyGetPirsingQuery:u.pe})},Z=e(5753),b=function(n){var t=(0,n.useGetTodoQuery)({authToken:"",params:{id:"1"}}).data;return(0,g.jsxs)("div",{children:["data from jsonplaceholder : ",JSON.stringify(t)]})},B=function(){return(0,g.jsx)(b,{useGetTodoQuery:Z.Nu,useLazyGetTodoQuery:Z.tx})},K=function(){return(0,g.jsxs)("div",{children:["TEST5 ",(0,g.jsx)(B,{}),(0,g.jsx)(w,{})]})}}}]);
//# sourceMappingURL=942.d9d90536.chunk.js.map