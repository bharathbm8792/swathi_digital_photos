import style from "./Contact.module.css";
import WhatsAppDMLink from "./WhatsAppDMLink";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";



export default function Contact() {
  const navigateTo = useNavigate();
  return (
    <div className={style.container}>
      <h2>Contact</h2>
      <br />
      <br />
      <a href="tel:+919844080751">
        <button>CALL@+91 9844080751</button>
      </a>
      <button
        onClick={() => {
          window.location.href = "mailto:swathibk80751@gmail.com";
        }}
      >
        Write us at swathibk80751@gmail.com
      </button>
      <WhatsAppDMLink />
      <button className={style.homepage_button}
      onClick={()=>{
        navigateTo("/");
      }}>
        Go to Homepage
      </button>
      <Footer/>
    </div>
  );
}
