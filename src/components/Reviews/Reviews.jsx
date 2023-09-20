import { getDetailsMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewEl, ReviewTitle, ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const resp = await getDetailsMovie(movieId, '/reviews');
      setReviews(resp.results);
    };
    try {
      getDetails();
    } catch {}
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
