(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29501],{29501:(e,o,t)=>{t.r(o),t.d(o,{default:()=>i});var s=t(35548),n=t(58859);const i=(()=>{var e;class o{constructor(){this.jestConfigJs=t.e(32033).then(t.t.bind(t,32033,17)),this.packageJson=t.e(91173).then(t.t.bind(t,91173,17)),this.setupJestJs=t.e(83380).then(t.t.bind(t,83380,17))}}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[s.jDz],decls:67,vars:3,consts:[["header","Jest"],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]],template:function(e,o){1&e&&(s.TgZ(0,"tui-doc-page",0)(1,"p"),s._uU(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),s.qZA(),s.TgZ(3,"p"),s._uU(4," Taiga UI uses "),s.TgZ(5,"code"),s._uU(6,"@ng-web-apis/common"),s.qZA(),s._uU(7," to avoid accessing global variables like "),s.TgZ(8,"code"),s._uU(9,"window"),s.qZA(),s._uU(10," or "),s.TgZ(11,"code"),s._uU(12,"navigator"),s.qZA(),s._uU(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),s.TgZ(14,"code"),s._uU(15,"@ng-web-apis/universal"),s.qZA(),s._uU(16," for Jest to run properly. "),s.qZA(),s.TgZ(17,"p"),s._uU(18," Otherwise, you're gonna face errors like "),s.TgZ(19,"code"),s._uU(20,"ReferenceError: IntersectionObserver is not defined"),s.qZA()(),s.TgZ(21,"h2"),s._uU(22," Using "),s.TgZ(23,"code"),s._uU(24,"@angular-builders/jest"),s.qZA(),s._uU(25," or "),s.TgZ(26,"code"),s._uU(27,"jest-preset-angular"),s.qZA()(),s.TgZ(28,"p"),s._uU(29,"If you're using one of these libraries. You can follow the following steps :"),s.qZA(),s.TgZ(30,"ol",1)(31,"li",2),s._uU(32," Install "),s.TgZ(33,"code"),s._uU(34,"npm i @ng-web-apis/universal --save-dev"),s.qZA(),s._uU(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),s.qZA(),s.TgZ(36,"li",2),s._uU(37," Add a "),s.TgZ(38,"code"),s._uU(39,"setupFilesAfterEnv"),s.qZA(),s._uU(40," property to your "),s.TgZ(41,"code"),s._uU(42,"jest.config.js"),s.qZA(),s._uU(43," or "),s.TgZ(44,"code"),s._uU(45,"package.json"),s.qZA(),s._uU(46," jest configuration (depending on where your configuration is) with the path to "),s.TgZ(47,"code"),s._uU(48,"setup-jest.js"),s.qZA(),s._uU(49," if you have not already. "),s._UZ(50,"tui-doc-code",3),s._uU(51," or "),s._UZ(52,"tui-doc-code",4),s.qZA(),s.TgZ(53,"li",2),s._uU(54," Create the file "),s.TgZ(55,"code"),s._uU(56,"setup-jest.js"),s.qZA(),s._uU(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),s.qZA(),s.TgZ(58,"li",2),s._uU(59," Add the following line to the "),s.TgZ(60,"code"),s._uU(61,"setup-jest.js"),s.qZA(),s._uU(62," : "),s.TgZ(63,"code"),s._uU(64,"import '@ng-web-apis/universal/mocks';"),s.qZA(),s._uU(65," . "),s._UZ(66,"tui-doc-code",5),s.qZA()()()),2&e&&(s.xp6(50),s.Q6J("code",o.jestConfigJs),s.xp6(2),s.Q6J("code",o.packageJson),s.xp6(14),s.Q6J("code",o.setupJestJs))},dependencies:[n.D_,n.xR],encapsulation:2,changeDetection:0}),o})()}}]);