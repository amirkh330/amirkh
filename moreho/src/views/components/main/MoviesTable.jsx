import React from "react";
import Pagination from "./Pagination";
import Like from "../common/Like";
import PropTypes from "prop-types";

const MoviesTable = ({
    count,
    movies,
    onLiked,
    onDelete,
    pageSize,
    onPaginate,
    currentPage,
}) => {
    return (
        <>
            <h1 className="title">There are {count} Movies avaibale</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    liked={movie.liked}
                                    onLike={() => onLiked(movie)}
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(movie)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                movies={count}
                pageSize={pageSize}
                itemsPage={movies.length}
                onPaginate={onPaginate}
                currentPage={currentPage}
            />
        </>
    );
};

MoviesTable.propTypes = {
    movies: PropTypes.array.isRequired,
    onLiked: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
};

export default MoviesTable;
