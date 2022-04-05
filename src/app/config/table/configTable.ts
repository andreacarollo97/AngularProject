import {MyTableConfig} from "./MyTableConfig";

export const configUserTable: MyTableConfig = {
  headers: [
    {key: 'nome', label: 'Nome'},
    {key: 'cognome', label: 'Cognome'},
    {key: 'email', label: 'Mail'}
  ],
  order: {
    defaultColumn: 'nome',
    orderType: 'asc'
  },
  search: {
    columns: ['nome','cognome','email']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  }


}

