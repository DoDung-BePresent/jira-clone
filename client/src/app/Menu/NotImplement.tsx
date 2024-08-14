import NotImplementedComponent from "../../components/NotImplementedComponent";
import TextComponent from "../../components/TextComponent";

interface Props {
  text: string;
}

const NotImplement = (props: Props) => {
  const { text } = props;
  return (
    <div
      style={{
        position: "relative",
        width: "70%",
      }}
    >
      <TextComponent text={text} />
      <NotImplementedComponent />
    </div>
  );
};

export default NotImplement;
