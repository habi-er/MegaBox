import MegaBoxItem from "./MegaBoxItem";
import { MegaBoxListContainer } from "../../styled/MegaBoxStlye";
const MegaBoxList = ({ data, islike, onLike, isOpen, onOpen }) => {
  return (
    <MegaBoxListContainer className="MegaBoxList">
      {data.map(item => (
        <MegaBoxItem key={item.rnum} item={item} islike={islike} onLike={onLike} isOpen={isOpen} onOpen={onOpen} />
      ))}
    </MegaBoxListContainer>
  );
};

export default MegaBoxList;
