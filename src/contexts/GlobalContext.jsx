import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [search, setSearch] = useState("");
    
    const urlMovies = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=it-IT&page=1`;
    const urlTvShows = `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=it-IT&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_AUTH
        }
    };

    const fetchMovies = () => {
        fetch(urlMovies, options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    };

    const fetchTvShows = () => {
        fetch(urlTvShows, options)
            .then(res => res.json())
            .then(data => setTvShows(data.results))
            .catch(err => console.error(err));
    };

    const starsRating = (vote_average) => {
        const roundVote = Math.round(vote_average / 2);
        const arrayStars = [];

        for (let i = 1; i <=5; i++) {
            if (i <= roundVote) {
                arrayStars.push(<i key={i} className="fa-solid fa-star"></i>) 
            } else {
                arrayStars.push(<i key={i} className="fa-regular fa-star"></i>) 
            }
        };
        
        return arrayStars;
    };

    return (
        <GlobalContext.Provider value={{search, setSearch, movies, fetchMovies, tvShows, fetchTvShows, starsRating}}>
            {children}
        </GlobalContext.Provider>
    )
};

export {GlobalContext, GlobalProvider}