import React from "react";
import MyCarousel from "../components/MyCarousel";
import poster from "../images/zyro-image.png";

const MainPage = () => {
  return (
    <>
      <div className="poster">
        <img src={poster} alt="poster" />
      </div>

      <MyCarousel />
    </>
  );
};

export default MainPage;
