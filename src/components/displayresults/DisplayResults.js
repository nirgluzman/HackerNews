export default function DisplayResults({ searchResults }) {
  return (
    <>
      <ul className="searchResults">
        {searchResults.map((result) => (
          <li className="result">
            <h3
              className="articletitle"
              onClick={() => window.open(result.url, "_blank")}
            >
              {result.title}
            </h3>
            <p className="author">Created by {result.author}</p>
            <p className="date">{result.created_at}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
