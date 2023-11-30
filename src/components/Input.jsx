import { Link } from "react-router-dom";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type here the products" />
      <Link to="/recipes">
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default Input;
