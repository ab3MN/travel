import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";
import T from "prop-types";

const CardItem = ({ card }) => {
  const { text, path, src, label } = card;
  return (
    <article className='card__item'>
      <Link className='card__item__link' to={path}>
        <figure className='card__item__img-wrap' data-category={label}>
          <img src={src} alt='Travel_Image' className='card__item__img' />
        </figure>
        <div className='card__item__info'>
          <h5 className='card__item__text'>{text}</h5>
        </div>
      </Link>
    </article>
  );
};
CardItem.propTypes = {
  card: T.shape({
    text: T.string.isRequired,
    path: T.string.isRequired,
    src: T.string.isRequired,
    label: T.string.isRequired,
  }).isRequired,
};

export default CardItem;
