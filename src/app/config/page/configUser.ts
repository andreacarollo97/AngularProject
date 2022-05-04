import {configButtonEDIT} from "../button/configButtonEDIT";
import {configButtonDELETE} from "../button/configButtonDELETE";
import {configButtonADD} from "../button/configButtonADD";
import {MyTableConfig} from "../table/MyTableConfig";


export const configUser: MyTableConfig = {
  headers: [
    {key: 'nome', label: 'Nome'},
    {key: 'cognome', label: 'Cognome'},
    {key: 'email', label: 'Mail'},
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
  },
  action: [
    configButtonADD,configButtonEDIT,configButtonDELETE
      ]
}

