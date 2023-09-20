import { Link } from 'react-router-dom';
import { ListMovieEl, MovieTitle } from './MovieElement.styled';

export const MovieElement = ({ id, poster, name }) => {
  return (
    <ListMovieEl>
      <Link to={'/movies/' + id}>
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
