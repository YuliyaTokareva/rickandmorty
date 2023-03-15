import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';
import ArrowBack from '../../svg/ArrowBack';
import './person.scss';

const Person = () => {
  const person = useLoaderData();
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <nav className="person-navigation">
        <a onClick={goBack}>
          <ArrowBack />
          <span>GO BACK</span>
        </a>
      </nav>

      <div className="page-container">
        <div className="person-info">
          <div className="person-img">
            <img src={`${person.image}`} alt={`${person.name}`} className="person-img__photo" />
          </div>
          <div className="person-text">
            <h1 className="person-text__title">{person.name ? person.name : 'No name'}</h1>
            <h6 className="person-text__sub-title">Informations</h6>
            <div className="person-data">
              <div className="person-data__block">
                <p className="person-data__title">Gender</p>
                <p className="person-data__description">{person.gender ? person.gender : ''}</p>
              </div>
              <div className="person-data__block">
                <p className="person-data__title">Status</p>
                <p className="person-data__description">{person.status ? person.status : ''}</p>
              </div>
              <div className="person-data__block">
                <p className="person-data__title">Specie</p>
                <p className="person-data__description">{person.specie ? person.specie : ''}</p>
              </div>
              <div className="person-data__block">
                <p className="person-data__title">Origin</p>
                <p className="person-data__description">{person.origin.name}</p>
              </div>
              <div className="person-data__block">
                <p className="person-data__title">Type</p>
                <p className="person-data__description">{person.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
