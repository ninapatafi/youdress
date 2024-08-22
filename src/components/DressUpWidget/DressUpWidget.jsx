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
    products.map((product) => {
      const { category, subcategory } = product;
      if (!categories[category]) {
        categories[category] = new Set();
      }
      categories[category].add(subcategory);
    });

    Object.keys(categories).map((category) => {
      categories[category] = Array.from(categories[category]);
    });
    // console.log("categories", categories);
    return categories;
  };

  const categories = extractCategories(products);

  // cSonsole.log(categories);
  // console.log(subcategories);

  return (
    <div className="dress-up-widget">
      <button
        className={`${showButton ? "button-true" : "button-false"}`}
        onClick={toggleWidget}
      >
        <span className="button-true__text">Click for Dress Up Doll</span>
      </button>

      {isOpen && (
        <DressUpDoll
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setShowButton={setShowButton}
        />
      )}

      <div className="filter-subcategory">
        <div className="subcategory-section">
          <h5
            id="subcategoryTitle"
            className={`subcategory-section__title ${
              !selectedCategory ? "hidden" : ""
            }`}
          >
            {selectedCategory}
            {""}
          </h5>
          <ul>
            {categories[selectedCategory] ? (
              categories[selectedCategory].map((subcategory) => (
                <li className="subcategory-section__text" key={subcategory}>
                  <button
                    className="subcategory-section__btn"
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {subcategory}
                  </button>
                </li>
              ))
            ) : (
              <p className="subcategory-section__placeholder-text">
                Select A Category To View Sub-Categories
              </p>
            )}
          </ul>
        </div>
      </div>
      <div className="filter-category">
        <div className="category-section">
          <ul>
            <h5 className="category-section__title">Category</h5>
            {Object.keys(categories).map((category) => (
              <li
                className="category-section__text"
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                <button
                  className={`category-section__btn ${
                    selectedCategory === category
                      ? "category-section__btn--selected"
                      : ""
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="color-section">
          <h5 className="color-section__title">Color</h5>
          <div className="color">
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
        <div className="size-section">
          <h5 className="size-section__title">Size</h5>
          <button className="size-section__btn">XS</button>
          <button className="size-section__btn">S</button>
          <button className="size-section__btn">M</button>
          <button className="size-section__btn">L</button>
          <button className="size-section__btn">XL</button>
          <button className="size-section__btn">XXL</button>
        </div>
        <div className="price-section">
          <h5 className="price-section__title">Price</h5>
          <ul>
            <li>
              <button className="price-section__btn">under $15</button>
            </li>
            <li>
              <button className="price-section__btn">$15-30</button>
            </li>
            <li>
              <button className="price-section__btn">$30-60</button>
            </li>
            <li>
              <button className="price-section__btn">$60+</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DressUpWidget;
