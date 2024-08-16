import heartSVG from "../../assets/icons/heart.svg";
import accountSVG from "../../assets/icons/account.svg";
import cartSVG from "../../assets/icons/cart.svg";
import searchSVG from "../../assets/icons/search.svg";
import sparkleSVG from "../../assets/icons/sparkles.svg";
import starSVG from "../../assets/icons/star.svg";

import { Link } from "react-router-dom";
import "./Header.scss";

function Header({}) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="lefthand-container">
          <div className="logo">
            <Link className="logo__back-link" to="/">
              <img className="logo__icon icon" src={starSVG} width="40"></img>
              <h2 className="logo__title">
                <span className="you-text">You</span>
                <span className="dress-text">Dress</span>
              </h2>
            </Link>
          </div>
          <div className="filter-pages">
            <button className="button-pages ">
              <h3 className="button-pages__text">new</h3>
            </button>
            <button className="button-pages">
              <h3 className="button-pages__text">sale</h3>
            </button>
            <button className="button-pages">
              <h3 className="button-pages__text">categories</h3>
            </button>
          </div>
          {/* <ul className="dropdown-menu">
            {categories.map((category) => (
              <li key={category} className="dropdown-item">
                {category}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="righthand-container">
          <img className="icon" src={heartSVG} width="40" />
          <img className="icon" src={accountSVG} width="40" />
          <img className="icon" src={searchSVG} width="40" />
          <Link className="cart-link" to="/cart">
            <img className="icon" src={cartSVG} width="40" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
