import { Component, OnInit } from '@angular/core';
import { Auto } from "../../../model/auto";
import { configAuto } from "../../../config/page/configauto";
import { ActivatedRoute, Router } from "@angular/router";
import { AutosService } from "../../../services/auto/auto.service";

@Component({
  selector: 'app-auto-page',
  templateUrl: './auto-page.component.html',
  styleUrls: ['./auto-page.component.css']
})
export class AutoPageComponent implements OnInit {

  autos : Auto[] = [];
  autosTable = configAuto;


  constructor(
    private service: AutosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getAutos();
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


  delete(auto: Auto): void {
    this.autos = this.autos.filter(u => u !== auto);
    if (auto.id !== undefined){
      this.service.deleteAuto(auto.id).subscribe();
    }
  }

  getAutos(): void {
    this.service.getAutos()
      .subscribe(autos => {this.autos = autos
        console.log(this.autos)});
  }



}

