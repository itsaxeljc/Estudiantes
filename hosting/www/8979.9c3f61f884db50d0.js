"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8979],{8979:(w,c,s)=>{s.r(c),s.d(c,{EditStudentPageModule:()=>Q});var d=s(9808),n=s(4182),a=s(7590),m=s(2292),u=s(655),e=s(2096),l=s(4339);function p(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function _(t,r){if(1&t&&(e.ynx(0),e.YNc(1,p,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("controlnumber").dirty||o.myForm.get("controlnumber").touched)&&o.myForm.get("controlnumber").hasError(i.type))}}function f(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function y(t,r){if(1&t&&(e.ynx(0),e.YNc(1,f,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("name").dirty||o.myForm.get("name").touched)&&o.myForm.get("name").hasError(i.type))}}function Z(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function h(t,r){if(1&t&&(e.ynx(0),e.YNc(1,Z,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("curp").dirty||o.myForm.get("name").touched)&&o.myForm.get("curp").hasError(i.type))}}function x(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function v(t,r){if(1&t&&(e.ynx(0),e.YNc(1,x,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("age").dirty||o.myForm.get("age").touched)&&o.myForm.get("age").hasError(i.type))}}function T(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function q(t,r){if(1&t&&(e.ynx(0),e.YNc(1,T,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("nip").dirty||o.myForm.get("nip").touched)&&o.myForm.get("nip").hasError(i.type))}}function S(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function F(t,r){if(1&t&&(e.ynx(0),e.YNc(1,S,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("email").dirty||o.myForm.get("email").touched)&&o.myForm.get("email").hasError(i.type))}}function A(t,r){if(1&t&&(e.TgZ(0,"ion-select-option",16),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.Q6J("value",i.value),e.xp6(1),e.hij(" ",i.txt," ")}}function E(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function I(t,r){if(1&t&&(e.ynx(0),e.YNc(1,E,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("career").dirty||o.myForm.get("career").touched)&&o.myForm.get("career").hasError(i.type))}}function P(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.message," ")}}function b(t,r){if(1&t&&(e.ynx(0),e.YNc(1,P,2,1,"div",14),e.BQk()),2&t){const i=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",(o.myForm.get("photo").dirty||o.myForm.get("photo").touched)&&o.myForm.get("photo").hasError(i.type))}}const N=[{path:"",component:(()=>{class t{constructor(i,o,g,k,C){this.studentService=i,this.fb=o,this.aroute=g,this.router=k,this.alertController=C,this.careers=[{value:"isc",txt:"ISC"},{value:"arq",txt:"ARQ"},{value:"ibq",txt:"IBQ"}]}ngOnInit(){this.aroute.queryParams.subscribe(i=>{this.student=this.studentService.getStudentByIndex(i.index),this.index=i.index}),this.myForm=this.fb.group({controlnumber:[this.student.controlnumber,n.kI.compose([n.kI.required,n.kI.minLength(8),n.kI.maxLength(8),n.kI.pattern("^[0-9]+$")])],name:[this.student.name,n.kI.required],curp:[this.student.curp,n.kI.compose([n.kI.required,n.kI.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],age:[this.student.age,n.kI.compose([n.kI.required,n.kI.min(17)])],nip:[this.student.nip,n.kI.compose([n.kI.required,n.kI.min(9),n.kI.max(9999)])],email:[this.student.email,n.kI.compose([n.kI.required,n.kI.email])],career:["isc",n.kI.compose([n.kI.required])],photo:[this.student.photo,n.kI.compose([n.kI.required,n.kI.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)])]}),this.validationMessages={controlnumber:[{type:"required",message:"N\xfamero de control obligatorio"},{type:"minlength",message:"El n\xfamero de control de ser de 8 digitos"},{type:"maxlength",message:"El n\xfamero de control de ser de 8 digitos"},{type:"pattern",message:"El n\xfamero de control est\xe1 mal formado"}],name:[{type:"required",message:"Nombre obligatorio"}],curp:[{type:"required",message:"CURP obligatoria"},{type:"pattern",message:"Su CURP est\xe1 mal formada"}],age:[{type:"required",message:"Edad obligatoria"},{type:"min",message:"La edad m\xednima es de 17 a\xf1os"}],nip:[{type:"required",message:"NIP obligatorio"},{type:"min",message:"La longitud m\xednima del NIP es de dos d\xedgitos"},{type:"max",message:"La longitud m\xe1xima del NIP es de cuatro d\xedgitos"}],career:[{type:"required",message:"Carrera obligatoria"}],email:[{type:"required",message:"Correo electr\xf3nico obligatorio"},{type:"email",message:"Revise que su correo est\xe9 bien escrito"}],photo:[{type:"required",message:"URL de la foto obligatoria"},{type:"pattern",message:"Revise que la URL de su foto sea correcta"}]}}editStudent(){this.myForm.valid?(this.student=this.myForm.value,this.studentService.editStudent(this.index,this.student),this.router.navigate(["/home"])):this.alert()}alert(){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Verifique sus datos",subHeader:"Error de captura",message:"Verifique que todos los campos sean correctos",buttons:["OK"]})).present()})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.V),e.Y36(n.qu),e.Y36(m.gz),e.Y36(m.F0),e.Y36(a.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-student"]],decls:76,vars:10,consts:[["slot","start"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","controlnumber"],[4,"ngFor","ngForOf"],["formControlName","name"],["formControlName","curp"],["formControlName","age","type","number","min","17","max","100"],["formControlName","nip","type","number","min","10","max","9999"],["formControlName","email"],["placeholder","Carrera","formControlName","career"],[3,"value",4,"ngFor","ngForOf"],["formControlName","photo"],["type","submit"],["class","errormessage",4,"ngIf"],[1,"errormessage"],[3,"value"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Editar estudiante"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"form",1),e.NdJ("ngSubmit",function(){return o.editStudent()}),e.TgZ(9,"ion-row")(10,"ion-col")(11,"ion-item")(12,"ion-label",2),e._uU(13,"N\xfamero de control"),e.qZA(),e._UZ(14,"ion-input",3),e.qZA(),e.TgZ(15,"div"),e.YNc(16,_,2,1,"ng-container",4),e.qZA()()(),e.TgZ(17,"ion-row")(18,"ion-col")(19,"ion-item")(20,"ion-label",2),e._uU(21,"Nombre"),e.qZA(),e._UZ(22,"ion-input",5),e.qZA(),e.TgZ(23,"div"),e.YNc(24,y,2,1,"ng-container",4),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col")(27,"ion-item")(28,"ion-label",2),e._uU(29,"CURP"),e.qZA(),e._UZ(30,"ion-input",6),e.qZA(),e.TgZ(31,"div"),e.YNc(32,h,2,1,"ng-container",4),e.qZA()()(),e.TgZ(33,"ion-row")(34,"ion-col")(35,"ion-item")(36,"ion-label",2),e._uU(37,"Edad"),e.qZA(),e._UZ(38,"ion-input",7),e.qZA(),e.TgZ(39,"div"),e.YNc(40,v,2,1,"ng-container",4),e.qZA()()(),e.TgZ(41,"ion-row")(42,"ion-col")(43,"ion-item")(44,"ion-label",2),e._uU(45,"NIP"),e.qZA(),e._UZ(46,"ion-input",8),e.qZA(),e.TgZ(47,"div"),e.YNc(48,q,2,1,"ng-container",4),e.qZA()()(),e.TgZ(49,"ion-row")(50,"ion-col")(51,"ion-item")(52,"ion-label",2),e._uU(53,"Correo electr\xf3nico"),e.qZA(),e._UZ(54,"ion-input",9),e.qZA(),e.TgZ(55,"div"),e.YNc(56,F,2,1,"ng-container",4),e.qZA()()(),e.TgZ(57,"ion-row")(58,"ion-col")(59,"ion-item")(60,"ion-select",10),e.YNc(61,A,2,2,"ion-select-option",11),e.qZA()(),e.TgZ(62,"div"),e.YNc(63,I,2,1,"ng-container",4),e.qZA()()(),e.TgZ(64,"ion-row")(65,"ion-col")(66,"ion-item")(67,"ion-label",2),e._uU(68,"URL de la foto"),e.qZA(),e._UZ(69,"ion-input",12),e.qZA(),e.TgZ(70,"div"),e.YNc(71,b,2,1,"ng-container",4),e.qZA()()(),e.TgZ(72,"ion-row")(73,"ion-col")(74,"ion-button",13),e._uU(75,"Actualizar"),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",o.myForm),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.controlnumber),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.name),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.curp),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.age),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.nip),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.email),e.xp6(5),e.Q6J("ngForOf",o.careers),e.xp6(2),e.Q6J("ngForOf",o.validationMessages.career),e.xp6(8),e.Q6J("ngForOf",o.validationMessages.photo))},dependencies:[d.sg,d.O5,n._Y,n.JJ,n.JL,n.sg,n.u,a.oU,a.YG,a.Sm,a.wI,a.W2,a.jY,a.Gu,a.pK,a.Ie,a.Q$,a.Nd,a.t9,a.n0,a.wd,a.sr,a.as,a.QI,a.j9,a.cs]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(N),m.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,n.u5,n.UX,a.Pc,U]}),t})()}}]);