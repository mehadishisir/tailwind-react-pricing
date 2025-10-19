import { Suspense } from "react";
import "./App.css";
import DaisyNavbar from "./components/DaisyNavbar/daisyNavbar";
import Navbar from "./components/Navbar/navbar";
import PricingOption from "./components/pricing-option/pricingOption";
import axios from "axios";
import Tooltipr from "./components/react-chart/tooltip";

function App() {
  const pricingData = fetch("pricingData.json").then((res) => res.json());
  const promiseData = axios.get("month.json");
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNavbar></DaisyNavbar> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-lg"></span>}
        >
          <PricingOption pricingData={pricingData}></PricingOption>
        </Suspense>
        <Suspense>
          <Tooltipr promiseData={promiseData}></Tooltipr>
        </Suspense>
      </main>
    </>
  );
}

export default App;
