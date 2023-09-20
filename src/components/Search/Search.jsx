import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const movieList = await getMovieByQuery(searchParams.get('query'));
      setMovies(movieList.results);
    };
    try {
      getMovieList();
    } catch {}
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
