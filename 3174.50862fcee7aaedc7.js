(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3174],{3174:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiFilterModule:()=>z});var o=n(76733),a=n(72133),i=n(42932),r=n(87253),u=n(64064),d=n(39854),l=n(6254),c=n(58733),m=n(20755),s=n(15373),p=n(36877),g=n(73097),h=n(38404),y=n(65004),f=n(43894),T=n(17894),b=n(97967),x=n(42507),P=n(56875),Z=n(28266),V=n(18701);function H(e,t){if(1&e&&(m.TgZ(0,"p"),m._uU(1," Components shows separated items that can be used to filter content on the page. There are also an option with badges. "),m.qZA(),m.TgZ(2,"tui-doc-example",2),m._UZ(3,"tui-filter-example-1"),m.qZA(),m.TgZ(4,"tui-doc-example",3),m._UZ(5,"tui-filter-example-2"),m.qZA(),m.TgZ(6,"tui-doc-example",4),m._UZ(7,"tui-filter-example-3"),m.qZA(),m.TgZ(8,"tui-doc-example",5),m._UZ(9,"tui-filter-example-4"),m.qZA()),2&e){const e=m.oxw();m.xp6(2),m.Q6J("content",e.example1),m.xp6(2),m.Q6J("content",e.example2),m.xp6(2),m.Q6J("content",e.example3),m.xp6(2),m.Q6J("content",e.example4)("fullsize",!0)}}function A(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-filter",15),m.NdJ("toggledItem",(function(t){m.CHM(e),m.oxw();const n=m.MAs(10);return m.KtG(n.emitEvent(t))})),m.qZA()}if(2&e){const e=m.oxw(2);m.Q6J("badgeHandler",e.badgeHandler)("disabledItemHandler",e.disabledItemHandler)("formControl",e.control)("items",e.items)("size",e.size)}}function M(e,t){1&e&&(m._uU(0," Function that gets and item and returns a badge value. Uses "),m.TgZ(1,"code"),m._uU(2,"valueOf"),m.qZA(),m._uU(3," to get a number to show by default "))}function U(e,t){1&e&&m._uU(0," Template for custom content in filter ")}function _(e,t){1&e&&(m.TgZ(0,"div"),m._uU(1,"A handler that gets a date and returns true if it is disabled."),m.qZA(),m.TgZ(2,"strong"),m._uU(3,"Must be a pure function"),m.qZA())}function N(e,t){1&e&&(m._uU(0," Function that matches value and items, e.g. if objects are copied. Uses "),m.TgZ(1,"code"),m._uU(2,"==="),m.qZA(),m._uU(3," by default. "),m.TgZ(4,"strong"),m._uU(5,"Must be a pure function"),m.qZA())}function w(e,t){1&e&&(m._uU(0," Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses "),m.TgZ(1,"code"),m._uU(2,"toString"),m.qZA(),m._uU(3," for view "))}function I(e,t){1&e&&m._uU(0," Size ")}function q(e,t){1&e&&m._uU(0," toggled event of item ")}function C(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-doc-demo",6),m.YNc(1,A,1,5,"ng-template"),m.qZA(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,M,4,0,"ng-template",7),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.badgeHandler=t)})),m.YNc(4,U,1,0,"ng-template",8),m.YNc(5,_,4,0,"ng-template",9),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.disabledItemHandler=t)})),m.YNc(6,N,6,0,"ng-template",10),m.YNc(7,w,4,0,"ng-template",11),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.items=t)})),m.YNc(8,I,1,0,"ng-template",12),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.size=t)})),m.YNc(9,q,1,0,"ng-template",13,14,m.W1O),m.qZA()}if(2&e){const e=m.oxw();m.Q6J("control",e.control),m.xp6(3),m.Q6J("documentationPropertyValues",e.badgeHandlerVariants)("documentationPropertyValue",e.badgeHandler),m.xp6(2),m.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),m.xp6(2),m.Q6J("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),m.xp6(1),m.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size)}}function J(e,t){if(1&e&&(m.TgZ(0,"ol",16)(1,"li")(2,"p"),m._uU(3," Import "),m.TgZ(4,"code"),m._uU(5,"TuiFilterModule"),m.qZA(),m._uU(6," into a module where you want to use our component "),m.qZA(),m._UZ(7,"tui-doc-code",17),m.qZA(),m.TgZ(8,"li")(9,"p"),m._uU(10,"Add to the template:"),m.qZA(),m._UZ(11,"tui-doc-code",18),m.qZA()()),2&e){const e=m.oxw();m.xp6(7),m.Q6J("code",e.exampleModule),m.xp6(4),m.Q6J("code",e.exampleHtml)}}class S{constructor(e,t){this.text=e,this.badgeValue=t}toString(){return this.text}valueOf(){return this.badgeValue||null}}let v=(()=>{var e;class t{constructor(){this.exampleModule=n.e(56726).then(n.t.bind(n,56726,17)),this.exampleHtml=n.e(82089).then(n.t.bind(n,82089,17)),this.example1={TypeScript:n.e(46528).then(n.t.bind(n,46528,17)),HTML:n.e(87577).then(n.t.bind(n,87577,17))},this.example2={TypeScript:n.e(96022).then(n.t.bind(n,96022,17)),HTML:n.e(70685).then(n.t.bind(n,70685,17))},this.example3={TypeScript:n.e(81715).then(n.t.bind(n,81715,17)),HTML:n.e(2447).then(n.t.bind(n,2447,17))},this.example4={TypeScript:n.e(24946).then(n.t.bind(n,24946,17)),HTML:n.e(29475).then(n.t.bind(n,29475,17)),LESS:n.e(2067).then(n.t.bind(n,2067,17))},this.initialItems=["Alex Inkin","Roman Sedov"],this.itemsVariants=[["Alex Inkin","Roman Sedov"],[new S("Focused Zone",10),new S("Dropdown",100),new S("Menu Items",30),new S("Accordion")]],this.badgeHandlerVariants=[e=>Number(e),e=>String(e).length],this.badgeHandler=this.badgeHandlerVariants[0],this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,e=>"Roman Sedov"===e,e=>(Number(e.valueOf())||0)>=30],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.control=new a.NI(this.initialItems),this.sizeVariants=["xs","s","m","l"],this.size=this.sizeVariants[2]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-filters"]],decls:4,vars:0,consts:[["header","Filter","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","badge","heading","With badges",3,"content"],["id","custom","heading","Custom",3,"content"],["id","all","heading","With all button",3,"content","fullsize"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","badgeHandler","documentationPropertyType","TuiHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","content","documentationPropertyType","PolymorpheusContent"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","identityMatcher","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","T[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","toggledItem","documentationPropertyType","T"],["documentationPropertyToggledItem","documentationProperty"],[3,"badgeHandler","disabledItemHandler","formControl","items","size","toggledItem"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,H,10,5,"ng-template",1),m.YNc(2,C,11,9,"ng-template",1),m.YNc(3,J,12,2,"ng-template",1),m.qZA())},dependencies:[s.x,a.JJ,a.oH,p.c,g.F,h.z,y.B,f.q,T.n,b.f,x.TuiFilterExample1,P.TuiFilterExample2,Z.TuiFilterExample3,V.TuiFilterExample4],encapsulation:2,changeDetection:0}),t})(),z=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[l.wq,d.TuiFilterModule,u.TuiButtonModule,d.TuiTagModule,u.TuiSvgModule,o.ez,a.u5,a.UX,r.fV,i.Bz.forChild((0,r.Ve)(v))]}),t})()}}]);