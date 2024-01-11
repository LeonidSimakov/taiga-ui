(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7190],{7190:(e,o,t)=>{t.r(o),t.d(o,{ExampleTuiCopyProcessorModule:()=>b});var n=t(88692),s=t(69900),c=t(91795),r=t(64206),p=t(68822),i=t(17326),a=t(64537),u=t(83074),l=t(43560),d=t(93525),m=t(38868),h=t(78129),g=t(16753),y=t(13735),f=t(93157);let x=(()=>{var e;class o{constructor(e,o){this.format=e,this.alerts=o,this.value=12345.67,this.numberProcessor=e=>e.replace(this.format.decimalSeparator,".").replace(new RegExp(this.format.thousandSeparator,"g"),""),this.textProcessor=e=>e.toUpperCase()}onCopy(e){var o,t;this.alerts.open(null!==(o=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))&&void 0!==o?o:"").subscribe()}}return(e=o).ɵfac=function(o){return new(o||e)(a.Y36(h.TUI_NUMBER_FORMAT),a.Y36(h.TuiAlertService))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(e,o){1&e&&a.NdJ("copy",(function(e){return o.onCopy(e)}))},decls:4,vars:3,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(e,o){1&e&&(a.TgZ(0,"tui-input-number",0),a.NdJ("ngModelChange",(function(e){return o.value=e})),a._uU(1," Copy this\n"),a.qZA(),a.TgZ(2,"div",1),a._uU(3,"Try copy this text"),a.qZA()),2&e&&(a.Q6J("tuiCopyProcessor",o.numberProcessor)("ngModel",o.value),a.xp6(2),a.Q6J("tuiCopyProcessor",o.textProcessor))},dependencies:[s.JJ,s.On,g.q,y.g,f.Z],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o})();function Z(e,o){if(1&e&&(a.TgZ(0,"p"),a._uU(1,"Directive is used to processed text when coping"),a.qZA(),a.TgZ(2,"tui-doc-example",3),a._UZ(3,"tui-copy-processor-example-1"),a.qZA()),2&e){const e=a.oxw();a.xp6(2),a.Q6J("content",e.example1)}}function T(e,o){if(1&e&&(a.TgZ(0,"ol",4)(1,"li")(2,"p"),a._uU(3," Import "),a.TgZ(4,"code"),a._uU(5,"TuiCopyProcessorModule"),a.qZA(),a._uU(6," into a module where you want to use our component "),a.qZA(),a._UZ(7,"tui-doc-code",5),a.qZA(),a.TgZ(8,"li")(9,"p"),a._uU(10,"Add to the template:"),a.qZA(),a._UZ(11,"tui-doc-code",6),a.qZA()()),2&e){const e=a.oxw();a.xp6(7),a.Q6J("code",e.exampleModule),a.xp6(4),a.Q6J("code",e.exampleHtml)}}let C=(()=>{var e;class o{constructor(){this.example1={TypeScript:t.e(91197).then(t.t.bind(t,91197,17)),HTML:t.e(24975).then(t.t.bind(t,24975,17))},this.exampleModule=t.e(8074).then(t.t.bind(t,8074,17)),this.exampleHtml=t.e(44146).then(t.t.bind(t,44146,17))}}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["example-tui-copy-processor"]],decls:3,vars:0,consts:[["header","CopyProcessor","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","usage","heading","Usage",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,o){1&e&&(a.TgZ(0,"tui-doc-page",0),a.YNc(1,Z,4,1,"ng-template",1),a.YNc(2,T,12,2,"ng-template",2),a.qZA())},dependencies:[u.c,l.q,d.n,m.f,x],encapsulation:2,changeDetection:0}),o})(),b=(()=>{var e;class o{}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵmod=a.oAB({type:e}),e.ɵinj=a.cJS({imports:[n.ez,s.u5,i.TuiInputNumberModule,p.TuiCopyProcessorModule,r.fV,c.Bz.forChild((0,r.Ve)(C))]}),o})()}}]);