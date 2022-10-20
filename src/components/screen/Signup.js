import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/login.css";
import { loginUser } from "../FirebaseMethod";

function Signup() {
  let [item, setItem] = useState({
    email: "",
    password: ""
  });
  let navigate = useNavigate();

  const checkValue = (e) => {
    let { value, name } = e.target;
    setItem((val) => {
      return { ...val, [name]: value };
    });
  };

  const signUpUser = (e) => {
    e.preventDefault();
    loginUser(item)
      .then((res) => navigate("/data", { state: res }))
      .catch((code, message) => console.log(code, message));
  };

  return (
    <section className="signup">
      <h1>Signup</h1>

      <form onSubmit={signUpUser}>
        <input type="text" placeholder="Enter first name" />
        <input type="text" placeholder="Enter last name" />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={checkValue}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={checkValue}
        />
        <button>Sign up</button>
      </form>
    </section>
  );
}

export default Signup;
