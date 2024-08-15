import "./DressUpWidget.scss";
import { useState } from "react";
import DressUpDoll from "../DressUpDoll/DressUpDoll.jsx";

function DressUpWidget({
  products,
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when category changes
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    // Here you would apply the filter logic to filter your items
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    setShowButton(isOpen);
  };

  const extractCategories = (products) => {
    const categories = {};
    products.forEach((product) => {
      const { category, subcategory } = product;
      if (!categories[category]) {
        categories[category] = new Set();
      }
      categories[category].add(subcategory);
    });

    Object.keys(categories).forEach((category) => {
      categories[category] = Array.from(categories[category]);
    });

    return categories;
  };

  const categories = extractCategories(products);
  console.log(categories);
  // console.log(subcategories);

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

      <div className="filter-subcategory">
        <h5>{selectedCategory} </h5>
        <ul>
          {categories[selectedCategory] ? (
            categories[selectedCategory].map((subcategory) => (
              <li key={subcategory}>
                {/* {" "} */}
                <button onClick={() => handleSubcategoryClick(subcategory)}>
                  {subcategory}
                </button>
              </li>
            ))
          ) : (
            <li>Select A Subcategory</li>
          )}
        </ul>
      </div>
      <div className="filter-category">
        <div>
          <h5>category</h5>
          {Object.keys(categories).map((category) => (
            <h6 key={category} onClick={() => handleCategoryClick(category)}>
              <button>{category}</button>
            </h6>
          ))}
        </div>
        <div>
          <h5 className="color">color</h5>
          <div className="color__wrapper">
            <button className="color__black color__button " />
            <button className="color__white color__button " />
            <button className="color__grey color__button " />
            <button className="color__red color__button " />
            <button className="color__blue color__button " />
            <button className="color__yellow color__button " />
            <button className="color__pink color__button " />
            <button className="color__green color__button " />
            <button className="color__brown color__button " />
            <button className="color__purple color__button " />
            <button className="color__orange color__button " />
          </div>
        </div>
        <div className="size-selection">
          <h5>size</h5>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
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
