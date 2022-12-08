document.addEventListener("DOMContentLoaded",()=>{
//code below is for class box
  let boxColorChange = document.querySelectorAll('.box');
//The code below turns the blue boxes yellow
let turnYellow = (box) =>{
  box.style.backgroundColor ='yellow';
  console.log("The color of the boxes have changed from blue to yellow!")
};
boxColorChange.forEach(turnYellow);

//The code below turns borders to black outline
  let boxBorder = (e) =>{
    e.style.borderColor = "black";
    console.log("Black border added");
  };

  boxColorChange.forEach.addEventListener('click',boxBorder(blackBox))
  blackBox.style.borderColor = "black";
  console.log("Border is Black");

});
