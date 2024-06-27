import style from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import Footer from "./Footer";

export default function Contact() {
  function createWhatsAppLink() {
    const url = `https://wa.me/+919844080751?text=Hi, I'm interested in your products/services. Can you provide more information?`;
    return url;
  }

  const navigateTo = useNavigate();

  return (
    <div className={style.contactContainer}>
      <div className={style.contactContent}>
        <h1>Contact Us</h1>
        <div className={style.contactButtons}>
          <a href="tel:+919844080751">
            <button>Call +91 9844080751</button>
          </a>
          <a href="tel:+919036780751">
            <button>Call +91 9036780751</button>
          </a>
          <button
            onClick={() => {
              window.location.href = "mailto:swathibk80751@gmail.com";
            }}
          >
            Email us at swathibk80751@gmail.com
          </button>
        </div>
        <div className={style.whatsappLink}>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={style.whatsappContent}>
              <ImWhatsapp size={40} />
              <span>WhatsApp Us</span>
              {/* <p>WhatsApp Us</p> */}
            </div>
          </a>
        </div>
        <button
          className={style.homepageButton}
          onClick={() => {
            navigateTo("/");
          }}
        >
          Go to Homepage
        </button>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
