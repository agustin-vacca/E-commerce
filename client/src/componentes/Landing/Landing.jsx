import { useNavigate } from "react-router-dom";
import imagen from "../../cardigan.png";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/home");
  };
  return (
    <div className="landing">
      <div className="frame">
        <img
          className="mapimg"
          src={imagen}
          alt="Logo Cardigan"
          useMap="#workmap"
        />
        <map name="workmap">
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
