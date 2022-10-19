import React from "react";
import Search from "./Search";

function Header({searchTerm, setSearchTerm, clickSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} clickSubmit={clickSubmit}/>
    </header>
  );
}

export default Header;
