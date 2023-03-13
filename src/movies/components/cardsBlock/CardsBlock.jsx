import React from 'react';
import CardList from '../card/Card';
import './cardsBlock.scss';
const CardsBlock = ({ personData }) => {
  return (
    <div className="person-list">
      {personData.map((person) => (
        <CardList key={person.id} personData={person} />
      ))}
    </div>
  );
};

export default CardsBlock;
