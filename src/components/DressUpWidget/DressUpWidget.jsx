import "./DressUpWidget.scss";
import { useState } from "react";
import DressUpDoll from "../DressUpDoll/DressUpDoll.jsx";

function DressUpWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    setShowButton(isOpen);
  };

  return (
    <div className="dress-up-widget">
      <button
        className={`${showButton ? "button-true" : "button-false"}`}
        onClick={toggleWidget}
      >
        <span className="button-true__text">Dress Up Doll</span>
      </button>

      {isOpen && (
        <DressUpDoll
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setShowButton={setShowButton}
        />
      )}

      <div className="filter-category">
        <h5>category name placeholder</h5>
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
      </div>
      <div className="filter-subcategory">
        <div>
          <h5>category</h5>
          <h6>dresses</h6>
          <h6>tops</h6>
          <h6>bottoms</h6>
          <h6>outerwear</h6>
          <h6>shoes</h6>
          <h6>bags & purses</h6>
        </div>
        <div>
          <h5>color</h5>
        </div>
        <div className="size-selection">
          <h5>size</h5>
          <button>button1</button>
          <button>button2</button>
          <button>button3</button>
        </div>
        <div>
          <h5>price</h5>
          <h6>under $15</h6>
          <h6>$15-30</h6>
          <h6>$30-60</h6>
          <h6>$60+</h6>
        </div>
      </div>
    </div>
  );
}

export default DressUpWidget;
