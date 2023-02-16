import "../styles/navigation.scss";
import navList from "../data/navigation.json";
import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const location = useLocation();
  // console.log(location);

  return (
    <nav className="main-nav">
      <ul className="navItems">
        {navList.map((navItem, index) => {
          let isActive = false;

          if (location.pathname === navItem.url) {
            isActive = true;
          }
          return (
            <li key={index}>
              <Link
                className={isActive === true ? "active" : ""}
                to={navItem.url}
              >
                {navItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
