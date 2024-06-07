import React from 'react';
import styled from "styled-components";

const Menu = () => {
    return (
        <StyledMenu>
            <MainMenu>
                <div>이슈페이퍼</div>
                <div>기술실용화</div>
                <div>실험실창업</div>
                <div>연구양상</div>
                <div>활동지원</div>
            </MainMenu>
        </StyledMenu>
    );
}

export default Menu;

const StyledMenu = styled.div`
     margin-top: 0px;
     background-color: #d6e8fe;
     width: 100%;
     height: 120px;

     display: flex;
     justify-content: center;
     align-items: center;

`;

const MainMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    div {
     font-size: 18px;
     background-color: #9bc9ff;
     width: 100px;
     height: 40px;
     text-align: center;
     border-radius: 50px;

     padding: 10px;
     padding-top: 20px;
    }
`;