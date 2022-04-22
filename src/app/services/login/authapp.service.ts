import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersService} from "../users/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  server : string = "localhost";
  port : string = "4200"

  constructor(private httpClient : HttpClient, private usersService : UsersService) {

  }



  autentica = (id: number) : Observable<any> => {
    return this.usersService.getUser(id);
  }


  loggedUser = () : string | null => (sessionStorage.getItem('email')) ? sessionStorage.getItem('email') : '';

  isLogged = () : boolean => !!(sessionStorage.getItem('token'));

  clearUser = () : void => sessionStorage.removeItem(('email'));

  clearAll = () : void => sessionStorage.clear();
}
