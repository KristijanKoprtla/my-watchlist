
import Watchitem from './WatchItem';
import movies from '../data/movies.json';

const Landing = () => {
    const showMovieRating = (title, rating) => {
        alert(`Rating filma ${title} ${rating}`);

    };
    const moviesWrap = {
        display: 'flex',
        flexWrap: 'wrap',
        width: 768,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '54px 0'
    }
    return ( 
        <div style={moviesWrap}>
            {
                movies.map((movie) => {
                    return (
                        <Watchitem 
                            movieObject={movie}
                            key={movie.id}

                            rating={showMovieRating}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default Landing;