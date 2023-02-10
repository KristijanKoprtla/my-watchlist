import propTypes from "prop-types";
import batman from "./img/batman.jpg";
import spiderman from "./img/spiderman.jpg";
import { useState } from "react";
function Movie({ title, image }) {
  const [currentImage, setCurrentImage] = useState(batman);


  return (
    <figure>
      <img src={image} alt="" />
      <figcaption>{title}</figcaption>

      <img
        src={currentImage}
        alt=""
        onMouseEnter={() => setCurrentImage(spiderman)}
        onMouseLeave={() => setCurrentImage(batman)}
      />
    </figure>
  );
}

export default Movie;

Movie.propTypes = {
  imgage: propTypes.string,
  title: propTypes.string,
};
