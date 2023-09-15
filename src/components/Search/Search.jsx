import { SearchButton, SearchForm, SearchInput } from './Search.styled';

export const Search = () => {
  return (
    <>
      <SearchForm>
        <SearchInput
          id="search-input"
          type="text"
          placeholder="Search your movie"
        />
        <SearchButton type="button">Search</SearchButton>
      </SearchForm>
    </>
  );
};
