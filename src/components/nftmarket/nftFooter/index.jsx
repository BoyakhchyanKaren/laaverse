import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";

export const NftFooter = () => {
  return (
    <RootRootRootRoot>
      <Animate.FadeUp>
        <BlackFlexRow>
          <Group>
            <Ellipse>
              <Image1 src={`https://file.rendit.io/n/Y8QFY9DtVIk9OYHWQXVd.svg`} />
            </Ellipse>
            <Group1>
              <Text1>Free</Text1>
              <Text2>Only two download</Text2>
            </Group1>
          </Group>
          <Image2 src={`https://file.rendit.io/n/ZGGKMizbyYBYU9Nzzbiz.svg`} />
        </BlackFlexRow>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <BlackFlexRow>
          <Group>
            <Ellipse>
              <Image1 src={`https://file.rendit.io/n/bCC3KdK0RcNFcvGYjb6T.svg`} />
            </Ellipse>
            <Group1>
              <Text1>Unlimited</Text1>
              <Text2>Personal & commercial use</Text2>
            </Group1>
          </Group>
          <Image2 src={`https://file.rendit.io/n/g5x5WMtFoYf8ZLXoZk2L.svg`} />
        </BlackFlexRow>
      </Animate.FadeUp>

      <Animate.FadeUp>
        <BlackFlexRow>
          <Group>
            <Ellipse>
              <Image1 src={`https://file.rendit.io/n/PKooeQLtsqtinOOsBfsX.svg`} />
            </Ellipse>
            <Group1>
              <Text1>Support</Text1>
              <Text2>You can download</Text2>
            </Group1>
          </Group>
          <Image2 src={`https://file.rendit.io/n/tMZGk1NVQdJOgMpG40mk.svg`} />
        </BlackFlexRow>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <BlackFlexRow>
          <Group>
            <Ellipse>
              <Image1 src={`https://file.rendit.io/n/PXikqfRyEK77AROoysGq.svg`} />
            </Ellipse>
            <Group1>
              <Text1>Private</Text1>
              <Text2>Personal data collection</Text2>
            </Group1>
          </Group>
          <Image2 src={`https://file.rendit.io/n/A8OlgZHOPCIJo61JsuhM.svg`} />
        </BlackFlexRow>
      </Animate.FadeUp>
    </RootRootRootRoot>
  );
};

const Group = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Group1 = styled.div`
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const RootRootRootRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-color: #06021A;
  padding: 50px 150px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justifi-content: center;
    gap: 20px;
    margin-right: 30px;
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justifi-content: center;
    padding: 10px 0;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 20px;
  }

`;
const BlackFlexRow = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  background-color: #1d1933;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.25);
`;
const Ellipse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 21px 18px 20px 19px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/AxEQ5ma6PZoY8BjkTves.svg");
`;
const Image1 = styled.img`
  width: 44px;
  height: 40px;
`;
const Text1 = styled.div`
  width: 56px;
  height: 38px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
const Text2 = styled.div`
  width: 155px;
  height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
`;
const Image2 = styled.img`
  width: 60px;
  height: 60px;
  margin: 4px 10px 0px 0px;
`;