import React from 'react';
import styled from 'styled-components';
import compaLogo from '../assets/compaLogo.png';

const Nav = ({ isLoggedIn }) => {
    return (
        <StyledNav>
            <LogoContainer>
                <a href="/" target="_self" rel="noopener noreferrer">
                    <img src={compaLogo} alt="compaLogo" />
                </a>
            </LogoContainer>
            <MenuContainer>
                <a href="/">연구등록</a>
                <a href="/">{isLoggedIn ? "로그아웃" : "로그인"}</a>
                <a href="/">회원가입</a>
            </MenuContainer>
        </StyledNav>
    );
}

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 17px;
  height: 80px;

  padding: 0 20px;

  margin-left: 170px;
  margin-right: 170px;

  a {
    color: #000;
    text-decoration: none;
    padding: 20px;
    font-weight: 600;
    font-style: normal;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  img {
    width: 250px;
    height: auto;
  }
`;

const MenuContainer = styled.div`
  /* __ */
`;
