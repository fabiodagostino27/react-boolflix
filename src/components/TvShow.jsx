import CountryFlag from "react-country-flag";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function TvShow(props) {
    const { name, original_name, original_language, vote_average, poster_path } = props.tvShow;
    const {starsRating} = useContext(GlobalContext);

    return (
        <div className="col-3">
            <div>
                <figure className="w-100">
                    {
                        poster_path ? <img className="w-100" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="" style={{ aspectRatio: 12 / 18 }} />
                            : <h3 className="w-100 p-2 bg-black text-white d-flex align-items-center justify-content-center text-center lh-base" style={{ aspectRatio: 12 / 18 }}>{name}</h3>
                    }
                </figure>
            </div>
            {/*<div>
                {name}
                <CountryFlag countryCode={original_language === "en" ? "gb" : original_language === "ja" ? "jp" : original_language === "ko" ? "kr" : original_language} svg />
                ({original_name}, {starsRating(vote_average)})
            </div>*/}
        </div>
    )
}