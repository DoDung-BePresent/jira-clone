import ColComponent from "../../components/ColComponent";
import RowComponent from "../../components/RowComponent";
import Project_logo from "../../assets/project-image.svg";
import { globalColors } from "../../constants/globalColors";
import TextComponent from "../../components/TextComponent";
import {
  Box,
  Car,
  Diagram,
  FilterSquare,
  Keyboard,
  Notepad2,
  Setting2,
} from "iconsax-react";
import MenuFilters from "./MenuFilters";

const index = () => {
  return (
    <ColComponent
      height="100vh"
      padding="20px"
      bgColor={globalColors.bgColor}
      gap={10}
      styles={{ borderRight: "1px solid #cccccc" }}
    >
      <RowComponent>
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "5px",
          }}
          src={Project_logo}
          alt=""
        />
        <ColComponent padding="0px 15px">
          <TextComponent fontWeight={600} text="Singularity 1.0" />
          <TextComponent
            size={12}
            fontWeight={500}
            color={globalColors.desc}
            text="Business project"
          />
        </ColComponent>
      </RowComponent>
      <ColComponent padding="0px">
        <MenuFilters>
          <Keyboard size={24} />
          <TextComponent text="Kanban Board" />
        </MenuFilters>
        <MenuFilters>
          <Setting2 size={24} />
          <TextComponent text="Project settings" />
        </MenuFilters>
      </ColComponent>
      <div style={{ width: "100%", height: "1px", background: "#cccccc" }} />
      <ColComponent padding="0px">
        <MenuFilters>
          <Car size={24} />
          <TextComponent text="Releases" />
        </MenuFilters>
        <MenuFilters>
          <FilterSquare size={24} />
          <TextComponent text="Issues and filters" />
        </MenuFilters>
        <MenuFilters>
          <Notepad2 size={24} />
          <TextComponent text="Pages" />
        </MenuFilters>
        <MenuFilters>
          <Diagram size={24} />
          <TextComponent text="Reports" />
        </MenuFilters>
        <MenuFilters>
          <Box size={24} />
          <TextComponent text="Issues and filters" />
        </MenuFilters>
      </ColComponent>
    </ColComponent>
  );
};

export default index;
