import { Modal, Avatar, Descriptions, Tag } from "antd";
import type { CharacterModalProps } from "../types/modal.type";

export function CharacterModal({ character, onClose }: CharacterModalProps) {
  const statusMap = {
    Alive: { text: "Vivo", color: "green" },
    Dead: { text: "Muerto", color: "red" },
    unknown: { text: "Desconocido", color: "default" },
  };

  const genderMap = {
    Female: "Femenino",
    Male:"Masculino",
    Genderless: "Sin género",
    unknown: "Desconocido"
  }

  const gender = genderMap[character.gender] || character.gender;

  const status = statusMap[character.status];

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      title={character.name}
      centered
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <Avatar
          src={character.image}
          size={120}
          style={{ marginBottom: 12 }}
        />
      </div>

      <Descriptions bordered column={1} size="small">
        <Descriptions.Item label="Nombre">
          <strong>{character.name}</strong>
        </Descriptions.Item>

        <Descriptions.Item label="Género">
          {gender}
        </Descriptions.Item>

        <Descriptions.Item label="Especie">
          {character.species}
        </Descriptions.Item>

        <Descriptions.Item label="Origen">
          {character.origin.name}
        </Descriptions.Item>

        <Descriptions.Item label="Estatus">
          <Tag color={status.color}>{status.text}</Tag>
        </Descriptions.Item>

        <Descriptions.Item label="Fecha de creación">
          {new Date(character.created).toLocaleDateString("es-MX")}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
