const colorButton = document.querySelector('.landing__text-box--color-button');
let mediumColor;
let darkColor;
let vDarkColor;
let lightColor;
let lMediumColor;

setInterval(randomRgb, 3000);

function randomRgb() {
  const r = 200 - randomColor(100);
  const g = 200 - randomColor(100);
  const b = 200 - randomColor(100);
  const mediumCol = 'rgb(' + r + ',' + g + ',' + b + ')';
  const darkCol = 'rgb(' + (r - 20) + ',' + (g - 20) + ',' + (b - 20) + ')';
  const vDarkCol = 'rgb(' + (r - 40) + ',' + (g - 40) + ',' + (b - 40) + ')';
  const lightCol = 'rgb(' + (r + 100) + ',' + (g + 100) + ',' + (b + 100) + ')';
  const lMediumCol = 'rgb(' + (r + 20) + ',' + (g + 20) + ',' + (b + 20) + ')';

  colorButton.style.backgroundColor = mediumCol;
  colorButton.style.boxShadow = `6px 6px 9px 0 rgba(${r - 100}, ${g - 100}, ${
    b - 100
  }, 0.25),
  inset 0 0 9px rgba(${r + 100}, ${g + 100}, ${b + 100}, 1)`;
  mediumColor = mediumCol;
  darkColor = darkCol;
  vDarkColor = vDarkCol;
  lightColor = lightCol;
  lMediumColor = lMediumCol;
}

function randomColor(num) {
  return Math.floor(Math.random() * num);
}

colorButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--medium', mediumColor);
  document.documentElement.style.setProperty('--dark', darkColor);
  document.documentElement.style.setProperty('--very-dark', vDarkColor);
  document.documentElement.style.setProperty('--light', lightColor);
  document.documentElement.style.setProperty('--light-medium', lMediumColor);
});
