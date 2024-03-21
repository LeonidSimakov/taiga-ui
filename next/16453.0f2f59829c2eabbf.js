(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16453],{16453:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiPromptModule:()=>b});var n=o(76733),i=o(42932),u=o(87253),a=o(64064),c=o(39854),r=o(20755),p=o(84787),s=o(47880),d=o(27146),m=o(36877),l=o(73097),g=o(38404),h=o(65004),T=o(43894),y=o(17894),Z=o(97967),f=o(2313),P=o(60001);function U(e,t){if(1&e&&(r.TgZ(0,"p"),r._uU(1," Prompt is a ready to use "),r.TgZ(2,"a",2),r._uU(3," Dialog "),r.qZA(),r._uU(4," to ask user to confirm an action "),r.qZA(),r.TgZ(5,"tui-notification"),r._uU(6," See "),r.TgZ(7,"a",3),r._uU(8," this example "),r.qZA(),r._uU(9," to learn how to use prompt to prevent data loss on forms inside other modals "),r.qZA(),r.TgZ(10,"tui-doc-example",4),r._UZ(11,"tui-prompt-example-1"),r.qZA()),2&e){const e=r.oxw();r.xp6(10),r.Q6J("content",e.example1)}}function _(e,t){1&e&&r._uU(0," Content of the prompt ")}function x(e,t){1&e&&(r._uU(0," Text on "),r.TgZ(1,"code"),r._uU(2,"false"),r.qZA(),r._uU(3," button "))}function A(e,t){1&e&&(r._uU(0," Text on "),r.TgZ(1,"code"),r._uU(2,"true"),r.qZA(),r._uU(3," button "))}function q(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-doc-demo")(1,"button",5),r.NdJ("click",(function(){r.CHM(e);const t=r.oxw();return r.KtG(t.onClick())})),r._uU(2," Show "),r.qZA()(),r.TgZ(3,"p"),r._uU(4," You can pass "),r.TgZ(5,"code"),r._uU(6,"data: TuiPromptData"),r.qZA(),r._uU(7," when opening a dialog to customize it "),r.qZA(),r.TgZ(8,"tui-doc-documentation"),r.YNc(9,_,1,0,"ng-template",6),r.YNc(10,x,4,0,"ng-template",7),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.no=t)})),r.YNc(11,A,4,0,"ng-template",8),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.yes=t)})),r.qZA()}if(2&e){const e=r.oxw();r.xp6(10),r.Q6J("documentationPropertyValue",e.no),r.xp6(1),r.Q6J("documentationPropertyValue",e.yes)}}function w(e,t){if(1&e&&(r.TgZ(0,"ol",9)(1,"li")(2,"p"),r._uU(3," Import "),r.TgZ(4,"code"),r._uU(5,"TuiPromptModule"),r.qZA(),r._uU(6," into a module where you want to use our component "),r.qZA(),r._UZ(7,"tui-doc-code",10),r.qZA(),r.TgZ(8,"li")(9,"p"),r._uU(10," Open with "),r.TgZ(11,"code"),r._uU(12,"DialogService"),r.qZA()(),r._UZ(13,"tui-doc-code",11),r.qZA()()),2&e){const e=r.oxw();r.xp6(7),r.Q6J("code",e.exampleModule),r.xp6(6),r.Q6J("code",e.exampleService)}}let M=(()=>{var e;class t{constructor(){this.dialogs=(0,r.f3M)(a.TuiDialogService),this.alerts=(0,r.f3M)(a.TuiAlertService),this.no="No",this.yes="Yes",this.content="This is <code>PolymorpheusContent</code>, so it can be anything you like!",this.exampleModule=o.e(89422).then(o.t.bind(o,89422,17)),this.exampleService=o.e(53824).then(o.t.bind(o,42970,17)),this.example1={TypeScript:o.e(29057).then(o.t.bind(o,29057,17)),HTML:o.e(72150).then(o.t.bind(o,72150,17))}}onClick(){this.dialogs.open(c.TUI_PROMPT,{label:"Are you sure?",size:"s",data:this}).pipe((0,p.w)((e=>this.alerts.open(String(e))))).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-tui-prompt"]],decls:4,vars:0,consts:[["header","Prompt","package","KIT","type","components"],["pageTab",""],["routerLink","/components/dialog","tuiLink",""],["fragment","prompt","routerLink","/components/dialog","tuiLink",""],["id","base","heading","Basic",3,"content"],["tuiButton","",3,"click"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent"],["documentationPropertyMode","input","documentationPropertyName","no","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","yes","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,U,12,1,"ng-template",1),r.YNc(2,q,12,2,"ng-template",1),r.YNc(3,w,14,2,"ng-template",1),r.qZA())},dependencies:[s.v,d.V,i.rH,m.c,l.F,g.z,h.B,T.q,y.n,Z.f,f.L,P.TuiPromptExample1],encapsulation:2,changeDetection:0}),t})(),b=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[n.ez,a.TuiButtonModule,a.TuiLinkModule,c.TuiPromptModule,i.Bz,u.fV,i.Bz.forChild((0,u.Ve)(M)),a.TuiNotificationModule]}),t})()}}]);