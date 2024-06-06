import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/bannerImg.png';

const Banner = () => {
    return (
        <StyledBanner>
            <BannerImg>
                <img src={bannerImg} alt="Banner Image" />
            </BannerImg>
            <BannerContent>
                <span>과학기술사업화 진흥원</span>
            </BannerContent>
        </StyledBanner>
    );
}

export default Banner;

const StyledBanner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BannerImg = styled.div`
    width: 100%;
    height: 580px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const BannerContent = styled.div`
    position: absolute;
    text-align: center;

    .span {
        color: fff;
        font-size: 30px;
    }
`;
