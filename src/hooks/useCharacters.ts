import { useEffect, useState } from "react";
import { getCharacters } from "../Services/data.service";
import type { ApiCharacterResponse } from "../types/apiResponse.type";
import type { CharacterParams } from "../types/character.type";

export function useCharacters() {
  const [characters, setCharacters] = useState<ApiCharacterResponse["results"]>([]);
  const [selected, setSelected] = useState<ApiCharacterResponse["results"][0] | null>(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<CharacterParams["status"]>("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (page !== 1) setPage(1);
    }, [name, status]);

    useEffect(() => {
        setLoading(true);

        getCharacters({ page, name, status })
        .then((data) => {
            setCharacters(data.results);
            setTotal(data.info.count);
        })
        .finally(() => setLoading(false));

    }, [page, name, status]);

    return {
        characters,
        selected,
        setSelected,

        page,
        setPage,
        total,

        name,
        setName,
        status,
        setStatus,

        loading,
    };
}
