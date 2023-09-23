import {
  HomeLink,
  HeaderStyled,
  SearchLink,
  HeaderContainer,
  HeightHeader,
} from './Layout.styled';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <HomeLink to="/goit-react-hw-05-movies" state={{ from: location }}>
            MovieHub
          </HomeLink>
          <SearchLink
            to="/goit-react-hw-05-movies/movies"
            state={{ from: location }}
          >
            Search
          </SearchLink>
        </HeaderContainer>
      </HeaderStyled>
      <HeightHeader />
      <Outlet />
    </>
  );
};
