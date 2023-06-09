import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import type { Character } from '@entities/Character';
import './card.scss';

type CardProps = {
  personData: Character;
};
const Card: React.FC<CardProps> = ({ personData }) => {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate(ROUTES.movieData(personData.id))}>
      <div className="image" style={{ backgroundImage: `url(${personData.image})` }}></div>
      <div className="text">
        <h2 className="text__title">{personData.name}</h2>
        <p className="text__species">{personData.species}</p>
      </div>
    </article>
  );
};

export default Card;
