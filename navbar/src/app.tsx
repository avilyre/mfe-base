import "./styles/app.scss";

import { Link } from "react-router-dom";
import { HomeIcon, Star, Projector } from "lucide-react";

import logo from "./assets/logo.svg"

const App = () => {
  return (
    <aside className="aside-container">
      <nav className="navbar-container">
        <img className="navbar-logo-image" src={logo} alt="letra E com um ponto em azul" />

        <ul className="menu-list">
          <li className="menu-list-item">
            <Link
              title="início"
              className="menu-list-item-link"
              to="/"
            >
              <HomeIcon />
            </Link>
          </li>
          <li className="menu-list-item">
            <Link
              title="favoritos"
              className="menu-list-item-link"
              to="/favorites"
            >
              <Star />
            </Link>
          </li>
          <li className="menu-list-item">
            <Link
              title="em breve"
              className="menu-list-item-link"
              to="/soon"
            >
              <Projector />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default App;