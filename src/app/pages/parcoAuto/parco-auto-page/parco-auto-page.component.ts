import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ParcoAuto} from "../../../model/parcoAuto";
import {ParcoAutoService} from "../../../services/parcoAuto/parco-auto.service";
import {configParco} from "../../../config/table/configParco";

@Component({
  selector: 'app-parco-auto-page',
  templateUrl: './parco-auto-page.component.html',
  styleUrls: ['./parco-auto-page.component.css']
})
export class ParcoAutoPageComponent implements OnInit {

  parchiAuto : ParcoAuto[] = [];
  parcoAutoTable = configParco;


  constructor(
    private service: ParcoAutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getParchiAuto();
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.route}).then(r => ['parcoAuto']) ;
        break;
      case 'edit':
        this.router.navigate(['detail/' + $event.item.id], {relativeTo: this.route}).then(r => ['parcoAuto']);
        break;
      case 'delete':
        this.eliminaParcoAuto($event.item.id);
        break;
    }
  }



  eliminaParcoAuto(id : number) {
    this.service.eliminaParcoAuto(id)
      .subscribe(response => {
        this.parchiAuto = this.parchiAuto.filter(parco => parco.id != id)
      })
  }

  getParchiAuto(): void {
    this.service.elencoParchiAuto()
      .subscribe(parchi =>  this.parchiAuto = parchi);
  }

}
