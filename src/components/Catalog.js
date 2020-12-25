import { Component } from "react";
import Movie from "./Movie";
import './Catalog.scss'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: '',
        }
    }

    handleInput = (event) => {
        this.setState({searchValue: event.target.value})
    }

    render() {
        if (localStorage[this.props.match.params.user]) {
            const movies = this.props.movies.filter(m=> m.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
            return (
                <div>
                    <div id="search">
                        <input type="text" value={this.state.searchValue} onChange={this.handleInput} placeholder="search" />
                        <div>Budget: ${this.props.budget}.00</div>
                    </div>
                    <div id="catalog">
                        {movies.some(m => m.isRented) && 
                            <div id="rented">
                                {movies.filter(m => m.isRented).map(m => <Movie movie={m} key={`${m.id}rented`} userName={this.props.match.params.user} budget={this.props.budget} rentMovie={this.props.rentMovie} returnMovie={this.props.returnMovie} />)}
                                <hr/>
                            </div>
                        }
                        <div id="for-rent">
                                {movies.map(m => <Movie movie={m} key={`${m.id}for-rent`} userName={this.props.match.params.user} budget={this.props.budget} rentMovie={this.props.rentMovie} returnMovie={this.props.returnMovie} />)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div className="not-found">User not found</div>
        }
    }
}

export default Catalog