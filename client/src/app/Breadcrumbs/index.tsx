import RowComponent from "../../components/RowComponent";
import TextComponent from "../../components/TextComponent";
import { globalColors } from "../../constants/globalColors";

const index = () => {
  return (
    <RowComponent justify="start" gap={10}>
      <TextComponent
        color={globalColors.desc}
        fontWeight={500}
        text="Projects"
      />
      <TextComponent color={globalColors.desc} fontWeight={500} text="/" />
      <TextComponent
        color={globalColors.desc}
        fontWeight={500}
        text="Singularity 1.0"
      />
      <TextComponent color={globalColors.desc} fontWeight={500} text="/" />
      <TextComponent
        color={globalColors.desc}
        fontWeight={500}
        text="Kanban Board"
      />
    </RowComponent>
  );
};

export default index;
