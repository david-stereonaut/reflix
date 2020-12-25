import './Landing.scss'
import { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            users: [
                {name: 'David', backgroundColor: '#ef476f'},
                {name: 'Shalom', backgroundColor: '#ffd166'},
                {name: 'Yossi', backgroundColor: '#06d6a0'},
                {name: 'Nikolai II', backgroundColor:'#118ab2'}
            ]
        }
    }

    updateMovieData = (event) => {
        const userName = event.target.textContent
        const userInfo = JSON.parse(localStorage[userName])
        this.props.updateMovieData(userInfo, userName)
    }

    render() {
        return (
            <div id="users">
                {this.state.users.map(u=> {
                    if(!localStorage[u.name]) {
                        localStorage.setItem(u.name, JSON.stringify({movies: this.props.movies, budget: 10}))
                    }
                    return <Link key={u.name} to={`/catalog/${u.name}`}><div onClick={this.updateMovieData} className="user" style={{backgroundColor: `${u.backgroundColor}`}}><span>{u.name}</span></div></Link>
                })}
            </div>
        )
    }
}

export default Landing