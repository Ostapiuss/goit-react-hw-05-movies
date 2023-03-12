import React, { useEffect, useState } from "react";

import {
  useLocation,
  NavLink,
  useResolvedPath,
  Outlet, useNavigate
} from 'react-router-dom';

import { getMovie } from '../../api/movie-api';
import { getIdFromUrl } from '../../utils/common';
import { IMAGE_URL } from '../../api/common';

import './style.scss';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<any>({});
  const { pathname } = useResolvedPath('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const movieId = getIdFromUrl(pathname);

    const getCurrentMovieDetail = async () => {
      const movie = await getMovie(movieId);
      setMovie(movie);
    }

    getCurrentMovieDetail().finally();

  },[pathname]);

  const onGoBack = () => {
    navigate(location?.state?.from?.location ?? "/")
  };

  return (
    <div className="movieDetails">
      <button type="button" onClick={onGoBack}>Go Back</button>
      <div className="movieDetails__poster poster">
        <img src={`${movie?.poster_path && IMAGE_URL}/${movie?.poster_path}`} className="poster-img" alt="poster"/>
        <div className="poster-info">
          <h3 className="poster-title">{movie.title} ({movie.release_date?.slice(0, movie.release_date?.indexOf('-'))})</h3>
          <p>Use score: {Math.round(movie.popularity)}%</p>
          <div>
            <h4 className="subtitle">Overview</h4>
            <p>{movie.overview}</p>

            <h5>Generes</h5>
            <div className="generes">
              {
                movie.genres?.map((genre: {id: number, name: string}) => (
                  <p className="genre" key={genre.id}>{genre.name}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="movieDetails__additional-info additional-info">
        <NavLink
          to={`${pathname}/cast`}
          state={location.state}
        >
          <button className="additional-info-btn">Cast</button>
        </NavLink>
        <NavLink
          to={`${pathname}/reviews`}
          state={location.state}
        >
          <button className="additional-info-btn">Review</button>
        </NavLink>
      </div>

      <div className="main-info">
        <Outlet context={[movie]} />
      </div>
    </div>
  )
}

export default MovieDetailPage;
