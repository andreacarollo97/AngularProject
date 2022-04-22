import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthappService} from "./authapp.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public BasicAuth: AuthappService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    console.log(this.BasicAuth.isLogged());
    if (!this.BasicAuth.isLogged()){
      this.route.navigate(['login']).then(r => ['']);
      return false;
    }
    else {
      return true;
    }
  }
}
