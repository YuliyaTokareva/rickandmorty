import React, { useState } from 'react';
import MagnifyingGlass from '../../svg/MagnifyingGlass';
import { useSearchParams } from 'react-router-dom';

import './search.scss';

const Search = ({ params }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [count, setCount] = useState(searchQuery);
  const handleChange = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  };
  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   if (count.length) params.search = count;
  //   if (!count.length) delete params.search;
  //   setSearchParams(params);
  // };
  console.log(searchQuery);
  return (
    <section className="search">
      <div className="search__line">
        <MagnifyingGlass />
        <form name="searchForm" action="">
          <input
            className="search__line-input"
            type="text"
            placeholder="Filter by name"
            value={count}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
