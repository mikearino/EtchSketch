//select display div
const display = document.querySelector('.container')

let rando = () => {
  let r = Math.random()*256|0 
  let g = Math.random()*256|0 
  let b = Math.random()*256|0
  return [r,g,b]
};
console.log(rando())
//use this in a function for hover.



for (i=1; i<257; i++) {
 let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = `Div ${[i]}`;
  square.addEventListener('mouseover', () => {console.log('wow')})
  square.style.cssText = "background-color: blue;"
  display.appendChild(square)
}