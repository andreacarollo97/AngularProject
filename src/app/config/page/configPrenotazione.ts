import {configButtonEDIT} from "../button/configButtonEDIT";
import {configButtonDELETE} from "../button/configButtonDELETE";
import {configButtonADD} from "../button/configButtonADD";
import {MyTableConfig} from "../table/MyTableConfig";


export const configPrenotazione: MyTableConfig = {
  headers: [
    {key: 'id', label: 'ID'},
    {key: 'dataInizio', label: 'Data di Inizio'},
    {key: 'dataFine', label: 'Data di Fine'},
    {key: 'stato', label: 'Stato'},
    {key: 'auto_id', label: 'AutoID'},
    {key: 'user_id', label: 'UserID'},
  ],
  order: {
    defaultColumn: 'dataInizio',
    orderType: 'asc'
  },
  search: {
    columns: ['dataInizio','dataFine','stato','auto_id','user_id']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  },
  action: [
    configButtonADD,configButtonEDIT,configButtonDELETE
  ]
}
