import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=it-IT&page=1`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_AUTH
        }
    };

    const fetchMovies = () => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    };

    return (
        <GlobalContext.Provider value={{search, setSearch, movies, fetchMovies}}>
            {children}
        </GlobalContext.Provider>
    )
};

export {GlobalContext, GlobalProvider}