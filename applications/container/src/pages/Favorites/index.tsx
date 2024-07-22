import { ApiRequestURL } from "../../@types/api-request-url";
import { MoviesList } from "../../components/MoviesList";

const Favorites = () => {
  return (
    <section>
      <header>
        <h2 className="section-title">favoritos</h2>
      </header>

      <MoviesList
        requestFrom={ApiRequestURL.POPULAR}
        filterBy="favorites"
      />
    </section>
  )
};

export default Favorites;