(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23859],{23859:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiSwipeModule:()=>S});var n=i(88692),o=i(91795),c=i(64206),u=i(4820),d=i(68822),p=i(64537),s=i(83074),r=i(43560),a=i(93525),l=i(38868),g=i(99021);let h=(()=>{var e;class t{constructor(){this.swiped="default"}onSwipe(e){this.swiped=e.direction}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&p.Tol(t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.NdJ("tuiSwipe",(function(e){return t.onSwipe(e)})),p._uU(1),p.qZA()),2&e&&(p.Q6J("ngClass",t.swiped),p.xp6(1),p.hij(" Swiped ",t.swiped,"\n"))},dependencies:[n.mk,g.W],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),t})();var m=i(38023),w=i(83628);function b(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"div",2),p.NdJ("tuiSwipe",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.onSwipe(t))})),p._uU(1," Swipe right to close "),p.qZA()}}let x=(()=>{var e;class t{constructor(){this.open$=new m.x}toggle(e){this.open$.next(e)}onSwipe(e){console.info(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.NdJ("tuiSwipe",(function(e){return t.onSwipe(e)})),p._uU(1," Swipe left to open "),p.YNc(2,b,2,0,"div",1),p.ALo(3,"async"),p.qZA()),2&e&&(p.xp6(2),p.Q6J("tuiSidebar",!!p.lcZ(3,2,t.open$))("tuiSidebarDirection","right"))},dependencies:[g.W,w.B,n.Ov],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),t})();function Z(e,t){if(1&e&&(p.TgZ(0,"p")(1,"code"),p._uU(2,"tuiSwipe"),p.qZA(),p._uU(3," directive allows detecting swipes on mobile devices. "),p.qZA(),p.TgZ(4,"p"),p._uU(5," You can configure the directive with "),p.TgZ(6,"code"),p._uU(7,"TUI_SWIPE_OPTIONS"),p.qZA(),p._uU(8," token. "),p._UZ(9,"br"),p._uU(10," Allowed options: "),p.qZA(),p.TgZ(11,"dl")(12,"dt")(13,"strong"),p._uU(14,"timeout:"),p.qZA()(),p.TgZ(15,"dd"),p._uU(16,"max time between touchstart and touchend"),p.qZA(),p.TgZ(17,"dt")(18,"strong"),p._uU(19,"threshold"),p.qZA(),p._uU(20," : "),p.qZA(),p.TgZ(21,"dd"),p._uU(22,"min distance between touchstart and touchend."),p.qZA()(),p.TgZ(23,"tui-doc-example",3),p._UZ(24,"tui-swipe-example-1"),p.qZA(),p.TgZ(25,"tui-doc-example",4),p._UZ(26,"tui-swipe-example-2"),p.qZA()),2&e){const e=p.oxw();p.xp6(23),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2)}}function f(e,t){if(1&e&&(p.TgZ(0,"ol",5)(1,"li")(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiSwipeModule"),p.qZA(),p._uU(6," into a module where you want to use our directive "),p.qZA(),p._UZ(7,"tui-doc-code",6),p.qZA(),p.TgZ(8,"li")(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",7),p.qZA()()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let _=(()=>{var e;class t{constructor(){this.exampleModule=i.e(72030).then(i.t.bind(i,72030,17)),this.exampleHtml=i.e(68817).then(i.t.bind(i,68817,17)),this.example1={TypeScript:i.e(67610).then(i.t.bind(i,67610,17)),HTML:i.e(69445).then(i.t.bind(i,69445,17)),LESS:i.e(83914).then(i.t.bind(i,83914,17))},this.example2={TypeScript:i.e(62531).then(i.t.bind(i,62531,17)),HTML:i.e(34473).then(i.t.bind(i,34473,17)),LESS:i.e(60499).then(i.t.bind(i,60499,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-swipe"]],decls:3,vars:0,consts:[["header","Swipe","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","sidebar","heading","With sidebar",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,Z,27,2,"ng-template",1),p.YNc(2,f,12,2,"ng-template",2),p.qZA())},dependencies:[s.c,r.q,a.n,l.f,h,x],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[n.ez,d.TuiSwipeModule,c.fV,u.TuiSidebarModule,d.TuiActiveZoneModule,o.Bz.forChild((0,c.Ve)(_))]}),t})()}}]);