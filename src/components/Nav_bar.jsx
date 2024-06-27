import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";

import style from "./Nav_bar.module.css";

export default function Nav_bar({ servicesRef, galleryRef, topRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      // Automatically close nav-bar if open when scrolling
      if (showNavBar) {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNavBar]);

  const displayNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${style.container} ${scrolled ? style.scrolled : ""}`}
      style={{ backgroundColor: scrolled ? "#ffffff" : "transparent" }}
    >
      <button onClick={displayNavBar} className={style.hamburger}>
        <GiHamburgerMenu
          size={35}
          className={`${style.icon} ${scrolled ? style.icon_scrolled : ""}`}
        />
      </button>
      <div
        className={`${style.icon_box} ${
          scrolled ? style.icon_box_scrolled : ""
        }`}
      >
        <p>Swathi Digital Photos</p>
      </div>
      {showNavBar && (
        <div className={style.navbar}>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    navigateTo("/");
                    scrollToSection(topRef);
                  }}
                >
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(servicesRef)}>
                  OUR SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("/contactus")}>
                  CONTACT US
                </button>
              </li>
              <li>
                <a href="tel:+919844080751">
                  <MdCall size={30} />
                  <button>CALL@+91 9844080751</button>
                </a>
              </li>
              <li>
                <a href="tel:+919036780751">
                  <MdCall size={30} />
                  <button>CALL@+91 9036780751</button>
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:swathibk80751@gmail.com")
                  }
                >
                  <AiTwotoneMail size={30} />
                  writeus@ swathibk80751@gmail.com
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(galleryRef)}>
                  GALLERY
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
