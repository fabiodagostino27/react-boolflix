import { langToFlag } from "../data/langToFlag";

export default function TvShow(props) {
    const { name, original_name, original_language, vote_average } = props.tvShow;
    const flag = langToFlag.find(e => e.lang === original_language);

    return (
        <li>
            {name}
            <img src={flag ? flag.img : "https://flagicons.lipis.dev/flags/4x3/xx.svg"} alt={original_language} style={{ width: 20 }} />
            ({original_name}, {vote_average})
        </li>
    )
}