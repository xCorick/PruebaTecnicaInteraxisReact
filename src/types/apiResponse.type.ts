import type { CharacterInfo } from "./character.type";

export type ApiCharacterResponse = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: CharacterInfo[];
}