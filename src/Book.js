import React from "react";
import PropTypes from "prop-types";

function Book({title, contents, thumbnail, price }) {
  return (
    <div className="Book">
      <img src={thumbnail} alt={title} title={title} />
      <div className="Book__data">
        <h3 className="Book__title">{title}</h3>
        <h5 className="Book__price">{price}</h5>
        <p className="Book__summary">{contents.slice(0, 180)}...</p>
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
