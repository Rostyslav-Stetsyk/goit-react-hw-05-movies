import InfiniteScroll from 'react-infinite-scroll-component';
import { ListMovie, ListMovieEl, MovieTitle } from './TopMovieGallery.styled';
import { Loader } from 'components/Loader/Loader';

export const TopMovieGallery = ({ arrMovie, loadMore }) => {
  return (
    <>
      {arrMovie.length > 0 && (
        <InfiniteScroll
          dataLength={arrMovie.length} //This is important field to render the next data
          next={loadMore}
          hasMore={true}
          loader={<Loader key={0} loading={true} />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ListMovie>
            {arrMovie.map(el => (
              <ListMovieEl key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                  alt={el.name || el.title}
                  width="300px"
                  height="450px"
                />
                <MovieTitle>{el.name || el.title}</MovieTitle>
              </ListMovieEl>
            ))}
          </ListMovie>
        </InfiniteScroll>
      )}
    </>
  );
};
