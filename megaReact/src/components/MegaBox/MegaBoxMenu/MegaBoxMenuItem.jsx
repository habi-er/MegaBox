const MegaBoxMenuItem = ({ item, onMenuShow }) => {
  return <li onClick={() => onMenuShow(item)}>{item}</li>;
};

export default MegaBoxMenuItem;
