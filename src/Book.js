import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

function Book({title, contents, thumbnail, price }) {
  return (
    <div className="book">
      <img src={thumbnail} alt={title} title={title} />
      <div className="book__data">
        <h3 className="book__title">{title}</h3>
        <h5 className="book__price">{price}</h5>
        <p className="book__summary">{contents.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Book.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Book;
