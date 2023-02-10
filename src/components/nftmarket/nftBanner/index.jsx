import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";

export const NftBanner = () => {
  return (
    <RootRootRootRoot>
      <FlexRow>
        <Group6>
          <Group7>
            <Text1>
              <Animate.FadeUp>
                Buy
                {"  "}
                and
                {"  "}
                Sell
                {"  "}
                <br />
                Digital art <br />
              </Animate.FadeUp>
              <Animate.FadeUp>
                <Text2>NFT</Text2>
                <Text3> </Text3>
                <Text4>collection</Text4>
              </Animate.FadeUp>
            </Text1>
            <Paragraph>
              <Animate.FadeUp>
                Everything you need to build, host, scale amazing
                <br />
                dapps free by creating account today
              </Animate.FadeUp>
            </Paragraph>
          </Group7>
          <GetStartedButton>
            <Text5>
              <Animate.ScaleIn>
                Let’s Get Started
              </Animate.ScaleIn>
            </Text5>
            <Image1
              src={`https://file.rendit.io/n/AMBIC2P5VGnKETp1zUGK.svg`}
            />
          </GetStartedButton>
        </Group6>
        <Image2 src={`https://file.rendit.io/n/eb4rTsVH1b5zyMsE9Ofh.png`} />
      </FlexRow>
    </RootRootRootRoot >
  );
};

const RootRootRootRoot = styled.div`
  background-color: #0a0427;
  background-color: rgba(59, 0, 101, 0.53);
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 50px;
  background-image: url("https://file.rendit.io/n/xzYqtGLwimk99c5gkGxx.png");
`;
const Group6 = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 0  0 150px;
  align-items: flex-start;
  @media (max-width: 600px){
    padding: 0;
  }
`;
const Group7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text1 = styled.div`
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
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
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
  padding-right: 100px;
  @media (max-width: 1024px) {
    display: none;
  } 
`;
