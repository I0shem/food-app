import React, { useState } from "react";
import s from "./Cart.module.css";
import CartSVG from "../Images/cart.svg";
import { ReactSVG } from "react-svg";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const Cart = ({ cartList, setCartList }) => {
  const [isOpen, setIsOpen] = useState(false);
  let priceOfAList = 0;
  cartList.map((p) => {
    return (priceOfAList += p.price * p.quantity);
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const addQuantity = (f) => {
    let index = cartList.indexOf(f);
    let newArr = [...cartList];
    newArr[index].quantity += 1;
    setCartList(newArr);
  };
  const decQuantity = (f) => {
    let index = cartList.indexOf(f);
    let newArr = [...cartList];
    console.log("list: ", cartList[index]);
    if (newArr[index].quantity > 1) {
      newArr[index].quantity -= 1;
      setCartList(newArr);
    } else if (newArr[index].quantity === 1) {
      const nArr = cartList.filter((item) => item !== f);

      setCartList(nArr);
    }
  };
  const deleteItem = (f) => {
    const nArr = cartList.filter((item) => item !== f);
    setCartList(nArr);
  };

  const checkNameLength = (name) => {
    if (name.length > 20) {
      let newName = name.slice(0, 23) + "...";
      return newName;
    } else {
      return name;
    }
  };
  return (
    <>
      <ReactSVG
        onClick={() => handleClick()}
        src={CartSVG}
        beforeInjection={(svg) => {
          svg.classList.add("svg-class-name");
          svg.setAttribute("style", "width: 50px", "height: 50px");
        }}
      />
      {isOpen && (
        <div className={s.cartList} onClick={(e) => e.stopPropagation()}>
          {cartList.map((f) => {
            return (
              <div key={f.id} className={s.foodBox}>
                <img className={s.foodImage} src={f.image} alt="" />{" "}
                <div className={s.itemInfo}>
                  <div className={s.name}>{checkNameLength(f.name)}</div>
                  <div className={s.quantity}>
                    <AiOutlineMinusCircle onClick={() => decQuantity(f)} />{" "}
                    <div className={s.text}>{f.quantity}</div>
                    {"  "}
                    <AiOutlinePlusCircle onClick={() => addQuantity(f)} />
                  </div>
                </div>
                <div className={s.delBtn} onClick={() => deleteItem(f)}>
                  {" "}
                  x
                </div>
                <div className={s.foodPrice}> {f.price * f.quantity} $</div>
              </div>
            );
          })}
          <div className={s.total}>Total: {priceOfAList} USD</div>
        </div>
      )}
    </>
  );
};

export default Cart;
