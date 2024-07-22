import "./styles.scss";

import { MoviesList } from "../../components/MoviesList";
import { ApiRequestURL } from "../../@types/api-request-url";

const HomePage = () => {
  return (
    <section>
      <header>
        <h2 className="section-title">catálogo</h2>
      </header>

      <MoviesList requestFrom={ApiRequestURL.POPULAR} />
    </section>
  )
}

export default HomePage;