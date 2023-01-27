import React from "react";
import styled from "styled-components";

export const TeamMembers = () => {
  return (
    <FrameRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/GyJIBsHdzTzYPye9Y2Es.svg`} />
      <FlexColumn>
        <Text1>Team Member</Text1>
      </FlexColumn>
      <Text2>Our Amazing Team Members</Text2>
      <Group3>
        <RoyalPurpleFlexColumn>
          <Images1 src={`https://file.rendit.io/n/dqWttbzNSppPTjpye4bX.png`} />
        </RoyalPurpleFlexColumn>
        <RoyalPurpleFlexColumn>
          <Images1 src={`https://file.rendit.io/n/1sagcYKl1KtrLxMUGMjH.png`} />
        </RoyalPurpleFlexColumn>
        <RoyalPurpleFlexColumn>
          <Images1 src={`https://file.rendit.io/n/E4akVpseI5kLebeHbdXb.png`} />
        </RoyalPurpleFlexColumn>
      </Group3>
      <Group4>
        <Text3>Ralph Edwards</Text3>
        <Text4>Jenny Wilson</Text4>
        <Text5>John Wilson</Text5>
      </Group4>
      <Group5>
        <Text6>Project Manager</Text6>
        <Text7>Designer</Text7>
        <Text8>Developer</Text8>
      </Group5>
      <Group6>
        <Group>
          {[
            {
              src: `https://file.rendit.io/n/97XGhAUVE5L1xJSpHtoh.svg`,
            },
            {
              src: `https://file.rendit.io/n/gt2uzN4x8b0D0BrsTuIa.svg`,
            },
            {
              src: `https://file.rendit.io/n/RnsDWKAM0RTHyC6dhEKd.svg`,
            },
          ].map((data) => (
            <Image3 src={data.src} />
          ))}
        </Group>
        <Group>
          {[
            {
              src: `https://file.rendit.io/n/97XGhAUVE5L1xJSpHtoh.svg`,
            },
            {
              src: `https://file.rendit.io/n/gt2uzN4x8b0D0BrsTuIa.svg`,
            },
            {
              src: `https://file.rendit.io/n/RnsDWKAM0RTHyC6dhEKd.svg`,
            },
          ].map((data) => (
            <Image3 src={data.src} />
          ))}
        </Group>
        <Group>
          {[
            {
              src: `https://file.rendit.io/n/97XGhAUVE5L1xJSpHtoh.svg`,
            },
            {
              src: `https://file.rendit.io/n/gt2uzN4x8b0D0BrsTuIa.svg`,
            },
            {
              src: `https://file.rendit.io/n/RnsDWKAM0RTHyC6dhEKd.svg`,
            },
          ].map((data) => (
            <Image3 src={data.src} />
          ))}
        </Group>
      </Group6>
    </FrameRootRootRoot>
  );
};

const RoyalPurpleFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 23px 26px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #2b032a;
  background-color: rgba(78, 33, 113, 0.33);
`;
const Images1 = styled.img`
  width: 280px;
  height: 288px;
`;
const Group = styled.div`
  width: 115px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Image3 = styled.img`
  width: 33px;
  height: 33px;
`;
const FrameRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #2b032a;
  overflow: hidden;
  padding-bottom: 50px;
`;
const Image1 = styled.img`
  width: 100%;
  height: 3px;
  margin: 0px 0px 50px 0px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: flex-start;
  padding: 11px 31px;
  border-width: 1px;
  border-radius: 41px;
  border-style: solid;
  border-color: #2b032a;
  background-image: linear-gradient(
    270deg,
    rgba(154, 24, 215, 0.5) -16%,
    rgba(255, 255, 255, 0.5) 180%
  );
`;
const Text1 = styled.div`
  width: 118px;
  height: 24px;
  color: #2b032a;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text2 = styled.div`
  height: 45px;
  display: flex;
  align-self: center;
  margin: 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 4.5px;
`;
const Group3 = styled.div`
  width: 1052px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 25px 0px;
`;
const Group4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center,
  align-items: center;
  margin-left: 320px;
`;
const Text3 = styled.div`
  width: 153px;
  height: 30px;
  margin: 0px 213px 0px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 138px;
  height: 30px;
  margin: 0px 227px 0px 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text5 = styled.div`
  width: 126px;
  height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Group5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 20px 330px;
`;
const Text6 = styled.div`
  width: 133px;
  height: 24px;
  margin: 0px 256px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text7 = styled.div`
  width: 72px;
  height: 24px;
  margin: 0px 282px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Text8 = styled.div`
  width: 82px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const Group6 = styled.div`
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`;
