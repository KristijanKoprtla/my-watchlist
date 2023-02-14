import Watchitem from "../components/WatchItem";
import movies from "../data/movies.json";
import { useState } from "react";

const MovieGallery = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = (action) => {
    if(action === 'increment') {
        setIndex(index + 1)
    } else if (action == 'decrement') {
        setIndex(index - 1)
    }
  }
  return (
    <>
      <Watchitem
        title={movies[index].title}
        imagePath={movies[index].imagePath}
        isFavorite={movies[index].isFavorite}
      />

      <div>
        <button disabled={index === 0} onClick={() => handleIndex('decrement')}>Previous</button>

        <button disabled={index === movies.length -1} onClick={() => handleIndex('increment')}>Next</button>
      </div>
    </>
  );
};

export default MovieGallery;
