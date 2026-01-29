import { Table, Avatar} from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CharacterInfo } from "../types/character.type";
import type { CharacterTableProps } from "../types/characterTablePagination.type";
import "../styles.css";

export function CharacterTable({
    data,
    loading,
    page,
    total,
    onPageChange,
    onSelect
}: CharacterTableProps) {
    const columns: ColumnsType<CharacterInfo> = [
        {
            title: "Foto",
            dataIndex: "image",
            key: "image",
            render: (img: string) => <Avatar src={img} size={75} />,
            responsive: ["xs", "sm", "md", "lg"]
        },
        {
            title: "Nombre",
            dataIndex: "name",
            key: "name",
            render: (name: string) => <strong>{name}</strong>,
            responsive: ["xs", "sm", "md", "lg"]
        },
        {
            title: "Género",
            dataIndex: "gender",
            key: "gender",
            render: (gender: string) => {
                const genderMap: Record<string, string> = {
                    Female: "Femenino",
                    Male:"Masculino",
                    Genderless: "Sin género",
                    unknown: "Desconocido"
                }
                return <em>{genderMap[gender] || gender}</em>
            },
            responsive: ["md", "lg"]
        },
        {
            title: "Estatus",
            dataIndex: "status",
            key: "status",
            render: (status: string) => {
                const statusMap: Record<string, string> = {
                    Alive: "Vivo",
                    Dead: "Muerto", 
                    unknown: "Desconocido"
                };
                return statusMap[status] || status;
            },
            responsive: ["xs", "sm", "md", "lg"]
        },
        {
            title: "Fecha de creación",
            dataIndex: "created",
            key: "created",
            render: (created: string) => new Date(created).toLocaleDateString('es-MX'),
            responsive: ["lg"]
        },
        {
            title: "Detalles",
            key: "actions",
            render: (_: any, record: CharacterInfo) => (
                <a
                type="link"
                onClick={(e) => {
                    e.stopPropagation(); 
                    onSelect(record);
                }}
                >
                Ver detalles
                </a>
            ),
        },
    ];

    return (
        <div className="table-wrapper">
            <Table<CharacterInfo>
                rowKey="id"
                columns={columns}
                dataSource={data}
                loading={loading}
                scroll={{ x: "max-content", y: 500 }}
                pagination={{
                    current: page,
                    total: total,
                    onChange: onPageChange,
                    pageSize: 20,
                    showSizeChanger: false,
                }}
                onRow={(record) => ({
                    onClick: () => onSelect(record),
                    style: { cursor: "pointer" },
                })}
            />
        </div>
    );
}
