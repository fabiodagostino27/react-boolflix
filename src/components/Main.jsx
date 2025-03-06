import MoviesList from "./MoviesList";
import TvShowsList from "./TvShowsList";

export default function Main() {
    return (
        <main className="pt-3 text-white">
            <div className="container">
                <MoviesList />
                <TvShowsList />
            </div>
        </main>
    )
}