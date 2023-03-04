import {useEffect, useState} from 'react';
import {useResolvedPath} from 'react-router-dom';

import { getMovieReview } from '../../../api/movie-api';

import './style.scss';

const MovieReview = () => {
  const { pathname } = useResolvedPath('');
  const [reviews, setReviews] = useState<Array<any>>([]);

  useEffect(() => {
    const getReview = async () => {
      const {results: reviews} = await getMovieReview(pathname);
      setReviews(reviews);
    }

    getReview().finally();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-review">
      {
        reviews.length > 0 ? (
          <ul className="reviews-list">
            {
              reviews.map((item) => (
                <li className="reviews-item item" key={item.id}>
                  <p className="item-title">{item.author}</p>
                  <span className="item-content">{item.content}</span>
                </li>
              ))
            }
          </ul>
        ) : (
          <p>No reviews yet !</p>
        )
      }
    </div>
  )
}

export default MovieReview;
