import LabelComponent from "../../components/LabelComponent";
import RowComponent from "../../components/RowComponent";
import TextComponent from "../../components/TextComponent";
import { globalColors } from "../../constants/globalColors";

const index = () => {
  return (
    <RowComponent>
      <LabelComponent>
        <TextComponent
          fontWeight={500}
          color={globalColors.desc}
          text="Only My Issues"
        />
      </LabelComponent>
      <LabelComponent>
        <TextComponent
          fontWeight={500}
          color={globalColors.desc}
          text="Recently Updated"
        />
      </LabelComponent>
    </RowComponent>
  );
};

export default index;
