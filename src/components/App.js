import * as React from "react";

import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import styles from "./App.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Timescale" />
        <SearchInput onChange={setSearchTerm} />
      </div>
      <Movies query={searchTerm} />
    </div>
  );
};

export default App;
