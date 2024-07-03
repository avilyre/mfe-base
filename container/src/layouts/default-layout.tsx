import "./styles.scss";

import { SearchInput } from "../components/SearchInput";

import { ReactNode, Suspense, lazy } from "react";

const Navbar = lazy(() => import("NavbarApp/Navbar"));

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <div className="default-layout-container">
      <Suspense fallback={<div>loading navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="default-layout-main-wrapper">
        <SearchInput />
        <main className="default-layout-main-content-container">
          {children}
        </main>
      </div>
    </div>
  )
}