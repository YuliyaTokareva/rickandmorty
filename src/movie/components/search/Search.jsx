import React, { useState } from 'react';
import MagnifyingGlass from '../../svg/MagnifyingGlass';
import { useSearchParams } from 'react-router-dom';

import './search.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('name') || '';
  const [count, setCount] = useState(searchQuery);
  const handleChange = (e) => {
    e.preventDefault();
    const searchData = e.target.value;
    setCount(searchData);
    if (searchData.length) setSearchParams({ name: searchData });

    if (!searchData.length) setSearchParams({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count.length) {
      setSearchParams({ name: count });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="search">
      <div className="search__line">
        <MagnifyingGlass />
        <form name="searchForm" onSubmit={(e) => handleSubmit(e)}>
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
