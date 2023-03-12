export const ROUTES = {
  movies: '/',
  movieData: (id = null) => (id ? `/${id}` : `/:id`)
};
