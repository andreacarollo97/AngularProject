import {MyTableConfig} from "./MyTableConfig";
import {configButtonADD} from "../button/configButtonADD";
import {configButtonEDIT} from "../button/configButtonEDIT";
import {configButtonDELETE} from "../button/configButtonDELETE";
import {configButtonASSOCIATE} from "../button/configButtonASSOCIATE";

export const configParcoAssociate: MyTableConfig = {
  headers: [
    {key: 'nome', label: 'Nome'},
    {key: 'cittadina', label: 'Città'},
    {key: 'indirizzo', label: 'Indirizzo'},
  ],
  order: {
    defaultColumn: 'nome',
    orderType: 'asc'
  },
  search: {
    columns: ['nome', 'cittadina', 'indirizzo']
  },
  pagination: {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 25]
  },
  action: [
    configButtonASSOCIATE
  ]
}
