import { AddSquare, MessageQuestion, SearchNormal1 } from "iconsax-react";
import ColComponent from "../../components/ColComponent";
import RowComponent from "../../components/RowComponent";
import { globalColors } from "../../constants/globalColors";
import Logo from "../../assets/jira-icon.png";

interface Props {
  width?: number;
  height?: number;
}

const index = (props: Props) => {
  const { width, height } = props;
  return (
    <div
      className="sidebar"
      style={{
        background: globalColors.blue,
        height: height ?? "100vh",
        width: width ?? "60px",
        transition: "width 0.6s ease",
      }}
    >
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
    </div>
  );
};

export default index;
