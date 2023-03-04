import { NavLink } from "react-router-dom";

import './style.scss';

const Navigation = () => {
  return (
    <aside className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to='/' className="navigation__link">Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to='/movies' className="navigation__link">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </aside>

  )
}

export default Navigation;
