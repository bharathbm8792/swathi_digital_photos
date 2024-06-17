import style from "./Photo_Service.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";


import Pic1 from "/src/images/wedding_service/01.jpg";
import Pic2 from "/src/images/wedding_service/02.jpg";
import Pic3 from "/src/images/wedding_service/03.jpg";
import Pic4 from "/src/images/wedding_service/04.jpg";
import Pic5 from "/src/images/wedding_service/05.jpg";
import Pic6 from "/src/images/wedding_service/06.jpg";
import Pic7 from "/src/images/wedding_service/07.jpg";
import Pic8 from "/src/images/wedding_service/08.jpg";
import Pic9 from "/src/images/wedding_service/09.jpg";
import Pic10 from "/src/images/wedding_service/10.jpg";
import Pic11 from "/src/images/wedding_service/11.jpg";
import Pic12 from "/src/images/wedding_service/12.jpg";
import Pic13 from "/src/images/wedding_service/13.jpg";
import Pic14 from "/src/images/wedding_service/14.jpg";
import Pic15 from "/src/images/wedding_service/15.jpg";
import Pic16 from "/src/images/wedding_service/16.jpg";
import Pic17 from "/src/images/wedding_service/17.jpg";
import Pic18 from "/src/images/wedding_service/18.jpg";
import Pic19 from "/src/images/wedding_service/19.jpg";
import Pic20 from "/src/images/wedding_service/20.jpg";
import Pic21 from "/src/images/wedding_service/21.jpg";
import Pic22 from "/src/images/wedding_service/22.jpg";
import Pic23 from "/src/images/wedding_service/23.jpg";
import Pic24 from "/src/images/wedding_service/24.jpg";
import Pic25 from "/src/images/wedding_service/25.jpg";
import Pic26 from "/src/images/wedding_service/26.jpg";
import Pic27 from "/src/images/wedding_service/27.jpg";
import Pic28 from "/src/images/wedding_service/28a.jpg";
import Pic29 from "/src/images/wedding_service/29.jpg";
import Pic30 from "/src/images/wedding_service/30.jpg";
import Pic31 from "/src/images/wedding_service/31.jpg";
import Pic32 from "/src/images/wedding_service/32.jpg";
import Pic33 from "/src/images/wedding_service/33.jpg";
import Pic34 from "/src/images/wedding_service/34.jpg";
import Pic35 from "/src/images/wedding_service/35.jpg";
import Pic36 from "/src/images/wedding_service/36.jpg";
import Footer from "./Footer";

function Wedding_service() {
  const navigateTo = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8,
    Pic9,
    Pic10,
    Pic11,
    Pic12,
    Pic13,
    Pic14,
    Pic15,
    Pic16,
    Pic17,
    Pic18,
    Pic19,
    Pic20,
    Pic21,
    Pic22,
    Pic23,
    Pic24,
    Pic25,
    Pic26,
    Pic27,
    Pic28,
    Pic29,
    Pic30,
    Pic31,
    Pic32,
    Pic33,
    Pic34,
    Pic35,
    Pic36,
  ];

  const openImage = (index) => {
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex((image) => image === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const previousImage = () => {
    const currentIndex = images.findIndex((image) => image === selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };
  return (
    <div className={style.container}>
      {/* <div className={style.wedding_service}>
        <h1>Wedding Service</h1>
      </div> */}
      {/* <iframe src={Pdf} title="Wedding Service PDF"
      className={style.IFrame}></iframe> */}

      <br />
      <button
        onClick={() => {
          navigateTo("/");
        }}
        className={style.home_page}
      >
        Go to Homepage
      </button>

      <p className={style.service_para}>
        <span className={style.first_letter}>W</span>edding Service
      </p>
      <div className={style.gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => openImage(index)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className={style.modal}>
          <img src={selectedImage} alt="Selected" />
          <button onClick={previousImage} className={style.prev}>
            <GrPrevious />
          </button>
          <button onClick={closeImage} className={style.close}>
            <div>
              <IoIosCloseCircleOutline size={25} />
            </div>
          </button>
          <button onClick={nextImage} className={style.next}>
            <GrNext />
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Wedding_service;
