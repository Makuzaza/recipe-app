import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <div className="container">
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
