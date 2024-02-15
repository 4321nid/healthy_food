import React from "react";
import s from "./Menu.module.css";
import Product from "./Product";
import LearnMore from "../../assets/button/LearnMore";

const Menu = () => {
  return (
    <div className="text-center mb-32">
      <div className={s.text}>
        <p className={s.subtitle}>menu</p>
        <h2 className={s.title}>Food Full of treaty Love</h2>
        <p className={s.suptitle}>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mb-16">
        <Product />
        <Product />

        <Product />

        <Product />

        <Product />

        <Product />

        <Product />
      </div>
      <LearnMore />
    </div>
  );
};

export default Menu;
