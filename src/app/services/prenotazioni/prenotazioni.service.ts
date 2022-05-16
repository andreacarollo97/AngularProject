import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prenotazione} from "../../model/prenotazione";
import {Auto} from "../../model/auto";


@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {



  constructor(
    private http: HttpClient
  ) { }

  url : string = 'http://localhost:8080/api/prenotazione';



  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url+'/elenco');
  }

  getMiePrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url+'/prenotazioni/' + sessionStorage.getItem("AuthId"));
  }

  salvaPrenotazione(prenotazione : Prenotazione) : Observable<Prenotazione>{
    return this.http.post<Prenotazione>(this.url+'/salva',prenotazione)
  }

  ottieniPrenotazione(id : number) : Observable<Prenotazione> {
    return this.http.get<Prenotazione>(this.url+'/'+id);
  }

  editPrenotazione(prenotazione : Prenotazione) : Observable<Prenotazione> {
    return this.http.put<Prenotazione>(this.url+'/edit/'+prenotazione.id,prenotazione);
  }

  validatePrenotazione(id : number): Observable<any> {
    return this.http.post<any>(this.url+'/validate/'+id,id);
  }

  eliminaPrenotazione(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }

  listaAutoDisponibili(dataInizio : string, dataFine : string): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.url+'/listauto/?dataInizio='+dataInizio+'&dataFine='+dataFine);
  }


}
