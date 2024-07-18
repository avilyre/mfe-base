import { ComponentProps } from "react";
import "./styles.scss";

import { Search } from "lucide-react";

interface SearchInputProps extends ComponentProps<"input"> {}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <div className="search-input-container">
      <Search className="search-input-icon" />
      <input className="search-input" type="search" placeholder="procurar" {...props} />
    </div>
  );
}