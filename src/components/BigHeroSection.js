import React from "react";
import Sid from "../Assests/images/siddhart.jpg";
import kia from "../Assests/images/kiara.jpg";
import DiwaliCorner from "../Assests/images/diwalicorner.jpg";
import flat100 from "../Assests/images/flat100.jpg";
import flat200 from "../Assests/images/flat200.jpg";
import festive from '../Assests/images/festive.jpg'
import ImageCarousel from "./ImageCarousel";

const BigHeroSection = () => {
  return (
    <>
      <div className="flex">
        <img className="w-1/2" src={kia} />
        <img className="w-1/2" src={Sid} />
      </div>
      <div className="">
        <img src={DiwaliCorner} />
        <div className="flex">
          <img className="w-1/2" src={flat100} />
          <img className="w-1/2" src={flat200} />
        </div>
      </div>
      <div>
        <img src={festive}/>
      </div>
      <div className="w-1/6">
        <ImageCarousel />
      </div>
    </>
  );
};

export default BigHeroSection;
