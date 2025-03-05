import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Movie from "./Movie";

export default function Main() {
    const { movie, movies, fetchMovies } = useContext(GlobalContext);

    return (
        <main>
            <h1>Lista film</h1>
            <ul>
                {
                    movies.length === 0 ? <h3>Nessun risultato</h3> :
                    movies.map(m => <Movie key={m.id} movie={m} />)
                }
            </ul>
        </main>
    )
}