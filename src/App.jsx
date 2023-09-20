import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { TopMovieGallery } from './components/TopMovieGallery/TopMovieGallery';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Movies } from './pages/Movies/Movies';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TopMovieGallery />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
