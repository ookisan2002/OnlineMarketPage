import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import Header from "./components/Header";
import { useState } from "react";
import MechandiseDetail from "./pages/MechandiseDetail";
import Footer from "./components/Footer";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App relative w-full flex flex-col bg-gray-200">
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/detail" element={<MechandiseDetail />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/top-charts" element={<TopCharts />} />;;
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
