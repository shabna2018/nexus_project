import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TopBar from "./components/topbar";
import Login from "./components/login";
import LocationTable from "./location/locationtable";
import GameSettings from  "./gamesetting/gamesetting";
import GameCategory from "./gamesetting/gameCategory";
import AccessProfile from "./gamesetting/accessprofile";
import AddProfile from "./gamesetting/addprofile";
import CodeDev from "./gamesetting/codedev";

import AddLocation from "./location/AddLocation";
import CardProduct from "./products/cardproduct/cardproduct";

import CoinProduct from "./products/coinproduct/coinproduct";
import TimeProduct from "./products/timeproduct/timeproduct";
import ItemProduct from "./products/itemproduct/itemproduct";
import ItemProductForm from "./products/itemproduct/itemproductform";
import LedProduct from "./products/ledproduct/ledproduct";
import StickerProduct from "./products/stickerproduct/stickerproduct";
import ComboProduct from "./products/comboproduct/comboproduct";

import LedProductAdd from "./products/ledproduct/ledproductadd";
import StickerProductAdd from "./products/stickerproduct/stickerproductadd";


import CoinProductForm from "./products/coinproduct/coinproductform";
import CardProductForm from "./products/cardproduct/cardproductform";
import TimeProductForm from "./products/timeproduct/timeproductform";



import "./App.css";
import { Import } from "lucide-react";

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopBar />
        <div style={{ flex: 2 }}>
          <Routes>
            <Route path="/location-table" element={<LocationTable />} />
            <Route path="/add-location" element={<AddLocation />} />
            <Route path="/card-product" element={<CardProduct />} /> {/* ✅ Added */}
            <Route path="/card-productform" element={<CardProductForm />} />
            <Route path="/coin-product" element={<CoinProduct />} /> {/* ✅ Added */}
            <Route path="/coin-productform" element={<CoinProductForm />} />
            <Route path="/time-productform" element={<TimeProductForm />} />

            <Route path="/time-product" element={<TimeProduct />} />
            <Route path="/item-productform" element={<ItemProductForm />} />
            <Route path="/item-product" element={<ItemProduct />} />
            <Route path="/led-product" element={<LedProduct />} />
            <Route path="/led-product-add" element={<LedProductAdd/>} />
            <Route path="/sticker-product-add" element={<StickerProductAdd/>} />
        
            <Route path="/sticker-product" element={<StickerProduct/>} />
            <Route path="/combo-product" element={<ComboProduct/>} />
            <Route path="/games" element={<GameSettings />} />
            <Route path="/accessprofile" element={<AccessProfile />} />
            <Route path="/addprofile" element={<AddProfile />} />
            <Route path="/game-category" element={<GameCategory />} />
           <Route path="/code-development" element={<CodeDev />} />












          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;