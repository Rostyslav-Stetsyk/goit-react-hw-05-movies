import { Link, useLocation } from 'react-router-dom';
import { ListMovieEl, MovieTitle } from './MovieElement.styled';

export const MovieElement = ({ id, poster, name }) => {
  const location = useLocation();
  return (
    <ListMovieEl>
      <Link to={'/movies/' + id} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={name}
          width="300px"
          height="450px"
        />
        <MovieTitle>{name}</MovieTitle>
      </Link>
    </ListMovieEl>
  );
};
