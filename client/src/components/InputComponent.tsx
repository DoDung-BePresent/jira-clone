import { SearchNormal1 } from "iconsax-react";
import { globalColors } from "../constants/globalColors";

const InputComponent = () => {
  return (
    <div
      className="input"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        backgroundColor: globalColors.bgColor,
        padding: "7px 10px",
        borderRadius: 5,
        border: "2px solid #c4c4c4",
      }}
    >
      <SearchNormal1 size={15} color={"#000"} />
      <input
        type="text"
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
};

export default InputComponent;
