import styled from "styled-components";

export const CardsDisplayer = styled.div`
    display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    row-gap: 4rem;
    column-gap: 9rem;
    font-size: larger;
    margin: 3rem 10rem 6rem 0rem;
    transition: 1s;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
