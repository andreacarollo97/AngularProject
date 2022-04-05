import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from '../config/table/MyTableConfig';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() tableConfig!: MyTableConfig;
  @Input() data !: any [];

  orderStatus !: boolean;

  element !: string;

  filterData !: any [];

  key !: string;



  constructor() {

  }

  ngOnInit(): void {
    this.orderStatus = this.tableConfig.order.orderType === 'asc'
    this.sortTable(this.tableConfig.order.defaultColumn)
    this.filterData = this.data
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
  }


}
