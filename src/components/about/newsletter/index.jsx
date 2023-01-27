import React from "react";
import styled from "styled-components";

export default ({ }) => {
    return (
        <FrameRootRootRoot>
            <Text1>Get Newsletter</Text1>
            <Text2>Get udpated with news, tips & tricks</Text2>
            <MidnightBlueFlexColumn>
                <Text3>your email</Text3>
            </MidnightBlueFlexColumn>
            <BlackFlexColumn>
                <FlexColumn>
                    <Text4>Subscribe</Text4>
                </FlexColumn>
            </BlackFlexColumn>
            <Image1 src={`https://file.rendit.io/n/XwxopXdjqhka24dHB9AS.svg`} />
        </FrameRootRootRoot>
    );
};

const FrameRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #2b032a;
  overflow: hidden;
  padding-top:10px;
  padding-left: 225px;
`;
const Text1 = styled.div`
  width: 330px;
  height: 59.4px;
  margin: 0px 0px 23.7px 366px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 4.5px;
  text-transform: capitalize;
`;
const Text2 = styled.div`
  width: 344px;
  height: 31.7px;
  margin: 0px 0px 51.4px 359px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  text-transform: capitalize;
`;
const MidnightBlueFlexColumn = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 76.5px 275px;
  padding: 18.8px 396px 20.1px 26.7px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(33, 12, 56, 0.33);
`;
const Text3 = styled.div`
  width: 87.6px;
  height: 27.7px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
`;
const BlackFlexColumn = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 40px 460px;
  padding: 9.55px 5.92px 9.55px 7.07px;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #ffffff;
  background-color: rgba(15, 5, 36, 0.33);
`;
const FlexColumn = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0px 5px 5px 5px;
  align-items: center;
  border-radius: 8px;
  background-image: linear-gradient(90deg, #8404e2 -7%, #610b90 143%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
`;
const Text4 = styled.div`
  width: 100px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
`;
const Image1 = styled.img`
  width: 1077px;
  height: 1.5px;
`;
