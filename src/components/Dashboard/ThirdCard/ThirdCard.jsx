import React from "react";
import ThirdCardData from "./ThirdCarddata";
import "./ThirdCard.scss";

function ThirdCard() {
  return (
    <div className="cart-car">
      {ThirdCardData.map((item) => {
        return (
          <div className="inside-cart" style={{ backgroundColor: item.color }}>
            <div className="up">
              <img src={item.circlearrow} alt="" />
              <p>{item.percent}</p>
            </div>
            <img src={item.carImg} alt="" width={"100%"} height={"135px"} />
            <div className="under">
              <p>{item.title}</p>
              <div className="bottom">
                <div className="left-under">
                  <img src={item.squre} alt="" />
                  <span>{item.price}</span>
                  <img src={item.starIcon} alt="" />
                  <img src={item.power} alt="" />
                </div>
                <div className="right-under">
                  <span>{item.speed}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ThirdCard;
