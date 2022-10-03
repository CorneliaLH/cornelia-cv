import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./scss/layout.css";

export function Layoutcomponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuArray = [
    "Home",
    "Bakgrund",
    "Färdigheter",
    "Arbetslivserfarenhet",
    "Utbildning",
    "Socialt",
    "Kontakt",
  ];

  // useEffect(() => {
  let listItem = menuArray.map(function (menuLink: string, i) {
    return (
      <li className='nav__item' key={i}>
        <a href='#' className='nav__link'>
          {menuLink}
        </a>
      </li>
    );
  });
  // }, []);

  return (
    <>
      <header className='header'>
        <div
          className='menu'
          onClick={() => {
            console.log("click");
            if (!menuOpen) {
              document.querySelector(".menu")?.classList.add("open");
              setMenuOpen(true);
            } else {
              document.querySelector(".menu")?.classList.remove("open");
              setMenuOpen(false);
            }
          }}
        >
          <div className='menu__burger' id='menuButton'></div>
        </div>

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
      <footer>
        <div className='footer'>
          <p>footer</p>
        </div>
      </footer>
    </>
  );
}
