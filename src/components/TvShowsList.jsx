import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import TvShow from "./TvShow";


export default function TvShowsList() {
    const { tvShows } = useContext(GlobalContext);

    return (
        <div className="mb-4">
            <h1 className="mb-3">Serie TV</h1>
            <div className="row g-4">
                {
                    tvShows.length === 0 ? <h3>Nessun risultato</h3> : tvShows.map(t => <TvShow key={t.id} tvShow={t} />)
                }
            </div>
        </div>
    )
}