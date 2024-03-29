import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";
import { colors } from "constants/colors";
import './style.css';

export const TopCollectionItems = () => {
  return (
    <div className="top-collection-items" style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
    }}>
      {[1, 2, 3, 4].map((key, index) => {
        return (
          <Animate.FadeUp key={`${key}-${index}`}>
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
                <button>
                  <Image2 src={`https://file.rendit.io/n/PnkkUXhoDFcxgSpoAmxS.svg`} />
                </button>
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
                  <button>
                    <Image4 src={`https://file.rendit.io/n/IoKejSjojfKF2dfETYwM.svg`} />
                  </button>
                  <Text5>50</Text5>
                </Group5>
              </Group2>
            </RoyalPurpleFlexColumn1>
          </Animate.FadeUp>
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
        alignSelf: 'center',
      }}>
        <Text1>
          <Animate.FadeUp>
            Top Collection
          </Animate.FadeUp>
        </Text1>
      </div>
      <div className="top-collection-wrapper" style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '25px',
      }}>
        {[1, 2, 3, 4].map(() => {
          return (
            <Animate.FadeUp>
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
                  <button>
                    <Image2 src={`https://file.rendit.io/n/PnkkUXhoDFcxgSpoAmxS.svg`} />
                  </button>
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
                    <button>
                      <Image4 src={`https://file.rendit.io/n/IoKejSjojfKF2dfETYwM.svg`} />
                    </button>
                    <Text5>50</Text5>
                  </Group5>
                </Group2>
              </RoyalPurpleFlexColumn1>
            </Animate.FadeUp>
          )
        })}
      </div>
    </RootRootRootRoot>
  );
};

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Group4 = styled.button`
  width: 116px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 20;
`;
const Text4 = styled.button`
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
  z-index: 100;
  &:hover {
    color: ${colors.secondaryBackgroundLight};
  }
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
  justify-content: center;
  align-items: center;
  padding: 5px 0px 8px 0px;
`;
const Image4 = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 12px;
  border-radius: 8px;
  background-color: #320651;

  @media (max-width: 500px) {
    width: 400px;
  }
`;
const RootRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  background-color: #06021A;
  overflow: hidden;
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
