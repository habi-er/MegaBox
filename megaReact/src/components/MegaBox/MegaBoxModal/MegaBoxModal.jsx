import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MegaBoxModalContainer } from "../../styled/MegaBoxStlye";

const MegaBoxModal = ({ movie, onClose }) => {
  const { running, age, genre, actor, titleFont, videoKey, story } = movie;
  return (
    <MegaBoxModalContainer className="modal">
      <div className="for-bg" onClick={onClose}></div>
      <div className="popup">
        <div className="left">
          <iframe width="600" height="324" src={`https://www.youtube.com/embed/${videoKey}`} frameborder="0"></iframe>
        </div>
        <div className="right">
          <h3>
            <img src={titleFont} alt="" />
          </h3>
          <span>{age}</span>
          <span>{running}</span>
          <span>{genre}</span>
          <p>{story}</p>
          <span>주연: </span>
          <strong>{actor}</strong>
        </div>
        <span onClick={onClose}>
          <i>
            <AiOutlineCloseCircle />
          </i>
        </span>
      </div>
    </MegaBoxModalContainer>
  );
};

export default MegaBoxModal;
