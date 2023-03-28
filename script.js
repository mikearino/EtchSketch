//select display div
const display = document.querySelector('.container')

for (i=0; i < 32; i++) {
 let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = 'This is the text-content!';
  square.style.cssText = "background-color: blue;"
  display.appendChild(square)
}