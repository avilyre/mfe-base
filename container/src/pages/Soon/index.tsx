import { ApiRequestURL } from "../../@types/api-request-url";
import { MoviesList } from "../../components/MoviesList";

const Soon = () => {
  return (
    <section>
      <header>
        <h2 className="section-title">em breve</h2>
      </header>

      <MoviesList
        requestFrom={ApiRequestURL.SOON}
      />
    </section>
  )
};

export default Soon;