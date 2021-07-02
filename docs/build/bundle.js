var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o,r,c,i){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(a){const r=s(e,n,o,i);t.p(r,a)}}let l,u=!1;function d(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function p(t,e){u?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=d(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const c=[],i=[];let s=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);s>=t;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);c.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<c.length&&i[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){u&&!n?p(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function w(t,e,n){t.classList[n?"add":"remove"](e)}function _(t){l=t}function j(t){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(t)}const k=[],E=[],N=[],R=[],C=Promise.resolve();let O=!1;function S(t){N.push(t)}function A(t){R.push(t)}let P=!1;const L=new Set;function M(){if(!P){P=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];_(e),B(e.$$)}for(_(null),k.length=0;E.length;)E.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];L.has(e)||(L.add(e),e())}N.length=0}while(k.length);for(;R.length;)R.pop()();O=!1,P=!1,L.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const T=new Set;let F;function I(t,e){t&&t.i&&(T.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),F.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function H(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function q(t){t&&t.c()}function z(t,n,c,i){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,c),i||S((()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(k.push(t),O||(O=!0,C.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,r,c,i,s,a,d=[-1]){const p=l;_(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let m=!1;if(f.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&Q(e,t)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),r.target){if(r.hydrate){u=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();r.intro&&I(e.$$.fragment),z(e,r.target,r.anchor,r.customElement),u=!1,M()}_(p)}class J{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(e){let n;return{c(){n=m("div"),n.innerHTML='<div class="content svelte-4xicw"><div class="title svelte-4xicw">Calculator for File Permissions</div></div>',x(n,"class","header-area svelte-4xicw")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&$(n)}}}class U extends J{constructor(t){super(),V(this,t,null,K,c,{})}}const W=t=>({}),X=t=>({});function Y(t){let e;const n=t[9]["custom-tip"],o=i(n,t,t[8],X);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||256&r)&&a(o,n,t,t[8],e?r:-1,W,X)},i(t){e||(I(o,t),e=!0)},o(t){G(o,t),e=!1},d(t){o&&o.d(t)}}}function Z(e){let n,o;return{c(){n=m("div"),o=h(e[0]),x(n,"class","default-tip svelte-16glvw6"),x(n,"style",e[6])},m(t,e){f(t,n,e),p(n,o)},p(t,e){1&e&&y(o,t[0])},i:t,o:t,d(t){t&&$(n)}}}function tt(t){let e,n,r,c,s,l,u;const d=t[9].default,h=i(d,t,t[8],null),v=[Z,Y],y=[];function b(t,e){return t[0]?0:1}return s=b(t),l=y[s]=v[s](t),{c(){e=m("div"),n=m("span"),h&&h.c(),r=g(),c=m("div"),l.c(),x(n,"class","tooltip-slot svelte-16glvw6"),x(c,"class","tooltip svelte-16glvw6"),w(c,"active",t[5]),w(c,"left",t[4]),w(c,"right",t[2]),w(c,"bottom",t[3]),w(c,"top",t[1]),x(e,"class","tooltip-wrapper svelte-16glvw6")},m(t,o){f(t,e,o),p(e,n),h&&h.m(n,null),p(e,r),p(e,c),y[s].m(c,null),u=!0},p(t,[e]){h&&h.p&&(!u||256&e)&&a(h,d,t,t[8],u?e:-1,null,null);let n=s;s=b(t),s===n?y[s].p(t,e):(F={r:0,c:[],p:F},G(y[n],1,1,(()=>{y[n]=null})),F.r||o(F.c),F=F.p,l=y[s],l?l.p(t,e):(l=y[s]=v[s](t),l.c()),I(l,1),l.m(c,null)),32&e&&w(c,"active",t[5]),16&e&&w(c,"left",t[4]),4&e&&w(c,"right",t[2]),8&e&&w(c,"bottom",t[3]),2&e&&w(c,"top",t[1])},i(t){u||(I(h,t),I(l),u=!0)},o(t){G(h,t),G(l),u=!1},d(t){t&&$(e),h&&h.d(t),y[s].d()}}}function et(t,e,n){let{$$slots:o={},$$scope:r}=e,{tip:c=""}=e,{top:i=!1}=e,{right:s=!1}=e,{bottom:a=!1}=e,{left:l=!1}=e,{active:u=!1}=e,{color:d="#757575"}=e,p=`background-color: ${d};`;return t.$$set=t=>{"tip"in t&&n(0,c=t.tip),"top"in t&&n(1,i=t.top),"right"in t&&n(2,s=t.right),"bottom"in t&&n(3,a=t.bottom),"left"in t&&n(4,l=t.left),"active"in t&&n(5,u=t.active),"color"in t&&n(7,d=t.color),"$$scope"in t&&n(8,r=t.$$scope)},[c,i,s,a,l,u,p,d,r,o]}class nt extends J{constructor(t){super(),V(this,t,et,tt,c,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function ot(t){let e,n;return{c(){e=m("span"),n=h(t[1]),x(e,"class","ownership-name")},m(t,o){f(t,e,o),p(e,n)},p(t,e){2&e&&y(n,t[1])},d(t){t&&$(e)}}}function rt(t){let e,n,o;return{c(){e=m("button"),e.textContent="r",x(e,"class","svelte-1407xj3"),w(e,"active",t[2])},m(r,c){f(r,e,c),n||(o=v(e,"click",t[9]),n=!0)},p(t,n){4&n&&w(e,"active",t[2])},d(t){t&&$(e),n=!1,o()}}}function ct(t){let e,n,o;return{c(){e=m("button"),e.textContent="w",x(e,"class","svelte-1407xj3"),w(e,"active",t[3])},m(r,c){f(r,e,c),n||(o=v(e,"click",t[10]),n=!0)},p(t,n){8&n&&w(e,"active",t[3])},d(t){t&&$(e),n=!1,o()}}}function it(t){let e,n,o;return{c(){e=m("button"),e.textContent="x",x(e,"class","svelte-1407xj3"),w(e,"active",t[4])},m(r,c){f(r,e,c),n||(o=v(e,"click",t[11]),n=!0)},p(t,n){16&n&&w(e,"active",t[4])},d(t){t&&$(e),n=!1,o()}}}function st(t){let e,n,o,r,c,i,s,a,l,u,d,v,b,w,_,j,k,E,N,R,C,O,S,A,P;return o=new nt({props:{tip:t[8],top:!0,$$slots:{default:[ot]},$$scope:{ctx:t}}}),i=new nt({props:{tip:t[1]+" can read",top:!0,$$slots:{default:[rt]},$$scope:{ctx:t}}}),a=new nt({props:{tip:t[1]+" can write",top:!0,$$slots:{default:[ct]},$$scope:{ctx:t}}}),u=new nt({props:{tip:t[1]+" can execute",top:!0,$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("div"),q(o.$$.fragment),r=g(),c=m("div"),q(i.$$.fragment),s=g(),q(a.$$.fragment),l=g(),q(u.$$.fragment),d=g(),v=m("div"),b=m("span"),w=h(t[5]),_=g(),j=m("span"),k=h(t[6]),E=g(),N=m("span"),R=h(t[7]),C=g(),O=m("div"),S=m("span"),A=h(t[0]),x(n,"class","ownership-name-area svelte-1407xj3"),x(c,"class","input-area svelte-1407xj3"),x(b,"class","binaly-digit-area svelte-1407xj3"),x(j,"class","binaly-digit-area svelte-1407xj3"),x(N,"class","binaly-digit-area svelte-1407xj3"),x(v,"class","binary-area svelte-1407xj3"),x(S,"class","decimal-digit-area"),x(O,"class","decimal-area svelte-1407xj3"),x(e,"class","ownership-area svelte-1407xj3")},m(t,$){f(t,e,$),p(e,n),z(o,n,null),p(e,r),p(e,c),z(i,c,null),p(c,s),z(a,c,null),p(c,l),z(u,c,null),p(e,d),p(e,v),p(v,b),p(b,w),p(v,_),p(v,j),p(j,k),p(v,E),p(v,N),p(N,R),p(e,C),p(e,O),p(O,S),p(S,A),P=!0},p(t,[e]){const n={};256&e&&(n.tip=t[8]),8194&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};2&e&&(r.tip=t[1]+" can read"),8196&e&&(r.$$scope={dirty:e,ctx:t}),i.$set(r);const c={};2&e&&(c.tip=t[1]+" can write"),8200&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c);const s={};2&e&&(s.tip=t[1]+" can execute"),8208&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s),(!P||32&e)&&y(w,t[5]),(!P||64&e)&&y(k,t[6]),(!P||128&e)&&y(R,t[7]),(!P||1&e)&&y(A,t[0])},i(t){P||(I(o.$$.fragment,t),I(i.$$.fragment,t),I(a.$$.fragment,t),I(u.$$.fragment,t),P=!0)},o(t){G(o.$$.fragment,t),G(i.$$.fragment,t),G(a.$$.fragment,t),G(u.$$.fragment,t),P=!1},d(t){t&&$(e),D(o),D(i),D(a),D(u)}}}function at(t,e,n){let o,r,c,{ownershipName:i}=e,{decimalExecutionRight:s}=e,a=!1,l=!1,u=!1,d="";j((()=>{switch(i){case"Owner":n(8,d="Permissions used by the assigned owner of the file or directory");break;case"Group":n(8,d="Permissions used by members of the group that owns the file or directory");break;case"Other":n(8,d="Permissions used by all users other than the file owner, and members of the group that owns the file or the directory")}}));return t.$$set=t=>{"ownershipName"in t&&n(1,i=t.ownershipName),"decimalExecutionRight"in t&&n(0,s=t.decimalExecutionRight)},t.$$.update=()=>{4&t.$$.dirty&&n(5,o=a?1:0),8&t.$$.dirty&&n(6,r=l?1:0),16&t.$$.dirty&&n(7,c=u?1:0),224&t.$$.dirty&&n(0,s=4*o+2*r+c)},[s,i,a,l,u,o,r,c,d,()=>n(2,a=!a),()=>n(3,l=!l),()=>n(4,u=!u)]}class lt extends J{constructor(t){super(),V(this,t,at,st,c,{ownershipName:1,decimalExecutionRight:0})}}function ut(t){let e,n,o,r,c;return{c(){e=m("label"),n=m("input"),o=h("-R"),x(n,"type","checkbox"),x(n,"id","option-r"),x(n,"class","svelte-tarjms"),x(e,"for","option-r")},m(i,s){f(i,e,s),p(e,n),n.checked=t[6],p(e,o),r||(c=v(n,"change",t[13]),r=!0)},p(t,e){64&e&&(n.checked=t[6])},d(t){t&&$(e),r=!1,c()}}}function dt(t){let e,n,o,r,c;return{c(){e=m("label"),n=m("input"),o=h("-v"),x(n,"type","checkbox"),x(n,"id","option-v"),x(n,"class","svelte-tarjms"),x(e,"for","option-v")},m(i,s){f(i,e,s),p(e,n),n.checked=t[7],p(e,o),r||(c=v(n,"change",t[14]),r=!0)},p(t,e){128&e&&(n.checked=t[7])},d(t){t&&$(e),r=!1,c()}}}function pt(t){let e,n,o,r,c;return{c(){e=m("label"),n=m("input"),o=h("-f"),x(n,"type","checkbox"),x(n,"id","option-f"),x(n,"class","svelte-tarjms"),x(e,"for","option-f")},m(i,s){f(i,e,s),p(e,n),n.checked=t[5],p(e,o),r||(c=v(n,"change",t[15]),r=!0)},p(t,e){32&e&&(n.checked=t[5])},d(t){t&&$(e),r=!1,c()}}}function ft(t){let e,n,r,c,i,s,a,l,u,d,w,_,j,k,E,N,R,C,O,S,A,P,L,M,B,T,F,H,Q,V,J,K,U,W,X;return u=new nt({props:{tip:"Change files and directories recursively.",$$slots:{default:[ut]},$$scope:{ctx:t}}}),w=new nt({props:{tip:"Verbose mode; output a diagnostic message for every file processed.",$$slots:{default:[dt]},$$scope:{ctx:t}}}),j=new nt({props:{tip:"Quiet mode; suppress most error messages.",$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("label"),r=h("Path (Directry or File)"),c=m("input"),i=g(),s=m("div"),a=m("span"),a.textContent="Options",l=g(),q(u.$$.fragment),d=g(),q(w.$$.fragment),_=g(),q(j.$$.fragment),k=g(),E=m("div"),N=m("button"),N.textContent="Create Command!",R=g(),C=m("button"),C.textContent="Clear",O=g(),S=m("div"),A=m("div"),A.innerHTML='<i class="fas fa-paste" style="color: white;"></i>',P=g(),L=m("span"),M=h("$   "),B=m("span"),T=h(t[2]),F=g(),H=h(t[4]),Q=g(),V=h(t[3]),J=g(),K=h(t[0]),x(c,"name","path"),x(c,"type","text"),x(c,"placeholder","example: /your-project/src/main.py"),x(c,"class","svelte-tarjms"),x(n,"class","path-label-area svelte-tarjms"),x(s,"class","options-area svelte-tarjms"),x(E,"class","button-area"),x(e,"class","container svelte-tarjms"),x(A,"class","copy-area svelte-tarjms"),x(B,"id","copy-target"),x(B,"class","svelte-tarjms"),x(L,"class","code svelte-tarjms"),x(S,"class","code-area svelte-tarjms")},m(o,$){f(o,e,$),p(e,n),p(n,r),p(n,c),b(c,t[1]),p(e,i),p(e,s),p(s,a),p(s,l),z(u,s,null),p(s,d),z(w,s,null),p(s,_),z(j,s,null),p(e,k),p(e,E),p(E,N),p(E,R),p(E,C),f(o,O,$),f(o,S,$),p(S,A),p(S,P),p(S,L),p(L,M),p(L,B),p(B,T),p(B,F),p(B,H),p(B,Q),p(B,V),p(B,J),p(B,K),U=!0,W||(X=[v(c,"input",t[12]),v(N,"click",t[8]),v(C,"click",t[9]),v(A,"click",t[10])],W=!0)},p(t,[e]){2&e&&c.value!==t[1]&&b(c,t[1]);const n={};524352&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n);const o={};524416&e&&(o.$$scope={dirty:e,ctx:t}),w.$set(o);const r={};524320&e&&(r.$$scope={dirty:e,ctx:t}),j.$set(r),(!U||4&e)&&y(T,t[2]),(!U||16&e)&&y(H,t[4]),(!U||8&e)&&y(V,t[3]),(!U||1&e)&&y(K,t[0])},i(t){U||(I(u.$$.fragment,t),I(w.$$.fragment,t),I(j.$$.fragment,t),U=!0)},o(t){G(u.$$.fragment,t),G(w.$$.fragment,t),G(j.$$.fragment,t),U=!1},d(t){t&&$(e),D(u),D(w),D(j),t&&$(O),t&&$(S),W=!1,o(X)}}}function $t(t,e,n){let{permissionNumber:o=""}=e,r="",c="",i="",s="",a="",l="",u="",d="",p=!1,f=!1,$=!1;return t.$$set=t=>{"permissionNumber"in t&&n(11,o=t.permissionNumber)},[r,c,i,s,d,p,f,$,()=>{n(2,i="chmod"),n(3,s=o),n(0,r=c),l=f?"-R ":"",u=$?"-v ":"",a=p?"-f ":"",n(4,d=l+u+a)},()=>{n(2,i=""),n(3,s=""),n(0,r=""),a="",l="",u="",n(4,d=""),n(1,c=""),n(5,p=!1),n(6,f=!1),n(7,$=!1)},()=>{let t=document.createRange(),e=document.getElementById("copy-target");t.selectNodeContents(e);let n=document.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),alert("Copied!")},o,function(){c=this.value,n(1,c)},function(){f=this.checked,n(6,f)},function(){$=this.checked,n(7,$)},function(){p=this.checked,n(5,p)}]}class mt extends J{constructor(t){super(),V(this,t,$t,ft,c,{permissionNumber:11})}}function ht(t){let e,n,o,r,c,i,s,a,l,u,d,h;function v(e){t[4](e)}let y={ownershipName:"Owner"};function b(e){t[5](e)}void 0!==t[0]&&(y.decimalExecutionRight=t[0]),n=new lt({props:y}),E.push((()=>H(n,"decimalExecutionRight",v)));let w={ownershipName:"Group"};function _(e){t[6](e)}void 0!==t[1]&&(w.decimalExecutionRight=t[1]),c=new lt({props:w}),E.push((()=>H(c,"decimalExecutionRight",b)));let j={ownershipName:"Other"};return void 0!==t[2]&&(j.decimalExecutionRight=t[2]),a=new lt({props:j}),E.push((()=>H(a,"decimalExecutionRight",_))),d=new mt({props:{permissionNumber:t[3]}}),{c(){e=m("div"),q(n.$$.fragment),r=g(),q(c.$$.fragment),s=g(),q(a.$$.fragment),u=g(),q(d.$$.fragment),x(e,"class","wrapper svelte-yj791i")},m(t,o){f(t,e,o),z(n,e,null),p(e,r),z(c,e,null),p(e,s),z(a,e,null),f(t,u,o),z(d,t,o),h=!0},p(t,[e]){const r={};!o&&1&e&&(o=!0,r.decimalExecutionRight=t[0],A((()=>o=!1))),n.$set(r);const s={};!i&&2&e&&(i=!0,s.decimalExecutionRight=t[1],A((()=>i=!1))),c.$set(s);const u={};!l&&4&e&&(l=!0,u.decimalExecutionRight=t[2],A((()=>l=!1))),a.$set(u);const p={};8&e&&(p.permissionNumber=t[3]),d.$set(p)},i(t){h||(I(n.$$.fragment,t),I(c.$$.fragment,t),I(a.$$.fragment,t),I(d.$$.fragment,t),h=!0)},o(t){G(n.$$.fragment,t),G(c.$$.fragment,t),G(a.$$.fragment,t),G(d.$$.fragment,t),h=!1},d(t){t&&$(e),D(n),D(c),D(a),t&&$(u),D(d,t)}}}function gt(t,e,n){let o,r,c,i;return t.$$.update=()=>{7&t.$$.dirty&&n(3,o=String(r)+String(c)+String(i))},[r,c,i,o,function(t){r=t,n(0,r)},function(t){c=t,n(1,c)},function(t){i=t,n(2,i)}]}class vt extends J{constructor(t){super(),V(this,t,gt,ht,c,{})}}function xt(e){let n,o,r,c,i;return n=new U({}),c=new vt({}),{c(){q(n.$$.fragment),o=g(),r=m("main"),q(c.$$.fragment),x(r,"class","svelte-pgj0p")},m(t,e){z(n,t,e),f(t,o,e),f(t,r,e),z(c,r,null),i=!0},p:t,i(t){i||(I(n.$$.fragment,t),I(c.$$.fragment,t),i=!0)},o(t){G(n.$$.fragment,t),G(c.$$.fragment,t),i=!1},d(t){D(n,t),t&&$(o),t&&$(r),D(c)}}}return new class extends J{constructor(t){super(),V(this,t,null,xt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
