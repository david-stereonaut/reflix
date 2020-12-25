import { Component } from "react";
import './MovieDetails.scss'


class MovieDetails extends Component {

    render() {
        const movies = this.props.movies
        const movieId = parseInt(this.props.match.params.movie)
        const movie = movies.find(m => (m.id === movieId))
        return (
            <div id="movie-details">
                <h3>{movie.title} {`(${movie.year})`}</h3>
                <div className="movie-details-img" style={{backgroundImage: `url(${movie.img})`}}></div>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetails