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
        {[1, 2, 3].map(() => {
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}>
              <RoyalPurpleFlexColumn>
                <Images1 src={`https://file.rendit.io/n/dqWttbzNSppPTjpye4bX.png`} />
              </RoyalPurpleFlexColumn>
              <Text3>Ralph Edwards</Text3>
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
            </div>
          )
        })}
      </Group3>
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
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-self: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
const Text3 = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;