const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}), ${b}`;
};

const h1s = document.querySelectorAll("h1");
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", colorChange);
}
for (let h1 of h1s) {
  h1.addEventListener("click", makeRandColor);
}

function colorChange() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
