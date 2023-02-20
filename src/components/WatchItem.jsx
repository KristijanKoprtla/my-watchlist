import "../styles/watch-item.scss";
import propTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import syncLocalStorage from "../functions/syncLocalStorage";
import { useContext } from "react";
import { NotificationContext } from "../App";

const WatchItem = ({ movieObject, showRating, isSearchResult, isLandingItem, setLocalMovies }) => {
  // const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

  //u alert modu ispisati poruku o dodavanju/micanju iz favorita


  const {notification, setNotification} = useContext(NotificationContext)

  useEffect(() => {
    setNotification()
  }, [])

  const handleMovieAdd = () => {
    syncLocalStorage('add', movieObject);
    !notification && setNotification(true);
  }

  const handleMovieRemove = () => {
    const localMovies = syncLocalStorage('remove', movieObject);
    setLocalMovies(localMovies)
  }

  const handleMovieChange = () => {
    const localMovies = syncLocalStorage('change', movieObject);
    setLocalMovies(localMovies)
  }
  

  return (
    <div className="item-wrap">
      <article className="watch-item">
        <div
          className="img-wrap"
          style={{
            fontSize: "24px",
            backgroundImage: `url(${movieObject.imagePath})`,
          }}
        >
          {/* <img
                        src={movieObject.imagePath}
                        alt={movieObject.title}
                    />      */}
        </div>

        <h3>{movieObject.title}</h3>

        {showRating && <button>Show rating</button>}

        {isLandingItem && <button onClick={handleMovieRemove}>Remove movie</button>}

        {isSearchResult ? <button onClick={handleMovieAdd} className="addMovie-button">Add movie</button>
        :
        <button
          onClick={handleMovieChange}
          className="favorite-button"
        >
          {movieObject.isFavorite ? "💜" : "♡"}
        </button>}
      </article>
    </div>
  );
};

export default WatchItem;

WatchItem.propTypes = {
  movieObject: propTypes.object,
};
