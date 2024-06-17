import { ImWhatsapp } from "react-icons/im";

import style from "./createWhatsAppLink.module.css";

export default function WhatsAppDMLink() {
  function createWhatsAppLink() {
    // const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const url = `https://wa.me/+919844080751?text=Hi, I'm interested in your products/services. Can you provide more information?`;

    return url;
  }

  return (
    <div className={style.container}>
      <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
        <div className={style.WALINK}>
          <ImWhatsapp size={50} className={style.icon} />
          <span>WhatsApp Us</span>
        </div>
      </a>
    </div>
  );
}
