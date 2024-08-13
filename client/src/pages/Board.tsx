import Sidebar from "../app/Sidebar";
import ColComponent from "../components/ColComponent";
import Logo from "../assets/jira-icon.png";
import RowComponent from "../components/RowComponent";
import { AddSquare, MessageQuestion, SearchNormal1 } from "iconsax-react";
import { globalColors } from "../constants/globalColors";

const Board = () => {
  return (
    <div>
      <Sidebar>
        <ColComponent>
          <RowComponent>
            <img
              src={Logo}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </RowComponent>
          <RowComponent>
            <SearchNormal1 color={globalColors.white} />
          </RowComponent>
          <RowComponent>
            <AddSquare color={globalColors.white} />
          </RowComponent>
          <RowComponent flex={1} align="end">
            <MessageQuestion color={globalColors.white} />
          </RowComponent>
        </ColComponent>
      </Sidebar>
    </div>
  );
};

export default Board;
