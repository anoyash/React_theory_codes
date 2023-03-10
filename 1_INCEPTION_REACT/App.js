/* conventional way of creating html elements in javascript */
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello  World!";

// const root = document.getElementById("root");
// root.appendChild(heading);

/* now using modern way of creating a DOM objects and rendering */

//React.createElement has three parameters i.e type, props and children. Pros can be Null or {} also works
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namste World!"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "title-desc",
  },
  "By Ashutosh Kumar"
);

const container = React.createElement("div", null, [heading, heading1]);

//heading is a react element which is basically a object and React.createElement is method that creates a DOM object
console.log(heading);

//ReactDOM.createRoot is creating a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

//parsing a react element inside a root element
//root.render(heading);
root.render(container);
