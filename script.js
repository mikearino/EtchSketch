//select display div
const display = document.querySelector('.container')

for (i=1; i<257; i++) {
 let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = `Div ${[i]}`;
  square.style.cssText = "background-color: blue;"
  display.appendChild(square)
}