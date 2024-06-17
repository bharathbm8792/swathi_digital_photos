import style from "./Login.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiVorondesign } from "react-icons/si";
import { AiTwotoneMail } from "react-icons/ai";
import { PiLockKeyDuotone } from "react-icons/pi";
import { PiLockKeyOpenDuotone } from "react-icons/pi";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

export default function Login({ onLogin }) {
  const [view_pwd, setViewPwd] = useState(false);
  const navigateTo = useNavigate();
  const [userInput, setUserInput] = useState({
    Email: "",
    Password: "",
  });
  const [email_err, setEmailErr] = useState(false);
  const [pwd_err, setPwdErr] = useState(false);
  const emailRef = useRef();
  const pwdRef = useRef();

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  function handleViewPwd() {
    setViewPwd(!view_pwd);
  }

  function handleLogin() {
    setEmailErr(false);
    setPwdErr(false);

    if (
      userInput.Email.length < 13 ||
      !userInput.Email.includes("@") ||
      !userInput.Email.endsWith("mail.com")
    ) {
      setEmailErr(true);
      emailRef.current.focus();
      return;
    }

    if (userInput.Password.length < 8) {
      setPwdErr(true);
      pwdRef.current.focus();
      return;
    }

    if (
      userInput.Email === "bharathbm@mail.com" &&
      userInput.Password === "Password"
    ) {
      onLogin();
      navigateTo("/private");
    } else {
      setEmailErr(true);
      setPwdErr(true);
    }
  }

  function handleHomePage(){
    navigateTo("/");
  }

  return (
    <div className={style.login_body}>
      <div className={style.login}>
        <div className={style.image_login}>
          <SiVorondesign size={50} className={style.icon} />
        </div>
        <div className={style.input_login}>
          <div className={style.text_caps}>
            <p className={style.text_caps_INT}></p>
            <p>Swathi Digital Photo Studio</p>
          </div>
          <div className={style.text}>
            <p>Welcome back! Log in to your account </p>
          </div>
          <div className={style.input_email}>
            <AiTwotoneMail size={33} />
            <input
              type={style.email}
              placeholder="Email"
              value={userInput.Email}
              className={email_err ? style.input_err : style.input_noerr}
              onChange={(event) => {
                handleChange("Email", event.target.value);
              }}
              ref={emailRef}
            />
          </div>
          {email_err && <span>Enter Valid Email</span>}
          <div className={style.input_pwd}>
            {!view_pwd && <PiLockKeyDuotone size={35} />}
            {view_pwd && <PiLockKeyOpenDuotone size={35} />}
            {!view_pwd && (
              <input
                type="password"
                placeholder="Password"
                value={userInput.Password}
                onChange={(event) => {
                  handleChange("Password", event.target.value);
                }}
                className={pwd_err ? style.input_err : style.input_noerr}
                ref={pwdRef}
              />
            )}
            {view_pwd && (
              <input
                type="text"
                placeholder="Password"
                value={userInput.Password}
                onChange={(event) => {
                  handleChange("Password", event.target.value);
                }}
                className={pwd_err ? style.input_err : style.input_noerr}
                ref={pwdRef}
              />
            )}
            <div className={style.input_view_pwd}>
              {!view_pwd && (
                <button onClick={handleViewPwd}>
                  <IoMdEyeOff size={25} />
                </button>
              )}
              {view_pwd && (
                <button onClick={handleViewPwd}>
                  <IoIosEye size={25} />
                </button>
              )}
            </div>
          </div>
          {pwd_err && <span>Enter Valid Password</span>}
          <button className={style.final_button} onClick={handleLogin}>
            Login
          </button>
          <br/>
          <button className={style.homepage_button} onClick={handleHomePage}>
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
