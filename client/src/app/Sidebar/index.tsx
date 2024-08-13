import { ReactNode } from "react";
import { globalColors } from "../../constants/globalColors";

interface Props {
  width?: number;
  height?: number;
  children: ReactNode;
}

const index = (props: Props) => {
  const { width, height, children } = props;
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
      {children}
    </div>
  );
};

export default index;
