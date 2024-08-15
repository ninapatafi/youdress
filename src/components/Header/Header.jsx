import heartSVG from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({}) {
  return (
    <header>
      <nav>
        <div className="lefthand">
          <div className="logo">
            {/* <Link className="back-link" to="/"> */}
            <img src="https://placehold.co/30"></img>
            <h2>YouDress</h2>
            {/* </Link> */}
          </div>
          <button>
            <h3>new</h3>
          </button>
          <button>
            <h3>sale</h3>
          </button>
          <button>
            <h3>categories</h3>
          </button>
          {/* <ul className="dropdown-menu">
            {categories.map((category) => (
              <li key={category} className="dropdown-item">
                {category}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="righthand">
          <img src={heartSVG} width="40" />
          <img src={heartSVG} width="40" />
          <img src={heartSVG} width="40" />
          <img src={heartSVG} width="40" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
