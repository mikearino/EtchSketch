// create a global audio context
const audioContext = new AudioContext();
// select display div
const display = document.querySelector('.container')
// select the new button
const newBoard = document.querySelector('#newBoard')
newBoard.addEventListener('click',()=> {  aNum = Number(window.prompt("Enter a number", "")),
createBoard(aNum * aNum)
})

let createBoard = (aNum) => {
  //loop through and add color/waveforms
  for (let i = 0; i < aNum; i++) {
    let square = document.createElement('div')
    let r = document.querySelector(':root');
    // square.style.setProperty('--aNum', Math.sqrt(aNum));
    r.style.setProperty('--aNum', Math.sqrt(aNum));
    square.classList.add('content')
    square.textContent = ' ';
    square.addEventListener('mouseover', (e) => {
      let r = Math.random() * 256 | 0;
      let g = Math.random() * 256 | 0;
      let b = Math.random() * 256 | 0;
      square.style.cssText = `background-color: rgb(${r},${g},${b})`;
      
      console.log(square)
      
      //waveform generation
      let f = parseInt(Math.floor(Math.random() * 4) + 1);
      square.classList.add(f);
      let o = audioContext.createOscillator();
      let ga = audioContext.createGain();
      
      //if class list's number is 1-4 change the waveform
      if (e.target.classList[1] == 1) {
        o.type = "sine";
      } else if (e.target.classList[1] == 2) {
        o.type = "sawtooth";
      } else if (e.target.classList[1] == 3) {
        o.type = "square";
      } else if (e.target.classList[1] == 4) {
        o.type = "triangle";
      }
      
      // set a random frequency between 200 and 800 Hz
      o.frequency.value = Math.random() * 600 + 200;
      
      //envelope
      o.connect(ga);
      ga.connect(audioContext.destination);
      o.start(0);
      o.stop(audioContext.currentTime + 0.1);
      
      // disconnect nodes and context so it doesn't crash
      setTimeout(() => {
        o.disconnect();
        ga.disconnect();
      }, 100);
    })
    display.appendChild(square);
  }
}

createBoard()


