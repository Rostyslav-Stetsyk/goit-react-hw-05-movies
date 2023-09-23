import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { getMovieByQuery } from 'api';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchWrapper,
} from './Search.styled';
import { ListMovie } from 'components/ListMovie/ListMovie';

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
      <ListMovie movieArr={movies} />
    </>
  );
};
