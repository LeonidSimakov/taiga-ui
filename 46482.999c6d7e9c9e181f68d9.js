"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[46482],{46482:(se,A,n)=>{n.r(A),n.d(A,{ExampleTuiDataListModule:()=>le});var m=n(12057),s=n(24751),S=n(33982),X=n(23121),L=n(29851),r=n(68339),c=n(76040),T=n(48611),t=n(74788),Y=n(88331),z=n(37159),H=n(57068),W=n(50170),V=n(1414),j=n(52219),B=n(63060),K=n(62733),q=n(3729),k=n(68874),g=n(20933),F=n(89786),D=n(35065),x=n(40939),N=n(31363),h=n(20501),tt=n(47305);function et(o,i){if(1&o&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.items),t.xp6(1),t.hij(" ",e.name," only ")}}function ot(o,i){if(1&o&&(t.TgZ(0,"tui-opt-group"),t.TgZ(1,"button",6),t._uU(2," All "),t.qZA(),t.YNc(3,et,2,2,"button",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("value",e.all),t.xp6(2),t.Q6J("ngForOf",e.items)}}function nt(o,i){if(1&o&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function it(o,i){if(1&o&&(t.TgZ(0,"tui-opt-group",11),t.YNc(1,nt,2,2,"button",7),t.qZA()),2&o){const e=t.oxw().tuiLet;t.xp6(1),t.Q6J("ngForOf",e)}}function at(o,i){if(1&o&&(t.TgZ(0,"tui-opt-group",9),t.YNc(1,it,2,1,"tui-opt-group",10),t.qZA()),2&o){const e=i.tuiLet,a=t.oxw().$implicit;t.Q6J("label",a.name),t.xp6(1),t.Q6J("ngIf",e.length)}}function ut(o,i){if(1&o&&(t.ynx(0),t.YNc(1,at,2,2,"tui-opt-group",8),t.ALo(2,"tuiFilter"),t.BQk()),2&o){const e=i.$implicit,a=t.oxw();t.xp6(1),t.Q6J("tuiLet",t.Dn7(2,1,e.items,a.filter,a.value))}}let lt=(()=>{class o{constructor(){this.items=[],this.value="",this.all=r.EMPTY_ARRAY,this.filter=r.TUI_DEFAULT_MATCHER}onArrowDown(e,a){e.onFocus(a,!0)}onKeyDown(e,a){a&&(0,c.tuiIsEditingKey)(e)&&a.focus({preventScroll:!0})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["custom-list"]],inputs:{items:"items"},decls:8,vars:4,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge",1,"tui-space_all-2",3,"tuiTextfieldLabelOutside","value","valueChange","keydown.arrowDown.prevent"],["input",""],["emptyContent","No results found",3,"keydown"],["list",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],[3,"label",4,"tuiLet"],[3,"label"],["tuiMultiSelectGroup","",4,"ngIf"],["tuiMultiSelectGroup",""]],template:function(e,a){if(1&e){const u=t.EpF();t.TgZ(0,"tui-primitive-textfield",0,1),t.NdJ("valueChange",function(_){return a.value=_})("keydown.arrowDown.prevent",function(_){t.CHM(u);const d=t.MAs(5);return a.onArrowDown(d,_)}),t._uU(2," Search categories\n"),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"tui-data-list",2,3),t.NdJ("keydown",function(_){t.CHM(u);const d=t.MAs(1);return a.onKeyDown(_.key,d.nativeFocusableElement)}),t.YNc(6,ot,4,2,"tui-opt-group",4),t.YNc(7,ut,3,5,"ng-container",5),t.qZA()}2&e&&(t.Q6J("tuiTextfieldLabelOutside",!0)("value",a.value),t.xp6(6),t.Q6J("ngIf",!a.value),t.xp6(1),t.Q6J("ngForOf",a.items))},directives:[B.y,K.B,q.aR,k.x,g.q,m.O5,m.sg,F.R,D.v,x.L,N.g,h.Q],pipes:[tt.S],encapsulation:2,changeDetection:0}),o})();function st(o,i){if(1&o&&t._UZ(0,"custom-list",2),2&o){const e=t.oxw();t.Q6J("items",e.items)}}const pt={name:"Income",items:["Donations","Product placement","Sponsorship","Found on the street","Unexpected inheritance","Investments","Color copier"]},_t={name:"Expenses",items:["Energy drinks","Coffee","Ramen","Bills","Back medicine","Warhammer 40000 figurines"]};let ct=(()=>{class o{constructor(){this.value=[],this.items=[pt,_t],this.identityMatcher=(e,a)=>e.length===a.length&&e.every(u=>a.includes(u)),this.valueContent=({$implicit:e})=>{if(!e.length)return"All";const a=this.items.find(({items:u})=>this.identityMatcher(e,u));return a?`${a.name} only`:`Selected: ${e.length}`}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-4"]],decls:3,vars:3,consts:[[1,"control",3,"identityMatcher","valueContent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,a){1&e&&(t.TgZ(0,"tui-select",0),t.NdJ("ngModelChange",function(l){return a.value=l}),t._uU(1," Open-source budget "),t.YNc(2,st,1,1,"custom-list",1),t.qZA()),2&e&&t.Q6J("identityMatcher",a.identityMatcher)("valueContent",a.valueContent)("ngModel",a.value)},directives:[W.u,V.O,s.JJ,s.On,j.g,lt],styles:[".control[_ngcontent-%COMP%]{width:320px}"],changeDetection:0}),o})();var rt=n(79121),E=n(62939),C=n(76189),dt=n(34880);function Tt(o,i){1&o&&t._UZ(0,"tui-svg",10)}function mt(o,i){if(1&o&&(t.TgZ(0,"a",7,8),t._uU(2),t.YNc(3,Tt,1,0,"tui-svg",9),t.qZA()),2&o){const e=i.$implicit,a=t.MAs(1);t.Q6J("routerLink",e.routerLink),t.uIk("aria-checked",a.isActive),t.xp6(2),t.hij(" ",e.label," "),t.xp6(1),t.Q6J("ngIf",a.isActive)}}function gt(o,i){if(1&o&&(t.TgZ(0,"tui-opt-group",5),t.YNc(1,mt,4,4,"a",6),t.qZA()),2&o){const e=i.$implicit;t.Q6J("label",e.label),t.xp6(1),t.Q6J("ngForOf",e.items)}}function Dt(o,i){if(1&o&&(t.TgZ(0,"tui-data-list",3),t.YNc(1,gt,2,2,"tui-opt-group",4),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}let Et=(()=>{class o{constructor(){this.arrow=T.TUI_ARROW,this.groups=[{label:$localize`Components`,items:[{label:"Input",routerLink:"/components/input"},{label:"Select",routerLink:"/components/select"},{label:"DataList",routerLink:"/components/data-list"}]},{label:$localize`Styles`,items:[{label:$localize`Icons`,routerLink:"/icons"},{label:$localize`Typography`,routerLink:"/typography"}]},{label:"",items:[{label:$localize`Changelog`,routerLink:"/changelog"}]}]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-1"]],decls:5,vars:2,consts:[[3,"content"],["tuiButton","","type","button",3,"iconRight"],["content",""],["role","menu"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink",4,"ngFor","ngForOf"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink"],["rla","routerLinkActive"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(e,a){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.TgZ(1,"button",1),t._uU(2," Menu "),t.qZA(),t.qZA(),t.YNc(3,Dt,2,1,"ng-template",null,2,t.W1O)),2&e){const u=t.MAs(4);t.Q6J("content",u),t.xp6(1),t.Q6J("iconRight",a.arrow)}},directives:[E.o,C.v,g.q,m.sg,F.R,D.v,S.yS,S.Od,m.O5,dt.P],encapsulation:2,changeDetection:0}),o})();var Z=n(94370),v=n(17163),y=n(37606),M=n(33250),$=n(26072),I=n(9829),R=n(7860);function Ct(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).tuiLet;return t.oxw(2).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=i.tuiLet;t.xp6(1),t.hij(" ",e," ")}}function Ft(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).tuiLet;return t.oxw(2).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=i.tuiLet;t.xp6(1),t.hij(" ",e," ")}}function Mt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(3).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e," ")}}function ft(o,i){if(1&o&&(t.TgZ(0,"tui-data-list",10),t.YNc(1,Mt,2,1,"button",11),t.TgZ(2,"button",6),t._uU(3," Nested menu "),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit,a=t.MAs(10),u=t.oxw();t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("ngForOf",u.burgers),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",a)}}function Ot(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(3).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e," ")}}function St(o,i){if(1&o&&(t.TgZ(0,"tui-data-list",12),t.YNc(1,Ot,2,1,"button",11),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("size",e.size),t.xp6(1),t.Q6J("ngForOf",e.drinks)}}function At(o,i){if(1&o&&(t.TgZ(0,"tui-data-list",4),t.YNc(1,Ct,2,1,"button",5),t.TgZ(2,"button",6),t._uU(3," Burgers "),t.qZA(),t.TgZ(4,"button",6),t._uU(5," Drinks "),t.qZA(),t.YNc(6,Ft,2,1,"button",5),t.qZA(),t.YNc(7,ft,4,4,"ng-template",null,7,t.W1O),t.YNc(9,St,2,2,"ng-template",null,8,t.W1O)),2&o){const e=i.$implicit,a=t.MAs(8),u=t.MAs(10),l=t.oxw();t.Q6J("tuiActiveZoneParent",e)("size",l.size),t.xp6(1),t.Q6J("tuiLet","French Fries"),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",a),t.xp6(2),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",u),t.xp6(2),t.Q6J("tuiLet","Ice Cream")}}let Lt=(()=>{class o{constructor(e){this.dialogService=e,this.dropdownOpen=!1,this.size="s",this.burgers=["Classic","Cheeseburger","Royal Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"]}selectOption(e){this.dropdownOpen=!1,this.dialogService.open(`You selected ${e}`).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.TuiDialogService))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-2"]],decls:5,vars:3,consts:[[3,"content","open","openChange"],["dropdown",""],["tuiIconButton","","appearance","flat","icon","tuiIconMoreVer","type","button",3,"pseudoHover"],["content",""],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent","size"],["tuiOption","",3,"click",4,"tuiLet"],["tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],["burgersTmp",""],["drinksTmp",""],["tuiOption","",3,"click"],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],[3,"size"]],template:function(e,a){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t.NdJ("openChange",function(l){return a.dropdownOpen=l}),t._UZ(2,"button",2),t.qZA(),t.YNc(3,At,11,8,"ng-template",null,3,t.W1O)),2&e){const u=t.MAs(1),l=t.MAs(4);t.Q6J("content",l)("open",a.dropdownOpen),t.xp6(2),t.Q6J("pseudoHover",u.open||null)}},directives:[E.o,C.v,g.q,Z.p,v.e,x.L,D.v,y.C,M.Ek,$.t,I.V,R.T,m.sg],encapsulation:2,changeDetection:0}),o})();function xt(o,i){if(1&o&&(t.TgZ(0,"button",9),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Nt(o,i){if(1&o&&(t.TgZ(0,"button",9),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function ht(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-data-list",4),t.TgZ(1,"tui-opt-group",5),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw().value=u}),t.TgZ(2,"tui-opt-group",6),t.YNc(3,xt,2,2,"button",7),t.qZA(),t.TgZ(4,"tui-opt-group",8),t.YNc(5,Nt,2,2,"button",7),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.value),t.xp6(2),t.Q6J("ngForOf",e.burgers),t.xp6(2),t.Q6J("ngForOf",e.drinks)}}let Zt=(()=>{class o{constructor(){this.value=[],this.burgers=["Hamburger","Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"],this.arrow=T.TUI_ARROW}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-3"]],decls:7,vars:5,consts:[[3,"tuiDropdownMaxHeight","content"],["dropdown",""],["tuiIconButton","","appearance","flat","type","button",3,"icon","pseudoHover"],["content",""],["size","l",1,"list"],["tuiMultiSelectGroup","",3,"ngModel","ngModelChange"],["label","Main dishes menu with long label"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["label","Drinks"],["tuiOption","",3,"value"]],template:function(e,a){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.qZA(),t.YNc(3,ht,6,3,"ng-template",null,3,t.W1O),t.TgZ(5,"p"),t._uU(6),t.qZA()),2&e){const u=t.MAs(1),l=t.MAs(4);t.Q6J("tuiDropdownMaxHeight",500)("content",l),t.xp6(2),t.Q6J("icon",a.arrow)("pseudoHover",u.open||null),t.xp6(4),t.Oqu(a.value)}},directives:[E.o,M.Ek,C.v,g.q,F.R,N.g,h.Q,s.JJ,s.On,m.sg,D.v],styles:[".list[_ngcontent-%COMP%]{width:12rem}"],changeDetection:0}),o})();var vt=n(77027),yt=n(41360),$t=n(49746),It=n(39607),Rt=n(16996),Pt=n(92483),Jt=n(48706);function Ut(o,i){if(1&o&&(t.TgZ(0,"form",14),t.TgZ(1,"tui-input",15),t._uU(2," RUB "),t.qZA(),t.qZA(),t.TgZ(3,"tui-data-list",4),t.TgZ(4,"button",16),t._uU(5," Exchange Rates: "),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit,a=t.MAs(16),u=t.oxw();t.Q6J("formGroup",u.moneyForm),t.xp6(3),t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("tuiDropdownManual",!0)("tuiDropdown",a)}}function bt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-calendar",17),t.NdJ("mousedown.silent.prevent",function(){return 0})("dayClick",function(u){return t.CHM(e),t.oxw(2).onDayClick(u)}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("value",e.dateValue)}}function wt(o,i){if(1&o&&(t.TgZ(0,"form",14),t.TgZ(1,"tui-input",18),t._uU(2," Email "),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("formGroup",e.testForm)}}function Qt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",19),t.TgZ(2,"tui-input",20),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).dollar=u}),t._uU(3,"1 Rub = (X) Dollars"),t.qZA(),t.TgZ(4,"tui-input",20),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).euro=u}),t._uU(5,"1 Rub = (Y) Euros"),t.qZA(),t.qZA(),t.TgZ(6,"ul",21),t.TgZ(7,"li",22),t._UZ(8,"tui-money",23),t.qZA(),t.TgZ(9,"li",22),t._UZ(10,"tui-money",24),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngModel",e.dollar),t.xp6(2),t.Q6J("ngModel",e.euro),t.xp6(4),t.Q6J("value",e.moneyValue/e.dollar),t.xp6(2),t.Q6J("value",e.moneyValue/e.euro)}}function Gt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-input-date-range",25),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).rangeValue=u}),t._uU(1," Range "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("ngModel",e.rangeValue)}}function Xt(o,i){if(1&o&&(t.TgZ(0,"tui-data-list",4),t.TgZ(1,"button",5),t._uU(2," \u{1f4b0} Money: "),t.qZA(),t.TgZ(3,"button",6),t._uU(4),t.qZA(),t.TgZ(5,"button",7),t._uU(6),t.qZA(),t.TgZ(7,"button",8),t._uU(8),t.qZA(),t.qZA(),t.YNc(9,Ut,6,4,"ng-template",null,9,t.W1O),t.YNc(11,bt,1,1,"ng-template",null,10,t.W1O),t.YNc(13,wt,3,1,"ng-template",null,11,t.W1O),t.YNc(15,Qt,11,4,"ng-template",null,12,t.W1O),t.YNc(17,Gt,2,1,"ng-template",null,13,t.W1O)),2&o){const e=i.$implicit,a=t.MAs(10),u=t.MAs(12),l=t.MAs(14),_=t.MAs(18),d=t.oxw();t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("tuiDropdownManual",!0)("tuiDropdown",a),t.xp6(2),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",u),t.xp6(1),t.hij(" \u{1f4c5} Calendar: ",d.dateValue," "),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",l),t.xp6(1),t.hij(" \u{1f4e7} Email: ",d.testValue," "),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",_),t.xp6(1),t.hij(" \u231b Range: ",d.rangeValue," ")}}let Yt=(()=>{class o{constructor(){this.dropdownOpen=!1,this.dateValue=new r.TuiDay(2020,0,1),this.euro=87,this.dollar=75,this.testForm=new s.cw({testValue:new s.NI("mail@mail.ru")}),this.moneyForm=new s.cw({moneyValue:new s.NI(1e3)}),this.rangeValue=new r.TuiDayRange(r.TuiDay.currentLocal(),r.TuiDay.currentLocal().append({year:1}))}get testValue(){var e;return null===(e=this.testForm.get("testValue"))||void 0===e?void 0:e.value}get moneyValue(){var e;return Number(null===(e=this.moneyForm.get("moneyValue"))||void 0===e?void 0:e.value)||0}onDayClick(e){this.dateValue=e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-5"]],decls:14,vars:7,consts:[["tuiDropdownLimitWidth","fixed",1,"example",3,"content","open","openChange"],["tuiButton","","appearance","outline","icon","tuiIconMoreVer","type","button","size","m",1,"example"],["content",""],[1,"example"],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-calendar-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-email-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-range-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownManual","tuiDropdown"],["money",""],["calendar",""],["input",""],["currency",""],["range",""],[1,"form",3,"formGroup"],["automation-id","tui-data-money-input","formControlName","moneyValue"],["tuiOption","","tuiDropdownSided","","tuiDropdownDirection","bottom","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],[3,"value","mousedown.silent.prevent","dayClick"],["automation-id","tui-data-list-email-field","formControlName","testValue"],["tuiGroup","",1,"group"],[3,"ngModel","ngModelChange"],[1,"exchange","tui-list","tui-list_large"],[1,"tui-list__item"],["currency","USD",3,"value"],["currency","EUR",3,"value"],["automation-id","tui-data-list-range-field",1,"form",3,"ngModel","ngModelChange"]],template:function(e,a){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(l){return a.dropdownOpen=l}),t.TgZ(1,"button",1),t._uU(2," List of components "),t.qZA(),t.qZA(),t.YNc(3,Xt,19,12,"ng-template",null,2,t.W1O),t.TgZ(5,"div",3),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA(),t.qZA()),2&e){const u=t.MAs(4);t.Q6J("content",u)("open",a.dropdownOpen),t.xp6(7),t.hij("Email: ",a.testValue,""),t.xp6(2),t.hij("Chosen date: ",a.dateValue,""),t.xp6(2),t.hij("Range date: ",a.rangeValue,""),t.xp6(2),t.AsE("Dol - ",a.dollar,", Eur - ",a.euro,"")}},directives:[E.o,M.Ek,C.v,g.q,Z.p,v.e,D.v,y.C,$.t,I.V,R.T,s._Y,s.JL,s.sg,vt.K,yt.w,s.JJ,s.u,$t.a,It.g,s.On,Rt.o,Pt.H,Jt.d],styles:[".example[_ngcontent-%COMP%]{margin-bottom:.5rem;min-width:20.25rem}.form[_ngcontent-%COMP%]{min-width:300px;overflow:hidden}.exchange[_ngcontent-%COMP%]{margin:25px}.group[_ngcontent-%COMP%]{max-width:30.25rem}"],changeDetection:0}),o})();function zt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).open=!1}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e," ")}}function Ht(o,i){if(1&o&&(t.TgZ(0,"tui-opt-group",4),t.YNc(1,zt,2,1,"button",5),t.qZA()),2&o){const e=i.$implicit;t.Q6J("label",e.label),t.xp6(1),t.Q6J("ngForOf",e.items)}}function Wt(o,i){if(1&o&&(t.TgZ(0,"tui-data-list"),t.YNc(1,Ht,2,2,"tui-opt-group",3),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}let Vt=(()=>{class o{constructor(e){this.isMobile=e,this.open=!1,this.arrow=T.TUI_ARROW,this.groups=[{label:"Advantages of Taiga UI",items:["\u{1f9e9} Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.","\u{1f9d9} Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.","\u{1f98b} Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.","\u{1f6e0} Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.","\u{1f4e6} It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.","\u{1f3d7} Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay."]},{label:"Well-engineered Taiga UI components",items:["Calendar","Dialog","ComboBox","Select"]}]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.TUI_IS_MOBILE))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-6"]],decls:5,vars:5,consts:[["tuiDropdownAlign","left",3,"tuiDropdownLimitWidth","tuiDropdownMaxHeight","content","open","openChange"],["tuiButton","","appearance","flat","type","button",3,"iconRight"],["content",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","class","option",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"option",3,"click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(l){return a.open=l}),t.TgZ(1,"button",1),t._uU(2," Select why you use Taiga UI "),t.qZA(),t.qZA(),t.YNc(3,Wt,2,1,"ng-template",null,2,t.W1O)),2&e){const u=t.MAs(4);t.Q6J("tuiDropdownLimitWidth",a.isMobile?"fixed":"min")("tuiDropdownMaxHeight",700)("content",u)("open",a.open),t.xp6(1),t.Q6J("iconRight",a.arrow)}},directives:[E.o,M.Ek,C.v,g.q,m.sg,F.R,D.v],styles:[".option[_ngcontent-%COMP%]{white-space:normal}"],changeDetection:0}),o})();var jt=n(54476),Bt=n(17023),Kt=n(76349);function qt(o,i){if(1&o&&(t.TgZ(0,"p"),t.tHW(1,2),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",3),t._UZ(4,"tui-data-list-example-4"),t.qZA(),t.TgZ(5,"tui-doc-example",4),t.TgZ(6,"tui-notification",5),t.tHW(7,6),t._UZ(8,"code"),t.N_p(),t.qZA(),t._UZ(9,"tui-data-list-example-1"),t.qZA(),t.TgZ(10,"tui-doc-example",7),t.TgZ(11,"tui-notification",5),t.tHW(12,8),t._UZ(13,"code"),t.N_p(),t.qZA(),t._UZ(14,"tui-data-list-example-2"),t.qZA(),t.TgZ(15,"tui-doc-example",9),t.TgZ(16,"tui-notification",5),t.tHW(17,10),t._UZ(18,"code"),t.N_p(),t.qZA(),t._UZ(19,"tui-data-list-example-3"),t.qZA(),t.TgZ(20,"tui-doc-example",11),t.TgZ(21,"tui-notification",5),t.tHW(22,12),t._UZ(23,"code"),t.N_p(),t.qZA(),t._UZ(24,"tui-data-list-example-5"),t.qZA(),t.TgZ(25,"tui-doc-example",13),t._UZ(26,"tui-data-list-example-6"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("content",e.example4),t.xp6(2),t.Q6J("content",e.example1),t.xp6(5),t.Q6J("content",e.example2),t.xp6(5),t.Q6J("content",e.example3),t.xp6(5),t.Q6J("content",e.example5),t.xp6(5),t.Q6J("content",e.example6)}}function kt(o,i){1&o&&t.SDv(0,19)}function te(o,i){1&o&&(t.tHW(0,20),t._UZ(1,"code"),t._UZ(2,"em"),t._UZ(3,"code"),t.N_p())}function ee(o,i){1&o&&t.SDv(0,21)}function oe(o,i){1&o&&t.SDv(0,22)}function ne(o,i){1&o&&(t.tHW(0,23),t._UZ(1,"code"),t._UZ(2,"code"),t.N_p())}function ie(o,i){1&o&&(t.TgZ(0,"h2"),t._uU(1,"DataList"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,kt,1,0,"ng-template",14),t.YNc(4,te,4,0,"ng-template",15),t.YNc(5,ee,1,0,"ng-template",16),t.qZA(),t.TgZ(6,"h2"),t._uU(7,"OptGroup"),t.qZA(),t.TgZ(8,"tui-doc-documentation"),t.YNc(9,oe,1,0,"ng-template",17),t.qZA(),t.TgZ(10,"h2"),t._uU(11,"Option"),t.qZA(),t.TgZ(12,"tui-doc-documentation"),t.YNc(13,ne,3,0,"ng-template",18),t.qZA())}function ae(o,i){if(1&o&&(t.TgZ(0,"ol",24),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,25),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",26),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,27),t.qZA(),t._UZ(9,"tui-doc-code",28),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let ue=(()=>{class o{constructor(){this.exampleModule=n.e(80708).then(n.t.bind(n,80708,17)),this.exampleHtml=n.e(38912).then(n.t.bind(n,38912,17)),this.example1={TypeScript:n.e(68853).then(n.t.bind(n,68853,17)),HTML:n.e(6225).then(n.t.bind(n,6225,17))},this.example2={TypeScript:n.e(62143).then(n.t.bind(n,62143,17)),HTML:n.e(95928).then(n.t.bind(n,95928,17))},this.example3={TypeScript:n.e(32985).then(n.t.bind(n,32985,17)),HTML:n.e(43035).then(n.t.bind(n,43035,17)),LESS:n.e(88767).then(n.t.bind(n,88767,17))},this.example4={TypeScript:n.e(22352).then(n.t.bind(n,22352,17)),HTML:n.e(26450).then(n.t.bind(n,26450,17)),"custom-list.component.ts":n.e(47209).then(n.t.bind(n,47209,17)),"custom-list.template.html":n.e(22657).then(n.t.bind(n,22657,17))},this.example5={TypeScript:n.e(8028).then(n.t.bind(n,8028,17)),HTML:n.e(77340).then(n.t.bind(n,77340,17)),LESS:n.e(72730).then(n.t.bind(n,72730,17))},this.example6={TypeScript:n.e(12510).then(n.t.bind(n,12510,17)),HTML:n.e(62995).then(n.t.bind(n,62995,17))}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:function(){let i,e,a,u,l,_,d,P,J,U,f,b,w,O,Q,G;return i=$localize`:␟f9d15c776cab9b795d1216098674f3a131512347␟7885675783778291482:${"\ufffd#2\ufffd"}:START_TAG_CODE:DataList${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to make lists or menus `,e=$localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`,a=$localize`:␟33c95483482ed8be69df5fcc5fa64b529f061437␟8571278609349877603: Import ${"\ufffd#8\ufffd"}:START_TAG_CODE:TuiArrowModule${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: if you need a rotated arrow `,u=$localize`:␟54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365␟1033431736972256177:Submenu`,l=$localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\ufffd#13\ufffd"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\ufffd/#13\ufffd"}:CLOSE_TAG_CODE: for nested menus `,_=$localize`:␟992f9aba2dd9e12cab5fdf16b03c54dae8f9703d␟8033471336283613576: Import ${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiMultiSelectModule${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE:`,d=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,P=$localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\ufffd#23\ufffd"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: for nested menus `,J=$localize`:␟7d11463d87d1a3fe3dd9ad14fb82af39cc356bc4␟8684948632137613907:Options with long text`,U=$localize`:␟1396678e9343696e0ba4990b23fd3107ffaf1504␟314511360780648423: Content to display when there are no options inside `,f=$localize`:␟f57d8b200294d6e6e0b0f1fb7efe62ed640add20␟6904648380497078003: Native accessability role — ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:listbox${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd#2\ufffd"}:START_EMPHASISED_TEXT:(default)${"\ufffd/#2\ufffd"}:CLOSE_EMPHASISED_TEXT: or ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:menu${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: for common usage `,f=t.Zx4(f),b=$localize`:␟c0382215b22faab4e2ff6c8d214ffb1f4fe2f829␟4284129011887017816: Size of items `,w=$localize`:␟8c918c45e9c54837c94f25f61a68988a3b272035␟2059095426405918218: Group label `,O=$localize`:␟1d0af9e8a86558c15856025e01265669cfcd5d2f␟1098780179882136171: Native accessability role. Set ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:aria-checked${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: for all roles except ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:menuitem${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: (see sample) `,O=t.Zx4(O),Q=$localize`:␟5328da1720bf2dec4cb435be14f74ff37d2609ef␟944971838556589360: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDataListModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,G=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","DataList","package","CORE","type","components"],["pageTab",""],i,["id","custom","heading","Custom list",3,"content"],["id","links","heading",e,3,"content"],[1,"tui-space_bottom-3"],a,["id","submenu","heading",u,3,"content"],l,["id","control","heading","Form control",3,"content"],_,["id","complex","heading",d,3,"content"],P,["id","long-text-options","heading",J,3,"content"],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiDataListRole"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiOptionRole"],U,f,b,w,O,[1,"b-demo-steps"],Q,["filename","myComponent.module.ts",3,"code"],G,["filename","myComponent.template.html",3,"code"]]},template:function(e,a){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,qt,27,6,"ng-template",1),t.YNc(2,ie,14,0,"ng-template",1),t.YNc(3,ae,10,2,"ng-template",1),t.qZA())},directives:[Y.q,z.n,H.f,ct,rt.L,Et,Lt,Zt,Yt,Vt,jt.z,Bt.B,Kt.c],encapsulation:2,changeDetection:0}),o})(),le=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,s.u5,s.UX,r.TuiLetModule,T.TuiMultiSelectModule,c.TuiPrimitiveTextfieldModule,T.TuiSelectModule,c.TuiTextfieldControllerModule,T.TuiArrowModule,c.TuiNotificationModule,c.TuiDataListModule,T.TuiDataListDropdownManagerModule,c.TuiSvgModule,c.TuiHostedDropdownModule,c.TuiButtonModule,c.TuiDropdownModule,r.TuiActiveZoneModule,L.fV,S.Bz.forChild((0,L.Ve)(ue)),r.TuiFilterPipeModule,c.TuiCalendarModule,T.TuiInputModule,T.TuiInputDateRangeModule,X.TuiMoneyModule,c.TuiGroupModule]]}),o})()}}]);