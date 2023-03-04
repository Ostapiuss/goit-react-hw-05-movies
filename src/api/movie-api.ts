import { HTTP } from "./common";

export const getTrends = async (): Promise<any> => {
  try {
    const {data: movies} = await HTTP.get('/trending/movie/day');
    return movies;
  } catch (e) {
    throw new Error(e);
  }
}

export const getMovie = async (movie_id: string): Promise<any> => {
  try {
    const {data: movie} =  await HTTP.get(`/movie/${movie_id}`);
    return movie;
  } catch (e) {
    throw new Error(e);
  }
}

export const searchMovies = async (searchedText: string): Promise<Array<object>> => {
  try {
    const {data: { results: movies }} =  await HTTP.get(`/search/movie`, `&language=en-US&page=1&include_adult=false&query=${searchedText}`);
    return movies;
  }catch (e) {
    throw new Error(e);
  }
}

export const getMovieCredits = async (movie_credit_path: string): Promise<any> => {
  try {
    const {data: credit} =  await HTTP.get(`${movie_credit_path}`);
    return credit;
  }catch (e) {
    throw new Error(e);
  }
}

export const getMovieReview = async (movie_review_path: string): Promise<any> => {
  try {
    const {data: review} =  await HTTP.get(`${movie_review_path}`);
    return review;
  }catch (e) {
    throw new Error(e);
  }
}
