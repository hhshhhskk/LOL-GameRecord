import { atom } from "recoil";

export const summonerNameAtom = atom<string>({
    key: "summonerName",
    default: "",
})