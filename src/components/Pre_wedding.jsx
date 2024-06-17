import style from "./Photo_Service.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";


import Pic1 from "/src/images/pre_wedding_service/001.jpg";
import Pic2 from "/src/images/pre_wedding_service/002.jpg";
import Pic3 from "/src/images/pre_wedding_service/003.jpg";
import Pic4 from "/src/images/pre_wedding_service/004.jpg";
import Pic5 from "/src/images/pre_wedding_service/005.jpg";
import Pic6 from "/src/images/pre_wedding_service/006.jpg";
import Pic7 from "/src/images/pre_wedding_service/007.jpg";
import Pic8 from "/src/images/pre_wedding_service/008.jpg";
import Pic9 from "/src/images/pre_wedding_service/009.jpg";
import Pic10 from "/src/images/pre_wedding_service/010.jpg";
import Pic11 from "/src/images/pre_wedding_service/011.jpg";
import Pic12 from "/src/images/pre_wedding_service/012.jpg";
import Pic13 from "/src/images/pre_wedding_service/013.jpg";
import Pic14 from "/src/images/pre_wedding_service/014.jpg";
import Pic15 from "/src/images/pre_wedding_service/015.jpg";
import Pic16 from "/src/images/pre_wedding_service/016.jpg";
import Pic17 from "/src/images/pre_wedding_service/017.jpg";
import Pic18 from "/src/images/pre_wedding_service/018.jpg";
import Pic19 from "/src/images/pre_wedding_service/019.jpg";
import Pic20 from "/src/images/pre_wedding_service/020.jpg";
import Pic21 from "/src/images/pre_wedding_service/021.jpg";
import Pic22 from "/src/images/pre_wedding_service/022.jpg";
import Pic23 from "/src/images/pre_wedding_service/023.jpg";
import Pic24 from "/src/images/pre_wedding_service/024.jpg";
import Pic25 from "/src/images/pre_wedding_service/025.jpg";
import Pic26 from "/src/images/pre_wedding_service/026.jpg";
import Pic27 from "/src/images/pre_wedding_service/027.jpg";
import Pic28 from "/src/images/pre_wedding_service/028.jpg";
import Pic29 from "/src/images/pre_wedding_service/029.jpg";
import Pic30 from "/src/images/pre_wedding_service/030.jpg";
import Pic31 from "/src/images/pre_wedding_service/031.jpg";
import Pic32 from "/src/images/pre_wedding_service/032.jpg";
import Pic33 from "/src/images/pre_wedding_service/033.jpg";
import Pic34 from "/src/images/pre_wedding_service/034.jpg";
import Pic35 from "/src/images/pre_wedding_service/035.jpg";
import Pic36 from "/src/images/pre_wedding_service/036.jpg";
import Pic37 from "/src/images/pre_wedding_service/037.jpg";
import Pic38 from "/src/images/pre_wedding_service/038.jpg";
import Pic39 from "/src/images/pre_wedding_service/039.jpg";
import Pic40 from "/src/images/pre_wedding_service/040.jpg";
import Pic41 from "/src/images/pre_wedding_service/041.jpg";
import Pic42 from "/src/images/pre_wedding_service/042.jpg";
import Pic43 from "/src/images/pre_wedding_service/043.jpg";
import Pic44 from "/src/images/pre_wedding_service/044.jpg";
import Pic45 from "/src/images/pre_wedding_service/045.jpg";
import Pic46 from "/src/images/pre_wedding_service/046.jpg";
import Pic47 from "/src/images/pre_wedding_service/047.jpg";
import Pic48 from "/src/images/pre_wedding_service/048.jpg";




import Footer from "./Footer";

function Pre_wedding() {
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
    Pic37,
    Pic38,
    Pic39,
    Pic40,
    Pic41,
    Pic42,
    Pic43,
    Pic44,
    Pic45,
    Pic46,
    Pic47,
    Pic48,
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
        <span className={style.first_letter}>P</span>re Wedding Service
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
      <Footer/>
    </div>
  );
}

export default Pre_wedding;
