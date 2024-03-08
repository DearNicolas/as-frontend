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
                className="w-full p-3 rounded-lg text-white text-4xl
                border-b-4 border-white disabled:opacity-20 mt-3 transition ease-in-out delay-150 bg-zinc-700 
                hover:-translate-y-1 hover:scale-110 hover:bg-zinc-800 duration-300"
                onClick={() => onSearchButton(cpfInput)}
                disabled={loading}
            >{loading ? 'Buscando...' : 'Entrar'}</button>
        </div>
    )
}