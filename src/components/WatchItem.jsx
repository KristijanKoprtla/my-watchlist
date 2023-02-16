import '../styles/watch-item.scss'
import movies from "../data/movies.json";
import propTypes from "prop-types";
import { useState } from 'react';

function Watchitem({movieObject, rating}) {
  
  const [isFavorite, setIsFavorite] = (useState(movieObject.isFavorite))
  return (
    <article>
      <img src={movieObject.imagePath} alt={movieObject.title} />
      <h3>{movieObject.title}</h3>
      <h6>{movieObject.movieRating}</h6>
      <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
      </button >
     {rating && <button onClick={() => rating(movieObject.title, movieObject.rating)}>
        Prikazi rating filma
      </button>}
    </article>
  );
}

export default Watchitem;
