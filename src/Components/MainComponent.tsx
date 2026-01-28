import { CharacterTable } from "./CharacterTable";
import { useCharacters } from "../hooks/useCharacters";
import type { CharacterInfo } from "../types/character.type";

export function CharactersPage() {
  const {
    characters,
    selected,
    setSelected,
    page,
    setPage,
    total,
    loading,
  } = useCharacters();

  return (
    <>
      <CharacterTable
        data={characters}
        loading={loading}
        page={page}
        total={total}
        onPageChange={setPage}
        onSelect={(character: CharacterInfo) => {
          setSelected(character);
        }}
      />

      {/* Aquí después va el Modal */}
    </>
  );
}
