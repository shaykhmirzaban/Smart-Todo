import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component
import Login from "./components/screen/Login";
import Signup from "./components/screen/Signup";
import Boilerplate from "./components/screen/Boilerplate";
import Data from "./components/screen/Data";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boilerplate />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="data" element={<Data />} />
      </Routes>
    </Router>
  );
}
