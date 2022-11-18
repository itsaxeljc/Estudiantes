import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

//Routes
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public clave = '';
  public error = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public signIn(){
    if(this.loginService.signIn(this.clave)){
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }

}
