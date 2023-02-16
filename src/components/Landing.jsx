import '../styles/watch-item.scss';
import Watchitem from './WatchItem';
import movies from '../data/movies.json';

const Landing = () => {
    const showMovieRating = (title, rating) => {
        alert(`Rating filma ${title} ${rating}`);
      };
    return ( 
        <div>
            {
                movies.map((movie) => {
                    return (
                        <Watchitem 
                            movieObject={movie}
                            id={movie.id}

                            rating={showMovieRating}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default Landing;