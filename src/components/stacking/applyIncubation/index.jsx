import React from "react";
import styled from "styled-components";

export const ApplyIncubation = () => {
  return (
    <FrameRootRootRoot>
      <BlackFlexRow>
        <Image1 src={`https://file.rendit.io/n/FWpF9deVUKxvsF56AXO0.svg`} />
        <FlexColumn>
          <Text1>
            APPLY FOR PROJECT
            <br />
            INCUBATION{" "}
          </Text1>
          <Paragraph>
            If you want to lanuch an IGO/IDO, It will be your perfect choice
          </Paragraph>
          <PurpleHeartFlexColumn>
            <Text2>APPLY FOR IGO</Text2>
          </PurpleHeartFlexColumn>
        </FlexColumn>
        <Image2 src={`https://file.rendit.io/n/vTXXdCInuuHoO01kR0XD.svg`} />
      </BlackFlexRow>
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  padding: 37px 38px 38px 34px;
  background-color: #2b032a;
  overflow: hidden;
`;
const BlackFlexRow = styled.div`
  display: flex;
  background-color: #06021a;
`;
const Image1 = styled.img`
  height: 200px;

   @media (max-width: 700px) {
      height: 70px;
  }
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    align-items: center;
    gap: 40px;
  }
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 2.24px;
  @media (max-width: 700px) {
  font-size: 18px;
  }
`;
const Paragraph = styled.div`
  margin: 20px 0px 52px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.12px;

  @media (max-width: 800px) {
    display: none;
  }
`;
const PurpleHeartFlexColumn = styled.button`
  display: flex;
  padding: 20px;
  border-radius: 15px;
  background-color: #8005d7;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.36px;

  @media (max-width: 700px) {
       font-size: 15px;
  }
`;
const Image2 = styled.img`
  height: 120px;
  align-self: flex-end;

   @media (max-width: 700px) {
      height: 50px;
  }
`;
