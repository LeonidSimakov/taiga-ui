(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76743],{76743:(e,t,n)=>{n.r(t),n.d(t,{ExampleMathModule:()=>T});var r=n(88692),a=n(69900),o=n(91795),u=n(64206),i=n(17326),m=n(64537),p=n(83074),l=n(43560),c=n(93525),s=n(38868),d=n(68822),h=n(16753),g=n(13735);let f=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(1.005),precision:new a.NI(2)})}get rounded(){const{value:e,precision:t}=this.parametersForm.value;return(0,d.tuiRound)(null!=e?e:1.005,null!=t?t:2)}get floored(){const{value:e,precision:t}=this.parametersForm.value;return(0,d.tuiFloor)(null!=e?e:1.005,null!=t?t:2)}get ceiled(){const{value:e,precision:t}=this.parametersForm.value;return(0,d.tuiCeil)(null!=e?e:1.005,null!=t?t:2)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m.TgZ(0,"p"),m._uU(1),m.qZA(),m.TgZ(2,"p"),m._uU(3),m.qZA(),m.TgZ(4,"p"),m._uU(5),m.qZA(),m.TgZ(6,"form",0)(7,"div",1)(8,"tui-input-number",2),m._uU(9," value "),m.qZA(),m.TgZ(10,"tui-input-number",3),m._uU(11," precision "),m.qZA()()()),2&e&&(m.xp6(1),m.hij("",t.rounded," = round(value, precision);"),m.xp6(2),m.hij("",t.floored," = floor(value, precision);"),m.xp6(2),m.hij("",t.ceiled," = ceil(value, precision);"),m.xp6(1),m.Q6J("formGroup",t.parametersForm),m.xp6(2),m.Q6J("precision",3))},dependencies:[h.q,g.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),x=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(13),fromInclude:new a.NI(5),toExclude:new a.NI(42)})}get ranged(){const{value:e,fromInclude:t,toExclude:n}=this.parametersForm.value;return(0,d.tuiInRange)(null!=e?e:13,null!=t?t:5,null!=n?n:42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m._uU(0),m.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),m._uU(4," value "),m.qZA(),m.TgZ(5,"tui-input-number",3),m._uU(6," fromInclude "),m.qZA(),m.TgZ(7,"tui-input-number",4),m._uU(8," toExclude "),m.qZA()()()),2&e&&(m.hij("",t.ranged," = inRange(value, fromInclude, toExclude); "),m.xp6(1),m.Q6J("formGroup",t.parametersForm))},dependencies:[h.q,g.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),v=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(0),min:new a.NI(5),max:new a.NI(42)})}get normalized(){const{value:e,min:t,max:n}=this.parametersForm.value;return(0,d.tuiNormalizeToIntNumber)(null!=e?e:0,null!=t?t:5,null!=n?n:42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m._uU(0),m.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),m._uU(4," value "),m.qZA(),m.TgZ(5,"tui-input-number",3),m._uU(6," min "),m.qZA(),m.TgZ(7,"tui-input-number",4),m._uU(8," max "),m.qZA()()()),2&e&&(m.hij("",t.normalized," = normalizeToIntNumber(value, min, max); "),m.xp6(1),m.Q6J("formGroup",t.parametersForm))},dependencies:[h.q,g.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),Z=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(3),quantum:new a.NI(2)})}get quantized(){const{value:e,quantum:t}=this.parametersForm.value;return(0,d.tuiQuantize)(null!=e?e:3,null!=t?t:2)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m._uU(0),m.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),m._uU(4," value "),m.qZA(),m.TgZ(5,"tui-input-number",3),m._uU(6," quantum "),m.qZA()()()),2&e&&(m.hij("",t.quantized," = quantize(value, quantum); "),m.xp6(1),m.Q6J("formGroup",t.parametersForm))},dependencies:[h.q,g.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})(),_=(()=>{var e;class t{constructor(){this.parametersForm=new a.cw({value:new a.NI(0),min:new a.NI(5),max:new a.NI(42)})}get clamped(){const{value:e,min:t,max:n}=this.parametersForm.value;return(0,d.tuiClamp)(null!=e?e:0,null!=t?t:5,null!=n?n:42)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m._uU(0),m.TgZ(1,"form",0)(2,"div",1)(3,"tui-input-number",2),m._uU(4," value "),m.qZA(),m.TgZ(5,"tui-input-number",3),m._uU(6," min "),m.qZA(),m.TgZ(7,"tui-input-number",4),m._uU(8," max "),m.qZA()()()),2&e&&(m.hij("",t.clamped," = clamp(value, min, max); "),m.xp6(1),m.Q6J("formGroup",t.parametersForm))},dependencies:[h.q,g.g,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})();function b(e,t){if(1&e&&(m.TgZ(0,"p"),m._uU(1,"A set of utils to calculate math"),m.qZA(),m.TgZ(2,"tui-doc-example",3),m._UZ(3,"tui-math-example-1"),m.qZA(),m.TgZ(4,"tui-doc-example",4),m._UZ(5,"tui-math-example-2"),m.qZA(),m.TgZ(6,"tui-doc-example",5),m._UZ(7,"tui-math-example-3"),m.qZA(),m.TgZ(8,"tui-doc-example",6),m._UZ(9,"tui-math-example-4"),m.qZA(),m.TgZ(10,"tui-doc-example",7),m._UZ(11,"tui-math-example-5"),m.qZA()),2&e){const e=m.oxw();m.xp6(2),m.Q6J("content",e.example1),m.xp6(2),m.Q6J("content",e.example2),m.xp6(2),m.Q6J("content",e.example3),m.xp6(2),m.Q6J("content",e.example4),m.xp6(2),m.Q6J("content",e.example5)}}function w(e,t){if(1&e&&(m.TgZ(0,"ol",8)(1,"li")(2,"p"),m._uU(3,"Import into component and use:"),m.qZA(),m._UZ(4,"tui-doc-code",9),m.qZA()()),2&e){const e=m.oxw();m.xp6(4),m.Q6J("code",e.importComponentExample)}}let q=(()=>{var e;class t{constructor(){this.importComponentExample=n.e(85334).then(n.t.bind(n,85334,17)),this.example1={TypeScript:n.e(46189).then(n.t.bind(n,46189,17)),HTML:n.e(74089).then(n.t.bind(n,12079,17)),LESS:n.e(7411).then(n.t.bind(n,7411,17))},this.example2={TypeScript:n.e(42395).then(n.t.bind(n,42395,17)),HTML:n.e(20016).then(n.t.bind(n,20016,17)),LESS:n.e(66757).then(n.t.bind(n,66757,17))},this.example3={TypeScript:n.e(6696).then(n.t.bind(n,6696,17)),HTML:n.e(14652).then(n.t.bind(n,14652,17)),LESS:n.e(17637).then(n.t.bind(n,17637,17))},this.example4={TypeScript:n.e(8018).then(n.t.bind(n,8018,17)),HTML:n.e(95511).then(n.t.bind(n,95511,17)),LESS:n.e(44971).then(n.t.bind(n,44971,17))},this.example5={TypeScript:n.e(63624).then(n.t.bind(n,42829,17)),HTML:n.e(72032).then(n.t.bind(n,72032,17)),LESS:n.e(41220).then(n.t.bind(n,41220,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-math"]],decls:3,vars:0,consts:[["header","Math utils","package","CDK","path","cdk/utils/math"],["pageTab",""],["pageTab","Setup"],["id","round","description","round, floor and ceil with fixed common problems of the native implementation","heading","round",3,"content"],["id","in-range","description","Checks if the value is in range","heading","inRange",3,"content"],["id","normalize-to-int-number","description","Normalizes any number to an integer within inclusive range","heading","normalizeToIntNumber",3,"content"],["id","quantize","description","Rounds a number to the closest value in a fixed discrete series","heading","quantize",3,"content"],["id","clamp","description","Clamps a value between two inclusive limits","heading","clamp",3,"content"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,b,12,5,"ng-template",1),m.YNc(2,w,5,1,"ng-template",2),m.qZA())},dependencies:[p.c,l.q,c.n,s.f,f,x,v,Z,_],encapsulation:2,changeDetection:0}),t})(),T=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[r.ez,i.TuiInputNumberModule,a.u5,a.UX,u.fV,o.Bz.forChild((0,u.Ve)(q))]}),t})()}}]);