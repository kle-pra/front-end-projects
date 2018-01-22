import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.loginService
      .emailLogin(this.email, this.password)
      .then(() => this.router.navigate(['/welcome']))
      .catch(error => console.log(error));
  }

  signInWithGoogle() {
    this.loginService.googleLogin().then(() => this.router.navigate(['/welcome']));
  }
}
