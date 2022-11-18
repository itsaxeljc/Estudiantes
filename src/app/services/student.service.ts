/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() { 
    this.students =  [{
      controlnumber: "18401139",
      age: 21,
      career: "ISC",
      curp: "JACJ000624HNTCVNA5",
      email: "juaxjacoboco@ittepic.edu.mx",
      name: "Axel Jacobo",
      nip: 871,
      photo: "https://picsum.photos/id/310/500/500"
    },
    {
      controlnumber: "18401121",
      age: 22,
      career: "ARQ",
      curp: "HNTJ000624HNTCVNA5",
      email: "arqhannah@ittepic.edu.mx",
      name: "Hannah Rodier",
      nip: 123,
      photo: "https://picsum.photos/id/325/500/500"
    },
    {
      controlnumber: "18401121",
      age: 20,
      career: "IBQ",
      curp: "PEAV000624HNTCVNA5",
      email: "peavila@ittepic.edu.mx",
      name: "Pedro Avila",
      nip: 385,
      photo: "https://picsum.photos/id/305/500/500"
    },]
  }

  public getStudents(): Student[]{
    return this.students;
  }

  public removeStudent(index: number){
    this.students.splice(index, 1);
  }

  public getStudentByControlNumber (cn: string): Student{
    let item: Student;
    item = this.students.find(
      (student)=> { //función arrow/flecha
        return student.controlnumber === cn;
      }
    );
    return item;
  }

  public newStudent (student: Student){
    this.students.push(student);
  }

  public editStudent (index: number, student: Student){
    this.students[index] = student;
  }

  public getStudentByIndex (index: number): Student {
    return this.students[index];
  }

}

//TSLINT Plugin

