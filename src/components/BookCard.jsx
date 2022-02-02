import React from 'react';

const BookCard = (props) => {
    return (
        <div className="book-card">
            <img src={props.disp} style={{height: props.height, width: props.width}}/>
            <div className="book-description">
                <p className="book-title">{props.title}</p>
                <p className="book-author">{props.author}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
};

export default BookCard;