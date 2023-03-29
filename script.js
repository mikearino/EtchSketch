//select display div
const display = document.querySelector('.container')

let rando = () => {
  let r = Math.random()*256|0 
  let g = Math.random()*256|0 
  let b = Math.random()*256|0
  return [r,g,b]
};
//use this in a function for hover.
console.log(rando())


for (i=1; i<257; i++) {
 let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = `Div ${[i]}`;
  square.style.cssText = "background-color: blue;"
  display.appendChild(square)
}