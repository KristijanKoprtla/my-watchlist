import movies from "../data/movies.json";

import { useState } from 'react';
import Watchitem from "../components/WatchItem";

const MovieSearch = () => {
    const showMovieRating = (movie, rating) => {
        alert(`Rating filma ${movie} ${rating}`);
      };

    const [filteredMovies, SetFilteredMovies] = useState(movies)
    const search = (e) => {
        const value = e.target.value
        const filtered = movies.filter(movie => movie.title.includes(value.toLowerCase()))

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
                        imagePath={movie.imagePath} 
                        movieRating={movie.rating}
                        rating={showMovieRating}
                        isFavorite={movie.isFavorite}
                        
                                    
                    />
                )
            })
            }
        </>
    )
}

export default MovieSearch;