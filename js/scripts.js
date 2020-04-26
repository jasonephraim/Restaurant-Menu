let renderDishesList = document.getElementById("dishes");

let dishesList = dishes.map(function (dish) {
  let dishesInList = `
    <div class="dish-card card col-lg-3 col-md-4 col-sm-12 m-4 ${dish.course}">
      <img class="card-img-top" src="${dish.imageURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dish.title}</h5>
        <p class="card-text">${dish.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Course: ${dish.course}</li>
        <li class="list-group-item">Price: $${dish.price}</li>
      </ul>
    </div>`;
  return dishesInList;
});

renderDishesList.innerHTML = dishesList.join(" ");
