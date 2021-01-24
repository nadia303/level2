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
document.getElementById("yellow_square").addEventListener("click", function() {
    alert("Hello World!");
});
document.getElementById("yellow_square").removeEventListener();
document.getElementById("yellow_square").addEventListener("click", function() {
    document.getElementById("yellow_square").style.visibility = "hidden";
});





