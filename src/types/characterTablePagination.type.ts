import type { CharacterInfo } from "./character.type";

export type CharacterTableProps = {
    data: CharacterInfo[];
    loading: boolean;
    page: number;
    total: number;
    onPageChange: (page: number) => void;
    onSelect: (character: CharacterInfo) => void;
}