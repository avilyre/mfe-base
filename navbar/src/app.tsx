import "./styles/app.scss";

import { HomeIcon, Star, Projector } from "lucide-react";
import logo from "./assets/logo.svg"

const App = () => {
  return (
    <aside className="aside-container">
      <nav className="navbar-container">
        <img className="navbar-logo-image" src={logo} alt="" />

        <ul className="menu-list">
          <li className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              <HomeIcon />
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              <Star />
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              <Projector />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default App;