import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../model/auto";


@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(
    private http: HttpClient
  ) { }

  url : string = 'http://localhost:8080/api/auto';

  getAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.url+'/elenco/');
  }


  salvaAuto(auto : Auto) : Observable<Auto>{
    return this.http.post<Auto>(this.url+'/salva',auto)
  }

  ottieniAuto(id : number) : Observable<Auto> {
    return this.http.get<Auto>(this.url+'/detail/'+id);
  }

  editAuto(auto : Auto) : Observable<Auto> {
    return this.http.put<Auto>(this.url+'/edit/'+auto.id,auto);
  }

  eliminaAuto(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }




}
