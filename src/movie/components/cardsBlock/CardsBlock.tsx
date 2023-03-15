import React from 'react';
import Card from '../card/Card';
import { Character } from '@entities/Character';
import './cardsBlock.scss';

type CardsBlockProps = {
  personData: Character[];
  searchError: string;
};

const CardsBlock: React.FC<CardsBlockProps> = ({ personData, searchError }) => {
  if (personData.length === 0 && !searchError) {
    return <p>Loading...</p>;
  }
  if (searchError) {
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
