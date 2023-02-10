import React from "react";
import styled from "styled-components";

export const CreatePortfolio = () => {
  return (
    <FrameRootRootRoot>
      <Group1>
        <FlexColumn1>
          <Group>
            <Text1>Create Your NFT Portfolio</Text1>
            <Text2>Get upated with news, tips & tricks</Text2>
          </Group>
          <PurpleHeartFlexColumn>
            <FlexColumn3>
              <Text3>Join Now</Text3>
            </FlexColumn3>
          </PurpleHeartFlexColumn>
        </FlexColumn1>
        <Ellipse src={`https://file.rendit.io/n/xgm1s4HCgyMfZNxY0JsG.svg`} />
        <Image1 src={`https://file.rendit.io/n/jQzpbNF0Yv9X6SGGByWq.png`} />
      </Group1>
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b032a;
  padding-left: 80px;
`;
const Group1 = styled.div`
  width: 191px;
  height: 523px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 376px 0px 1000px;

  @media (max-width: 500px) {
    padding: 0 !important;
    margin-right: 250px;
  }

  @media (max-width: 1000px) {
    padding: 0 !important;
    margin-right: 400px;
  }
`;
const FlexColumn1 = styled.div`
  left: 100px;
  top: 142px;
  position: absolute;
  gap: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 740px 44px 31.3px;
  border-radius: 7px;
  background-image: linear-gradient(270deg, #b192ca -22%, #9a18d7 135%);
  @media (max-width: 1000px) {
    padding: 100px;
    left: 25%;
    top: 10%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 350px;
    padding: 10px;
    left: 40%;
    top: 10%;
    justify-content: center;
    align-items: center;
  }

`;
const Group = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
    @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
`;
const Text1 = styled.div`
  color: #06021a;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;
const Text2 = styled.div`
  color: #06021a;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
`;
const PurpleHeartFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 5.48px 7px 6.56px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #06021a;
  background-color: rgba(141, 22, 193, 0.69);
`;
const FlexColumn3 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 46.5px 12px 45.4px;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
const Text3 = styled.div`
  width: 76.7px;
  height: 24px;
  color: #06021a;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
const Ellipse = styled.img`
  width: 250px;
  height: 250px;
  left: 900px;
  top: 235px;
  position: absolute;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Image1 = styled.img`
  width: 400px;
  height: 400px;
  left: 650px;
  top: 0px;
  position: absolute;
    @media (max-width: 1200px) {
    display: none;
  }
`;
const Ellipse1 = styled.img`
  width: 191px;
  height: 177px;
  position: relative;
    @media (max-width: 1200px) {
    display: none;
  }
`;