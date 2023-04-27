(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{"Ol8/":function(e,t,n){"use strict";n.r(t),n.d(t,"JestModule",(function(){return u}));var o=n("An66"),l=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),s=n("kZht"),i=n("OZlg"),d=n("u8jZ");const c=["header",$localize`:␟1c96647f8f7cd3dc5f81a447e9fd714d3fd48ee3␟6404088366042352039:Jest`];let m=(()=>{class e{constructor(){this.jestConfigJs=n.e(1711).then(n.bind(null,"z5zO")),this.packageJson=n.e(1712).then(n.bind(null,"K3+w")),this.setupJestJs=n.e(1713).then(n.bind(null,"Vgpe"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["jest"]],decls:68,vars:3,consts:[[6,"header"],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,c),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"p"),s["\u0275\u0275text"](5," Taiga UI uses "),s["\u0275\u0275elementStart"](6,"code"),s["\u0275\u0275text"](7,"@ng-web-apis/common"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," to avoid accessing global variables like "),s["\u0275\u0275elementStart"](9,"code"),s["\u0275\u0275text"](10,"window"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](11," or "),s["\u0275\u0275elementStart"](12,"code"),s["\u0275\u0275text"](13,"navigator"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](14," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),s["\u0275\u0275elementStart"](15,"code"),s["\u0275\u0275text"](16,"@ng-web-apis/universal"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](17," for Jest to run properly. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"p"),s["\u0275\u0275text"](19," Otherwise, you're gonna face errors like "),s["\u0275\u0275elementStart"](20,"code"),s["\u0275\u0275text"](21,"ReferenceError: IntersectionObserver is not defined"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"h2"),s["\u0275\u0275text"](23," Using "),s["\u0275\u0275elementStart"](24,"code"),s["\u0275\u0275text"](25,"@angular-builders/jest"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](26," or "),s["\u0275\u0275elementStart"](27,"code"),s["\u0275\u0275text"](28,"jest-preset-angular"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"p"),s["\u0275\u0275text"](30,"If you're using one of these libraries. You can follow the following steps :"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"ol",1),s["\u0275\u0275elementStart"](32,"li",2),s["\u0275\u0275text"](33," Install "),s["\u0275\u0275elementStart"](34,"code"),s["\u0275\u0275text"](35,"npm i @ng-web-apis/universal --save-dev"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](36," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"li",2),s["\u0275\u0275text"](38," Add a "),s["\u0275\u0275elementStart"](39,"code"),s["\u0275\u0275text"](40,"setupFilesAfterEnv"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](41," property to your "),s["\u0275\u0275elementStart"](42,"code"),s["\u0275\u0275text"](43,"jest.config.js"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](44," or "),s["\u0275\u0275elementStart"](45,"code"),s["\u0275\u0275text"](46,"package.json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](47," jest configuration (depending on where your configuration is) with the path to "),s["\u0275\u0275elementStart"](48,"code"),s["\u0275\u0275text"](49,"setup-jest.js"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](50," if you have not already. "),s["\u0275\u0275element"](51,"tui-doc-code",3),s["\u0275\u0275text"](52," or "),s["\u0275\u0275element"](53,"tui-doc-code",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](54,"li",2),s["\u0275\u0275text"](55," Create the file "),s["\u0275\u0275elementStart"](56,"code"),s["\u0275\u0275text"](57,"setup-jest.js"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](58," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](59,"li",2),s["\u0275\u0275text"](60," Add the following line to the "),s["\u0275\u0275elementStart"](61,"code"),s["\u0275\u0275text"](62,"setup-jest.js"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](63," : "),s["\u0275\u0275elementStart"](64,"code"),s["\u0275\u0275text"](65,"import '@ng-web-apis/universal/mocks';"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](66," . "),s["\u0275\u0275element"](67,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](51),s["\u0275\u0275property"]("code",t.jestConfigJs),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("code",t.packageJson),s["\u0275\u0275advance"](14),s["\u0275\u0275property"]("code",t.setupJestJs))},directives:[i.a,d.a],encapsulation:2}),e})(),u=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.m,a.Eb,l.f.forChild(Object(r.u)(m))]]}),e})()}}]);