import React from "react";

const Control = ({ nameBtn, clickBtn }) => {
  return (
    <ul>
      {nameBtn.map((el) => (
        <li key={el}>
          <button type="button" name={el} onClick={clickBtn}>
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Control;
