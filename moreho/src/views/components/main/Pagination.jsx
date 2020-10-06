import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({
    movies,
    pageSize,
    
    onPaginate,
    currentPage,
}) => {
    const items = Math.ceil(movies / pageSize);
    const pages = _.range(1, items + 1);

    return (
        <>
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                            key={page}
                            onClick={() => onPaginate(page)}
                        >
                            <b className="page-link">{page}</b>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsPage: PropTypes.number.isRequired,
};

export default Pagination;
