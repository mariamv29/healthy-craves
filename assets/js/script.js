//select recipe box
var recipeHere = document.querySelector("#recipes-here");
var searchTerm = document.querySelector("#recipes-search-term");

function genRecipe() {
  console.log(recipeHits);
}

//use user input to target recipes from server API
var getUserRecipe = function () {
  //target user input text value
  var searchedRec = document.querySelector("#recipeText").value;
  console.log(searchedRec);

  //format API into simple variable, include search text in API to locate specific food item
  var apiURL =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    searchedRec +
    "&app_id=a3b3b2be&app_key=cf006eda64061e44a7e53cd676889a23";

  //make a request to the url
  fetch(apiURL).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);

      //create variable to hold recipeHits value
      var recipeHits;

      //target hits from object
      recipeHits = data.hits;
      displayRecipes(recipeHits);
      console.log(recipeHits[0].recipe.label);
    });
  });
};

// displaying content to  page
var displayRecipes = function (recipes) {
  var tempArr =[];
  // Create a variable that will select the <div> where the recipes will be displayed
  var recipesContainerEl = document.querySelector("#recipes-container");

  //clear old content
  recipesContainerEl.innerHTML = "";

  console.log(recipes);
  for (var i = 0; i < 3; i++) {
    var recipeslabel = document.createElement("h1");
    recipeslabel.innerHTML = recipes[i].recipe.label;

    console.log(recipesContainerEl);

    var calories = document.createElement("p");
    var recipesUrl = document.createElement("a");
    calories.innerHTML =
      " calories \n" + Math.round(recipes[i].recipe.calories);
    recipesUrl.setAttribute("href", recipes[i].recipe.url);
    recipesUrl.innerHTML = "Checkout the link!\n";
    recipesUrl.setAttribute("target", "_blank");

    // create variable to hold image
    var image = document.createElement("img");
    image.setAttribute("src", recipes[i].recipe.image);
    //append
    recipesContainerEl.appendChild(recipeslabel);
    recipesContainerEl.appendChild(calories);
    recipesContainerEl.appendChild(recipesUrl);
    recipesContainerEl.appendChild(image);


    // // update array on tasks object and save
    // recipes[calories.recipe] = tempArr;

    savedRecipes();
  }
};

//Drink API

window.onload = function () {
  fetch(
    "https://cors-sucks.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/random.php"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.drinks[0]);
      displayDrinks(data.drinks[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

var displayDrinks = function (drinks) {
  //crete a variable that will will show the drink blog
  var blogContainerEl = document.querySelector("#blog-container-drinks");

  var drinkType = document.createElement("h2");
  drinkType.innerHTML = drinks.strDrink;

  var drinkImg = document.createElement("img");
  drinkImg.setAttribute("src", drinks.strDrinkThumb);

  var instructions = document.createElement("p");
  instructions.innerHTML = drinks.strInstructions;

  blogContainerEl.appendChild(drinkType);
  blogContainerEl.appendChild(instructions);
  blogContainerEl.appendChild(drinkImg);
};

//capture magnifying button click
var catchSearch = document.querySelector("#searchRecipes");
catchSearch.addEventListener("click", getUserRecipe);

var saveThisRecipe = function () {
  modal.style.display = "block";
};

// // capture click from menu item
var saveRec = document.querySelector("#saveFaves");
saveRec.addEventListener("click", saveThisRecipe);

// //save button in modal was clicked
document
  .querySelector("#recipe-saved")
  .addEventListener("click", function (event) {
    if (event.target.matches(".btn-save")) {
      console.log("btn works");
    }
  });

/// saving recipe in my favorite recipe
var inputRecipe = function (recipeId) {
  //create element that make up the recipe property
  var recipeProperty = document.createElement("p");
  recipeProperty.className = "recipe-group-item";

  //append P element to parent li
  recipeProperty.append();
};

  // create array to hold recipes for saving
var recipes = [];

//save input to local storage
var savedRecipes = function () {
  localStorage.setItem("recipes", JSON.stringify(recipes));


};

var loadRecipes = function () {
  recipe = JSON.parse(localStorage.getItem("recipe"));
  console.log(recipe); 


  if (!savedRecipes) {
    return false;
  }
  // loop through savedRecipesarray
  for (var i = 0; i < savedRecipes.length; i++)
    // pass each task object into the `createTaskEl()` function
    createRecipeEl(savedRecipes[i]);
};

loadRecipes();
