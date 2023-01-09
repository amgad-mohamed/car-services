import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Booking from "./components/Booking/BookingComp";
// import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Booking/>
      </>
  );
}

export default App;