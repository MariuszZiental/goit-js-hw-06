const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const categoryCount = categoryItems.length;

console.log("Number of categories: " + categoryCount);

categoryItems.forEach(function (item) {
  const header = item.querySelector("h2");

  const listItems = item.querySelectorAll("ul li");

  const itemCount = listItems.length;

  console.log("Category: " + header.textContent);
  console.log("Elements: " + itemCount);
});
