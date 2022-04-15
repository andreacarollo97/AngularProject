import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Prenotazione} from "../../../model/prenotazione";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prenotazione-detail',
  templateUrl: './prenotazione-detail.component.html',
  styleUrls: ['./prenotazione-detail.component.css']
})
export class PrenotazioneDetailComponent implements OnInit {

  prenotazione !: Prenotazione;
  prenotazioni : Prenotazione[] = [];

  form !: FormGroup;
  prenotazioneId !: number;




  constructor(
    private route: ActivatedRoute,
    private service: PrenotazioniService,
    private location: Location,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      'dataInizio': ['', Validators.required],
      'dataFine': ['', Validators.required],
      'stato':[0],
      'user_id': [''],
      'auto_id': ['']
    })
  }

  ngOnInit(): void {
    this.getPrenotazione();
  }


  getPrenotazione(): void {
    this.prenotazioneId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.prenotazioneId) {
      this.service.getPrenotazione(Number(this.prenotazioneId))
        .subscribe(prenotazione => {
          this.prenotazione = prenotazione;
          this.form.setValue({
            dataInizio: this.prenotazione.dataInizio,
            dataFine: this.prenotazione.dataFine,
            stato: this.prenotazione.stato,
            user_id: this.prenotazione.user_id,
            auto_id: this.prenotazione.auto_id
          });
        });
    }
    else {
      this.prenotazione = {id : undefined, dataInizio : '', dataFine : '', stato : 0, user_id : undefined, auto_id : undefined}
    }
  }


  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    this.prenotazione = this.form.value;
    if(!this.prenotazioneId){
      this.service.addPrenotazione(this.prenotazione)
        .subscribe(prenotazione => {
          this.prenotazioni.push(prenotazione);
          this.goBack()
        });
    }
    else{
      if (this.prenotazione) {
        this.prenotazione.id = this.prenotazioneId;
        this.service.updatePrenotazione(this.prenotazione)
          .subscribe(() => this.goBack());
      }
    }

  }



}

















