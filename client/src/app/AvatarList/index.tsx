import AvatarComponent from "../../components/AvatarComponent";
import { AVATAR_LIST } from "../../constants/variants";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 20px",
      }}
    >
      {AVATAR_LIST.map((item, i) => (
        <AvatarComponent key={i} image={item.avatar} />
      ))}
    </div>
  );
};

export default index;
