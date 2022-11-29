document.addEventListener("DOMContentLoaded", () =>{

console.log('pageloaded');
let square = document.querySelector('.square');

let squareHover = (e) => {

  square.classList.add('square-end-frame', 'fadeInAnimation');
  square.classList.remove('fadeOutAnimation');
}

square.addEventListener('mouseover', squareHover);

let squareOut = (e) =>{
square.classList.remove('square-end-frame');
square.classList.add('fadeOutAnimation');
square.classList.remove('fadeInAnimation')
}

square.addEventListener('mouseout', squareOut);



});
