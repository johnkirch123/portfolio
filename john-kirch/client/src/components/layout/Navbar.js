import React from "react";

export default () => {
  function uncheck() {
    document.querySelector("#navi-toggle").checked = false;
  }

  return (
    <div>
      <nav className="nav">
        <div className="nav__logo">john kirch</div>

        <ul className="nav__list">
          <li className="nav__list-item nav__nav-link">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list-item nav__nav-link">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__list-item nav__nav-link">
            <a href="#portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__list-item nav__nav-link">
            <a href="#blog" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__list-item nav__nav-link">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>

        <input type="checkbox" className="nav__checkbox" id="navi-toggle" />

        <label
          id="nav__btn"
          htmlFor="navi-toggle"
          className="nav__button hidden"
        >
          <span className="nav__icon">&nbsp;</span>
        </label>

        <div id="nav__bg" className="nav__background hidden">
          &nbsp;
        </div>

        <nav className="nav__nav">
          <ul className="nav__list-2">
            <li className="nav__item">
              <a href="#home" className="nav__link-2" onClick={uncheck}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link-2" onClick={uncheck}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link-2" onClick={uncheck}>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link-2" onClick={uncheck}>
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link-2" onClick={uncheck}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};
