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
              <p className="date">
                {new Date(result.created_at).toISOString().split("T")[0]}
              </p>
            </li>
          ))
        ) : (
          <div className="errorMessage">No results !!</div>
        )}
      </ul>
    </>
  );
}
