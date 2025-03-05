import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=it-IT&page=1`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_AUTH
        }
    }

    const [movies, setMovies] = useState([]);
}