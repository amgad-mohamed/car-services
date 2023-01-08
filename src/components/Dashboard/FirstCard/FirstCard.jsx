import React from "react";
import "./FirstCard.scss";
import { Energy, Range, Break, LayoutIcon } from "../../Sidebar/Icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import FirstCarddata from "./FirstCarddata";


function FirstCard() {
  const percentage1 = 45;
  const percentage2 = 157;
  const percentage3 = 9;
  const percentage4 = 25;

  return (<>
    <div className="card">
      <div className="carditem">
        <div className="icon" style={{ color: "#3e98c7" }}>
          <Energy />
        </div>
        <p>Energy</p>
        <div style={{ width: 110, height: 110 }}>
          <CircularProgressbar
            value={percentage1}
            text={`${percentage1}%`}
            styles={buildStyles({
              trailColor: "#F4F5F9",
            })}
          />
        </div>
      </div>
      <div className="carditem">
        <div className="icon" style={{ color: "#FF7E86" }}>
          <Range />
        </div>
        <p>Range</p>
        <div style={{ width: 110, height: 110 }}>
          <CircularProgressbar
            value={57}
            text={`${percentage2}k%`}
            styles={buildStyles({
              pathColor: "#FF7E86",
              trailColor: "#F4F5F9",
            })}
          />
        </div>
      </div>
      <div className="carditem">
        <div className="icon" style={{ color: "#FF764C" }}>
          <Break />
        </div>
        <p>Break fluid</p>
        <div style={{ width: 110, height: 110 }}>
          <CircularProgressbar
            value={percentage3}
            text={`${percentage3}%`}
            styles={buildStyles({
              pathColor: '#FF764C',
              trailColor: "#F4F5F9",
            })}
          />
        </div>
      </div>
      <div className="carditem">
        <div className="icon" style={{ color: "#F6CC0D" }}>
          <LayoutIcon />
        </div>
        <p>Tire Wear</p>
        <div style={{ width: 110, height: 110 }}>
          <CircularProgressbar
            value={percentage4}
            text={`${percentage4}%`}
            styles={buildStyles({
              pathColor: '#F6CC0D',
              trailColor: "#F4F5F9",
            })}
          />
        </div>
      </div>
    </div></>
  );
}

export default FirstCard;