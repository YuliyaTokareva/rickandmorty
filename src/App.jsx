import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import PersonCard from './pages/PersonCard';
import fetchAllList from '../src/movies/moviesGateway';
import { ROUTES } from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.movies,
    element: <Home />,
    loader: fetchAllList
  },
  {
    path: ROUTES.movieData(),
    element: <PersonCard />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
