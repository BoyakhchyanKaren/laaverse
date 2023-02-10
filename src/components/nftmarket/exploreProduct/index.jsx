import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";
import { TopCollectionItems } from '../topcollection';

export const ExploreProduct = () => {
  return (
    <RootRootRootRoot>
      <RectangleRootRootRoot>
        <Animate.FadeUp><Text1>Explore Product</Text1></Animate.FadeUp>
      </RectangleRootRootRoot>
      <TopCollectionItems />
      <TopCollectionItems />
    </RootRootRootRoot>
  )
};


const RootRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 25px;
  background-color: #06021A;
  overflow: hidden;
`;

const RectangleRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.9px 32.9px 9.9px 33.9px;
  border-width: 0.1px;
  border-radius: 17px;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(
    270deg,
    rgba(154, 24, 215, 0.5) -16%,
    rgba(255, 255, 255, 0.5) 180%
  );
`;
const Text1 = styled.div`
  width: 100%;
  height: 45px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
`;
