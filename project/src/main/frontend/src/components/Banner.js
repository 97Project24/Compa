import React from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/bannerImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  margin-top: 4px;
`;

const BannerImg = styled.div`
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const BannerContent = styled.div`
    position: absolute;
    background-color: #fff;
    width: 240px;
    height: 40px;
    text-align: center;
    padding-top: 8px;
    border-radius: 30px;
    top: 90px;
    left: 250px;
    color: fff;
    font-size: 22px;
    font-weight: 600;
`;
