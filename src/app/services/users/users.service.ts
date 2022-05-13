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

  salvaUser(user : User) : Observable<User>{
    return this.http.post<User>(this.url+'/salva',user)
  }

  ottieniUser(id : number) : Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }

  editUser(user : User) : Observable<User> {
    return this.http.put<User>(this.url+'/edit/'+user.id,user);
  }

  eliminaUser(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }
}
