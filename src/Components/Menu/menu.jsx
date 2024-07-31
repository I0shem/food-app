import React from "react";
import s from "./menu.module.css";
import { foodData } from "../food";
import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";
import chicken from "../Images/chicken.jpeg";
const Menu = ({ cartList, setCartList }) => {
  const foodDB = foodData;
  const handleClick = (f) => {
    if (cartList.includes(f) === true) {
      let index = cartList.indexOf(f);
      let newArr = [...cartList];
      newArr[index].quantity += 1;
      setCartList(newArr);
    } else {
      setCartList((cartList) => [...cartList, f]);
    }
  };
  return (
    <div className={s.menuContent}>
      <h2>MENU</h2>{" "}
      <div className={s.foodData}>
        {foodDB.map((f) => {
          return (
            <div key={f.id} className={s.foodBox}>
              <img className={s.foodImage} src={chicken} alt="" />
              <h5 className={s.foodName}>{f.name}</h5>
              <h4 className={s.foodDescription}>{f.description}</h4>
              <h2 className={s.foodPrice}>{f.price} $</h2>
              <IconContext.Provider
                value={{
                  size: 50,
                  className: s.addFoodBtn,
                  color: "black",
                }}
              >
                <IoIosAddCircle onClick={() => handleClick(f)} />
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
