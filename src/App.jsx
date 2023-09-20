import { Route, Routes } from 'react-router-dom';
import { Layaout } from './pages/Home/Home';
import { TopMovieGallery } from './components/TopMovieGallery/TopMovieGallery';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Movies } from './pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<TopMovieGallery />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
