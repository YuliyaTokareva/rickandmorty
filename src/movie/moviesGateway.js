import { baseUrl } from '../env';

export const fetchPersonById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};
export const fetchPersonByIdRouted = ({ params: { id } }) => {
  return fetchPersonById(id);
};

export const fetchList = async (set) => {
  try {
    const response = await fetch(baseUrl);
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

export const fetchSearchList = async (set, name, setSearchError) => {
  try {
    const response = await fetch(`${baseUrl}?name=${name}`);
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
