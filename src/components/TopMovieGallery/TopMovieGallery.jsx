import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllTrandingMovie } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieElement } from 'components/MovieElement/MovieElement';
import { ListMovie } from './TopMovieGallery.styled';

export const TopMovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const controllerRef = useRef();

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const fetchMovies = async () => {
      try {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const resp = await getAllTrandingMovie(page, signal);
        setMovies(prevMovies => [...prevMovies, ...resp.results]);
        setTotalPage(resp.total_pages);
      } catch {}
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      {movies.length > 0 && (
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={page < totalPage}
          loader={<Loader loading={true} />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ListMovie>
            {movies.map(el => (
              <MovieElement
                key={el.id}
                id={el.id}
                poster={el.poster_path}
                name={el.title}
              />
            ))}
          </ListMovie>
        </InfiniteScroll>
      )}
    </>
  );
};
