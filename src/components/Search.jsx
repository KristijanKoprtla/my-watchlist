import { useState } from "react";
import axios from "axios";
import WatchItem from "./WatchItem";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    //na inputValue konkatenirati " - pretrazujem ..."
    //ispisati u konzoli


    axios
      .get(`https://www.omdbapi.com/?apikey=6fe1e02&s=${inputValue}`)
      .then((response) => {
          console.log(response.data.Search)
          
          setSearchResult(response.data.Search)
      });
  };



  return (
    <>
      <h1>Search</h1>
      <div>
        <div>{searchResult?.length}</div>
        {
            searchResult.map((movieItem) => {
                const helperObject = {
                    imagePath: movieItem.Poster,
                    title: movieItem.Title,
                    
                    
                }
                return (
                    <WatchItem
                        movieObject={helperObject}
                        key={movieItem.imdbID}
                        isSearchResult='true'
                        
                    />
                )
            })
        }
        <form onSubmit={searchMoviesSubmit}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            value={inputValue}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
