import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
    const {search, setSearch, fetchMovies} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies(search);
        setSearch("")
    };

    return (
        <div>
            <h1>Boolflix</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Invio</button>
            </form>
        </div>
    )
}