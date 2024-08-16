import "./DressUpDoll.scss";
import { useState } from "react";

function DressUpDoll({ isOpen, setIsOpen, setShowButton }) {
  const closeDoll = () => {
    setIsOpen(false);
    setShowButton(true);
  };

  return (
    <div className={`dress-up ${isOpen ? "true" : "false"}`}>
      <div className="dress-up__wrapper">
        <h4 className="dress-up__title">Dress Up Doll</h4>
        <button className="dress-up__toggle" onClick={closeDoll}>
          ❮ BACK
        </button>
      </div>
      <img className="dress-up__doll" src="https://placehold.co/250x400"></img>
      <button className="dress-up__reset">Reset</button>
      <button className="dress-up__randomize">Randomize</button>
    </div>
  );
}

export default DressUpDoll;
