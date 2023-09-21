import { getDetailsMovie } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewEl, ReviewTitle, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const controllerRef = useRef();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        const resp = await getDetailsMovie(movieId, signal, '/reviews');
        setReviews(resp.results);
      } catch {}
    };

    getDetails();

    return () => controllerRef.current.abort();
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.map(el => {
        const timestamp = new Date(el.created_at);
        return (
          <ReviewEl key={el.id}>
            <ReviewTitle>Author: {el.author}</ReviewTitle>
            <p>{el.content}</p>
            <p>Time stamp: {timestamp.toLocaleDateString('en-US')}</p>
          </ReviewEl>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
