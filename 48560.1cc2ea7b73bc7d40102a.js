(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48560],{89104:(t,o,e)=>{e.d(o,{X:()=>y});var n=e(98204),i=e(74788),r=e(33982),d=e(66596),u=e(51192),p=e(60404),a=e(12057);function c(t,o){1&t&&i._uU(0," Hard control/monitor for the dropdown being visible ")}function m(t,o){1&t&&(i._uU(0," Align of dropdown (does not work together with "),i.TgZ(1,"code"),i._uU(2,"limitWidth === 'fixed'"),i.qZA(),i._uU(3," ) "))}function l(t,o){1&t&&i._uU(0," Set a vertical direction of dropdown ")}function s(t,o){1&t&&i._uU(0," Limit width of dropdown ")}function g(t,o){1&t&&(i._uU(0," Minimum height to calculate that dropdown fits to set "),i.TgZ(1,"code"),i._uU(2,"tuiDropdownDirection"),i.qZA())}function w(t,o){1&t&&i._uU(0," Maximum height of dropdown ")}function h(t,o){1&t&&i._uU(0," Dropdown offset ")}e(155);let y=(()=>{class t{constructor(t){this.documentedComponent=t}}return t.ɵfac=function(o){return new(o||t)(i.Y36(n.x))},t.ɵcmp=i.Xpm({type:t,selectors:[["dropdown-documentation"]],decls:17,vars:12,consts:[[1,"tui-text_h6"],["routerLink","/directives/dropdown","target","_blank","tuiLink",""],["documentationPropertyMode","input-output","documentationPropertyName","tuiDropdownOpen","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownAlign","documentationPropertyType","TuiDropdownAlign",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownDirection","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMinHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownOffset","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,o){1&t&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiDropdown "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiDropdownModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,c,1,0,"ng-template",2),i.ALo(10,"async"),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownOpen.next(t)})),i.YNc(11,m,4,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownAlign=t})),i.YNc(12,l,1,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownDirection=t})),i.YNc(13,s,1,0,"ng-template",5),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownLimitWidth=t})),i.YNc(14,g,3,0,"ng-template",6),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownMinHeight=t})),i.YNc(15,w,1,0,"ng-template",7),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownMaxHeight=t})),i.YNc(16,h,1,0,"ng-template",8),i.NdJ("documentationPropertyValueChange",(function(t){return o.documentedComponent.dropdownOffset=t})),i.qZA()),2&t&&(i.xp6(9),i.Q6J("documentationPropertyValue",i.lcZ(10,10,o.documentedComponent.dropdownOpen)),i.xp6(2),i.Q6J("documentationPropertyValues",o.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",o.documentedComponent.dropdownAlign),i.xp6(1),i.Q6J("documentationPropertyValues",o.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",o.documentedComponent.dropdownDirection),i.xp6(1),i.Q6J("documentationPropertyValues",o.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",o.documentedComponent.dropdownLimitWidth),i.xp6(1),i.Q6J("documentationPropertyValue",o.documentedComponent.dropdownMinHeight),i.xp6(1),i.Q6J("documentationPropertyValue",o.documentedComponent.dropdownMaxHeight),i.xp6(1),i.Q6J("documentationPropertyValue",o.documentedComponent.dropdownOffset))},directives:[r.yS,d.V,u.z,p.B],pipes:[a.Ov],encapsulation:2,changeDetection:0}),t})()},19180:(t,o,e)=>{e.d(o,{F:()=>p});var n=e(12057),i=e(33982),r=e(73961),d=e(45294),u=e(74788);let p=(()=>{class t{}return t.ɵfac=function(o){return new(o||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[n.ez,i.Bz,r.Lx,d.TuiLinkModule]]}),t})()},155:(t,o,e)=>{e.d(o,{X:()=>r});var n=e(45294),i=e(26215);class r{constructor(){this.dropdownAlignVariants=["left","right","center"],this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownAlign=n.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownDirection=n.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownLimitWidth=n.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth,this.dropdownMinHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.dropdownOffset=n.TUI_DROPDOWN_DEFAULT_OPTIONS.offset,this.dropdownOpen=new i.X(!1)}}},98204:(t,o,e)=>{e.d(o,{x:()=>n});const n=new(e(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},48560:(t,o,e)=>{e.r(o),e.d(o,{ExampleTuiDropdownHoverModule:()=>B});var n=e(12057),i=e(23738),r=e(33982),d=e(73961),u=e(45294),p=e(54002),a=e(19180),c=e(74788),m=e(155),l=e(98204),s=e(43560),g=e(93525),w=e(33772),h=e(26072),y=e(9829),f=e(82886),D=e(27084);let T=(()=>{class t{}return t.ɵfac=function(o){return new(o||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-dropdown-hover-example-1"]],decls:2,vars:0,consts:[["tuiDropdown","Great Scott!","tuiDropdownHover",""]],template:function(t,o){1&t&&(c.TgZ(0,"span",0),c._uU(1," This is heavy!\n"),c.qZA())},directives:[h.t,y.V,f.A,D.E],encapsulation:2,changeDetection:0}),t})();var P=e(892),Z=e(77347),_=e(97611),x=e(62939),A=e(33250),C=e(25121),U=e(34880),V=e(20933),N=e(35065),v=e(82535);function O(t,o){if(1&t){const t=c.EpF();c.TgZ(0,"tui-data-list",7),c.NdJ("click",(function(){return c.CHM(t),c.oxw().onClick()})),c.TgZ(1,"button",8),c._uU(2,"Option 1"),c.qZA(),c.TgZ(3,"button",8),c._uU(4,"Option 2"),c.qZA(),c.TgZ(5,"button",8),c._uU(6,"Option 3"),c.qZA(),c.qZA()}}function M(t,o){if(1&t&&(c.TgZ(0,"div",9),c._UZ(1,"tui-toggle",10),c._uU(2," Turn option "),c.qZA()),2&t){const t=c.oxw();c.Q6J("formGroup",t.testForm)}}let b=(()=>{class t{constructor(){this.testForm=new i.cw({option:new i.NI(!1)}),this.open=!1,this.openSettings=!1,this.index=0}onClick(){this.open=!1,this.index=1}}return t.ɵfac=function(o){return new(o||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-dropdown-hover-example-2"]],decls:17,vars:6,consts:[["tuiTabs","",3,"activeItemIndex","activeItemIndexChange"],["tuiTab",""],["tuiDropdownAlign","right","tuiDropdownHover","",3,"content","open","openChange"],["tuiHostedDropdownHost","","tuiTab","",3,"tui-tab-activate.stop"],["content",""],["src","tuiIconSettingsLarge"],["settings",""],[3,"click"],["tuiOption",""],[1,"settings",3,"formGroup"],["formControlName","option","size","l"]],template:function(t,o){if(1&t&&(c.TgZ(0,"nav",0),c.NdJ("activeItemIndexChange",(function(t){return o.index=t})),c.TgZ(1,"button",1),c._uU(2,"Just a tab"),c.qZA(),c.TgZ(3,"tui-hosted-dropdown",2),c.NdJ("openChange",(function(t){return o.open=t})),c.TgZ(4,"button",3),c.NdJ("tui-tab-activate.stop",(function(){return 0})),c._uU(5," Hoverable/Clickable "),c.qZA(),c.YNc(6,O,7,0,"ng-template",null,4,c.W1O),c.qZA(),c.TgZ(8,"button",1),c._uU(9,"Another tab"),c.qZA(),c.TgZ(10,"tui-hosted-dropdown",2),c.NdJ("openChange",(function(t){return o.openSettings=t})),c.TgZ(11,"button",3),c.NdJ("tui-tab-activate.stop",(function(){return 0})),c._UZ(12,"tui-svg",5),c.qZA(),c.YNc(13,M,3,1,"ng-template",null,6,c.W1O),c.qZA(),c.qZA(),c.TgZ(15,"p"),c._uU(16),c.qZA()),2&t){const t=c.MAs(7),e=c.MAs(14);c.Q6J("activeItemIndex",o.index),c.xp6(3),c.Q6J("content",t)("open",o.open),c.xp6(7),c.Q6J("content",e)("open",o.openSettings),c.xp6(6),c.hij("Current state: ",o.open?"open":"closed","")}},directives:[P.H,Z.p,_.y,x.o,A.Ek,D.E,C.i,U.P,V.q,N.v,i.JL,i.sg,v.p,i.JJ,i.u],styles:[".settings[_ngcontent-%COMP%]{margin:1rem}"],changeDetection:0}),t})();var q=e(10977),H=e(51192),J=e(60404),S=e(89104),L=e(83074);function I(t,o){if(1&t&&(c.TgZ(0,"p"),c.TgZ(1,"code"),c._uU(2,"DropdownHover"),c.qZA(),c._uU(3," shows dropdown with custom template upon hover "),c.qZA(),c.TgZ(4,"tui-doc-example",2),c._UZ(5,"tui-dropdown-hover-example-1"),c.qZA(),c.TgZ(6,"tui-doc-example",3),c._UZ(7,"tui-dropdown-hover-example-2"),c.qZA()),2&t){const t=c.oxw();c.xp6(4),c.Q6J("content",t.example1),c.xp6(2),c.Q6J("content",t.example2)}}function W(t,o){1&t&&(c.TgZ(0,"div",8),c._uU(1," Here you can have any content "),c.TgZ(2,"p"),c._uU(3,"You can select a text inside a dropdown and it will not close a dropdown"),c.qZA(),c.TgZ(4,"button",9),c._uU(5," Button "),c.qZA(),c.qZA())}function E(t,o){1&t&&c._uU(0," Show delay for dropdown appearance after hover ")}function Q(t,o){1&t&&c._uU(0," Hide delay for dropdown to disappear after pointer is moved away ")}function k(t,o){if(1&t){const t=c.EpF();c.TgZ(0,"tui-doc-demo"),c.TgZ(1,"p",4),c._uU(2," Hover pointer over "),c.TgZ(3,"strong"),c._uU(4,"to see a dropdown"),c.qZA(),c.qZA(),c.YNc(5,W,6,0,"ng-template",null,5,c.W1O),c.qZA(),c.TgZ(7,"tui-doc-documentation"),c.YNc(8,E,1,0,"ng-template",6),c.NdJ("documentationPropertyValueChange",(function(o){return c.CHM(t),c.oxw().showDelay=o})),c.YNc(9,Q,1,0,"ng-template",7),c.NdJ("documentationPropertyValueChange",(function(o){return c.CHM(t),c.oxw().hideDelay=o})),c._UZ(10,"dropdown-documentation"),c.qZA()}if(2&t){const t=c.MAs(6),o=c.oxw();c.xp6(1),c.Q6J("tuiDropdown",t)("tuiDropdownAlign",o.dropdownAlign)("tuiDropdownDirection",o.dropdownDirection)("tuiDropdownHideDelay",o.hideDelay)("tuiDropdownLimitWidth",o.dropdownLimitWidth)("tuiDropdownMaxHeight",o.dropdownMaxHeight)("tuiDropdownMinHeight",o.dropdownMinHeight)("tuiDropdownOffset",o.dropdownOffset)("tuiDropdownShowDelay",o.showDelay),c.xp6(7),c.Q6J("documentationPropertyValue",o.showDelay),c.xp6(1),c.Q6J("documentationPropertyValue",o.hideDelay)}}function Y(t,o){if(1&t&&(c.TgZ(0,"ol",10),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiDropdownModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",11),c.qZA(),c.TgZ(8,"li"),c.TgZ(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",12),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(7),c.Q6J("code",t.exampleModule),c.xp6(4),c.Q6J("code",t.exampleHtml)}}let F=(()=>{class t extends m.X{constructor(){super(...arguments),this.exampleModule=e.e(53425).then(e.t.bind(e,53425,17)),this.exampleHtml=e.e(61118).then(e.t.bind(e,61118,17)),this.example1={TypeScript:e.e(81486).then(e.t.bind(e,81486,17)),HTML:e.e(74088).then(e.t.bind(e,74088,17))},this.example2={TypeScript:e.e(42559).then(e.t.bind(e,42559,17)),HTML:e.e(46893).then(e.t.bind(e,46893,17)),LESS:e.e(28101).then(e.t.bind(e,28101,17))},this.showDelay=200,this.hideDelay=500}}return t.ɵfac=function(){let o;return function(e){return(o||(o=c.n5z(t)))(e||t)}}(),t.ɵcmp=c.Xpm({type:t,selectors:[["example-tui-dropdown-hover"]],features:[c._Bn([{provide:l.x,useExisting:(0,c.Gpc)((()=>t))}]),c.qOj],decls:4,vars:0,consts:[["header","DropdownHover","package","CORE","type","directives"],["pageTab",""],["id","basic","heading","Basic",3,"content"],["id","hosted-dropdown","heading","HostedDropdown",3,"content"],["tuiDropdownHover","",3,"tuiDropdown","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownHideDelay","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiDropdownShowDelay"],["dropdownContent",""],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownShowDelay","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownHideDelay","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,o){1&t&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,I,8,2,"ng-template",1),c.YNc(2,k,11,11,"ng-template",1),c.YNc(3,Y,12,2,"ng-template",1),c.qZA())},directives:[s.q,g.n,w.f,T,b,q.F,D.E,h.t,y.V,f.A,A.Ek,H.z,J.B,S.X,L.c],encapsulation:2,changeDetection:0}),t})(),B=(()=>{class t{}return t.ɵfac=function(o){return new(o||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[[n.ez,i.UX,u.TuiDropdownModule,d.fV,p.TuiTabsModule,u.TuiSvgModule,p.TuiToggleModule,u.TuiHostedDropdownModule,u.TuiDataListModule,r.Bz.forChild((0,d.Ve)(F)),a.F]]}),t})()}}]);