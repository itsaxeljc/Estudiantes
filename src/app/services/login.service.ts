/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
//Routes
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private admins: string[];
  private error: boolean;

  constructor(private router: Router) { 
    this.admins = ['2024','1234','1444'];
    this.error = false;
  }

  public signIn(clave: string): boolean {
    if(this.admins.includes(clave)){
      return true;
    } else {
      return false;
    }
  }
  
}
