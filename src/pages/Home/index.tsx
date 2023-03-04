import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import { getTrends } from "../../api/movie-api";

import './style.scss';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrends();

      setTrends(results);
    };

    getMovies().finally();
  },[])

  return (
    <div className="home">
      <ul>
        {
          trends.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`movie/${movie.id}`}
                state={{
                  from: {
                    location,
                    label: 'Go Back'
                  }
                }}
              >
                <span>{movie.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage;
