import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsMovie } from 'api';
import {
  MovieAdditionalTitle,
  MovieDetailsSection,
  MovieDetailsTitle,
  MovieDetailsWrapper,
  MovieText,
  MovieTitle,
  SectionAdditional,
} from './MovieDetails.styled';
import { GetBackButton } from 'pages/Movies/Movies.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const resp = await getDetailsMovie(movieId, '');
      setImg(resp.poster_path);
      setTitle(resp.title);
      setScore(resp.vote_average);
      setOverview(resp.overview);
      setGenres(resp.genres);
    };
    try {
      getDetails();
    } catch {}
  }, [movieId]);

  return (
    <MovieDetailsWrapper>
      <GetBackButton>
        <AiOutlineArrowLeft />
      </GetBackButton>
      <MovieDetailsSection>
        <img
          width="300px"
          height="450px"
          src={`https://image.tmdb.org/t/p/w300${img}`}
          alt={title}
        />
        <div>
          <MovieTitle>{title}</MovieTitle>
          <MovieText>User Score: {score} IMDb</MovieText>
          <MovieDetailsTitle>Overview</MovieDetailsTitle>
          <MovieText>{overview}</MovieText>
          <MovieDetailsTitle>Genres</MovieDetailsTitle>
          <MovieText>{genres.map(el => el.name).join(' ')}</MovieText>
        </div>
      </MovieDetailsSection>
      <SectionAdditional>
        <MovieAdditionalTitle>Additional information</MovieAdditionalTitle>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </SectionAdditional>
      <Outlet />
    </MovieDetailsWrapper>
  );
};
