import "./styles/app.scss";

import { HomeIcon, Star, Projector } from "lucide-react";

import logo from "./assets/logo.svg"

const App = () => {
  return (
    <aside className="aside-container">
      <nav className="navbar-container">
        <img className="navbar-logo-image" src={logo} alt="letra E com um ponto em azul" />

        <ul className="menu-list">
          <li className="menu-list-item">
            <a
              title="início"
              className="menu-list-item-link"
              href="/"
            >
              <HomeIcon />
            </a>
          </li>
          <li className="menu-list-item">
            <a
              title="favoritos"
              className="menu-list-item-link"
              href="/favorites"
            >
              <Star />
            </a>
          </li>
          <li className="menu-list-item">
            <a
              title="em breve"
              className="menu-list-item-link"
              href="/soon"
            >
              <Projector />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default App;