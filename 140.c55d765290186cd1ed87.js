(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{VnyB:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTabBarModule",(function(){return O}));var a=n("An66"),i=n("3kIJ"),o=n("1VvW"),r=n("SVIu"),c=n("hLNI"),l=n("l4xa"),m=n("Qq0t"),u=n("dvRg"),d=n("kZht"),p=n("OZlg"),s=n("e0eB"),b=n("iyc4"),x=n("D+uv"),g=n("uB2y"),f=n("aPft"),v=n("2tbr"),I=n("UY7T"),h=n("BN1z");let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tab-bar-example-2"]],decls:11,vars:0,consts:[["tuiTabBar",""],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/breadcrumbs","icon","tuiIconMoreHorLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/pagination","icon","tuiIconCodeLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/stepper","icon","tuiIconViewListLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/tab-bar","icon","tuiIconHrLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/tabs","icon","tuiIconMenuLarge"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nav",0),d["\u0275\u0275elementStart"](1,"a",1),d["\u0275\u0275text"](2," Breadcrumbs "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"a",2),d["\u0275\u0275text"](4," Pagination "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"a",3),d["\u0275\u0275text"](6," Stepper "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"a",4),d["\u0275\u0275text"](8," TabBar "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"a",5),d["\u0275\u0275text"](10," Tabs "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())},directives:[v.a,I.a,o.e,h.a,o.d],encapsulation:2,changeDetection:0}),e})();function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",2),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("icon",e.icon),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let L=(()=>{class e{constructor(){this.items=[{text:"Home",icon:"tuiIconMobileLarge"},{text:"Photos",icon:"tuiIconImgLarge"},{text:"Navigation",icon:"tuiIconFrameLarge"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tab-bar-example-3"]],decls:2,vars:1,consts:[["tuiTabBar","",1,"tabs"],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nav",0),d["\u0275\u0275template"](1,y,2,2,"button",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.items))},directives:[v.a,a.s,I.a],styles:[".tabs[_ngcontent-%COMP%]{color:var(--tui-link);--tui-active-color:var(--tui-accent)}"],changeDetection:0}),e})();function E(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",2),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"]().onClick(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("icon",e.icon)("badge",e.badge),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let T=(()=>{class e{constructor(e){this.alerts=e,this.activeItemIndex=1,this.items=[{text:"Favorites",icon:"tuiIconHeartLarge",badge:3},{text:"Calls",icon:"tuiIconCallLarge",badge:1234},{text:"Profile",icon:"tuiIconFolderLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge",badge:100},{text:"More",icon:"tuiIconStructureLarge"}]}onClick(e){e.badge=0,this.alerts.open(this.activeItemIndex,{label:e.text}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](m.Z))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tab-bar-example-1"]],decls:2,vars:2,consts:[["tuiTabBar","",3,"activeItemIndex","activeItemIndexChange"],["tuiTabBarItem","",3,"icon","badge","click",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon","badge","click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nav",0),d["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),d["\u0275\u0275template"](1,E,2,3,"button",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.items))},directives:[v.a,a.s,I.a],encapsulation:2,changeDetection:0}),e})();var C=n("u8jZ");function k(e,t){1&e&&d["\u0275\u0275element"](0,"tui-tab-bar-example-1",9)}function B(e,t){1&e&&d["\u0275\u0275element"](0,"tui-tab-bar-example-1",11)}function M(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1,"Component for creating mobile navigation."),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",3),d["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",4),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().fixed=t})),d["\u0275\u0275text"](4," Fixed "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](5,k,1,0,"tui-tab-bar-example-1",5),d["\u0275\u0275template"](6,B,1,0,"ng-template",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-doc-example",7),d["\u0275\u0275elementStart"](8,"tui-notification",8),d["\u0275\u0275text"](9," If you use "),d["\u0275\u0275elementStart"](10,"code"),d["\u0275\u0275text"](11,"routerLink"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](12," you must also add "),d["\u0275\u0275elementStart"](13,"code"),d["\u0275\u0275text"](14,"routerLinkActive"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](15," directive. "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](16,"tui-tab-bar-example-2",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"tui-doc-example",10),d["\u0275\u0275element"](18,"tui-tab-bar-example-3",9),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngModel",e.fixed),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",!e.fixed),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiPortal",e.fixed),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("content",e.example3)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",12),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3," Import "),d["\u0275\u0275elementStart"](4,"code"),d["\u0275\u0275text"](5,"TuiTabBarModule"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](6," into your main module "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"tui-doc-code",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"li"),d["\u0275\u0275elementStart"](9,"p"),d["\u0275\u0275text"](10," Add to the template inside "),d["\u0275\u0275elementStart"](11,"code"),d["\u0275\u0275text"](12,"Root"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](13," component at the required layer: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](14,"tui-doc-code",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("code",e.exampleHtml)}}let H=(()=>{class e{constructor(){this.fixed=!1,this.exampleModule=n.e(1391).then(n.bind(null,"BuYT")),this.exampleHtml=n.e(1392).then(n.bind(null,"p7Sn")),this.example1={TypeScript:n.e(1385).then(n.bind(null,"7RpV")),HTML:n.e(1384).then(n.bind(null,"vMBV"))},this.example2={TypeScript:n.e(1387).then(n.bind(null,"5qEl")),HTML:n.e(1386).then(n.bind(null,"H3wB"))},this.example3={TypeScript:n.e(1390).then(n.bind(null,"9hYr")),HTML:n.e(1388).then(n.bind(null,"b9lO")),LESS:n.e(1389).then(n.bind(null,"YHAu"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-tab-bar"]],decls:3,vars:0,consts:[["header","TabBar","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","buttons","heading","Buttons",3,"content"],["size","l",1,"tui-space_bottom-4",3,"ngModel","ngModelChange"],["class","bar",4,"ngIf"],[3,"tuiPortal"],["id","links","heading","Links",3,"content"],[1,"bar","tui-space_bottom-4"],[1,"bar"],["id","customization","heading","Customization",3,"content"],[1,"fixed"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,M,19,6,"ng-template",1),d["\u0275\u0275template"](2,w,15,2,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,b.a,x.a,i.NgControlStatus,i.NgModel,a.t,g.a,f.a,S,L,T,C.a],styles:[".bar[_ngcontent-%COMP%]{display:block;width:25rem}.fixed[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}"],changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,m.Lb,u.H,c.q,l.Tb,r.m,o.f.forChild(Object(r.x)(H))]]}),e})()}}]);