let showPanel = (e) => {
console.log(e);

let panel = document.querySelector('#infopanel');
console.log(panel);


let courseName =document.querySelector('#courseName');
console.log(courseName);
courseName.textcontent = ("CST252");
     /////show the showPanel
     /////update the course name text

   }

document.addEventListener("DOMContentLoaded", () => {

//hides info box
 let infopanel = document.getElementById('infopanel');
window.onload = function (){
  document.getElementById("infopanel").style.dysplay = "none";
}

//below is the code that makes the borders thick when hovered on

     /////update the course description
     /////text to java script class


     let itembox1 = document.querySelector('.itembox1');
     console.log(itembox1);
itembox1.onmouseout = function(){
  document.getElementById("itembox1").style.borderWidth =("thin");

}
itembox1.onmouseover = function (){
  document.getElementById("itembox1").style.borderWidth=("thick");

}

let itembox2 = document.getElementById('itembox2');
itembox2.onmouseout = function (){
document.getElementById("itembox2").style.borderWidth = ("thin");

}
itembox2.onmouseover=function(){
  document.getElementById("itembox2").style.borderWidth =("thick");
}

//event that makes infobox appear with different image.
let showInfoPanel1 = document.getElementById("itembox1").onclick = function(){
  console.log("test1")
  document.getElementById("courseimage").src ="images/cst252.jpg";
  document.getElementById("infopanel").style.display = "block";
  document.getElementById("cst252coursename").textcontent=('cst252:');
  document.getElementById("cst252description").textcontent=('This class teaches you the basics of JavaScript');
  document.getElementById("cst351coursename").style.display="none";
  document.getElementById("cst351coursediscription").style.display="none";
  document.getElementById("cst252coursename").style.display="block";
  document.getElementById("cst252description").style.display="block";

};
let showInfoPanel2 = document.getElementById("itembox2").onclick = function (){
  console.log("test2")
  document.getElementById("courseimage").src ="images/cst351.jpg";
  document.getElementById("infopanel").style.display = "block";
  document.getElementById("cst351coursename").textcontent=('cst252:');
  document.getElementById("cst351description").textcontent=('This class teaches you Web Design');
  document.getElementById("cst252coursename").style.display="none";
  document.getElementById("cst252coursediscription").style.display="none";
  document.getElementById("cst351coursename").style.display="block";
  document.getElementById("cst352description").style.display="block";

};
//event where onclick closes info panel.
let infoClose= document.getElementById("exitcontainer").onclick=function(){
  document.getElementById("infopanel1").style.display = "none";
};


});
//1. the exit button
//2. clicking
//3. that info panel /popup hides
/////(disappears)
