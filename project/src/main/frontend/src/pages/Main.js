import React from 'react';
import styled from "styled-components";

import Nav from '../components/MainPage/Nav';
import Banner from '../components/MainPage/Banner';
import BannerMenu from '../components/MainPage/BannerMenu';
import BannerFooter from '../components/MainPage/BannerFooter';
import Footer from '../components/MainPage/Footer';

const Main = () => {
  return (
      <StyledMain>
        <NavContainer>
             <Nav />
             <Banner />
             <BannerMenu />
             <BannerFooter />
             <Footer />
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