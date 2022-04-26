const createBubbles = () => {
  const landingArea = document.querySelector('.landing');
  const bubble = document.createElement('span');
  bubble.setAttribute('id', 'bubbles');
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

const heavyBubbles = setInterval(createBubbles, 10);
const lightBubbles = setInterval(createBubbles, 300);

setTimeout(() => {
  clearInterval(heavyBubbles);
}, 1200);
setTimeout(() => {
  clearInterval(lightBubbles);
}, 3500);
