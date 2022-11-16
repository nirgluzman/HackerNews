import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="searchbar">
      <p>Search for</p>
      <input
        type="searchText"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={searchText}
        onChange={handleTextChange}
      />
    </div>
  );
}
