import React from "react";
import { createRoot } from "react-dom/client";

const ExampleApp = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "200px",
        height: "200px",
        background: "white",
        color: "black",
      }}
    >
      Hello
    </div>
  );
};

export const App = (rootElement: HTMLElement) => {
  const appRoot = document.createElement("div");
  rootElement.appendChild(appRoot);
  const root = createRoot(appRoot);
  root.render(<ExampleApp />);
};
