"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(P,d,i)=>{i.r(d),i.d(d,{HomePageModule:()=>h});var m=i(9808),o=i(7590),g=i(4182),u=i(2292),t=i(2096),p=i(4339);function _(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-sliding",6),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.getStudentByControlNumber(c.controlnumber))}),t.TgZ(1,"ion-item")(2,"ion-label"),t._uU(3),t.qZA(),t.TgZ(4,"ion-label"),t._uU(5),t.qZA(),t.TgZ(6,"ion-label"),t._uU(7),t.qZA()(),t.TgZ(8,"ion-item-options",7),t.NdJ("ionSwipe",function(){const c=t.CHM(e).index,a=t.oxw();return t.KtG(a.removeStudent(c))}),t.TgZ(9,"ion-item-option",8),t._UZ(10,"ion-icon",9),t.qZA()(),t.TgZ(11,"ion-item-options",10),t.NdJ("ionSwipe",function(){const c=t.CHM(e).index,a=t.oxw();return t.KtG(a.getStudentByIndex(c))}),t.TgZ(12,"ion-item-option",11),t._UZ(13,"ion-icon",12),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(3),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.career," "),t.xp6(2),t.hij(" ",e.controlnumber," ")}}const f=[{path:"",component:(()=>{class n{constructor(e,s){this.studentService=e,this.router=s,this.students=this.studentService.getStudents()}removeStudent(e){this.studentService.removeStudent(e),this.students=this.studentService.getStudents()}getStudentByIndex(e){this.router.navigate(["/edit-student"],{queryParams:{index:e}})}getStudentByControlNumber(e){this.router.navigate(["/view-student"],{queryParams:{controlnumber:e}})}addStudent(){this.router.navigate(["/new-student"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.V),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:14,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["slot","fixed","vertical","bottom","horizontal","end"],["name","add",3,"click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["side","end",3,"ionSwipe"],["expandable","","color","danger"],["name","trash-outline"],["side","start",3,"ionSwipe"],["expandable","","color","success"],["name","create-outline"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," Estudiantes "),t.qZA()()(),t.TgZ(6,"ion-content",2)(7,"ion-fab",3)(8,"ion-fab-button")(9,"ion-icon",4),t.NdJ("click",function(){return s.addStudent()}),t.qZA()()(),t.TgZ(10,"ion-row")(11,"ion-col")(12,"ion-list"),t.YNc(13,_,14,3,"ion-item-sliding",5),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(7),t.Q6J("ngForOf",s.students))},dependencies:[m.sg,o.oU,o.Sm,o.wI,o.W2,o.IJ,o.W4,o.Gu,o.gu,o.Ie,o.u8,o.IK,o.td,o.Q$,o.q_,o.Nd,o.wd,o.sr,o.cs],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(f),u.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,g.u5,o.Pc,x]}),n})()}}]);