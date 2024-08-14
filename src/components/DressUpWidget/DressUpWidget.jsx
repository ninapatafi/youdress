import "./DressUpWidget.scss";
import { useState } from "react";

function DressUpWidget() {
  const [dropDown, setDropDown] = useState(true);
  const toggleDropDown = () => {
    setDropDown(false);
  };

  return (
    <div className="dress-up-widget">
      <div className="dress-up">
        <div className="dress-up__wrapper">
          <h4 className="dress-up__title">Dress Up Doll</h4>
          <button onClick={toggleDropDown} className="dress-up__toggle">
            toggle
          </button>
        </div>
        <img
          className="dress-up__doll"
          src="https://placehold.co/200x400"
        ></img>
      </div>
      <div className="filter-category"></div>
      <div className="filter-subcategory"></div>
    </div>
  );
}

export default DressUpWidget;
