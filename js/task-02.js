const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

var ingredientsList = document.querySelector("#ingredients");
var listItems = ingredients.map(function (ingredient) {
  var listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  return listItem;
});

ingredientsList.append(...listItems);
