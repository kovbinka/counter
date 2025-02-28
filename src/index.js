// get dom elements
const dom = {
  result: document.getElementById('result'),
  increment: document.getElementById('increment'),
  decrement: document.getElementById('decrement'),
  reset: document.getElementById('reset'),
  deleteSound: document.getElementById('del-fx'),
  equalSound: document.getElementById('equal-fx'),
};

// set data
const data = {
  count: 0
};

// handlers
const incrementHandler = () => {
  data.count++;
  dom.result.innerText = data.count;
  dom.deleteSound.volume = 0.4;
  dom.deleteSound.play();
};

const decrementHandler = () => {
  data.count--;
  dom.result.innerText = data.count;
  dom.deleteSound.volume = 0.4;
  dom.deleteSound.play();
};

const resetHandler = () => {
  data.count = 0;
  dom.result.innerText = data.count;
  dom.equalSound.volume = 0.7;
  dom.equalSound.play();
};

// events
dom.increment.addEventListener('click', incrementHandler);
dom.decrement.addEventListener('click', decrementHandler);
dom.reset.addEventListener('click', resetHandler);

