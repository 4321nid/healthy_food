import React from "react";
import s from "./Header.module.css";
import Logo from "../../assets/svg/Logo";
import { Link } from "react-router-dom";
import ButtonOrange from "../../assets/button/ButtonOrange";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex justify-between items-center gap-8 ">
        <Logo />
        <p className={s.header__link}>Home</p>
        <p className={s.header__link}>About us</p>
        <p className={s.header__link}>Menu</p>
        <p className={s.header__link}>Features</p>
        <p className={s.header__link}>Contact us</p>
      </div>

      <ButtonOrange />
    </div>
  );
};

export default Header;
