import {MyTableConfig} from "./MyTableConfig";
import {configButtonDELETE} from "../button/configButtonDELETE";
import {configButtonASSOCIATE} from "../button/configButtonASSOCIATE";
import {configButtonSELECT} from "../button/configButtonSELECT";



export const configAutoSuper: MyTableConfig = {
  headers: [
    {key: 'marca', label: 'Marca'},
    {key: 'modello', label: 'Modello'},
    {key: 'targa', label: 'Targa'},
    {key: 'nomeParcoAuto', label: 'ParcoAuto'},
  ],
  order: {
    defaultColumn: 'marca',
    orderType: 'asc'
  },
  search: {
    columns: ['marca','modello','targa','nomeParcoAuto']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  },
  action: [
   configButtonSELECT,configButtonDELETE
  ]
}
