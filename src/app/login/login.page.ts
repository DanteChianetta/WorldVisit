import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';
  mostrarPassword: boolean = false;
  
  constructor(private router: Router) { }

  iniciarSesion(){
    this.router.navigate(['tabs/tab1']);
  }

  togglePassword(){
    this.mostrarPassword = !this.mostrarPassword;
  }

}
