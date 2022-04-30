let btn = document.getElementById('nav__btn');
let bg = document.getElementById('nav__bg');
let linkItems = document.querySelectorAll('.nav__nav-link');
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function () {
  showHideCollapsedMenu(
    window.pageYOffset,
    window.matchMedia('(min-width: 700px)')
  );
};

const showHideCollapsedMenu = (currentScrollPos, mediaQuery) => {
  if (currentScrollPos <= 0 && mediaQuery.matches) {
    btn.classList.add('hidden');
    btn.classList.remove('fade-in');
    btn.classList.add('fade-out');
    bg.classList.add('hidden');
    bg.classList.remove('fade-in');
    bg.classList.add('fade-out-instant');

    linkItems.forEach((element) => {
      element.classList.add('nav__list-item');
    });
  } else {
    btn.classList.remove('hidden');
    btn.classList.add('fade-in');
    btn.classList.remove('fade-out');
    bg.classList.remove('hidden');
    bg.classList.add('fade-in-delay');
    bg.classList.remove('fade-out');

    linkItems.forEach((element) => {
      element.classList.remove('nav__list-item');
    });
  }
};

document.querySelector('#navi-toggle').addEventListener('change', () => {
  hiddenDisplay();
});

const hiddenDisplay = () => {
  if (document.querySelector('#navi-toggle').checked) {
    document.querySelectorAll('.nav__link-2').forEach((element) => {
      element.classList.add('inline-block-display');
    });
    document.querySelectorAll('.nav__link-2').forEach((element) => {
      element.classList.remove('no-display');
    });
  } else {
    document.querySelectorAll('.nav__link-2').forEach((element) => {
      element.classList.add('no-display');
    });
    document.querySelectorAll('.nav__link-2').forEach((element) => {
      element.classList.remove('inline-block-display');
    });
  }
};

hiddenDisplay();

function uncheck() {
  document.querySelector('#navi-toggle').checked = false;
  hiddenDisplay();
}
showHideCollapsedMenu(
  window.pageYOffset,
  window.matchMedia('(min-width: 700px)')
); // Call listener function at run time
window
  .matchMedia('(min-width: 700px)')
  .addListener(
    showHideCollapsedMenu(
      window.pageYOffset,
      window.matchMedia('(min-width: 700px)')
    )
  ); // Attach listener function on state changes
