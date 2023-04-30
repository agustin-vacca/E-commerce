import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
// import {
//   CardDiv,
//   LinkText,
//   ProductImage,
//   TextName,
//   TextPrice,
// } from "./CardStyle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { putAdminUser, getUserById } from "../../../redux/actions";

const Productos =styled.div`
   display:flex;
   flex-direction:row;   
   justify-content:center;
   gap:20%;
   border-bottom: 1px dashed  black;
   margin-right:3%;
   margin-left:3%;
   align-items:baseline;
`
const PStyledProduct = styled.p`
    width: 5%;
    color:black;
`

const ChangeState = styled.div`
  border-radius: 8px;
  background-color: ${ props => props.setRole ? "indigo" : "pink"};
  cursor: pointer;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
`
; 

function UserCard({ id, name, email, admin }) {

    const dispatch = useDispatch();

    const [role, setRole] = useState(admin);

    const adminHandler = (id) => {
      setRole(!role)
      dispatch(putAdminUser(id))
    }

    useEffect( () => {
      dispatch(getUserById(id))
      // eslint-disable-next-line
    },[role])

  return (
    <Productos>
      <PStyledProduct> ID: {id} </PStyledProduct>
      <PStyledProduct> name: {name} </PStyledProduct>
      <PStyledProduct> email: {email} </PStyledProduct>
      <ChangeState setRole={role} onClick={() => adminHandler(id)}>
        {role ? 'Admin' : 'Usuario' }
      </ChangeState>
    </Productos>
  );
}
export default UserCard;
