import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSortedByName } from '@common/sortList';
import CardsBlock from '@components//cardsBlock/CardsBlock';
import { fetchList, fetchSearchList } from '../movie/moviesGateway';
import HeaderHome from '@components//headerHome/HeaderHome';
import Search from '@components/search/Search';
import type { Character } from '@entities/Character';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const textQuery = searchParams.get('name') || '';

  const [results, setResults] = useState<Character | []>([]);
  const [searchError, setSearchError] = useState<string>('');
  useEffect(() => {
    if (!textQuery) fetchList(setResults);
    fetchSearchList(setResults, textQuery, setSearchError);
  }, [textQuery]);
  const persons: Character[] = useMemo(() => {
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
