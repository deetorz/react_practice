import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Nova",
//       animal: "Dog",
//       breed: "Tibetan Spaniel",
//     }),
//     React.createElement(Pet, {
//       name: "Katie",
//       animal: "Dog",
//       breed: "Maltese",
//     }),
//     React.createElement(Pet, {
//       name: "Hops",
//       animal: "Rabbit",
//       breed: "No idea",
//     }),
//   ]);
// };

//JSX Version
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Nova" animal="Dog" breed="Tiben Spaniel" />
      <Pet name="Katie" animal="Dog" breed="Maltese" />
      <Pet name="Hops" animal="Rabbit" breed="Shorthair" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
