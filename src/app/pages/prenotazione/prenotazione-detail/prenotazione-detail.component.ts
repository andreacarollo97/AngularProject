import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Prenotazione} from "../../../model/prenotazione";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";

@Component({
  selector: 'app-prenotazione-detail',
  templateUrl: './prenotazione-detail.component.html',
  styleUrls: ['./prenotazione-detail.component.css']
})
export class PrenotazioneDetailComponent implements OnInit {

  prenotazione !: Prenotazione;
  prenotazioni : Prenotazione[] = [];




  constructor(
    private route: ActivatedRoute,
    private service: PrenotazioniService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPrenotazione();
  }


  getPrenotazione(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getPrenotazione(Number(id))
        .subscribe(prenotazione => this.prenotazione = prenotazione);
    }
    else {
      this.prenotazione = {id : undefined, dataInizio : '', dataFine : '', stato : 0, user_id : undefined, auto_id : undefined}
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.prenotazione) {
      this.service.updatePrenotazione(this.prenotazione)
        .subscribe(() => this.goBack());
    }
  }

  add(): void {
    this.service.addPrenotazione(this.prenotazione)
      .subscribe(prenotazione => {
        this.prenotazioni.push(prenotazione);
      });
    this.goBack()
  }

}
