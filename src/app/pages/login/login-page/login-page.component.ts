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
    console.log(this.id);

    this.basicAuth.autentica().subscribe(utente => {
      sessionStorage.setItem('token', utente.id);
      this.route.navigate(['welcome']);
  })
  }
}
