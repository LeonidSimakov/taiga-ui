(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14688,87875,37419,11116,74905,55442,30191,34543,88300,74302,27316,55928,34420,88225,65596,15262,69409,8503,27655,36596,37573],{21186:(t,i,e)=>{e.d(i,{v:()=>p});var a=e(20755),n=e(58733),r=e(64064),o=e(32790),s=e(59311);const u=["tuiButton","","loading",""],c=["*"];let p=(()=>{var t;class i{constructor(){this.options=(0,a.f3M)(o.Gm),this.size=this.options.size,this.loading=!1}get loaderSize(){return(0,r.tuiSizeBigger)(this.size)?"m":"s"}get label(){return(0,n.tuiIsString)(this.loading)?this.loading:""}onClick(t){this.loading&&t.stopPropagation()}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["","tuiButton","","loading",""],["","tuiIconButton","","loading",""]],hostVars:3,hostBindings:function(t,i){1&t&&a.NdJ("click.capture",(function(t){return i.onClick(t)})),2&t&&(a.uIk("aria-disabled",i.loading),a.ekj("_loading",i.loading))},inputs:{size:"size",loading:"loading"},attrs:u,ngContentSelectors:c,decls:2,vars:4,consts:[["aria-live","polite","role","status",1,"t-loader",3,"inheritColor","showLoader","size","textContent"]],template:function(t,i){1&t&&(a.F$t(),a.Hsn(0),a._UZ(1,"tui-loader",0)),2&t&&(a.xp6(1),a.Q6J("inheritColor",!0)("showLoader",!!i.loading)("size",i.loaderSize)("textContent",i.label))},dependencies:[s.k],encapsulation:2,changeDetection:0}),i})()},87875:(t,i,e)=>{e.d(i,{m:()=>u});var a=e(20755),n=e(58733),r=e(64064),o=e(32790);let s=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-button-styles"],decls:0,vars:0,template:function(t,i){},styles:["[tuiButtonNew]{--t-gap: .125rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-width:100%;gap:calc(var(--t-gap) - 2 * var(--t-margin));height:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer}[tuiButtonNew]>img,[tuiButtonNew]>tui-svg,[tuiButtonNew]>tui-icon,[tuiButtonNew]>tui-avatar,[tuiButtonNew]>tui-badge,[tuiButtonNew]>[tuiBadge],[tuiButtonNew]>[tuiRadio],[tuiButtonNew]>[tuiToggle],[tuiButtonNew]>[tuiCheckbox],[tuiButtonNew]._icon-left:before,[tuiButtonNew]._icon-right:after{margin:var(--t-margin)}[tuiButtonNew]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButtonNew]>.t-loader .t-text{position:absolute}[tuiButtonNew][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=xs] tui-svg,[tuiButtonNew][data-size=xs] tui-icon,[tuiButtonNew][data-size=xs]:before{font-size:1rem}[tuiButtonNew][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=s] tui-svg,[tuiButtonNew][data-size=s] tui-icon,[tuiButtonNew][data-size=s]:not([tuiIconButton][data-appearance=icon]):before{font-size:1rem}[tuiButtonNew][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButtonNew][data-size=m]:after{margin-inline-end:-.125rem}[tuiButtonNew][data-size=l]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-padding: 0 1.25rem;--t-gap: .25rem;--t-margin: -.25rem;font:var(--tui-font-text-m);font-weight:700}[tuiButtonNew][data-size=l]:after{margin-inline-start:.25rem;margin-inline-end:-.25rem}[tuiButtonNew]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButtonNew]._loading>*,[tuiButtonNew]._loading:before,[tuiButtonNew]._loading:after{opacity:0}[tuiButtonNew]._loading>.t-loader{opacity:1}[tuiButtonNew][tuiIcons]:after{font-size:1rem}[tuiIconButton][tuiButtonNew]{--t-gap: 0;width:var(--t-size);font-size:0;padding:0}\n"],encapsulation:2,changeDetection:0}),i})(),u=(()=>{var t;class i{constructor(){this.options=(0,a.f3M)(o.Gm),this.size=this.options.size,this.nothing=(0,n.tuiWithStyles)(s),this.mode$=(0,a.f3M)(r.TUI_MODE)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=a.lG2({type:t,selectors:[["a","tuiButton",""],["button","tuiButton",""],["a","tuiIconButton",""],["button","tuiIconButton",""]],hostAttrs:["tuiButtonNew",""],hostVars:1,hostBindings:function(t,i){1&t&&a.NdJ("$.data-mode.attr",(function(){return i.mode$})),2&t&&a.uIk("data-size",i.size)},inputs:{size:"size"},features:[a._Bn([r.MODE_PROVIDER,(0,r.tuiAppearanceOptionsProvider)(o.Gm)]),a.zW0([{directive:r.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},{directive:r.TuiIconsDirective,inputs:["iconLeft","iconLeft","iconRight","iconRight"]}])]}),i})()},32790:(t,i,e)=>{e.d(i,{Gm:()=>r,O0:()=>o});var a=e(58733);const n={appearance:"primary",size:"l"},r=(0,a.tuiCreateToken)(n);function o(t){return(0,a.tuiProvideOptions)(r,t,n)}},72762:(t,i,e)=>{e.d(i,{fN:()=>o,O0:()=>s.O0}),e(21186),e(87875);var a=e(76733),n=e(64064),r=e(20755);let o=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵmod=r.oAB({type:t}),t.ɵinj=r.cJS({imports:[a.ez,n.TuiSvgModule,n.TuiLoaderModule]}),i})();var s=e(32790)},37419:(t,i,e)=>{e.d(i,{f:()=>p});var a=e(20755),n=e(72133),r=e(58733),o=e(64064),s=e(81749),u=e(17841);const c=["type","checkbox","tuiCheckbox",""];let p=(()=>{var t;class i{constructor(){this.appearance=(0,a.f3M)(o.TuiAppearanceDirective),this.options=(0,a.f3M)(u.Y2),this.resolver=(0,a.f3M)(o.TUI_ICON_RESOLVER),this.destroy$=(0,a.f3M)(r.TuiDestroyService,{self:!0}),this.el=(0,a.f3M)(a.SBq).nativeElement,this.size=this.options.size,this.control=(0,a.f3M)(n.a5,{optional:!0})}ngOnInit(){this.control?.valueChanges&&(0,r.tuiControlValue)(this.control).pipe((0,s.R)(this.destroy$)).subscribe((t=>{this.el.indeterminate=null===t}))}ngDoCheck(){this.appearance.tuiAppearance=this.options.appearance(this.el)}getIcon(t){const i=this.options.icons[t],e=(0,r.tuiIsString)(i)?i:i(this.size);return`url(${this.resolver(e)})`}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["input","type","checkbox","tuiCheckbox",""]],hostVars:8,hostBindings:function(t,i){2&t&&(a.Ikx("disabled",!i.control||i.control.disabled),a.uIk("data-size",i.size),a.Udp("--t-checked",i.getIcon("checked"))("--t-indeterminate",i.getIcon("indeterminate")),a.ekj("_readonly",!i.control))},inputs:{size:"size"},features:[a._Bn([r.TuiDestroyService]),a.zW0([{directive:o.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},r.TuiNativeValidatorDirective])],attrs:c,decls:0,vars:0,template:function(t,i){},styles:['[_nghost-%COMP%]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);width:var(--t-size);height:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background:currentColor;-webkit-mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[_nghost-%COMP%]:disabled._readonly{opacity:1}[_nghost-%COMP%]:checked:before, [_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-checked);mask-image:var(--t-checked);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate);mask-image:var(--t-indeterminate)}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}'],changeDetection:0}),i})()},17841:(t,i,e)=>{e.d(i,{Y2:()=>r,im:()=>o});var a=e(58733);const n={size:"m",appearance:t=>t.checked||t.indeterminate?"primary":"whiteblock",icons:{checked:t=>"m"===t?"tuiIconCheckLarge":"tuiIconCheck",indeterminate:t=>"m"===t?"tuiIconMinusLarge":"tuiIconMinus"}},r=(0,a.tuiCreateToken)(n);function o(t){return(0,a.tuiProvideOptions)(r,t,n)}},42770:(t,i,e)=>{e.d(i,{xl:()=>n,im:()=>r.im}),e(37419);var a=e(20755);let n=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({}),i})();var r=e(17841)},69409:(t,i,e)=>{e.d(i,{v:()=>h});var a=e(20755),n=e(58733),r=e(64064),o=e(72762),s=e(42770),u=e(35180),c=e(39854);let p=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-chip"],decls:0,vars:0,template:function(t,i){},styles:["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-width:100%;gap:calc(var(--t-gap) - 2 * var(--t-margin));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);height:var(--t-size);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiToggle],[tuiChip]>[tuiToggle],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip._icon-left:before,[tuiChip]._icon-left:before,tui-chip._icon-right:after,[tuiChip]._icon-right:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: 1.25rem;border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=s],[tuiChip][data-size=s]{--t-padding: 0 .625rem;--t-size: var(--tui-height-s)}tui-chip[data-size=s]>[tuiIconButton],[tuiChip][data-size=s]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=s]>img,[tuiChip][data-size=s]>img,tui-chip[data-size=s] tui-avatar,[tuiChip][data-size=s] tui-avatar{margin-inline-start:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img{width:1.5rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;width:100%;height:100%;margin:0}\n"],encapsulation:2,changeDetection:0}),i})();var d=e(38826);let h=(()=>{var t;class i{constructor(){this.options=(0,a.f3M)(d.q4),this.size=this.options.size,this.nothing=(0,n.tuiWithStyles)(p)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=a.lG2({type:t,selectors:[["tui-chip"],["","tuiChip",""]],hostVars:1,hostBindings:function(t,i){2&t&&a.uIk("data-size",i.size)},inputs:{size:"size"},features:[a._Bn([(0,r.tuiAppearanceOptionsProvider)(d.q4),(0,u.p5)({size:"s"}),(0,s.im)({size:"s"}),(0,c.tuiAvatarOptionsProvider)({size:"xs"}),(0,o.O0)({size:"xs",appearance:"icon"})]),a.zW0([{directive:r.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},{directive:r.TuiIconsDirective,inputs:["iconLeft","iconLeft","iconRight","iconRight"]}])]}),i})()},38826:(t,i,e)=>{e.d(i,{q4:()=>a});const a=(0,e(58733).tuiCreateToken)({appearance:"neutral",size:"s"})},35180:(t,i,e)=>{e.d(i,{YM:()=>n,p5:()=>r.p5}),e(27316);var a=e(20755);let n=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({}),i})();var r=e(40642)},27316:(t,i,e)=>{e.d(i,{p:()=>c});var a=e(20755),n=e(72133),r=e(58733),o=e(64064),s=e(40642);const u=["type","checkbox","tuiToggle",""];let c=(()=>{var t;class i{constructor(){this.appearance=(0,a.f3M)(o.TuiAppearanceDirective),this.resolver=(0,a.f3M)(o.TUI_ICON_RESOLVER),this.options=(0,a.f3M)(s.oO),this.el=(0,a.f3M)(a.SBq).nativeElement,this.size=this.options.size,this.showIcons=this.options.showIcons,this.control=(0,a.f3M)(n.a5,{optional:!0})}ngDoCheck(){this.appearance.tuiAppearance=this.options.appearance(this.el)}get icon(){const{options:t,resolver:i,size:e}=this;return`url(${i((0,r.tuiIsString)(t.icon)?t.icon:t.icon(e))})`}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["input","type","checkbox","tuiToggle",""]],hostVars:8,hostBindings:function(t,i){2&t&&(a.Ikx("disabled",!i.control||i.control.disabled),a.uIk("data-size",i.size),a.Udp("--t-mask",i.icon),a.ekj("_readonly",!i.control)("_icons",i.showIcons))},inputs:{size:"size",showIcons:"showIcons"},features:[a.zW0([{directive:o.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},r.TuiNativeValidatorDirective])],attrs:u,decls:0,vars:0,template:function(t,i){},styles:['[_nghost-%COMP%]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:3rem;height:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0}[data-appearance=secondary][_nghost-%COMP%], [data-appearance=secondary][_nghost-%COMP%]:invalid{color:var(--tui-text-01-night)}[data-size=s][_nghost-%COMP%]{height:1rem;width:2rem}[data-size=s][_nghost-%COMP%]:before{width:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[data-size=s][_nghost-%COMP%]:after{width:1rem;box-shadow:-2rem 0 0 .25rem currentColor}[data-size=s][_nghost-%COMP%]:checked:after{transform:scale(.5) translate(2rem)}[_nghost-%COMP%]:checked:before{transform:none}[_nghost-%COMP%]:checked:after{transform:scale(.5) translate(3rem)}[_nghost-%COMP%]:disabled._readonly{opacity:1}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;height:100%;width:1.5rem}[_nghost-%COMP%]:before{display:none;background:currentColor;-webkit-mask:var(--t-mask) no-repeat center;mask:var(--t-mask) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[_nghost-%COMP%]:after{right:0;border-radius:100%;transform:scale(.5);box-shadow:-3rem 0 0 .25rem currentColor}._icons[_nghost-%COMP%]:before{display:block}._icons[_nghost-%COMP%]:after{box-shadow:inset 0 0 0 .25rem var(--tui-clear-active),-3rem 0 0 .25rem currentColor}._icons[data-size=s][_nghost-%COMP%]:after{box-shadow:inset 0 0 0 .125rem var(--tui-clear-active),-2rem 0 0 .25rem currentColor}'],changeDetection:0}),i})()},40642:(t,i,e)=>{e.d(i,{oO:()=>r,p5:()=>o});var a=e(58733);const n={showIcons:!0,size:"m",icon:"tuiIconCheck",appearance:t=>t.checked?"primary":"secondary"},r=(0,a.tuiCreateToken)(n);function o(t){return(0,a.tuiProvideOptions)(r,t,n)}}}]);