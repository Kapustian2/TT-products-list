interface PaginationProps {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  // setPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  return (
    <div>
      <button onClick={props.prevPage}>{"<"}</button>
      {/* <input value={props.currentPage + 1}></input> */}
      <span>{props.currentPage + 1}</span>
      <button onClick={props.nextPage}>{">"}</button>
    </div>
  );
};
