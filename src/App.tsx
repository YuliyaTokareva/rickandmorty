import * as React from 'react';
import { RouterProvider, createBrowserRouter, LoaderFunction } from 'react-router-dom';
import Home from '../src/pages/Home';
import PersonCard from './pages/PersonCard';
import { fetchPersonByIdRouted } from '../src/movie/moviesGateway';

import { ROUTES } from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.movies,
    element: <Home />
  },
  {
    path: ROUTES.movieData(),
    element: <PersonCard />,
    loader: fetchPersonByIdRouted as LoaderFunction
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
