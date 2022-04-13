import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MyButtonConfig } from '../config/button/MyButtonConfig';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})


export class MyButtonComponent implements OnInit {

  @Input() buttonConfig!: MyButtonConfig;

  @Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(action: string): void {
    this.eventEmitter.emit(action);
  }


}
