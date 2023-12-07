import { Link } from "react-router-dom";
import styles from "./Input.module.css";

function Input() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Type here the products" />
      <Link to="/recipes">
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default Input;
