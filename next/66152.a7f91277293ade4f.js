(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[66152,87769,87334,99479,98969],{38057:(t,e,n)=>{n.d(e,{c:()=>r});var i,s=n(84911),o=n(20755),a=n(58733);class r extends a.AbstractTuiNullableControl{constructor(t){super(),this.options=t,this.autocompleteEnabled=this.options.autocompleteEnabled,this.binChange=new o.vpe}get autocompleteCard(){return this.autocomplete}get bin(){return this.card.length<6?null:this.card.slice(0,6)}get defaultIcon(){const t=this.getPaymentSystem(this.card);return t&&this.options.icons[t]}get paymentSystem(){return this.getPaymentSystem(this.card)}get icon(){return this.cardSrc||this.defaultIcon}get autocomplete(){return this.autocompleteEnabled?"cc-number":"off"}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}}(i=r).ɵfac=function(t){o.$Z()},i.ɵdir=o.lG2({type:i,inputs:{cardSrc:"cardSrc",autocompleteEnabled:"autocompleteEnabled"},outputs:{binChange:"binChange"},features:[o.qOj]}),(0,s.gn)([a.tuiPure],r.prototype,"getPaymentSystem",null)},20969:(t,e,n)=>{n.d(e,{c9:()=>i.c,Nd:()=>l.Nd,cL:()=>l.cL,zW:()=>s.z,aJ:()=>o.a,S9:()=>u,Xt:()=>l.Xt});var i=n(38057),s=n(85397),o=n(88197),a=n(64064),r=n(39854),c=n(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[a.TuiPrimitiveTextfieldModule,a.TuiTextfieldControllerModule,r.TuiValueAccessorModule,a.TuiSvgModule]}),e})();var l=n(96816)},85397:(t,e,n)=>{n.d(e,{z:()=>I});var i=n(20755),s=n(11074),o=n(58733),a=n(64064),r=n(38057),c=n(96816),u=n(28858),l=n(39047),d=n(53339),h=n(7871),m=n(89713),p=n(62998);function g(t,e){if(1&t&&i._UZ(0,"tui-svg",2),2&t){const t=i.oxw();i.Q6J("src",t.defaultIcon)}}const b=["*",[["input"]]],f=["*","input"];let I=(()=>{var t;class e extends r.c{constructor(){super((0,i.f3M)(c.cL)),this.textfieldSize=(0,i.f3M)(a.TUI_TEXTFIELD_SIZE),this.maskOptions={mask:s.Aj}}get card(){return this.value??""}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}onValueChange(t){const e=t.split(" ").join(""),n=this.bin;this.value=e;const i=this.bin;n!==i&&this.binChange.emit(i)}onFocused(t){this.updateFocused(t)}writeValue(t){const e=this.bin;super.writeValue(t);const n=this.bin;e!==n&&this.binChange.emit(n)}get size(){return this.textfieldSize.size}getFallbackValue(){return""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-input-card"]],viewQuery:function(t,e){if(1&t&&i.Gf(a.TuiPrimitiveTextfieldComponent,5),2&t){let t;i.iGM(t=i.CRH())&&(e.input=t.first)}},hostVars:1,hostBindings:function(t,e){2&t&&i.uIk("data-size",e.size)},features:[i._Bn([(0,o.tuiAsFocusableItemAccessor)(t),(0,o.tuiAsControl)(t)]),i.qOj],ngContentSelectors:f,decls:6,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldCustomContent","value","focusedChange","valueChange"],["logo",""],[1,"t-payment-system",3,"src"]],template:function(t,e){if(1&t&&(i.F$t(b),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("focusedChange",(function(t){return e.onFocused(t)}))("valueChange",(function(t){return e.onValueChange(t)})),i.ALo(1,"maskito"),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA(),i.YNc(4,g,1,1,"ng-template",null,1,i.W1O)),2&t){const t=i.MAs(5);i.Q6J("disabled",e.disabled)("focusable",e.focusable)("invalid",e.computedInvalid)("maskito",e.maskOptions)("nativeId",e.nativeId)("pseudoActive",e.pseudoActive)("pseudoFocus",e.pseudoFocus)("pseudoHover",e.pseudoHover)("readOnly",e.readOnly)("tuiTextfieldCustomContent",e.cardSrc||e.defaultIcon&&t)("value",i.xi3(1,11,e.card,e.maskOptions))}},dependencies:[u.ro,l.y,d.B,h.B,m.n,p.P,u.cl],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-payment-system[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#1434cb}"],changeDetection:0}),e})()},88197:(t,e,n)=>{n.d(e,{a:()=>o});var i=n(64064),s=n(20755);let o=(()=>{var t;class e extends i.AbstractTuiTextfieldHost{onValueChange(t){this.host.onValueChange(t)}ngAfterViewInit(){const{nativeFocusableElement:t}=this.host;t&&(t.inputMode="numeric",t.placeholder=t.placeholder||"0000 0000 0000 0000")}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=s.n5z(t)))(n||t)}}(),t.ɵdir=s.lG2({type:t,selectors:[["tui-input-card"]],features:[s._Bn([(0,i.tuiAsTextfieldHost)(t)]),s.qOj]}),e})()},96816:(t,e,n)=>{n.d(e,{Nd:()=>o,Xt:()=>r,cL:()=>a});var i=n(93517),s=n(58733);const o={icons:i.gb,cardSrc:"",paymentSystemHandler:i.Vn,autocompleteEnabled:!1},a=(0,s.tuiCreateToken)(o);function r(t){return(0,s.tuiProvideOptions)(a,t,o)}},87334:(t,e,n)=>{n.d(e,{_:()=>u});var i=n(20755),s=n(20969),o=n(76733),a=n(62998);function r(t,e){if(1&t&&i._UZ(0,"tui-svg",5),2&t){const t=i.oxw();i.Q6J("src",t.brandLogo)}}function c(t,e){if(1&t&&i._UZ(0,"tui-svg",6),2&t){const t=i.oxw();i.Q6J("src",t.paymentSystemLogo)}}let u=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(s.cL),this.active=!1,this.brandLogo="",this.cardNumber="",this.paymentSystem=null,this.size="m"}get hasBrandLogo(){return!!this.brandLogo&&"m"===this.size}get paymentSystemLogo(){return this.paymentSystem?this.options.icons[this.paymentSystem]:""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-thumbnail-card"]],hostVars:3,hostBindings:function(t,e){2&t&&(i.uIk("data-size",e.size),i.ekj("_active",e.active))},inputs:{active:"active",brandLogo:"brandLogo",cardNumber:"cardNumber",paymentSystem:"paymentSystem",size:"size"},decls:6,vars:3,consts:[[1,"t-front"],["class","t-brand-logo",3,"src",4,"ngIf"],[1,"t-number"],["class","t-payment-system-logo",3,"src",4,"ngIf"],[1,"t-back"],[1,"t-brand-logo",3,"src"],[1,"t-payment-system-logo",3,"src"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.YNc(1,r,1,1,"tui-svg",1),i.TgZ(2,"span",2),i._uU(3),i.qZA(),i.YNc(4,c,1,1,"tui-svg",3),i.qZA(),i._UZ(5,"div",4)),2&t&&(i.xp6(1),i.Q6J("ngIf",e.hasBrandLogo),i.xp6(2),i.Oqu(e.cardNumber),i.xp6(1),i.Q6J("ngIf",!!e.paymentSystem))},dependencies:[o.O5,a.P],styles:['[_nghost-%COMP%]{position:relative;display:block;flex-shrink:0;color:var(--tui-base-01);transform-style:preserve-3d;cursor:default;border-radius:var(--tui-radius-xs);background-size:100%}[data-size=s][_nghost-%COMP%]{width:2rem;height:1.5rem}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-shadow:inset 0 0 0 1px;border-radius:inherit;color:var(--tui-clear)}._active[_nghost-%COMP%]{box-shadow:0 0 0 1px var(--tui-base-01)}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.t-brand-logo[_ngcontent-%COMP%]{position:absolute;top:.1875rem;left:.125rem;height:.875rem;width:.875rem}.t-number[_ngcontent-%COMP%]{position:absolute;right:.25rem;display:flex;justify-content:center;align-items:center}[data-size=s][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.125rem;height:.625rem;width:1.1875rem;font-size:.5rem}[data-size=m][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.1875rem;height:.875rem;width:1.5rem;font-size:.625rem}.t-payment-system-logo[_ngcontent-%COMP%]{position:absolute;right:.25rem;bottom:-.5rem;width:2rem;height:2rem;transform:scale(.5);transform-origin:right}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background-color:var(--tui-base-05);border-radius:var(--tui-radius-xs)}.t-back[_ngcontent-%COMP%]:after{content:"";position:absolute;top:20%;left:0;right:0;height:20%;background-color:var(--tui-base-06)}'],changeDetection:0}),e})()},11074:(t,e,n)=>{n.d(e,{xz:()=>o,Aj:()=>r,sV:()=>u});const i={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function s(t){return t.toUpperCase().split("").map((t=>i[t]||t)).join("")}const o={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:t,data:e})=>{const{value:n,selection:i}=t;return{elementState:{selection:i,value:s(n)},data:s(e)}}]};var a=n(64064);const r=[a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP," ",a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP,a.TUI_DIGIT_REGEXP];var c=n(93517);const u=t=>t.length>11&&(0,c.ul)(t)&&(0,c.Tb)(t)}}]);