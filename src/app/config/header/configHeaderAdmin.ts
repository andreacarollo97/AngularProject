import {MyHeaderConfig} from "./MyHeaderConfig";
import {AuthappService} from "../../services/login/authapp.service";

export const configHeaderAdmin : MyHeaderConfig = {

  item : [
    {element : 'Users', link : '/user'},
    {element : 'Auto', link : '/auto'},
    {element : 'Prenotazioni', link : '/prenotazione'},
    {element : 'Logout', link : '/logout'},
  ]

}
