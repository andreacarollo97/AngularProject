import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div style="margin: 20px">
    <a *ngFor="let el of pages" [ngClass]="{'active' : active == el}" (click)="active = el" > {{el}}</a>
  </div>
  `,
  styles: [`
  h1 { font-family: Lato; }
  a{

  padding:  10px 20px;
  background: #ccc;
  border: 1px solid #efefef;
  cursor: pointer;
}

a.active{
  color: #e2e2e2;
  background: #2e2e2e;
}
  `]
})
export class HelloComponent {
  @Input() page !: number;

  active = 0;

  pages

  constructor() {
    this.pages = Array(5).fill(0).map((x, i) => i);
    this.pages.pop()

  }

  get currentPage (){
    return this.active;
  }
}
