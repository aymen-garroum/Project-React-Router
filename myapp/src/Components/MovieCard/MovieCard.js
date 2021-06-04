import './MovieCard.css'
import Rating from '../Rating/Rating'
import {Link, Route} from 'react-router-dom'
import MoviePage from '../Movie_page/Movie_page'

function MovieCard(props) {

    return (
        <Link className="div_card" to={`/movie/${props.el.title.replace(/\s/g, "-").toLowerCase()}`} >
            <img src={props.el.path} alt="NO POSTER"/>
            <h3 className="titre">{props.el.title}</h3>
            <p><strong>Description : </strong> {props.el.description}</p>
            <div className="div_rating_card"><Rating key={props.el.title} rating={props.el.rating}/></div>
        </Link>
    )
}

export default MovieCard

