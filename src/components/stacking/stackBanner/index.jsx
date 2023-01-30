import React from "react";
import styled from "styled-components";

export const StackBanner = () => {
  return (
    <HDwallpaperneonsinfuturisticcityskyscraperRootRootRoot>
      <PurpleHeartFlexColumn>
        <PurpleHeartFlexColumn1>
          <Text1>Staking</Text1>
        </PurpleHeartFlexColumn1>
        <Image1 src={`https://file.rendit.io/n/BXz43GsJ7OPx8Rb80TWf.svg`} />
      </PurpleHeartFlexColumn>
    </HDwallpaperneonsinfuturisticcityskyscraperRootRootRoot>
  );
};

const HDwallpaperneonsinfuturisticcityskyscraperRootRootRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://file.rendit.io/n/chGtvt15bgl1IszXbCEN.jpg");
`;
const PurpleHeartFlexColumn = styled.div`
  height: 416px;
  gap: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 57px 387px;
  background-color: rgba(138, 3, 239, 0.47);
`;
const PurpleHeartFlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 33px 14px 34px;
  border-radius: 17px;
  background-color: rgba(128, 5, 215, 0.58);
`;
const Text1 = styled.div`
  width: 439px;
  height: 99px;
  color: #ffffff;
  font-size: 63px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 14.5px;
`;
const Image1 = styled.img`
  width: 100%;
  height: 30px;
`;
