import "./styles.scss";

import { SearchInput } from "../components/SearchInput";

import { Suspense, lazy } from "react";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("NavbarApp/Navbar"));

export const DefaultLayout = () => {
  return (
    <div className="default-layout-container">
      <Suspense fallback={<div>loading navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="default-layout-main-wrapper">
        <SearchInput />
        <main className="default-layout-main-content-container">
          <Outlet />
        </main>
      <Footer />
      </div>
    </div>
  )
}