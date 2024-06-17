import style from "./Private.module.css";
import Footer from "./Footer";

export default function Private({ onLogout }) {
  return (
    <div className={style.container}>
      <button
        onClick={() => {
          onLogout();
        }}
      >
        Logout
      </button>
      <Footer/>
    </div>
  );
}
