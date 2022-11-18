/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//Routes
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {

  public student: Student;
  public index: number;
  public myForm: FormGroup;
  public validationMessages: Object;
  public careers = [
    {
      value: 'isc',
      txt: 'ISC'
    },
    {
      value: 'arq',
      txt: 'ARQ'
    },
    {
      value: 'ibq',
      txt: 'IBQ'
    }
  ];

  constructor(private studentService: StudentService, private fb: FormBuilder,private aroute: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params) => {
        this.student = this.studentService.getStudentByIndex(params.index);
        this.index = params.index;
      }
    );

    this.myForm = this.fb.group(
      {
        controlnumber: [this.student.controlnumber, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]+$')])], //[initialValue, Validations]
        name: [this.student.name, Validators.required],
        curp: [this.student.curp, Validators.compose([Validators.required, Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],
        age: [this.student.age, Validators.compose([Validators.required, Validators.min(17)])],
        nip: [this.student.nip, Validators.compose([Validators.required, Validators.min(9), Validators.max(9999)])],
        email: [this.student.email, Validators.compose([Validators.required, Validators.email])],
        career: ["isc", Validators.compose([Validators.required])],
        photo: [this.student.photo, Validators.compose([Validators.required, Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)])]
      }
      
      ); //We add formBuilder to give structure and validations to our form
  
      this.validationMessages = { //Difference between a JSON a JS Object is the usage of ''
        controlnumber: [
          { type: 'required', message: 'Número de control obligatorio' },
          { type: 'minlength', message: 'El número de control de ser de 8 digitos'},
          { type: 'maxlength', message: 'El número de control de ser de 8 digitos'},
          { type: 'pattern', message: 'El número de control está mal formado'}
        ],
        name: [
          { type: 'required', message: 'Nombre obligatorio' }
        ],
        curp: [
          { type: 'required', message: 'CURP obligatoria' },
          { type: 'pattern', message: 'Su CURP está mal formada'}
        ],
        age: [
          { type: 'required', message: 'Edad obligatoria'},
          { type: 'min', message: 'La edad mínima es de 17 años'}
        ],
        nip: [
          { type: 'required', message: 'NIP obligatorio'},
          { type: 'min', message: 'La longitud mínima del NIP es de dos dígitos'},
          { type: 'max', message: 'La longitud máxima del NIP es de cuatro dígitos'}
        ],
        career: [
          { type: 'required', message: 'Carrera obligatoria'}
        ],
        email: [
          { type: 'required', message: 'Correo electrónico obligatorio'},
          { type: 'email', message: 'Revise que su correo esté bien escrito'}
        ],
        photo: [
          { type: 'required', message: 'URL de la foto obligatoria'},
          { type: 'pattern', message: 'Revise que la URL de su foto sea correcta'}
        ]
      }  
  }

  public editStudent() {
    if(this.myForm.valid){
      this.student = this.myForm.value;
      this.studentService.editStudent(this.index,this.student);
      this.router.navigate(['/home']);
    } else {
      this.alert();
    }
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Verifique sus datos',
      subHeader: 'Error de captura',
      message: 'Verifique que todos los campos sean correctos',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
