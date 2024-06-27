const render = () => {
  const root = document.getElementById("root");

  if (root) {
    const heading = document.createElement("h1");
    heading.textContent = "Webpack";
    root.appendChild(heading);
  }
};

render();