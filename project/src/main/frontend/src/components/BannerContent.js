import React from 'react';
import styled from 'styled-components';

const BannerContent = () => {
    return (
        <StyledBannerContent>

            <TitleBox>
                <div>기술이전</div>
                <div>연구산업육성</div>
                <div>기술창업</div>
            </TitleBox>

            <ContentBox>
                <div>기업가에게 사업화 유망기술 이전받아 기술사업화 할 수 있도록 지원합니다.</div>
                <div>연구자에게 연구개발을 쉽게 할 수 있도록 연구산업 생태계를 육성합니다.</div>
                <div>창업가에게 기술창업 및 비즈니스 창업을 할 수 있도록 필요 기술을 제공 합니다.</div>
            </ContentBox>

        </StyledBannerContent>
    );
}

export default BannerContent;

const StyledBannerContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
`;

const TitleBox = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    div {
        background-color: #fff;
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }
`;

const ContentBox = styled.div`
    margin-top: 20px;
    //
`;