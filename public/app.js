var app = function() {
  addCat("Sam", "Salmon", 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg');
};

var addCat = function(name, favouriteFood, img){
  var createCat = createCatList();
  var gotName = catName(name);
  var gotFood = catFood(favouriteFood);
  var newcatImg = catImg(img);
  var ul = document.querySelector('.cat')
  var li = document.createElement("li");
  appendElements(gotName, gotFood, newcatImg, ul, li)
};

var createCatList = function(){
  var cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;
};

var catName = function(inputtedName){
  var name = document.createElement("li");
  name.textContent = inputtedName;
  return name
};
var catFood = function(inputtedFavouriteFood){
  var food = document.createElement("li");
  food.textContent = inputtedFavouriteFood;
  return food
};
var catImg = function(inputtedImg){
  var img = document.createElement("li");
  img.innerHTML = "<img src=\"" + inputtedImg + "\"/>";
  return img
};

var appendElements = function(catName, catFood, catImg, ul, li){
  li.appendChild(catName);
  li.appendChild(catFood);
  li.appendChild(catImg);
  ul.appendChild(li);
};

window.onclick = app;
