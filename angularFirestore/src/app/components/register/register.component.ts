import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;

  constructor(public loginService:LoginService) { }

  ngOnInit() {
  }

  onRegister(){

    this.loginService.emailSignUp(this.email, this.password)
    .then(data=>console.log(data))
    .catch(error=>console.log(error));

  }

}
