import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gap?: number;
  justify?: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
}

const LabelComponent = (props: Props) => {
  const { children, bgColor, padding, gap, justify, margin } = props;
  return (
    <div
      className="label"
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: gap,
        padding: padding ?? "7px 12px",
        justifyContent: justify ?? "center",
        margin: margin ?? "0px 5px",
        borderRadius: "5px",
        transition: "all .2s ease",
      }}
    >
      {children}
    </div>
  );
};

export default LabelComponent;
