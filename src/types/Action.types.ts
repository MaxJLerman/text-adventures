import { Actions } from "@/core/action.core";

export type Action = Lowercase<keyof typeof Actions>;
