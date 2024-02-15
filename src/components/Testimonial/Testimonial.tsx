import React from "react";
import s from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className="text-center my-32">
      <div className={s.text}>
        <p className={s.subtitle}>Testimonial</p>
        <h2 className={s.title}>Making Food great again and again</h2>
        <p className={s.suptitle}>
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
