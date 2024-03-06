"use client"

import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
    loading: boolean;
}

export const SearchForm = ({ onSearchButton, loading }: Props) => {
    const [cpfInput, setCpfInput] = useState('');

    return (
        <div>
            <p className="mb-3 text-xl">Qual seu CPF</p>
            <input
                type="text"
                inputMode="numeric"
                placeholder="Digite seu CPF"
                className="w-full p-3 bg-white text-black text-center text-4xl outline-none rounded-lg disabled:opacity-20"
                autoFocus
                value={cpfInput}
                onChange={e => setCpfInput(escapeCPF(e.target.value))}
                disabled={loading}
            />
            <button
                className="w-full p-3 rounded-lg bg-gradient-to-r from-gray-300 to-black text-white text-4xl
                border-b-4 border-white disabled:opacity-20 mt-3 hover:from-black hover:via-gray-300 hover:to-black"
                onClick={() => onSearchButton(cpfInput)}
                disabled={loading}
            >{loading ? 'Buscando...' : 'Entrar'}</button>
        </div>
    )
}