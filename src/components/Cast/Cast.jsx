import { getDetailsMovie } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const Cast = () => {
  const controllerRef = useRef();
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const resp = await getDetailsMovie(movieId, signal, '/credits');
        setCast(resp.cast);
      } catch {}
    };

    getDetails();

    return () => controllerRef.current.abort();
  }, [movieId]);

  return cast.length ? (
    <CastList>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                : `https://i.imgur.com/GhqsTtz.jpg`
            }
            alt={el.name}
            width="200px"
            height="300px"
          />
          <h3>Name: {el.name}</h3>
          <p>Chatacter: {el.character}</p>
        </li>
      ))}
    </CastList>
  ) : (
    <p>No information about cast</p>
  );
};

export default Cast;
