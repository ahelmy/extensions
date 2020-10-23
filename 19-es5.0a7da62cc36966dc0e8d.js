!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{rk6C:function(e,o,i){"use strict";i.r(o),i.d(o,"ComponentSidenavModule",(function(){return I}));var c=i("sEIs"),a=i("M0ag"),r=i("YtkY"),s=i("EM62"),p=i("HOZh"),d=i("lQ7A"),l=i("nKqi"),m=i("2kYt"),g=function(n){return[n]};function u(n,e){if(1&n){var t=s.Ub();s.Tb(0,"a",5,6),s.ac("click",(function(){return s.zc(t),s.ec(2).navChange.emit()})),s.Mc(2),s.Sb()}if(2&n){var o=e.$implicit,i=s.vc(1);s.mc("routerLink",s.pc(3,g,"/components/"+o.id)),s.Cb("tabindex",i.isActive?0:-1),s.Bb(2),s.Oc(" ",o.name," ")}}function f(n,e){if(1&n&&(s.Rb(0),s.Tb(1,"div",3),s.Mc(2),s.Sb(),s.Kc(3,u,3,5,"a",4),s.Qb()),2&n){var t=e.$implicit;s.Bb(2),s.Nc(t.title),s.Bb(1),s.mc("ngForOf",t.children)}}var v,b,h=[{title:"Basic",children:[{id:"alert",name:"Alert",summary:"Provide contextual feedback messages for typical user actions."},{id:"button",name:"Button",summary:"Provide a material button loading directive."},{id:"checkbox-group",name:"Checkbox Group",summary:"Allows the user to create a set of checkbox with select all."},{id:"color-picker",name:"Color Picker",summary:"An extra input to select color enhanced by the ngx-color."},{id:"data-grid",name:"Data Grid",summary:"A powerful grid for material table."},{id:"loader",name:"Loader",summary:"An easier loading component wrap with progress bar and spinner."},{id:"dialog",name:"Dialog",summary:"A configurable modal to show alert and confirmation."},{id:"popover",name:"Popover",summary:"A floating panel containing html content."},{id:"progress",name:"Progress",summary:"A linear progress indicator with Bootstrap style."},{id:"select",name:"Select",summary:"An ng-select wrapper to be used in the form field."},{id:"split-pane",name:"Split Pane",summary:"An component for creating multi-view layouts."}]},{title:"Experimental",children:[{id:"text3d",name:"Text 3D",summary:"Experimental component for 3d text."}]}],x=((v=function(){function e(){n(this,e),this.navChange=new s.o,this.menus=h}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(n){return new(n||v)},v.\u0275cmp=s.Hb({type:v,selectors:[["app-component-nav"]],outputs:{navChange:"navChange"},decls:4,vars:1,consts:[[1,"docs-component-viewer-nav"],[1,"docs-component-viewer-nav-content"],[4,"ngFor","ngForOf"],[1,"nav-item-title"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click"],["routerLinkActiveInstance","routerLinkActive"]],template:function(n,e){1&n&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"mat-nav-list"),s.Kc(3,f,4,2,"ng-container",2),s.Sb(),s.Sb(),s.Sb()),2&n&&(s.Bb(3),s.mc("ngForOf",e.menus))},directives:[l.c,m.s,l.a,c.i,c.h],styles:[".docs-component-viewer-nav[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.docs-component-viewer-nav-content[_ngcontent-%COMP%]{width:240px;height:calc(100vh - 56px);overflow:auto}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0 0 5px;padding:0;overflow:hidden}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin:0;padding:5px 15px 5px 20px}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none}.nav-item-title[_ngcontent-%COMP%]{padding:0 16px;margin:16px 0 8px;font-size:80%}"]}),v),y=i("5ztx"),w=i("PBFl"),O=i("GAih"),S=i("bFHC"),C=((b=function(){function e(t){n(this,e),this._componentPageTitle=t,this.toggleSidenav=new s.o}return t(e,[{key:"getTitle",value:function(){return this._componentPageTitle.title}}]),e}()).\u0275fac=function(n){return new(n||b)(s.Nb(y.a))},b.\u0275cmp=s.Hb({type:b,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:6,vars:1,consts:[[1,"component-page-header"],["mat-button","","fxHide.gt-sm","",1,"sidenav-toggle",3,"click"]],template:function(n,e){1&n&&(s.Tb(0,"header",0),s.Tb(1,"button",1),s.ac("click",(function(){return e.toggleSidenav.emit()})),s.Tb(2,"mat-icon"),s.Mc(3,"menu"),s.Sb(),s.Sb(),s.Tb(4,"h1"),s.Mc(5),s.Sb(),s.Sb()),2&n&&(s.Bb(5),s.Oc("",e.getTitle()," "))},directives:[w.b,O.a,S.a],styles:[".component-page-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:24px}@media (max-width:959px){.component-page-header[_ngcontent-%COMP%]{padding-left:0}}.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;padding:28px 8px;margin:0;font-size:20px;color:#fff;outline:none}@media (max-width:959px){.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:24px 8px;font-size:20px}}.sidenav-toggle[_ngcontent-%COMP%]{padding:0;margin:8px;min-width:64px}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:64px;width:64px;line-height:64px;color:#fff}"]}),b);function k(n,e){1&n&&s.Ob(0,"app-component-nav")}var M,P=((M=function(){function e(t,o){var i=this;n(this,e),this._router=t,this.isExtraScreenSmall=o.observe("(max-width: 720px)").pipe(Object(r.a)((function(n){return n.matches}))),this.isScreenSmall=o.observe("(max-width: 959px)").pipe(Object(r.a)((function(n){return n.matches}))),this._router.events.subscribe((function(n){if(n instanceof c.c){var e=i._router.parseUrl(i._router.url);e.fragment&&setTimeout((function(){var n=document.querySelector("#"+e.fragment);n&&n.scrollIntoView(!0)}))}}))}return t(e,[{key:"toggleSidenav",value:function(n){return n.toggle()}}]),e}()).\u0275fac=function(n){return new(n||M)(s.Nb(c.f),s.Nb(p.a))},M.\u0275cmp=s.Hb({type:M,selectors:[["app-component-sidenav"]],decls:13,vars:11,consts:[[1,"docs-component-viewer-sidenav-container"],["role","navigation",1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],["sidenav",""],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[4,"ngIf"]],template:function(n,e){if(1&n){var t=s.Ub();s.Tb(0,"mat-sidenav-container",0),s.Tb(1,"mat-sidenav",1,2),s.fc(3,"async"),s.fc(4,"async"),s.Ob(5,"app-component-nav"),s.Sb(),s.Tb(6,"div",3),s.Tb(7,"component-page-header",4),s.ac("toggleSidenav",(function(){s.zc(t);var n=s.vc(2);return e.toggleSidenav(n)})),s.Sb(),s.Tb(8,"div",5),s.Tb(9,"main",6),s.Kc(10,k,1,0,"app-component-nav",7),s.fc(11,"async"),s.Ob(12,"router-outlet"),s.Sb(),s.Sb(),s.Sb(),s.Sb()}2&n&&(s.Bb(1),s.mc("opened",!1)("mode",s.gc(3,5,e.isScreenSmall)?"over":"side")("fixedInViewport",s.gc(4,7,e.isScreenSmall))("fixedTopGap",56),s.Bb(9),s.mc("ngIf",!1===s.gc(11,9,e.isScreenSmall)))},directives:[d.b,d.a,x,C,m.t,c.k],pipes:[m.b],styles:["app-component-sidenav{display:flex;flex-direction:column;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-inner-content router-outlet+*{flex-grow:1;overflow:auto}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}.mat-list-base{padding-top:0}.docs-component-viewer-nav-content .mat-nav-list .mat-list-item .mat-list-item-content{padding-left:25px}@media (max-width:959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{box-sizing:border-box;margin:0;max-height:none}}@media (max-width:720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}"],encapsulation:2}),M),_=i("HM3f"),T=function(n){return[n]};function A(n,e){if(1&n&&(s.Tb(0,"a",5),s.Tb(1,"div",6),s.Tb(2,"div",7),s.Mc(3),s.Sb(),s.Tb(4,"div",8),s.Mc(5),s.Sb(),s.Sb(),s.Sb()),2&n){var t=e.$implicit;s.mc("routerLink",s.pc(3,T,"/components/"+t.id)),s.Bb(3),s.Nc(t.name),s.Bb(2),s.Nc(t.summary)}}function B(n,e){if(1&n&&(s.Tb(0,"div",1),s.Tb(1,"h2",2),s.Mc(2),s.Sb(),s.Tb(3,"div",3),s.Kc(4,A,6,5,"a",4),s.Sb(),s.Sb()),2&n){var t=e.$implicit;s.Bb(2),s.Nc(t.title),s.Bb(2),s.mc("ngForOf",t.children)}}var F,z,L=[{path:"",component:P,children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",component:(F=function(){function e(t,o){n(this,e),this._componentPageTitle=t,this._route=o,this.list=h}return t(e,[{key:"ngOnInit",value:function(){var n=this;this.params=Object(_.a)(this._route.pathFromRoot.map((function(n){return n.params})),Object.assign),this.routeParamSubscription=this.params.subscribe((function(e){n._componentPageTitle.title="components"}))}},{key:"ngOnDestroy",value:function(){}}]),e}(),F.\u0275fac=function(n){return new(n||F)(s.Nb(y.a),s.Nb(c.a))},F.\u0275cmp=s.Hb({type:F,selectors:[["app-component-category-list"]],decls:1,vars:1,consts:[["class","docs-component-category-section",4,"ngFor","ngForOf"],[1,"docs-component-category-section"],[1,"docs-component-category-section-title"],[1,"docs-component-category-list"],["class","docs-component-category-list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"docs-component-category-list-item",3,"routerLink"],[1,"docs-component-category-list-card"],[1,"docs-component-category-list-card-title"],[1,"docs-component-category-list-card-summary"]],template:function(n,e){1&n&&s.Kc(0,B,5,2,"div",0),2&n&&s.mc("ngForOf",e.list)},directives:[m.s,c.i],styles:[".docs-component-category-section-title[_ngcontent-%COMP%]{margin-bottom:0;font-size:24px;font-weight:500;text-align:center}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-flex;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:focus, .docs-component-category-list-item[_ngcontent-%COMP%]:hover{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{width:100%}.docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:15px;font-size:20px;font-weight:500}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 15px 15px;font-size:15px}"]}),F)}]},{path:"",loadChildren:function(){return i.e(20).then(i.bind(null,"QkXk")).then((function(n){return n.ComponentsModule}))}},{path:"**",redirectTo:"categories"}]}],I=((z=function e(){n(this,e)}).\u0275mod=s.Lb({type:z}),z.\u0275inj=s.Kb({factory:function(n){return new(n||z)},imports:[[a.c,c.j.forChild(L)]]}),z)}}])}();