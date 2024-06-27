import style from "./Services.module.css";
import { useNavigate } from "react-router-dom";

import Wedding from "/src/images/icons/wedding.png";
import Pre_wed from "/src/images/icons/prewed.png";
import Engagement from "/src/images/icons/prewedding.png";
import Birthday from "/src/images/icons/birthday.png";
import Corporate from "/src/images/icons/corporate.png";
import Upanayana from "/src/images/icons/upanayanam.png";
import House from "/src/images/icons/house.png";
import Portfolio from "/src/images/icons/model.png";
import Naming from "/src/images/icons/naming.png";
import Videography from "/src/images/icons/Wedding_videographers.png";
import Frame from "/src/images/icons/Photo_frames.png";
import Maternity from "/src/images/icons/Maternity-shoot.png";
import School from "/src/images/icons/school-event.webp";
import Drone from "/src/images/icons/drone.png";
import Pre_wedding from "/src/images/icons/Elements-pre-wedding.png";
import Approved from "/src/images/icons/approved.png";
import Spinny from "/src/images/icons/spinny_booth.jpeg";

import React from "react";

// export default function Services() {
const Services = React.forwardRef((props, ref) => {
  const navigateTo = useNavigate();

  return (
    <div className={style.container} ref={ref}>
      <div className={style.buttons_box}>
        <p className={style.service_para}>
          <span className={style.first_letter}>S</span>
          ERVICES OFFERED BY US
        </p>
        <div className={style.buttons}>
          <div className={style.button_bkgnd_blue}>
            <button
              onClick={() => {
                navigateTo("/wedding_service");
              }}
            >
              <div className={style.button_flex}>
                <img src={Wedding} alt="Wedding" />
                <p>Wedding</p>
              </div>
            </button>
          </div>

          <div className={style.button_bkgnd_white}>
            <button
              onClick={() => {
                navigateTo("/house_warming");
              }}
            >
              <div className={style.button_flex}>
                <img src={House} alt="House Warming" />
                <p>House Warming</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_orange}>
            <button
              onClick={() => {
                navigateTo("/candid_wedding");
              }}
            >
              <div className={style.button_flex}>
                <img src={Pre_wedding} alt="Wedding" />
                <p>Candid Wedding Photography</p>
              </div>
            </button>
          </div>
          {/* <div className={style.button_bkgnd_orange}>
            <button>
              <div className={style.button_flex}>
                <img src={Drone} alt="Drone videography" />
                <p>Drone Videography</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_white}>
            <button>
              <div className={style.button_flex}>
                <img src={Spinny} alt="Spinny booth" />
                <p>Spinny booth</p>
              </div>
            </button>
          </div> */}
          <div className={style.button_bkgnd_blue}>
            <button
              onClick={() => {
                navigateTo("/birthday");
              }}
            >
              <div className={style.button_flex}>
                <img src={Birthday} alt="Birthday" />
                <p>Birthday Photoshoot</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_white}>
            <button
              onClick={() => {
                navigateTo("/pre_wedding_service");
              }}
            >
              <div className={style.button_flex}>
                <img src={Pre_wed} alt="Pre wedding" />
                <p>Pre Wedding Photoshoot</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_orange}>
            <button
              onClick={() => {
                navigateTo("/engagement_service");
              }}
            >
              <div className={style.button_flex}>
                <img src={Engagement} alt="Engagement" />
                <p>Engagement</p>
              </div>
            </button>
          </div>

          <div className={style.button_bkgnd_blue}>
            <button
              onClick={() => {
                navigateTo("/corporate_events");
              }}
            >
              <div className={style.button_flex}>
                <img src={Corporate} alt="Corporate Events" />
                <p>Corporate Events</p>
              </div>
            </button>
          </div>
          {/* <div className={style.button_bkgnd_orange}>
            <button>
              <div className={style.button_flex}>
                <img src={Portfolio} alt="Portfolio shoot" />
                <p>Portfolio shoot</p>
              </div>
            </button>
          </div> */}

          <div className={style.button_bkgnd_white}>
            <button
              onClick={() => {
                navigateTo("/school_events");
              }}
            >
              <div className={style.button_flex}>
                <img src={School} alt="School events" />
                <p>School Events</p>
              </div>
            </button>
          </div>
          {/* <div className={style.button_bkgnd_blue}>
            <button>
              <div className={style.button_flex}>
                <img src={Upanayana} alt="Upanayana" />
                <p>Upanayana</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_blue}>
            <button>
              <div className={style.button_flex}>
                <img src={Naming} alt="Naming ceremony" />
                <p>Naming Ceremony</p>
              </div>
            </button>
          </div> */}

          <div className={style.button_bkgnd_orange}>
            <button
              onClick={() => {
                navigateTo("/naac_approval");
              }}
            >
              <div className={style.button_flex}>
                <img src={Approved} alt="NAAC Approval for Colleges" />
                <p>NAAC Approval for Colleges</p>
              </div>
            </button>
          </div>
          {/* <div className={style.button_bkgnd_orange}>
            <button>
              <div className={style.button_flex}>
                <img src={Videography} alt="Wedding videography" />
                <p>Wedding Videographers</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_orange}>
            <button>
              <div className={style.button_flex}>
                <img src={Corporate} alt="Corporate Events" />
                <p>Product</p>
              </div>
            </button>
          </div>
          <div className={style.button_bkgnd_white}>
            <button>
              <div className={style.button_flex}>
                <img src={Maternity} alt="Maternity Photoshoot" />
                <p>Maternity Photoshoot</p>
              </div>
            </button>
          </div> 
          <div className={style.button_bkgnd_blue}>
            <button>
              <div className={style.button_flex}>
                <img src={Frame} alt="Photo Frame" />
                <p>Photo Frames</p>
              </div>
            </button>
        </div>*/}
        </div>
      </div>
    </div>
  );
  // }
});

export default Services;
