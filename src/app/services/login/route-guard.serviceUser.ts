import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthappService} from "./authapp.service";
import {TokenService} from "./token.service";


@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceUser implements CanActivate {

  token !: string;
  ruolo !: string;
  id !: number;


  constructor(private authService: AuthappService,private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    this.token = this.tokenService.getToken();
    this.ruolo = this.tokenService.getRuolo();


    if (!this.authService.isLogged()){
      this.router.navigate(['login']).then(r => ['']);
      return false;
    }

    else {
      if (this.ruolo === 'ROLE_USER' || this.ruolo === 'ROLE_ADMIN' || this.ruolo === 'ROLE_SUPER') {
        return true;
      }
      else {
        this.router.navigate(['login']).then(r => ['']);
        return false;

      }
    }
  }
}
