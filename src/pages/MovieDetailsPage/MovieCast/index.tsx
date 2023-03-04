import React, { useEffect, useState } from 'react';

import { useResolvedPath } from 'react-router-dom'

import { getMovieCredits } from '../../../api/movie-api';
import {IMAGE_URL} from '../../../api/common';

import './style.scss';

const MovieCast: React.FC<any> = () => {
  const { pathname } = useResolvedPath('');
  const [cast, setCast] = useState<Array<any>>([])

  useEffect(() => {
    const getMovieCast = async () => {
      const { cast }  = await getMovieCredits(pathname.replace('cast', 'credits'));
      setCast(cast);
    }

    getMovieCast().finally();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="movie-cast">
      <ul className="cast-list">
        {
          cast.map((item) => (
            <li className="cast-item" key={item.cast_id}>
              <img src={`${item.profile_path && IMAGE_URL}${item.profile_path}`} alt="cast-img" className="cast-image" />
              <span className="cast-name">{item.name}</span>
              <span className="cast-character">Character: {item.character}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default MovieCast;
