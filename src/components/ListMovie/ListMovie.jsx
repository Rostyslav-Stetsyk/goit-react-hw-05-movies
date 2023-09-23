import { MovieElement } from 'components/MovieElement/MovieElement';
import { ListMovieWrapper } from './ListMovie.styled';

export const ListMovie = ({ movieArr }) => {
  return (
    <ListMovieWrapper>
      {movieArr ? (
        movieArr.map(el => (
          <MovieElement
            key={el.id}
            id={el.id}
            poster={el.poster_path}
            name={el.title}
          />
        ))
      ) : (
        <p>We did not find any movies for this query. Try again.</p>
      )}
    </ListMovieWrapper>
  );
};
