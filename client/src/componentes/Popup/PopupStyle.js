import styled from "styled-components";

export const Popstyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .Form {
    width: 500px;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 27px;
    background-color: white;
    border: 0.5px solid #333;
    margin-bottom: 5px;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  /* Estilo del botón para abrir el popup */

  .btn-submit {
    border: none;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    margin-left: 30px;
  }

  .btn-close {
    border: none;
    padding: 2px 2px;
    background-color: #333;
    color: red;
    border-radius: 50%;
    cursor: pointer;
    transform: translatex(499px) translatey(-232px);
  }
`;
/* 
.ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ReactModal__Content {
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-width: 500px;
    width: 100%;
  }

  height: 100vh;
  width: 100vw;

*/
