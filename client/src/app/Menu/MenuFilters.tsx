import { ReactNode } from "react";
import LabelComponent from "../../components/LabelComponent";

interface Props {
  children: ReactNode;
}

const MenuFilters = (props: Props) => {
  const { children } = props;
  return (
    <div className="menu-label">
      <LabelComponent gap={15} justify="start" padding="10px 10px" margin="0">
        {children}
      </LabelComponent>
    </div>
  );
};

export default MenuFilters;
