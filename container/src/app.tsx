import "./styles/app.scss";

import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("NavbarApp/Navbar"));

const App = () => {
  return (
    <body className="container">
      <aside>
        <Suspense fallback={<div>loading navbar...</div>}>
          <Navbar />
        </Suspense>
      </aside>
      <main>

        <h1>Container</h1>
      </main>
    </body>
  )
}

export default App