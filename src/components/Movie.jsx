import { langToFlag } from "../data/langToFlag";

export default function Movie(props) {
    const { title, original_title, original_language, vote_average, poster_path } = props.movie;
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
                {title}
                <img src={flag ? flag.img : "https://flagicons.lipis.dev/flags/4x3/xx.svg"} alt={original_language} style={{ width: 20 }} />
                ({original_title}, {vote_average})
            </div>
        </div>
    )
}