import { Group } from "@/types/Group"
import { ItemButton } from "../ItemButton";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import * as api from '@/api/admin';

type Props = {
    item: Group;
    refreshAction: () => void;
    onEdit: (group: Group) => void;
}
export const GroupItem = ({ item, refreshAction, onEdit }: Props) => {

    const handleDeletButton = async () => {
        if (confirm('Item certeza que deseja excluir este grupo?')) {
            await api.deleteGroup(item.id_event, item.id);
            refreshAction();
        }
    }

    return (
        <div className="border border-white bg-black rounded p-3 mb-3 flex items-center">
            <div className="flex-1">{item.name}</div>
            <ItemButton
                IconElement={FaRegEdit}
                onClick={() => onEdit(item)}
            />
            <ItemButton
                IconElement={FaRegTrashAlt}
                onClick={handleDeletButton}
            />
        </div>
    );
}

export const GroupItemPlaceholder = () => {
    return (
        <div className="w-full h-16 border border-gray-700 rounded mb-3 
            bg-gradient-to-r from-gray-900 to-gray-950 animate-pulse"></div>
    )
}

export const GroupItemNotFound = () => {
    return (
        <div className="text-center py-4 text-gray-500">Não há Grupos neste evento</div>
    )
}