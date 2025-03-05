import MoviesList from "./MoviesList";
import TvShowsList from "./TvShowsList";

export default function Main() {
    return (
        <main className="container">
            <MoviesList />
            <TvShowsList />
        </main>
    )
}