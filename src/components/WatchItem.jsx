import movies from "../data/movies.json";
import propTypes from "prop-types";
import { useState } from 'react';

function Watchitem(props) {
  console.log(props.isFavorite);
  const [isFavorite, setIsFavorite] = (useState(props.isFavorite))
  return (
    <article>
      <img src={props.imagePath} alt={props.title} />
      <h3>{props.title}</h3>
      <h6>{props.movieRating}</h6>
      <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
      </button >
     {props.rating && <button onClick={() => props.rating(props.title, props.movieRating)}>
        Prikazi rating filma
      </button>}
    </article>
  );
}

export default Watchitem;
