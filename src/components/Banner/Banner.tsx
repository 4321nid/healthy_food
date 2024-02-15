import React from "react";
import IMG from "../../assets/img/banner.png";
import s from "./Banner.module.css";
import ButtonOrange from "../../assets/button/ButtonOrange";

const Banner = () => {
  return (
    <div className="banner flex justify-between items-center">
      <div className={s.text}>
        <h1 className={s.title}>
          Making time a good time by making food the good food.
        </h1>
        <p className={s.suptitle}>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment.
        </p>
        <div className="flex">
          <ButtonOrange />
          <ButtonOrange />
        </div>
      </div>
      <div className={s.img}>
        <img src={IMG} alt="" />
      </div>
    </div>
  );
};

export default Banner;
