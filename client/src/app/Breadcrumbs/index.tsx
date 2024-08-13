import RowComponent from "../../components/RowComponent";
import TextComponent from "../../components/TextComponent";

const index = () => {
  return (
    <RowComponent gap={10}>
      <TextComponent fontWeight={500} text="Projects" />
      <TextComponent fontWeight={500} text="/" />
      <TextComponent fontWeight={500} text="Singularity 1.0" />
      <TextComponent fontWeight={500} text="/" />
      <TextComponent fontWeight={500} text="Kanban Board" />
    </RowComponent>
  );
};

export default index;
