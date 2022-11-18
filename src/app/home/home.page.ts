/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
import { Student } from "../models/student";
import { StudentService } from "../services/student.service";

//Routes
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];

  constructor(private studentService: StudentService, private router: Router) {
    this.students =  this.studentService.getStudents();
  }

  public removeStudent(pos: number){
    this.studentService.removeStudent(pos);
    this.students = this.studentService.getStudents();
  }

  public getStudentByIndex(pos: number){
    this.router.navigate(['/edit-student'], { 
      queryParams: {index: pos}
    });
  }

  public getStudentByControlNumber(cn: string){
    this.router.navigate(['/view-student'], { 
      queryParams: {controlnumber: cn}
    });
  }

  public addStudent(){
    this.router.navigate(['/new-student']);
  }

}
