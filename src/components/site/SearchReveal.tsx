import { SearchResult } from "@/types/SearchResult"

type Props = {
    results: SearchResult;
}
export const SearchReveal = ({ results }: Props) => {
    return (
        <div>
            <p className="text-3xl">{results.person.name}</p>
            <p className="text-2xl my-3 font-serif">parabéns, você tirou:</p>
            <p className="text-4xl bg-gradient-to-r from-pink-500 to-yellow-500 my-5 px-5 py-10 rounded-lg
            border-2 border-dashed border-black">{results.personMatched.name}</p>
            <p className="text-2xl font-serif ">Agora se divirta e escolha um presente para essa pessoa.</p>
        </div>
    )
}