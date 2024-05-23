(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[20029],{20029:(t,e,n)=>{n.r(e),n.d(e,{default:()=>U});var o=n(77113),a=n(85483),u=n(57218),i=n(48266),r=n(81470),m=n(35548),c=n(4594),d=n(33701),p=n(55836),l=n(31136),s=n(72187),h=n(34962),y=n(61091),g=n(95413),P=n(76970),V=n(62753),T=n(50714),x=n(44762);function M(t,e){if(1&t&&(m._UZ(0,"tui-doc-example",5),m.ALo(1,"tuiComponent"),m.ALo(2,"tuiExample"),m.ALo(3,"tuiKebab")),2&t){const t=e.$implicit,n=e.index;m.Q6J("component",m.lcZ(1,4,n+1))("content",m.xi3(2,6,n+1,"html,ts"))("heading",t)("id",m.lcZ(3,9,t))}}function f(t,e){if(1&t&&(m.TgZ(0,"p"),m._uU(1," Month picker component. If you want a textfield, see "),m.TgZ(2,"a",3),m._uU(3," InputMonthRange "),m.qZA()(),m.YNc(4,M,4,11,"tui-doc-example",4)),2&t){const t=m.oxw();m.xp6(4),m.Q6J("ngForOf",t.examples)}}function C(t,e){1&t&&(m.TgZ(0,"div"),m._uU(1,"A handler that gets a month and returns true if it is disabled."),m.qZA(),m.TgZ(2,"strong"),m._uU(3,"Must be a pure function"),m.qZA())}function N(t,e){1&t&&m._uU(0," Maximal month ")}function L(t,e){1&t&&m._uU(0," Minimal month ")}function w(t,e){1&t&&m._uU(0," Maximum length ")}function H(t,e){1&t&&m._uU(0," Minimum length ")}function b(t,e){1&t&&m._uU(0," A single month or a range of months ")}function I(t,e){1&t&&m._uU(0," Current year ")}function _(t,e){1&t&&m._uU(0," Selected month ")}function J(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"tui-doc-demo")(1,"tui-calendar-month",6),m.NdJ("monthClick",(function(e){m.CHM(t);const n=m.MAs(11);return m.KtG(n.emitEvent(e))})),m.qZA()(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,C,4,0,"ng-template",7),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.disabledItemHandler=e)})),m.YNc(4,N,1,0,"ng-template",8),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.max=e)})),m.YNc(5,L,1,0,"ng-template",9),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.min=e)})),m.YNc(6,w,1,0,"ng-template",10),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.maxLength=e)})),m.YNc(7,H,1,0,"ng-template",11),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.minLength=e)})),m.YNc(8,b,1,0,"ng-template",12),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.value=e)})),m.YNc(9,I,1,0,"ng-template",13),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.year=e)})),m.YNc(10,_,1,0,"ng-template",14,15,m.W1O),m.qZA()}if(2&t){const t=m.oxw();m.xp6(1),m.Q6J("disabledItemHandler",t.disabledItemHandler)("max",t.max)("maxLength",t.maxLength)("min",t.min)("minLength",t.minLength)("value",t.value)("year",t.year),m.xp6(2),m.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),m.xp6(1),m.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),m.xp6(1),m.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),m.xp6(1),m.Q6J("documentationPropertyValue",t.maxLength),m.xp6(1),m.Q6J("documentationPropertyValue",t.minLength),m.xp6(1),m.Q6J("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),m.xp6(1),m.Q6J("documentationPropertyValues",t.yearVariants)("documentationPropertyValue",t.year)}}function A(t,e){1&t&&m._UZ(0,"tui-setup")}const U=(()=>{var t;class e{constructor(){this.examples=["Basic","Range"],this.minVariants=[u.TUI_FIRST_DAY,new u.TuiMonth(2019,2),new u.TuiMonth(2007,0)],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiMonth(2020,2),new u.TuiMonth(2023,0),new u.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.maxLength=0,this.minLength=0,this.disabledItemHandlerVariants=[u.TUI_FALSE_HANDLER,({month:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[u.TuiDay.currentLocal(),new u.TuiMonthRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({month:3})),new u.TuiMonth(2007,2)],this.value=null,this.yearVariants=[u.TuiDay.currentLocal(),new u.TuiYear(2007)],this.year=this.yearVariants[0]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=m.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[m.jDz],decls:4,vars:0,consts:[["header","CalendarMonth","package","KIT","type","components"],["pageTab",""],[4,"pageTab"],["routerLink","/components/input-month-range","tuiLink",""],[3,"component","content","heading","id",4,"ngFor","ngForOf"],[3,"component","content","heading","id"],[3,"disabledItemHandler","max","maxLength","min","minLength","value","year","monthClick"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiMonth>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLength","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","year","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","monthClick","documentationPropertyType","TuiMonth"],["documentationPropertyMonthClick","documentationProperty"]],template:function(t,e){1&t&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,f,5,1,"ng-template",1),m.YNc(2,J,12,19,"ng-template",1),m.YNc(3,A,1,0,"tui-setup",2),m.qZA())},dependencies:[a.kG,c.sg,d.F,p.z,l.B,s.f,h.q,y.n,g.U,P.R,V.I,T.I,r.TuiCalendarMonthModule,x.o,i.TuiLinkDirective,o.Bz,o.rH,r.TuiInputMonthRangeModule],encapsulation:2,changeDetection:0}),e})()}}]);