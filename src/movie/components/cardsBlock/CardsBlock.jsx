import React from 'react';
import Card from '../card/Card';
import './cardsBlock.scss';

const CardsBlock = ({ personData, searchError }) => {
  if (personData.length === 0 && !searchError) {
    return <p>Loading...</p>;
  }
  if (searchError) {
    console.log('HHH');
    return <p>Person not found</p>;
  }
  return (
    <div className="person-list">
      {personData.map((person) => (
        <Card key={person.id} personData={person} />
      ))}
    </div>
  );
};

export default CardsBlock;
