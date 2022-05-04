import { Component, OnInit } from '@angular/core';
import {Auto} from "../../../model/auto";

import {ActivatedRoute, Router} from "@angular/router";
import {configListAuto} from "../../../config/page/configListAuto";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";


@Component({
  selector: 'app-auto-disponibili',
  templateUrl: './auto-disponibili.component.html',
  styleUrls: ['./auto-disponibili.component.css']
})
export class AutoDisponibiliComponent implements OnInit {

  autos : Auto[] = [];
  configListAuto = configListAuto;

  constructor(
    private service: PrenotazioniService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        let dataInizio: string = params['dataInizio'];
        let dataFine: string = params['dataFine'];
        if (dataInizio && dataFine) {
          this.service.listaAutoDisponibili(dataInizio,dataFine)
            .subscribe(autos =>  this.autos = autos );
        }
      })
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'prenota':
        this.router.navigate(['prenota'], {relativeTo: this.activateRouter}).then(r => ['auto']) ;
        break;
    }
  }





}
