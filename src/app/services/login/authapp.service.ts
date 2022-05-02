import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UsersService} from "../users/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthappService {


  constructor(private httpClient : HttpClient, private usersService : UsersService) {

  }



  autentica = () : Observable<any> => {
    return this.usersService.getUsers()
  }


  loggedUser = () : string | null => (sessionStorage.getItem('email')) ? sessionStorage.getItem('email') : '';

  isLogged = () : boolean => !!(sessionStorage.getItem('token'));

  clearUser = () : void => sessionStorage.removeItem(('email'));

  clearAll = () : void => sessionStorage.clear();
}
