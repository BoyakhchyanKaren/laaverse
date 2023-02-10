import { Animate } from "components/global/animation";
import { colors } from "constants/colors";
import React from "react";
import styled from "styled-components";

export const LatestNewsUpdates = () => {
  return (
    <IstockphotoxRootRootRoot>
      <MidnightBlueFlexColumn>
        <PurpleHeartFlexColumn>
          <Animate.FadeUp><Text1>Latest News Update</Text1></Animate.FadeUp>
        </PurpleHeartFlexColumn>
        <Group>
          {[1, 2, 3].map(() => {
            return (
              <Animate.FadeUp>
                <RoyalPurpleFlexColumn>
                  <Group1>
                    <Group3>
                      <Group4>
                        <Image1
                          src={`https://file.rendit.io/n/GAcvJrbrqHnNEMQr7nGT.svg`}
                        />
                        <Text2>Admin</Text2>
                      </Group4>
                      <Group4>
                        <Image1
                          src={`https://file.rendit.io/n/ScKDiGAsC3fykaofwS9g.svg`}
                        />
                        <Text3>Jan 12, 2023</Text3>
                      </Group4>
                    </Group3>
                    <Image3
                      src={`https://file.rendit.io/n/auHjx6XAhkXILpAzw9Ar.svg`}
                    />
                    <Paragraph>
                      NFTs, rare digital items worlds <br />
                      crypto collectibles
                    </Paragraph>
                  </Group1>
                  <ReadMoreButton>
                    <Text4>Read More</Text4>
                    <Element1 />
                  </ReadMoreButton>
                </RoyalPurpleFlexColumn>
              </Animate.FadeUp>
            )
          })}
        </Group>
      </MidnightBlueFlexColumn>
    </IstockphotoxRootRootRoot>
  );
};

const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Group3 = styled.div`
  width: 284px;
  gap: 67px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 12.5px 0px;
`;
const Group4 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image1 = styled.img`
  width: 25px;
  height: 25px;
`;
const Text2 = styled.div`
  width: 54px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text3 = styled.div`
  width: 96px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
`;
const Image3 = styled.img`
  width: 284px;
  height: 1px;
  margin: 0px 0px 13.5px 0px;
`;
const Paragraph = styled.div`
  width: 245px;
  height: 48px;
  margin: 0px 0px 0px 1px;
  color: #afafaf;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
`;
const ReadMoreButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 5px 0px 178px;
`;
const Text4 = styled.div`
  width: 87px;
  height: 24px;
  left: 185px;
  top: 2px;
  position: absolute;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  z-index: 100;
    &:hover {
      color: ${colors.secondaryBackgroundLight};
  }
`;
const Element1 = styled.div`
  width: 100px;
  height: 30px;
  position: relative;
  border-width: 1px;
  border-radius: 41px;
  border-style: dashed;
  border-color: #ffffff;
`;
const IstockphotoxRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://file.rendit.io/n/G8BYVKpVzo7V4YIou9BS.jpg");
`;
const MidnightBlueFlexColumn = styled.div`
  width: 100%;
  gap: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background-color: rgba(15, 5, 65, 0.7);
`;
const PurpleHeartFlexColumn = styled.div`
  padding: 14px 46px;
  border-radius: 18px;
  background-color: rgba(154, 24, 215, 0.31);

  @media (max-width: 700px) {
    padding: 14px 20px;
  }
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 8px;

  @media (max-width: 700px) {
    letter-spacing: 2px;
    font-size: 40px;
  }

  @media (max-width: 400px) {
    letter-spacing: 2px;
    font-size: 30px;
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }

`;
const RoyalPurpleFlexColumn = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 29px 0px 0px;
  padding: 19px 9px 21px 9px;
  border-radius: 6px;
  background-color: #320651;
  box-shadow: 2px 4px 4px 1px rgba(14, 14, 15, 0.25);
`;