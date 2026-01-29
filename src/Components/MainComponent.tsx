import { CharacterTable } from "./CharacterTable";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterModal } from "./ModalInfoCard";
import { LoadingSpinner } from "./LoadingSpinner";
import {  CharacterSearchBar  } from "./SearchBar";
import type { CharacterInfo } from "../types/character.type";

export function CharactersPage() {
  const {
    characters,
    selected,
    setSelected,
    page,
    setPage,
    setName,
    total,
    name,
    loading,
  } = useCharacters();

  return (
    <>
    {loading && <LoadingSpinner fullscreen />}
      <div>
        <h1>Explorador de Personajes de Rick y Morty</h1>
      </div>
      <div style={{ marginBottom: 16 }}>
        <CharacterSearchBar value={name} onChange={setName} />
      </div>
      
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

      {selected && (
        <CharacterModal
          character={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
