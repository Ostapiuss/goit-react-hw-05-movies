import React, { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';

import Loader from '../Loader';

const HomePage = React.lazy(() => import('../../pages/Home'));
const Movies = React.lazy(() => import('../../pages/Movies'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage'));

const MovieDetailPage = React.lazy(() => import('../../pages/MovieDetailsPage'));
const MovieCastPage = React.lazy(() => import('../../pages/MovieDetailsPage/MovieCast'));
const MovieReviewPage = React.lazy(() => import('../../pages/MovieDetailsPage/MovieReview'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />
        <Route
          path="/"
          element=
            {
              <HomePage />
            }
        />
        <Route
          path="/movie/:movieId"
          element=
            {
              <MovieDetailPage />
            }
        >
          <Route
            path="cast"
            element={
              <MovieCastPage />
            }
          />
          <Route
            path="reviews"
            element={
              <MovieReviewPage />
            }
          />
        </Route>
        <Route
          path="/movies"
          element={
            <Movies />
          }
        />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes;
