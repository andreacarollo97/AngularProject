import {MyTableConfig} from "../table/MyTableConfig";


export const configAutos: MyTableConfig = {
  headers: [
    {key: 'marca', label: 'Marca'},
    {key: 'modello', label: 'Modello'},
    {key: 'targa', label: 'Targa'},
    {key: 'parcoAuto', label: 'ParcoAuto'},
  ],
  order: {
    defaultColumn: 'marca',
    orderType: 'asc'
  },
  search: {
    columns: ['marca','modello','targa','parcoAuto']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  },
  action: [
  ]
}
