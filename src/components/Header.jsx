import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
    const {search, setSearch, fetchMovies, fetchTvShows} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies(search);
        fetchTvShows(search)
        setSearch("")
    };

    return (
        <div className="d-flex justify-content-between p-3 bg-black align-items-center text-danger mb-3">
            <h1>Boolflix</h1>

            <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control rounded-start-2 rounded-end-0"
                    placeholder="Cerca un film o una serie Tv"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-danger rounded-start-0 rounded-end-2" type="submit">Invio</button>
            </form>
        </div>
    )
}