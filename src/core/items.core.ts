import { Items } from "@/types/Item.types";
import { Actions as a } from "./action.core";

export const items: Items = {
  SILVER_KEY: {
    id: 1001,
    name: "silver key",
    description: "A silver key that unlocks a silver door",
    actions: [a.DROP, a.EXAMINE, a.TAKE, a.USE],
    breakable: false,
    edible: false,
    container: false,
  },
  RED_APPLE: {
    id: 1002,
    name: "red apple",
    description: "A red apple. Looks tasty",
    actions: [a.DROP, a.EXAMINE, a.TAKE, a.USE],
    breakable: true,
    edible: true,
    container: false,
  },
  GLOWING_CRYSTAL: {
    id: 1003,
    name: "glowing crystal",
    description: "A crystal that emits a soft, otherworldly glow.",
    actions: [a.BREAK, a.DROP, a.EXAMINE, a.TAKE, a.USE],
    breakable: true,
    edible: false,
    container: false,
  },
  GOLDEN_KEY: {
    id: 1004,
    name: "golden key",
    description: "A glistening key made of gold. It appears important.",
    actions: [a.DROP, a.EXAMINE, a.TAKE, a.USE],
    breakable: false,
    edible: false,
    container: false,
  },
  TRAVELERS_BACKPACK: {
    id: 1005,
    name: "traveler's backpack",
    description: "A sturdy backpack with plenty of space to carry essentials.",
    actions: [a.DROP, a.EXAMINE, a.TAKE, a.USE],
    breakable: false,
    edible: false,
    container: true,
  },
  WATER_BUCKET: {
    id: 1006,
    name: "water bucket",
    description: "A sturdy bucket filled with clear, refreshing water.",
    actions: [a.DROP, a.EMPTY, a.EXAMINE, a.TAKE],
    breakable: false,
    edible: false,
    container: true,
  },
};
