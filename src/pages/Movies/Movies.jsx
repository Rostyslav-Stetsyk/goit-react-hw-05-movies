import { Search } from 'components/Search/Search';
import { Outlet, useLocation } from 'react-router-dom';
import { GetBackButton, MoviesWrapper } from './Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Movies = () => {
  const location = useLocation();

  return (
    <MoviesWrapper>
      <GetBackButton to={location?.state?.from ?? '/'}>
        <AiOutlineArrowLeft />
      </GetBackButton>
      <Search />
      <Outlet />
    </MoviesWrapper>
  );
};
