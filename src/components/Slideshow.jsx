import { useEffect, useState } from "react";
import style from "./Slideshow.module.css";

import first from "/src/images/slideshow/meragi.celebrations-20240408-0001.jpg";
import second from "/src/images/slideshow/meragi.celebrations-20240408-0001.jpg";
import third from "/src/images/slideshow/meragi.celebrations-20240408-0003.jpg";
import fourth from "/src/images/slideshow/meragi.celebrations-20240408-0004.jpg";
import fifth from "/src/images/slideshow/meragi.celebrations-20240408-0005.jpg";
import sixth from "/src/images/slideshow/meragi.celebrations-20240408-0006.jpg";
import seventh from "/src/images/slideshow/meragi.celebrations-20240408-0007.jpg";
import eighth from "/src/images/slideshow/meragi.celebrations-20240408-0008.jpg";
import ninth from "/src/images/slideshow/meragi.celebrations-20240408-0009.jpg";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function Slideshow() {
  const images = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={style.container}>
      <p className={style.service_para}>
        <span className={style.first_letter}>S</span>LIDESHOW
      </p>
      <div className={style.slideshow}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={style.fadeIn}
        />
        <button className={style.prev} onClick={goToPrevious}>
          <GrPrevious />
        </button>
        <button className={style.next} onClick={goToNext}>
          <GrNext />
        </button>
      </div>
      <div className={style.navigation_dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? style.dot_active : style.dot}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
