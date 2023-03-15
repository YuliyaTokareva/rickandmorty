import React, { useMemo, useState, useEffect } from 'react';
import { getSortedByName } from '../common/sortList';
import { useSearchParams } from 'react-router-dom';
import CardsBlock from '../movie/components/cardsBlock/CardsBlock';
import { fetchList, fetchSearchList } from '../movie/moviesGateway';
import HeaderHome from '../movie/components/headerHome/HeaderHome';
import Search from '../movie/components/search/Search';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const textQuery = searchParams.get('name') || '';

  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState('');
  useEffect(() => {
    if (!textQuery) fetchList(setResults);
    fetchSearchList(setResults, textQuery, setSearchError);
  }, [textQuery]);
  const persons = useMemo(() => {
    const getSort = getSortedByName(results);

    return getSort;
  }, [results]);

  return (
    <div className="page-container">
      <HeaderHome />
      <Search />
      <CardsBlock personData={persons} searchError={searchError} />
    </div>
  );
};

export default Home;
