import React from 'react'
import './Movie_page.css'

function MoviePage(props) {
    
    let titre = props.match.params.title.replace(/-/g," ").toLowerCase()

    const movie = props.Movie.find(el=>el.title.toLowerCase()===titre)

    return (
        <div className="div_movie">
            <h1>{movie.title}</h1>
            <span><strong>Description : </strong>{movie.description}</span>
            <iframe width="878" height="494" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MoviePage
