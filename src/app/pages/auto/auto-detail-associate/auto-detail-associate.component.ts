import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {AutosService} from "../../../services/auto/auto.service";
import {ParcoAuto} from "../../../model/parcoAuto";
import {ParcoAutoService} from "../../../services/parcoAuto/parco-auto.service";
import {configParcoAssociate} from "../../../config/table/configParcoAssociate";




@Component({
  selector: 'app-auto-detail-associate',
  templateUrl: './auto-detail-associate.component.html',
  styleUrls: ['./auto-detail-associate.component.css']
})
export class AutoDetailAssociateComponent implements OnInit {


  auto !: any;
  autoElement : any[] = [];
  form !: FormGroup;
  parcoAuto !: ParcoAuto;
  autosTable = configParcoAssociate;
  autoId ?: number;
  parchiAuto : ParcoAuto[] = [];



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autoService: AutosService,
    private parcoService : ParcoAutoService,
    private location : Location,
  ){
  }

  ngOnInit(): void {
    this.getParchiAuto();
    this.route.params
      .subscribe(params => {
        this.autoId = params['id'];
      })
    if (this.autoId) {
      this.autoService.ottieniAuto(this.autoId)
        .subscribe(response => {
          this.auto = {
            targa : response.targa,
            marca : response.marca,
            modello : response.modello
          };
          this.autoElement[0] = this.auto.marca;
          this.autoElement[1] = this.auto.modello;
          this.autoElement[2] = this.auto.targa;
        });

    }
  }

  onSubmit(){
  }


  goBack(): void {
    this.location.back();
  }





  btnClicked($event: any) {
    switch ($event.action) {
      case 'associate':
        if(this.autoId)
        this.associaAuto($event.item.id,this.autoId)
        this.router.navigate(['/']);
    }
  }


  getParchiAuto(): void {
    this.parcoService.elencoParchiAuto()
      .subscribe(parchi =>  this.parchiAuto = parchi)
  }



  associaAuto(idAuto : number, idParcoAuto : number) {
    this.parcoService.associaAuto(idParcoAuto,idAuto)
      .subscribe({
      })
  }

}
