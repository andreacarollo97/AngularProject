import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthappService} from "../../../services/login/authapp.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  id !: number;
  email !: string;
  password !: string;

  constructor(private route: Router, public basicAuth: AuthappService ) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.email);

    this.basicAuth.autentica(this.id).subscribe(utente => {
      sessionStorage.setItem('token', utente.email)
      this.route.navigate(['welcome']);
  })
  }
}
