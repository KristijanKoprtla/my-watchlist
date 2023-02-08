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
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            isFavorite={movie.isFavorite}
            imagePath={movie.imagePath}
            movieRating={movie.rating}
            rating={showMovieRating}
          />
        );
      })}
    </>
  );
}

export default Main;
