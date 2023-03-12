import React from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Logo from './movies/svg/Logo';
import { ROUTES } from './routes';

const Home = () => {
  const { results } = useLoaderData();

  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <article className="card" onClick={() => navigate(ROUTES.movieData(datat.id))}>
        test
      </article>
      <h1>Home</h1>
      <div className="list">
        {results.map((movieData) => (
          <article
            className="card"
            key={movieData.id}
            onClick={() => navigate(ROUTES.movieData(movieData.id))}>
            <div className="image">
              <img src={`${movieData.image}`} alt={movieData.name} className="image__photo" />
            </div>
            <div className="text">
              <h2 className="text__title">{movieData.name}</h2>
              <p className="text__price">{movieData.species}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Home;
