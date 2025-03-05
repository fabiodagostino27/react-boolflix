import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Main() {
    const { movie, movies, fetchMovies } = useContext(GlobalContext);

    return (
        <main>
            <h1>Lista film</h1>

            <ul>
                {
                    movies.map(m => {
                        return (
                            <li key={m.id}>{m.title} (Titolo originale: {m.original_title}, lingua: {m.original_language}, voto: {m.vote_average})</li>
                        )
                    })
                }
            </ul>

        </main>
    )
}