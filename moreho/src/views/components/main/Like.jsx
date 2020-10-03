import React from "react";
const Link = ({ liked, onLike }) => {
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return <i className={classes} onClick={onLike} />;
};

export default Link;
