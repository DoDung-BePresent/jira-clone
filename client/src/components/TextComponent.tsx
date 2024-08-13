import { globalColors } from "../constants/globalColors";

interface Props {
  text: string;
  color?: string;
  size?: number;
}

const TextComponent = (props: Props) => {
  const { text, color, size } = props;
  return (
    <p
      style={{
        color: color ?? globalColors.white,
        fontSize: size ?? "16px",
      }}
    >
      {text}
    </p>
  );
};

export default TextComponent;
