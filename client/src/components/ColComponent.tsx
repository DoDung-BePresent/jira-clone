import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: string;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
}

const ColComponent = (props: Props) => {
  const { children, padding, justify } = props;
  return (
    <div
      style={{
        padding: padding ?? "10px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: justify ?? "start",
      }}
    >
      {children}
    </div>
  );
};

export default ColComponent;
