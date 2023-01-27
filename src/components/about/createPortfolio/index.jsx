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
        <Ellipse1 src={`https://file.rendit.io/n/4PmfANswQKkBYHMVQCRe.svg`} />
      </Group1>
      <Image2 src={`https://file.rendit.io/n/272PYl0clddWcbDxDMTt.svg`} />
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #2b032a;
  overflow: hidden;
  padding-left: 80px;
`;
const Group1 = styled.div`
  width: 191px;
  height: 523px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 376px 0px 786px;
`;
const FlexColumn1 = styled.div`
  left: 0px;
  top: 142px;
  position: absolute;
  gap: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 909px 44px 31.3px;
  border-radius: 7px;
  background-image: linear-gradient(270deg, #b192ca -22%, #9a18d7 135%);
`;
const Group = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text1 = styled.div`
  width: 414px;
  height: 45px;
  color: #06021a;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
`;
const Text2 = styled.div`
  width: 299px;
  height: 24px;
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
const FlexColumn3 = styled.div`
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
  width: 305px;
  height: 282px;
  left: 1041px;
  top: 235px;
  position: absolute;
`;
const Image1 = styled.img`
  width: 454px;
  height: 480px;
  left: 759px;
  top: 0px;
  position: absolute;
`;
const Ellipse1 = styled.img`
  width: 191px;
  height: 177px;
  position: relative;
`;
const Image2 = styled.img`
  width: 100%;
  height: 1.5px;
`;
