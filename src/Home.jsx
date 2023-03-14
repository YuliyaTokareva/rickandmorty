import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSortedByName } from './common/sortList';
import { useLocation, useSearchParams } from 'react-router-dom';
import CardsBlock from './movie/components/cardsBlock/CardsBlock';

import HeaderHome from './movie/components/headerHome/HeaderHome';
import Search from './movie/components/search/Search';

const Home = () => {
  const { results } = useLoaderData();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const textQuery = searchParams.get('search') || '';
  const sortedListPerson = getSortedByName(results);
  const params = {};
  // console.log(results);
  return (
    <div className="page-container">
      <HeaderHome />
      <Search params={params} />
      <CardsBlock personData={sortedListPerson}></CardsBlock>
    </div>
  );
};

export default Home;
