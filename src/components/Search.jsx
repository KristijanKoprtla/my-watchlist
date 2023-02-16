import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    //na inputValue konkatenirati " - pretrazujem ..."
    //ispisati u konzoli

    setInputValue(`${inputValue} pretrazujem ...`);
    console.log(inputValue);
  };

  return (
    <>
      <h1>Search</h1>
      <div>
        <div>{inputValue}</div>
        <form onSubmit={searchMoviesSubmit}>
          <input onChange={(e) => setInputValue(e.target.value)} type="text" value={inputValue} />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
