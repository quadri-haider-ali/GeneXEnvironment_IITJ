import React from 'react';
import './Card.css';    

const Card = (props) => {
    const classes = 'details-card p-4 my-4 mr-4 text=center ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
