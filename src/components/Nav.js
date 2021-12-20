import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

const Nav = ({ setLibraryStatus, libraryStatus, setIsDark, isDark }) => {

  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Zen1t music</h1>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
      <DarkModeToggle
        onChange={setIsDark}
        isDarkMode={isDark}
        size={75}
      />
    </nav>
  );
};

export default Nav;
