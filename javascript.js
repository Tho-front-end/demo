// const age = 16;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
const content = document.querySelector(".review-content").textContent;
console.log(content);
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function (event) {
  submitButton.classList.add("red");
  event.stopPropagation();
});
document.addEventListener("click", function () {
  submitButton.classList.remove("red");
});
