import { App } from "./app";

console.group();
console.log("This runs very early on the page:");
console.log("document.head: ", document.head);
console.log("document.body: ", document.body);
console.log(
  "document.documentElement: ",
  JSON.stringify(document.documentElement)
);
console.groupEnd();

document.addEventListener("DOMContentLoaded", () => {
  // Now I start to oad my UI.
  App(document.body);
});
