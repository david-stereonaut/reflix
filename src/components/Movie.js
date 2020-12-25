import './Movie.scss'
import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class Movie extends Component {

    rentMovie = () => {
        if(this.props.budget >= 3){
        this.props.rentMovie(this.props.movie.id, this.props.userName)
        } else {
            alert('not enough money')
        }
    }

    returnMovie = () => {
        this.props.returnMovie(this.props.movie.id, this.props.userName)
    }
    
    render() {
        const movie = this.props.movie
        return (
            <div className="movie">
                <Link to={`/movie/${movie.id}`}>
                <div className="movie-img" style={{backgroundImage: `url(${movie.img})`}}></div>
                </Link>
                {movie.isRented ? <FontAwesomeIcon icon={faMinusCircle} onClick={this.returnMovie}/> : <FontAwesomeIcon icon={faPlusCircle} onClick={this.rentMovie} />}
            </div>
        )
    }
}

export default Movie