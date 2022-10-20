import "../../style/login.css";
import { signUpUser } from "../FirebaseMethod";
import { useState } from "react";

function Login() {
  let [item, setItem] = useState({
    email: "",
    password: ""
  });

  // set value in object
  const userData = (e) => {
    let { value, name } = e.target;
    setItem((val) => {
      return { ...val, [name]: value };
    });
  };

  // button action function
  const loginFn = (e) => {
    e.preventDefault();
    console.log(item);
    signUpUser(item)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <section className="login">
      <h1>Login</h1>

      <form onSubmit={loginFn}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={userData}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={userData}
        />

        <button>Login</button>
      </form>
    </section>
  );
}

export default Login;
