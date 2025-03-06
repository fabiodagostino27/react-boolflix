import CountryFlag from "react-country-flag";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Movie(props) {
    const { title, original_title, original_language, vote_average, poster_path } = props.movie;
    const {starsRating} = useContext(GlobalContext);

    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="position-relative">
                <div className="w-100">
                    {
                        poster_path ? <img className="w-100" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="" style={{ aspectRatio: 12 / 18 }} />
                            : <h3 className="w-100 p-2 bg-black text-white d-flex align-items-center justify-content-center text-center lh-base" style={{ aspectRatio: 12 / 18 }}>{title}</h3>
                    }
                </div>

                <div className="details d-none w-100 h-100 position-absolute top-0 start-0">

                </div>
            </div>
            {/*<div>
                {title}, {original_language}
                <CountryFlag countryCode={original_language === "en" ? "gb" : original_language === "ja" ? "jp" : original_language === "ko" ? "kr" : original_language} svg />
                ({original_title}, {starsRating(vote_average)})
            </div>*/}
        </div>
    )
}