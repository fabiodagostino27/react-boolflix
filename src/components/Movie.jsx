export default function Movie(props) {
    const {title, original_title, original_language, vote_average} = props.movie;

    const langToFlag = [
        { lang: "en", img: 'https://flagicons.lipis.dev/flags/4x3/gb.svg' },
        { lang: "it", img: 'https://flagicons.lipis.dev/flags/4x3/it.svg' },
        { lang: "es", img: 'https://flagicons.lipis.dev/flags/4x3/es.svg' },
        { lang: "fr", img: 'https://flagicons.lipis.dev/flags/4x3/fr.svg' },
        { lang: "de", img: 'https://flagicons.lipis.dev/flags/4x3/de.svg' },
        { lang: "pt", img: 'https://flagicons.lipis.dev/flags/4x3/pt.svg' },
        { lang: "ru", img: 'https://flagicons.lipis.dev/flags/4x3/ru.svg' },
        { lang: "ja", img: 'https://flagicons.lipis.dev/flags/4x3/jp.svg' },
        { lang: "zh", img: 'https://flagicons.lipis.dev/flags/4x3/cn.svg' },
        { lang: "ar", img: 'https://flagicons.lipis.dev/flags/4x3/sa.svg' }
    ];

    const flag = langToFlag.find(e => e.lang === original_language);

    return (
        <li>
            {title} 
            <img src={flag ? flag.img : "https://flagicons.lipis.dev/flags/4x3/xx.svg"} alt={original_language} style={{width: 20}} />
            ({original_title}, {vote_average})
        </li>
    )
}