import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./css/style.css";

class App extends Component {
  componentDidMount() {
    let currentScrollPos = window.pageYOffset;
    let btn = document.getElementById("nav__btn");
    let bg = document.getElementById("nav__bg");
    let linkItems = document.querySelectorAll(".nav__nav-link");

    if (currentScrollPos <= 0) {
      btn.classList.add("hidden");
      btn.classList.remove("fade-in");
      btn.classList.add("fade-out");
      bg.classList.add("hidden");
      bg.classList.remove("fade-in");
      bg.classList.add("fade-out-instant");

      linkItems.forEach(element => {
        element.classList.add("nav__list-item");
      });
    } else {
      btn.classList.remove("hidden");
      btn.classList.add("fade-in");
      btn.classList.remove("fade-out");
      bg.classList.remove("hidden");
      bg.classList.add("fade-in-delay");
      bg.classList.remove("fade-out");

      linkItems.forEach(element => {
        element.classList.remove("nav__list-item");
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
