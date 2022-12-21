import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = 'd929b7a4b435aa22496bb0793b172bfc';

export async function getTrendingMovies() {
  try {
    const { data } = await axios('3/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieByQuery(query, page = 1) {
  try {
    const { data } = await axios('3/search/movie', {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOneMovieById(id) {
  try {
    const { data } = await axios(`3/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieActors(id) {
  try {
    const { data } = await axios(`3/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const { data } = await axios(`3/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrendingPersons() {
  try {
    const { data } = await axios('3/trending/person/week', {
      params: {
        api_key: API_KEY,
      },
    });
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
