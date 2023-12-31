const courses = [
  {
    name: "Complete ReactJs course",
    price: "2.4",
  },

  {
    name: "Complete Angular course",
    price: "2.8",
  },
  {
    name: "Complete MERN course",
    price: "2.1",
  },
  {
    name: "Complete c++ course",
    price: "2.9",
  },
];

generateList();

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);
    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
