import React from "react";
import styled from "styled-components";

export const DaoBanner = () => {
  return (
    <FrameRootRootRoot>
      <PurpleHeartFlexColumn>
        <Text1>DAO</Text1>
      </PurpleHeartFlexColumn>
    </FrameRootRootRoot>
  );
};

const FrameRootRootRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 88px 434px 68px 434px;
  background-color: #06021a;
  overflow: hidden;
`;
const PurpleHeartFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 100px;
  border-radius: 8px;
  background-color: rgba(128, 5, 215, 0.88);
`;
const Text1 = styled.div`
  width: 100%;
  height: 60px;
  color: #ffffff;
  font-size: 38px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
