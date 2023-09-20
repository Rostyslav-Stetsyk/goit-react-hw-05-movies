import { getDetailsMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const resp = await getDetailsMovie(movieId, '/credits');
      setCast(resp.cast);
    };
    try {
      getDetails();
    } catch {}
  }, [movieId]);

  return (
    <CastList>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
            alt={el.name}
            width="200px"
            height="300px"
          />
          <h3>Name: {el.name}</h3>
          <p>Chatacter: {el.character}</p>
        </li>
      ))}
    </CastList>
  );
};
