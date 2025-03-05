import { langToFlag } from "../data/langToFlag";

export default function Movie(props) {
    const {title, original_title, original_language, vote_average} = props.movie;
    const flag = langToFlag.find(e => e.lang === original_language);

    return (
        <div>
            {title} 
            <img src={flag ? flag.img : "https://flagicons.lipis.dev/flags/4x3/xx.svg"} alt={original_language} style={{width: 20}} />
            ({original_title}, {vote_average})
        </div>
    )
}