(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57006,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323,39272,9551,65033,72226,1001,35402],{10882:(t,e,a)=>{a.d(e,{Fb:()=>i,UR:()=>n,bM:()=>s});var r=a(58733);const n={currency:null,currencyAlign:"right",sign:"negative-only"},s=(0,r.tuiCreateToken)(n);function i(t){return(0,r.tuiProvideOptions)(s,t,n)}},61386:(t,e,a)=>{a.d(e,{E:()=>l});var r=a(20755),n=a(93517),s=a(58733),i=a(64064),c=a(92425),g=a(10882);let l=(()=>{var t;class e{constructor(){this.options=(0,r.f3M)(g.bM),this.format=(0,r.f3M)(i.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,a=this.options.currencyAlign){return this.format.pipe((0,c.U)((r=>{const c=(0,n.$v)(t,this.options.sign),g=(0,n.BP)(e),l=(0,i.tuiFormatNumber)(Math.abs(t),{...r,precision:Number.isNaN(r.precision)?2:r.precision}),o=g?.length>1||"right"===a?s.CHAR_NO_BREAK_SPACE:"";return"right"===a?`${c}${l}${o}${g}`:`${c}${g}${o}${l}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=r.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()},39272:(t,e,a)=>{a.d(e,{P:()=>i});var r=a(58733),n=a(20755);let s=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-progress-segmented"],decls:0,vars:0,template:function(t,e){},styles:["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],encapsulation:2,changeDetection:0}),e})(),i=(()=>{var t;class e{constructor(){this.segments=1,this.nothing=(0,r.tuiWithStyles)(s)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["","tuiProgressBar","","segments",""]],hostAttrs:[1,"_segmented"],hostVars:3,hostBindings:function(t,e){2&t&&(n.uIk("new",""),n.Udp("--t-segment-width",1/e.segments))},inputs:{segments:"segments"}}),e})()}}]);