import { Animate } from "components/global/animation";
import React from "react";
import styled from "styled-components";

export const MediaBanner = () => {
  return (
    <RootRootRootRoot>
      <Scifi>
        <Text1><Animate.FadeUp>MEDIA LIST</Animate.FadeUp></Text1>
      </Scifi>
      <BurntOrangeRectangle />
    </RootRootRootRoot>
  );
};

const RootRootRootRoot = styled.div`
`;
const Scifi = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 120px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/u5969FY5G9mzX1sg35mZ.jpg");

  @media (max-width: 700px) {
    padding: 30px;
  }
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 50px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 700px) {
    margin-bottom: 70px;
    font-size: 40px;
  }
`;
const BurntOrangeRectangle = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  background-color: rgba(202, 100, 43, 0.4);
`;
