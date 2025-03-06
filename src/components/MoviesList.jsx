import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Movie from "./Movie";

export default function MoviesList() {
    const { movies } = useContext(GlobalContext);

    return (
        <div className="mb-5">
            <h1 className="mb-3">Film</h1>
            <div className="row g-4">
                {
                    movies.length === 0 ? <h3>Nessun risultato</h3> : movies.map(m => <Movie key={m.id} movie={m} />)
                }
            </div>
        </div>
    )
}