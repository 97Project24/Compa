import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/bannerImg.png';
import BannerContent from '../components/BannerContent';

const Banner = () => {
    return (
        <StyledBanner>
            <BannerImg>
                <img src={bannerImg} alt="Banner Image" />
            </BannerImg>
            <StyledBannerContent>
                <BannerContent />
            </StyledBannerContent>
        </StyledBanner>
    );
}

export default Banner;

const StyledBanner = styled.div`
  width: 100%;
  position: relative;
  margin-top: 4px;
`;

const BannerImg = styled.div`
    width: 100%;
    height: 480px;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const StyledBannerContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;