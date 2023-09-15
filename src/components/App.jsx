import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { getAllTrandingMovie } from 'api';
import { TopMovieGallery } from './TopMovieGallery/TopMovieGallery';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const resp = await getAllTrandingMovie(page);
      console.log(resp);
      setMovies(prevMovies => [...prevMovies, ...resp.results]);
    };
    try {
      fetchMovies();
    } catch {}
  }, [page]);

  return (
    <div>
      <Header />
      <TopMovieGallery page={page} loadMore={loadMore} arrMovie={movies} />
    </div>
  );
};
