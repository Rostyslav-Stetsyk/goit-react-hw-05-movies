import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { getMovieByQuery } from 'api';
import { MovieElement } from 'components/MovieElement/MovieElement';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchListMovie,
  SearchWrapper,
} from './Search.styled';

export const Search = () => {
  const controllerRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams) return;
    const getMovieList = async () => {
      try {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const movieList = await getMovieByQuery(
          searchParams.get('query'),
          signal
        );
        setMovies(movieList.results);
      } catch {}
    };

    getMovieList();

    return () => controllerRef.current.abort();
  }, [searchParams]);

  return (
    <>
      <SearchWrapper>
        <SearchForm
          onSubmit={e => {
            e.preventDefault();
            setSearchParams({ query });
          }}
        >
          <SearchInput
            id="search-input"
            type="text"
            placeholder="Search your movie"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
          <SearchButton type="submit">
            <FaMagnifyingGlass />
          </SearchButton>
        </SearchForm>
      </SearchWrapper>
      <SearchListMovie>
        {movies.map(el => (
          <MovieElement
            key={el.id}
            id={el.id}
            poster={el.poster_path}
            name={el.title}
          />
        ))}
      </SearchListMovie>
    </>
  );
};
