function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let size = createArrayOfSize(totalPages).map((_, i) => (
    <button
      key={i}
      onClick={() => handlePageChange(i + 1)}
      disabled={currentPage === i + 1}
      style={{ border: currentPage === i + 1 ? "2px solid red" : "" }}
    >
      {i + 1}
    </button>
  ));
  return <div data-testid="page-container">{size}</div>;
}

export default Pagination;
