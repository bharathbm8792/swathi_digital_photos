import { useState } from "react";
import style from "./Gallery.module.css";

import first from "/src/images/slideshow/meragi.celebrations-20240408-0001.jpg";
import second from "/src/images/slideshow/meragi.celebrations-20240408-0002.jpg";
import third from "/src/images/slideshow/meragi.celebrations-20240408-0003.jpg";
import fourth from "/src/images/slideshow/meragi.celebrations-20240408-0004.jpg";
import fifth from "/src/images/slideshow/meragi.celebrations-20240408-0005.jpg";
import sixth from "/src/images/slideshow/meragi.celebrations-20240408-0006.jpg";
import seventh from "/src/images/slideshow/meragi.celebrations-20240408-0007.jpg";
import eighth from "/src/images/slideshow/meragi.celebrations-20240408-0008.jpg";
import ninth from "/src/images/slideshow/meragi.celebrations-20240408-0009.jpg";
import Pic10 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/04.jpg";
import Pic11 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/12.jpg";
import Pic12 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/15.jpg";
import Pic13 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/22.jpg";
import Pic14 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/37.jpg";
import Pic15 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/02.jpg";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";

import React from "react";

// export default function Gallery() {
const Gallery = React.forwardRef((props, ref) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    Pic10,
    Pic11,
    Pic12,
    Pic13,
    Pic14,
    Pic15,
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
    <div className={style.container} ref={ref}>
      <p className={style.service_para}>
        <span className={style.first_letter}>G</span>ALLERY
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
    </div>
  );
  // }
});

export default Gallery;

// import style from './Gallery.module.css';

// import first from '/src/images/slideshow/meragi.celebrations-20240408-0001.jpg';
// import second from '/src/images/slideshow/meragi.celebrations-20240408-0001.jpg';
// import third from '/src/images/slideshow/meragi.celebrations-20240408-0003.jpg';

// import fourth from '/src/images/slideshow/meragi.celebrations-20240408-0004.jpg';
// import fifth from '/src/images/slideshow/meragi.celebrations-20240408-0005.jpg';
// import sixth from '/src/images/slideshow/meragi.celebrations-20240408-0006.jpg';

// import seventh from '/src/images/slideshow/meragi.celebrations-20240408-0007.jpg';
// import eighth from '/src/images/slideshow/meragi.celebrations-20240408-0008.jpg';
// import ninth from '/src/images/slideshow/meragi.celebrations-20240408-0009.jpg';

// export default function Gallery() {
//     return (
//         <div className={style.container}>
//             <p className={style.service_para}>
//                 <span className={style.first_letter}>G</span>
//                 ALLERY
//             </p>
//             <div className={style.first_three}>
//                 <img src={first} alt="First" />
//                 <img src={second} />
//                 <img src={third} />
//             </div>
//             <div className={style.second_three}>
//                 <img src={fourth} />
//                 <img src={fifth} />
//                 <img src={sixth} />
//             </div>
//             <div className={style.third_three}>
//                 <img src={seventh} />
//                 <img src={eighth} />
//                 <img src={ninth} />
//             </div>
//         </div>
//     )
// }
