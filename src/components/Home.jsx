import style from "./Home.module.css";
import Logo from "./Logo";
import Nav_bar from "./Nav_bar";
import Services from "./Services";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Gallery from "./Gallery";
import WhatsAppDMLink from "./WhatsAppDMLink";
// import Video from "/src/images/Video.mp4";

export default function Home_page() {
  return (
    // <div className={style.container}>
    <div>
      <Nav_bar />
      <Logo />
      {/* <video src={Video} alt="Video" autoPlay controls className={style.video}/> */}

      <Slideshow />
      <Services />
      <Gallery />
      {/* <WhatsAppDMLink className={style.whatsappLink} /> */}
      <Footer />
    </div>
  );
}
