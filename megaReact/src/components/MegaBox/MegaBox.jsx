import axios from "axios";
import MegaBoxForm from "./MegaBoxForm/MegaBoxForm";
import MegaBoxMenuList from "./MegaBoxMenu/MegaBoxMenuList";
import MegaBoxList from "./MegaBoxList/MegaBoxList";
import MegaBoxModal from "./MegaBoxModal/MegaBoxModal";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { MegaBoxContainer } from "../styled/MegaBoxStlye";

const MegaBox = () => {
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [menu, setMenu] = useState([]);
  const [movie, setMovie] = useState([]);
  const [islike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/habi-er/ab331c60d55c02deb91175ad08c77296/raw/7d3b7ab7778425179d6c5652933f1aa1aa35678b/movieList.json"
      )
      .then(res => {
        setData(res.data);
        setDataList(res.data);
        const menus = ["전체", ...new Set(res.data.map(item => item.isScreening))];
        setMenu(menus);
      });
  }, []);
  const onMenuShow = isScreening => {
    if (isScreening === "전체") {
      setData(dataList);
    } else {
      setData(dataList.filter(item => item.isScreening === isScreening));
    }
  };
  const onSearch = text => {
    setData(dataList.filter(item => item.movieNm.includes(text)));
  };

  const onLike = rnum => {
    setData(
      data.map(item =>
        item.rnum === rnum
          ? { ...item, likeCnt: item.islike ? item.likeCnt - 1 : item.likeCnt + 1, islike: !item.islike }
          : item
      )
    );
  };
  const onOpen = rnum => {
    setMovie(data.find(item => item.rnum === rnum));
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <MegaBoxContainer className="MegaBox">
      <h1>
        <img src="./images/logo.png" alt="cholbox" />
      </h1>
      <MegaBoxForm onSearch={onSearch} />
      <MegaBoxMenuList onMenuShow={onMenuShow} menu={menu} />
      <MegaBoxList data={data} islike={islike} onLike={onLike} isOpen={isOpen} onOpen={onOpen} />
      {isOpen && <MegaBoxModal data={data} movie={movie} onClose={onClose} isOpen={isOpen} />}
    </MegaBoxContainer>
  );
};

export default MegaBox;
