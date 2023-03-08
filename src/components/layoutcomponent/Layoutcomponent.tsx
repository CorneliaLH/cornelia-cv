import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./scss/layout.css";

export function Layoutcomponent() {
  const [update, setUpdate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // URL has to change to /en to work in deploy

  function LanguageSwitcher() {
    return (
      <div className='languageSwitch'>
        {window.location.pathname === "/cornelia-cv/en" ? (
          <Link
            to='/'
            onClick={() => {
              if (update === false) {
                setUpdate(true);
              } else {
                setUpdate(false);
              }
            }}
          >
            Svenska
          </Link>
        ) : (
          <Link
            to='/en'
            onClick={() => {
              if (update === false) {
                setUpdate(true);
              } else {
                setUpdate(false);
              }
            }}
          >
            English
          </Link>
        )}
      </div>
    );
  }

  let menuArray;
  if (window.location.pathname === "/cornelia-cv/en") {
    menuArray = [
      "Home",
      "Front-end knowledge",
      "Work experience",
      "Education",
      "Socials",
      "Contact",
    ];
  } else {
    menuArray = [
      "Hem",
      "Front-end kunskaper",
      "Arbetslivserfarenhet",
      "Utbildning",
      "Socialt",
      "Kontakt",
    ];
  }
  let listItem = menuArray.map(function (menuLink: string, i) {
    return (
      <li
        className='nav__item'
        key={i}
        onClick={() => {
          setMenuOpen(false);
          document.getElementById("menu")?.classList.remove("open");
        }}
      >
        <a href={"#" + menuLink} className='nav__link'>
          {menuLink}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className='containerCoverImage'></div>
      <div className='containerPage'>
        <header className='header'>
          <LanguageSwitcher></LanguageSwitcher>
          <button
            className='menu'
            id='menu'
            aria-expanded='false'
            aria-label='Menu'
            onClick={() => {
              if (!menuOpen) {
                document.querySelector(".menu")?.classList.add("open");
                document
                  .querySelector(".menu")
                  ?.setAttribute("aria-expanded", "true");
                setMenuOpen(true);
              } else {
                document.querySelector(".menu")?.classList.remove("open");
                document
                  .querySelector(".menu")
                  ?.setAttribute("aria-expanded", "false");
                setMenuOpen(false);
              }
            }}
          >
            <div
              className='menu__burger'
              id='menuButton'
              aria-hidden='true'
            ></div>
          </button>

          {menuOpen ? (
            <nav className='nav' id='navbar'>
              <ul className='nav__list'>{listItem}</ul>
            </nav>
          ) : (
            <></>
          )}
        </header>
        <main className='main'>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
