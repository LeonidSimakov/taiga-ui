(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87955],{45741:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var i=n(66094),r=n(44268),o=n(42436),a=n(35548),u=n(77498);const s=(()=>{var e;class t{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"@tui.play":"@tui.pause"}getTime(e){const t=Math.round(e||0),n=t%r.SECONDS_IN_MINUTE,i=(t-n)/r.SECONDS_IN_MINUTE,o=String(n),a=String(i),u=1===o.length?`0${o}`:o;return`${1===a.length?`0${a}`:a}:${u}`}toggleState(){this.paused=!this.paused}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[a.jDz],decls:13,vars:11,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],[1,"controls"],["appearance","glass","size","s","title","Play/Pause","tuiIconButton","","tuiTheme","dark","type","button",3,"iconStart","click"],["step","any","tuiSlider","","type","range",1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(e,t){if(1&e&&(a.TgZ(0,"div",0)(1,"video",1,2),a.NdJ("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("click",(function(){return t.toggleState()})),a._UZ(3,"source",3),a.qZA(),a.TgZ(4,"div",4)(5,"button",5),a.NdJ("click",(function(){return t.toggleState()})),a.qZA(),a.TgZ(6,"input",6),a.NdJ("ngModelChange",(function(e){return t.currentTime=e})),a.qZA(),a.TgZ(7,"div",7)(8,"time"),a._uU(9),a.qZA(),a._uU(10," / "),a.TgZ(11,"time"),a._uU(12),a.qZA()()()()),2&e){const e=a.MAs(2);a.xp6(1),a.Q6J("currentTime",t.currentTime)("paused",t.paused),a.xp6(4),a.Udp("border-radius",100,"%"),a.Q6J("iconStart",t.icon),a.xp6(1),a.Q6J("max",e.duration)("ngModel",t.currentTime),a.xp6(2),a.uIk("datetime",t.getTime(t.currentTime)),a.xp6(1),a.hij(" ",t.getTime(t.currentTime)," "),a.xp6(2),a.uIk("datetime",t.getTime(e.duration)),a.xp6(1),a.hij(" ",t.getTime(e.duration)," ")}},dependencies:[r.TuiMedia,o.TuiButton,u.TuiSliderComponent,i.u5,i.Fj,i.eT,i.JJ,i.On],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-background-base);background:linear-gradient(to bottom,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1;margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;margin-left:.75rem;font-size:.8125rem}"],changeDetection:0}),t})()}}]);