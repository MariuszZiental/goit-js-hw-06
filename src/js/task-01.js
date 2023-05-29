var categoriesList = document.querySelector("#categories");

var categoryItems = categoriesList.querySelectorAll("li.item");

var categoryCount = categoryItems.length;

console.log("Number of categories: " + categoryCount);

categoryItems.forEach(function (item) {
  var header = item.querySelector("h2");

  var listItems = item.querySelectorAll("ul li");

  var itemCount = listItems.length;

  console.log("Header: " + header.textContent);
  console.log("Elements: " + itemCount);
});
