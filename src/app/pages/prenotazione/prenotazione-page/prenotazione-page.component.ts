import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Prenotazione} from "../../../model/prenotazione";
import {configPrenotazione} from "../../../config/page/configPrenotazione";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";
import * as _ from "lodash";
import {MyTableComponent} from "../../../my-table/my-table.component";
import {MyTableConfig} from "../../../config/table/MyTableConfig";
import {configPrenotazioni} from "../../../config/page/configPrenotazioni";

@Component({
  selector: 'app-prenotazione-page',
  templateUrl: './prenotazione-page.component.html',
  styleUrls: ['./prenotazione-page.component.css']
})
export class PrenotazionePageComponent implements OnInit {

  prenotazioni : Prenotazione[] = [];
  prenotazioniTable !: MyTableConfig;



  constructor(
    private service: PrenotazioniService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getPrenotazioni();
  }



  btnClicked($event: any) {
    switch ($event.action) {
      case 'validate':
        this.validatePrenotazione($event.item.id)
        this.router.navigate(['/'],{relativeTo: this.route});
        break;
      case 'delete':
        this.eliminaPrenotazione($event.item.id);
        break;
    }
  }

  eliminaPrenotazione(id : number) {
    this.service.eliminaPrenotazione(id)
      .subscribe(response => {
        this.prenotazioni = this.prenotazioni.filter(prenotazione => prenotazione.id != id)
      })
  }


  validatePrenotazione(id : number) {
    this.service.validatePrenotazione(id)
      .subscribe(response => {
        this.prenotazioni = this.prenotazioni.filter(prenotazione => prenotazione.id != id)
      })
  }



  getPrenotazioni(): void {
    if (sessionStorage.getItem('AuthRole') === 'ROLE_ADMIN') {
      this.prenotazioniTable = configPrenotazione;
      this.service.getPrenotazioni()
        .subscribe(prenotazioni => this.prenotazioni = prenotazioni);
    }
    else {
      this.prenotazioniTable = configPrenotazioni;
      this.service.getMiePrenotazioni()
        .subscribe(prenotazioni => this.prenotazioni = prenotazioni);
    }
  }
}
