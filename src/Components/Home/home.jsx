import React, { useState } from "react";
import s from "./home.module.css";
import kfcBurger from "../Images/kfcBurger.png";
import OrderCompleted from "../Images/clip-order-completed.svg";
import FastDelivery from "../Images/fast-delivery.svg";
import BestQuality from "../Images/best-quality.svg";
import { ReactSVG } from "react-svg";
import { foodData } from "../food";
import ResponsivePagination from "react-responsive-pagination";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";

const Home = () => {
  const foodDB = foodData;

  const [page, setPage] = useState(1);
  const [countElement] = useState(6);
  const lastFoodIndex = page * countElement;
  const firstFoodIndex = lastFoodIndex - countElement;
  const currentFood = foodDB.slice(firstFoodIndex, lastFoodIndex);
  const pagesCount = Math.ceil(foodDB.length / countElement);
  const handleChange = (page) => {
    setPage(page);
  };
  console.log(currentFood);
  return (
    <div className={s.homePage}>
      <div className={s.contentHome}>
        <div className={s.topContent}>
          <div className={s.inspirationalText}>
            <h1>
              Be The Fastest In Delivering Your
              <span className={s.redText}> Food</span>
            </h1>
            <div className={s.regularTextBox}>
              <p className={s.regularText}>
                We cook and deliver the tastiest food right away to your
                designated location
              </p>
            </div>
            <div className={s.getStartedBtn}>
              <button>Get Started</button>
            </div>
          </div>
          <div className={s.inspirationalImage}>
            <img src={kfcBurger} alt="" />
          </div>
        </div>
        <div className={s.qualitiesContent}>
          <div className={s.qualitiesContentText}>
            <span className={s.redQCText}>WHAT WE SERVE</span>
            <h1>Your Favorite Food Delivery Partner</h1>
          </div>
          <div className={s.qCList}>
            <ul>
              <li>
                <ReactSVG src={OrderCompleted} />
                <h2>Easy To Order</h2>
                <p className={s.regularQCText}>
                  You only need a few steps in ordering food
                </p>
              </li>
              <li>
                <ReactSVG src={FastDelivery} />
                <h2>Fastest Delivery</h2>
                <p className={s.regularQCText}>
                  Delivery that is always on time or even faster
                </p>
              </li>
              <li>
                <ReactSVG src={BestQuality} />
                <h2>Best Quality</h2>
                <p className={s.regularQCText}>
                  Not only fast for us quality is also number one
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.ourMenu}>
          <div className={s.topContentFlexOM}>
            <div className={s.topContentOM}>
              <p className={s.redMenuTitleText}>OUR MENU</p>
              <h2>Menu That Always Make You Fall In Love</h2>
            </div>
            <div className={s.PaginationBox}>
              <ResponsivePagination
                className={s.myPagination}
                total={pagesCount}
                current={page}
                pageItemClassName={s.pageNum}
                onPageChange={(page) => handleChange(page)}
                nextLabel={
                  <IconContext.Provider
                    value={{
                      size: "50px",
                      className: s.paginationBtn,
                      color: "black",
                    }}
                  >
                    <TfiArrowCircleRight />
                  </IconContext.Provider>
                }
                previousLabel={
                  <IconContext.Provider
                    value={{
                      size: "50px",
                      className: s.paginationBtn,
                      color: "black",
                    }}
                  >
                    <TfiArrowCircleLeft />
                  </IconContext.Provider>
                }
              />
            </div>
          </div>

          <div className={s.foodData}>
            {currentFood.map((f) => {
              return (
                <div key={f.id} className={s.foodBox}>
                  <img className={s.foodImage} src={f.image} alt="" />
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
                    <IoIosAddCircle />
                  </IconContext.Provider>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
