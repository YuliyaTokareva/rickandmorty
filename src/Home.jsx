import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSortedByName } from './common/sortList';
import { useLocation, useSearchParams } from 'react-router-dom';
import CardsBlock from './movies/components/cardsBlock/CardsBlock';

import HeaderHome from './movies/components/headerHome/HeaderHome';
import Search from './movies/components/search/Search';

const Home = () => {
  const { results } = useLoaderData();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const textQuery = searchParams.get('search') || '';
  const sortedListPerson = getSortedByName(results);
  const params = {};
  console.log(textQuery);
  return (
    <>
      <HeaderHome />
      <Search params={params} />
      <CardsBlock personData={sortedListPerson}></CardsBlock>
    </>
  );
};

export default Home;
