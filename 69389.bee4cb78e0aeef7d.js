(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69389],{69389:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var o=n(16727),a=n(75407),r=n(87742),s=n(9659),i=n(19908),c=n(7287),l=n(95191),d=n(59996),p=n(54148),u=n(55514);const m=(()=>{var t;class e{constructor(){this.dialogs=(0,a.WQX)(c.wXC),this.injector=(0,a.WQX)(a.duS),this.months$=(0,a.WQX)(c.FmP),this.control=new r.MJ(null),this.dialog$=this.dialogs.open(new d.lS(s.kd,a.zZn.create({providers:[{provide:l.eHv,useValue:(0,i.lD9)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{min:new i.JKS(2018,2,10)}}),this.date$=(0,p.z)([(0,i.lD9)(this.control),this.months$]).pipe((0,u.T)((([t,e])=>t?t.isSingleDay?`${e[t.from.month]} ${t.from.day}, ${t.from.year}`:`${e[t.from.month]} ${t.from.day}, ${t.from.year} - ${e[t.to.month]} ${t.to.day}, ${t.to.year}`:"Choose a date range")))}get empty(){return!this.control.value}onClick(){this.dialog$.subscribe((t=>this.control.setValue(t)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example4",features:[a.aNF],decls:5,vars:7,consts:[[1,"wrapper"],["appearance","secondary","iconStart","@tui.calendar","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(t,e){1&t&&(a.j41(0,"div",0)(1,"button",1),a.bIt("click",(function(){return e.onClick()})),a.k0s(),a.j41(2,"span",2),a.EFF(3),a.nI1(4,"async"),a.k0s()()),2&t&&(a.R7$(1),a.xc7("border-radius",100,"%"),a.R7$(1),a.AVh("date_empty",e.empty),a.R7$(1),a.SpI(" ",a.bMT(4,5,e.date$)," "))},dependencies:[o.Jj,c.paf],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}"],changeDetection:0}),e})()}}]);