import { HomeLink, HeaderStyled, SearchLink } from './Home.styled';
import { Outlet, useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  return (
    <>
      <HeaderStyled>
        <HomeLink to="/" state={{ from: location }}>
          MovieHub
        </HomeLink>
        <SearchLink to="/movies" state={{ from: location }}>
          Search
        </SearchLink>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
