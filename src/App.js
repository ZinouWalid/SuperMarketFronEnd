import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import DeliveryMan from "./components/DeliveryMan/DeliveryMan";
import ProductPage from "./components/ProductPage/ProductPage";
import Ads from "./components/Ads/Ads";
import Livraison from "./components/Livraison/Livraison";

import AddproductPage from "./components/ProductPage/AddproductPage";
import ModifyProductpage from "./components/ProductPage/ModifyProductpage";
import AddAds from "./components/Ads/AddAds";
import AllAds from "./components/Ads/AllAds";
import ShowedAds from "./components/Ads/ShowedAds";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/DeliveryMan" element={<DeliveryMan />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Ads" element={<Ads />} />
        <Route path="/Ads/addAds" element={<AddAds />} />
        <Route path="/Ads/allAds" element={<AllAds />} />
        <Route path="/Ads/showedAds" element={<ShowedAds />} />

        <Route path="/livraison" element={<Livraison />} />

        <Route path="/AddproductPage" element={<AddproductPage />} />
        <Route path="/ModifyProduct/:id" element={<ModifyProductpage />} />
      </Routes>
    </div>
  );
}

export default App;
