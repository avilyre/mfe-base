import { Poster } from "./components/Poster";
import { DefaultLayout } from "./layouts/default-layout";

const App = () => {
  return (
    <body className="container">
      <DefaultLayout>
        <h1>Container</h1>
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