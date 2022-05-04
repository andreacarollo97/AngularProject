import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Prenotazione} from "../../../model/prenotazione";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";






@Component({
  selector: 'app-prenotazione-user',
  templateUrl: './prenotazione-user.component.html',
  styleUrls: ['./prenotazione-user.component.css']
})
export class PrenotazioneUserComponent implements OnInit {


  prenotazione !: Prenotazione;
  form !: FormGroup;



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
    })
  }

  ngOnInit(): void {
  }


  mostraListaAutoDisponibili() {
    this.router.navigate(['listauto/'+this.form.value.dataInizio+'/'+this.form.value.dataFine]);
  }


  goBack(): void {
    this.location.back();
  }



}


