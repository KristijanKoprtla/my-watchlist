import propTypes from 'prop-types'; 
function Movie({title, image}) {

    return(
        <figure>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
        </figure>  
    )
}



export default Movie;

Movie.propTypes = {
    imgage: propTypes.string,
    title: propTypes.string
}