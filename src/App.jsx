import "./App.css";
import DaisyNavbar from "./components/DaisyNavbar/daisyNavbar";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNavbar></DaisyNavbar>
      </header>
    </>
  );
}

export default App;
