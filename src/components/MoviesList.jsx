import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Movie from "./Movie";

export default function MoviesList() {
    const { movies } = useContext(GlobalContext);

    return (
        <div>
            <h1>Lista Film</h1>
            <ul>
                {
                    movies.length === 0 ? <h3>Nessun risultato</h3> : movies.map(m => <Movie key={m.id} movie={m} />)
                }
            </ul>
        </div>
    )
}