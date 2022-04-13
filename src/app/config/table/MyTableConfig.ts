import {MyButtonConfig} from "../button/MyButtonConfig";

export interface MyHeaders {
  key : string;
  label : string;
}

export interface MyOrder {
  defaultColumn : string ;
  orderType : string ;
}

export interface MySearch {
  columns : string [];
}

export interface MyTableConfig {
  headers : MyHeaders [];
  order : MyOrder;
  search : MySearch ;
  pagination : MyPagination;
  action : MyButtonConfig[];
}

export class MyPagination {
  itemForPage !: number;
  itemForPageOptions !: number[];
}

export enum MyTableActionEnum {
  ADD , EDIT, DELETE
}

