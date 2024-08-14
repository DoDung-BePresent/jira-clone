import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: string;
  bgColor?: string;
  gap?: number;
  height?: string;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;

  styles?: CSSProperties;
}

const ColComponent = (props: Props) => {
  const { children, padding, justify, height, bgColor, gap, styles } = props;
  return (
    <div
      style={{
        padding: padding ?? "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: bgColor,
        rowGap: gap,
        height: height,
        justifyContent: justify ?? "start",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default ColComponent;
