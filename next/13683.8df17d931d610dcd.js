(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13683,69841,60814],{77510:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(20755),s=i(7953),r=i(58733),a=i(39854),o=i(81749),u=i(33946);const d=["*"];let l=(()=>{var e;class t{constructor(){this.el=(0,n.f3M)(n.SBq).nativeElement,this.sub=(0,n.f3M)(s.ax).pipe((0,r.tuiZonefree)((0,n.f3M)(n.R0b)),(0,o.R)((0,n.f3M)(r.TuiDestroyService,{self:!0}))).subscribe((()=>this.refresh())),this.size="s",this.activeItemIndex=0,this.activeItemIndexChange=new n.vpe}ngOnChanges(){this.refresh()}update(e){e!==this.activeItemIndex&&(this.activeItemIndex=e,this.activeItemIndexChange.emit(e),this.refresh())}get left(){const e=this.activeElement;return(0,r.tuiIsHTMLElement)(e)?e.offsetLeft:0}get width(){return this.activeElement?.clientWidth||0}get activeElement(){return this.el.children.item(this.activeItemIndex)}refresh(){this.el.style.setProperty("--t-left",(0,r.tuiPx)(this.left)),this.el.style.setProperty("--t-width",(0,r.tuiPx)(this.width))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["tui-segmented"]],hostVars:1,hostBindings:function(e,t){2&e&&n.uIk("data-size",t.size)},inputs:{size:"size",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},standalone:!0,features:[n._Bn([r.TuiDestroyService,s.ax,(0,a.tuiBadgeNotificationOptionsProvider)({size:"s"})]),n.TTD,n.jDz,n.zW0([u.T])],ngContentSelectors:d,decls:1,vars:0,template:function(e,t){1&e&&(n.F$t(),n.Hsn(0))},styles:['tui-segmented{position:relative;display:flex;box-sizing:border-box;isolation:isolate;color:var(--tui-clear);border:.125rem solid transparent}tui-segmented[data-size=s]{--t-padding: .625rem;--t-gap: .5rem;--t-margin: -.125rem;height:var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-s)}tui-segmented[data-size=s]>*:before,tui-segmented[data-size=s]>*:after,tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;height:var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-s)}tui-segmented[data-size=l]{--t-padding: 1.125rem;--t-gap: 1rem;--t-margin: -.375rem;height:var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-m);border-width:.25rem}tui-segmented[data-size=l]:after{box-shadow:0 0 0 .25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-01);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*,tui-segmented>a:before,tui-segmented>button:before,tui-segmented>label:before,tui-segmented>label>input:not([tuiRadio]):before,tui-segmented>a:after,tui-segmented>button:after,tui-segmented>label:after,tui-segmented>label>input:not([tuiRadio]):after{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-focus);outline-offset:-.125rem}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:0;left:0;width:100%;height:100%}tui-segmented:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";z-index:-1;border-radius:inherit;background:currentColor;box-shadow:0 0 0 .125rem}tui-segmented:before{transition-property:left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);height:100%;width:var(--t-width);border-radius:inherit;background:currentColor;color:var(--tui-base-01);box-shadow:0 .25rem 1.25rem #0000001a}\n'],encapsulation:2,changeDetection:0}),t})()},33946:(e,t,i)=>{i.d(t,{T:()=>h});var n=i(20755),s=i(72133),r=i(42932),a=i(58733),o=i(84787),u=i(30453),d=i(81749),l=i(77510);let h=(()=>{var e;class t{constructor(){this.controls=a.EMPTY_QUERY,this.links=a.EMPTY_QUERY,this.elements=a.EMPTY_QUERY,this.destroy$=(0,n.f3M)(a.TuiDestroyService,{self:!0}),this.component=(0,n.f3M)(l.A),this.el=(0,n.f3M)(n.SBq).nativeElement}ngAfterContentInit(){(0,a.tuiQueryListChanges)(this.controls).pipe((0,o.w)((()=>this.controls.last?.valueChanges||u.E)),(0,d.R)(this.destroy$)).subscribe((()=>{this.update(this.el.querySelector(":checked"))}))}ngAfterContentChecked(){this.links.length&&this.update(this.elements.get(this.linkIndex)?.nativeElement||null)}update(e){const t=this.getIndex(e);t>=0&&this.component.update(t)}get linkIndex(){return this.links.toArray().findIndex((e=>e.isActive))}getIndex(e){return Array.from(this.el.children).findIndex((t=>t.contains(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵdir=n.lG2({type:e,selectors:[["tui-segmented",5,"tui-segmented"]],contentQueries:function(e,t,i){if(1&e&&(n.Suo(i,s.a5,5),n.Suo(i,r.Od,4),n.Suo(i,r.Od,4,n.SBq)),2&e){let e;n.iGM(e=n.CRH())&&(t.controls=e),n.iGM(e=n.CRH())&&(t.links=e),n.iGM(e=n.CRH())&&(t.elements=e)}},hostBindings:function(e,t){1&e&&n.NdJ("click",(function(e){return t.update(e.target)}))},standalone:!0}),t})()}}]);