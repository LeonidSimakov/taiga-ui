(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{dfdC:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiToolbarModule",(function(){return _}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),l=n("vgRF"),c=n("l4xa"),d=n("Qq0t"),s=n("dvRg"),u=n("kZht");let m=(()=>{class e{constructor(t,n){this.elementRef=t,this.renderer=n,this.observer=new MutationObserver(()=>{setTimeout(()=>{this.onChange(e.processValue(this.elementRef.nativeElement.innerHTML))})}),this.onTouched=()=>{},this.onChange=()=>{}}ngAfterViewInit(){this.observer.observe(this.elementRef.nativeElement,{characterData:!0,childList:!0,subtree:!0})}ngOnDestroy(){this.observer.disconnect()}onInput(){this.observer.disconnect(),this.onChange(e.processValue(this.elementRef.nativeElement.innerHTML))}onBlur(){this.onTouched()}writeValue(t){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",e.processValue(t))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setAttribute(this.elementRef.nativeElement,"contenteditable",String(!e))}static processValue(e){const t=String(null==e?"":e);return"<br>"===t.trim()?"":t}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](u.ElementRef),u["\u0275\u0275directiveInject"](u.Renderer2))},e.\u0275dir=u["\u0275\u0275defineDirective"]({type:e,selectors:[["","contenteditable","","formControlName",""],["","contenteditable","","formControl",""],["","contenteditable","","ngModel",""]],hostBindings:function(e,t){1&e&&u["\u0275\u0275listener"]("input",(function(){return t.onInput()}))("blur",(function(){return t.onBlur()}))},features:[u["\u0275\u0275ProvidersFeature"]([{provide:i.NG_VALUE_ACCESSOR,useExisting:Object(u.forwardRef)(()=>e),multi:!0}])]}),e})(),p=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();var f=n("OZlg"),b=n("e0eB"),h=n("yZWP"),g=n("iyc4"),v=n("4hRd"),C=n("W2aA"),E=n("OXFH");function S(e,t){if(1&e&&u["\u0275\u0275element"](0,"tui-toolbar",4),2&e){u["\u0275\u0275nextContext"]();const e=u["\u0275\u0275reference"](2);u["\u0275\u0275property"]("editor",e)}}let w=(()=>{class e{constructor(){this.open=!1,this.model="<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>"}onActiveZone(e){this.open=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-toolbar-example-1"]],decls:5,vars:5,consts:[[3,"tuiActiveZoneChange"],["contenteditable","","tuiDropdownDirection","top",1,"editor","tui-editor-socket",3,"tuiDropdown","tuiDropdownContent","ngModel","ngModelChange"],["editor",""],["dropdown",""],[3,"editor"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onActiveZone(e)})),u["\u0275\u0275elementStart"](1,"div",1,2),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model=e})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,S,1,1,"ng-template",null,3,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275reference"](4);u["\u0275\u0275advance"](1),u["\u0275\u0275classProp"]("editor_active",t.open),u["\u0275\u0275property"]("tuiDropdown",t.open)("tuiDropdownContent",e)("ngModel",t.model)}},directives:[v.a,m,C.a,i.NgControlStatus,i.NgModel,E.a],styles:[".editor[_ngcontent-%COMP%]{padding:1em 2em;outline:none}.editor_active[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--tui-focus)}"],changeDetection:0}),e})();var T=n("u8jZ");const y=["header",$localize`:␟dcfe12c1a954a6631d712f4bc7ac57f894e521ef␟7972011866667788749:Toolbar`],x=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var M;M=$localize`:␟363d95f95fa40db16d0fe7ca3e7e0569164e58a5␟2842002208043947795: Toolbar is a set of edit tools for rich editors. Use ${"\ufffd#2\ufffd"}:START_LINK: @tinkoff/angular-contenteditable-accessor ${"\ufffd/#2\ufffd"}:CLOSE_LINK: package for working with a form `;const A=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function O(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,M),u["\u0275\u0275element"](2,"a",3),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](4,A),u["\u0275\u0275element"](5,"tui-toolbar-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example1)}}var D,R;function L(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",5),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,D),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,R),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}D=$localize`:␟535541a8f4958f52023b7c89aacff64626b5e9cb␟3403070934660955548: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,R=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let I=(()=>{class e{constructor(){this.exampleModule=n.e(1381).then(n.bind(null,"2E4i")),this.exampleHtml=n.e(1382).then(n.bind(null,"2GOp")),this.example1={TypeScript:n.e(1380).then(n.bind(null,"pWEX")),HTML:n.e(1378).then(n.bind(null,"3F+j")),LESS:n.e(1379).then(n.bind(null,"417j"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-toolbar"]],decls:5,vars:0,consts:[["package","ADDON-editor","type","components",6,"header"],["pageTab",""],[6,"pageTab"],["tuiLink","","href","https://github.com/tinkoff/angular-contenteditable-accessor"],["id","basic",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,y),u["\u0275\u0275template"](2,O,6,1,"ng-template",1),u["\u0275\u0275template"](3,L,10,2,"ng-template",2),u["\u0275\u0275i18nAttributes"](4,x),u["\u0275\u0275elementEnd"]())},directives:[f.a,b.a,h.a,g.a,w,T.a],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,p,l.m,d.ab,d.yb,d.mb,c.Z,a.l,s.nb,d.Gb,r.f.forChild(Object(a.s)(I))]]}),e})()}}]);