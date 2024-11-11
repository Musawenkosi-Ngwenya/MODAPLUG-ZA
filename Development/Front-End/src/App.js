import React from "react";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import NewsCarousel from "./components/NewsCarousel";
import ImageBanner from "./components/ImageBanner";
import ProductCarouselImages from "./components/ProductCarouselImages";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <MainNavbar />
      <NewsCarousel />
      <ImageBanner />
      <ProductCarouselImages />
      <Footer />
    </div>
  );
}

export default App;
