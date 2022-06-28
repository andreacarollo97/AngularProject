import {MyTableConfig} from "./MyTableConfig";
import {configButtonPRENOTA} from "../button/configButtonPRENOTA";


export const configListAuto: MyTableConfig = {
  headers: [
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
    configButtonPRENOTA
  ]
}
