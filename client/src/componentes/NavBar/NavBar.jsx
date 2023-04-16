import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../cardigan.png";
import { BiUserCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { filterProductsByCategories } from "../../redux/actions.js";
import { useDispatch } from "react-redux";

export default function NavBar() {
  // DIV EMERGENTE
  const [open, setOpen] = useState(false);

  // FILTROS CATEGORIA
  const dispatch = useDispatch();
  const location = useLocation();

  const handleFilterCategories = (event) => {
    dispatch(filterProductsByCategories(event.target.value));
  };

  // FUNCION DROP
  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <option onClick={(e) => handleFilterCategories(e)}>
          {" "}
          {props.text}{" "}
        </option>
      </li>
    );
  }

  //NAVBAR
  return (
    <div className="LayoutNavbar">
      <div className="divOne">
        <Link to={`/`}>
          <img src={logo} alt="." width="70px" />
        </Link>

        {location.pathname === "/home" && <SearchBar />}

        <h3 className="ThisIsLog">
          INGRESAR/REGISTRARSE <BiUserCircle size={40} />{" "}
        </h3>
      </div>
      <div className="divTwo">
        <div className="navButton">Inicio</div>
        <div>
          <div
            className="navButton"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Productos
          </div>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul>
              <DropDownItem text={"All"} />
              <DropDownItem text={"Maquinas"} />
              <DropDownItem text={"Mancuernas"} />
              <DropDownItem text={"Rack"} />
              <DropDownItem text={"Discos y Barras"} />
              <DropDownItem text={"Accesorios"} />
            </ul>
          </div>
        </div>
        <div className="navButton">Preguntas Frecuentes</div>
        <div className="navButton">Nosotros</div>
      </div>
    </div>
  );
}
