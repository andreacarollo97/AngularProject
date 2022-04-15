import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Auto} from "../../../model/auto";
import {AutosService} from "../../../services/auto/auto.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {

  auto !: Auto;
  autos : Auto[] = [];

  form !: FormGroup;
  autoId !: number;

  constructor(
    private route: ActivatedRoute,
    private service: AutosService,
    private location: Location,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      'marca': ['', Validators.required],
      'modello': ['', Validators.required],
      'targa': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getAuto();
  }


  getAuto(): void {
    this.autoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.autoId) {
      this.service.getAuto(Number(this.autoId))
        .subscribe(auto => {
          this.auto = auto;
          this.form.setValue({
            marca : this.auto.marca,
            modello : this.auto.modello,
            targa : this.auto.targa
          });
        });
    }
    else {
      this.auto = {id : undefined, targa : '', marca : '', modello : ''}
    }
  }



  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    this.auto = this.form.value;
    if(!this.autoId){
      this.service.addAuto(this.auto)
        .subscribe(user => {
          this.autos.push(user);
          this.goBack()
        });
    }
    else{
      if (this.auto) {
        this.auto.id = this.autoId;
        console.log(this.auto)
        this.service.updateAuto(this.auto)
          .subscribe(() => this.goBack());
      }
    }

  }


}












