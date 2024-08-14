import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: string;
  margin?: string;
  flex?: number;
  align?: string;
  gap?: number;
  justify?: "start" | "end" | "center" | undefined;
}

const RowComponent = (props: Props) => {
  const { children, justify, margin, padding, flex, align, gap } =
    props;
  return (
    <div
      style={{
        flex: flex,
        gap: gap,
        width: "100%",
        height: "fit-content",
        margin: margin ?? "10px 0px",
        padding: padding,
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
