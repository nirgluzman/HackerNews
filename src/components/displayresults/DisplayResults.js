import uuid from "react-uuid";

export default function DisplayResults({ searchResults }) {
  return (
    <>
      <ul className="searchResults">
        {searchResults.length ? (
          searchResults.map((result) => (
            <li key={uuid()} className="result">
              <h3
                className="articletitle"
                onClick={() => window.open(result.url, "_blank")}
              >
                {result.title}
              </h3>
              <p className="author">
                <strong>Created by:</strong>
                {result.author}
              </p>
              <p className="date">{result.created_at}</p>
            </li>
          ))
        ) : (
          <div className="errorMessage">No results !!</div>
        )}
      </ul>
    </>
  );
}
