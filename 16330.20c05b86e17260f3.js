(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16330],{16330:(t,n,e)=>{e.d(n,{W:()=>T});var i=e(20755),o=e(27534),s=e(64064),a=e(4610),c=e(76733),p=e(47880),g=e(27146),r=e(2184),h=e(7637),u=e(29877),l=e(23258),f=e(62998),m=e(6254);function x(t,n){if(1&t&&(i.ynx(0),i._uU(1),i.TgZ(2,"strong",5),i._uU(3),i.qZA(),i.BQk()),2&t){const t=i.oxw().ngIf,n=i.oxw();i.xp6(1),i.hij(" ",t.pages," "),i.xp6(2),i.Oqu(n.pages)}}function d(t,n){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=n.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function C(t,n){if(1&t&&i._UZ(0,"tui-svg",12),2&t){const t=i.oxw(4);i.Q6J("src",t.commonIcons.check)}}function k(t,n){1&t&&i._UZ(0,"span",13)}const O=function(t,n){return{$implicit:t,total:n}};function w(t,n){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",8),i.NdJ("click",(function(){const n=i.CHM(t).$implicit,e=i.oxw(3);return i.KtG(e.onItem(n))})),i.YNc(2,d,2,1,"ng-container",9),i.YNc(3,C,1,1,"tui-svg",10),i.YNc(4,k,1,0,"ng-template",null,11,i.W1O),i.qZA(),i.BQk()}if(2&t){const t=n.$implicit,e=i.MAs(5),o=i.oxw(3);i.xp6(2),i.Q6J("polymorpheusOutlet",o.sizeOptionContent)("polymorpheusOutletContext",i.WLB(4,O,t,o.total)),i.xp6(1),i.Q6J("ngIf",t===o.size)("ngIfElse",e)}}function b(t,n){if(1&t&&(i.TgZ(0,"tui-data-list",6),i.YNc(1,w,6,7,"ng-container",7),i.qZA()),2&t){const t=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",t.items)}}function z(t,n){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",14),i.NdJ("click",(function(){i.CHM(t);const n=i.oxw(2);return i.KtG(n.back())})),i.qZA(),i.TgZ(2,"button",15),i.NdJ("click",(function(){i.CHM(t);const n=i.oxw(2);return i.KtG(n.forth())})),i.qZA(),i.BQk()}if(2&t){const t=n.ngIf,e=i.oxw(2);i.xp6(1),i.Q6J("disabled",e.leftDisabled)("icon",e.icons.decrement)("title",t[0]),i.xp6(1),i.Q6J("disabled",e.rightDisabled)("icon",e.icons.increment)("title",t[1])}}function I(t,n){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"span",1),i.YNc(2,x,4,2,"ng-container",0),i.qZA(),i.TgZ(3,"span",2),i._uU(4),i.TgZ(5,"button",3),i.NdJ("tuiDropdownOpenChange",(function(n){i.CHM(t);const e=i.oxw();return i.KtG(e.open=n)})),i.TgZ(6,"strong"),i._uU(7),i.qZA()(),i.YNc(8,b,2,1,"ng-template",null,4,i.W1O),i._uU(10),i.TgZ(11,"strong",5),i._uU(12),i.qZA()(),i.YNc(13,z,3,6,"ng-container",0),i.ALo(14,"async"),i.BQk()}if(2&t){const t=n.ngIf,e=i.MAs(9),o=i.oxw();i.xp6(2),i.Q6J("ngIf",o.showPages),i.xp6(2),i.hij(" ",t.linesPerPage," "),i.xp6(1),i.Q6J("tuiDropdown",e)("tuiDropdownOpen",o.open),i.xp6(2),i.AsE("",o.start+1,"–",o.end,""),i.xp6(3),i.hij(" ",t.of," "),i.xp6(2),i.Oqu(o.total),i.xp6(1),i.Q6J("ngIf",i.lcZ(14,9,o.spinTexts$))}}let T=(()=>{var t;class n{constructor(){this.options=(0,i.f3M)(a.R9),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new i.vpe,this.sizeChange=new i.vpe,this.paginationChange=new i.vpe,this.open=!1,this.icons=(0,i.f3M)(s.TUI_SPIN_ICONS),this.spinTexts$=(0,i.f3M)(s.TUI_SPIN_TEXTS),this.texts$=(0,i.f3M)(o.J),this.commonIcons=(0,i.f3M)(s.TUI_COMMON_ICONS)}onItem(t){const{start:n}=this;this.size=t,this.sizeChange.emit(t),this.open=!1,this.page=Math.floor(n/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}get pages(){return Math.ceil(this.total/this.size)}get showPages(){return this.options.showPages}get sizeOptionContent(){return this.options.sizeOptionContent}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(t,n){1&t&&(i.YNc(0,I,15,11,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,n.texts$))},dependencies:[c.sg,c.O5,p.v,g.V,r.t,h.o,u.q,l.v,f.P,m.Li,c.Ov],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),n})()},4610:(t,n,e)=>{e.d(n,{PT:()=>a,R9:()=>s,Vl:()=>o});var i=e(58733);const o={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},s=(0,i.tuiCreateToken)(o);function a(t){return(0,i.tuiProvideOptions)(s,t,o)}},27534:(t,n,e)=>{e.d(n,{J:()=>a,s:()=>s});var i=e(58733),o=e(82327);const s=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("showHideText")),a=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("paginationTexts"))}}]);