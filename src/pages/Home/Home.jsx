import { HomeLink, HeaderStyled, SearchLink } from './Home.styled';
import { Outlet, useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  return (
    <>
      <HeaderStyled>
        <HomeLink to="/goit-react-hw-05-movies" state={{ from: location }}>
          MovieHub
        </HomeLink>
        <SearchLink
          to="/goit-react-hw-05-movies/movies"
          state={{ from: location }}
        >
          Search
        </SearchLink>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
