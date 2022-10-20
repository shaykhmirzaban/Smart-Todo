import { Outlet, useNavigate } from "react-router-dom";

import "../../style/boilerplate.css";

function Boilerplate() {
  let navigate = useNavigate();
  return (
    <section className="boilerplate">
      <div className="navbar">
        <button onClick={() => navigate("login")}>Login</button>
        <button onClick={() => navigate("signup")}>sign up</button>
      </div>

      <Outlet />
    </section>
  );
}

export default Boilerplate;
