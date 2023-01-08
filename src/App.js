import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dashboard/>
    </>
  );
}

export default App;