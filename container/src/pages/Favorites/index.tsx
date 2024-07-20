import { MoviesList } from "../../components/MoviesList";

const Favorites = () => {
  return (
    <section>
      <header>
        <h2 className="section-title">favoritos</h2>
      </header>

      <MoviesList
        filterBy="favorites"
      />
    </section>
  )
};

export default Favorites;