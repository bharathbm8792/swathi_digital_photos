import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Nav_bar.module.css";

export default function Nav_bar() {
  const [scrolled, setScrolled] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${style.container} ${scrolled ? style.scrolled : ""}`}
      style={{ backgroundColor: scrolled ? "#ffffff" : "transparent" }}
    >
      <button
        onClick={() => {
          navigateTo("/");
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          navigateTo("/contactus");
        }}
      >
        CONTACT US
      </button>
      <a href="tel:+919844080751">
        <button>CALL@+91 9844080751</button>
      </a>
      <button
        onClick={() => {
          window.location.href = "mailto:swathibk80751@gmail.com";
        }}
      >
        writeus@swathibk80751@gmail.com
      </button>
    </div>
  );
}
