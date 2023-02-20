
import Watchitem from './WatchItem';
// import movies from '../data/movies.json';
import { useState } from 'react';

const Landing = () => {
    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || [])

    

    
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
                localMovies.map((movie) => {
                    return (
                        <Watchitem 
                            movieObject={movie}
                            key={movie.id}
                            isLandingItem={true}
                            setLocalMovies={setLocalMovies}
                            
                        />
                    )
                })
            }
        </div>
     );
}
 
export default Landing;