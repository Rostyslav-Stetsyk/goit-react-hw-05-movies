import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Loader } from 'components/Loader/Loader';

const TopMovieGallery = lazy(() =>
  import('./components/TopMovieGallery/TopMovieGallery.jsx')
);
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />}>
            <Route index element={<TopMovieGallery />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
