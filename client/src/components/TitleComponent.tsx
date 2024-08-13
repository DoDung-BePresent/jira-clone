import { globalColors } from "../constants/globalColors";

interface Props {
  text: string;
  size?: number;
  color?: string;
  fontWeight?: number;
}

const TitleComponent = (props: Props) => {
  const { text, size, color, fontWeight } = props;
  return (
    <p
      style={{
        color: color ?? globalColors.title,
        fontSize: size ?? 24,
        fontWeight: fontWeight ?? "600",
      }}
    >
      {text}
    </p>
  );
};

export default TitleComponent;
