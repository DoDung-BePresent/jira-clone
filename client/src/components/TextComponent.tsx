import { globalColors } from "../constants/globalColors";

interface Props {
  text: string;
  color?: string;
  size?: number;
  fontWeight?: number;
}

const TextComponent = (props: Props) => {
  const { text, color, size, fontWeight } = props;
  return (
    <p
      style={{
        color: color ?? globalColors.text,
        fontSize: size ?? "14px",
        fontWeight: fontWeight ?? 400,
      }}
    >
      {text}
    </p>
  );
};

export default TextComponent;
