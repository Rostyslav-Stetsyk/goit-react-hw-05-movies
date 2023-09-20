import { HomeLink, HeaderStyled, SearchLink } from './Home.styled';
import { Outlet } from 'react-router-dom';

export const Layaout = () => {
  return (
    <>
      <HeaderStyled>
        <HomeLink to="/">MovieHub</HomeLink>
        <SearchLink to="/movies">Search</SearchLink>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
