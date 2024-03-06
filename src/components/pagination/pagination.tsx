import "./pagination.css";

interface PaginationProps {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  // setPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  return (
    <div className="pagination-container">
      <button className="page-controll" onClick={props.prevPage}>
        {"<"}
      </button>
      {/* <input value={props.currentPage + 1}></input> */}
      <span className="page">{props.currentPage + 1}</span>
      <button className="page-controll" onClick={props.nextPage}>
        {">"}
      </button>
    </div>
  );
};
