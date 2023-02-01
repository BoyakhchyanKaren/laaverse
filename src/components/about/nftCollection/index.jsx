import React from "react";
import styled from "styled-components";
import BgImage from 'assets/images/about/nftPic.png';

export const NftCollection = () => {
  return (
    <RectangleRootRootRoot>
      <Group4>
        <div className='w-full md:h-[90vh] h-[55vh] flex items-center justify-center' style={{
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        </div>
      </Group4>
      <Group5>
        <Paragraph>
          Laaverse will allow users to purchase virtual land or properties using
          NFTs.
        </Paragraph>
        <Paragraph1>
          In Laaverse, users who own virtual land will be able to develop and
          customise their properties as they see fit. <br />
          This could include building virtual homes or businesses, or even
          creating unique landscapes.
        </Paragraph1>
        <PurpleMountainsMajestyFlexColumn>
          <FlexColumn5>
            <Text1>More About US</Text1>
          </FlexColumn5>
        </PurpleMountainsMajestyFlexColumn>
      </Group5>
    </RectangleRootRootRoot>
  );
};

const RectangleRootRootRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(270deg, #b974ea -98%, #06021a 117%);
  padding-bottom: 50px;
`;
const Group4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`;
const Group5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  margin: 0px 0px 15px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const Paragraph1 = styled.div`
  margin: 0px 0px 15px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const PurpleMountainsMajestyFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 5px 7px 6px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(160, 134, 172, 0.57);
`;
const FlexColumn5 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 20px 12px 21px;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 4px 0px rgba(84, 23, 113, 0.6);
`;
const Text1 = styled.div`
  width: 115px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
