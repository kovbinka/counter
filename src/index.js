// get dom elements
const dom = {
  result: document.getElementById('result'),
  increment: document.getElementById('increment'),
  decrement: document.getElementById('decrement'),
  reset: document.getElementById('reset'),
};

// set data
const data = {
  count: 0
};

// handlers
const incrementHandler = () => {
  data.count++;
  dom.result.innerText = data.count;
};

const decrementHandler = () => {
  data.count--;
  dom.result.innerText = data.count;
};

const resetHandler = () => {
  data.count = 0;
  dom.result.innerText = data.count;
};

// events
dom.increment.addEventListener('click', incrementHandler);
dom.decrement.addEventListener('click', decrementHandler);
dom.reset.addEventListener('click', resetHandler);

