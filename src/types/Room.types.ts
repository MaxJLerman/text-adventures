import { Door } from "./Door.types";
import { Identifiable } from "./Identifiable.types";
import { Item } from "./Item.types";

export type Room = Identifiable & {
  description: string;
  doors?: Door[];
  items?: Item[];
};
