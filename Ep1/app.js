{
  /* <div className="parent">
    <div className="child">
        <h1></h1>
        <p></p>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement("p", null, "This is a paragraph"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
console.log(heading);

const root = ReactDOM.createElement(document.getElementById("root"));

root.render(heading);
