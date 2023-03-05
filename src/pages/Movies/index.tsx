import React,
{
  ChangeEvent, useEffect,
  useState
} from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Notiflix from 'notiflix';

import { searchMovies } from '../../api/movie-api';

// @ts-ignore
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import './style.scss';

const SearchBar: React.FC<any> = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [movies, setMovies] = useState<Array<any>>([]);

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = location.pathname + location.search;

    getMoviesByRequest(redirect.replace('?', '&')).finally();
  }, [location.search]);

  const getMoviesByRequest = async (query?: string) => {

    const movies = await searchMovies(query ? query :`query=${searchText}`);

    setMovies(movies);
    setSearchText('');
  }

  const onSubmit = (event: any):void => {
    event.preventDefault();

    if (searchText.trim()) {
      getMoviesByRequest().finally();
      navigate(`?query=${searchText}`);
    } else {
      Notiflix.Notify.warning(
        'No movies found!'
      );
    }

  }

  const handleChange = (changeEvent: ChangeEvent) => {
    const { value } : any = changeEvent.target;

    setSearchText(value);
  }

  return (
    <>
      <header className="searchbar">
        <form className="searchForm" onSubmit={onSubmit}>
          <button type="submit" className="searchForm-button">
            <SearchIcon className="searchForm-icon" />
          </button>
          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            value={searchText}
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
      <ul className="list">
        {
          movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movie/${movie.id}`}
                state={{
                  from: {
                    location,
                  }
                }}
              >
                <span>{movie.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default SearchBar;
