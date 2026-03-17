import { Article } from "@/types/article"

import { kryzys } from "./kryzys"
import { odbudowa } from "./odbudowa"
import { wzrost } from "./wzrost"
import { ojcostwo } from "./ojcostwo"

export const worlds = {
  kryzys,
  odbudowa,
  wzrost,
  ojcostwo
}

export type WorldKey = keyof typeof worlds