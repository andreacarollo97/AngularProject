import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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


  form !: FormGroup;
  prenotazioneId !: number;




  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: PrenotazioniService,
    private location : Location,
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
    this.activateRouter.params
      .subscribe(params => {
        let id: number = params['id'];
        if (id) {
          this.service.ottieniPrenotazione(id)
            .subscribe(response => {
              this.prenotazione = response ;
              this.prenotazioneId = Number(this.prenotazione.id);
              delete this.prenotazione.id;
              this.form.setValue(this.prenotazione)
            });

        }
      })
  }

  onSubmit(){
    this.prenotazione = this.form.value;
    if(!this.prenotazioneId){
      this.salvaPrenotazione();
    }
    else{
      if (this.prenotazione) {
        this.prenotazione.id = this.prenotazioneId;
        this.editPrenotazione();
      }
    }
  }

  salvaPrenotazione() {
    this.service.salvaPrenotazione(this.prenotazione)
      .subscribe(response => this.router.navigate(['prenotazione']))
  }

  editPrenotazione() {
    this.service.editPrenotazione(this.prenotazione)
      .subscribe(response => this.router.navigate(['prenotazione']))
  }






  goBack(): void {
    this.location.back();
  }



}

















