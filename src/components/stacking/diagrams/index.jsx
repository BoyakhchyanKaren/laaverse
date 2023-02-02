import React from "react";
import styled from "styled-components";
import { DiagramFlex } from "./diagram";
import './style.css';

export const Diagrams = () => {
  return (
    <RootRootRootRoot>

      <RoyalPurpleFlexColumn>
        <Text1>Participat IGO Stake</Text1>
        <Text2>256.50 BUSD</Text2>
        <div className="total-stake-wrapper">
          <Text3>Total Stake</Text3>
          <input
            className="total-stake-input"
            type="number"
          />
        </div>
        <Group>
          <DaysButton>
            <DaysText>7 Days</DaysText>
            <Element1 />
          </DaysButton>
          <DaysButton>
            <DaysText>14 Days</DaysText>
            <Element1 />
          </DaysButton>
          <DaysButton>
            <DaysText>30 Days</DaysText>
            <Element1 />
          </DaysButton>
          <Days60ButtonWrapper>
            <Days60>60 Days</Days60>
          </Days60ButtonWrapper>
        </Group>
        <Group1>
          <Text8>Lock period : 60 days</Text8>
          <APYRate>APY Rate </APYRate>
        </Group1>
        <Group2>
          <Text9>
            Re - locks on registration :{"  "}
            Yes
          </Text9>
          <Text10>35%</Text10>
        </Group2>
        <Group3>
          <Text11>Early unstake fee : 25%</Text11>
          <Text12>*APY is dynamic</Text12>
        </Group3>
        <Text13>Status : Unlocked</Text13>
        <Text14>Balance: 2889.00 BUSD</Text14>
        <Group4>
          <FlexRow5>
            <input
              className="apporve-input"
              placeholder="00.00"
              type="number"
            />
            <Text16>MAX</Text16>
          </FlexRow5>
          <FlexColumn3>
            <Text17>APPROVE</Text17>
          </FlexColumn3>
        </Group4>
        <Text18>Staked : 256.50 BUSD</Text18>
        <Group5>
          <FlexRow5>
            <input
              className="withdraw-input"
              placeholder="00.0"
              type="number"
            />
            <Text16>MAX</Text16>
          </FlexRow5>
          <FlexColumn4>
            <Text21>WITHDRAW</Text21>
          </FlexColumn4>
        </Group5>
      </RoyalPurpleFlexColumn>

      <DiagramsContainer>
        <RoyalPurpleFlexRow>
          <Group9>
            <Group19>
              <Text22>$7,868,163.54</Text22>
              <Text23>Total Value Locked</Text23>
            </Group19>
            <DiagramFlex />
          </Group9>
        </RoyalPurpleFlexRow>
        <RoyalPurpleFlexRow>
          <Group9>
            <Group19>
              <Text22>158.50%</Text22>
              <Text23>Apy</Text23>
            </Group19>
            <DiagramFlex />
          </Group9>
        </RoyalPurpleFlexRow>
        <RoyalPurpleFlexRow>
          <Group9>
            <Group19>
              <Text22>5699</Text22>
              <Text23>Number of Stakers</Text23>
            </Group19>
            <DiagramFlex />
          </Group9>
        </RoyalPurpleFlexRow>
      </DiagramsContainer>

    </RootRootRootRoot>
  );
};

const DaysButton = styled.button`
  position: relative;
  display: flex;
`;
const Element1 = styled.div`
  width: 117px;
  height: 66px;
  position: relative;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
`;
const FlexRow5 = styled.div`
  width: 239px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 21px 18px 21px 15px;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #ffffff;
`;
const Text16 = styled.div`
  width: 39px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.16px;
`;
const RootRootRootRoot = styled.div`
  background-color: #06021A;  
  padding: 20px 0 50px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  overflow: hidden;

  
  @media (max-width: 600px) {
    padding: 0;
  }
`;
const RoyalPurpleFlexColumn = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 36px 42px;
  border-radius: 18px;
  background-color: #320750;

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 550px) {
    width: 350px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
const Text1 = styled.div`
  margin: 0px 0px 25px 0px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
const Text2 = styled.div`
  margin-bottom: 25px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
const Text3 = styled.div`
  margin: 0px 0px 17px 0px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  font-family: Poppins;
  white-space: nowrap;
`;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 600px) {
   flex-direction: column;
   margin-left: 100px;
  }

  @media (max-width: 600px) {
   flex-direction: column;
   margin-left: 60px;
  }
`;
const DaysText = styled.div`
  left: 26px;
  top: 19px;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Days60ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
  border-radius: 5px;
  background-color: #980ff8;
`;
const Days60 = styled.div`
  width: 80px;
  height: 30px;
  color: #e0a9f9;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Group1 = styled.div`
  width: 541px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 18px 0px;
  padding: 0px 6px 0px 0px;
`;
const Text8 = styled.div`
  width: 215px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const APYRate = styled.div`
  width: 90px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  letter-spacing: 0.2px;
`;
const Group2 = styled.div`
  width: 545px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 19px 0px;
  padding: 0px 2px 0px 0px;
`;
const Text9 = styled.div`
  width: 314px;
  height: 30px;
  align-self: flex-end;
  margin: 0px 0px 8px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  letter-spacing: 0.2px;
`;
const Text10 = styled.div`
  width: 67px;
  height: 47px;
  color: #d897f7;
  font-size: 31px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.31px;
`;
const Group3 = styled.div`
  width: 545px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 27px 0px;
  padding: 0px 2px 0px 0px;
`;
const Text11 = styled.div`
  width: 232px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Text12 = styled.div`
  width: 167px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Text13 = styled.div`
  width: 177px;
  height: 30px;
  margin: 0px 0px 44px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Text14 = styled.div`
  width: 238px;
  height: 30px;
  margin: 0px 0px 21px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Group4 = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 39px 0px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const FlexColumn3 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 54px;
  border-radius: 13px;
  background-image: linear-gradient(90deg, #9d4df3 -17%, #b723f2 100%);
`;
const Text17 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text18 = styled.div`
  width: 218px;
  height: 30px;
  margin: 0px 0px 21px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
const Group5 = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: row;
    @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const FlexColumn4 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 54px;
  border-radius: 13px;
  background-image: linear-gradient(90deg, #6f2398 -17%, #814b9f 100%);
`;
const Text21 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.16px;
`;
const DiagramsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 50px;

   @media (max-width: 1000px) {
   display: none;
  }
`;
const RoyalPurpleFlexRow = styled.div`
  width: 494px;
  height: 181px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 36px 23px 41.4px 32px;
  border-radius: 28px;
  background-color: #320750;
`;
const Group9 = styled.div`
  height: 181px;
  display: flex;
`;
const Group19 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 9.3px 0px 0px;
`;
const Text22 = styled.div`
  width: 221px;
  height: 50px;
  color: #ffffff;
  font-size: 33px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: -0.66px;
`;
const Text23 = styled.div`
  width: 193px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  letter-spacing: 0.2px;
`;
