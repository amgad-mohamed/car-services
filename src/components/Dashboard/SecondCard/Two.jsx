import React from "react";
import { Line } from "react-chartjs-2";
import "./SecondCard.scss";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Two() {
  const data = {
    labels: [
      "7 am",
      "",
      "9 am",
      "",
      "11 am",
      "",
      "1 pm",
      "",
      "3 pm",
      "",
      "5 pm",
      "",
      "7 pm",
      "",
      "9 pm",
    ],
    datasets: [
      {
        data: [4, 8, 16, 18, 13, 14, 6, 8, 5, 8, 10, 13, 8, 8, 7],
        backgroundColor: "transparent",
        borderColor: "#FF764C",
        pointBorderColor: "transparent",
        pointBorderWidth: "4",
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          color: "#F9F9F9",
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 20,
        ticks: {
          stepSize: 8,
          callback: (value) => "",
        },
      },
    },
  };
  return (
    <div className="cart">
      <p>
        <span>Car</span> Statistics
      </p>
      <div className="inside-cart">
        <span>20 February 2022</span>
        <div className="date right">
          <span className="right-span">Day</span>
          <span className="right-span">Week</span>
          <span className="right-span">Month</span>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "#ffffff",
          marginTop: "20px",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default Two;