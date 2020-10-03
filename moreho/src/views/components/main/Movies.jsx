import React, { Component } from "react";
import MoviesTable from "./MoviesTable";
import { getMovies } from "./../../fakeMovieService";

class Movies extends Component {
    state = { movies: getMovies() };

    handleLike = (movie) => {
        console.log("a");
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-6">
                        <MoviesTable
                            movies={this.state.movies}
                            onLiked={this.handleLike}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
