import React, { Component} from 'react'
import SearchMovies from './SearchMovies'
import MovieList from './MovieList'
import '../styles/index.css'

class App extends Component {
    render () {
        return (
            <div>
                <h2> Movie Finder</h2>
                <SearchMovies />
                <MovieList />
            </div>
        )
    }
}

export default App