import MegaBoxMenuItem from "./MegaBoxMenuItem";
import { MegaBoxMenuListContainer } from "../../styled/MegaBoxStlye";
const MegaBoxMenuList = ({ menu, onMenuShow }) => {
  return (
    <MegaBoxMenuListContainer className="MegaBoxMenuList">
      {menu.map((item, idx) => (
        <MegaBoxMenuItem onMenuShow={onMenuShow} key={idx} item={item} />
      ))}
    </MegaBoxMenuListContainer>
  );
};

export default MegaBoxMenuList;
