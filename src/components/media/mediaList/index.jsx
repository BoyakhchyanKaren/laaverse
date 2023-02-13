import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";

export const MediaList = () => {
  return (
    <FrameRootRootRoot>
      <FlexRow>
        {[1, 2, 3, 4, 5, 6].map(() => {
          return (
            <Animate.ScaleIn>
              <RoyalPurpleFlexColumn>
                <Img2 src={`https://file.rendit.io/n/hXUF8YEU8cD5Z1ffxD5u.png`} />
                <Text1>Metaverse</Text1>
                <Paragraph>
                  Decoded : Metaverse And The <br />
                  Future Of Banking
                </Paragraph>
                <Paragraph1>
                  The metaverse can help the healthcare <br />
                  fraternity by providing trainings on
                  <br />
                  understanding medical tools and…
                </Paragraph1>
                <FlexColumn>
                  <Text2><Animate.FadeUp>READ MORE</Animate.FadeUp></Text2>
                </FlexColumn>
              </RoyalPurpleFlexColumn>
            </Animate.ScaleIn>
          )
        })}
      </FlexRow>
    </FrameRootRootRoot>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  padding: 100px;
  @media (max-width: 700px) {
    padding: 50px
  }
`;
const RoyalPurpleFlexColumn = styled.div`
  width: 350px;
  height: 433px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 14px;
  background-color: #320750;
`;
const Img2 = styled.img`
  width: 400px;
  height: 200px;
  margin: 0px 0px 11px 0px;
`;
const Text1 = styled.div`
  width: 72px;
  height: 21px;
  margin: 0px 0px 5px 10px;
  color: #d796f5;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: -0.28px;
`;
const Paragraph = styled.div`
  width: 236px;
  height: 48px;
  margin: 0px 0px 17px 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const Paragraph1 = styled.div`
  width: 300px;
  height: 63px;
  margin: 0px 0px 14px 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: -0.28px;
`;
const FlexColumn = styled.button`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin: 0px 15px 0px 0px;
  padding: 10px;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #c965f7 -42%, #3f0445 142%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
const Text2 = styled.div`
  width: 88px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.32px;
`;
const FrameRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #06021a;
  overflow: hidden;
`;
