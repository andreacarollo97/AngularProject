import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Prenotazione} from "../../../model/prenotazione";
import {configPrenotazione} from "../../../config/page/configPrenotazione";
import {PrenotazioniService} from "../../../services/prenotazioni/prenotazioni.service";

@Component({
  selector: 'app-prenotazione-page',
  templateUrl: './prenotazione-page.component.html',
  styleUrls: ['./prenotazione-page.component.css']
})
export class PrenotazionePageComponent implements OnInit {

  prenotazioni : Prenotazione[] = [];
  prenotazioniTable = configPrenotazione;


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
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.route}).then(r => ['']) ;
        break;
      case 'edit':
        this.router.navigate(['detail/' + $event.item.id], {relativeTo: this.route}).then(r => ['']);
        break;
      case 'delete':
        this.delete($event.item);
        break;
    }
  }


  delete(prenotazione: Prenotazione): void {
    this.prenotazioni = this.prenotazioni.filter(p => p !== prenotazione);
    if (prenotazione.id !== undefined){
      this.service.deletePrenotazione(prenotazione.id).subscribe();
    }
  }

  getPrenotazioni(): void {
    this.service.getPrenotazioni()
      .subscribe(prenotazioni => {this.prenotazioni = prenotazioni
        console.log(this.prenotazioni)});
  }
}
