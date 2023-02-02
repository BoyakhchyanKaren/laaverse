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
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://file.rendit.io/n/chGtvt15bgl1IszXbCEN.jpg");
`;
const PurpleHeartFlexColumn = styled.div`
  gap: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background-color: rgba(138, 3, 239, 0.47);
`;
const PurpleHeartFlexColumn1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  background-color: rgba(128, 5, 215, 0.58);
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 15px;
  align-self: center;
  padding-left: 10px;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;
const Image1 = styled.img``;
