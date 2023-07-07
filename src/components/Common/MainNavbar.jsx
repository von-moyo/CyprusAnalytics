import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function MainNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 100) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-side").classList.add("show");
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-side")
      .classList.remove("show");
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  const [language, setLanguage] = React.useState(true);

  function toggleLanguage() {
    setLanguage((prev) => !prev);
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${
        noStatic ? "" : "static"
      } ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container">
        <a className="logo icon-img-100" href="#">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "20px" }}
            src="/assets/imgs/logo.png"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="about">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="services">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                <span className="rolling-text">Blogs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="search-icon" onClick={toggleLanguage}>
            <Image
              width={500}
              height={500}
              style={{ width: "40px", height: "40px" }}
              src={`/assets/imgs/header/${
                language ? "turkish.png" : "british.jpg"
              }`}
              className="lang"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
