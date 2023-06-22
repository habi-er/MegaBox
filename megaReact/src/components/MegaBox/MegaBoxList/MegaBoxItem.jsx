import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const MegaBoxItem = ({ item, onLike, isOpen, onOpen }) => {
  const { rnum, rank, movieNm, openDt, imageURL, agelimit, salesShare, isImax, likeCnt, islike } = item;
  return (
    <li data-id={rank}>
      <span className="poster" onClick={() => onOpen(rnum)}>
        <img src={imageURL} alt={movieNm} />
      </span>
      <span className="age-limit">
        <img src={agelimit} alt="" />
        <h3>{movieNm}</h3>
      </span>
      <div className="second">
        <strong className="salesShare">
          에매율:
          <em>{salesShare + "%"}</em>
        </strong>
        <strong>
          개봉일: <em>{openDt}</em>
        </strong>
      </div>
      <div className="third">
        <span className="like" onClick={() => onLike(rnum)}>
          <i>{islike ? <AiTwotoneHeart style={{ color: "red" }} /> : <AiOutlineHeart />}</i>
          <em>{likeCnt}</em>
        </span>
        <span className={isImax ? "ticketing" : "ticketing on"}>예매</span>
        <span className={isImax ? "imax" : "imax on"}>
          <img src="./images/imax.png" alt="" />
        </span>
      </div>
    </li>
  );
};

export default MegaBoxItem;
