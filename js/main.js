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
let first_block =  document.getElementById("firstText").value;
function newFunction(){
    localStorage.setItem("lastname", "first_block");
    document.getElementById("firstText").innerHTML = localStorage.getItem("lastname");

}


//task 14
let goTopBtn = document.querySelector(".back_to_top");

window.addEventListener("scroll", scrollFunction);
goTopBtn.addEventListener("click", backToTop);

function scrollFunction() {
    let scrolled = window.pageYOffset;
    let height = document.body.clientHeight;

    if (scrolled > (0.5 * height)) {
        goTopBtn.classList.add("back_to_top-show");
    }
    else{
        goTopBtn.classList.remove("back_to_top-show");
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 50);
    }
}

//task 15
let outer_block = document.getElementById( "outer");
outer_block.addEventListener("click", showMessage1);
let inner_block = document.getElementById( "inner");
inner_block.addEventListener("click", event => showMessage2(event));

function showMessage1(){
    alert("OUTER BLOCK");
}

function showMessage2(event){
    alert("INNER BLOCK");
   event.stopPropagation();
}

//task 16
let btn16 = document.getElementById( "btn16");
let big_square = document.getElementById( "big_square");
btn16.addEventListener("click", showBigTransparentSquare);
big_square.addEventListener("click", hideBigTransparentSquare)

function showBigTransparentSquare(){
    big_square.classList.add("big_transparent_square_show");
   document.body.style.overflow = "hidden";
}

function hideBigTransparentSquare(){
    big_square.classList.remove("big_transparent_square_show");
    document.body.style.overflow = "visible";
}

//task 17
let form_element = document.getElementById( "form_t17");
form_element.addEventListener("submit", event => notReload(event));


function notReload(event){
    event.preventDefault()
}

//task 18
document.getElementById("btn18")
    .addEventListener("click",function(){
        document.getElementById("inputFile_t18").click();
    },false);