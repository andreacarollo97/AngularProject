import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Auto} from "../../../model/auto";
import {AutosService} from "../../../services/auto/auto.service";

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {

  auto !: Auto;
  autos : Auto[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: AutosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAuto();
  }


  getAuto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getAuto(Number(id))
        .subscribe(auto => this.auto = auto);
    }
    else {
      this.auto = {id : undefined, targa : '', marca : '', modello : ''}
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.auto) {
      this.service.updateAuto(this.auto)
        .subscribe(() => this.goBack());
    }
  }

  add(): void {
    this.service.addAuto(this.auto)
      .subscribe(user => {
        this.autos.push(user);
      });
    this.goBack()
  }



}
