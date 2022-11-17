import Moment from "react-moment";
import uuid from "react-uuid";

export default function DisplayResults({ searchResults }) {
  return (
    <>
      <ul className="searchResults">
        {searchResults.length ? (
          searchResults.map((result) => (
            <li key={uuid()} className="result">
              <div
                className="articletitle"
                onClick={() => window.open(result.url, "_blank")}
              >
                {result.title}
              </div>
              <div className="articledetails">
                <p className="author">Created by: {result.author} |&nbsp;</p>
                <Moment fromNow className="date">
                  {result.created_at}
                </Moment>
                <p className="points">&nbsp;| {result.points} points</p>
              </div>
            </li>
          ))
        ) : (
          <div className="errorMessage">No results !!</div>
        )}
      </ul>
    </>
  );
}
