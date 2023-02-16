import movies from "../data/movies.json";
import Watchitem from "./WatchItem";

function Main() {
  const showMovieRating = (title, rating) => {
    alert(`Rating filma ${title} ${rating}`);
  };

  return (
    <>
      {movies.map((movie) => {
        return (
          <Watchitem
            movieObject={movie}
            id={movie.id}
            
            rating={showMovieRating}
          />
        );
      })}
    </>
  );
}

export default Main;
