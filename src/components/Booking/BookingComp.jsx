import React from "react";
import "./BookingComp.scss";
import drop from ".././assests/drop.png";
import icon from ".././assests/icon.png";
import filter from ".././assests/filter.png";
import bookingdata from "./BookindData";

function Booking() {
  return (
    <div className="booking">
      <p>Booking</p>
      <diV className="filter">
        <div className="left-filter">
          <div className="new">
            <span>New</span>
            <img src={drop} alt="" />
          </div>

          <div className="toyota">
            <span>Toyota</span>
            <img src={drop} alt="" />
          </div>
        </div>
        <div className="right-filter">
          <img src={icon} alt="" width={"60px"} height={"60px"} />
          <div className="img-filter">
            <img src={filter} alt="" width={"44px"} height={"44px"} />
          </div>
        </div>
      </diV>

      <div className="cart-car">
        {bookingdata.map((cart) => {
          return (
            <div className="inside-cart">
              <div className="up">
                <div className="right-up"> 
                  <p>{cart.title}</p>
                  <span>{cart.Coupe}</span>
                </div>
                <div className="left-up">
                  <img src={cart.heart} alt="" />
                </div>
              </div>
              <div className="carimg">
                <img src={cart.imgCar} alt="" width={"80%"} height={"110px"} />
              </div>
              <div className="under">
                <div className="bottom">
                  <div className="left-under">
                    <div className="person">
                      <img src={cart.person} alt="" />
                      <span>4</span>
                    </div>
                    <div className="person">
                      <img src={cart.share} alt="" />
                      <span>Manual</span>
                    </div>
                  </div>
                  <div className="right-under">
                    <span>{cart.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Booking;