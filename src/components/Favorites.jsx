import WatchItem from "./WatchItem";
import movies from "../data/movies.json";
import { useEffect } from "react";
import { useState } from "react";

const Favorites = () => {
  const moviesWrap = {
    display: "flex",
    flexWrap: "wrap",
    width: 768,
    maxWidth: "100%",
    margin: "0 auto",
    padding: "54px 0",
  };

  const filteredMovies = movies.filter((movie) => movie.isFavorite);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("component Favorites mounted");

    return () => console.log("component die");
  }, []);

  useEffect(() => {
    console.log('number changed');
  }, [number])

  return (
    <div style={moviesWrap}>
      <button onClick={() => setNumber(number +1)}>increase</button>
      <h1>{number}</h1>

      {filteredMovies.map((movie) => {
        return <WatchItem movieObject={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Favorites;
