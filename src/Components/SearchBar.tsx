
import { Input } from "antd";
import type { CharacterSearchInterface } from "../Interfaces/CharacterSearch";

export function CharacterSearchBar({
  value,
  onChange,
}: CharacterSearchInterface) {
  return (
    <Input.Search
      placeholder="Buscar personaje por nombre..."
      allowClear
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ maxWidth: 300 }}
    />
  );
}