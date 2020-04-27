var renderDishesList = document.getElementById("dishes");
const dishesArray = Array.from(dishes);

let dishesList = dishesArray.map(function (dish) {
  let dishesInList = `
    <div class="dish-card card col-lg-3 col-md-4 col-sm-12 m-4 ${dish.course}">
      <img class="card-img-top" src="${dish.imageURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dish.title}</h5>
        <p class="card-text">${dish.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="bold">Course:</span> ${dish.course}</li>
        <li class="list-group-item"><span class="bold">Price:</span> $${dish.price}</li>
      </ul>
    </div>`;
  return dishesInList;
});

renderDishesList.innerHTML = dishesList.join(" ");

// var startersArray = dishesArray.filter((dish) => dish.course === "Starters");
// console.log(startersArray);

//var entreesArray = dishesArray.filter((dish) => dish.course === "Entrees");
//console.log(entreesArray);

//var dessertsArray = dishesArray.filter((dish) => dish.course === "Desserts");
//console.log(dessertsArray);

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("dish-card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
