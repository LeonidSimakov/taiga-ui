(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38177],{38177:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var a=n(16727),o=n(75407),s=n(87742),r=n(9659),i=n(19908),c=n(7287),l=n(95191),p=n(59996),d=n(54148),u=n(55514);const h=(()=>{var t;class e{constructor(){this.dialogs=(0,o.WQX)(c.wXC),this.injector=(0,o.WQX)(o.duS),this.months$=(0,o.WQX)(c.FmP),this.control=new s.MJ(null),this.dialog$=this.dialogs.open(new p.lS(r.kd,o.zZn.create({providers:[{provide:l.eHv,useValue:(0,i.lD9)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{multi:!0,min:new i.JKS(2018,2,10)}}),this.date$=(0,d.z)([(0,i.lD9)(this.control),this.months$]).pipe((0,u.T)((([t,e])=>t?.length?t.map((t=>`${e[t.month]} ${t.day}, ${t.year}`)).join("; "):"Choose dates")))}get empty(){return!this.control.value?.length}onClick(){this.dialog$.subscribe((t=>this.control.setValue(t)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example5",features:[o.aNF],decls:5,vars:7,consts:[[1,"wrapper"],["appearance","secondary","iconStart","@tui.calendar","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(t,e){1&t&&(o.j41(0,"div",0)(1,"button",1),o.bIt("click",(function(){return e.onClick()})),o.k0s(),o.j41(2,"span",2),o.EFF(3),o.nI1(4,"async"),o.k0s()()),2&t&&(o.R7$(1),o.xc7("border-radius",100,"%"),o.R7$(1),o.AVh("date_empty",e.empty),o.R7$(1),o.SpI(" ",o.bMT(4,5,e.date$)," "))},dependencies:[a.Jj,c.paf],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}"],changeDetection:0}),e})()}}]);