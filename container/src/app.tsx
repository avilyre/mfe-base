import "./app.scss";

import { Poster } from "./components/Poster";
import { DefaultLayout } from "./layouts/default-layout";

const App = () => {
  const numberOfPosters = 12;

  return (
    <body className="container">
      <DefaultLayout>
        <h2 className="section-title">catálogo</h2>
        <div className="section-posters-container">
          {Array.from({ length: numberOfPosters }).map(() => (
            <Poster
              title="Divertidamente 2"
              isFavorited={true}
              image={{
                src: "https://image.tmdb.org/t/p/w500/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"
              }}
            />
          ))}
        </div>
      </DefaultLayout>
    </body>
  )
}

export default App