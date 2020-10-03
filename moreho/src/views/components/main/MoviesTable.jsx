import React from "react";
import Like from "./Like";

const MoviesTable = ({ movies,onLiked }) => {
    return (
        <>
            <h1 className="title">There are {movies.length} Movies avaibale</h1>
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
                        <tr key={movies._id}>
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
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MoviesTable;
