import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import TvShow from "./TvShow";


export default function TvShowsList() {
    const { tvShows } = useContext(GlobalContext);

    return (
        <div>
            <h1>Lista serie Tv</h1>
            <div className="row">
                {
                    tvShows.length === 0 ? <h3>Nessun risultato</h3> : tvShows.map(t => <TvShow key={t.id} tvShow={t} />)
                }
            </div>
        </div>
    )
}