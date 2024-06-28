import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("NavbarApp/Navbar"));

const App = () => {
  return (
    <main>
      <Suspense fallback={<div>loading navbar...</div>}>
        <Navbar />
      </Suspense>
      <h1>Container</h1>
    </main>
  )
}

export default App