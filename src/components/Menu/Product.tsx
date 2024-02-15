import React from "react";
import s from "./Product.module.css";
import IMG1 from "../../assets/img/prod1.png";

const Product = () => {
  return (
    <div className={s.product}>
      <div className={s.img}>
        <img src={IMG1} alt="" />
      </div>
      <div className={s.productItem}>
        <div className="flex justify-between">
          <h3 className={s.title}>Vegie Muffen</h3>
          <p className={s.price}>16$</p>
        </div>
        <p className={s.suptitle}>
          There are many things are needed to start the Fast Food Business.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex text-[#fff] gap-10 items-center ml-4">
            <div className={s.plus}>+</div>
            <div className={s.quantity}>0</div>
            <div className={s.minus}>-</div>
          </div>
          <div className={s.rating}>rating</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
