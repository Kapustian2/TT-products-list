import "./loading.css";
export const Loading = ({ show }: { show: boolean }) => {
  if (show) {
    return <div className="loading"></div>;
  } else return null;
};
