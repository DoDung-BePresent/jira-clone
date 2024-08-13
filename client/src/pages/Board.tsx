import Sidebar from "../app/Sidebar";
import Breadcrumbs from "../app/Breadcrumbs";

const Board = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        style={{
          margin: "20px 5px 30px 15px",
        }}
      >
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Board;
