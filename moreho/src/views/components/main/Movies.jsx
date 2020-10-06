import React, { Component } from "react";
import MoviesTable from "./MoviesTable";
import GenresTable from "./GenresTable";
import { Paginate } from "../../Services/Utils/Paginate";
import { getMovies } from "../../Services/API/fakeMovieService";
import { getGenres } from "../../Services/API/fakeGenreService";

class Movies extends Component {
    state = {
        movies: getMovies(),
        genres: getGenres(),
        pageSize: 4,
        currentPage: 1,
        currentGenre: "",
    };
    render() {
        const {
            movies,
            genres,
            pageSize,
            currentPage,
            currentGenre,
        } = this.state;
        const allMovies = Paginate(movies, currentPage, pageSize);

        return (
            <>
                <div className="row">
                    <div className="col-3">
                        <GenresTable
                            genres={genres}
                            onSelect={this.handleSelect}
                            currentGenre={currentGenre}
                        />
                    </div>
                    <div className="col-8">
                        <MoviesTable
                            count={movies.length}
                            movies={allMovies}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onLiked={this.handleLike}
                            onDelete={this.handleDelete}
                            onPaginate={this.handlePaginate}
                        />
                    </div>
                </div>
            </>
        );
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    };
    handleSelect = (genre) => {
        this.setState({ currentGenre: genre });
    };
    handlePaginate = (page) => {
        this.setState({ currentPage: page });
    };
}

export default Movies;
