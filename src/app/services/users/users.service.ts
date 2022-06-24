import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../../model/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  url : string = 'http://localhost:8080/api/user';



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/elenco');
  }

  getUsersWhenAdmin(ruolo : string): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/elencoFiltered/'+ ruolo);
  }

  salvaUser(user : User) : Observable<any>{
    return this.http.post<User>(this.url+'/salva',user)
  }

  ottieniUser(id : number) : Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }

  eliminaUser(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }
}
