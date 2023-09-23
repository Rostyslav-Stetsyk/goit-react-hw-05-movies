import { Search } from 'components/Search/Search';
import { useLocation } from 'react-router-dom';
import { GetBackButton, MoviesWrapper } from './Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Movies = () => {
  const location = useLocation();

  return (
    <MoviesWrapper>
      <GetBackButton to={location?.state?.from ?? '/goit-react-hw-05-movies'}>
        <AiOutlineArrowLeft />
      </GetBackButton>
      <Search />
    </MoviesWrapper>
  );
};

export default Movies;
