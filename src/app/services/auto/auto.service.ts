import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../model/auto";
import {EditAuto} from "../../model/editAuto";


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

  salvaAuto(auto : EditAuto) : Observable<any>{
    return this.http.post<EditAuto>(this.url+'/salva',auto)
  }

  ottieniAuto(id : number) : Observable<Auto> {
    return this.http.get<Auto>(this.url+'/detail/'+id);
  }


  eliminaAuto(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }




}
