import { baseUrl } from '../env';

// const fetchAllList = async () => {
//   try {
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error.message;
//   }
// };
export const fetchAllList = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data;
};
export default fetchAllList;
