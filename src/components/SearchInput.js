import * as React from "react";

import styles from "./SearchInput.module.css";
import searchIcon from "../assets/search.svg";
import { useDebounce } from "../hooks/useDebounce";

const SearchInput = React.memo(({ onChange }) => {
  const [value, setValue] = React.useState("");
  const debouncedValue = useDebounce(value, 300);

  React.useEffect(() => {
    onChange(debouncedValue);
  }, [onChange, debouncedValue]);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={styles.container}>
      <img src={searchIcon} alt="search" />
      <input type="text" placeholder="Search for a movie" value={value} onChange={handleChange} />
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
