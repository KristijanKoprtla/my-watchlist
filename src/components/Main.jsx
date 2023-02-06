import movies from '../data/movies.json'
import Watchitem from "./WatchItem";

function Main(){
    return (
        <>
            {movies.map((movie) => {
                return (
                    
                        <Watchitem key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            isFavorite={movie.isFavorite}
                            imagePath={movie.imagePath}
                            rating={movie.rating}
                        />
                    
                )
            })

            }
        </>
    )
}

export default Main;