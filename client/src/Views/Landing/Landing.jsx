import React from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../cardigan.png";
import {style} from "./LandingStyle";

function Landing() {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/home");
  };
  return (
    <div className="landing">
      <div className={style.frame}>
      <div className="background">
        <img
          className="map_img"
          src={imagen}
          alt="Logo Cardigan"
          useMap="#workmap"
        />
        <map name="workmap" className="workmap">
          <area
            shape="circle"
            coords="170,150,160"
            alt="logo"
            onClick={myFunction}
          ></area>
        </map>
      </div>
    </div>
  </div>
  );
}
export default Landing;
