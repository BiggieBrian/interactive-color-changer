const button = document.querySelector("button");
const box = document.querySelector("#box");

const colorValues = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-400",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-400",
  "bg-rose-500",
  "bg-lime-500",
  "bg-emerald-500",
];

button.addEventListener("click", () => {
  const randomColor =
    colorValues[Math.floor(Math.random() * colorValues.length)];

  box.classList.remove(box.classList.value);
  box.classList.add(randomColor);

  console.log(randomColor);
});
