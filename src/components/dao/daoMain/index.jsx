import React from "react";
import styled from "styled-components";
import './style.css';

export const DaoMain = () => {
  return (
    <FrameRootRootRoot>
      <RoyalPurpleFlexRow>
        <BlackFlexColumn>
          <Image1 src={`https://file.rendit.io/n/azQQ84hEiPidbZbM2c79.png`} />
        </BlackFlexColumn>
        <BlackFlexColumn1>
          <Group1>
            <Group2>
              <Image7
                src={`https://file.rendit.io/n/6BltUXCyYD1rJM5i3sZY.svg`}
              />
              <Text1>Xlaaverse</Text1>
            </Group2>
            <Balance3>
              Balance<Balance> : 0</Balance>
            </Balance3>
          </Group1>
          <ShockingPinkFlexRow>
            <input
              placeholder="Please input amount"
              type="number"
              className="amount-input"
            />
            <RoyalPurpleFlexColumn>
              <Text2>MAX</Text2>
            </RoyalPurpleFlexColumn>
          </ShockingPinkFlexRow>
          <Group1>
            <Group2>
              <Image7
                src={`https://file.rendit.io/n/6BltUXCyYD1rJM5i3sZY.svg`}
              />
              <Text1>Xlaaverse</Text1>
            </Group2>
            <Balance3>
              Balance<Balance> : 0.0000</Balance>
            </Balance3>
          </Group1>
          <ShockingPinkFlexRow>
            <input
              placeholder="0"
              type="number"
              className="amount-input"
            />
          </ShockingPinkFlexRow>
          <PurpleHeartFlexColumn>
            <FlexColumn>
              <Text5>Swap</Text5>
            </FlexColumn>
          </PurpleHeartFlexColumn>
        </BlackFlexColumn1>
      </RoyalPurpleFlexRow>
    </FrameRootRootRoot>
  );
};

const Group2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 1.28px;
  margin-left: 10px;
`;
const Balance = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  letter-spacing: 1.28px;
`;
const FrameRootRootRoot = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #06021a;
`;
const RoyalPurpleFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 50px 18px;
  border-radius: 7px;
  background-color: #320750;
`;
const BlackFlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 6px;
  background-color: #06021a;
`;
const Image1 = styled.img`
  width: 100%;
  height: 100%;
`;
const BlackFlexColumn1 = styled.div`
  width: 450px;
  height: 440px;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #06021a;
`;
const ShockingPinkFlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-width: 3px;
  border-radius: 4px;
  border-style: solid;
  border-color: #9a18d7;
  background-color: #D67EFF
`;
const RoyalPurpleFlexColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px 17px 5px 18px;
  border-radius: 6px;
  background-color: #320651;
`;
const Text2 = styled.div`
  width: 40px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.28px;
`;
const Group1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image7 = styled.img`
  width: 25px;
  height: 25px;
`;
const Balance3 = styled.div`
  color: rgba(255, 255, 255, 0.58);
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.28px;
`;
const PurpleHeartFlexColumn = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(141, 22, 193, 0.69);
`;
const FlexColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7.47px 27.4px 7.54px 26px;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
const Text5 = styled.div`
  width: 74px;
  height: 25px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  letter-spacing: -0.32px;
`;
