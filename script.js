//select display div
const display = document.querySelector('.container')

for (i=1; i<257; i++) {
 let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = `Div ${[i]}`;
  square.addEventListener('mouseover', ()=> {
  let r = Math.random()*256|0 
  let g = Math.random()*256|0 
  let b = Math.random()*256|0  
  square.style.cssText = `background-color: rgb(${r},${g},${b})`})
  display.appendChild(square)
}

