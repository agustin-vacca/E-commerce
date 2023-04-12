import React from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../cardigan.png";
import style from "./Landing.module.css";

function Landing() {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/home");
  };
  return (
    <div className={style.landing}>
      <div className={style.frame}>
        <img
          className={style.mapimg}
          src={imagen}
          alt="Logo Cardigan"
          useMap="#workmap"
        />
        <map name="workmap" className={style.workmap}>
          <area
            shape="circle"
            coords="180,150,130"
            alt="logo"
            //href="coffee.htm"
            onClick={myFunction}
          ></area>
        </map>
      </div>
    </div>
  );
}
export default Landing;
