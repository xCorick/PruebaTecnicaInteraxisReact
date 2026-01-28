import { Table, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CharacterInfo } from "../types/character.type";
import type { CharacterTableProps } from "../types/characterTablePagination.type";

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
            render: (img: string) => <Avatar src={img} size={48} />,
        },
        {
            title: "Nombre",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Género",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Estatus",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Fecha de creación",
            dataIndex: "created",
            key: "created",
        }
        ];

        return (
        <Table<CharacterInfo>
            rowKey="id"
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={{
                current: page,
                total: total,
                onChange: onPageChange,
                showSizeChanger: false,
            }}
            onRow={(record) => ({
                onClick: () => onSelect(record),
                style: { cursor: "pointer" },
            })}
        />
    );
}