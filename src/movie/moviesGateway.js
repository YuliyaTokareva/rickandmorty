import { baseUrl } from '../env';

export const fetchAllList = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};
export default fetchAllList;

export const fetchPersonById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};
export const fetchPersonByIdRouted = ({ params: { id } }) => {
  return fetchPersonById(id);
};
