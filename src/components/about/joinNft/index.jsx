import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';

export const JoinNft = () => {
  return (
    <div className='w-full md:h-[40vh] h-[55vh] flex items-center justify-center' style={{
      backgroundImage: `url(${BgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <RootRootRootRoot>
        <FlexColumn>
          <Text1>Join NFT Portfolio</Text1>
        </FlexColumn>
        <Text2>
          Become a{"  "}
          Laaverse NFT virtual Land
        </Text2>
      </RootRootRootRoot>
    </div>
  );
};

const RootRootRootRoot = styled.div`
  gap: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 0px 286px;
  padding: 11px 21px 11px 22px;
  border-width: 1px;
  border-radius: 41px;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(
    270deg,
    rgba(154, 24, 215, 0.5) -16%,
    rgba(255, 255, 255, 0.5) 180%
  );
`;
const Text1 = styled.div`
  width: 137px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text2 = styled.div`
  height: 45px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 4.5px;
  text-transform: uppercase;
`;
