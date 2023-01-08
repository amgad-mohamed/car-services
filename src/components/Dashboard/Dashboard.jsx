import React from "react";
import "./Dashboard.scss";
import FirstCard from "./FirstCard/FirstCard";
import SecondCard from "./SecondCard/SecondCard";
import ThirdCard from "./ThirdCard/ThirdCard";

function Dashboard() {
  return (
    <div className="dash">
      <FirstCard />
      <SecondCard />
      <ThirdCard/>
    </div>
  );
}

export default Dashboard;
