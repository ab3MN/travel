import React from "react";
import CardItem from "../CardItem/CardItem";
import cards from "../../db/cards.json";
import "./CardsList.css";

const CardsList = () => {
  return (
    <section className='cards'>
      <h1>Check out the EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__list'>
            {cards.map((el, i) => (
              <li key={i}>
                <CardItem card={el} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardsList;
