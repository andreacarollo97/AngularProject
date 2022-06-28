import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {MyTableConfig} from '../config/table/MyTableConfig';
import * as _ from "lodash";



@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() tableConfig!: MyTableConfig;
  @Input() data !: any [];

  @Output() eventEmitter = new EventEmitter<any>();


  orderStatus !: boolean;

  element !: string;

  filterData !: any [];

  key !: string;

  currentPage1: number = 1;

  totalNumberPages!: number;

  elementForPage!: number;





  constructor() {

  }

  ngOnInit(): void{
    this.elementForPage = this.tableConfig.pagination.itemForPage
  }

  ngOnChanges(): void {
    this.orderStatus = this.tableConfig.order.orderType === 'asc'
    this.filterData = this.data
    this.key = this.tableConfig.order.defaultColumn
    this.totalNumberPages = _.ceil(this.data.length / this.elementForPage);
    this.setElement(this.elementForPage);
  }

  sortTable(column: string): void {
    if (this.orderStatus) {
      this.data.sort((a, b) => {
        if (a[column] > b[column]) {
          return 1
        }
        if (a[column] < b[column]) {
          return -1
        }
        return 0
      })

    } else {
      this.data.sort((a, b) => {
        if (a[column] > b[column]) {
          return -1
        }
        if (a[column] < b[column]) {
          return 1
        }
        return 0
      })

    }
    this.orderStatus = !this.orderStatus
  }

  searchElement (key : string, element : string) {
    this.filterData = this.data.filter(value =>
      value[key].toLowerCase().indexOf(element.toLocaleLowerCase()) !== -1
    )
    this.totalNumberPages = _.ceil(this.filterData.length / this.elementForPage);
  }


  currentPage(n: number): void {
    this.currentPage1 = n;
  }


  setElement(elementForPage1: number): void {
    this.elementForPage = elementForPage1;
    this.currentPage(1);

    this.totalNumberPages = _.ceil(this.data.length / this.elementForPage);
  }

  buttonClicked(event: string, data: any): void {
    const eventClicked = {item: data, action: event};
    this.eventEmitter.emit(eventClicked);
  }


}
