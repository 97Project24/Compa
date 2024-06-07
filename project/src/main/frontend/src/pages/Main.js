import React from 'react';
import styled from "styled-components";

import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Menu from '../components/Menu';

const Main = () => {
  return (
      <StyledMain>
        <NavContainer>
             <Nav />
             <Banner />
             <Menu />
        </NavContainer>
      </StyledMain>
  );
}

export default Main;

const StyledMain = styled.main`
   font-family: "Noto Sans KR", sans-serif;
`;

const NavContainer = styled.div`
    /* __ */
`;