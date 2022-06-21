import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthappService} from "../../../services/login/authapp.service";
import {TokenService} from "../../../services/login/token.service";
import {LogUser} from "../../../model/logUser";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logUser !: LogUser;
  email !: string;
  password !: string;

  constructor(
    private router: Router,
    public authService: AuthappService,
    private tokenService : TokenService
  ) { }

  ngOnInit(): void {
  }

  onLogin() : void {
    this.logUser = new LogUser(this.email,this.password);
    this.authService.login(this.logUser).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setRuolo(data.ruolo);
        this.tokenService.setID(data.id);
        if(data.ruolo === 'ROLE_USER')
        this.router.navigate(['welcomeUser']).then(r =>'');
        else if(data.ruolo === 'ROLE_ADMIN')
          this.router.navigate(['welcomeAdmin']).then(r =>'');
        else if(data.ruolo === 'ROLE_SUPER')
          this.router.navigate(['welcomeSuper']).then(r =>'');
        else
          this.router.navigate(['']).then(r => '');
      }
    )
  }






/*
  gestAuth = (): void => {
    this.basicAuth.autentica().subscribe(utente => {
      sessionStorage.setItem('token', utente.id);
      this.route.navigate(['welcome']);
  })
  }

 */
}
