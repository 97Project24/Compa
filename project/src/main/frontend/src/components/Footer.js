import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledFooter>
            <Information>
                <div>대표전화 : 02-736-0047 F.02-736-9799</div>
                <div>(07551) 서울특별시 강서구 양천로 570 NH서울타워 17층, 20층</div>
            </Information>
        </StyledFooter>
    );

}

export default Footer;


const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ededed;

  width: 100%;
  height: 200px;

`;

const Information = styled.div`

  align-items: center;

  div {
    margin-left: 220px;
    padding: 8px;
  }


`;