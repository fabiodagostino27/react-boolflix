import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
    const {movie, setMovie} = useContext(GlobalContext);

    return (
        <div>
            <h1>Boolflix</h1>

            <form>
                <input type="text"
                    valuie={movie}
                    onChange={(e) => setMovie(e.target.value)} />
                <button type="submit">Invio</button>
            </form>
        </div>
    )
}