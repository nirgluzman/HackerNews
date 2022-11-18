import Moment from "react-moment";
import uuid from "react-uuid";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

export default function DisplayResults({ searchResults }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchResults.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchResults.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchResults]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchResults.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      <ol className="searchResults" start={itemOffset + 1}>
        {currentItems.map((item) => (
          <li key={uuid()} className="result">
            <div
              className="articletitle"
              onClick={() => window.open(item.url, "_blank")}
            >
              {item.title}
            </div>
            <div className="articledetails">
              <p className="author">Created by: {item.author} |&nbsp;</p>
              <Moment fromNow className="date">
                {item.created_at}
              </Moment>
              <p className="points">&nbsp;| {item.points} points</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
