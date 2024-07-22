import "./styles.scss";

import { SearchInput } from "../components/SearchInput";

import { ChangeEvent, Suspense, lazy, useState } from "react";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("NavbarApp/Navbar"));

export const DefaultLayout = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(() => event.target.value);
  }

  return (
    <div className="default-layout-container">
      <Suspense fallback={<div>loading navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="default-layout-main-wrapper">
        <SearchInput onChange={handleSearchInput} />
        <main className="default-layout-main-content-container">
          <Outlet context={{ search: searchInput }} />
        </main>
        <Footer />
      </div>
    </div>
  )
}