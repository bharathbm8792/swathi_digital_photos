import { useRef } from "react";
import style from "./Home.module.css";
import Logo from "./Logo";
import Nav_bar from "./Nav_bar";
import Services from "./Services";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Gallery from "./Gallery";
import WhatsAppDMLink from "./WhatsAppDMLink";
import { MdCall } from "react-icons/md";

// import Contact from "./Contact";
// import Video from "/src/images/Video.mp4";

export default function Home_page() {
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const topRef = useRef(null);

  return (
    <div ref={topRef}>
      <Nav_bar
        servicesRef={servicesRef}
        galleryRef={galleryRef}
        topRef={topRef}
      />
      <Logo />
      {/* <video src={Video} alt="Video" autoPlay controls className={style.video}/> */}
      <Slideshow />
      <Services ref={servicesRef} />
      <Gallery ref={galleryRef} />
      {/* <WhatsAppDMLink className={style.whatsappLink} /> */}
      <WhatsAppDMLink />
      {/* <a href="tel:+919844080751">
        <MdCall size={30} />
        <button>CALL@+91 9844080751</button>
      </a>
      <a href="tel:+919036780751">
        <MdCall size={30} />
        <button>CALL@+91 9036780751</button>
      </a> */}
      <div className={style.call_container}>
        <a href="tel:+919844080751" className={style.call_link}>
          <MdCall size={30} className={style.call_icon} />
          <button className={style.call_button}>9844080751</button>
        </a>
        <a href="tel:+919036780751" className={style.call_link}>
          <MdCall size={30} className={style.call_icon} />
          <button className={style.call_button}>9036780751</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
