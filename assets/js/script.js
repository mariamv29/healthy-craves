//select recipe box
var recipeHere = document.querySelector("#recipes-here");
// new code //
var searchTerm = document.querySelector("#recipes-search-term");
/// end of new code //

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
  fetch(apiURL)
  .then(function (response) { 
      console.log(response);
    return response.json().then(function (data) {
       console.log(data.searchReach)
    //   displayRecipes(data, searchTerm);
      //create variable to hold recipeHits value
      var recipeHits;

      //target hits from object
      recipeHits = data.hits;
      console.log(recipeHits);

      ///new code ///

      // Create a variable that will select the <div> where the recipe will be displayed
      var recipesHereEl = document.querySelector("#recipes-here");
      //empty the <div> before we append recipe  to it
      recipesHereEl.innerHTML = " ";

      var calories = document.createElement("div");
      calories.setAttribute(response.data.calories);

      // Append "calories" to the <div>
      recipesHereEl.appendChild.apply(calories);
      /// end of new code //
    });
  });
};

// new code// displaying date to  page
var displayRecipes = function (recipe, searchTerm) {
  console.log(recipe);
  console.log(searchTerm);
};

//capture magnifying button click
var catchSearch = document.querySelector("#searchRecipes");
catchSearch.addEventListener("click", getUserRecipe);

var saveThisRecipe = function () {
  window.prompt("Would you like to save a recipe?");
};

// capture click from menu item
var saveRec = document.querySelector("#saveFaves");
saveRec.addEventListener("click", saveThisRecipe);

//save button in modal was clicked
document
  .querySelector("#recipe-saved")
  .addEventListener("click", function (event) {
    if (event.target.matches(".btn-save")) {
      console.log("btn works");
    }
  });
