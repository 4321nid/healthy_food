import React from "react";
import s from "./AboutUs.module.css";
import IMG from "../../assets/img/aboutus.png";
import ButtonOrange from "../../assets/button/ButtonOrange";

const AboutUs = () => {
  return (
    <div className="aboutus flex gap-16 items-center mb-32">
      <div className={s.img}>
        <img src={IMG} alt="" />
      </div>
      <div className={s.text}>
        <p className={s.subtitle}>menu</p>
        <h2 className={s.title}>Food Full of treaty Love</h2>
        <p className={s.suptitle}>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
        <ButtonOrange />
      </div>
    </div>
  );
};

export default AboutUs;
