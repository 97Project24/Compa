import React from 'react';
import styled from 'styled-components';


const BannerFooter = () => {
    return (
        <StyledBannerFooter>
            <span>개인정보처리 방침</span>
        </StyledBannerFooter>

    );

}

export default BannerFooter;


const StyledBannerFooter = styled.div`
    background-color: #686868;
    width: 100%;
    height: 40px;
    padding-top: 10px;

    span {
        color: #fff;
        font-size: 18px;
        font-weight: 600;

        padding-left: 220px;
    }

`;