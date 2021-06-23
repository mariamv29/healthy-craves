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
  fetch(apiURL).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
      //   displayRecipes(data, searchTerm);
      //create variable to hold recipeHits value
      var recipeHits;

      //target hits from object
      recipeHits = data.hits;
      displayRecipes(recipeHits);
      console.log(recipeHits[0].recipe.label);
    });
  });
};

// new code
// displaying content to  page
var displayRecipes = function (recipes) {
  // Create a variable that will select the <div> where the recipes will be displayed
  var recipesContainerEl = document.querySelector("#recipes-container");

  //clear old content
  recipesContainerEl.innerHTML = "";

  console.log(recipes);
  ///new code ///
  for (var i = 0; i < 4; i++) {
    var recipeslabel = document.createElement("h1");
    recipeslabel.innerHTML = recipes[i].recipe.label;

    console.log(recipesContainerEl);

    var calories = document.createElement("p");
    var recipesUrl = document.createElement("a");
    calories.innerHTML = " calories " + Math.round(recipes[i].recipe.calories);
    recipesUrl.setAttribute("href", recipes[i].recipe.url);
    recipesUrl.innerHTML = "Checkout the link!";
    recipesUrl.setAttribute("target", "_blank");

    // create variable to hold image
    var image = document.createElement("img");
    image.setAttribute("src", recipes[i].recipe.image);
    //append
    recipesContainerEl.appendChild(recipeslabel);
    // Append "calories" to the <div>
    recipesContainerEl.appendChild(calories);
    recipesContainerEl.appendChild(image);
    recipesContainerEl.appendChild(recipesUrl);
  }

  /// end of new code //
};

//Drink Api

window.onload = function(){
    fetch('https://cors-sucks.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.drinks[0])
    })
    .catch((err) => {
        console.log(err)
    })
}

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
      console.log("btn works");

