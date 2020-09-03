!function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function a(n,a,t){return a&&s(n.prototype,a),t&&s(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+APe":function(n,s){n.exports='<span class="hljs-selector-class">.mat-raised-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5em</span>;\n}\n'},"3X/B":function(n,s,a){"use strict";a.r(s),s.default="div {\n  padding: 1em;\n}\n"},"3iNv":function(n,s,a){"use strict";a.r(s),s.default=".mat-raised-button {\n  margin: 0 .5em;\n}\n"},"4O52":function(n,s,a){"use strict";a.r(s),s.default='<button mat-raised-button color="warn" (click)="alert()">Alert</button>\n<button mat-raised-button color="accent" (click)="confirm()">Confirm</button>\n<button mat-raised-button color="primary" (click)="open()">Open Dialog</button>\n'},B4Yo:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  alert() {\n    <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`My name is Zongbin!`</span>, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Glad to meet you!`</span>);\n    });\n  }\n\n  confirm() {\n    <span class="hljs-built_in">this</span>.mtxDialog.confirm(\n      <span class="hljs-string">`What&#x27;s your name?`</span>,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Hi, Zongbin!`</span>);\n      },\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`I don&#x27;t know.`</span>);\n      }\n    );\n  }\n\n  open() {\n    <span class="hljs-built_in">this</span>.mtxDialog.open({\n      title: <span class="hljs-string">&#x27;This is the title&#x27;</span>,\n      description: <span class="hljs-string">&#x27;You can write some messages here.&#x27;</span>,\n      buttons: [\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n          text: <span class="hljs-string">&#x27;CLOSE&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Close button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          text: <span class="hljs-string">&#x27;VIEW&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click View button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;warn&#x27;</span>,\n          text: <span class="hljs-string">&#x27;OK&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Ok button.`</span>);\n          },\n        },\n      ],\n    });\n  }\n}\n'},BA9y:function(n,s,a){"use strict";a.r(s),s.default="import { Component, Inject } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\nimport { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  animal: string;\n\n  constructor(private mtxDialog: MtxDialog) {}\n\n  openOriginal() {\n    const dialogRef = this.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      width: '550px',\n      data: { name: 'nzbin', animal: 'panda' },\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview',\n  templateUrl: './dialog.html',\n})\nexport class DialogOverviewExampleComponent {\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,\n    @Inject(MAT_DIALOG_DATA) public data: any\n  ) {}\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n}\n"},Lo5F:function(n,s,a){"use strict";a.r(s),s.default='<button mat-raised-button (click)="openOriginal()">Open Original Dialog</button>\n\n<div *ngIf="animal">\n  You chose: <strong>{{animal}}</strong>\n</div>\n'},PheJ:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  constructor(private mtxDialog: MtxDialog) {}\n\n  alert() {\n    this.mtxDialog.alert(`My name is Zongbin!`, () => {\n      this.mtxDialog.alert(`Glad to meet you!`);\n    });\n  }\n\n  confirm() {\n    this.mtxDialog.confirm(\n      `What's your name?`,\n      () => {\n        this.mtxDialog.alert(`Hi, Zongbin!`);\n      },\n      () => {\n        this.mtxDialog.alert(`I don't know.`);\n      }\n    );\n  }\n\n  open() {\n    this.mtxDialog.open({\n      title: 'This is the title',\n      description: 'You can write some messages here.',\n      buttons: [\n        {\n          type: '',\n          text: 'CLOSE',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Close button.`);\n          },\n        },\n        {\n          type: 'primary',\n          text: 'VIEW',\n          onClick: () => {\n            this.mtxDialog.alert(`You click View button.`);\n          },\n        },\n        {\n          type: 'warn',\n          text: 'OK',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Ok button.`);\n          },\n        },\n      ],\n    });\n  }\n}\n"},bJrw:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openOriginal()&quot;</span>&gt;</span>Open Original Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;animal&quot;</span>&gt;</span>\n  You chose: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{animal}}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},"bQ/j":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n<span class="hljs-keyword">import</span> { MatDialogRef, MAT_DIALOG_DATA } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/dialog&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  animal: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  openOriginal() {\n    <span class="hljs-keyword">const</span> dialogRef = <span class="hljs-built_in">this</span>.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      width: <span class="hljs-string">&#x27;550px&#x27;</span>,\n      data: { name: <span class="hljs-string">&#x27;nzbin&#x27;</span>, animal: <span class="hljs-string">&#x27;panda&#x27;</span> },\n    });\n\n    dialogRef.afterClosed().subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;The dialog was closed&#x27;</span>);\n      <span class="hljs-built_in">this</span>.animal = result;\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-overview&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./dialog.html&#x27;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DialogOverviewExampleComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">public</span> dialogRef: MatDialogRef&lt;DialogOverviewExampleComponent&gt;,\n    <span class="hljs-meta">@Inject</span>(MAT_DIALOG_DATA) <span class="hljs-keyword">public</span> data: <span class="hljs-built_in">any</span>\n  </span>) {}\n\n  onNoClick(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">this</span>.dialogRef.close();\n  }\n}\n'},hm0f:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">mat-dialog-title</span>&gt;</span>Hi, {{ data.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>What&#x27;s your favorite animal?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data.animal&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-actions</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;onNoClick()&quot;</span>&gt;</span>No Thanks<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">mat-dialog-close</span>]=<span class="hljs-string">&quot;data.animal&quot;</span> <span class="hljs-attr">cdkFocusInitial</span>&gt;</span>Ok<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},mVTe:function(n,s){n.exports='<span class="hljs-selector-tag">div</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;\n}\n'},qyMe:function(n,s,a){"use strict";a.r(s),s.default='<h1 mat-dialog-title>Hi, {{ data.name }}</h1>\n<div mat-dialog-content>\n  <p>What\'s your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]="data.animal" />\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)="onNoClick()">No Thanks</button>\n  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>\n</div>\n'},uHWN:function(s,t,l){"use strict";l.r(t),l.d(t,"DialogOverviewComponent",(function(){return T})),l.d(t,"DialogApiComponent",(function(){return A})),l.d(t,"DialogModule",(function(){return I}));var o,i=l("sEIs"),e=l("M0ag"),p=l("EM62"),c=l("jXBn"),r=l("PBFl"),m={title:"Basic confirmation",component:(o=function(){function s(a){n(this,s),this.mtxDialog=a}return a(s,[{key:"alert",value:function(){var n=this;this.mtxDialog.alert("My name is Zongbin!",(function(){n.mtxDialog.alert("Glad to meet you!")}))}},{key:"confirm",value:function(){var n=this;this.mtxDialog.confirm("What's your name?",(function(){n.mtxDialog.alert("Hi, Zongbin!")}),(function(){n.mtxDialog.alert("I don't know.")}))}},{key:"open",value:function(){var n=this;this.mtxDialog.open({title:"This is the title",description:"You can write some messages here.",buttons:[{type:"",text:"CLOSE",onClick:function(){n.mtxDialog.alert("You click Close button.")}},{type:"primary",text:"VIEW",onClick:function(){n.mtxDialog.alert("You click View button.")}},{type:"warn",text:"OK",onClick:function(){n.mtxDialog.alert("You click Ok button.")}}]})}}]),s}(),o.\u0275fac=function(n){return new(n||o)(p.Nb(c.a))},o.\u0275cmp=p.Hb({type:o,selectors:[["dialog-example"]],decls:6,vars:0,consts:[["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,s){1&n&&(p.Tb(0,"button",0),p.bc("click",(function(){return s.alert()})),p.Lc(1,"Alert"),p.Sb(),p.Tb(2,"button",1),p.bc("click",(function(){return s.confirm()})),p.Lc(3,"Confirm"),p.Sb(),p.Tb(4,"button",2),p.bc("click",(function(){return s.open()})),p.Lc(5,"Open Dialog"),p.Sb())},directives:[r.b],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin:0 .5em}"]}),o),files:[{file:"app.component.html",content:l("xJxP"),filecontent:l("4O52")},{file:"app.component.ts",content:l("B4Yo"),filecontent:l("PheJ")},{file:"app.component.scss",content:l("+APe"),filecontent:l("3iNv")}]},g=l("OZ4H"),h=l("2kYt"),u=l("29Wa"),d=l("Cd2c"),j=l("nIj0");function b(n,s){if(1&n&&(p.Tb(0,"div"),p.Lc(1," You chose: "),p.Tb(2,"strong"),p.Lc(3),p.Sb(),p.Sb()),2&n){var a=p.fc();p.Bb(3),p.Mc(a.animal)}}var f,x=function(){var s=function(){function s(a){n(this,s),this.mtxDialog=a}return a(s,[{key:"openOriginal",value:function(){var n=this;this.mtxDialog.originalOpen(k,{width:"550px",data:{name:"nzbin",animal:"panda"}}).afterClosed().subscribe((function(s){console.log("The dialog was closed"),n.animal=s}))}}]),s}();return s.\u0275fac=function(n){return new(n||s)(p.Nb(c.a))},s.\u0275cmp=p.Hb({type:s,selectors:[["dialog-example"]],decls:3,vars:1,consts:[["mat-raised-button","",3,"click"],[4,"ngIf"]],template:function(n,s){1&n&&(p.Tb(0,"button",0),p.bc("click",(function(){return s.openOriginal()})),p.Lc(1,"Open Original Dialog"),p.Sb(),p.Jc(2,b,4,1,"div",1)),2&n&&(p.Bb(2),p.nc("ngIf",s.animal))},directives:[r.b,h.o],styles:["div[_ngcontent-%COMP%]{padding:1em}"]}),s}(),k=((f=function(){function s(a,t){n(this,s),this.dialogRef=a,this.data=t}return a(s,[{key:"onNoClick",value:function(){this.dialogRef.close()}}]),s}()).\u0275fac=function(n){return new(n||f)(p.Nb(g.g),p.Nb(g.a))},f.\u0275cmp=p.Hb({type:f,selectors:[["dialog-overview"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(n,s){1&n&&(p.Tb(0,"h1",0),p.Lc(1),p.Sb(),p.Tb(2,"div",1),p.Tb(3,"p"),p.Lc(4,"What's your favorite animal?"),p.Sb(),p.Tb(5,"mat-form-field"),p.Tb(6,"input",2),p.bc("ngModelChange",(function(n){return s.data.animal=n})),p.Sb(),p.Sb(),p.Sb(),p.Tb(7,"div",3),p.Tb(8,"button",4),p.bc("click",(function(){return s.onNoClick()})),p.Lc(9,"No Thanks"),p.Sb(),p.Tb(10,"button",5),p.Lc(11,"Ok"),p.Sb(),p.Sb()),2&n&&(p.Bb(1),p.Nc("Hi, ",s.data.name,""),p.Bb(5),p.nc("ngModel",s.data.animal),p.Bb(4),p.nc("mat-dialog-close",s.data.animal))},directives:[g.h,g.e,u.c,d.b,j.c,j.i,j.k,g.c,r.b,g.d],encapsulation:2}),f),v={title:"Material original dialog",component:x,files:[{file:"app.component.html",content:l("bJrw"),filecontent:l("Lo5F")},{file:"app.component.ts",content:l("bQ/j"),filecontent:l("BA9y")},{file:"app.component.scss",content:l("mVTe"),filecontent:l("3X/B")},{file:"dialog.html",content:l("hm0f"),filecontent:l("qyMe")}]},y=l("Pg5x");function w(n,s){if(1&n&&(p.Rb(0),p.Ob(1,"example-viewer",2),p.Qb()),2&n){var a=s.$implicit;p.Bb(1),p.nc("exampleData",a)}}function D(n,s){if(1&n&&(p.Rb(0),p.Jc(1,w,2,1,"ng-container",1),p.Qb()),2&n){var a=s.ngIf;p.Bb(1),p.nc("ngForOf",a.examples)}}var C,O,M,T=((M=function s(a){n(this,s),this.route=a}).\u0275fac=function(n){return new(n||M)(p.Nb(i.a))},M.\u0275cmp=p.Hb({type:M,selectors:[["app-dialog-overview"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,s){1&n&&(p.Tb(0,"p"),p.Lc(1," THe Extensions dialog is a wrapper of Angular Material dialog.\n"),p.Sb(),p.Jc(2,D,2,1,"ng-container",0),p.gc(3,"async")),2&n&&(p.Bb(2),p.nc("ngIf",p.hc(3,1,s.route.data)))},directives:[h.o,h.n,y.a],pipes:[h.b],encapsulation:2}),M),A=((O=function s(a){n(this,s),this.route=a}).\u0275fac=function(n){return new(n||O)(p.Nb(i.a))},O.\u0275cmp=p.Hb({type:O,selectors:[["app-dialog-api"]],decls:1,vars:0,template:function(n,s){1&n&&p.Lc(0,"Coming soon\n")},encapsulation:2}),O),I=((C=function s(){n(this,s)}).\u0275mod=p.Lb({type:C}),C.\u0275inj=p.Kb({factory:function(n){return new(n||C)},imports:[[e.b,i.i.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:T,pathMatch:"full",data:{examples:[m,v]}},{path:"api",component:A,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),C)},xJxP:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warn&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;alert()&quot;</span>&gt;</span>Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;confirm()&quot;</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'}}])}();