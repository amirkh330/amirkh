import React from "react";
import PropTypes from "prop-types";

const GenresTable = ({ genres, onSelect, currentGenre }) => {
    return (
        <div className="list">
            <ul className="list-group">
                {genres.map((genre) => (
                    <li
                        className={
                            genre.name === currentGenre
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={genre._id}
                        onClick={() => onSelect(genre.name)}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

GenresTable.propTypes = {
    genres: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default GenresTable;
