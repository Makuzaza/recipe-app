import styles from "./Header.module.css";
import dietImage from "../components/images/diet.png";


function Header() {
  return (
  <div className={styles.headerContainer}><a href="/"><img src={dietImage}/></a></div>
  )
}

export default Header;
