import { langToFlag } from "../data/langToFlag";

export default function TvShow(props) {
    const { name, original_name, original_language, vote_average, poster_path } = props.tvShow;
    const flag = langToFlag.find(e => e.lang === original_language);

    return (
        <div className="col-3">
            <div>
                <figure className="w-100">
                    {
                        poster_path ? <img className="w-100" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="" style={{ aspectRatio: 12 / 17 }} />
                            : <h1 className="w-100 p-2 bg-black text-white d-flex align-items-center text-center lh-lg" style={{ aspectRatio: 12 / 17 }}>{title}</h1>
                    }
                </figure>
            </div>
            <div>
                {name}
                <img src={flag ? flag.img : "https://flagicons.lipis.dev/flags/4x3/xx.svg"} alt={original_language} style={{ width: 20 }} />
                ({original_name}, {vote_average})
            </div>
        </div>
    )
}