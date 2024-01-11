(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50433],{50433:(e,t,n)=>{n.r(t),n.d(t,{ExampleTokensModule:()=>y});var i=n(88692),o=n(91795),a=n(64206),s=n(78129),c=n(64537),u=n(43560),l=n(93525),r=n(38868),p=n(68822);let m=(()=>{var e;class t{constructor(e){this.renderer=e,this.style=this.renderer.createElement("style")}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_DEFAULT_RENDERER))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-1"]],decls:2,vars:0,template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1,"Inject this token if you need access to Renderer inside a singleton service."),c.qZA())},encapsulation:2,changeDetection:0}),t})();var d=n(66596);let _=(()=>{var e;class t{constructor(e){this.dialogs=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_DIALOGS,8))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-2"]],decls:10,vars:0,consts:[["routerLink","/components/dialog","tuiLink",""],["routerLink","/dialog/custom","tuiLink",""]],template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," A multi token of Observables of modal dialogs displayed by "),c.TgZ(2,"a",0),c._uU(3," TuiDialogHostComponent "),c.qZA(),c._uU(4," .\n"),c.qZA(),c.TgZ(5,"p"),c._uU(6," You can create your own service extending "),c.TgZ(7,"a",1),c._uU(8," AbstractTuiDialogService "),c.qZA(),c._uU(9," to easily add modal dialogs to your application.\n"),c.qZA())},dependencies:[d.V,o.rH],encapsulation:2,changeDetection:0}),t})(),T=(()=>{var e;class t{constructor(e){this.focusable=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_FOCUSABLE_ITEM_ACCESSOR,8))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-3"]],decls:2,vars:0,template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.\n"),c.qZA())},encapsulation:2,changeDetection:0}),t})(),g=(()=>{var e;class t{constructor(e){this.isAndroid=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_IS_ANDROID))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-4"]],decls:8,vars:0,consts:[["fragment","is-mobile","routerLink",".","tuiLink",""],["fragment","is-ios","routerLink",".","tuiLink",""]],template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," A token with a factory. It takes "),c.TgZ(2,"a",0),c._uU(3," TUI_IS_MOBILE "),c.qZA(),c._uU(4," and "),c.TgZ(5,"a",1),c._uU(6," TUI_IS_IOS "),c.qZA(),c._uU(7," , returns true if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)\n"),c.qZA())},dependencies:[d.V,o.rH],encapsulation:2,changeDetection:0}),t})(),Z=(()=>{var e;class t{constructor(e){this.isIos=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_IS_IOS))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-5"]],decls:5,vars:0,consts:[["fragment","is-mobile","routerLink",".","tuiLink",""]],template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," A token with a factory. It takes "),c.TgZ(2,"a",0),c._uU(3," TUI_IS_MOBILE "),c.qZA(),c._uU(4," and if it is true detects iOS devices with a regex\n"),c.qZA())},dependencies:[d.V,o.rH],encapsulation:2,changeDetection:0}),t})(),f=(()=>{var e;class t{constructor(e){this.isMobile=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(p.TUI_IS_MOBILE))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-6"]],decls:2,vars:0,template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices\n"),c.qZA())},encapsulation:2,changeDetection:0}),t})(),h=(()=>{var e;class t{constructor(e){this.isMobileRes$=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(s.TUI_IS_MOBILE_RES))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-7"]],decls:9,vars:3,template:function(e,t){1&e&&(c.TgZ(0,"div")(1,"p"),c._uU(2," A token with a factory. It compares the viewport width and the value from the TUI_MEDIA token to detect users with mobile resolution. "),c.qZA(),c.TgZ(3,"p"),c._uU(4," The current value is "),c.TgZ(5,"code"),c._uU(6),c.ALo(7,"async"),c.qZA(),c._uU(8," . Change the resolution to see the difference. "),c.qZA()()),2&e&&(c.xp6(6),c.Oqu(c.lcZ(7,1,t.isMobileRes$)))},dependencies:[i.Ov],encapsulation:2,changeDetection:0}),t})(),U=(()=>{var e;class t{constructor(e){this.TuiNumberFormatSettings=e}}return(e=t).ɵfac=function(t){return new(t||e)(c.Y36(s.TUI_NUMBER_FORMAT))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-8"]],decls:49,vars:0,consts:[[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["routerLink","/components/money","tuiLink",""],["routerLink","/pipes/format-number","tuiLink",""],["routerLink","/components/input-number","tuiLink",""],["routerLink","/components/input-slider","tuiLink",""],["routerLink","/components/input-range","tuiLink",""]],template:function(e,t){1&e&&(c.TgZ(0,"div")(1,"div"),c._uU(2," Using "),c.TgZ(3,"strong"),c._uU(4,"TUI_NUMBER_FORMAT"),c.qZA(),c._uU(5," injection token you can customize numbers formatting. "),c.qZA(),c.TgZ(6,"div"),c._uU(7,"For example: 10 500,33"),c.qZA(),c.TgZ(8,"div"),c._uU(9,"Can be customized as: 10/500.33"),c.qZA(),c.TgZ(10,"section")(11,"h3"),c._uU(12,"Defaults:"),c.qZA(),c.TgZ(13,"ul",0)(14,"li",1),c._uU(15," decimalSeparator = "),c.TgZ(16,"code"),c._uU(17,","),c.qZA()(),c.TgZ(18,"li",1),c._uU(19," thousandSeparator = "),c.TgZ(20,"code"),c._uU(21,"CHAR_NO_BREAK_SPACE"),c.qZA()(),c.TgZ(22,"li",1),c._uU(23," zeroPadding = "),c.TgZ(24,"code"),c._uU(25,"true"),c.qZA()(),c.TgZ(26,"li",1),c._uU(27," rounding = "),c.TgZ(28,"code"),c._uU(29,"truncate"),c.qZA()()()(),c.TgZ(30,"section")(31,"h3"),c._uU(32,"Components that are customizable:"),c.qZA(),c.TgZ(33,"ul",0)(34,"li",1)(35,"a",2),c._uU(36," TuiMoneyComponent "),c.qZA()(),c.TgZ(37,"li",1)(38,"a",3),c._uU(39," TuiFormatNumberPipe "),c.qZA()(),c.TgZ(40,"li",1)(41,"a",4),c._uU(42," TuiInputNumberComponent "),c.qZA()(),c.TgZ(43,"li",1)(44,"a",5),c._uU(45," TuiInputSliderComponent "),c.qZA()(),c.TgZ(46,"li",1)(47,"a",6),c._uU(48," TuiInputRangeComponent "),c.qZA()()()()())},dependencies:[d.V,o.rH],encapsulation:2,changeDetection:0}),t})();var k=n(83074);function A(e,t){if(1&e&&(c.TgZ(0,"li",4)(1,"a",5),c._uU(2),c.qZA()()),2&e){const e=t.$implicit;c.xp6(1),c.Q6J("fragment",e.fragment)("routerLink",e.link),c.xp6(1),c.hij(" ",e.name," ")}}let x=(()=>{var e;class t{constructor(){this.provideFirstDayOfWeekToken=n.e(22106).then(n.t.bind(n,22106,17)),this.customizableComponentsViaThisToken=[{name:"Calendar",link:"/components/calendar",fragment:"localization"},{name:"CalendarRange",link:"/components/calendar-range",fragment:"localization"},{name:"MobileCalendar",link:"/components/mobile-calendar",fragment:"localization"}]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-token-example-9"]],features:[c._Bn([{provide:s.TUI_FIRST_DAY_OF_WEEK,useValue:p.TuiDayOfWeek.Sunday}])],decls:11,vars:2,consts:[[1,"tui-space_top-0"],[3,"code"],[1,"tui-list","tui-list_small"],["class","tui-list__item",4,"ngFor","ngForOf"],[1,"tui-list__item"],["tuiLink","",3,"fragment","routerLink"]],template:function(e,t){1&e&&(c.TgZ(0,"p",0),c._uU(1," Use "),c.TgZ(2,"code"),c._uU(3,"TUI_FIRST_DAY_OF_WEEK"),c.qZA(),c._uU(4," injection token to change start day of the week (Monday by default).\n"),c.qZA(),c._UZ(5,"tui-doc-code",1),c.TgZ(6,"section")(7,"h3"),c._uU(8,"This token can customize the following components:"),c.qZA(),c.TgZ(9,"ul",2),c.YNc(10,A,3,3,"li",3),c.qZA()()),2&e&&(c.xp6(5),c.Q6J("code",t.provideFirstDayOfWeekToken),c.xp6(5),c.Q6J("ngForOf",t.customizableComponentsViaThisToken))},dependencies:[i.sg,d.V,k.c,o.rH],encapsulation:2,changeDetection:0}),t})();function I(e,t){if(1&e&&(c.TgZ(0,"tui-doc-example",2),c._UZ(1,"tui-token-example-1"),c.qZA(),c.TgZ(2,"tui-doc-example",3),c._UZ(3,"tui-token-example-2"),c.qZA(),c.TgZ(4,"tui-doc-example",4),c._UZ(5,"tui-token-example-3"),c.qZA(),c.TgZ(6,"tui-doc-example",5),c._UZ(7,"tui-token-example-4"),c.qZA(),c.TgZ(8,"tui-doc-example",6),c._UZ(9,"tui-token-example-5"),c.qZA(),c.TgZ(10,"tui-doc-example",7),c._UZ(11,"tui-token-example-6"),c.qZA(),c.TgZ(12,"tui-doc-example",8),c._UZ(13,"tui-token-example-7"),c.qZA(),c.TgZ(14,"tui-doc-example",9),c._UZ(15,"tui-token-example-8"),c.qZA(),c.TgZ(16,"tui-doc-example",10),c._UZ(17,"tui-token-example-9"),c.qZA()),2&e){const e=c.oxw();c.Q6J("content",e.example1)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example2)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example3)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example4)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example5)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example6)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example7)("fullsize",!0),c.xp6(2),c.Q6J("content",e.example8)("fullsize",!0),c.xp6(2),c.Q6J("fullsize",!0)}}let q=(()=>{var e;class t{constructor(){this.example1={TypeScript:n.e(36917).then(n.t.bind(n,36917,17))},this.example2={TypeScript:n.e(29483).then(n.t.bind(n,29483,17))},this.example3={TypeScript:n.e(72468).then(n.t.bind(n,72468,17))},this.example4={TypeScript:n.e(72394).then(n.t.bind(n,72394,17))},this.example5={TypeScript:n.e(63344).then(n.t.bind(n,63344,17))},this.example6={TypeScript:n.e(39798).then(n.t.bind(n,39798,17))},this.example7={TypeScript:n.e(5135).then(n.t.bind(n,5135,17))},this.example8={TypeScript:n.e(68958).then(n.t.bind(n,68958,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-tokens"]],features:[c._Bn([{provide:a.lW,useValue:null}])],decls:2,vars:0,consts:[["header","Tokens","package","CDK","path","cdk/tokens"],["pageTab",""],["id","default-renderer","heading","TUI_DEFAULT_RENDERER",3,"content","fullsize"],["id","dialog","heading","TUI_DIALOGS",3,"content","fullsize"],["id","focusable-item-accessor","heading","TUI_FOCUSABLE_ITEM_ACCESSOR",3,"content","fullsize"],["id","is-android","heading","TUI_IS_ANDROID",3,"content","fullsize"],["id","is-ios","heading","TUI_IS_IOS",3,"content","fullsize"],["id","is-mobile","heading","TUI_IS_MOBILE",3,"content","fullsize"],["id","is-mobile-res","heading","TUI_IS_MOBILE_RES",3,"content","fullsize"],["id","number-format","heading","TUI_NUMBER_FORMAT",3,"content","fullsize"],["id","first-day-of-week","heading","TUI_FIRST_DAY_OF_WEEK",3,"fullsize"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,I,18,17,"ng-template",1),c.qZA())},dependencies:[u.q,l.n,r.f,m,_,T,g,Z,f,h,U,x],encapsulation:2,changeDetection:0}),t})(),y=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[i.ez,s.TuiLinkModule,a.fV,o.Bz.forChild((0,a.Ve)(q))]}),t})()}}]);