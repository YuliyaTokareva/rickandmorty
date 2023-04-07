// import { baseUrl } from '../env';
// process.env.REACT_APP_BASE_URL

const BASE_URL = `https://rickandmortyapi.com/api/character`;
// process.env.REACT_APP_BASE_URL;

import { Dispatch } from 'react';
import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

interface TodoLoaderFunctionArgs extends Omit<LoaderFunctionArgs, 'params'> {
  params: {
    id: string;
  };
}

interface TodoLoaderFunction extends Omit<LoaderFunction, 'args'> {
  (args: TodoLoaderFunctionArgs): Promise<Response> | Response | Promise<any> | any;
}

export const fetchPersonById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};
export const fetchPersonByIdRouted: TodoLoaderFunction = ({ params: { id } }) => {
  return fetchPersonById(id);
};

export const fetchList = async (set: Dispatch<React.SetStateAction<[]>>) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();

    if (!res) {
      throw new Error('Empty response!');
    }
    set(res.results);
    return res;
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
};

export const fetchSearchList = async (
  set: Dispatch<React.SetStateAction<[]>>,
  name: string,
  setSearchError: Dispatch<React.SetStateAction<string>>
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}?name=${name}`);
    if (response.status === 404) {
      setSearchError('Person not found');
      console.error('Error:', 'Person not found');
      return null;
    }

    const res = await response.json();
    setSearchError('');
    set(res.results);
    return res;
  } catch (error) {
    console.error('Error:', error);
  }
};
