import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: string;
  margin?: string;
  flex?: number;
  align?: string;
  justify?: "start" | "end" | "center" | undefined;
}

const RowComponent = (props: Props) => {
  const { children, justify, margin, padding, flex, align } = props;
  return (
    <div
      style={{
        flex: flex,
        width: "100%",
        height: "fit-content",
        margin: margin ?? "10px 0px",
        padding: padding ?? "0px 5px",
        display: "flex",
        alignItems: align ?? "center",
        justifyContent: justify ?? "center",
      }}
    >
      {children}
    </div>
  );
};

export default RowComponent;
