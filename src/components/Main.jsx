import MoviesList from "./MoviesList";
import TvShowsList from "./TvShowsList";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Main() {
    const { movies, tvShows } = useContext(GlobalContext);

    return (
        <main className="pt-3 text-white">
            <div className="container h-100">
                {
                    movies.length > 0 || tvShows.length > 0 ?  <><MoviesList /> <TvShowsList /></>  :
                        <div className="tip w-100 h-100 d-flex align-items-center justify-content-center">Cerca un film o una serie TV!</div>
                }
            </div>
        </main>
    )
}