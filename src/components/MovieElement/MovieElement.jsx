import { Link, useLocation } from 'react-router-dom';
import { ListMovieEl, MovieTitle } from './MovieElement.styled';

export const MovieElement = ({ id, poster, name }) => {
  const location = useLocation();
  return (
    <ListMovieEl>
      <Link
        to={'/goit-react-hw-05-movies/movies/' + id}
        state={{ from: location }}
      >
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w300${poster}`
              : `https://i.imgur.com/GhqsTtz.jpg;`
          }
          alt={name}
          width="300px"
          height="450px"
        />
        <MovieTitle>{name}</MovieTitle>
      </Link>
    </ListMovieEl>
  );
};
