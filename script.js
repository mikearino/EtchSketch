// create a global audio context
const audioContext = new AudioContext();

// select display div
const display = document.querySelector('.container')

//loop through and add color/waveforms
for (let i = 1; i < 257; i++) {
  let square = document.createElement('div')
  square.classList.add('content')
  square.textContent = ' ';
  square.addEventListener('mouseover', (e) => {
    let r = Math.random() * 256 | 0;
    let g = Math.random() * 256 | 0;
    let b = Math.random() * 256 | 0;
    square.style.cssText = `background-color: rgb(${r},${g},${b})`;
    
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
