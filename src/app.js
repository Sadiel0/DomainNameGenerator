/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generator").innerHTML = domainGenerator();
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".io", ".net"];
const domainGenerator = () => {
  const array = [];
  for (let i = 0; i < pronoun.length; i += 1) {
    for (let j = 0; j < adj.length; j += 1) {
      for (let k = 0; k < noun.length; k += 1) {
        for (let d = 0; d < domain.length; d += 1) {
          let p = pronoun[i];
          let a = adj[j];
          let n = noun[k];
          let l = domain[d];
          array.push(`<li> ${p + a + n + l} </li>`);
        }
      }
    }
  }
  return array.join("");
};
