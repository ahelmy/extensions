(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5S+f":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("EM62"),o=n("2kYt"),c=n("bFHC");let a=(()=>{class e{constructor(e){this.platformLocation=e,this._text=""}ngOnInit(){this._text=this.example.toLowerCase().split(" ").filter(e=>"&"!==e).join("-")}getFragmentUrl(){return`${this.platformLocation.pathname}#${this._text}`}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(o.w))},e.\u0275cmp=i.Hb({type:e,selectors:[["header-link"]],inputs:{example:"example"},decls:3,vars:2,consts:[["aria-label","Link to this heading",1,"docs-markdown-a","header-link",3,"href"]],template:function(e,t){1&e&&(i.Tb(0,"a",0),i.Tb(1,"mat-icon"),i.Lc(2,"link"),i.Sb(),i.Sb()),2&e&&(i.nc("href",t.getFragmentUrl(),i.Bc),i.Cb("aria-describedby",t.example))},directives:[c.a],styles:["h1 .header-link,h2 .header-link,h3 .header-link,h4 .header-link,h5 .header-link,h6 .header-link{display:inline-flex;padding:2px 0;margin-left:-30px;color:#6e6e6e;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;vertical-align:middle}h1:hover .header-link,h2:hover .header-link,h3:hover .header-link,h4:hover .header-link,h5:hover .header-link,h6:hover .header-link{visibility:visible}h1 span,h2 span,h3 span,h4 span,h5 span,h6 span{vertical-align:middle}"],encapsulation:2}),e})(),r=(()=>{class e{constructor(){this.text="",this.id=""}ngOnInit(){this.id=this.text.toLowerCase().split(" ").filter(e=>"&"!==e).join("-")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["doc-heading"]],inputs:{text:"text"},decls:4,vars:3,consts:[[3,"id"],[3,"example"]],template:function(e,t){1&e&&(i.Tb(0,"h3",0),i.Ob(1,"header-link",1),i.Tb(2,"span"),i.Lc(3),i.Sb(),i.Sb()),2&e&&(i.nc("id",t.id),i.Bb(1),i.nc("example",t.text),i.Bb(2),i.Nc(" ",t.text,""))},directives:[a],encapsulation:2}),e})()},"5ztx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("EM62"),o=n("e4iD");let c=(()=>{class e{constructor(e){this.bodyTitle=e,this._title="",this._originalTitle="Angular Material Extensions library"}get title(){return this._title}set title(e){this._title=e&&this.capitalizeTitle(e),this.bodyTitle.setTitle(e=""!==e?this._title+" | Angular Material Extensions":this._originalTitle)}capitalizeTitle(e){return e.split("-").join(" ").replace(/\b\w+\b/g,e=>e.substring(0,1).toUpperCase()+e.substring(1))}}return e.\u0275fac=function(t){return new(t||e)(i.Xb(o.c))},e.\u0275prov=i.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Pg5x:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var i=n("EM62"),o=n("W1gw"),c=n("cTZo"),a=n("PBFl"),r=n("Y2X+"),s=n("bFHC"),l=n("2kYt"),p=n("KZIX");const d=["demo"];function b(e,t){if(1&e){const e=i.Ub();i.Tb(0,"mat-tab",10),i.Tb(1,"div",11),i.Tb(2,"div",12),i.Tb(3,"button",13),i.bc("click",(function(){i.zc(e);const t=i.wc(8);return i.fc(2).copySource(t)})),i.Tb(4,"mat-icon"),i.Lc(5,"content_copy"),i.Sb(),i.Sb(),i.Sb(),i.Tb(6,"div",14),i.Ob(7,"pre",15,16),i.Sb(),i.Sb(),i.Sb()}if(2&e){const e=t.$implicit;i.nc("label",e.file),i.Bb(3),i.nc("matTooltip","Copy example source"),i.Bb(4),i.nc("innerHtml",e.content,i.Ac)}}function u(e,t){if(1&e&&(i.Tb(0,"div",8),i.Tb(1,"mat-tab-group"),i.Jc(2,b,9,3,"mat-tab",9),i.Sb(),i.Sb()),2&e){const e=i.fc();i.Bb(2),i.nc("ngForOf",e.exampleData.files)}}function h(e,t){if(1&e&&i.Ob(0,"div",17),2&e){const e=i.fc();i.nc("innerHtml",e.exampleData.description,i.Ac)}}function m(e,t){}let x=(()=>{class e{constructor(e,t,n){this.snackbar=e,this.copier=t,this.componentFactoryResolver=n,this.showSource=!1}ngOnInit(){const e=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(e)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(e){this.copier.copyText(e.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(o.a),i.Nb(c.a),i.Nb(i.j))},e.\u0275cmp=i.Hb({type:e,selectors:[["example-viewer"]],viewQuery:function(e,t){var n;1&e&&i.Ec(d,!0,i.R),2&e&&i.vc(n=i.cc())&&(t.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"span"),i.Lc(3),i.Sb(),i.Ob(4,"div",2),i.Tb(5,"button",3),i.bc("click",(function(){return t.toggleSourceView()})),i.Tb(6,"mat-icon"),i.Lc(7,"code"),i.Sb(),i.Sb(),i.Sb(),i.Jc(8,u,3,1,"div",4),i.Tb(9,"div",5),i.Jc(10,h,1,1,"div",6),i.Jc(11,m,0,0,"ng-template",null,7,i.Kc),i.Sb(),i.Sb()),2&e&&(i.Bb(3),i.Mc(t.exampleData.title),i.Bb(2),i.nc("matTooltip","View source"),i.Bb(3),i.nc("ngIf",t.showSource),i.Bb(2),i.nc("ngIf",t.exampleData.description))},directives:[a.b,r.a,s.a,l.o,p.b,l.n,p.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),e})()}}]);