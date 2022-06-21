import {ParcoAuto} from "./parcoAuto";

export interface Auto {
  id ?: number;
  marca: string;
  modello: string;
  targa: string;
  parcoAuto : ParcoAuto;
}
