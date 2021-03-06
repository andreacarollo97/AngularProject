import { Component, OnInit } from '@angular/core';
import { Auto } from "../../../model/auto";
import { configAuto } from "../../../config/table/configAuto";
import { ActivatedRoute, Router } from "@angular/router";
import { AutosService } from "../../../services/auto/auto.service";
import {MyTableConfig} from "../../../config/table/MyTableConfig";
import {configAutoUser} from "../../../config/table/configAutoUser";
import {ParcoAuto} from "../../../model/parcoAuto";

@Component({
  selector: 'app-auto-page',
  templateUrl: './auto-page.component.html',
  styleUrls: ['./auto-page.component.css']
})
export class AutoPageComponent implements OnInit {

  autos : Auto[] = [];
  parcoAuto !: ParcoAuto;
  autosTable !: MyTableConfig;


  constructor(
    private service: AutosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getAuto();
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.route}).then(r => ['auto']) ;
        break;
      case 'edit':
        this.router.navigate(['detail/' + $event.item.id], {relativeTo: this.route}).then(r => ['auto']);
        break;
      case 'delete':
        this.eliminaAuto($event.item.id);
        break;
    }
  }



  eliminaAuto(id : number) {
    this.service.eliminaAuto(id)
      .subscribe(response => {
        this.autos = this.autos.filter(auto => auto.id != id)
      })
  }

  getAuto(): void {
    if (sessionStorage.getItem('AuthRole') !== 'ROLE_USER') {
      this.autosTable = configAuto;
      this.service.getAuto()
        .subscribe(autos => {
          this.autos = autos;
        });
    }
    else {
      this.autosTable = configAutoUser;
      this.service.getAutoAssegnate()
        .subscribe(autos => {
          this.autos = autos;
        });
    }

  }



}

