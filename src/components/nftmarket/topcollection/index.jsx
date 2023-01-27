import React from "react";
import styled from "styled-components";

export const TopCollectionItems = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '50px'
    }}>
      {[1, 2, 3, 4].map(() => {
        return (
          <RoyalPurpleFlexColumn1>
            <Group>
              <Group3>
                <Ellipse>
                  <Image1
                    src={`https://file.rendit.io/n/iHrPlz8zRxuCVU6TK0vp.png`}
                  />
                </Ellipse>
                <ByJonson1>
                  By<ByJonson> Jonson</ByJonson>
                </ByJonson1>
              </Group3>
              <Image2 src={`https://file.rendit.io/n/PnkkUXhoDFcxgSpoAmxS.svg`} />
            </Group>
            <Images1 src={`https://file.rendit.io/n/0AcxzlyKsRhH8x7Vpk4r.png`} />
            <Group1>
              <Text2>NFT Collection</Text2>
              <Text3>5.4 ETH</Text3>
            </Group1>
            <Image3 src={`https://file.rendit.io/n/eDbPbJTIE5KlhF2Yp0zj.svg`} />
            <Group2>
              <Group4>
                <Text4>Place Bid</Text4>
                <Element4 />
              </Group4>
              <Group5>
                <Image4 src={`https://file.rendit.io/n/IoKejSjojfKF2dfETYwM.svg`} />
                <Text5>50</Text5>
              </Group5>
            </Group2>
          </RoyalPurpleFlexColumn1>
        )
      })}
    </div>
  )
}

export const TopCollection = () => {
  return (
    <RootRootRootRoot>
      <div style={{
        display: 'flex',
        alignSelf: 'flex-start'
      }}>
        <Text1 style={{
          marginLeft: '60px'
        }}>Top Collection</Text1>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '50px'
      }}>
        {[1, 2, 3, 4].map(() => {
          return (
            <RoyalPurpleFlexColumn1>
              <Group>
                <Group3>
                  <Ellipse>
                    <Image1
                      src={`https://file.rendit.io/n/iHrPlz8zRxuCVU6TK0vp.png`}
                    />
                  </Ellipse>
                  <ByJonson1>
                    By<ByJonson> Jonson</ByJonson>
                  </ByJonson1>
                </Group3>
                <Image2 src={`https://file.rendit.io/n/PnkkUXhoDFcxgSpoAmxS.svg`} />
              </Group>
              <Images1 src={`https://file.rendit.io/n/0AcxzlyKsRhH8x7Vpk4r.png`} />
              <Group1>
                <Text2>NFT Collection</Text2>
                <Text3>5.4 ETH</Text3>
              </Group1>
              <Image3 src={`https://file.rendit.io/n/eDbPbJTIE5KlhF2Yp0zj.svg`} />
              <Group2>
                <Group4>
                  <Text4>Place Bid</Text4>
                  <Element4 />
                </Group4>
                <Group5>
                  <Image4 src={`https://file.rendit.io/n/IoKejSjojfKF2dfETYwM.svg`} />
                  <Text5>50</Text5>
                </Group5>
              </Group2>
            </RoyalPurpleFlexColumn1>
          )
        })}
      </div>
    </RootRootRootRoot>
  );
};

const Group = styled.div`
  width: 256px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 17px 0px;
`;
const Group3 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Ellipse = styled.div`
  height: 19.8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 1px 0px 0px 0px;
  padding: 0.58px 0.58px 0.58px 1.17px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/6tH6xODTpacJQob0gHzg.svg");
`;
const Image1 = styled.img`
  width: 19.3px;
  height: 19.3px;
`;
const ByJonson1 = styled.div`
  width: 85px;
  height: 23px;
  color: #d57eff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
`;
const ByJonson = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
`;
const Image2 = styled.img`
  width: 28px;
  height: 8px;
  margin: 7px 0px 0px 0px;
`;
const Images1 = styled.img`
  width: 256px;
  height: 256px;
  margin: 0px 0px 17px 0px;
`;
const Group1 = styled.div`
  gap: 79px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 10.5px 0px;
`;
const Text2 = styled.div`
  width: 118px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text3 = styled.div`
  width: 59px;
  height: 24px;
  color: #d67eff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Image3 = styled.img`
  width: 256px;
  height: 1px;
  margin: 0px 0px 18.5px 0px;
`;
const Group2 = styled.div`
  width: 256px;
  gap: 89px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Group4 = styled.div`
  width: 116px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text4 = styled.div`
  width: 74px;
  height: 24px;
  left: 21px;
  top: 5px;
  position: absolute;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Element4 = styled.div`
  width: 114px;
  height: 32px;
  position: relative;
  border-width: 1px;
  border-radius: 41px;
  border-style: dashed;
  border-color: #ffffff;
`;
const Group5 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px 0px 8px 0px;
`;
const Image4 = styled.img`
  width: 19px;
  height: 16px;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
`;
const Text5 = styled.div`
  width: 21px;
  height: 21px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
`;
const RoyalPurpleFlexColumn1 = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 23px 0px 0px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #320651;
`;
const RootRootRootRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  background-color: #06021A;
`;
const Text1 = styled.div`
  width: 175px;
  height: 39px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
