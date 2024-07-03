import "./app.scss";

import { Poster } from "./components/Poster";
import { DefaultLayout } from "./layouts/default-layout";

const App = () => {
  return (
    <body className="container">
      <DefaultLayout>
        <h2 className="section-title">catálogo</h2>
        <Poster
          title="Kung fu panda 4"
          isFavorited={true}
          image={{
            src: "https://image.tmdb.org/t/p/w500/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg"
          }}
        />
      </DefaultLayout>
    </body>
  )
}

export default App