import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Layout } from "../common/styled_components/commonStyles";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Layout >
      <div className={style.allNavBars}>
        <div className={style.NavBarDiv}>
          <h1 className={style.ThisIsHome}>Home</h1>
          <div>
            <img src="CardinalLogo.png" alt="." />
          </div>
          <NavBar />
          <h3 className={style.ThisIsLog}>INGRESAR/REGISTRARSE</h3>
        </div>
        <div className={style.divTwo}>
          <button className={style.navButton}>Inicio</button>
          <button className={style.navButton}>Productos</button>
          <button className={style.navButton}>Preguntas Frecuentes</button>
          <button className={style.navButton}>Nosotros</button>
        </div>
      </div>

      <div className={style.cardDisplayer}>
        {allProducts.map((el) => {
          return (
            <Card key={el.id} id={el.id} name={el.name} price={el.price} />
          );
        })}
      </div>

      <div className={style.FooterDiv}>
        <Footer />
      </div>
    </Layout>
  );
};
export default Home;
