import React from "react";
import styled from "styled-components";

export const ApplyBanner = () => {
    return (
        <ApplyBannerWrapper>
            <RoyalPurpleFlexColumn>
                <FlexColumn>
                    <Text1>Launch On Laaverse</Text1>
                    <Text2>Full support in project incubation</Text2>
                </FlexColumn>
                <PurpleHeartFlexColumn>
                    <Text3>APPLY NOW</Text3>
                </PurpleHeartFlexColumn>
            </RoyalPurpleFlexColumn>
        </ApplyBannerWrapper>
    );
};

const ApplyBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/RYSpjfYeCkyP5URlRF9V.jpg");
`;
const RoyalPurpleFlexColumn = styled.div`
  display: flex;
  gap: 100px;
  padding: 100px;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(50, 7, 81, 0.71);

  @media (max-width: 500px) {
    padding: 40px;
  }
`;
const FlexColumn = styled.div`
  position: relative;
  display: flex;
`;
const Text1 = styled.div`
  width: 500px;
  left: 0px;
  top: 0px;
  margin-top: 30px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  font-family: Poppins;
  letter-spacing: 3.45px;
  @media (max-width: 800px) {
    width: 200px;
    font-size: 30px;
  }
`;
const Text2 = styled.div`
  width: 333px;
  height: 27.6px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  letter-spacing: 1.2px;
`;
const PurpleHeartFlexColumn = styled.button`
  display: flex;
  padding: 20px 40px;
  border-radius: 15px;
  background-color: #bb47f2;

  &:hover {
    background-color: rgba(50, 7, 81, 0.71);
  }
`;
const Text3 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
