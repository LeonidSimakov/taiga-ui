"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[22006],{22006:(pe,c,o)=>{o.r(c),o.d(c,{ExampleTuiInputTimeModule:()=>se});var $=o(12057),i=o(23738),h=o(33982),E=o(29851),s=o(72002),d=o(56757),R=o(75695),e=o(74788),p=o(36692),A=o(82880),L=o(98204),J=o(88331),Z=o(37159),V=o(57068),_=o(86730),M=o(10200),C=o(68874),v=o(31510);let G=(()=>{class n{constructor(){this.testForm=new i.cw({testValue:new i.NI(new p.TuiTime(12,30))})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-time-example-1"]],decls:10,vars:2,consts:function(){let a;return a=$localize`:␟61d588693acb4c2fd9ce18b72aa5c2ba2ed8b4d4␟636934070228782456: If field is not required, but you want to mark it invalid if user did not complete it, use ${"\ufffd#7\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: directive `,[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],a,["tuiUnfinishedValidator","","formControlName","testValue"]]},template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-time",1),e._uU(2," Input time "),e.qZA(),e.TgZ(3,"tui-input-time",2),e._uU(4," Input time "),e.qZA(),e.TgZ(5,"p"),e.tHW(6,3),e._UZ(7,"code"),e.N_p(),e.qZA(),e.TgZ(8,"tui-input-time",4),e._uU(9," Input time "),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm),e.xp6(3),e.Q6J("tuiTextfieldLabelOutside",!0))},directives:[i._Y,i.JL,i.sg,_.G,i.JJ,i.u,M.s,C.x,v.Q],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)}),this.items1=(0,d.tuiCreateTimePeriods)(),this.items2=(0,d.tuiCreateTimePeriods)(10,20,[0,15,30,45])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-time-example-2"]],decls:5,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",3,"items"],["formControlName","testValue",1,"tui-space_top-4",3,"items","strict"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-time",1),e._uU(2," Input time "),e.qZA(),e.TgZ(3,"tui-input-time",2),e._uU(4," Input time "),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm),e.xp6(1),e.Q6J("items",u.items1),e.xp6(2),e.Q6J("items",u.items2)("strict",!0))},directives:[i._Y,i.JL,i.sg,_.G,i.JJ,i.u],encapsulation:2,changeDetection:0}),n})(),X=(()=>{class n{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)}),this.items1=(0,d.tuiCreateTimePeriods)()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-time-example-3"]],features:[e._Bn([(0,d.tuiInputTimeOptionsProvider)({icon:"tuiIconCheckCircleLarge",mode:"HH:MM:SS",itemSize:"s"})])],decls:3,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",3,"items"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-time",1),e._uU(2," Input time "),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm),e.xp6(1),e.Q6J("items",u.items1))},directives:[i._Y,i.JL,i.sg,_.G,i.JJ,i.u],encapsulation:2,changeDetection:0}),n})(),z=(()=>{class n{constructor(){this.testForm=new i.cw({testValue:new i.NI(null)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-time-example-4"]],features:[e._Bn([(0,d.tuiInputTimeOptionsProvider)({mode:"HH:MM",postfix:"left",maxValues:{HH:47,MM:59,SS:59,MS:999}})])],decls:3,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-time",1),e._uU(2,"Max: 47h 59m"),e.qZA(),e.qZA()),2&t&&e.Q6J("formGroup",u.testForm)},directives:[i._Y,i.JL,i.sg,_.G,i.JJ,i.u],encapsulation:2,changeDetection:0}),n})();var b=o(82535);let Q=(()=>{class n{constructor(){this.testForm=new i.cw({testValue:new i.NI(null),isPm:new i.NI(!1)})}get postfix(){var t;return(null===(t=this.testForm.value)||void 0===t?void 0:t.isPm)?"PM":"AM"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-input-time-example-5"]],features:[e._Bn([(0,d.tuiInputTimeOptionsProvider)({mode:"HH:MM",maxValues:{HH:11,MM:59,SS:59,MS:999}})])],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"postfix"],["formControlName","isPm","size","l"]],template:function(t,u){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-time",1),e._uU(2," 12h time "),e.qZA(),e._UZ(3,"tui-toggle",2),e.qZA()),2&t&&(e.Q6J("formGroup",u.testForm),e.xp6(1),e.Q6J("postfix",u.postfix))},directives:[i._Y,i.JL,i.sg,_.G,i.JJ,i.u,b.p],encapsulation:2,changeDetection:0}),n})();var Y=o(31823),B=o(20546),W=o(17023),j=o(54218),K=o(33250),w=o(64374),q=o(84848),k=o(76349);function ee(n,a){if(1&n&&(e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",3),e._UZ(4,"tui-input-time-example-1"),e.qZA(),e.TgZ(5,"tui-doc-example",4),e._UZ(6,"tui-input-time-example-2"),e.qZA(),e.TgZ(7,"tui-doc-example",5),e._UZ(8,"tui-input-time-example-3"),e.qZA(),e.TgZ(9,"tui-doc-example",6),e._UZ(10,"tui-input-time-example-4"),e.qZA(),e.TgZ(11,"tui-doc-example",7),e._UZ(12,"tui-input-time-example-5"),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4),e.xp6(2),e.Q6J("content",t.example5)}}function te(n,a){if(1&n&&(e.TgZ(0,"tui-input-time",17),e._uU(1," Input time "),e.qZA()),2&n){const t=e.oxw(2);e.Udp("text-align",t.textAlign),e.Q6J("formControl",t.control)("focusable",t.focusable)("disabledItemHandler",t.disabledItemHandler)("tuiDropdownAlign",t.dropdownAlign)("tuiDropdownDirection",t.dropdownDirection)("tuiDropdownLimitWidth",t.dropdownLimitWidth)("tuiDropdownMinHeight",t.dropdownMinHeight)("tuiDropdownMaxHeight",t.dropdownMaxHeight)("items",t.items)("itemSize",t.itemSize)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("mode",t.mode)("readOnly",t.readOnly)("strict",t.strict)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)}}function oe(n,a){1&n&&(e.tHW(0,18),e._UZ(1,"code"),e.N_p())}function ne(n,a){1&n&&e.SDv(0,19)}function ie(n,a){1&n&&e.SDv(0,20)}function ae(n,a){1&n&&e.SDv(0,21)}function ue(n,a){1&n&&(e.tHW(0,22),e._UZ(1,"code"),e.N_p())}function Te(n,a){1&n&&e.SDv(0,23)}function le(n,a){1&n&&e.SDv(0,24)}function me(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",8),e.YNc(1,te,2,24,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,oe,2,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().disabled=l}),e.YNc(4,ne,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().disabledItemHandler=l}),e.YNc(5,ie,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().items=l}),e.YNc(6,ae,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().itemSize=l}),e.YNc(7,ue,2,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().strict=l}),e.YNc(8,Te,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().mode=l}),e.qZA(),e._UZ(9,"inherited-documentation"),e.TgZ(10,"tui-doc-documentation",15),e.YNc(11,le,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(t),e.oxw().textAlign=l}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.itemsVariants)("documentationPropertyValue",t.items),e.xp6(1),e.Q6J("documentationPropertyValues",t.itemSizeVariants)("documentationPropertyValue",t.itemSize),e.xp6(1),e.Q6J("documentationPropertyValue",t.strict),e.xp6(1),e.Q6J("documentationPropertyValues",t.modeVariants)("documentationPropertyValue",t.mode),e.xp6(3),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function de(n,a){if(1&n&&(e.TgZ(0,"ol",25),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,26),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",27),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,28),e._UZ(9,"code"),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",29),e.qZA(),e.TgZ(12,"li"),e.TgZ(13,"p"),e.SDv(14,30),e.qZA(),e._UZ(15,"tui-doc-code",31),e.qZA(),e.TgZ(16,"li"),e.TgZ(17,"p"),e.tHW(18,32),e._UZ(19,"code"),e.N_p(),e.qZA(),e._UZ(20,"tui-doc-code",27),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(4),e.Q6J("code",t.exampleHtml),e.xp6(5),e.Q6J("code",t.exampleOptions)}}let _e=(()=>{class n extends A.b{constructor(){super(...arguments),this.exampleModule=o.e(72355).then(o.t.bind(o,72355,17)),this.exampleHtml=o.e(93061).then(o.t.bind(o,93061,17)),this.exampleForm=o.e(55886).then(o.t.bind(o,55886,17)),this.exampleOptions=o.e(74121).then(o.t.bind(o,74121,17)),this.example1={TypeScript:o.e(21210).then(o.t.bind(o,21210,17)),HTML:o.e(53419).then(o.t.bind(o,53419,17))},this.example2={TypeScript:o.e(3679).then(o.t.bind(o,3679,17)),HTML:o.e(15040).then(o.t.bind(o,15040,17))},this.example3={TypeScript:o.e(59021).then(o.t.bind(o,59021,17)),HTML:o.e(61240).then(o.t.bind(o,61240,17))},this.example4={TypeScript:o.e(50704).then(o.t.bind(o,50704,17)),HTML:o.e(37998).then(o.t.bind(o,37998,17))},this.example5={TypeScript:o.e(19707).then(o.t.bind(o,19707,17)),HTML:o.e(87871).then(o.t.bind(o,87871,17))},this.cleaner=!1,this.control=new i.NI(p.TuiTime.currentLocal(),i.kI.required),this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,t=>"06:00"===String(t)||t>p.TuiTime.currentLocal()],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemSizeVariants=["s","m","l"],this.itemSize=this.itemSizeVariants[1],this.itemsVariants=[[],(0,d.tuiCreateTimePeriods)()],this.items=this.itemsVariants[0],this.strict=!1,this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return n.\u0275fac=function(){let a;return function(u){return(a||(a=e.n5z(n)))(u||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-input-time"]],features:[e._Bn([{provide:L.x,useExisting:(0,e.Gpc)(()=>n)}]),e.qOj],decls:4,vars:0,consts:function(){let a,t,u,l,m,N,O,g,S,I,f,P,F,D,x,r,U,y;return a=$localize`:␟e8a2bde0c996d748dfc42e17591970b8e5410497␟8615486962666750555:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputTime${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows input time in HH:MM format `,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,u=$localize`:␟02877ac86ce0bf8a4be0038f3408197fb7185834␟6575185929467550326:Dropdown`,l=$localize`:␟a0d1d61146f641ff9d97a0f45f4dcfbbbfc0c34c␟7910525381274771902:You can set items for dropdown`,m=$localize`:␟9255dd96897796d5affce74a61a2291eae9266ac␟2668720220261995343:Options (icon)`,N=$localize`:␟f129f43eeb78347ccc3266869fb0b22c60ad2e1d␟2697690106240864393:Options (max values)`,O=$localize`:␟878d7ca6fe7d9ae4ea0aef760a7ec6628c291159␟7977286649536497017:Options (max values and postfix)`,g=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,S=$localize`:␟c7ab3fd1e5a42d5126408308618dadf4ff737951␟5455519835188831701: Hadler to disable some items `,I=$localize`:␟fcb0bfa7a00eafe45aafb6405e0163e556110008␟1811722709754725185: Items to choose `,f=$localize`:␟fd092eee471b2ec66fc4a2ff3d39a4208b43348b␟3777218839065355099: Item size `,P=$localize`:␟631a650f62f703fab057c6cbb73fe7c72120f32e␟624474866634481224: Only ${"\ufffd#1\ufffd"}:START_TAG_CODE:items${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: are allowed `,F=$localize`:␟b274f285a6f1cc8b44cf362a7ef1466d41003c58␟2941029810011146565: Modes for seconds and ms support `,D=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,x=$localize`:␟d00ed7b0e838c2a5dde4ec5301c69ae275f8a906␟3457683966234918968: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputTimeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,r=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,r=e.Zx4(r),U=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,y=$localize`:␟0de2f7374306f451fae92cf32ca6f094105da6b8␟615718100654416580: Optionally use the ${"\ufffd#19\ufffd"}:START_TAG_CODE:TUI_INPUT_TIME_OPTIONS${"\ufffd/#19\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `,[["header","InputTime","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],["id","dropdown","heading",u,"description",l,3,"content"],["id","options","heading",m,3,"content"],["id","options_max","heading",N,3,"content"],["id","options_ampm","heading",O,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiTime>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiTime>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","itemSize","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strict","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","disabledItemHandler","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","items","itemSize","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","mode","readOnly","strict","pseudoInvalid","pseudoFocus","pseudoHover","tuiHintContent","tuiHintDirection","tuiHintAppearance"],g,S,I,f,P,F,D,[1,"b-demo-steps"],x,["filename","myComponent.module.ts",3,"code"],r,["filename","myComponent.component.ts",3,"code"],U,["filename","myComponent.template.html",3,"code"],y]},template:function(t,u){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,ee,13,5,"ng-template",1),e.YNc(2,me,12,13,"ng-template",1),e.YNc(3,de,21,4,"ng-template",1),e.qZA())},directives:[J.q,Z.n,V.f,G,H,X,z,Q,Y.F,B.z,W.B,j.w,_.G,i.JJ,i.oH,K.Ek,w.b,C.x,M.s,q.bZ,k.c],encapsulation:2,changeDetection:0}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[$.ez,i.u5,i.UX,d.TuiInputTimeModule,s.TuiLinkModule,R.f,s.TuiButtonModule,s.TuiDropdownModule,s.TuiTextfieldControllerModule,s.TuiHintModule,d.TuiToggleModule,E.fV,h.Bz.forChild((0,E.Ve)(_e)),d.TuiUnfinishedValidatorModule]]}),n})()}}]);