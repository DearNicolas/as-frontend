type Props = {
    value: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ value, onClick, disabled }: Props) => {
    return (
        <button
            onClick={onClick}
            className="w-full my-3 p-3 rounded
            bg-gradient-to-r from-white to-gray-600 text-white text-center uppercase font-bold
            hover:from-gray-600 hover:to-white
            border-b-4 border-white/10 shadow-inner"
            disabled={disabled}
        >{value}</button>
    )
}