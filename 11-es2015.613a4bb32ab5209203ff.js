(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CSwm:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;alert-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">type</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  dismissible = <span class="hljs-literal">false</span>;\n  elevation = <span class="hljs-number">3</span>;\n\n  onClosed(e: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-built_in">console</span>.log(e);\n  }\n}\n'},FCM7:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Alert configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;dismissible&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Dismissible<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Elevation:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;elevation&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-alert</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">elevation</span>]=<span class="hljs-string">&quot;elevation&quot;</span> [<span class="hljs-attr">dismissible</span>]=<span class="hljs-string">&quot;dismissible&quot;</span>\n           (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;onClosed($event)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> This alert needs your attention, but it&#x27;s not super important.\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-alert</span>&gt;</span>\n'},MsnC:function(s,n,a){"use strict";a.r(n),a.d(n,"AlertOverviewComponent",(function(){return j})),a.d(n,"AlertApiComponent",(function(){return d})),a.d(n,"AlertModule",(function(){return f}));var t=a("sEIs"),l=a("M0ag"),e=a("EM62"),p=a("F1o0"),o=a("nIj0"),c=a("+Tre"),i=a("v9BS"),r=a("M7dB");const m={title:"Configurable alert",component:(()=>{class s{constructor(){this.type="info",this.dismissible=!1,this.elevation=3}onClosed(s){console.log(s)}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Hb({type:s,selectors:[["alert-example"]],decls:27,vars:7,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],[3,"ngModel","labelPosition","ngModelChange"],["min","0","max","24","thumbLabel","",3,"ngModel","ngModelChange"],[3,"type","elevation","dismissible","closed"]],template:function(s,n){1&s&&(e.Tb(0,"h2"),e.Lc(1,"Alert configuration"),e.Sb(),e.Tb(2,"section"),e.Tb(3,"label"),e.Lc(4,"Type:"),e.Sb(),e.Tb(5,"mat-radio-group",0),e.bc("ngModelChange",(function(s){return n.type=s})),e.Tb(6,"mat-radio-button",1),e.Lc(7,"Info"),e.Sb(),e.Tb(8,"mat-radio-button",2),e.Lc(9,"Success"),e.Sb(),e.Tb(10,"mat-radio-button",3),e.Lc(11,"Warning"),e.Sb(),e.Tb(12,"mat-radio-button",4),e.Lc(13,"Danger"),e.Sb(),e.Sb(),e.Sb(),e.Tb(14,"section"),e.Tb(15,"mat-checkbox",5),e.bc("ngModelChange",(function(s){return n.dismissible=s})),e.Lc(16,"Dismissible"),e.Sb(),e.Sb(),e.Tb(17,"section"),e.Tb(18,"label"),e.Lc(19,"Elevation:"),e.Sb(),e.Tb(20,"mat-slider",6),e.bc("ngModelChange",(function(s){return n.elevation=s})),e.Sb(),e.Sb(),e.Tb(21,"h2"),e.Lc(22,"Result"),e.Sb(),e.Tb(23,"mtx-alert",7),e.bc("closed",(function(s){return n.onClosed(s)})),e.Tb(24,"strong"),e.Lc(25,"Heads up!"),e.Sb(),e.Lc(26," This alert needs your attention, but it's not super important.\n"),e.Sb()),2&s&&(e.Bb(5),e.nc("ngModel",n.type),e.Bb(10),e.nc("ngModel",n.dismissible)("labelPosition","before"),e.Bb(5),e.nc("ngModel",n.elevation),e.Bb(3),e.nc("type",n.type)("elevation",n.elevation)("dismissible",n.dismissible))},directives:[p.b,o.i,o.k,p.a,c.a,i.a,r.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}"]}),s})(),files:[{file:"app.component.html",content:a("FCM7"),filecontent:a("acQs")},{file:"app.component.ts",content:a("CSwm"),filecontent:a("bjvt")},{file:"app.component.scss",content:a("oMC2"),filecontent:a("yKdx")}]};var h=a("2kYt"),u=a("Pg5x");function g(s,n){if(1&s&&(e.Rb(0),e.Ob(1,"example-viewer",2),e.Qb()),2&s){const s=n.$implicit;e.Bb(1),e.nc("exampleData",s)}}function b(s,n){if(1&s&&(e.Rb(0),e.Jc(1,g,2,1,"ng-container",1),e.Qb()),2&s){const s=n.ngIf;e.Bb(1),e.nc("ngForOf",s.examples)}}let j=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(e.Nb(t.a))},s.\u0275cmp=e.Hb({type:s,selectors:[["app-alert-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(e.Jc(0,b,2,1,"ng-container",0),e.gc(1,"async")),2&s&&e.nc("ngIf",e.hc(1,1,n.route.data))},directives:[h.o,h.n,u.a],pipes:[h.b],encapsulation:2}),s})(),d=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(e.Nb(t.a))},s.\u0275cmp=e.Hb({type:s,selectors:[["app-alert-api"]],decls:1,vars:0,template:function(s,n){1&s&&e.Lc(0,"Coming soon\n")},encapsulation:2}),s})(),f=(()=>{class s{}return s.\u0275mod=e.Lb({type:s}),s.\u0275inj=e.Kb({factory:function(n){return new(n||s)},imports:[[l.b,t.i.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:j,pathMatch:"full",data:{examples:[m]}},{path:"api",component:d,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),s})()},acQs:function(s,n,a){"use strict";a.r(n),n.default='<h2>Alert configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="dismissible" [labelPosition]="\'before\'">Dismissible</mat-checkbox>\n</section>\n\n<section>\n  <label>Elevation:</label>\n  <mat-slider min="0" max="24" thumbLabel [(ngModel)]="elevation"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-alert [type]="type" [elevation]="elevation" [dismissible]="dismissible"\n           (closed)="onClosed($event)">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</mtx-alert>\n'},bjvt:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'alert-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type = 'info';\n  dismissible = false;\n  elevation = 3;\n\n  onClosed(e: any) {\n    console.log(e);\n  }\n}\n"},oMC2:function(s,n){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},yKdx:function(s,n,a){"use strict";a.r(n),n.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n"}}]);