import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Wise Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={styles.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/addquote" activeClassName={styles.active}>
              Add New Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
