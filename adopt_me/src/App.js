import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Nova" animal="Dog" breed="Tiben Spaniel" />
      <Pet name="Katie" animal="Dog" breed="Maltese" />
      <Pet name="Hops" animal="Rabbit" breed="Shorthair" /> */}
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
