import React from "react";
import { Bar } from "react-chartjs-2";
import "./SecondCard.scss";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function One() {
  const data = {
    labels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
    datasets: [
      {
        label: "369",
        data: [17, 15, 25, 10, 18, 7, 15],
        backgroundColor: "#F4F5F9",
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
        <span>Miles</span> Statistics
      </p>
      <div className="inside-cart">
        <div className="date">
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
        </div>
        <span>256 Miles</span>
      </div>
      <div
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "#ffffff",
          marginTop: "20px",
        }}
      >
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default One;