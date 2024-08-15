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
        <button onClick={closeDoll} className="dress-up__toggle">
          toggle
        </button>
      </div>
      <img className="dress-up__doll" src="https://placehold.co/250x400"></img>
      <button>Reset</button>
      <button>Randomize</button>
    </div>
  );
}

export default DressUpDoll;
