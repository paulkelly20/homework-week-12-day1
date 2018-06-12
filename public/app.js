var app = function() {

  max = {name: "Max",favouriteFood: "Whiskas Temptations", img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
  barnaby = {name: "Barnaby",favouriteFood: "Tuna", img: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}
  boba = {name: "Boba",favouriteFood: "Sock fluff", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}

  cats = [max,barnaby, boba]
  for(cat of cats){
    addCat(cat.name, cat.favouriteFood, cat.img)
  };

  addCat("Sam", "Salmon", 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg');
};

var addCat = function(name, favouriteFood, img){
  var gotName = catName(name);
  var gotFood = catFood(favouriteFood);
  var newcatImg = catImg(img);

  appendElements(gotName, gotFood, newcatImg)
};


var catName = function(inputtedName){
  var name = document.createElement("li");
  name.textContent = "Name: " + inputtedName;
  return name
};
var catFood = function(inputtedFavouriteFood){
  var food = document.createElement("li");
  food.textContent = "Favourite food:" + inputtedFavouriteFood;
  return food
};
var catImg = function(inputtedImg){
  var img = document.createElement("li");

  // adding tag using innerHTML but not advised
  // img.innerHTML = "<img src=\"" + inputtedImg + "\"/>";

  var imageTag = document.createElement("img");
  imageTag.width = "500";
  imageTag.src = inputtedImg;
  img.appendChild(imageTag);
  return img
};

var appendElements = function(catName, catFood, catImg){
  // var ul = document.querySelector('.cat')
  // var li = document.createElement("li");
  var catList = document.createElement("ul");
  catList.classList.add("cat")
  catList.appendChild(catName);
  catList.appendChild(catFood);
  catList.appendChild(catImg);
  var container =  document.querySelector('.cat')
  container.appendChild(catList);
};

window.onload = app;
