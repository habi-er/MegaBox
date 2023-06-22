import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MegaBoxFormContainer } from "../../styled/MegaBoxStlye";

const MegaBoxForm = ({ onSearch, onSetText }) => {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (!text) return alert("영화 제목을 입력해주세요");
    setText(text);
    onSetText(text);
  };
  useEffect(() => {
    onSearch(text);
  }, [text]);

  return (
    <MegaBoxFormContainer onSubmit={onSubmit}>
      <input type="text" placeholder="영화 제목" onChange={e => setText(e.target.value)} value={text} />
      <button type="submit">
        <i>
          <BiSearchAlt2 />
        </i>
      </button>
    </MegaBoxFormContainer>
  );
};

export default MegaBoxForm;
