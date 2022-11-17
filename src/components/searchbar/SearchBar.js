import { useState, useEffect } from "react";
import DisplayResults from "../displayresults/DisplayResults";
import LoadingSpinner from "../loadingspinner/LoadingSpinner";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const baseURL = "http://hn.algolia.com/api/v1/search?";
  const frontPage = `${baseURL}tags=front_page`;
  const searchQuery = `${baseURL}query=${searchText}&tags=story`;

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  function fetchData(url) {
    setIsLoading(true); // Show loading screen
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        setErrorMessage("Request failed with HTTP code", response.status);
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        // setSearchResults(jsonResponse.hits);
        // setIsLoading(false); // Hide loading screen

        // Optional code to simulate delay
        setTimeout(() => {
          setSearchResults(jsonResponse.hits);
          setIsLoading(false);
        }, 2000);

        setErrorMessage(null);
      })
      .catch((networkError) => {
        setErrorMessage("Unable to fetch data");
        console.log(networkError);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData(frontPage);
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      fetchData(searchQuery);
    }
  }, [searchText]);

  return (
    <>
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
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          !errorMessage && <DisplayResults searchResults={searchResults} />
        )}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      </div>
    </>
  );
}
