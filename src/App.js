import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Booking from "./components/Booking/BookingComp";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="booking" element={<Booking />} />
    </Routes>      </>
  );
}

export default App;