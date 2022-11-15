var square = document.getElementById ("square");
console.log(square);
var str = "Click on button to change the background"
square.innerHTML = str;

function changeColor(red){
document.body.style.background=red;

}
function square2(){
  changeColor('red');

}
