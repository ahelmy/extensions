(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{QkXk:function(e,t,n){"use strict";n.r(t),n.d(t,"ComponentsModule",(function(){return k}));var i=n("sEIs"),o=n("M0ag"),s=n("ZTXN"),c=n("EM62"),a=n("5ztx"),r=n("KZIX"),l=n("xVbo"),p=n("3mST"),d=n("bwdy");let u=(()=>{class e{constructor(e){this.router=e,this.subscriptions=new d.a,this.navigationFocusRequests=[],this.skipLinkFocusRequests=[],this.navigationEndEvents=this.router.events.pipe(Object(l.a)(e=>e instanceof i.c)),this.softNavigations=this.navigationEndEvents.pipe(Object(p.a)(1)),this.subscriptions.add(this.softNavigations.subscribe(()=>{this.router.url.split("#")[1]||setTimeout(()=>{this.navigationFocusRequests.length&&this.navigationFocusRequests[this.navigationFocusRequests.length-1].focus({preventScroll:!0})},100)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}requestFocusOnNavigation(e){this.navigationFocusRequests.push(e)}relinquishFocusOnNavigation(e){this.navigationFocusRequests.splice(this.navigationFocusRequests.indexOf(e),1)}requestSkipLinkFocus(e){this.skipLinkFocusRequests.push(e),this.setSkipLinkHref(e)}relinquishSkipLinkFocus(e){this.skipLinkFocusRequests.splice(this.skipLinkFocusRequests.indexOf(e),1),this.setSkipLinkHref(this.skipLinkFocusRequests[this.skipLinkFocusRequests.length-1])}setSkipLinkHref(e){const t=this.router.url.split("#")[0];this.skipLinkHref=e?`${t}#${e.id}`:null}getSkipLinkHref(){return this.skipLinkHref}isNavigationWithinComponentView(e,t){const n=/(components|cdk)\/([^\/]+)/,i=e.match(n),o=t.match(n);return e&&t&&i&&o&&i[0]===o[0]&&i[1]===o[1]}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(i.f))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),h=0,v=(()=>{class e{constructor(e,t){this.el=e,this.navigationFocusService=t,this.tabindex="-1",this.outline="none",e.nativeElement.id||(e.nativeElement.id="skip-link-target-"+h++),this.navigationFocusService.requestFocusOnNavigation(e.nativeElement),this.navigationFocusService.requestSkipLinkFocus(e.nativeElement)}ngOnDestroy(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(c.l),c.Nb(u))},e.\u0275dir=c.Ib({type:e,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(e,t){2&e&&(c.Wb("tabindex",t.tabindex),c.Hc("outline",t.outline))}}),e})();var m=n("2kYt");function b(e,t){if(1&e&&(c.Tb(0,"a",4,5),c.Mc(2),c.Sb()),2&e){const e=t.$implicit,n=c.vc(1),i=c.ec();c.mc("routerLink",i.componentId+"/"+e.toLowerCase())("active",n.isActive),c.Bb(2),c.Nc(e)}}const g=[{path:"",component:(()=>{class e{constructor(e,t,n){this.router=t,this._componentPageTitle=n,this.sections=new Set(["overview","api"]),this._destroyed=new s.a,this.componentId="",e.parent&&[e.params].push(e.parent.params),this.router.events.subscribe(e=>{e instanceof i.c&&(this.componentId=e.url.split("/")[2],this._componentPageTitle.title=this.componentId)})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(i.a),c.Nb(i.f),c.Nb(a.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-component-viewer"]],decls:5,vars:1,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"nav",1),c.Kc(2,b,3,3,"a",2),c.Sb(),c.Tb(3,"div",3),c.Ob(4,"router-outlet"),c.Sb(),c.Sb()),2&e&&(c.Bb(2),c.mc("ngForOf",t.sections))},directives:[r.d,v,m.s,i.k,i.i,r.c,i.h],styles:["app-component-viewer{font-weight:400;padding:20px 50px}@media (max-width:599px){app-component-viewer{padding-left:15px;padding-right:15px}}.docs-component-viewer-section-tab{text-transform:uppercase}.docs-component-viewer-tabbed-content{margin-bottom:25px}.docs-component-viewer-content{position:relative;min-height:500px}.docs-component-viewer-content component-api,.docs-component-viewer-content component-overview{display:flex;align-items:flex-start}@media (max-width:959px){.docs-component-viewer-content component-api,.docs-component-viewer-content component-overview{flex-direction:column}}.docs-component-viewer-content table-of-contents{top:35px;position:-webkit-sticky;position:sticky}@media (max-width:959px){.docs-component-viewer-content table-of-contents{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content{flex-grow:1;width:100%}.docs-component-api,.docs-component-overview{width:80%;display:inline-flex}@media (max-width:959px){.docs-component-api,.docs-component-overview{width:100%;margin-right:0}}"],encapsulation:2}),e})(),children:[{path:"alert",loadChildren:()=>n.e(13).then(n.bind(null,"MsnC")).then(e=>e.AlertModule)},{path:"button",loadChildren:()=>n.e(14).then(n.bind(null,"c8H9")).then(e=>e.ButtonModule)},{path:"checkbox-group",loadChildren:()=>Promise.all([n.e(1),n.e(8)]).then(n.bind(null,"tusj")).then(e=>e.CheckboxGroupModule)},{path:"color-picker",loadChildren:()=>n.e(15).then(n.bind(null,"daqg")).then(e=>e.ColorPickerModule)},{path:"data-grid",loadChildren:()=>Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"O/y1")).then(e=>e.DataGridModule)},{path:"dialog",loadChildren:()=>Promise.all([n.e(1),n.e(10)]).then(n.bind(null,"uHWN")).then(e=>e.DialogModule)},{path:"loader",loadChildren:()=>n.e(11).then(n.bind(null,"YOUH")).then(e=>e.LoaderModule)},{path:"popover",loadChildren:()=>n.e(16).then(n.bind(null,"ZJxj")).then(e=>e.PopoverModule)},{path:"progress",loadChildren:()=>n.e(12).then(n.bind(null,"3pZ6")).then(e=>e.ProgressModule)},{path:"select",loadChildren:()=>n.e(9).then(n.bind(null,"/Bb9")).then(e=>e.SelectModule)},{path:"split-pane",loadChildren:()=>n.e(17).then(n.bind(null,"Q3O8")).then(e=>e.SplitPaneModule)},{path:"text3d",loadChildren:()=>n.e(18).then(n.bind(null,"CE3K")).then(e=>e.Text3dModule)}]}];let k=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[o.c,i.j.forChild(g)]]}),e})()}}]);