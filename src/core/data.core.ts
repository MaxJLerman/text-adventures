import { GameData } from "@/types/GameData.types";
import { items as i } from "./items.core";

export const data: GameData = [
  {
    name: "flag1",
    startingRoom: {
      id: 0,
      description: "",
      doors: [
        {
          locked: true,
          position: "on your left",
        },
      ],
      items: [i.SILVER_KEY, i.RED_APPLE],
    },
  },
];
