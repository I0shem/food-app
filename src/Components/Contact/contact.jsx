import React from "react";
import s from "./contact.module.css";
import { BsFillTelephoneFill, BsClock } from "react-icons/bs";
import { IconContext } from "react-icons";
import MapImg from "../Images/google-map.png";
const Contact = () => {
  return (
    <div className={s.ContactBox}>
      <div>
        <h2 className={s.mainText}>Contact Information</h2>
        <span>
          <ul>
            <li>
              <p className={s.bigText}>Vinnytsia</p>
              <p className={s.regularText}>52 Keletska St.</p>
            </li>
            <li className={s.phoneNumber}>
              <p>0 800 123 435 678</p>
              <IconContext.Provider
                value={{
                  size: 35,
                  className: s.phoneBtn,
                  color: "ec6083",
                }}
              >
                <BsFillTelephoneFill />
              </IconContext.Provider>
            </li>
          </ul>
        </span>
        <div className={s.workSchedule}>
          <h2 className={s.mainText}>Work Schedule</h2>
          <p className={s.regularText}>from 10-00 to 22-00</p>
          <IconContext.Provider
            value={{
              size: 30,
              className: s.clockBtn,
              color: "ec6083",
            }}
          >
            <BsClock />
          </IconContext.Provider>
        </div>
        <img src={MapImg} alt="" className={s.mapImg} />
      </div>
    </div>
  );
};

export default Contact;
