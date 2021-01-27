//task 1
function displayNoneFunction(){
let obj = document.getElementById("black_square1");
obj.style.display = "none";
}
function removeFunction(){
    let obj = document.getElementById("black_square1");
    obj.remove();
}

function hideFunction(){
  let obj =  document.getElementById("black_square1");
      obj.hidden = true;
}

//task 2
function displayFunction(){
    let obj = document.getElementById("black_square2");
    obj.style.visibility = obj.style.visibility == "hidden" ? "visible" : "hidden";
}

//task 3
function displayFunctionForSquares(){
    let objs = document.getElementsByClassName("five_squares");
    for ( let i = 0; i < objs.length; i++) {
        objs[i].style.visibility = objs[i].style.visibility == "hidden" ? "visible" : "hidden";
    }
}

//task 4
function displaySelectorsFunction(){
    let selector = document.getElementById("input_value").value;
    let objs = document.querySelectorAll(selector)
    for ( let i = 0; i < objs.length; i++) {
        objs[i].style.visibility = objs[i].style.visibility == "hidden" ? "visible" : "hidden";
    }
}

//task 5
let obj = document.getElementById("yellow_square");
obj.addEventListener("click", sayHello);

function sayHello() {
    alert ("Hello!");
    obj.removeEventListener("click", sayHello);
    obj.addEventListener("click", hideYellowSquare);
}

function hideYellowSquare() {
    obj.style.visibility = "hidden";
}

//task 6
let btn = document.getElementById("btn7");
btn.addEventListener("mouseover", hideRedSquare);
btn.addEventListener("mouseout", showRedSquare);
let red_square = document.getElementById("red_square");

function hideRedSquare(){
   red_square.style.visibility = "hidden";
}

function showRedSquare(){
    red_square.style.visibility = "visible";
}

//task 7
let green_square = document.getElementById("green_rect");

function showGreenSquare() {
    green_square.style.visibility = "visible";
}

function hideGreenSquare(){
    green_square.style.visibility = "hidden";
}

//task 8
function loadImage(){
    let link = document.getElementById("input_value_t8").value;
    let picture = document.getElementById("picture_t8");
    picture.src = link;
    picture.style.display = "block";
}

//task 9
function loadImages(){
    let obj = document.getElementById("myTextarea").value;
    let pictures = document.getElementById(  "pictures_container");
    let links = obj.split("\n");
  //  picture.src = links;
 //   picture.style.display = "block";

  for ( let i = 0; i < links.length; i++) {

      let img = document.createElement("img");
      img.src = links[i];
      img.style.height  = "200px";
      img.style.paddingBottom = "10px";
      pictures.appendChild(img);

   }
}


//task 10
function showMouseCoords(event) {
   let x = event.clientX;
   let y = event.clientY;
   document.getElementById("x_y_coordinates").innerHTML ="X: " + x + ", Y: " + y;
}

//task 11
    let lang = "Language: " + navigator.language;
    document.getElementById("language").innerHTML = lang;

//task 12
let location_coord  = document.getElementById("geolocation");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        location_coord.innerHTML = "Not supported";
    }

function showPosition(position) {
    location_coord.innerHTML = "Ш: " + position.coords.latitude + "</br>"
        + " Д: " + position.coords.longitude;
}

    //task 13
//Local storage


let text1 = document.getElementById("firstText").value;
console.log(text1);
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("key1", text1);

}

function getInformation1(){
    document.getElementById("firstText").innerHTML = localStorage.getItem("key1");
}

