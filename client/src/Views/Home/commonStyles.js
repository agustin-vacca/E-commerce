import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: row;
  }

  .ContainerStyles {
    padding: 1%;
    width: 95%;
    height: 325px;
  }

  .ContainerCards {
    width: 97%;
  }

  .filtersComp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .imgCards {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
