import { atom } from "recoil";

export const summonerNameAtom = atom<string | null>({
    key: "summonerName",
    default: "",
});
