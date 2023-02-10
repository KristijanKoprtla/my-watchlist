import movies from "../data/movies.json";

import { useState } from 'react';
import Watchitem from "../components/WatchItem";

const MovieSearch = (props) => {

    const [filteredMovies, SetFilteredMovies] = useState(movies)
    const search = (e) => {
        const value = e.target.value
        const filtered = movies.filter(movie => movie.title.includes(value))

        SetFilteredMovies(filtered)
    }

    return (
        <>
        <h1>Pretrazivanje filmova</h1>
        <input type="text" onChange={search}/>
        {
            filteredMovies.map(movie => {
                return (
                    <Watchitem
                        title={movie.title}                  
                    />
                )
            })
            }
        </>
    )
}

export default MovieSearch;