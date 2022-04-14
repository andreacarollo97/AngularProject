import {configButtonEDIT} from "../button/configButtonEDIT";
import {configButtonDELETE} from "../button/configButtonDELETE";
import {configButtonADD} from "../button/configButtonADD";
import {MyTableConfig} from "../table/MyTableConfig";


export const configAuto: MyTableConfig = {
  headers: [
    {key: 'id', label: 'ID'},
    {key: 'marca', label: 'Marca'},
    {key: 'modello', label: 'Modello'},
    {key: 'targa', label: 'Targa'},
  ],
  order: {
    defaultColumn: 'marca',
    orderType: 'asc'
  },
  search: {
    columns: ['marca','modello','targa']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  },
  action: [
    configButtonADD,configButtonEDIT,configButtonDELETE
  ]
}
