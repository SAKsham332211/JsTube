const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGcolor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// const Color = getBGcolor(cyan);
// cyan.addEventListener("mouseenter", () => {
//   center.style.background = Color;
// });

const magicColorChanger = (element, Color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = Color;
  });
};

magicColorChanger(red, getBGcolor(red));
magicColorChanger(cyan, getBGcolor(cyan));
magicColorChanger(violet, getBGcolor(violet));
magicColorChanger(orange, getBGcolor(orange));
magicColorChanger(pink, getBGcolor(pink));
