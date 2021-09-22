const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Nova",
      animal: "Dog",
      breed: "Tibetan Spaniel",
    }),
    React.createElement(Pet, {
      name: "Katie",
      animal: "Dog",
      breed: "Maltese",
    }),
    React.createElement(Pet, {
      name: "Hops",
      animal: "Rabbit",
      breed: "No idea",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
