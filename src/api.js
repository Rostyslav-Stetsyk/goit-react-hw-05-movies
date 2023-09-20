import axios from 'axios';


const MAIN_DOMEN = 'https://api.themoviedb.org/3'
axios.defaults.baseURL = `${MAIN_DOMEN}`;

export const getAllTrandingMovie = async (page, signal) => {
    const resp = await axios.get('/trending/movie/week', {
      params: {
          language: 'en-US',
            page,
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54'
      },
      signal,
    })
    return resp.data
}

export const getDetailsMovie = async (id) => {
  const resp = await axios.get(`/movie/${id}`, {
      params: {
          language: 'en-US',
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54'
      },
    })
    return resp.data
}

export const getMovieByQuery = async (query) => {
  const resp = await axios.get(`search/movie`, {
      params: {
      language: 'en-US',
      page: 1,
      query,
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxOTRjMzU0NzdmMGYwYjkxNjU3N2I3ZTkwNzNhYiIsInN1YiI6IjY0YjAzY2NlZDQwZDRjMDBjNzA0MTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuondqTspR6BFbUiN9ERo34V_vX6Uz8qDXlYw0f-B54'
      },
    })
    return resp.data
}