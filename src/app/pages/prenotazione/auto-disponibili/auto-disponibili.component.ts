import { Component, OnInit } from '@angular/core';
import {Auto} from "../../../model/auto";

import {ActivatedRoute, Router} from "@angular/router";
import {configListAuto} from "../../../config/table/configListAuto";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";
import {Prenotazione} from "../../../model/prenotazione";
import {User} from "../../../model/user";
import {configUser} from "../../../config/table/configUser";
import {TokenService} from "../../../services/login/token.service";
import {UsersService} from "../../../services/users/users.service";


@Component({
  selector: 'app-auto-disponibili',
  templateUrl: './auto-disponibili.component.html',
  styleUrls: ['./auto-disponibili.component.css']
})
export class AutoDisponibiliComponent implements OnInit {

  autos : Auto[] = [];
  configListAuto = configListAuto;
  prenotazione !: Prenotazione;
  dataInizio !: string;
  dataFine !: string;

  constructor(
    private service: PrenotazioniService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private prenotazioneService : PrenotazioniService,
    private tokenService : TokenService,

  ) {
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        this.dataInizio = params['dataInizio'];
        this.dataFine = params['dataFine'];
        if (this.dataInizio && this.dataFine) {
          this.service.listaAutoDisponibili(this.dataInizio,this.dataFine)
            .subscribe(autos =>  this.autos = autos );
        }
      })
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'prenota':
        this.prenotaAuto($event.item.id)
        break;
    }
  }

  prenotaAuto(autoId : number) {
    this.prenotazione = {
      dataInizio : this.dataInizio,
      dataFine : this.dataFine,
      userId : this.tokenService.getId(),
      autoId : autoId,
      stato : 0
    }
    this.service.salvaPrenotazione(this.prenotazione)
      .subscribe(response => this.router.navigate(['']))
  }




}
