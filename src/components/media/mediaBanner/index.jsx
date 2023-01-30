import React from "react";
import styled from "styled-components";

export const MediaBanner = () => {
  return (
    <RootRootRootRoot>
      <Scifi>
        <Text1>MEDIA LIST</Text1>
      </Scifi>
      <BurntOrangeRectangle />
    </RootRootRootRoot>
  );
};

const RootRootRootRoot = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
`;
const Scifi = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 164px 513px 164px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/u5969FY5G9mzX1sg35mZ.jpg");
`;
const Text1 = styled.div`
  width: 100%;
  height: 74px;
  color: #ffffff;
  font-size: 49px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.98px;
`;
const BurntOrangeRectangle = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  background-color: rgba(202, 100, 43, 0.4);
`;
