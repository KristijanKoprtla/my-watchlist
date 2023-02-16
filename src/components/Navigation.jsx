import "../styles/navigation.scss";
import navList from "../data/navigation.json";
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="navItems">
        {navList.map((navItem, index) => (
          <li key={index}>
            <Link to={navItem.url}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
