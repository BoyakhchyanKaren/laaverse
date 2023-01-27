import React from "react";
import styled from "styled-components";

export const NftBanner = () => {
  return (
    <RootRootRootRoot>
      <RoyalPurpleFlexColumn>
        <FlexRow>
          <Group6>
            <Group7>
              <Text1>
                Buy
                {"  "}
                and
                {"  "}
                Sell
                {"  "}
                <br />
                Digital art <br />
                <Text2>NFT</Text2>
                <Text3> </Text3>
                <Text4>collection</Text4>
              </Text1>
              <Paragraph>
                Everything you need to build, host, scale amazing
                <br />
                dapps free by creating account today
              </Paragraph>
            </Group7>
            <GetStartedButton>
              <Text5>Let’s Get Started</Text5>
              <Image1
                src={`https://file.rendit.io/n/AMBIC2P5VGnKETp1zUGK.svg`}
              />
            </GetStartedButton>
          </Group6>
          <Image2 src={`https://file.rendit.io/n/eb4rTsVH1b5zyMsE9Ofh.png`} />
        </FlexRow>
      </RoyalPurpleFlexColumn>
      <Ellipse src={`https://file.rendit.io/n/xwrPPCxG0s3wmDudsXRC.svg`} />
    </RootRootRootRoot>
  );
};

const RootRootRootRoot = styled.div`
  width: 100%;
  height: 917px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #0a0427;
`;
const RoyalPurpleFlexColumn = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(59, 0, 101, 0.53);
`;
const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 210px 69px 0px 51px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/xzYqtGLwimk99c5gkGxx.png");
`;
const Group6 = styled.div`
  height: 635px;
  gap: 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 27px 0px;
`;
const Group7 = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text1 = styled.div`
  width: 560px;
  height: 351px;
  color: #ffffff;
  font-size: 78px;
  font-weight: 700;
  font-family: Poppins;
`;
const Text2 = styled.div`
  display: contents;
  color: #e867ff;
  font-size: 78px;
  font-weight: 700;
  font-family: Poppins;
`;
const Text3 = styled.div`
  display: contents;
  color: #9731e0;
  font-size: 78px;
  font-weight: 700;
  font-family: Poppins;
`;
const Text4 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 78px;
  font-weight: 700;
  font-family: Poppins;
`;
const Paragraph = styled.div`
  width: 500px;
  height: 60px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
`;
const GetStartedButton = styled.button`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 17px 26px;
  border-radius: 45px;
  background-image: linear-gradient(90deg, #9061f4 -15%, #c30ff1 121%);
  z-index: 20;
`;
const Text5 = styled.div`
  width: 152px;
  height: 27px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 27.279998779296875px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.2px;
`;
const Image1 = styled.img`
  width: 33px;
  height: 11.5px;
  margin: 7.73px 0px 0px 0px;
`;
const Image2 = styled.img`
  width: 466px;
  height: 689px;
`;
const Ellipse = styled.img`
  width: 1280px;
  height: 917px;
  left: 0px;
  top: 0px;
  position: absolute;
`;
