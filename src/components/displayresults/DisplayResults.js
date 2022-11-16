export default function DisplayResults({ searchResults }) {
  return (
    <>
      <ul className="searchResults">
        {searchResults.map((result) => (
          <li className="result">
            <div className="title">{result.title}</div>
            <div className="author">Created by {result.author}</div>
            <div className="date">{result.created_at}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
