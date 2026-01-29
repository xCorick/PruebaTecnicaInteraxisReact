import type { CharacterInfo } from "./character.type";

export type CharacterModalProps = {
  character: CharacterInfo;
  onClose: () => void;
};