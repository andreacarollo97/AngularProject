import { Component, OnInit } from '@angular/core';
import {Auto} from "../../../model/auto";
import {ParcoAuto} from "../../../model/parcoAuto";
import {MyTableConfig} from "../../../config/table/MyTableConfig";
import {AutosService} from "../../../services/auto/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {configAutoSuper} from "../../../config/table/configAutoSuper";
import {ParcoAutoService} from "../../../services/parcoAuto/parco-auto.service";

@Component({
  selector: 'app-auto-page-super',
  templateUrl: './auto-page-super.component.html',
  styleUrls: ['./auto-page-super.component.css']
})
export class AutoPageSuperComponent implements OnInit {


  autos : Auto[] = [];
  parcoAuto !: ParcoAuto;
  autosTable !: MyTableConfig;


  constructor(
    private autoService: AutosService,
    private parcoService: ParcoAutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getAuto();
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'select':
        this.router.navigate(['selected/' + $event.item.id], {relativeTo: this.route}).then(r => ['auto']);
        break;
      case 'delete':
        this.eliminaAuto($event.item.id);
        break;
    }
  }

  eliminaAuto(id : number) {
    this.autoService.eliminaAuto(id)
      .subscribe(response => {
        this.autos = this.autos.filter(auto => auto.id != id)
      })
  }

  getAuto(): void {
      this.autosTable = configAutoSuper;
      this.parcoService.elencoAutoLibere()
        .subscribe(autos => {
          this.autos = autos;
        });
    }

}
