import React from "react";
import s from "./Features.module.css";
import Home from "../../assets/svg/Home";
import FooDelivery from "../../assets/svg/FooDelivery";
import Smile from "../../assets/svg/Smile";

const Features = () => {
  return (
    <div className="features mb-32">
      <div className={s.text}>
        <p className={s.subtitle}>Features</p>
        <h2 className={s.title}>Food with a New Passion</h2>
      </div>
      <div className="flex items-center text-center gap-16">
        <div className={s.item}>
          <div className={s.img}>
            <Home />
          </div>
          <h3 className={s.iTitle}>Quality Food</h3>
          <p className={s.iSuptitle}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.img}>
            <FooDelivery />
          </div>
          <h3 className={s.iTitle}>Food Delivery</h3>
          <p className={s.iSuptitle}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.img}>
            <Smile />
          </div>
          <h3 className={s.iTitle}>Super Taste</h3>
          <p className={s.iSuptitle}>
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
