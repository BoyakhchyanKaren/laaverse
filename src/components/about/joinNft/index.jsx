import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/home/bg1.png';

export const JoinNft = () => {
  return (
    <div className='w-full md:h-[40vh] h-[65vh] flex items-center justify-center' style={{
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
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    margin-top: 80px;
  }

  @media (max-width: 1024px) {
    padding-top: 50px;
  }
`;
const FlexColumn = styled.div`
  padding: 20px 40px;
  border-width: 1px;
  border-radius: 41px;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(
    270deg,
    rgba(154, 24, 215, 0.5) -16%,
    rgba(255, 255, 255, 0.5) 180%
  );
  z-index: 20;
`;
const Text1 = styled.button`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 4.5px;
  text-transform: uppercase;
`;
