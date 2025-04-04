import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>


      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
      <NavLink className={styles.link} to="/cadastro">
        Cadastro
      </NavLink>
      
        
      
     
        
      
    </nav>
  );
};

export default NavBar;