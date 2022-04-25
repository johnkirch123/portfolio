const createBubbles = () => {
  const landingArea = document.querySelector('.landing');
  const bubble = document.createElement('span');
  let size = Math.random() * 100;

  bubble.style.height = 10 + size + 'px';
  bubble.style.width = 20 + size + 'px';
  bubble.style.left = Math.random() * innerWidth + 'px';
  landingArea.appendChild(bubble);

  showBubbles = false;
  setTimeout(() => {
    bubble.remove();
  }, 5000);
};

const bubbleInterval = setInterval(createBubbles, 10);

setTimeout(() => {
  clearInterval(bubbleInterval, 1300);
}, 1500);
