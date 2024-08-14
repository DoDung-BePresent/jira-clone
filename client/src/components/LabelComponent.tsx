import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  padding?: string;
}

const LabelComponent = (props: Props) => {
  const { children, bgColor, padding } = props;
  return (
    <div
      className="label"
      style={{
        padding: "7px 12px",
        margin: "0px 5px",
        borderRadius: "5px",
        transition: "all .2s ease",
      }}
    >
      {children}
    </div>
  );
};

export default LabelComponent;
