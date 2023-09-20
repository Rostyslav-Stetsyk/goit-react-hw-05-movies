import { Search } from 'components/Search/Search';
import { Outlet } from 'react-router-dom';
import { GetBackButton, MoviesWrapper } from './Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Movies = () => {
  return (
    <MoviesWrapper>
      <GetBackButton>
        <AiOutlineArrowLeft />
      </GetBackButton>
      <Search />
      <Outlet />
    </MoviesWrapper>
  );
};
