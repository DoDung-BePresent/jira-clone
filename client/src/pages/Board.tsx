import Sidebar from "../app/Sidebar";
import Breadcrumbs from "../app/Breadcrumbs";
import AvatarList from "../app/AvatarList";
import TitleComponent from "../components/TitleComponent";
import RowComponent from "../components/RowComponent";
import InputComponent from "../components/InputComponent";

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
        <TitleComponent text="Kanban board" />
        <RowComponent justify="start" margin="20px auto">
          <InputComponent />
          <AvatarList />
        </RowComponent>
      </div>
    </div>
  );
};

export default Board;
