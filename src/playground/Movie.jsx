import batman from './img/batman.jpg'
import spiderman from './img/spiderman.jpg'
import superman from './img/superman.jpg'

function Movie({title, image}) {

    return(
        <figure>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
        </figure>  
    )
}



export default Movie;