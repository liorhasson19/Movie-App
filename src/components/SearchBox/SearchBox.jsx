import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = props => {
  const { onSearchChange, placeholder } = props;

  const [searchText, setSearchText] = useState("");

  const handleInputChange = ev => {
    let inputSearchText = ev.target.value;
    setSearchText(inputSearchText);
    onSearchChange(inputSearchText);
  };

  return (
    <div>
      <input
        className="searchbox-input"
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
