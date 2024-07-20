import "./styles.scss";

import { MoviesList } from "../../components/MoviesList";

const HomePage = () => {
  return (
    <section>
      <header>
        <h2 className="section-title">catálogo</h2>
      </header>

      <MoviesList />
    </section>
  )
}

export default HomePage;