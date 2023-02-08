import movies from "../data/movies.json";
import propTypes from "prop-types";

function Watchitem(props) {
  console.log(props);
  return (
    <article>
      <img src={props.imagePath} alt={props.title} />
      <h3>{props.title}</h3>
      <h6>{props.rating}</h6>
      <button>
        {props.isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
      </button>
      <button onClick={() => props.rating(props.title, props.movieRating)}>
        Prikazi rating filma
      </button>
    </article>
  );
}

export default Watchitem;
