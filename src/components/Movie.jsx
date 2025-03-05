export default function Movie(props) {
    const {title, original_title, original_language, vote_average} = props.movie;

    return (
        <li>{title} ({original_title}, {original_language}, {vote_average})</li>
    )
}