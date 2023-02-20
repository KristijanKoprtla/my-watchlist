import { useState } from "react";
import axios from "axios";
import WatchItem from "./WatchItem";
import loader from '../data/loader.svg';


const Search = () => {
  const endpoint = "https://www.omdbapi.com/?apikey=6fe1e02";
  const [inputValue, setInputValue] = useState("batman");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    console.log('Pokreni loader');
    setIsLoading(true);
    fetchMovies();
    

    //na inputValue konkatenirati " - pretrazujem ..."
    //ispisati u konzoli
  };

  const fetchMovies = async () => {
    await axios.get(`${endpoint}&s=${inputValue}`).then((response) => {
      console.log('Dobio sam rezultate');
      console.log(response.data.Search);

      setSearchResult(response.data.Search || []);
    });

    console.log('zaustavi loader');
    setIsLoading(false)
  };

  const moviesWrap = {
    display: "flex",
    flexWrap: "wrap",
    width: 768,
    maxWidth: "100%",
    margin: "0 auto",
    padding: "54px 0",
  };

  return (
    <>
      <h1>Search</h1>
      <div>
        

        <form onSubmit={searchMoviesSubmit}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            value={inputValue}
          />
          <button type="submit">Search</button>
        </form>

        {isLoading && <img src={loader} />}
        <div style={moviesWrap}>
          {searchResult.map((movieItem) => {
            const helperObject = {
              imagePath: movieItem.Poster,
              title: movieItem.Title,
              id: movieItem.imdbID
            };
            return (
              <WatchItem
                movieObject={helperObject}
                key={movieItem.imdbID}
                isSearchResult="true"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
