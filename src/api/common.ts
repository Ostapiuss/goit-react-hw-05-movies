import axios from "axios";

export const API_KEY = '17c5a5de30466e42172be6812ea6018f';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const HTTP = {
  get(url: string, q?: string) {

    return axios({
      method: 'get',
      url: `${BASE_URL}${url}?api_key=${API_KEY}${q ? q : ''}`,
    });
  }
}
