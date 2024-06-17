import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
  const navigateTo = useNavigate();

  return (
    <div className={style.container}>
      <p>&copy; Copyright 2024. All Rights are Reserved.</p>
      <button
        onClick={() => {
          navigateTo("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}
