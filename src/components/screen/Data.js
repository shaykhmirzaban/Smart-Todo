import { useLocation } from "react-router-dom";

export default function Data() {
  let location = useLocation();
  console.log(location.state);
  return (
    <section className="data">
      <h1>WELCOME</h1>
    </section>
  );
}
