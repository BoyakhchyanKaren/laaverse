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
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  padding: 37px 38px 38px 34px;
  background-color: #2b032a;
  overflow: hidden;
`;
const BlackFlexRow = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #06021a;
  overflow: hidden;
`;
const Image1 = styled.img`
  width: 89.5px;
  height: 127px;
  margin: 0px 226px 0px 0px;
`;
const FlexColumn = styled.div`
  width: 600px;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 242px 0px 0px;
  padding: 63.5px 0px 83.5px 0px;
`;
const Text1 = styled.div`
  width: 354px;
  height: 96px;
  align-self: flex-end;
  margin: 0px 106px 33px 0px;
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 2.24px;
`;
const Paragraph = styled.div`
  width: 567px;
  height: 24px;
  align-self: stretch;
  margin: 20px 0px 52px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.12px;
`;
const PurpleHeartFlexColumn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 39px;
  border-radius: 15px;
  background-color: #8005d7;
`;
const Text2 = styled.div`
  width: 135px;
  height: 27px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.36px;
`;
const Image2 = styled.img`
  width: 76px;
  height: 74px;
  align-self: flex-end;
`;
