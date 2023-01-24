import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./scss/layout.css";

export function Layoutcomponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuArray = [
    "Hem",
    "Front-end kunskaper",
    "Arbetslivserfarenhet",
    "Utbildning",
    "Socialt",
    "Kontakt",
  ];

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
