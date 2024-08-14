interface Props {
  image: string;
  size?: number;
}

const AvatarComponent = (props: Props) => {
  const {
    image,
    size,
  } = props;
  return (
    <div
      className="avatar"
      style={{
        width: size ?? "38px",
        height: size ?? "38px",
        borderRadius: 100,
        overflow: "hidden",
        border: "2px solid white",
        position: "relative",
        marginLeft: "-6px",
      }}
    >
      <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
    </div>
  );
};

export default AvatarComponent;
