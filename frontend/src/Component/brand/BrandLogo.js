import React from "react";
import Artica from "../Image/air.png";

const BrandLogo = () => {
  return (
    <div>
      <div>
        <p className="bg-black">
          <img src={Artica} alt="" className="rounded-md  text-black" />
        </p>
      </div>
    </div>
  );
};

export default BrandLogo;
