import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthappService} from "./authapp.service";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private authService : AuthappService,
    private tokenService : TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authToken = this.tokenService.getToken();

    if(this.authService.loggedUser()){
      req = req.clone({
          setHeaders : {Authorization : authToken}
        });
    }
    return next.handle(req);
  }

}
