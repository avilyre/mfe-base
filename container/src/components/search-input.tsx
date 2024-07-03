import "./styles.scss";

import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="search-input-container">
      <Search className="search-input-icon" />
      <input className="search-input" type="search" placeholder="procurar" />
    </div>
  );
}