import { Action } from "./Action.types";
import { Identifiable } from "./Identifiable.types";

type NonContainerItem = {
  container: false;
};

type ContainerItem = {
  container: true;
  contains?: Item;
};

export type Item = Identifiable & {
  name: string;
  description: string;
  actions: Action[];
  breakable: boolean;
  edible: boolean;
} & (NonContainerItem | ContainerItem);

export interface Items {
  [key: string]: Item;
}
