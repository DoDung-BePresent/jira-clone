import TextComponent from "./TextComponent";
import { globalColors } from "../constants/globalColors";

const NotImplementedComponent = () => {
  return (
    <div
      className="not-implemented"
      style={{
        backgroundColor: "rgb(223, 225, 230)",
        padding: "3px 5px",
        borderRadius: "5px",
        position: "absolute",
        top: 0,
        opacity: 0,
      }}
    >
      <TextComponent
        size={12}
        fontWeight={700}
        color={globalColors.title}
        text="NOT IMPLEMENTED"
      />
    </div>
  );
};

export default NotImplementedComponent;
