import CountryFlag from "react-country-flag";

export default function Movie(props) {
    const { title, original_title, original_language, vote_average, poster_path } = props.movie;

    const starsRating = () => {
        const roundVote = Math.round(vote_average / 2);
        const arrayStars = [];

        for (let i = 1; i <=5; i++) {
            if (i <= roundVote) {
                arrayStars.push(<i class="fa-solid fa-star"></i>) 
            } else {
                arrayStars.push(<i class="fa-regular fa-star"></i>) 
            }
        };
        
        return arrayStars;
    }

    return (
        <div className="col-3">
            <div>
                <figure className="w-100">
                    {
                        poster_path ? <img className="w-100" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="" style={{ aspectRatio: 12 / 17 }} />
                            : <h1 className="w-100 p-2 bg-black text-white d-flex align-items-center justify-content-center text-center lh-lg" style={{ aspectRatio: 12 / 17 }}>{title}</h1>
                    }
                </figure>
            </div>
            <div>
                {title}, {original_language}
                <CountryFlag countryCode={original_language === "en" ? "gb" : original_language === "ja" ? "jp" : original_language === "ko" ? "kr" : original_language} svg />
                ({original_title}, {starsRating()})
            </div>
        </div>
    )
}