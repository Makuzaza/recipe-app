import styles from "./Header.module.css";
import dietImage from "../components/images/diet.png";


function Header() {
  return (
  <div className={styles.headerContainer}><img src={dietImage}/></div>
  )
}

export default Header;
