import "./styles/app.scss";

import { HomeIcon, Star, Projector } from "lucide-react";
import logo from "./assets/logo.svg"

const App = () => {
  return (
    <aside className="aside-container">
      <nav className="navbar-container">
        <img className="logo-image" src={logo} alt="" />

        <ul className="menu-list">
          <li>
            <a href="#">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <Star />
            </a>
          </li>
          <li>
            <a href="#">
              <Projector />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default App;